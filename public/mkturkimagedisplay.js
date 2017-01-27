//================== LOAD STATUS DISPLAY ==================//
function updateCanvasSettings(TASK){
	// Todo: put these in the proper locations
	canvas.tsequence = [0,100,100+TASK.sampleON,100+TASK.sampleON+TASK.sampleOFF]; 
	canvas.tsequencepost[2] = canvas.tsequencepost[1]+ENV.reward*1000;

	if (TASK.species == "macaque" || TASK.species == "human"){
		canvas.headsupfraction=0;
	}
	else if (TASK.species == "marmoset"){
		canvas.headsupfraction=1/3-0.06;
	}
}

function writeTextonBlankCanvas(textstr,x,y){
	var blank_canvasobj=document.getElementById("canvas"+canvas.blank)
	var visible_ctxt = blank_canvasobj.getContext('2d')
	visible_ctxt.textBaseline = "hanging"
	visible_ctxt.fillStyle = "white"
	visible_ctxt.font = "18px Verdana"
	visible_ctxt.fillText(textstr,x,y)
}

function updateStatusText(text){
	var textobj = document.getElementById("headsuptext");
	textobj.innerHTML = text
}
//================== CANVAS SETUP ==================//

function setupCanvasHeadsUp(){
	canvasobj=document.getElementById("canvasheadsup");
	canvasobj.width=window.innerWidth;
	canvasobj.height=Math.round(window.innerHeight*canvas.headsupfraction);
	canvas.offsettop = canvasobj.height;
	if (canvas.headsupfraction == 0){
		canvasobj.style.display="none";
	}
	else{
		canvasobj.style.display="block";
	}
	var context=canvasobj.getContext('2d');

	context.fillStyle="#202020";
	context.fillRect(0,0,canvasobj.width,canvasobj.height);
	canvasobj.addEventListener('mousedown',mousedown_listener,false);
	canvasobj.addEventListener('touchstart',touchstart_listener,false);
}

function setupCanvas(id){
	str="canvas" + id;
	canvasobj=document.getElementById(str);
	// center in page
	canvasobj.style.top=canvas.offsettop + "px";
	canvasobj.style.left=canvas.offsetleft + "px";
	canvasobj.width=windowWidth;
	canvasobj.height=windowHeight;
	canvasobj.style.margin="0 auto";
	canvasobj.style.display="block"; //visible

	// assign listeners
	canvasobj.addEventListener('mousedown',mousedown_listener,false);
	canvasobj.addEventListener('mousemove',mousemove_listener,false);
	canvasobj.addEventListener('mouseup',mouseup_listener,false);
	canvasobj.addEventListener('touchstart',touchstart_listener,false); // handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
	// canvasobj.addEventListener('touchmove',touchmove_listener,false);
	canvasobj.addEventListener('touchmove',touchmove_listener,{passive: true}) // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	canvasobj.addEventListener('touchend',touchend_listener,false);
	// store canvas size
	canvasSize=[canvasobj.width, canvasobj.height];
} 

// Sync: Adjust canvas for the device pixel ratio & browser backing store size
// from http://www.html5rocks.com/en/tutorials/canvas/hidpi/#disqus_thread
function scaleCanvasforHiDPI(id){
	if (devicePixelRatio !== backingStoreRatio){
		str="canvas" + id;
		canvasobj=document.getElementById(str);
		context=canvasobj.getContext("2d");
		var oldWidth = canvasobj.width;
		var oldHeight = canvasobj.height;
		canvasobj.width = oldWidth * canvasScale;
		canvasobj.height = oldHeight * canvasScale;
		canvasobj.style.width = windowWidth + "px";
		canvasobj.style.height = windowHeight + "px";
		canvasobj.style.margin="0 auto";
		context.scale(canvasScale,canvasScale);
	} 
} 


function updateHeadsUpDisplay(){
	var textobj = document.getElementById("headsuptext");

	// Overall performance
	var ncorrect = 0;
	for (var i=0; i<=TRIAL.correctItem.length-1; i++){
			if (TRIAL.correctItem[i] == TRIAL.response[i]){
				ncorrect++;
			}
	}
	var pctcorrect = Math.round(100 * ncorrect / TRIAL.response.length);
	// Task type
	var task1 = "";
	var task2 = "";
	if (TASK.rewardStage == 0){
		task1 = "Fixation";
	}
	else if (TASK.rewardStage == 1){
		task1 = TASK.testGrid.length + "-way AFC. ImageBags:" + TASK.imageBagsSample;
		task2 = TASK.sampleON + "ms, " + TASK.imageBagsTest.length + "-categories in pool";
	}
	if (canvas.headsupfraction > 0){
		textobj.innerHTML = ENV.subjectID + ": <font color=green><b>" + pctcorrect + "%</b></font> " + "(" + ncorrect + " of " + TRIAL.response.length +")" + "<br>" + "Estimated Reward: <font color=green><b>" + Math.round(TASK.rewardper1000*ncorrect/1000) + "mL</b></font> (" + Math.round(TASK.rewardper1000) + " per 1000)" + "<br> " + "<br>" + " Stage " + TASK.AutomatorStage + ": " + task1 + "<br>" + task2 + "<br>" + "<br>" + "<br>" + "<font color=red><b>" + "<font color=blue><b>" + ble.statustext + "<br></font>";
	}
	else if (canvas.headsupfraction == 0){
		textobj.innerHTML = ble.statustext
	}
}
//================== IMAGE RENDERING ==================//
// Sync: buffer trial images

function defineImageGrid(ngridpoints, wd, ht, scale, canvasScale){
	var xgrid =[]
	var ygrid =[]
	var xgridcent =[] 
	var ygridcent =[]
	var cnt=0;
	for (var i=1; i<=ngridpoints; i++){
		for (var j=1; j<=ngridpoints; j++){
			xgrid[cnt]=i - 1/2;
			ygrid[cnt]=j - 1/2;
			cnt++;
		}
	}

	//center x & y grid within canvas
	var dx = (document.body.clientWidth - canvas.offsetleft)*devicePixelRatio/2/canvasScale - xgrid[4]*wd*scale/canvasScale;
	var dy = (document.body.clientHeight - canvas.offsettop)*devicePixelRatio/2/canvasScale - ygrid[4]*ht*scale/canvasScale;
	for (var i=0; i<=xgrid.length-1; i++){
		xgridcent[i]=Math.round(xgrid[i]*wd*scale/canvasScale + dx);
		ygridcent[i]=Math.round(ygrid[i]*ht*scale/canvasScale + dy);
	}

	return [xgrid, ygrid, xgridcent, ygridcent]

}

async function renderImageOnCanvas(image, grid_index, scale, canvas_id){
	var canvasobj=document.getElementById("canvas"+canvas_id);
	var context=canvasobj.getContext('2d');

	var xleft=NaN;
	var ytop=NaN;
	var xbound=[];
	var ybound=[];

	wd = image.width
	ht = image.height
	xleft = Math.round(xgridcent[grid_index] - 0.5*wd*scale/canvasScale);
	ytop = Math.round(ygridcent[grid_index] - 0.5*ht*scale/canvasScale);
	
	context.drawImage(
		image, // Image element
		xleft, // dx: Canvas x-coordinate of image's top-left corner. 
		ytop, // dy: Canvas y-coordinate of  image's top-left corner. 
		image.width*scale/canvasScale, // dwidth. width of drawn image. 
		image.height*scale/canvasScale); // dheight. height of drawn image.

	// For drawing cropped regions of an image in the canvas, see alternate input argument structures,
	// See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
	
	// Bounding boxes of images on canvas
	xbound=[xleft, xleft+wd*scale/canvasScale];
	ybound=[ytop, ytop+ht*scale/canvasScale];

	xbound[0]=xbound[0]+canvas.offsetleft;
	xbound[1]=xbound[1]+canvas.offsetleft;
	ybound[0]=ybound[0]+canvas.offsettop;
	ybound[1]=ybound[1]+canvas.offsettop;
	return [xbound, ybound]
}

async function bufferTrialImages(sample_image, sample_image_grid_index, test_images, test_image_grid_indices){

	// --------- Buffer the SAMPLE canvas  ---------
	var canvasobj=document.getElementById("canvas"+canvas.sample); // Gray out before buffering sample
	var context=canvasobj.getContext('2d');
	context.fillStyle="#7F7F7F";
	context.fillRect(0,100, canvasobj.width,canvasobj.height); // 100 is for the photodiode bar at the top of the screen
	await renderImageOnCanvas(sample_image, sample_image_grid_index, TASK.sampleScale, canvas.sample)
	
	// --------- Buffer the TEST canvas  ---------

	// Option: gray out before buffering test: (for overriding previous trial's test screen if current trial test screen has transparent elements?)
	var pre_grayout = false 
	if(pre_grayout == true){
		var canvasobj=document.getElementById("canvas"+canvas.test); selectSampleImage
		var context=canvasobj.getContext('2d');
		context.fillStyle="#7F7F7F";
		context.fillRect(0,100, canvasobj.width,canvasobj.height); // 100 is for the photodiode bar at the top of the screen
	}
	
	boundingBoxesTest['x'] = []
	boundingBoxesTest['y'] = []
	// Draw test object(s): 
	for (i = 0; i<test_images.length; i++){
		funcreturn = await renderImageOnCanvas(test_images[i], test_image_grid_indices[i], TASK.testScale, canvas.test); 
		boundingBoxesTest.x.push(funcreturn[0]); 
		boundingBoxesTest.y.push(funcreturn[1]); 
	}

	// Option: draw sample (TODO: remove the blink between sample screen and test screen)
	if (TASK.keepSampleON==1){
		await renderImageOnCanvas(sample_image, sample_image_grid_index, TASK.sampleScale, canvas.test)
	}

	canvas.buffered = 1;

}


function displayTrial(sequence,tsequence){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then();
	//console.log('seq', sequence, 'tseq', tsequence)

	var start = null;
	function updateCanvas(timestamp){

		// If start has not been set to a float timestamp, set it now.
		if (!start) start = timestamp;

		// If time to show new frame, 
		if (timestamp - start > tsequence[frame.current]){
			//console.log('Frame =' + frame.current+'. Duration ='+(timestamp-start)+'. Timestamp = ' + timestamp)
			// Move canvas in front
			var prev_canvasobj=document.getElementById("canvas"+canvas.front);
			var curr_canvasobj=document.getElementById("canvas"+sequence[frame.current]);
			if (canvas.front != canvas.blank){
				// Move to back
				prev_canvasobj.style.zIndex="0";
			} 
			if (sequence[frame.current] != canvas.blank){
				curr_canvasobj.style.zIndex="100";
				canvas.front = sequence[frame.current];
			} // move to front
			else{
				canvas.front = canvas.blank;
			}
			
			frame.shown[frame.current]=1;
			frame.current++;
		}; 
		// continue if not all frames shown
		if (frame.shown[frame.shown.length-1] != 1){
			window.requestAnimationFrame(updateCanvas);
		}
		else{
			resolveFunc(1);
		}
	}
	//requestAnimationFrame advantages: goes on next screen refresh and syncs to browsers refresh rate on separate clock (not js clock)
	window.requestAnimationFrame(updateCanvas); // kick off async work
	return p
} 

function displayTextOnBlackBar(message_string){
	renderBlank();
	var blank_canvasobj=document.getElementById("canvas"+canvas.blank);
	var visible_ctxt = blank_canvasobj.getContext('2d');
	visible_ctxt.textBaseline = "hanging";
	visible_ctxt.fillStyle = "white";
	visible_ctxt.font = "20px Verdana";
	visible_ctxt.fillText(message_string, 20.5,20.5);
}

function renderBlank(){
	var canvasobj=document.getElementById("canvas"+canvas.blank);
	var context=canvasobj.getContext('2d');
	context.fillStyle="#7F7F7F";
	context.fillRect(0,0,canvasobj.width,canvasobj.height);
	context.fillStyle="black";
	context.fillRect(0,0,canvasobj.width,60);
}
function renderReward(){
	var canvasobj=document.getElementById("canvas"+canvas.reward);
	var context=canvasobj.getContext('2d');
	context.fillStyle="green";
	context.fillRect(xgridcent[4]-200,ygridcent[4]-200,400,400);
	if (TASK.species == 'marmoset'){
		context.fillStyle="black";
		context.fillRect(0,0,canvasobj.width,100);
	}
}
function renderPhotoReward(){
	var canvasobj=document.getElementById("canvas"+canvas.photoreward);
	var context=canvasobj.getContext('2d');
	context.fillStyle="green";
	context.fillRect(xgridcent[4]-200,ygridcent[4]-200,400,400);
	if (TASK.species == 'marmoset'){
		context.fillStyle="white";
		context.fillRect(0,0,canvasobj.width,100);
	}
}
function renderPunish(){
	var canvasobj=document.getElementById("canvas"+canvas.punish);
	var context=canvasobj.getContext('2d');
	context.rect(xgridcent[4]-200,ygridcent[4]-200,400,400);
	context.fillStyle="black";
	context.fill();
	context.fillStyle="black";
	context.fillRect(0,0,canvasobj.width,60);
}

async function renderFixationUsingImage(image, gridindex, scale){
	var canvasobj=document.getElementById("canvas"+canvas.touchfix);
	var context=canvasobj.getContext('2d');
	context.clearRect(0,0,canvasobj.width,canvasobj.height);

	// Draw fixation dot
	boundingBoxFixation['x'] = []
	boundingBoxFixation['y'] = []

	funcreturn = await renderImageOnCanvas(image, gridindex, scale, canvas.touchfix); 
	boundingBoxFixation.x = funcreturn[0]; 
	boundingBoxFixation.y = funcreturn[1]; 
}
function renderFixationUsingDot(color, gridindex, dot_pixelradius){
	var canvasobj=document.getElementById("canvas"+canvas.touchfix);
	var context=canvasobj.getContext('2d');
	context.clearRect(0,0,canvasobj.width,canvasobj.height);

	// Draw fixation dot
	var rad = dot_pixelradius;
	var xcent = xgridcent[gridindex];
	var ycent = ygridcent[gridindex];
	context.beginPath();
	context.arc(xcent,ycent,rad,0*Math.PI,2*Math.PI);
	context.fillStyle=color; 
	context.fill();
	// Define (rectangular) boundaries of fixation
	boundingBoxFixation.x = [xcent-rad+canvas.offsetleft, xcent+rad+canvas.offsetleft];
	boundingBoxFixation.y = [ycent-rad+canvas.offsettop, ycent+rad+canvas.offsettop];

	// //add eye fixation
	// context.fillStyle="red";
	// context.fillRect(xgridcent[4]-6,ygridcent[4]-6,12,12);
	// // add red dot in center
	// context.fillStyle="red";
	// context.fillRect(xgridcent[trial.fixationGrid[FLAGS.current_trial]]+rad/2-6,xgridcent[trial.fixationGrid[FLAGS.current_trial]]-rad/2-6,12,12);
	//context.fillStyle="black";
	context.fillRect(0,0,canvasobj.width,40);
}
function renderEyeFixation(){
	var canvasobj=document.getElementById("canvas"+canvas.eyefix);
	var context=canvasobj.getContext('2d');
	context.fillStyle="red";
	context.fillRect(xgridcent[4]-6,ygridcent[4]-6,12,12);
}
//================== IMAGE RENDERING (end) ==================//
//================== PROMISE STATES ==================//
// Promise: Select Subject
function subjectIDPromise(){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then(function(resolveval){console.log('User selected ' + resolveval)});
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
function subjectlist_listener(event){
	console.log("subject selected");
	ENV.subjectID = subjectlist[this.value];
	subjectdialog.close();
	waitforClick.next(1);
	return
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
	document.querySelector("button[name=doneTesting]").style.display = "none"
	return
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
			//console.log('moved generator forward')
			resolveFunc(imclicked);
		}
	}
	FLAGS.waitingforFixation = 1;
	waitforClick = waitforclickGenerator(); // start async function
	waitforClick.next(); //move out of default state
	//Start timer

	movefixationTimer = setTimeout(function(){
		FLAGS.waitingforFixation=1; 
		FLAGS.brokeFixation=1; 
		clearTimeout(fixationTimer); 
		waitforClick.next(1); },
		TASK.fixationInterval);
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
	FLAGS.waitingforResponse = 1;
	waitforClick = waitforclickGenerator(); // start async function
	waitforClick.next(); //move out of default state
	return p;
}
//Asynch: play sound
async function playSound(idx){
	audiocontext.resume()
	var source = audiocontext.createBufferSource(); // creates a sound source
	source.buffer = sounds.buffer[idx];                    // tell the source which sound to play
	if (idx==0){
		gainNode.gain.value=0.15; //set boost pedal to 15% volume
	}
	else if (idx==2 | idx==3){
		gainNode.gain.value=0.15; //set boost pedal to 5% volume
	}
	source.connect(gainNode);
	// gainNode.connect(audiocontext.destination); //Connect boost pedal to output
	// source.connect(audiocontext.destination);       // connect the source to the context's destination (the speakers)
	source.start(0);                        // play the source now


}
// Promise: dispense reward (through audio control)
function dispenseReward(){
	console.log('Legacy dispense reward')
	return 
	return new Promise(function(resolve,reject){
		audiocontext.resume()
		var oscillator = audiocontext.createOscillator();
		gainNode.gain.value=1;
		if (TASK.pump == 1){
			oscillator.type='square'; //Square wave
			oscillator.frequency.value=25; //frequency in hertz				
		} //peristaltic (adafruit)
		else if (TASK.pump==2){
			oscillator.type='square'; //Square wave
			oscillator.frequency.value=0.1; //frequency in hertz
		} //submersible (TCS)
		else if (TASK.pump==3){
			oscillator.type='square'; //Square wave
			oscillator.frequency.value=10; //frequency in hertz		
		} //diaphragm (TCS)
		else if (TASK.pump==4){
			oscillator.type='square'; //Square wave
			oscillator.frequency.value=0.1; //frequency in hertz				
		} //piezoelectric (takasago)
		else if (TASK.pump==5){
			oscillator.type='square';
			oscillator.frequency.value=0.1;
		} //diaphragm new (TCS)
		else if (TASK.pump==6){
			oscillator.type='square'; //Square wave
			oscillator.frequency.value=0.1; //frequency in hertz				
		} //piezoelectric 7ml/min (takasago)
		// oscillator.connect(audiocontext.destination); //Connect sound to output
		// //var gainNode = audiocontext.createGainNode(); //Create boost pedal
		// //gainNode.gain.value=0.3; //set boost pedal to 30% volume
		oscillator.connect(gainNode);
		// //gainNode.connect(audiocontext.destination); //Connect boost pedal to output
		// // oscillator.onended=function(){
		// // 	console.log('done with reward pulse');
		// // 	resolve(1);
		// // }
		var currentTime=audiocontext.currentTime;


		oscillator.start(currentTime);
		oscillator.stop(currentTime + ENV.reward);
		setTimeout(function(){console.log('sound done'); resolve(1);},ENV.reward*1000);
	}).then();
}
// Promise: punish time-out
function dispensePunish(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){resolve(1);},TASK.punish); //milliseconds
	}).then();
}
//================== PROMISE STATES (end) ==================//
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
//================== MOUSE & TOUCH EVENTS (end) ==================//
//================== UTILITIES ==================//
/* Randomize array element order in-place.  Using Fisher-Yates shuffle algorithm. http://bost.ocks.org/mike/shuffle/ */
// To test your shuffling algorithm: go to http://bost.ocks.org/mike/shuffle/compare.html
function shuffleArray(array){
	// Expand to index vector if needed
	if (array.length==1){
		var len=array[0];
		for (var i = 0; i<=len-1; i++){array[i]=i;}
	}
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}
// convert base64 to buffer array (from: http://stackoverflow.com.80bola.com/questions/27524283/save-image-to-dropbox-with-data-from-canvas?rq=1)
function _base64ToArrayBuffer(base64){
	base64 = base64.split('data:image/png;base64,').join('');
	var binary_string =  window.atob(base64),
	len = binary_string.length,
	bytes = new Uint8Array( len ),
	i;
	for (i = 0; i < len; i++){
		bytes[i] = binary_string.charCodeAt(i);
	}
	return bytes.buffer;
}
//================== UTILITIES (end) ==================//

function getAllInstancesIndexes(arr, val){
	var indexes = []
    for(var i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function selectSampleImage(samplebag_labels, SamplingStrategy){

	// Vanilla random uniform sampling with replacement: 
	var sample_image_index = NaN
	if(SamplingStrategy == 'uniform_with_replacement'){
		sample_image_index = Math.floor((samplebag.length)*Math.random());
	}
	else if(SamplingStrategy == 'uniform_without_ImageReplacementAfterMaxReps'){
		throw "Not implemented."
	}

	// Sample blocking behavior: 
	if (FLAGS.sampleblockcount >0 && FLAGS.sampleblockcount < TASK.sampleBlockSize && TASK.sampleBlockSize > 1){
		sample_image_index = TRIAL.sample[FLAGS.current_trial - 1];
		FLAGS.sampleblockcount++;
	} 
	else if(FLAGS.sampleblockcount >= TASK.sampleBlockSize && TASK.sampleBlockSize > 1){
		FLAGS.sampleblockcount = 0 ; 
	}

	return sample_image_index
	
	
}

function selectTestImages(correct_label, testbag_labels){
	
	// Input arguments: 
	// 	correct_label: int. It is one element of testbag_labels corresponding to the rewarded group. 
	//	testbag_labels: array of ints, of length equal to the number of images ( == testbag.length). 

	// Globals: TASK.objectGrid; TASK.testGrid; TASK.nstickyresponse; 

	// Outputs: 
	//	testIndices: array of ints, of length TASK.testGrid.length. The elements are indexes of testbag_labels. The order corresponds to testGrid. 
	//	correctSelection: int. It indexes testIndices / testGrid to convey the correct element. 


	var testIndices = []; 
	var correctSelection = NaN;

	// If SR is on, 
	if (TASK.objectGrid.length == TASK.imageBagsTest.length){ // Is this a robust SR check?
		// For each object, 
		for (var i = 0; i<TASK.objectGrid.length; i++){
			
			// Get pool of the object's test images: 
			var object_test_indices = getAllInstancesIndexes(testbag_labels, i)

			// Get one (1) random sample of the object's test images: 
			var test_image_index = object_test_indices[Math.floor((object_test_indices.length)*Math.random())]; 

			// Get grid index where the object should be placed: 
			var object_grid_index = TASK.objectGrid[i] 

			// Determine which location that grid index corresponds to in testIndices: 
			order_idx = TASK.testGrid.indexOf(object_grid_index)

			// Place the selected test image in the appropriate location in testIndices. 
			testIndices[order_idx] = test_image_index

			// If this is the correct object, set the current testIndices location as being the correctSelection. 
			if(i == correct_label){
				correctSelection = order_idx; 
			}
		}
		return [testIndices, correctSelection] 
	}

	// Otherwise, for match-to-sample (where effectors are shuffled)

	// Get all unique labels 
	var labelspace = []
	for (var i = 0; i < testbag_labels.length; i++){
		if(labelspace.indexOf(testbag_labels[i]) == -1){
			labelspace.push(testbag_labels[i])
		}
	}

	// Randomly select n-1 labels to serve as distractors 
	var distractors = []
	while(distractors.length < TASK.testGrid.length-1){
		distractor_sample = labelspace[Math.floor((labelspace.length)*Math.random())]; 
		if(distractors.indexOf(distractor_sample) == -1){
			labelspace.push(distractor_sample)
		} 
	}

	// Add distractors and correct label to testpool, and then shuffle. 
	var testpool = []
	testpool.push(distractors)
	testpool.push(correct_label)
	testpool = shuffle(testpool)

	// If the past nstickyresponse trials has been on one side, then make this upcoming trial's correct answer be at another location. 
	if (FLAGS.stickyresponse >= TASK.nstickyresponse && TASK.nstickyresponse > 0){
		console.log('Moving correct response to nonstick location')
		var sticky_grid_location = TRIAL.response[FLAGS.current_trial-1]; 
		if (sticky_grid_location == undefined){
			console.log('Something strange has happened in the stickyresponse logic')
		}

		var candidate_nonstick_locations = []
		for (var i = 0; i < testpool.length; i++){
			if(i == sticky_grid_location)
				{continue}
			else if (i != sticky_grid_location){
				candidate_nonstick_locations.push(i)
			}
			else{throw 'Error occurred in sticky response logic'}
		}
		
		// Switch correct_label into correct_label_nonstick_location
		var correct_label_nonstick_location =candidate_nonstick_locations[Math.floor((candidate_nonstick_locations.length)*Math.random())]; 
		var switched_out_label = testpool[correct_label_nonstick_location]; 
		testpool[correct_label_nonstick_location] = correct_label; 
		testpool[sticky_grid_location] = switched_out_label
	}	
	

	// For each label in the testpool, add a random testimage index of it to testIndices. 
	for (var i = 0; i<testpool.length; i++){
		label = testpool[i]
		object_test_indices = getAllInstancesIndexes(testbag_labels, label); 
		test_image_index = object_test_indices[Math.floor((object_test_indices.length)*Math.random())]; 
		testIndices[i] = test_image_index
		if(label == correct_label){
			correctSelection = i
		}
	}

	return [testIndices, correctSelection] 



}

function setReward(){
	var m = 0;
	var b = 0;
	if (TASK.pump == 1){
		// m = 1.13; b = 15.04;
		m = 0.99; b = 14.78;
	} //peristaltic (adafruit)
	else if (TASK.pump == 2){
		// m = 3.20; b = -15.47;
		m = 1.40; b = -58.77;
	} //submersible (tcs)
	else if (TASK.pump == 3){
		// m = 0.80; b = -3.00;
		m=0.91; b = -15;
	} //diaphragm (tcs)
	else if (TASK.pump == 4){
		m = 0.0531; b=-1.2594;
	} //piezoelectric (takasago)
	else if (TASK.pump == 5){
		m = 2.4463; b=53.6418;
	} //new diaphragm (tcs)
	else if (TASK.pump == 6){
		if (TASK.liquid==1 || TASK.liquid==3){
			m=0.1251; b=-0.0833; //1=water 2=water-condensed milk 3=marshmallow slurry (4/30mL)
		}
		else if (TASK.liquid==2){
			m=0.0550; b=0.6951; //water-condensed milk (50/50)
		}
	} //piezoelectric 7mL/min (takasago)
	return (TASK.rewardper1000 - b)/m/1000;
	ENV.reward = (TASK.rewardper1000 - b)/m/1000;
}