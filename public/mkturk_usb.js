var port = {}
var serial = {}


navigator.usb.addEventListener('connect', async function(device){
	if (typeof(port.connected) == 'undefined' || port.connected == false){
		var event = {}
		event.type = 'Reconnect'
		await findUSBDevice(event)
	}
});

navigator.usb.addEventListener('disconnect', device => {
  // USB device disconnected
  port.connected = false
  console.log("USB device disconnected")
});


// STEP 0: Port Initialization - Open (instantiate) port before assigning callbacks to it
async function findUSBDevice(event){

	// Auto-Select first port
	if (event.type == "AutoConnect" || 
		event.type == "Reconnect"){
		ports = await getPorts()
		if (ports.length == 0) {
			console.log('No device found on page load.');
		}
		else {
			if (event.type == "AutoConnect"){
				console.log('Successfully connected USB device on page load');				
			}
			else if (event.type == "Reconnect"){
				console.log('Successfully reconnected USB device upon detection');		
			}
			port = ports[0];
			await port.connect()
		}
	}

	// User connects to Port
	if (event.type == "touchend" || event.type == "mouseup"){
		event.preventDefault(); //prevents additional downstream call of click listener
		try{
		  // port = await requestPort()
			const filters = [
			  { 'vendorId': 0x2341, 'productId': 0x8036 },
			  { 'vendorId': 0x2341, 'productId': 0x8037 },
			  { 'vendorId': 0x2341, 'productId': 0x804d },
			  { 'vendorId': 0x2341, 'productId': 0x804e },
			  { 'vendorId': 0x2341, 'productId': 0x804f },
			  { 'vendorId': 0x2341, 'productId': 0x8050 },
			];

			device = await navigator.usb.requestDevice({ 'filters': filters })
			port = new serial.Port(device) //return port

		  await port.connect()
		}
		catch(error){
		  console.log(error);
		}
		waitforClick.next(1)	
	}
}

//STEP 1A: GetPorts - Automatic at initialization
// -Enumerate all attached devices
// -Check for permission based on vendorID & productID
async function getPorts(){
  devices = await navigator.usb.getDevices()
  return devices.map(device => new serial.Port(device)); //return port
};

//STEP 1B: RequestPorts - User based
// -Get device list based on Arduino filter
// -Look for user activation to select device
async function requestPort(){
  const filters = [
    { 'vendorId': 0x2341, 'productId': 0x8036 },
    { 'vendorId': 0x2341, 'productId': 0x8037 },
    { 'vendorId': 0x2341, 'productId': 0x804d },
    { 'vendorId': 0x2341, 'productId': 0x804e },
    { 'vendorId': 0x2341, 'productId': 0x804f },
    { 'vendorId': 0x2341, 'productId': 0x8050 },
  ];

  device = await navigator.usb.requestDevice({ 'filters': filters })
  return new serial.Port(device) //return port
}


//============= SERIAL OBJECT =====================//

//PORT - attach device(s)
serial.Port = function(device) {
  this.device_ = device;
};

//PORT - connect
serial.Port.prototype.connect = async function(){
  await this.device_.open()

  if (this.device_.configuration === null)
  {
    return this.device_.selectConfiguration(1);
  }

  await this.device_.claimInterface(2)
  await this.device_.selectAlternateInterface(2,0)
  await this.device_.controlTransferOut({
      'requestType': 'class',
      'recipient': 'interface',
      'request': 0x22, //vendor-specific request (i.e. enable channels)
      'value': 0x01, //requested channels
      'index': 0x02 //interface 2 is the recipient
    }) //send controlTransferOut to work with channels

  this.connected = true
  readLoop(this)
  pingUSB()
}


//PORT - readloop
async function readLoop(port){
  try{
    let result = await port.device_.transferIn(5, 128) //(endpoint#,length)->requesting a 64 byte buffer
    // serial.tread=performance.now()
    // serial.dt.push(performance.now()-serial.treadOld); //-serial.twrite)
    // serial.treadOld=performance.now()
    // var textstr = 'Serial roundtrip write->read << ' +
    //           Math.round(serial.tread - serial.twrite) + 'ms'
    // console.log(textstr)
    port.onReceive(result.data) //calls TextDecoder to parse data
    // slider_callback()
    readLoop(port)
  }
  catch(error){
    port.onReceiveError(error);
  }
}


serial.Port.prototype.onReceive = data => {
  let textDecoder = new TextDecoder();
  // console.log('Serial roundtrip write->read' + serial.dt[serial.dt.length-1])
  console.log(textDecoder.decode(data));
}

serial.Port.prototype.onReceiveError = error => {
  console.log(error);
};

serial.Port.prototype.writepumpdurationtoUSB = async function(data){
	let msgstr = "<" + data.toString() + ">" // start(<), end(>) characters
	let textEncoder = new TextEncoder();
	await this.device_.transferOut(4, textEncoder.encode(msgstr));
}

//PORT - send pump duration to arduino
serial.Port.prototype.writepumpdurationtoUSBBYTE = async function(data) {
  serial.twrite_pumpduration=performance.now()
  let view = new Uint16Array(1);
  view[0] = parseInt(data,10);
  view[0] = parseInt("5000",10);
  await this.device_.transferOut(4, view);
  console.log('wrote usb val for pump duration')
};

function pingUSB(){
  if (port.connected == true){
  	var pingdur = 100
	let msgstr = "<" + pingdur.toString() + ">" // start(<), end(>) characters
	let textEncoder = new TextEncoder();
	port.device_.transferOut(4, textEncoder.encode(msgstr))

    pingTimer = setTimeout(function(){
      clearTimeout(pingTimer)
      pingUSB()
    },5000)
  }
}


function pingUSBBYTE(){
  if (port.connected == true){

    let view = new Uint8Array(1);
    view[0] = parseInt("200",10);
    port.device_.transferOut(4,view)

    pingTimer = setTimeout(function(){
      clearTimeout(pingTimer)
      pingUSB()
    },3000)
  }
}

//PORT - disconnect
serial.Port.prototype.disconnect = async function() {
  await this.device_.controlTransferOut({
            'requestType': 'class',
            'recipient': 'interface',
            'request': 0x22,
            'value': 0x00,
            'index': 0x02
        })
  this.device_.close()
};