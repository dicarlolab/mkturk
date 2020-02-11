var port={
  statustext_connect: "",
  statustext_sent: "",
  statustext_received: "",
  connected: false,
}
var serial = {}
var eyebuffer = { accumulateEye: 0, maxbufferlength_HARDCODED: 10, buffer: ""}

navigator.usb.onconnect = function(device){
	if (typeof(port.connected) == 'undefined' || port.connected == false){
		port.statustext_connect = "ATTEMPTING TO RECONNECT USB DEVICE..."
		console.log(port.statustext_connect)
		updateHeadsUpDisplayDevices()

		var event = {}
		event.type = 'Reconnect'
		findUSBDevice(event)
	}
};

// function autoconnectLoop(device){
// 	if (typeof(port.connected) == 'undefined' || port.connected == false){
// 		navigator.usb.onconnect(device)
// 		setTimeout(autoconnectLoop, 5000) //attempt to autoreconnect every 5 seconds
// 	}
// } //FUNCTION autoconnectLoop

navigator.usb.ondisconnect = function(device){
  // USB device disconnected
	port.connected = false
	port.statustext_connect = "USB DEVICE DISCONNECTED"
	FLAGS.runPump = 0
	console.log(port.statustext_connect)
	updateHeadsUpDisplayDevices()

	// Expose button in case need to manually reconnect (navigator.usb.onconnect doesn't seem to work on all chrome for android)
	document.querySelector("button[id=connectusb]").style.display = "block"
	document.querySelector("button[id=connectusb]").style.visibility = "visible"
	document.querySelector("button[id=connectusb]").style.top = "5%"

// 	// Attempt to auto-reconnect
// 	autoconnectLoop(device)
};


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
			try{
				await port.connect()				
			}
			catch (error){
				console.log(error)
			}
			port.statustext_connect = statustext
			console.log(port.statustext_connect)
			updateHeadsUpDisplayDevices()
			localStorage.setItem("ConnectUSB",1)

			//Hide manual connect button upon successful connect
			document.querySelector("button[id=connectusb]").style.display = "none"
		}
	}

	// STEP 1B: User connects to Port
	if (event.type == "pointerup" || event.type == "touchend" || event.type == "mouseup"){
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
			localStorage.setItem("ConnectUSB",1)

			//Hide manual connect button upon successful connect
			document.querySelector("button[id=connectusb]").style.display = "none"
		}
		catch(error){
		  console.log(error);
		}
		waitforClick.next(1)
	}
} //FUNCTION findUSBDevice

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

	ENV.USBDeviceType = 'microcontroller'
	ENV.USBDeviceName = 'Arduino Leonardo'

  this.connected = true
  readLoop(this)
  // pingUSB()
}//port.connect

//PORT  - onReceive
serial.Port.prototype.onReceive = data => {
	let textDecoder = new TextDecoder();
	port.statustext_received = textDecoder.decode(data)

	//rfid
	var tagstart = port.statustext_received.indexOf('{tag',0);

	//eye
	if ( port.statustext_received.indexOf('/',0) == 0 && eyebuffer.accumulateEye == 0 ){
		eyebuffer.accumulateEye = 1
	}

// console.log(port.statustext_received + 'len=' + port.statustext_received.length)

if (port.statustext_received.length > 1){
	console.log('too long: ' + port.statustext_received)
}

	if (tagstart >= 0){
		//rfid: sends whole tag at once
		var tagend = port.statustext_received.indexOf('}',0);
		logEVENTS("RFIDTag",port.statustext_received.slice(tagstart+4,tagend),"timeseries");
		TRIAL.RFIDTime[TRIAL.NRFID] = Date.now() - ENV.CurrentDate.valueOf();
		TRIAL.RFIDTrial[TRIAL.NRFID] = CURRTRIAL.num
		TRIAL.RFIDTag[TRIAL.NRFID] = port.statustext_received.slice(tagstart+4,tagend);
		TRIAL.NRFID = TRIAL.NRFID+1;

		if (TRIAL.NRFID >= 2){
			var dt = TRIAL.RFIDTime[TRIAL.NRFID-1] - TRIAL.RFIDTime[TRIAL.NRFID-2]
		}
		port.statustext_received = 'Parsed TAG ' + TRIAL.RFIDTag[TRIAL.NRFID-1] + 
									' @ ' + new Date().toLocaleTimeString("en-US") + 
									' dt=' + dt + 'ms'
		// console.log(port.statustext_received)

		if (FLAGS.RFIDGeneratorCreated == 1){
			var event = {tag: TRIAL.RFIDTag[TRIAL.NRFID-1], time: TRIAL.RFIDTime[TRIAL.NRFID-1]}
			waitforRFIDEvent.next(event)
		}
		if (ENV.Subject == ""){
			queryRFIDTagonFirestore(TRIAL.RFIDTag[TRIAL.NRFID-1])
		} //IF no subject chosen yet, auto-find in firestore based on their RFIDTag, which will then QuickLoad the page
		updateHeadsUpDisplayDevices()
	} //IF RFID Tag
	else if (eyebuffer.accumulateEye){
		// arduino usually sends one character at a time,
		// but have to handle the case of receiving 2 characters

		eyebuffer.buffer += port.statustext_received; //accumulate ascii vals

		var n_character_close = 0
		if ( port.statustext_received.indexOf('}') >= 0 && eyebuffer.buffer.length >= eyebuffer.maxbufferlength_HARDCODED){
			n_character_close = 1
			eyebuffer.buffer = eyebuffer.buffer.slice(1,eyebuffer.buffer.length-1)
		} 
		else if ( port.statustext_received == '}/' && eyebuffer.buffer.length == eyebuffer.maxbufferlength_HARDCODED-1){
			n_character_close = 2
			eyebuffer.buffer = eyebuffer.buffer.slice(1,eyebuffer.buffer.length-2)
		}

		if (n_character_close > 0){
			ENV.Eye.Time[ENV.Eye.N] = Date.now();
			ENV.Eye.N += 1;

			var x = eyebuffer.buffer.slice(0,4);
			var y = eyebuffer.buffer.slice(4,8);

			x = parseInt('0x'+x)/32767; //Raw
			y = parseInt('0x'+y)/32767; //Raw
			if (ENV.Eye.CalibXTransform.length > 0){
				var xy = apply_linear_transform(x,y,ENV.Eye.CalibXTransform,ENV.Eye.CalibYTransform) //Calibrated
			}
			else {
				xy = ["nan","nan"]
			}

			if (FLAGS.touchGeneratorCreated == 1 && TASK.TrackEye > 0){
				//Send calibrated signal
				// convert from eye coordinates to tablet coordinates

// xy[0] = 1.1*ENV.XGridCenter[CURRTRIAL.fixationgridindex] - 50
// xy[1] = 0.9*ENV.YGridCenter[CURRTRIAL.fixationgridindex] + 50 + CANVAS.offsettop	

// if (ENV.Eye.calibration == 0){
// 	var xy = apply_linear_transform(xy[0],xy[1],ENV.Eye.CalibXTransform,ENV.Eye.CalibYTransform) //Calibrated
// }

				//Plot the point on the screen if hold generator is on & in practice mode
// 				if (FLAGS.savedata == 0){
					//IF out-of-bounds, draw on border
					if (typeof(xyplot) != "undefined"){
						renderDotOnCanvas('blue', [ xyplot[0], xyplot[1] ], 3, EYETRACKERCANVAS)					
					}
					xyplot = [xy[0] - CANVAS.offsetleft, xy[1]-CANVAS.offsettop]
					if ( xyplot[0] < 0 ){ xyplot[0] = 0+1}
					else if ( xyplot[0] > EYETRACKERCANVAS.clientWidth ){ xyplot[0] = EYETRACKERCANVAS.clientWidth -1}

					if ( xyplot[1] < 0 ){ xyplot[1] = 0+1 }
					else if ( xyplot[1] > EYETRACKERCANVAS.clientHeight ){ xyplot[1] = EYETRACKERCANVAS.clientHeight -1}

					//preview dots
					renderDotOnCanvas('yellow', [ xyplot[0], xyplot[1] ], 3, EYETRACKERCANVAS)
// 				}
				var event_xytt = {x_val: xy[0], y_val: xy[1], time: ENV.Eye.Time[ENV.Eye.N-1], type: "undefined"}
				waitforEvent.next(event_xytt) //send to hold_promise generator
			}//if generated created

			if (ENV.Eye.N >= 2){
				var dt = ENV.Eye.Time[ENV.Eye.N-1] - ENV.Eye.Time[ENV.Eye.N-2]
			}

			if ( ENV.Eye.N%9 == 0 ){
				port.statustext_received = 'Parsed EYE: xy_raw(calib)= ' + Math.round(x*100)/100 + ',' + Math.round(y*100)/100 + 
										' (' + Math.round(10*xy[0])/10 + ',' + Math.round(10*xy[1])/10 + ') ' +  
										' @ ' + new Date().toLocaleTimeString("en-US") + 
										' dt=' + dt + 'ms' + 'buff=' + eyebuffer.buffer + ' ' + port.statustext_received
					console.log(port.statustext_received)
				updateHeadsUpDisplayDevices()		
			} //SUBSAMPLE

			if (n_character_close == 1){
				eyebuffer.buffer = ""
				eyebuffer.accumulateEye = 0;										
			}
			else if (n_character_close == 2){ //received "}/"
				eyebuffer.buffer = "/"
				eyebuffer.accumulateEye = 1;										
			}
		} //IF found end character
		else if ( eyebuffer.buffer.length >= eyebuffer.maxbufferlength_HARDCODED){
			port.statustext_received = 'Parse FAILED EYE : buffer size exceeded without end character:' +
									eyebuffer.buffer + ' bits: ' + port.statustext_received + 
									' @ ' + new Date().toLocaleTimeString("en-US")
									console.log(port.statustext_received)
			updateHeadsUpDisplayDevices()

			eyebuffer.buffer = ""
			eyebuffer.accumulateEye = 0;
		} //ELSE didn't receive end character
	}//IF Eye
	else {
		port.statustext_received = "RECEIVED CHAR <-- USB: " + textDecoder.decode(data)
			console.log("RECEIVED CHAR <-- USB (not eye or rfid): " + port.statustext_received)
			updateHeadsUpDisplayDevices()
	}//ELSE not tag or eye
} //port.onReceive

serial.Port.prototype.onReceiveError = error => {
  console.log(error);
};

//PORT - transferOut
serial.Port.prototype.writepumpdurationtoUSB = async function(data){
	let msgstr = "{" + data.toString() + "}" // start(<), end(>) characters
	let textEncoder = new TextEncoder();
	await this.device_.transferOut(4, textEncoder.encode(msgstr));

	port.statustext_sent = "TRANSFERRED CHAR --> USB:" + msgstr
	// console.log(port.statustext_sent)
	updateHeadsUpDisplayDevices()
} //port.writepumpdurationUSB

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
}; //port.disconnect


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
} //FUNCTION readLoop

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
} //FUNCTION pingUSB

//____________________LEGACY________________________

//PORT - send pump duration to arduino
serial.Port.prototype.writepumpdurationtoUSBBYTE = async function(data) {
	serial.twrite_pumpduration= Date.now() - ENV.CurrentDate.valueOf()
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