//================== CANVAS SETUP ==================//
// Sync: Setup heads-up display canvas
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
// Sync: Setup canvas
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
	// handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
	canvasobj.addEventListener('mousedown',mousedown_listener,false);
	canvasobj.addEventListener('mousemove',mousemove_listener,false);
	canvasobj.addEventListener('mouseup',mouseup_listener,false);
	canvasobj.addEventListener('touchstart',touchstart_listener,false);
	// canvasobj.addEventListener('touchmove',touchmove_listener,false);
	canvasobj.addEventListener('touchmove',touchmove_listener,{passive: true}) // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	canvasobj.addEventListener('touchend',touchend_listener,false);
	// store canvas size
	canvasSize=[canvasobj.width, canvasobj.height];
} //setupCanvas
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
	} //if
} //scaleCanvasforHiDPI
//================== (end) CANVAS SETUP ==================//
//================== IMAGE RENDERING ==================//
// Sync: buffer trial images
function bufferTrialImages(){
	// (pre)render canvas (synchronous)
	function renderCanvas(idxcv,idxim,usesample,grid,scale){
		var canvasobj=document.getElementById("canvas"+idxcv);

		var context=canvasobj.getContext('2d');

		var indpos
		indpos=grid;

		var xleft=[];
		var ytop=[];
		var xbound=[];
		var ybound=[];
		for (var i in idxim){
			if (usesample==true){
				xleft[i] = Math.round(xgridcent[indpos[i]] - 0.5*imagesSample.wd*scale/canvasScale);
				ytop[i] = Math.round(ygridcent[indpos[i]] - 0.5*imagesSample.ht*scale/canvasScale);

				context.drawImage(imagesSamplePack[imagesSample.packpointer[idxim[i]]],imagesSample.pixLR[idxim[i]][0],0,imagesSample.wd,imagesSample.ht,xleft[i],ytop[i],imagesSample.wd*scale/canvasScale,imagesSample.ht*scale/canvasScale);

				xbound[i]=[xleft[i], xleft[i]+imagesSample.wd*scale/canvasScale];
				ybound[i]=[ytop[i], ytop[i]+imagesSample.ht*scale/canvasScale];
			} //Draw from SAMPLE folder
			else if (usesample==false){
				xleft[i] = Math.round(xgridcent[indpos[i]] - 0.5*imagesTest.wd*scale/canvasScale);
				ytop[i] = Math.round(ygridcent[indpos[i]] - 0.5*imagesTest.ht*scale/canvasScale);

				context.drawImage(imagesTestPack[imagesTest.packpointer[idxim[i]]],imagesTest.pixLR[idxim[i]][0],0,imagesTest.wd,imagesTest.ht,xleft[i],ytop[i],imagesTest.wd*scale/canvasScale,imagesTest.ht*scale/canvasScale);

				xbound[i]=[xleft[i], xleft[i]+imagesTest.wd*scale/canvasScale];
				ybound[i]=[ytop[i], ytop[i]+imagesTest.ht*scale/canvasScale];
			} //Draw from TEST folder

			if (grid.length > 1 && trial.hidetestdistractors==1 && parseInt(i) != trial.correctItem[trial.current]){
				context.fillStyle="#7F7F7F";
				context.fillRect(xleft[i],ytop[i],imagesTest.wd*scale/canvasScale,imagesTest.ht*scale/canvasScale);

				xbound[i]=[xleft[i], xleft[i]+imagesTest.wd*scale/canvasScale];
				ybound[i]=[ytop[i], ytop[i]+imagesTest.ht*scale/canvasScale];
			} //gray out distractors
			xbound[i][0]=xbound[i][0]+canvas.offsetleft;
			xbound[i][1]=xbound[i][1]+canvas.offsetleft;
			ybound[i][0]=ybound[i][0]+canvas.offsettop;
			ybound[i][1]=ybound[i][1]+canvas.offsettop;
		};

		// bounding boxes of images on canvas
		return {
			x: xbound,
			y: ybound
		};
	}

	//buffer (fixation, sample & test canvases)

	//Fixation Canvas
	if (trial.fixationusessample == 1){
		var canvasobj
		var canvasobj=document.getElementById("canvas"+canvas.touchfix); // Gray out before buffering sample
		var context=canvasobj.getContext('2d');
		context.fillStyle="#7F7F7F";
		context.fillRect(0,100, canvasobj.width,canvasobj.height); // 100 is for the photodiode bar at the top of the screen

		boundingBoxesFixation = renderCanvas(canvas.touchfix,[trial.sample[trial.current]],true,[trial.fixationgrid[trial.current]],trial.fixationScale);
	}

	//Sample Canvas
	var canvasobj=document.getElementById("canvas"+canvas.sample); // Gray out before buffering sample
	var context=canvasobj.getContext('2d');
	context.fillStyle="#7F7F7F";
	context.fillRect(0,100, canvasobj.width,canvasobj.height); // 100 is for the photodiode bar at the top of the screen

	renderCanvas(canvas.sample,[trial.sample[trial.current]],true,[trial.samplegrid],trial.sampleScale);
	
	//Test Canvas
	var canvasobj=document.getElementById("canvas"+canvas.test); // Gray out before buffering test
	var context=canvasobj.getContext('2d');
	context.fillStyle="#7F7F7F";
	context.fillRect(0,100, canvasobj.width,canvasobj.height); // 100 is for the photodiode bar at the top of the screen

	if (trial.keepSampleON==1){
		renderCanvas(canvas.test,[trial.sample[trial.current]],true,[trial.samplegrid],trial.sampleScale);
	}

	//** SR
	// use objectgrid instead of testgrid for positioning choices
	if (trial.objectgrid.length == trial.objectlist.length){
		for (var i=0; i<=trial.test[trial.current].length-1; i++){
			// Determine which object/grid image belongs to
			var currobj = imagesTest.obj[trial.test[trial.current][i]]
			var currind = []
			for (var j=0; j<=trial.objectlist.length-1; j++){
				if (trial.objectlist[j]==currobj){
					currind = j // index of object currently being looked at
				}
			}
			trial.testgrid[i] = trial.objectgrid[currind] // test locations are set by objectgrid
		}
	}
	//** SR end


	boundingBoxesTest = renderCanvas(canvas.test,trial.test[trial.current],false,trial.testgrid,trial.testScale);
	canvas.buffered = 1;
}

// Promise: display trial images
function displayTrial(sequence,tsequence){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then(function(){
		//console.log('displayed images')
	});
	var start = null;
	function updateCanvas(timestamp){
		if (!start) start = timestamp;
		if (timestamp - start > tsequence[frame.current]){
			//console.log('displaying frame' + currframe + ' ' + timestamp);
			// Move canvas in front
			var prev_canvasobj=document.getElementById("canvas"+canvas.front);
			var curr_canvasobj=document.getElementById("canvas"+sequence[frame.current]);
			if (canvas.front != canvas.blank){
				prev_canvasobj.style.zIndex="0";
			} // move back
			if (sequence[frame.current] != canvas.blank){
				curr_canvasobj.style.zIndex="100";
				canvas.front = sequence[frame.current];
			} // move to front
			else{
				canvas.front = canvas.blank;
			}
			
			frame.shown[frame.current]=1;
			frame.current++;
		}; // if show new frame
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
} //displayTrial
function renderBlank(){
	var canvasobj=document.getElementById("canvas"+canvas.blank);
	var context=canvasobj.getContext('2d');
	context.fillStyle="#7F7F7F";
	context.fillRect(0,0,canvasobj.width,canvasobj.height);
	context.fillStyle="black";
	context.fillRect(0,0,canvasobj.width,60);

	if (trial.savedata == 0){
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
		for (var i = 0; i <= trial.fixationgridindex.length-1; i++){
			var wd = imagesSample.wd*trial.fixationScale/canvasScale
			var xcent = xgridcent[trial.fixationgridindex[i]]
			var ycent = ygridcent[trial.fixationgridindex[i]]
			context.strokeStyle="white"
			context.strokeRect(xcent-wd/2,ycent-wd/2,wd+1,wd+1)
		}

		//Sample Image Bounding Box
		for (var i = 0; i <= trial.samplegrid.length-1; i++){
			var wd = imagesSample.wd*trial.sampleScale/canvasScale
			var xcent = xgridcent[trial.samplegrid[i]]
			var ycent = ygridcent[trial.samplegrid[i]]
			context.strokeStyle="green"
			context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)
		}

		//Test Image Bounding Boxes
		for (var i = 0; i <= trial.testgrid.length-1; i++){
			var wd = imagesTest.wd*trial.testScale/canvasScale
			var xcent = xgridcent[trial.testgrid[i]]
			var ycent = ygridcent[trial.testgrid[i]]
			context.strokeStyle="black"
			context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)
		}
	}//if in debug mode, plot location of display elements
}
function renderReward(){
	var canvasobj=document.getElementById("canvas"+canvas.reward);
	var context=canvasobj.getContext('2d');
	context.fillStyle="green";
	context.fillRect(xgridcent[4]-200,ygridcent[4]-200,400,400);
	if (trial.species == 'marmoset'){
		context.fillStyle="black";
		context.fillRect(0,0,canvasobj.width,100);
	}
}
function renderPhotoReward(){
	var canvasobj=document.getElementById("canvas"+canvas.photoreward);
	var context=canvasobj.getContext('2d');
	context.fillStyle="green";
	context.fillRect(xgridcent[4]-200,ygridcent[4]-200,400,400);
	if (trial.species == 'marmoset'){
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
function renderTouchFixation(){
	var canvasobj=document.getElementById("canvas"+canvas.touchfix);
	var context=canvasobj.getContext('2d');
	context.clearRect(0,0,canvasobj.width,canvasobj.height);

	var rad = trial.fixationScale * imagesSample.wd / 2 /canvasScale;
	var xcent = xgridcent[trial.fixationgrid[trial.current]];
	var ycent = ygridcent[trial.fixationgrid[trial.current]];

	context.beginPath();
	context.arc(xcent,ycent,rad,0*Math.PI,2*Math.PI);

	if (trial.species == "macaque" || trial.species == "human"){
		context.fillStyle="white";
	}
	else if (trial.species == "marmoset"){
		context.fillStyle="blue";
	}

	context.fill();
	boundingBoxesFixation.x[0] = [xcent-rad+canvas.offsetleft, xcent+rad+canvas.offsetleft];
	boundingBoxesFixation.y[0] = [ycent-rad+canvas.offsettop, ycent+rad+canvas.offsettop];

	context.fillStyle="black";
	context.fillRect(0,0,canvasobj.width,40);
}
function renderEyeFixation(){
	var canvasobj=document.getElementById("canvas"+canvas.eyefix);
	var context=canvasobj.getContext('2d');
	context.fillStyle="red";
	context.fillRect(xgridcent[4]-6,ygridcent[4]-6,12,12);
}
//================== (end) IMAGE RENDERING ==================//