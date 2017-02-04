//================== MOUSE & TOUCH EVENTS ==================//
function touchstart_listener(event){
	event.preventDefault(); //prevents additional downstream call of click listener
	if(typeof event === 'undefined'){
		console.log('no click, loading images, initializing responsepromise');
		return
	};
	var x = event.targetTouches[0].pageX;
	var y = event.targetTouches[0].pageY;

	if (FLAGS.waitingforFixation > 0){
		//determine if clicked on fixation dot
		if ( x >= boundingBoxFixation.x[0] && x <= boundingBoxFixation.x[1] &&
			 y >= boundingBoxFixation.y[0] && y <= boundingBoxFixation.y[1]){
			if (!FLAGS.fixationImagePresent){
				return
			}
			else if (FLAGS.fixationImagePresent){
				FLAGS.brokeFixation = 0;
				CURRTRIAL.fixationxyt = [x,y,Math.round(performance.now())];
				CURRTRIAL.allfixationxyt[TASK.NFixations - FLAGS.waitingforFixation] = 
				[x,y,Math.round(performance.now())]

				//Start timer
				fixationTimer = setTimeout(function(){
					FLAGS.waitingforFixation--;
					waitforClick.next(1);
					console.log('Fixation',FLAGS.waitingforFixation)
				}, TASK.FixationDuration);			
			}
		} //if clicked fixation
		else {
			if (TASK.RewardStage == 0){
				console.log('clicked outside fixation');
				CURRTRIAL.fixationxyt = [x,y,Math.round(performance.now())];
				CURRTRIAL.allfixationxyt[TASK.NFixations - FLAGS.waitingforFixation] = 
				[x,y,Math.round(performance.now())]
				FLAGS.waitingforFixation=0;
				FLAGS.brokeFixation = 1;
				clearTimeout(fixationTimer);
				waitforClick.next(0);
			} //advance to punish for clicking outside fixation
		} //clicked outside
	} //if waitingforFixation
	else if (FLAGS.waitingforChoice == 1){
		//determine if clicked in test box
		for (var q=0; q<=boundingBoxesTest.x.length-1; q++){
			if (x >= boundingBoxesTest.x[q][0] && x <= boundingBoxesTest.x[q][1] &&
				y >= boundingBoxesTest.y[q][0] && y <= boundingBoxesTest.y[q][1]){
				CURRTRIAL.response = q;
				CURRTRIAL.responsexyt =[x,y,Math.round(performance.now())];
				waitforClick.next(q);
				return
			}
		}
	} //if waiting for Fixation or Choice
} //touchstart_listener

function touchmove_listener(event){
	if (FLAGS.waitingforFixation > 0 && FLAGS.brokeFixation==0){
		var x = event.targetTouches[0].pageX;
		var y = event.targetTouches[0].pageY;
		if ( x >= boundingBoxFixation.x[0] && x <= boundingBoxFixation.x[1] &&
			 y >= boundingBoxFixation.y[0] && y <= boundingBoxFixation.y[1]){
		} //holding fixation
		else{
			// moved from fixation, cancel fixation timers
			FLAGS.brokeFixation = 1;
			console.log('was fixating but moved out');
			clearTimeout(fixationTimer);
			waitforClick.next(0)
		} //broke fixation
	}
	else if (FLAGS.waitingforFixation > 0 && FLAGS.brokeFixation==1){
		var x = event.targetTouches[0].pageX;
		var y = event.targetTouches[0].pageY;
		if ( x >= boundingBoxFixation.x[0] && x <= boundingBoxFixation.x[1] &&
			 y >= boundingBoxFixation.y[0] && y <= boundingBoxFixation.y[1]){
			FLAGS.brokeFixation = 0;
			// touchstart_listener(event);
		} //re-gained fixation
	}
	else if (FLAGS.waitingforChoice == 1){
		var x = event.targetTouches[0].pageX;
		var y = event.targetTouches[0].pageY;
		//determine if moved into a test box
		for (var q=0; q<=boundingBoxesTest.x.length-1; q++){
			if (x >= boundingBoxesTest.x[q][0] && x <= boundingBoxesTest.x[q][1] &&
				y >= boundingBoxesTest.y[q][0] && y <= boundingBoxesTest.y[q][1]){
				CURRTRIAL.response =q;
				CURRTRIAL.responsexyt =[x,y,Math.round(performance.now())];
				waitforClick.next(q);
				return
			}
		} //moved into response box from outside
	}
} //touchmove_listener

function touchend_listener(event){
	if (FLAGS.waitingforFixation > 0 && FLAGS.brokeFixation == 0){
		FLAGS.brokeFixation = 1;
		console.log('was fixating but lifted finger prematurely');
		clearTimeout(fixationTimer);
		waitforClick.next(0)
	} //released fixation too early
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
	console.log("User is done testing. Start saving data");
	FLAGS.savedata=1
	FLAGS.purge=1
	purgeTrackingVariables()
	renderBlank(CANVAS.obj.blank)
	document.querySelector("button[name=doneTestingTask]").style.display = "none"
	return
}

function subjectlist_listener(event){
	console.log("subject selected");
	ENV.Subject = subjectlist[this.value];
	subjectdialog.close();
	waitforClick.next(1);
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
			console.log('User selected ' + resolveval)
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

// Promise: Edit Parameters Text
function editParamsPromise(){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then(function(resolveval){console.log('User is done editing parameters.')});
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

// Promise: fixation
function fixationPromise(){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then(function(resolveval){
		//console.log('Fixation Promise resolved' + resolveval)
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
// Promise: response
function responsePromise(){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then(function(resolveval){
		//console.log('User clicked ' + resolveval)
});
	function *waitforclickGenerator(){
		var imclicked =[-1];
		while (true){
			imclicked = yield imclicked;
			resolveFunc(imclicked);
		}
	}
	FLAGS.waitingforChoice = 1;
	waitforClick = waitforclickGenerator(); // start async function
	waitforClick.next(); //move out of default state
	return p;
}