//================== LOAD STATUS DISPLAY ==================//
function refreshCanvasSettings(TASK){
	// TODO: cleanup CANVAS; separate canvas ID from sequence logic; 'tsequence' variables coded by length rather than absolute time

	// Adjust length / toggle presence of gray screen between sample and test screens
	if (TASK.SampleOFF > 0){
		CANVAS.sequence = ["blank", "sample","blank","test"]
		CANVAS.tsequence = [0,100,100+TASK.SampleON,100+TASK.SampleON+TASK.SampleOFF]; 
	}
	else if (TASK.SampleOFF <= 0 ){
		CANVAS.sequence = ["blank","sample","test"]
		CANVAS.tsequence = [0,100,100+TASK.SampleON]; 
	}
	
	// Adjust length of reward screen based on reward amount 
	CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+ENV.RewardDuration*1000;

	// Adjust location of CANVAS based on species-specific setup
	if (TASK.Species == "macaque" || TASK.Species == "human"){
		CANVAS.headsupfraction=0;
	}
	else if (TASK.Species == "marmoset"){
		CANVAS.headsupfraction=1/3-0.06;
	}
}

function writeTextonBlankCanvas(textstr,x,y){
	var blank_canvasobj=CANVAS.obj.blank
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
	canvasobj.addEventListener('touchstart',touchstart_listener,false);
}

function setupCanvas(canvasobj){
	// center in page
	canvasobj.style.top=CANVAS.offsettop + "px";
	canvasobj.style.left=CANVAS.offsetleft + "px";
	canvasobj.width=windowWidth;
	canvasobj.height=windowHeight;
	canvasobj.style.margin="0 auto";
	canvasobj.style.display="block"; //visible

	// assign listeners
	canvasobj.addEventListener('touchstart',touchstart_listener,{capture: false,passive: false}); // handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
	canvasobj.addEventListener('touchmove',touchmove_listener,{passive: false}) // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	canvasobj.addEventListener('touchend',touchend_listener,{capture: false, passive:false});
	canvasobj.addEventListener('mousedown',touchstart_listener,{capture: false,passive: false}); // handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
	canvasobj.addEventListener('mousemove',touchmove_listener,{passive: false}) // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	canvasobj.addEventListener('mouseup',touchend_listener,{capture: false, passive:false});
	// store canvas size
	canvasSize=[canvasobj.width, canvasobj.height];
} 

// Sync: Adjust canvas for the device pixel ratio & browser backing store size
// from http://www.html5rocks.com/en/tutorials/canvas/hidpi/#disqus_thread
function scaleCanvasforHiDPI(canvasobj){
	if (ENV.DevicePixelRatio !== backingStoreRatio){
		context=canvasobj.getContext("2d");
		var oldWidth = canvasobj.width;
		var oldHeight = canvasobj.height;
		canvasobj.width = oldWidth/ENV.CanvasRatio;
		canvasobj.height = oldHeight/ENV.CanvasRatio;
		canvasobj.style.width = windowWidth + "px";
		canvasobj.style.height = windowHeight + "px";
		canvasobj.style.margin="0 auto";
		context.scale(1/ENV.CanvasRatio,1/ENV.CanvasRatio);
	} 
} 


function updateHeadsUpDisplay(){
	var textobj = document.getElementById("headsuptext");

	// Overall performance
	var ncorrect = 0; 
	for (var i=0; i<=trialhistory.correct.length-1; i++){
		ncorrect = ncorrect + trialhistory.correct[i]
	}

	var pctcorrect = Math.round(100 * ncorrect / trialhistory.correct.length);
	// Task type
	var task1 = "";
	var task2 = "";
	if (TASK.RewardStage == 0){
		task1 = "Fixation";
	}
	else if (TASK.RewardStage == 1){
		task1 = TASK.TestGridIndex.length + "-way AFC. ImageBags:" + TASK.ImageBagsSample;
		task2 = TASK.SampleON + "ms, " + TASK.ImageBagsTest.length + "-categories in pool";
	}
	if (CANVAS.headsupfraction > 0){
		textobj.innerHTML = ENV.Subject + ": <font color=green><b>" + pctcorrect 
		+ "%</b></font> " + "(" + ncorrect + " of " + trialhistory.correct.length +")" 
		+ "<br>" + "Estimated Reward: <font color=green><b>" 
		+ Math.round(TASK.RewardPer1000Trials*ncorrect/1000) 
		+ "mL</b></font> (" + Math.round(TASK.RewardPer1000Trials) 
		+ " per 1000)" + "<br> " + "<br>" + " Stage " 
		+ TASK.AutomatorStage + ": " + task1 + "<br>" + task2 + "<br>" + "<br>" 
		+ "<br>" + "<font color=red><b>" + "<font color=blue><b>" + ble.statustext + "<br></font>";
	}
	else if (CANVAS.headsupfraction == 0){
		textobj.innerHTML = ble.statustext
	}
}
//================== IMAGE RENDERING ==================//
// Sync: buffer trial images

function defineImageGrid(ngridpoints, wd, ht, gridscale){
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
	var dx = (document.body.clientWidth - CANVAS.offsetleft)*ENV.CanvasRatio*ENV.DevicePixelRatio/2 - ENV.CanvasRatio*ngridpoints/2*wd*gridscale;
	var dy = (document.body.clientHeight - CANVAS.offsettop)*ENV.CanvasRatio*ENV.DevicePixelRatio/2 - ENV.CanvasRatio*ngridpoints/2*ht*gridscale;
	for (var i=0; i<=xgrid.length-1; i++){
		xgridcent[i]=Math.round(xgrid[i]*wd*gridscale*ENV.CanvasRatio + dx);
		ygridcent[i]=Math.round(ygrid[i]*ht*gridscale*ENV.CanvasRatio + dy);
	}

	return [xgrid, ygrid, xgridcent, ygridcent]
}

async function bufferTrialImages(sample_image, sample_image_grid_index, test_images, test_image_grid_indices, correct_index){

	//========== BUFFER SAMPLE CANVAS ==========//
	var canvasobj=CANVAS.obj.sample
	var context=CANVAS.obj.sample.getContext('2d'); 
	context.fillStyle="#7F7F7F";  // Gray out before buffering sample
	context.fillRect(0,100, canvasobj.width,canvasobj.height); // 100 is for the photodiode bar at the top of the screen
	await renderImageOnCanvas(sample_image, sample_image_grid_index, TASK.SampleScale, CANVAS.obj.sample)
	
	//========== BUFFER TEST CANVAS ==========//
	// Option: gray out before buffering test: (for overriding previous trial's test screen if current trial test screen has transparent elements?)
	var pre_grayout = false 
	if(pre_grayout == true){
		var canvasobj=CANVAS.obj.test;
		selectSampleImage
		var context=canvasobj.getContext('2d');
		context.fillStyle="#7F7F7F";
		context.fillRect(0,100, canvasobj.width,canvasobj.height); // 100 is for the photodiode bar at the top of the screen
	}
	
	boundingBoxesChoice['x'] = []
	boundingBoxesChoice['y'] = []
	// Draw test object(s): 
	for (i = 0; i<test_images.length; i++){
		// If hideTestDistractors, simply do not draw the image
		if(TASK.hideTestDistractors == 1){
			if (correct_index != i){
				boundingBoxesChoice.x.push([NaN, NaN]); 
				boundingBoxesChoice.y.push([NaN, NaN]); 
				continue 
			}
		}		

		funcreturn = await renderImageOnCanvas(test_images[i], test_image_grid_indices[i], TASK.TestScale, CANVAS.obj.test); 
		boundingBoxesChoice.x.push(funcreturn[0]); 
		boundingBoxesChoice.y.push(funcreturn[1]); 
	}

	// Option: draw sample (TODO: remove the blink between sample screen and test screen)
	if (TASK.KeepSampleON==1){
		await renderImageOnCanvas(sample_image, sample_image_grid_index, TASK.SampleScale, CANVAS.obj.test)
	}

}


async function renderImageOnCanvas(image, grid_index, scale, canvasobj){
	var context=canvasobj.getContext('2d');

	var xleft=NaN;
	var ytop=NaN;
	var xbound=[];
	var ybound=[];

	wd = image.width
	ht = image.height
	xleft = Math.round(xgridcent[grid_index] - 0.5*wd*scale*ENV.CanvasRatio);
	ytop = Math.round(ygridcent[grid_index] - 0.5*ht*scale*ENV.CanvasRatio);
	
	context.drawImage(
		image, // Image element
		xleft, // dx: Canvas x-coordinate of image's top-left corner. 
		ytop, // dy: Canvas y-coordinate of  image's top-left corner. 
		image.width*scale*ENV.CanvasRatio, // dwidth. width of drawn image. 
		image.height*scale*ENV.CanvasRatio); // dheight. height of drawn image.

	// For drawing cropped regions of an image in the canvas, see alternate input argument structures,
	// See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
	
	// Bounding boxes of images on canvas
	xbound=[xleft, xleft+wd*scale*ENV.CanvasRatio];
	ybound=[ytop, ytop+ht*scale*ENV.CanvasRatio];

	xbound[0]=xbound[0]+CANVAS.offsetleft;
	xbound[1]=xbound[1]+CANVAS.offsetleft;
	ybound[0]=ybound[0]+CANVAS.offsettop;
	ybound[1]=ybound[1]+CANVAS.offsettop;
	return [xbound, ybound]
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
			var prev_canvasobj=CANVAS.obj[CANVAS.front]
			var curr_canvasobj=CANVAS.obj[sequence[frame.current]]
			if (CANVAS.front != "blank"){
				// Move to back
				prev_canvasobj.style.zIndex="0";
			} 
			if (sequence[frame.current] != "blank"){
				curr_canvasobj.style.zIndex="100";
				CANVAS.front = sequence[frame.current];
			} // move to front
			else{
				CANVAS.front = "blank";
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

function displayTextOnBlackBar(message_string,canvasobj){
	var visible_ctxt = canvasobj.getContext('2d');
	visible_ctxt.textBaseline = "hanging";
	visible_ctxt.fillStyle = "white";
	visible_ctxt.font = "20px Verdana";
	visible_ctxt.fillText(message_string, 20.5,20.5);
}

function renderBlank(canvasobj){
	var context=canvasobj.getContext('2d');
	context.fillStyle="#7F7F7F";
	context.fillRect(0,0,canvasobj.width,canvasobj.height);
}

function renderBlankWithGridMarkers(gridx,gridy,fixationgridindex,samplegridindex,testgridindex,fixationscale,samplescale,testscale,imwidth,canvasratio,canvasobj)
{
	var context=canvasobj.getContext('2d');
	context.fillStyle="#7F7F7F";
	context.fillRect(0,0,canvasobj.width,canvasobj.height);

	//Show image positions & display grid
	//Display grid
	for (var i = 0; i <= gridx.length-1; i++){
		rad = 10
		context.beginPath()
		context.arc(gridx[i],gridy[i],rad,0*Math.PI,2*Math.PI)
		context.fillStyle="red"
		context.fill();
	}

	//Fixation Image Bounding Box
	var wd = imwidth*fixationscale*canvasratio
	var xcent = gridx[fixationgridindex]
	var ycent = gridy[fixationgridindex]
	context.strokeStyle="white"
	context.strokeRect(xcent-wd/2,ycent-wd/2,wd+1,wd+1)
	
	//Sample Image Bounding Box
	var wd = imwidth*samplescale*canvasratio
	var xcent = gridx[samplegridindex]
	var ycent = gridy[samplegridindex]
	context.strokeStyle="green"
	context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)

	//Test Image Bounding Box(es)
	for (var i = 0; i <= testgridindex.length-1; i++){
		var wd = imwidth*testscale*canvasratio
		var xcent = gridx[testgridindex[i]]
		var ycent = gridy[testgridindex[i]]
		context.strokeStyle="black"
		context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)
	}
}

function renderReward(canvasobj){
	var context=canvasobj.getContext('2d');
	context.fillStyle="green";
	context.fillRect(xgridcent[4]-200,ygridcent[4]-200,400,400);
}

function renderPunish(canvasobj){
	var context=canvasobj.getContext('2d');
	context.rect(xgridcent[4]-200,ygridcent[4]-200,400,400);
	context.fillStyle="black";
	context.fill();
}

async function renderFixationUsingImage(image, gridindex, scale, canvasobj){
	var context=canvasobj.getContext('2d');
	context.clearRect(0,0,canvasobj.width,canvasobj.height);

	// Draw fixation dot
	boundingBoxesFixation['x']=[]
	boundingBoxesFixation['y']=[]

	funcreturn = await renderImageOnCanvas(image, gridindex, scale, canvasobj); 
	boundingBoxesFixation.x.push[funcreturn[0]];
	boundingBoxesFixation.y.push[funcreturn[1]];
}
function renderFixationUsingDot(color, gridindex, dot_pixelradius, canvasobj){
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
	boundingBoxesFixation['x']=[]
	boundingBoxesFixation['y']=[]
	boundingBoxesFixation.x.push([xcent-rad+CANVAS.offsetleft, xcent+rad+CANVAS.offsetleft]);
	boundingBoxesFixation.y.push([ycent-rad+CANVAS.offsettop, ycent+rad+CANVAS.offsettop]);
}