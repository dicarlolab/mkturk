//================== LOAD STATUS DISPLAY ==================//
function updateCanvasSettings(TASK){
	// Todo: put these in the proper locations
	CANVAS.tsequence = [0,100,100+TASK.sampleON,100+TASK.sampleON+TASK.sampleOFF]; 
	CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+ENV.reward*1000;

	if (TASK.species == "macaque" || TASK.species == "human"){
		CANVAS.headsupfraction=0;
	}
	else if (TASK.species == "marmoset"){
		CANVAS.headsupfraction=1/3-0.06;
	}
}

function writeTextonBlankCanvas(textstr,x,y){
	var blank_canvasobj=document.getElementById("canvas"+CANVAS.blank)
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
	canvasobj.height=Math.round(window.innerHeight*CANVAS.headsupfraction);
	CANVAS.offsettop = canvasobj.height;
	if (CANVAS.headsupfraction == 0){
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
	canvasobj.style.top=CANVAS.offsettop + "px";
	canvasobj.style.left=CANVAS.offsetleft + "px";
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
	if (CANVAS.headsupfraction > 0){
		textobj.innerHTML = ENV.subjectID + ": <font color=green><b>" + pctcorrect + "%</b></font> " + "(" + ncorrect + " of " + TRIAL.response.length +")" + "<br>" + "Estimated Reward: <font color=green><b>" + Math.round(TASK.rewardper1000*ncorrect/1000) + "mL</b></font> (" + Math.round(TASK.rewardper1000) + " per 1000)" + "<br> " + "<br>" + " Stage " + TASK.AutomatorStage + ": " + task1 + "<br>" + task2 + "<br>" + "<br>" + "<br>" + "<font color=red><b>" + "<font color=blue><b>" + ble.statustext + "<br></font>";
	}
	else if (CANVAS.headsupfraction == 0){
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
	var dx = (document.body.clientWidth - CANVAS.offsetleft)*devicePixelRatio/2/canvasScale - xgrid[4]*wd*scale/canvasScale;
	var dy = (document.body.clientHeight - CANVAS.offsettop)*devicePixelRatio/2/canvasScale - ygrid[4]*ht*scale/canvasScale;
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

	xbound[0]=xbound[0]+CANVAS.offsetleft;
	xbound[1]=xbound[1]+CANVAS.offsetleft;
	ybound[0]=ybound[0]+CANVAS.offsettop;
	ybound[1]=ybound[1]+CANVAS.offsettop;
	return [xbound, ybound]
}

async function bufferTrialImages(sample_image, sample_image_grid_index, test_images, test_image_grid_indices){

	// --------- Buffer the SAMPLE canvas  ---------
	var canvasobj=document.getElementById("canvas"+CANVAS.sample); // Gray out before buffering sample
	var context=canvasobj.getContext('2d');
	context.fillStyle="#7F7F7F";
	context.fillRect(0,100, canvasobj.width,canvasobj.height); // 100 is for the photodiode bar at the top of the screen
	await renderImageOnCanvas(sample_image, sample_image_grid_index, TASK.sampleScale, CANVAS.sample)
	
	// --------- Buffer the TEST canvas  ---------

	// Option: gray out before buffering test: (for overriding previous trial's test screen if current trial test screen has transparent elements?)
	var pre_grayout = false 
	if(pre_grayout == true){
		var canvasobj=document.getElementById("canvas"+CANVAS.test); selectSampleImage
		var context=canvasobj.getContext('2d');
		context.fillStyle="#7F7F7F";
		context.fillRect(0,100, canvasobj.width,canvasobj.height); // 100 is for the photodiode bar at the top of the screen
	}
	
	boundingBoxesTest['x'] = []
	boundingBoxesTest['y'] = []
	// Draw test object(s): 
	for (i = 0; i<test_images.length; i++){
		// If hideTestDistractors, simply do not draw the image
		if(TASK.hideTestDistractors == 1){
			if (TRIAL.correctItem[FLAGS.current_trial] != i){
				boundingBoxesTest.x.push([NaN, NaN]); 
				boundingBoxesTest.y.push([NaN, NaN]); 
				continue 
			}
		}		

		funcreturn = await renderImageOnCanvas(test_images[i], test_image_grid_indices[i], TASK.testScale, CANVAS.test); 
		boundingBoxesTest.x.push(funcreturn[0]); 
		boundingBoxesTest.y.push(funcreturn[1]); 
	}

	// Option: draw sample (TODO: remove the blink between sample screen and test screen)
	if (TASK.keepSampleON==1){
		await renderImageOnCanvas(sample_image, sample_image_grid_index, TASK.sampleScale, CANVAS.test)
	}

	CANVAS.buffered = 1;

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
			var prev_canvasobj=document.getElementById("canvas"+CANVAS.front);
			var curr_canvasobj=document.getElementById("canvas"+sequence[frame.current]);
			if (CANVAS.front != CANVAS.blank){
				// Move to back
				prev_canvasobj.style.zIndex="0";
			} 
			if (sequence[frame.current] != CANVAS.blank){
				curr_canvasobj.style.zIndex="100";
				CANVAS.front = sequence[frame.current];
			} // move to front
			else{
				CANVAS.front = CANVAS.blank;
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
	var blank_canvasobj=document.getElementById("canvas"+CANVAS.blank);
	var visible_ctxt = blank_canvasobj.getContext('2d');
	visible_ctxt.textBaseline = "hanging";
	visible_ctxt.fillStyle = "white";
	visible_ctxt.font = "20px Verdana";
	visible_ctxt.fillText(message_string, 20.5,20.5);
}

function renderBlank(){
	var canvasobj=document.getElementById("canvas"+CANVAS.blank);
	var context=canvasobj.getContext('2d');
	context.fillStyle="#7F7F7F";
	context.fillRect(0,0,canvasobj.width,canvasobj.height);
	context.fillStyle="black";
	context.fillRect(0,0,canvasobj.width,60);
}

function renderBlankWithGridMarkers(){
	var canvasobj=document.getElementById("canvas"+CANVAS.blank);
	var context=canvasobj.getContext('2d');
	context.fillStyle="#7F7F7F";
	context.fillRect(0,0,canvasobj.width,canvasobj.height);

	//Show image positions & display grid
	//Display grid
	for (var i = 0; i <= xgridcent.length-1; i++){
		rad = 10
		context.beginPath()
		context.arc(xgridcent[i],ygridcent[i],rad,0*Math.PI,2*Math.PI)
		context.fillStyle="red"
		context.fill();
	}

	//Fixation Image Bounding Box
	var wd = ENV.wd*TASK.fixationScale/canvasScale
	var xcent = xgridcent[TASK.fixationGrid]
	var ycent = xgridcent[TASK.fixationGrid]
	context.strokeStyle="white"
	context.strokeRect(xcent-wd/2,ycent-wd/2,wd+1,wd+1)
	

	//Sample Image Bounding Box
	var wd = ENV.wd*TASK.sampleScale/canvasScale
	var xcent = xgridcent[TASK.sampleGrid]
	var ycent = ygridcent[TASK.sampleGrid]
	context.strokeStyle="green"
	context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)

	//Test Image Bounding Box(es)
	for (var i = 0; i <= TASK.testGrid.length-1; i++){
		var wd = ENV.wd*TASK.testScale/canvasScale
		var xcent = xgridcent[TASK.testGrid[i]]
		var ycent = ygridcent[TASK.testGrid[i]]
		context.strokeStyle="black"
		context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)
	}
}


function renderReward(){
	var canvasobj=document.getElementById("canvas"+CANVAS.reward);
	var context=canvasobj.getContext('2d');
	context.fillStyle="green";
	context.fillRect(xgridcent[4]-200,ygridcent[4]-200,400,400);
	if (TASK.species == 'marmoset'){
		context.fillStyle="black";
		context.fillRect(0,0,canvasobj.width,100);
	}
}
function renderPhotoReward(){
	var canvasobj=document.getElementById("canvas"+CANVAS.photoreward);
	var context=canvasobj.getContext('2d');
	context.fillStyle="green";
	context.fillRect(xgridcent[4]-200,ygridcent[4]-200,400,400);
	if (TASK.species == 'marmoset'){
		context.fillStyle="white";
		context.fillRect(0,0,canvasobj.width,100);
	}
}
function renderPunish(){
	var canvasobj=document.getElementById("canvas"+CANVAS.punish);
	var context=canvasobj.getContext('2d');
	context.rect(xgridcent[4]-200,ygridcent[4]-200,400,400);
	context.fillStyle="black";
	context.fill();
	context.fillStyle="black";
	context.fillRect(0,0,canvasobj.width,60);
}

async function renderFixationUsingImage(image, gridindex, scale){
	var canvasobj=document.getElementById("canvas"+CANVAS.touchfix);
	var context=canvasobj.getContext('2d');
	context.clearRect(0,0,canvasobj.width,canvasobj.height);

	// Draw fixation dot
	boundingBoxFixation['x'] = []
	boundingBoxFixation['y'] = []

	funcreturn = await renderImageOnCanvas(image, gridindex, scale, CANVAS.touchfix); 
	boundingBoxFixation.x = funcreturn[0]; 
	boundingBoxFixation.y = funcreturn[1]; 
}
function renderFixationUsingDot(color, gridindex, dot_pixelradius){
	var canvasobj=document.getElementById("canvas"+CANVAS.touchfix);
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
	boundingBoxFixation.x = [xcent-rad+CANVAS.offsetleft, xcent+rad+CANVAS.offsetleft];
	boundingBoxFixation.y = [ycent-rad+CANVAS.offsettop, ycent+rad+CANVAS.offsettop];

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
	var canvasobj=document.getElementById("canvas"+CANVAS.eyefix);
	var context=canvasobj.getContext('2d');
	context.fillStyle="red";
	context.fillRect(xgridcent[4]-6,ygridcent[4]-6,12,12);
}
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

