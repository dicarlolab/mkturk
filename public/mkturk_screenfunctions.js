function updateProgressbar(pct) {
    var elem = document.getElementById("myBar"); 

	elem.style.width = pct + '%'; 
	elem.innerHTML = Math.round(pct) + '%'; // text
}

function toggleProgressbar(on_or_off){
	var elem = document.getElementById("myProgress"); 

	if(on_or_off == 0){
		elem.style.visibility = 'hidden'
	}
	else if(on_or_off == 1){
		elem.style.visibility = 'visible'
	}
}


//================== LOAD STATUS DISPLAY ==================//
function refreshCanvasSettings(TASK_entry){
	// TODO: cleanup CANVAS; separate canvas ID from sequence logic; 'tsequence' variables coded by length rather than absolute time

	// Adjust length / toggle presence of gray screen between sample and test screens
	if (TASK_entry.t_SampleOFF > 0){
		CANVAS.sequence = ["blank", "sample","blank","test"]
		CANVAS.tsequence = [0,100,100+TASK_entry.t_SampleON,100+TASK_entry.t_SampleON+TASK_entry.t_SampleOFF]; 
	}
	else if (TASK_entry.t_SampleOFF <= 0 ){
		CANVAS.sequence = ["blank","sample","test"]
		CANVAS.tsequence = [0,100,100+TASK_entry.t_SampleON]; 
	}
	
	// Adjust length of reward screen based on reward amount 
	CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+RewardDuration*1000;


}

function writeTextonBlankCanvas(textstr,x,y){
	var blank_canvasobj=CANVAS.obj.blank
	var visible_ctxt = blank_canvasobj.getContext('2d')
	visible_ctxt.textBaseline = "hanging"
	visible_ctxt.fillStyle = "white"
	visible_ctxt.font = "18px Verdana"
	visible_ctxt.fillText(textstr,x,y)
}


//================== CANVAS SETUP ==================//


function setupDragTracker(){

	window.addEventListener('touchmove', function(event){
		// the user touched the screen
		x = Math.round(event.targetTouches[0].clientX)
		y = Math.round(event.targetTouches[0].clientY)
		t = Math.round(performance.now())
		TOUCHSTRING+=x+','+y+','+TOUCHSTRING_UDPATECOUNTER+','+t+',d\n'
		TOUCHSTRING_UDPATECOUNTER+=1

		//console.log(TOUCHSTRING_UDPATECOUNTER)
		//console.log('drag', x, y, t)
	})
}

function setupTapTracker(){
	window.addEventListener('touchstart', function(event){
		// the user touched the screen
		x = Math.round(event.targetTouches[0].clientX)
		y = Math.round(event.targetTouches[0].clientY)
		t = Math.round(performance.now())
		TOUCHSTRING+=x+','+y+','+TOUCHSTRING_UDPATECOUNTER+','+t+',t\n'
		TOUCHSTRING_UDPATECOUNTER+=1
		//console.log(TOUCHSTRING_UDPATECOUNTER)
		//console.log('tap', x, y, t)
	})
}


function setupCanvas(canvasobj){
	// center in page
	canvasobj.style.top=CANVAS.offsettop + "px";
	canvasobj.style.left=CANVAS.offsetleft + "px";
	canvasobj.width=windowWidth - CANVAS.offsetleft;
	canvasobj.height=windowHeight - CANVAS.offsettop;
	canvasobj.style.margin="0 auto";
	canvasobj.style.display="block"; //visible

	// assign listeners
	canvasobj.addEventListener('touchstart',touchstart_listener,{capture: false,passive: false}); // handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
	canvasobj.addEventListener('touchmove',touchmove_listener,{passive: false}) // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	canvasobj.addEventListener('touchend',touchend_listener,{capture: false, passive:false});
	canvasobj.addEventListener('mousedown',touchstart_listener,{capture: false,passive: false}); // handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
	canvasobj.addEventListener('mousemove',touchmove_listener,{passive: false}) // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	canvasobj.addEventListener('mouseup',touchend_listener,{capture: false, passive:false});
} 

// Sync: Adjust canvas for the device pixel ratio & browser backing store size
// from http://www.html5rocks.com/en/tutorials/canvas/hidpi/#disqus_thread
function scaleCanvasforHiDPI(canvasobj){
	if (DEVICE.DevicePixelRatio !== backingStoreRatio){
		context=canvasobj.getContext("2d");
		var oldWidth = canvasobj.width;
		var oldHeight = canvasobj.height;
		canvasobj.width = oldWidth/DEVICE.CanvasRatio;
		canvasobj.height = oldHeight/DEVICE.CanvasRatio;
		canvasobj.style.width = windowWidth - CANVAS.offsetleft + "px";
		canvasobj.style.height = windowHeight - CANVAS.offsettop + "px";
		canvasobj.style.margin="0 auto";
		context.scale(1/DEVICE.CanvasRatio,1/DEVICE.CanvasRatio);
	} 
} 




//================== IMAGE RENDERING ==================//

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
	var canvas_center_x = (document.body.clientWidth - CANVAS.offsetleft)*DEVICE.CanvasRatio*DEVICE.DevicePixelRatio/2
	var dx = canvas_center_x - DEVICE.CanvasRatio*ngridpoints/2*wd*gridscale; //left side of grid
	var canvas_center_y = (document.body.clientHeight - CANVAS.offsettop)*DEVICE.CanvasRatio*DEVICE.DevicePixelRatio/2
	var dy = canvas_center_y - DEVICE.CanvasRatio*ngridpoints/2*ht*gridscale; //top of grid
	for (var i=0; i<=xgrid.length-1; i++){
		xgridcent[i]=Math.round(xgrid[i]*wd*gridscale*DEVICE.CanvasRatio + dx);
		ygridcent[i]=Math.round(ygrid[i]*ht*gridscale*DEVICE.CanvasRatio + dy);
	}

	return [canvas_center_x, canvas_center_y, xgridcent, ygridcent]
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
	var pre_grayout = true 
	if(pre_grayout == true){
		var canvasobj=CANVAS.obj.test;
		var context=canvasobj.getContext('2d');
		context.fillStyle="#7F7F7F";
		context.fillRect(0,100, canvasobj.width,canvasobj.height); // 100 is for the photodiode bar at the top of the screen
	}
	
	boundingBoxesChoice['x'] = []
	boundingBoxesChoice['y'] = []
	// Draw test object(s): 
	for (i = 0; i<test_images.length; i++){
		// If HideTestDistractors, simply do not draw the image
		if(TASK.HideTestDistractors == 1){
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
	xleft = Math.round(DEVICE.XGridCenter[grid_index] - 0.5*wd*scale*DEVICE.CanvasRatio);
	ytop = Math.round(DEVICE.YGridCenter[grid_index] - 0.5*ht*scale*DEVICE.CanvasRatio);
	
	context.drawImage(
		image, // Image element
		xleft, // dx: Canvas x-coordinate of image's top-left corner. 
		ytop, // dy: Canvas y-coordinate of  image's top-left corner. 
		image.width*scale*DEVICE.CanvasRatio, // dwidth. width of drawn image. 
		image.height*scale*DEVICE.CanvasRatio); // dheight. height of drawn image.

	// For drawing cropped regions of an image in the canvas, see alternate input argument structures,
	// See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
	
	// Bounding boxes of images on canvas
	xbound=[xleft, xleft+wd*scale*DEVICE.CanvasRatio];
	ybound=[ytop, ytop+ht*scale*DEVICE.CanvasRatio];

	xbound[0]=xbound[0]+CANVAS.offsetleft;
	xbound[1]=xbound[1]+CANVAS.offsetleft;
	ybound[0]=ybound[0]+CANVAS.offsettop;
	ybound[1]=ybound[1]+CANVAS.offsettop;
	return [xbound, ybound]
}


function displayScreenSequence(sequence,tsequence){
	var resolveFunc
	var errFunc
	p = new Promise(function(resolve,reject){
		resolveFunc = resolve;
		errFunc = reject;
	}).then();
	//console.log('seq', sequence, 'tseq', tsequence)

	var start = null;
	var tActual = []

	var current_frame_index = 0
	var frames_left_to_animate = sequence.length

	function updateCanvas(timestamp){

		// If start has not been set to a float timestamp, set it now.
		if (!start) start = timestamp;

		// If time to show new frame, 
		if (timestamp - start > tsequence[current_frame_index]){
			//console.log('Frame =' + current_frame_index+'. Duration ='+(timestamp-start)+'. Timestamp = ' + timestamp)
			tActual[current_frame_index] = Math.round(100*(timestamp - start))/100 //in milliseconds, rounded to nearest hundredth of a millisecond
			// Move canvas in front
			var prev_canvasobj=CANVAS.obj[CANVAS.front]
			var curr_canvasobj=CANVAS.obj[sequence[current_frame_index]]
			if (CANVAS.front != "blank"){
				// Move to back
				prev_canvasobj.style.zIndex="0";
			} 
			if (sequence[current_frame_index] != "blank"){
				curr_canvasobj.style.zIndex="100";
				CANVAS.front = sequence[current_frame_index];
			} // move to front
			else{
				CANVAS.front = "blank";
			}
			frames_left_to_animate--
			current_frame_index++;
		}; 
		// continue if not all frames shown
		if (frames_left_to_animate>0){
			window.requestAnimationFrame(updateCanvas);
		}
		else{
			resolveFunc(tActual);
		}
	}
	//requestAnimationFrame advantages: goes on next screen refresh and syncs to browsers refresh rate on separate clock (not js clock)
	window.requestAnimationFrame(updateCanvas); // kick off async work
	return p
} 

function renderBlank(canvasobj){
	var context=canvasobj.getContext('2d');
	context.fillStyle="#7F7F7F";
	context.fillRect(0,0,canvasobj.width,canvasobj.height);
}

function renderBlankWithGridMarkers(gridx,gridy,fixationgridindex,samplegridindex,testgridindex,fixationscale,samplescale,testscale,imwidth,canvasratio,canvasobj)
{
	var outofbounds_str = ''
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

		var displaycoord = [gridx[i]-rad,gridy[i]-rad,gridx[i]+rad,gridy[i]+rad]
		var outofbounds=checkDisplayBounds(displaycoord)
		if (outofbounds == 1){
			outofbounds_str = outofbounds_str + "<br>" + "gridpoint" + i + " is out of bounds"
		}
	}

	//Fixation Image Bounding Box
	var wd = imwidth*fixationscale*canvasratio
	var xcent = gridx[fixationgridindex]
	var ycent = gridy[fixationgridindex]
	context.strokeStyle="white"
	context.strokeRect(xcent-wd/2,ycent-wd/2,wd+1,wd+1)

	var displaycoord = [xcent-wd/2,ycent-wd/2,xcent+wd/2,ycent+wd/2]
	var outofbounds=checkDisplayBounds(displaycoord)
	if (outofbounds == 1){
		outofbounds_str = outofbounds_str + "<br>" + "Fixation dot is out of bounds"
	}
	displayPhysicalSize(TASK.Tablet,displaycoord,canvasobj)

	
	//Sample Image Bounding Box
	var wd = imwidth*samplescale*canvasratio
	var xcent = gridx[samplegridindex]
	var ycent = gridy[samplegridindex]
	context.strokeStyle="green"
	context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)

	var displaycoord = [xcent-wd/2,ycent-wd/2,xcent+wd/2,ycent+wd/2]
	var outofbounds=checkDisplayBounds(displaycoord)
	if (outofbounds == 1){
		outofbounds_str = outofbounds_str + "<br>" + "Sample Image is out of bounds"
	}
	displayPhysicalSize(TASK.Tablet,displaycoord,canvasobj)


	//Test Image Bounding Box(es)
	for (var i = 0; i <= testgridindex.length-1; i++){
		var wd = imwidth*testscale*canvasratio
		var xcent = gridx[testgridindex[i]]
		var ycent = gridy[testgridindex[i]]
		context.strokeStyle="black"
		context.strokeRect(xcent-wd/2,ycent-wd/2,wd,wd)

		displaycoord = [xcent-wd/2,ycent-wd/2,xcent+wd/2,ycent+wd/2]
		var outofbounds=checkDisplayBounds(displaycoord)
		if (outofbounds == 1){
			outofbounds_str = outofbounds_str + "<br>" + "Test Image" + i + " is out of bounds"
		}
		displayPhysicalSize(TASK.Tablet,displaycoord,canvasobj)
	}
	if (outofbounds_str == ''){
		outofbounds_str = 'All display elements are fully visible'
	}

	displayoutofboundsstr = outofbounds_str
	updateImageLoadingAndDisplayText(' ')
}

function renderReward(canvasobj){
	var context=canvasobj.getContext('2d');
	context.fillStyle="green";
	context.fillRect(xcanvascenter-200,ycanvascenter-200,400,400);
}

function renderPunish(canvasobj){
	var context=canvasobj.getContext('2d');
	context.rect(xcanvascenter-200,ycanvascenter-200,400,400);
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
	boundingBoxesFixation.x.push(funcreturn[0]);
	boundingBoxesFixation.y.push(funcreturn[1]);
}
function renderFixationUsingDot(color, gridindex, dot_pixelradius, canvasobj){
	var context=canvasobj.getContext('2d');
	context.clearRect(0,0,canvasobj.width,canvasobj.height);

	// Draw fixation dot
	var rad = dot_pixelradius;
	var xcent = DEVICE.XGridCenter[gridindex];
	var ycent = DEVICE.YGridCenter[gridindex];
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

function checkDisplayBounds(displayobject_coord){
	var outofbounds=0
	if (displayobject_coord[0] < CANVAS.workspace[0] ||
		displayobject_coord[1] < CANVAS.workspace[1] ||
		displayobject_coord[2] > CANVAS.workspace[2] ||
		displayobject_coord[3] > CANVAS.workspace[3]){
		outofbounds=1
	}
	return outofbounds
}



function displayPhysicalSize(tabletname,displayobject_coord,canvasobj){
	if (tabletname == "nexus9"){
		var dpi = 281
	}
	else if (tabletname == "samsung10"){
		var dpi = 287
	}
	else if (tabletname == "samsung8"){
		var dpi = 359
	}
	else if (tabletname == "pixelc"){
		var dpi = 308
	}
	else {
		var dpi = -1
	}
	var visible_ctxt = canvasobj.getContext('2d');
	visible_ctxt.textBaseline = "hanging";
	visible_ctxt.fillStyle = "white";
	visible_ctxt.font = "16px Verdana";
	visible_ctxt.fillText( 
		Math.round(100*(displayobject_coord[2]-displayobject_coord[0])/dpi/DEVICE.CanvasRatio)/100 +
		' x ' +
		Math.round(100*(displayobject_coord[3]-displayobject_coord[1])/dpi/DEVICE.CanvasRatio)/100 + 
		' in', 
		displayobject_coord[0],displayobject_coord[1]-16
	);
}