//================== TOUCH PROMISE ==================//
// TouchHold either by clicking in or dragging in
function hold_promise(touchduration,boundingBoxes,punishOutsideTouch){
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

			if (FLAGS.trackeye > 0){
				//Ignore touches if tracking eye, this will be removed in next commit since we want to use touches as surrogates when available
				if (touchevent.type.indexOf('touch') > 0 || touchevent.type.indexOf('mouse') > 0){
					continue;
				}
				touchevent.type = ENV.Eye.EventType
			}

			// THE END of touch or fixation, either held or broke
			if (touchevent.type == 'theld' || touchevent.type == 'tbroken'){
				return_event.type = touchevent.type

				if (FLAGS.trackeye > 0){
					ENV.Eye.EventType = "eyestart" //Reset eye state
				}
				break; //EXIT LOOP
			}//IF end of touch/fixation
			else{
				//keep processing touchstart, touchmove, touchend events
			}

			//================== 1-GET XYT & CHOSEN BOX ==================//
			var touchcxyt = [-1, -1, -1, -1]
			if (FLAGS.waitingforTouches > 0 && touchevent.type != "touchend" && touchevent.type != "mouseup"){
				var chosenbox = -1

				//RECOVER X,Y coordinates from eye, touch, or click
				if (touchevent.type == "touchstart" || touchevent.type == "touchmove" || touchevent.type == "eyestart" || touchevent.type == "eyemove"){
					if (FLAGS.trackeye > 0){
						var x = touchevent.x_val 
						var y = touchevent.y_val
					} //IF eye
					else {
						var x = touchevent.targetTouches[0].pageX;
						var y = touchevent.targetTouches[0].pageY;
					} //ELSE touch
				}//IF touchstart/move, eyestart/move
				else if (touchevent.type == "mousedown" || touchevent.type == "mousemove"){
					var x = touchevent.clientX
					var y = touchevent.clientY
				} //IF mousedown/move

				//RECOVER BOX, if any
				for (var q=0; q<=boundingBoxes.x.length-1; q++){
					if (x >= boundingBoxes.x[q][0] && x <= boundingBoxes.x[q][1] &&
						y >= boundingBoxes.y[q][0] && y <= boundingBoxes.y[q][1]){
						chosenbox=q
					}//if in bounding box
				}//for q boxes

				//Add timestamp
				var touchcxyt = [chosenbox,x,y,Date.now() - ENV.CurrentDate.valueOf()];

				//Accumulate cxyt in box for greater eyetracker accuracy
				if (chosenbox != -1){
					CURRTRIAL.cxyt.push(touchcxyt) //also accumulate for current trial			
				}//IF in box, accumulate cxyt
			}//IF acquired, get cxyt data
			//================== (END) 1-GET XYT & CHOSEN BOX ==================//

			//================== 2-INIATE HOLD ==================//
			if (!FLAGS.acquiredTouch && touchevent.type != "touchend" && touchevent.type != "mouseup" 
			 	&& (
			 		(TASK.DragtoRespond==0 && touchevent.type != "touchmove" && touchevent.type != "mousemove") //click in
			 		|| (TASK.DragtoRespond==1) //drag in
			 	))
			 	{

				//IF clicked outside box
				if (TASK.DragtoRespond==0 && chosenbox == -1){
					if (punishOutsideTouch){
						FLAGS.acquiredTouch = 0
						clearTimeout(touchTimer);
						return_event.type = "tbroken"
						break;
					}//IF touched outside fixation, advance to punish
					else {
						//do nothing for touching outside boxes
						touchcxyt[0] = -1
					}//ELSE ignore outside touch if choice screen
				}//IF touched outside box
				else if (chosenbox >= 0){
					FLAGS.acquiredTouch = 1

					//EYE ENTERED BOX
					if (FLAGS.trackeye > 0){
						ENV.Eye.timeOfLastGlanceInBB = touchcxyt[3]
						ENV.Eye.EventType = "eyemove" //in box, so future states are "eyemove" (from "undefined" in usb code)
						console.log('!!!! EYE ENTERED BOX !!!!  ' + touchcxyt)
					}
					//START TIMER touchduration milliseconds
					if (touchduration > 0){
						touchTimer = setTimeout(function(){
							FLAGS.waitingforTouches--
							FLAGS.acquiredTouch = 0
							FLAGS.touchGeneratorCreated = 0 //block other callbacks
							if (FLAGS.trackeye > 0){ 
								ENV.Eye.EventType = "theld"
							}
							waitforEvent.next({type: "theld"})
						},touchduration)
					}//IF touch hold required
					else {
						FLAGS.waitingforTouches--
						FLAGS.acquiredTouch = 0
						FLAGS.touchGeneratorCreated = 0 //block other callbacks
						return_event.type = "theld"
						console.log('theld, broke out of while loop')
						break
					}//IF no touch hold required
				} //IF touched inside box		
			} //IF !acquiredTouch
			//================== (END) 2-INIATE HOLD ==================//

			//================== 3-HOLDING ==================//
			if ( (touchevent.type == "touchmove" || touchevent.type == "eyemove") && FLAGS.acquiredTouch){
				if (chosenbox >= 0){
					ENV.Eye.timeOfLastGlanceInBB = touchcxyt[3]
				}//IF moving within a touch bounding box, just wait
				else if ( FLAGS.trackeye > 0 && ((Date.now() - ENV.CurrentDate.valueOf()) - ENV.Eye.timeOfLastGlanceInBB) <= ENV.Eye.BlinkGracePeriod ){
					console.log('outside but blink')
				}//IF during eye blink grace period, just wait
				else if ( chosenbox == -1 &&
						( FLAGS.trackeye == 0 || 
						( (Date.now() - ENV.CurrentDate.valueOf()) - ENV.Eye.timeOfLastGlanceInBB) > ENV.Eye.BlinkGracePeriod) ){
					FLAGS.acquiredTouch = 0
					clearTimeout(touchTimer)
					if (FLAGS.trackeye > 0){
						ENV.Eye.EventType = "eyestart"
					}
					return_event.type = "tbroken"
					break;
				}//IF moved out of box
			}//IF touch/eyemove
			//================== (END) 3-HOLDING ==================//

			//================== 4-END HOLD prematurely ==================//
			if ((touchevent.type == "touchend" || touchevent.type == "mouseup") && FLAGS.acquiredTouch){
				FLAGS.acquiredTouch = 0
				clearTimeout(touchTimer);
				return_event.type = "tbroken"
				break;
			}//IF ended touch early			
			//================== (END) 4-END HOLD prematurely ==================//

		}//WHILE events

		if (FLAGS.trackeye){
			//Median x,y = final eye position estimate
			var xs = []
			var ys = []
			if (CURRTRIAL.cxyt.length > 0)
			{
				for (var q = 0; q<=CURRTRIAL.cxyt.length-1; q++){
					xs.push(CURRTRIAL.cxyt[q][1])
					ys.push(CURRTRIAL.cxyt[q][2])
				}//FOR q samples
				touchcxyt[1] = math.median(xs)
				touchcxyt[2] = math.median(ys)
			}//IF xy data
			else {
				console.log('NO EYE POINTS ' + CURRTRIAL.cxyt)
			}//ELSE no xy samples
		}
		return_event.cxyt = touchcxyt
		resolveFunc(return_event)
	} //generator
	waitforEvent = waitforeventGenerator(); // start async function
	FLAGS.touchGeneratorCreated = 1
	CURRTRIAL.cxyt = []
	// console.log('GENERATOR CREATED waiting for ntouches',FLAGS.waitingforTouches)
	waitforEvent.next(); //move out of default state
	return p;
}//FUNCTION hold_promise(touchduration,boundingBoxes,punishOutsideTouch)

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
				
// FLAGS.trackeye=1
// var xy = []
// xy[0]=event.targetTouches[0].pageX
// xy[1]=event.targetTouches[0].pageY
// var event_xytt = {x_val: xy[0], y_val: xy[1],
// 					 time: Date.now(), type: "undefined"}
// waitforEvent.next(event_xytt) //send to hold_promise generator

// 			// STORE calibrated eye signal
// 			logEVENTS("EyeData",[2,
// 						xy[0],xy[1],-1,-1,null,null,null,null],"timeseries");


// // Plot the point on the screen if hold generator is on & in practice mode; IF out-of-bounds, draw on border
// xyplot = [xy[0] - 0*CANVAS.offsetleft, xy[1]-0*CANVAS.offsettop]
// if ( xyplot[0] < 0 ){ xyplot[0] = 0+1}
// else if ( xyplot[0] > EYETRACKERCANVAS.clientWidth ){ xyplot[0] = EYETRACKERCANVAS.clientWidth -1}

// if ( xyplot[1] < 0 ){ xyplot[1] = 0+1 }
// else if ( xyplot[1] > EYETRACKERCANVAS.clientHeight ){ xyplot[1] = EYETRACKERCANVAS.clientHeight -1}

// //preview dots
// renderDotOnCanvas('yellow', [ xyplot[0], xyplot[1] ], 3, EYETRACKERCANVAS)

	}//ELSE touchGenerator
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
	
	document.querySelector("p[id=imageloadingtext]").style.display = "none" //if do style.visibility=hidden, element will still occupy space
	document.querySelector("button[id=doneTestingTask]").style.display = "none"
	document.querySelector("button[id=stressTest]").style.display = "none"
	// EYETRACKERCANVAS.style.display="none";
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
	
	document.querySelector("p[id=imageloadingtext]").style.display = "none" //if do style.visibility=hidden, element will still occupy space
	document.querySelector("button[id=doneTestingTask]").style.display = "none"
	return
}


function subjectlist_listener(event){
	ENV.Subject = subjectlist[this.value];
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


function quickLoad_listener(event){
	event.preventDefault()
	QuickLoad.load = 1
	ENV.Subject = QuickLoad.agent
	waitforClick.next(1)

	if (ENV.WebUSBAvailable){
		if (QuickLoad.connectusb == 1 && port.connect == false){
				findUSBDevice(event)
		} //automatically call USB device finder
		else if (QuickLoad.connectusb == 0){
				skipHardwareDevice(event)
		}		
	}
	else{
		//do nothing
	}
}