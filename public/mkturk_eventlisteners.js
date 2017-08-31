
// Continuously log x,y position until it hits a hotspot; then give juice and/or transition to the next canvas


// A value passed to next() will be treated as the result of the last yield expression that paused the generator.

function resize_event_listener(){
	// https://stackoverflow.com/questions/1664785/resize-html5-canvas-to-fit-window
	

	console.log('Resized body...')
}




// function touchhold_promise(touchduration,boundingBoxes){
// 	var resolveFunc
// 	var errFunc
// 	p = new Promise(
// 		function(resolve,reject){
// 			resolveFunc = resolve;
// 			errFunc = reject;
// 		}).then(
// 			function(resolveval){
// 				FLAGS.touchGeneratorCreated = 0
// 				return resolveval
// 			});
// 	function *waitforeventGenerator(){
// 		var touchevent
// 		var return_event = {type: "", cxyt: []}
// 		while (true){
// 			var t = Math.round(performance.now())
// 			touchevent = yield touchevent
// 			if (touchevent.type == "touchstart" || touchevent.type == "touchmove"){
// 				var x = touchevent.targetTouches[0].pageX;
// 				var y = touchevent.targetTouches[0].pageY;					
// 			}
// 			else if (touchevent.type == "mousedown" || touchevent.type == "mousemove"){
// 				var x = touchevent.clientX
// 				var y = touchevent.clientY
// 			}

// 			if (touchevent.type == 'touchheld' || touchevent.type == 'touchbroken'){
// 				return_event.type = touchevent.type
// 				break;
// 			}

// 			var touchcxyt = [-1, -1, -1, -1]


// 			if (FLAGS.waitingforTouches > 0 && touchevent.type != "touchend" && touchevent.type != "mouseup"){
// 				var chosenbox = -1
// 				if (touchevent.type == "touchstart" || touchevent.type == "touchmove"){
// 					var x = touchevent.targetTouches[0].pageX;
// 					var y = touchevent.targetTouches[0].pageY;					
// 				}
// 				else if (touchevent.type == "mousedown" || touchevent.type == "mousemove"){
// 					var x = touchevent.clientX
// 					var y = touchevent.clientY
// 				}	
// 				for (var q=0; q<=boundingBoxes.x.length-1; q++){
// 					if (x >= boundingBoxes.x[q][0] && x <= boundingBoxes.x[q][1] &&
// 						y >= boundingBoxes.y[q][0] && y <= boundingBoxes.y[q][1]){
// 						chosenbox=q
// 					}
// 				}
// 				var touchcxyt = [chosenbox,x,y,Math.round(performance.now())];		
// 			} 

// 			//================== ACQUIRING TOUCH ==================//
// 			if (!acquiredTouch && 
// 				touchevent.type != "touchend" &&  
// 				touchevent.type != "mouseup"){
				
// 				if (chosenbox == -1){
// 					touchcxyt[0] = -1
// 				}
				
// 				if (chosenbox >= 0){
// 					acquiredTouch = 1
					
// 					FLAGS.waitingforTouches--
// 					acquiredTouch = 0
// 					return_event.type = "touchheld"
				
// 					} 
// 			} //if touched inside box		
			 



// 			//================== TOUCH END ==================//
// 			if ((touchevent.type == "touchend" || touchevent.type == "mouseup") && acquiredTouch){
// 				acquiredTouch = 0
// 				//console.log('was fixating but lifted finger prematurely');
// 				clearTimeout(touchTimer);
// 				return_event.type = "touchbroken"
// 				break;
// 			} //if ended touch too early			
		 

// 		return_event.cxyt = touchcxyt
// 		resolveFunc(return_event)
// 	} 


// 	waitforEvent = waitforeventGenerator(); // start async function
// 	FLAGS.touchGeneratorCreated = 1
// 	////console.log('GENERATOR CREATED waiting for ntouches',FLAGS.waitingforTouches)
// 	waitforEvent.next(); //move out of default state
// 	return p;
// }

//================== MOUSE & TOUCH EVENTS ==================//
function touchstart_listener(event){
	event.preventDefault(); //prevents additional downstream call of click listener
	if(typeof event === 'undefined'){
		////console.log('no click, loading images, initializing responsepromise');
		return
	}
	if (!FLAGS.touchGeneratorCreated){
		//wait for touch generator promise to be created before registering new touches
		////console.log("IGNORING TOUCH EVENT: no active touch generators")
	} //if no click generator created
	else {
		////console.log('touchstart_listener called')
		waitforEvent.next(event)
	}
} //touchstart_listener

function touchmove_listener(event){
	if (!FLAGS.touchGeneratorCreated){
		//wait for touch generator promise to be created before registering new touches
		////console.log("IGNORING TOUCH EVENT: no active touch generators")
	} //if no click generator created
	else {
		waitforEvent.next(event)
	}
} //touchmove_listener

function touchend_listener(event){
	if (!FLAGS.touchGeneratorCreated){
		//wait for touch generator promise to be created before registering new touches
		////console.log("IGNORING TOUCH EVENT: no active touch generators")
	} //if no click generator created
	else {
		waitforEvent.next(event)
	}
} //touchend_listener

function doneTestingTask_listener(event){
	event.preventDefault()
	//console.log("User is done testing. Start saving data");
	FLAGS.debug_mode = 0
	
	renderBlank(CANVAS.obj.blank)
	document.querySelector("button[name=doneTestingTask]").style.display = "none"
	return
}

function subjectlist_listener(event){
	//console.log("subject selected");

	SESSION.SubjectFilePath = subject_filepath_list[this.value]
	
	subjectdialog.close();
	waitforClick.next(1);
	return
}

function experimentlist_listener(event){

	SESSION.ExperimentFilePath = experiment_file_list[this.value]
	
	experiment_dialog.close();
	waitforClick.next(1);
	return
}



async function sync_data_listener(event){
	console.log("Called data save from sync button")
	document.querySelector("button[name=SyncButton]").innerHTML = '....'

	var original_color = document.querySelector("button[name=SyncButton]").style['background-color']
	document.querySelector("button[name=SyncButton]").style['background-color'] = '#ADFF97'
	await DWr.saveTrialData(FLAGS.debug_mode)
	await DWr.saveTouches(FLAGS.debug_mode)
	await SP.playSound(5) // Chime
	document.querySelector("button[name=SyncButton]").style['background-color'] = original_color
	document.querySelector("button[name=SyncButton]").innerHTML = 'Save'

	return 
}

//================== PROMISE STATES ==================//
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
			//console.log('User selected ' + resolveval)
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

// Select Experiment file
function ExperimentFile_Promise(){
	var resolveFunc
	var errFunc
	p = new Promise(
		function(resolve,reject){
			resolveFunc = resolve;
			errFunc = reject;
		}).then(
		function(resolveval){
			//console.log('User selected ' + resolveval)
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
