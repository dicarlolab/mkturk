//================== TOUCH PROMISE ==================//
// Promise: Touch Hold
function touchhold_promise(touchduration,boundingBoxes,punishOutsideTouch){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then(function(resolveval){
		FLAGS.touchGeneratorCreated = 0
		return resolveval
	});
	function *waitforeventGenerator(){
		var touchevent
		var return_event = {type: "", cxyt: []}
		while (true){
			touchevent = yield touchevent

// console.log('TOUCHEVENT', touchevent.type)

			if (touchevent.type == 'theld' || touchevent.type == 'tbroken'){
				return_event.type = touchevent.type
				break;
			}
			else{
				//keep processing touchstart, touchmove, touchend events
			}

			// Get CHOICE,XYT
			var touchcxyt = [-1, -1, -1, -1]
			if (FLAGS.waitingforTouches > 0 && touchevent.type != "touchend" && touchevent.type != "mouseup"){
				var chosenbox = -1
				if (touchevent.type == "touchstart" || touchevent.type == "touchmove"){
					var x = touchevent.targetTouches[0].pageX;
					var y = touchevent.targetTouches[0].pageY;					
				}
				else if (touchevent.type == "mousedown" || touchevent.type == "mousemove"){
					var x = touchevent.clientX
					var y = touchevent.clientY
				}	
				for (var q=0; q<=boundingBoxes.x.length-1; q++){
					if (x >= boundingBoxes.x[q][0] && x <= boundingBoxes.x[q][1] &&
						y >= boundingBoxes.y[q][0] && y <= boundingBoxes.y[q][1]){
						chosenbox=q
					}//if in bounding box
				}//for q boxes
				var touchcxyt = [chosenbox,x,y,Date.now() - ENV.CurrentDate.valueOf()];		
			} //if waiting for touch, get coords

			//================== ACQUIRING TOUCH ==================//
			if (!FLAGS.acquiredTouch && 
				touchevent.type != "touchend" && touchevent.type != "touchmove" && 
				touchevent.type != "mouseup" && touchevent.type != "mousemove"){
				if (chosenbox == -1){
					if (punishOutsideTouch){
						FLAGS.acquiredTouch = 0
						clearTimeout(touchTimer);
						return_event.type = "tbroken"
						break;
					} //touched outside fixation, advance to punish
					else {
						//do nothing for touching outside boxes
						touchcxyt[0] = -1
					}
				} //if touched outside box
				else if (chosenbox >= 0){
					FLAGS.acquiredTouch = 1
					if (touchduration > 0){
						//Start timer
						touchTimer = setTimeout(function(){
							FLAGS.waitingforTouches--
							FLAGS.acquiredTouch = 0
							FLAGS.touchGeneratorCreated = 0 //block other callbacks
							waitforEvent.next({type: "theld"})
						},touchduration)
					} //if touch hold required
					else {
						FLAGS.waitingforTouches--
						FLAGS.acquiredTouch = 0
						return_event.type = "theld"
						break;
					} //if no touch hold required
				} //if touched inside box		
			} //if !acquiredTouch

			//================== HOLDING TOUCH ==================//
			if (touchevent.type == "touchmove" && FLAGS.acquiredTouch){
				if (chosenbox >= 0){
				} //if moving within a touch bounding box, just wait
				else if (chosenbox == -1){
					FLAGS.acquiredTouch = 0
					clearTimeout(touchTimer)
					return_event.type = "tbroken"
					break;
				} //if moved out of touch bounding box
			} //if touchmove

			//================== TOUCH END ==================//
			if ((touchevent.type == "touchend" || touchevent.type == "mouseup") && FLAGS.acquiredTouch){
				FLAGS.acquiredTouch = 0
				console.log('was fixating but lifted finger prematurely');
				clearTimeout(touchTimer);
				return_event.type = "tbroken"
				break;
			} //if ended touch too early			
		} //while events
		// console.log('RETURN_EVENT', return_event.type)
		return_event.cxyt = touchcxyt
		resolveFunc(return_event)
	} //generator
	waitforEvent = waitforeventGenerator(); // start async function
	FLAGS.touchGeneratorCreated = 1
	// console.log('GENERATOR CREATED waiting for ntouches',FLAGS.waitingforTouches)
	waitforEvent.next(); //move out of default state
	return p;
}

//================== MOUSE & TOUCH EVENTS ==================//
function touchstart_listener(event){
	event.preventDefault(); //prevents additional downstream call of click listener
	if(typeof event === 'undefined'){
		// console.log('no click, loading images, initializing responsepromise');
		return
	}
	if (!FLAGS.touchGeneratorCreated){
		//wait for touch generator promise to be created before registering new touches
		// console.log("IGNORING TOUCH EVENT: no active touch generators")
	} //if no click generator created
	else {
		// console.log('touchstart_listener called')
		waitforEvent.next(event)
	}
} //touchstart_listener

function touchmove_listener(event){
	if (!FLAGS.touchGeneratorCreated){
		//wait for touch generator promise to be created before registering new touches
		// console.log("IGNORING TOUCH EVENT: no active touch generators")
	} //if no click generator created
	else {
		waitforEvent.next(event)
	}
} //touchmove_listener

function touchend_listener(event){
	if (!FLAGS.touchGeneratorCreated){
		//wait for touch generator promise to be created before registering new touches
		// console.log("IGNORING TOUCH EVENT: no active touch generators")
	} //if no click generator created
	else {
		waitforEvent.next(event)
	}
} //touchend_listener

function doneEditingParams_listener(event){
	waitforClick.next(1);
	return
}
function headsuptext_listener(event){
	FLAGS.need2saveParameters = 1
	return
}
function doneTestingTask_listener(event){
	event.preventDefault()
	console.log("User is done testing. Start saving data");
	FLAGS.savedata=1
	FLAGS.purge=1
	purgeTrackingVariables()
	FLAGS.purge=0
	
<<<<<<< HEAD
=======
	document.querySelector("p[id=imageloadingtext]").style.display = "none" //if do style.visibility=hidden, element will still occupy space
	document.querySelector("button[id=doneTestingTask]").style.display = "none"
	document.querySelector("button[id=stressTest]").style.display = "none"
	return
}

function stressTest_listener(event){
	event.preventDefault()
	console.log("User is done testing. Performing STRESS TEST");
	FLAGS.savedata=1
	FLAGS.createnewfirestore = 1
	FLAGS.purge=1
	purgeTrackingVariables()
	FLAGS.purge=0

	if (FLAGS.stressTest == 0){
		FLAGS.stressTest = 1
	}
	else if (FLAGS.stressTest == 1){
		FLAGS.stressTest = 0
	}
	
>>>>>>> master
	document.querySelector("p[id=imageloadingtext]").style.display = "none" //if do style.visibility=hidden, element will still occupy space
	document.querySelector("button[id=doneTestingTask]").style.display = "none"
	return
}


function subjectlist_listener(event){
	ENV.Subject = subjectlist[this.value];
	subjectdialog.close();
	waitforClick.next(1);
	return
}

//================== SUBJECT PROMISE ==================//
// Promise: Select Subject
function subjectIDPromise(){
	var resolveFunc
	var errFunc
	p = new Promise(
		function(resolve,reject){
			resolveFunc = resolve;
			errFunc = reject;
		}).then(
		function(resolveval){
			console.log('User selected agent ' + resolveval)
		});
	
	function *waitforclickGenerator(){
		var imclicked =[-1];
		while (true){
			imclicked = yield imclicked;
			resolveFunc(imclicked);
		}
	}

	waitforClick = waitforclickGenerator(); // start async function
	waitforClick.next(); //move out of default state
	return p;
}

//================== EDIT PARAMS PROMISE ==================//
// Promise: Edit Parameters Text
function editParamsPromise(){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then(function(resolveval){
		console.log('User is done editing parameters.')
	});
	function *waitforclickGenerator(){
		var imclicked =[-1];
		while (true){
			imclicked = yield imclicked;
			resolveFunc(imclicked);
		}
	}
	waitforClick = waitforclickGenerator(); // start async function
	waitforClick.next(); //move out of default state
	return p;
}


//================== RFID PROMISE ==================//
// // Promise: Check for correct agent RFID
function rfid_promise(agentTag,recencyInMS){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then(function(resolveval){
		FLAGS.RFIDGeneratorCreated = 0
		if (CANVAS.headsupfraction > 0){ //button on headsupdisplay to preempt RFID tag check
			document.querySelector("button[id=preemptRFID]").style.display = "none"
		}
		updateHeadsUpDisplay()
		return resolveval
	});
	function *waitforRFIDEventGenerator(){
		var rfidevent
		var return_event = ""
		while (true){
			rfidevent = yield rfidevent

			if ( typeof(agentTag) == "undefined" ||
				( rfidevent.tag == agentTag && (Date.now() - ENV.CurrentDate.valueOf()) - rfidevent.time <= recencyInMS) )
			{
				return_event = "done"
				break;
			}
			else{
				//keep processing rfid until register agent's RFID
			}
		} //while events
		// console.log('RETURN_EVENT', return_event.type)
		resolveFunc(return_event)
	} //generator
	waitforRFIDEvent = waitforRFIDEventGenerator(); // start async function
	FLAGS.RFIDGeneratorCreated = 1
	if (CANVAS.headsupfraction > 0){ //button on headsupdisplay to preempt RFID tag check
		document.querySelector("button[id=preemptRFID]").style.display = "block"
		document.querySelector("button[id=preemptRFID]").style.visibility = "visible"		
	}
	updateHeadsUpDisplay()
	waitforRFIDEvent.next(); //move out of default state
	return p;
}


function preemptRFID_listener(event){
	event.preventDefault()
	document.querySelector("button[id=preemptRFID]").style.display = "none"
	waitforRFIDEvent.next({tag: ENV.AgentRFID, time: (Date.now() - ENV.CurrentDate.valueOf())})
	return
}