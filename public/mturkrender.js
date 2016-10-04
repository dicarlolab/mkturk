// IMAGE DISPLAY
	// Sync: buffer trial images
function bufferTrialImages(){
	// (pre)render canvas (synchronous)
	function renderCanvas(idxcv,idxim,usesample,grid){
		var canvasobj=document.getElementById("canvas"+idxcv);
		var context=canvasobj.getContext('2d');

		// gray out the canvas
		context.fillStyle="#7F7F7F";
		context.fillRect(0,0,canvasobj.width,canvasobj.height);

		context.fillStyle="black";
		context.fillRect(0,0,canvasobj.width,60);

		var indpos
		indpos=grid;

		var xleft=[];
		var ytop=[];
		var xbound=[];
		var ybound=[];
		for (var i in idxim){
			if (usesample==true){
				xleft[i] = xgridcent[indpos[i]] - 0.5*imagesSample.wd*imagesSample.scale/canvasScale;
				ytop[i] = ygridcent[indpos[i]] - 0.5*imagesSample.ht*imagesSample.scale/canvasScale;

				context.drawImage(imagesSamplePack[imagesSample.packpointer[idxim[i]]],imagesSample.pixLR[idxim[i]][0],0,imagesSample.wd,imagesSample.ht,xleft[i],ytop[i],imagesSample.wd*imagesSample.scale/canvasScale,imagesSample.ht*imagesSample.scale/canvasScale);

				xbound=[xleft[i], xleft[i]+imagesSample.wd*imagesSample.scale/canvasScale];
				ybound=[ytop[i], ytop[i]+imagesSample.ht*imagesSample.scale/canvasScale];
			}
			else if (usesample==false && parseInt(i) == trial.correctItem[trial.current]){
				xleft[i] = xgridcent[indpos[i]] - 0.5*imagesTest.wd*imagesTest.scale/canvasScale;
				ytop[i] = ygridcent[indpos[i]] - 0.5*imagesTest.ht*imagesTest.scale/canvasScale;

				context.drawImage(imagesTestPack[imagesTest.packpointer[idxim[i]]],imagesTest.pixLR[idxim[i]][0],0,imagesTest.wd,imagesTest.ht,xleft[i],ytop[i],imagesTest.wd*imagesTest.scale/canvasScale,imagesTest.ht*imagesTest.scale/canvasScale);

				xbound[i]=[xleft[i], xleft[i]+imagesTest.wd*imagesTest.scale/canvasScale];
				ybound[i]=[ytop[i], ytop[i]+imagesTest.ht*imagesTest.scale/canvasScale];
			}
			else if (usesample==false && parseInt(i) != trial.correctItem[trial.current]){
				xleft[i] = xgridcent[indpos[i]] - 0.5*imagesTest.wd*imagesTest.scale*(1-trial.hidetestdistractors)/canvasScale;
				ytop[i] = ygridcent[indpos[i]] - 0.5*imagesTest.ht*imagesTest.scale*(1-trial.hidetestdistractors)/canvasScale;

				context.drawImage(imagesTestPack[imagesTest.packpointer[idxim[i]]],imagesTest.pixLR[idxim[i]][0],0,imagesTest.wd,imagesTest.ht,xleft[i],ytop[i],imagesTest.wd*imagesTest.scale*(1-trial.hidetestdistractors)/canvasScale,imagesTest.ht*imagesTest.scale*(1-trial.hidetestdistractors)/canvasScale);

				xbound[i]=[xleft[i], xleft[i]+imagesTest.wd*imagesTest.scale*(1-trial.hidetestdistractors)/canvasScale];
				ybound[i]=[ytop[i], ytop[i]+imagesTest.ht*imagesTest.scale*(1-trial.hidetestdistractors)/canvasScale];
			}

			// if (grid.length > 1 && trial.hidetestdistractors==1 && parseInt(i) != trial.correctItem[trial.current]){
			// 	context.fillStyle="#7F7F7F";
			// 	context.fillRect(xleft[i],ytop[i],imagesTest.wd*imagesTest.scale/canvasScale,imagesTest.ht*imagesTest.scale/canvasScale);

			// 	xbound[i]=[xleft[i], xleft[i]+imagesTest.wd*imagesTest.scale/canvasScale];
			// 	ybound[i]=[ytop[i], ytop[i]+imagesTest.ht*imagesTest.scale/canvasScale];
			// } //gray out distractors

			if (usesample == false){
				if (xbound[i][0] < 0 || ybound[i][0] < 0
					|| xbound[i][1] > canvasobj.width/canvasScale || ybound[i][1] > canvasobj.height/canvasScale)
				{
					trial.displayoutofbounds=1
				}
			}
		};

		// bounding boxes of images on canvas
		return {
			x: xbound,
			y: ybound
		};
	}

	//buffer (sample & test canvases)

	//sample
	if (trial.fixationusessample == 0){
		renderCanvas(canvas.sample,[trial.sample[trial.current]],true,trial.samplegrid);
	}
	else if (trial.fixationusessample == 1){
		boundingBoxFixation = renderCanvas(canvas.sample,[trial.sample[trial.current]],true,trial.samplegrid);
	}
	
	//test
	if (trial.keepSampleON==1){
		renderCanvas(canvas.test,[trial.sample[trial.current]],true,trial.samplegrid);
	}
	boundingBoxesTest = renderCanvas(canvas.test,trial.test[trial.current],false,trial.testgrid);
	canvas.buffered = 1;
}

// Promise: display trial images
function displayTrial(sequence,tsequence){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then(5);

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


// IMAGE DISPLAY (end)

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
	context.clearRect(0,0,canvasobj.width,canvasobj.height);
	context.fillStyle="white";
	context.fillRect(hgridcent-200,vgridcent-200,400,400);

	// bar across top for photodiode
	if (env.species == 'marmoset'){
		context.fillStyle="black";
		context.fillRect(0,0,canvasobj.width,100);
	}
}

function renderPhotoReward(){
	var canvasobj=document.getElementById("canvas"+canvas.photoreward);
	var context=canvasobj.getContext('2d');
	context.clearRect(0,0,canvasobj.width,canvasobj.height);
	context.fillStyle="white";
	context.fillRect(hgridcent-200,vgridcent-200,400,400);

	// bar across top for photodiode
	if (env.species == 'marmoset'){
		context.fillStyle="white";
		context.fillRect(0,0,canvasobj.width,100);
	}

}


function renderPunish(){
	var canvasobj=document.getElementById("canvas"+canvas.punish);
	var context=canvasobj.getContext('2d');
	context.clearRect(0,0,canvasobj.width,canvasobj.height);
	context.fillStyle="black";
	context.fillRect(hgridcent-200,vgridcent-200,400,400);

	// bar across the top
	context.fillStyle="black";
	context.fillRect(0,0,canvasobj.width,60);
}

function renderTouchFixation(){
	var canvasobj=document.getElementById("canvas"+canvas.touchfix);
	var context=canvasobj.getContext('2d');
	context.clearRect(0,0,canvasobj.width,canvasobj.height);

	var rad = trial.fixationradius;
	var xcent = xgridcent[trial.fixationgrid[trial.current]];
	var ycent = ygridcent[trial.fixationgrid[trial.current]];

	context.beginPath();
	context.arc(xcent,ycent,rad,0*Math.PI,2*Math.PI);

	if (env.species == "macaque"){
		context.fillStyle="white";
	}
	else if (env.species == "marmoset"){
		context.fillStyle="blue";
	}

	context.fill();
	boundingBoxFixation.x = [xcent-rad, xcent+rad];
	boundingBoxFixation.y = [ycent-rad, ycent+rad];

	// //add eye fixation
	// context.fillStyle="red";
	// context.fillRect(xgridcent[4]-6,ygridcent[4]-6,12,12);

	// // add red dot in center
	// context.fillStyle="red";
	// context.fillRect(xgridcent[trial.fixationgrid[trial.current]]+rad/2-6,xgridcent[trial.fixationgrid[trial.current]]-rad/2-6,12,12);

	context.fillStyle="black";
	context.fillRect(0,0,canvasobj.width,40);
}

function renderEyeFixation(){
	var canvasobj=document.getElementById("canvas"+canvas.eyefix);
	var context=canvasobj.getContext('2d');
	context.clearRect(0,0,canvasobj.width,canvasobj.height);
	context.fillStyle="red";
	context.fillRect(hgridcent-6,vgridcent-6,12,12);
}
