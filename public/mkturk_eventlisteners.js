//================== MOUSE & TOUCH EVENTS ==================//
function mousedown_listener(event){
	if(typeof event === 'undefined'){
		console.log('no click, loading images, initializing response promise');
		return
	};
	var x = event.clientX
	var y = event.clientY

	if (FLAGS.waitingforFixation == 1){
		//determine if clicked on fixation dot
		if ( x >= boundingBoxFixation.x[0] && x <= boundingBoxFixation.x[1] &&
			 y >= boundingBoxFixation.y[0] && y <= boundingBoxFixation.y[1]){
			FLAGS.brokeFixation = 0;
			TRIAL.xytfixation[FLAGS.current_trial]=[x,y,Math.round(performance.now())];
			//Start timer
			fixationTimer = setTimeout(function(){ FLAGS.waitingforFixation=0;clearTimeout(movefixationTimer); waitforClick.next(1);},TASK.fixationDur);
		} //if clicked fixation
		else{
		}
	}
	if (FLAGS.waitingforResponse == 1){
		// Determine if clicked in test box
		for (var q=0; q<=boundingBoxesTest.x.length-1; q++){
			if (x >= boundingBoxesTest.x[q][0] && x <= boundingBoxesTest.x[q][1] &&
				y >= boundingBoxesTest.y[q][0] && y <= boundingBoxesTest.y[q][1]){
				TRIAL.response[FLAGS.current_trial]=q;
				TRIAL.xytresponse[FLAGS.current_trial]=[x,y,Math.round(performance.now())];
				waitforClick.next(q);
				return
			}
		}
	}
}
function mousemove_listener(event){
	if (FLAGS.waitingforFixation==1 && FLAGS.brokeFixation==0){
		var x = event.clientX
		var y = event.clientY
		if ( x >= boundingBoxFixation.x[0] && x <= boundingBoxFixation.x[1] &&
			 y >= boundingBoxFixation.y[0] && y <= boundingBoxFixation.y[1]){
			//holding fixation
		}
		else{
			// moved from fixation dot, cancel fixation timers
			FLAGS.brokeFixation = 1;
			clearTimeout(fixationTimer);
		}
	}
}
function mouseup_listener(event){
	if (FLAGS.waitingforFixation==1 && FLAGS.brokeFixation == 0){
		// broke touch with fixation dot too early, cancel fixation timers
		FLAGS.brokeFixation = 1;
		clearTimeout(fixationTimer);
	}
}
function touchstart_listener(event){
	event.preventDefault(); //prevents additional downstream call of click listener
	if(typeof event === 'undefined'){
		console.log('no click, loading images, initializing responsepromise');
		return
	};
	var x = event.targetTouches[0].pageX;
	var y = event.targetTouches[0].pageY;

	if (FLAGS.waitingforFixation == 1){
		//determine if clicked on fixation dot
		if ( x >= boundingBoxFixation.x[0] && x <= boundingBoxFixation.x[1] &&
			 y >= boundingBoxFixation.y[0] && y <= boundingBoxFixation.y[1]){
			FLAGS.brokeFixation = 0;
			TRIAL.xytfixation[FLAGS.current_trial]=[x,y,Math.round(performance.now())];
			//Start timer
			fixationTimer = setTimeout(function(){console.log('started fixation timer');
				FLAGS.waitingforFixation=0;
				clearTimeout(movefixationTimer); 
				waitforClick.next(1);},
				TASK.fixationDur);
		} //if clicked fixation
		else{
			if (TASK.rewardStage == 0){
				console.log('clicked outside fixation');
				TRIAL.xytfixation[FLAGS.current_trial]=[x,y,Math.round(performance.now())];
				FLAGS.waitingforFixation=0;
				FLAGS.brokeFixation = 1;
				clearTimeout(movefixationTimer);
				clearTimeout(fixationTimer);
				waitforClick.next(0);
			} //advance to punish for clicking outside fixation
		}
	}
	if (FLAGS.waitingforResponse == 1){
		//determine if clicked in test box
		for (var q=0; q<=boundingBoxesTest.x.length-1; q++){
			if (x >= boundingBoxesTest.x[q][0] && x <= boundingBoxesTest.x[q][1] &&
				y >= boundingBoxesTest.y[q][0] && y <= boundingBoxesTest.y[q][1]){
				TRIAL.response[FLAGS.current_trial]=q;
				TRIAL.xytresponse[FLAGS.current_trial]=[x,y,Math.round(performance.now())];
				waitforClick.next(q);
				return
			}
		}
	}
}
function touchmove_listener(event){
	if (FLAGS.waitingforFixation==1 && FLAGS.brokeFixation==0){
		var x = event.targetTouches[0].pageX;
		var y = event.targetTouches[0].pageY;
		if ( x >= boundingBoxFixation.x[0] && x <= boundingBoxFixation.x[1] &&
			 y >= boundingBoxFixation.y[0] && y <= boundingBoxFixation.y[1]){
			//holding fixation
		}
		else{
			// moved from fixation dot, cancel fixation timers
			FLAGS.brokeFixation = 1;
			console.log('was fixating but moved out');
			clearTimeout(fixationTimer);
		}
	}
	else if (FLAGS.waitingforFixation==1 && FLAGS.brokeFixation==1){
		//check if moved back into fixation
		var x = event.targetTouches[0].pageX;
		var y = event.targetTouches[0].pageY;
		if ( x >= boundingBoxFixation.x[0] && x <= boundingBoxFixation.x[1] &&
			 y >= boundingBoxFixation.y[0] && y <= boundingBoxFixation.y[1]){
			//gained fixation
			FLAGS.brokeFixation = 0;
			touchstart_listener(event);
		}
	}
	//Allows dragging into response box
	if (FLAGS.waitingforResponse == 1){
		var x = event.targetTouches[0].pageX;
		var y = event.targetTouches[0].pageY;
		//determine if moved into a test box
		for (var q=0; q<=boundingBoxesTest.x.length-1; q++){
			if (x >= boundingBoxesTest.x[q][0] && x <= boundingBoxesTest.x[q][1] &&
				y >= boundingBoxesTest.y[q][0] && y <= boundingBoxesTest.y[q][1]){
				TRIAL.response[FLAGS.current_trial]=q;
				TRIAL.xytresponse[FLAGS.current_trial]=[x,y,Math.round(performance.now())];
				waitforClick.next(q);
				return
			}
		}
	}
}
function touchend_listener(event){
	if (FLAGS.waitingforFixation==1 && FLAGS.brokeFixation == 0){
		// broke touch with fixation dot too early, cancel fixation timers
		FLAGS.brokeFixation = 1;
		console.log('was fixating but lifted finger');
		clearTimeout(fixationTimer);
	}
}

function doneEditing_listener(event){
	//console.log("Done editing params")
	waitforClick.next(1);
	return
}
function headsuptext_listener(event){
	FLAGS.need2writeParameters = 1
	return
}
function doneTesting_listener(event){
	console.log("User is done testing. Start saving data");
	FLAGS.savedata=1
	FLAGS.purge=1
	renderBlank()
	document.querySelector("button[name=doneTesting]").style.display = "none"
	return
}

function subjectlist_listener(event){
	console.log("subject selected");
	ENV.subjectID = subjectlist[this.value];
	subjectdialog.close();
	waitforClick.next(1);
	return
}