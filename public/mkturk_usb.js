var port={
  statustext_connect: "",
  statustext_sent: "",
  statustext_received: "",
}
var serial = {}

navigator.usb.addEventListener('connect', async function(device){
	if (typeof(port.connected) == 'undefined' || port.connected == false){
		port.statustext_connect = "ATTEMPTING TO RECONNECT USB DEVICE..."
		console.log(port.statustext_connect)
		updateHeadsUpDisplayDevices()

		var event = {}
		event.type = 'Reconnect'
		await findUSBDevice(event)
	}
});

navigator.usb.addEventListener('disconnect', device => {
  // USB device disconnected
	port.connected = false
	port.statustext_connect = "USB DEVICE DISCONNECTED"
	console.log(port.statustext_connect)
	updateHeadsUpDisplayDevices()
});

// STEP 0: Port Initialization - Open (instantiate) port before assigning callbacks to it
async function findUSBDevice(event){
	// STEP 1A: Auto-Select first port
	if (event.type == "AutoConnect" || 
		event.type == "Reconnect"){
// 		ports = await getPorts()
		//STEP 1A: GetPorts - Automatic at initialization
		// -Enumerate all attached devices
		// -Check for permission based on vendorID & productID
		devices = await navigator.usb.getDevices()
		ports = devices.map(device => new serial.Port(device)); //return port

		if (ports.length == 0) {
			port.statustext_connect = "NO USB DEVICE automatically found on page load"
			console.log(port.statustext_connect)
			updateHeadsUpDisplayDevices()
		}
		else {
			var statustext = ""
			if (event.type == "AutoConnect"){
				statustext = "AUTO-CONNECTED USB DEVICE ON PAGE LOAD!"
			}
			else if (event.type == "Reconnect"){
				statustext = "RECONNECTED USB DEVICE!"
			}
			port = ports[0];
			await port.connect()
			port.statustext_connect = statustext
			console.log(port.statustext_connect)
			updateHeadsUpDisplayDevices()
		}
	}

	// STEP 1B: User connects to Port
	if (event.type == "touchend" || event.type == "mouseup"){
		event.preventDefault(); //prevents additional downstream call of click listener
		try{
			//STEP 1B: RequestPorts - User based
			// -Get device list based on Arduino filter
			// -Look for user activation to select device
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

		  	port.statustext_connect = "USB DEVICE CONNECTED BY USER ACTION!"
		  	console.log(port.statustext_connect)
			updateHeadsUpDisplayDevices()
		}
		catch(error){
		  console.log(error);
		}
		waitforClick.next(1)
	}
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
  // pingUSB()
}

//PORT  - onReceive
serial.Port.prototype.onReceive = data => {
	let textDecoder = new TextDecoder();
	// console.log('Serial roundtrip write->read' + serial.dt[serial.dt.length-1])

	port.statustext_received = "RECEIVED CHAR <-- USB: " + textDecoder.decode(data)
	console.log(port.statustext_received)
	updateHeadsUpDisplayDevices()

	var tagstart = port.statustext_received.indexOf('{tag',0);
	if (tagstart > 0){
		var tagend = port.statustext_received.indexOf('}',0);
		TRIAL.RFIDTime[TRIAL.NRFID] = Math.round(performance.now());
		TRIAL.RFIDTrial[TRIAL.NRFID] = CURRTRIAL.num
		TRIAL.RFIDTag[TRIAL.NRFID] = port.statustext_received.slice(tagstart+4,tagend);
		TRIAL.NRFID = TRIAL.NRFID+1;

		if (TRIAL.NRFID >= 2){
			var dt = TRIAL.RFIDTime[TRIAL.NRFID-1] - TRIAL.RFIDTime[TRIAL.NRFID-2]
		}
		port.statustext_received = 'ParsedTAG ' + TRIAL.RFIDTag[TRIAL.NRFID-1] + 
									' @' + new Date().toLocaleTimeString("en-US") + 
									' dt=' + dt + 'ms'
		console.log(port.statustext_received)
		updateHeadsUpDisplayDevices()
	}
}

serial.Port.prototype.onReceiveError = error => {
  console.log(error);
};

//PORT - transferOut
serial.Port.prototype.writepumpdurationtoUSB = async function(data){
	let msgstr = "{" + data.toString() + "}" // start(<), end(>) characters
	let textEncoder = new TextEncoder();
	await this.device_.transferOut(4, textEncoder.encode(msgstr));

	port.statustext_sent = "TRANSFERRED CHAR --> USB:" + msgstr
	console.log(port.statustext_sent)
	updateHeadsUpDisplayDevices()
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

	port.statustext_connect = "USB DEVICE DISCONNECTED"
	console.log(port.statustext_connect)
	updateHeadsUpDisplayDevices()
};


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

function pingUSB(){
  if (port.connected == true){
  	var pingdur = 100
	let msgstr = "{" + pingdur.toString() + "}" // start({), end(}) characters
	let textEncoder = new TextEncoder();
	port.device_.transferOut(4, textEncoder.encode(msgstr))

	port.statustext_sent = "PINGING! TRANSFERRED CHAR --> USB:" + msgstr
	console.log(port.statustext_sent)
	updateHeadsUpDisplayDevices()

    pingTimer = setTimeout(function(){
      clearTimeout(pingTimer)
      pingUSB()
    },5000)
  }
}

//____________________LEGACY________________________

//PORT - send pump duration to arduino
serial.Port.prototype.writepumpdurationtoUSBBYTE = async function(data) {
	serial.twrite_pumpduration=performance.now()
	let view = new Uint16Array(1);
	view[0] = parseInt(data,10);
	view[0] = parseInt("5000",10);
	await this.device_.transferOut(4, view);

	port.statustext_sent = "TRANSFERRED BYTE --> USB:" + view
	console.log(port.statustext_sent)
	updateHeadsUpDisplayDevices()
};

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