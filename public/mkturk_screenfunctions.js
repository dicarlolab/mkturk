function updateSessionTextbox(SubjectID, ExperimentName){
	  var sess_textbox = document.getElementById("SessionTextBox")

	  var line1_prefix = "<b>Subject:</b> "
	  var linebreak = "<br>"
	  var line2_prefix = "<b>Experiment:</b> "

	  sess_textbox.innerHTML = line1_prefix + SubjectID + linebreak + line2_prefix + ExperimentName
}

function writeToTrialCounterDisplay(s){
	var elem = document.getElementById('TrialCounter')
	elem.innerHTML = s; // text
}



function toggleElement(on_or_off, element_id){
		var elem = document.getElementById(element_id)
	if(on_or_off == 0){
		elem.style.visibility = 'hidden'
	}
	else if(on_or_off == 1){
		elem.style.visibility = 'visible'
	}
}

function updateProgressbar(pct, bar_id, text_prefix) {
	var max_bar_width = 30
    var elem = document.getElementById(bar_id); 

	elem.style.width = max_bar_width*pct/100+"%" // pct + '%'; 
	elem.innerHTML = text_prefix + ' ' + Math.round(pct) + '%'; // text
}

function toggleProgressbar(on_or_off, bar_id){
	var elem = document.getElementById(bar_id); 

	if(on_or_off == 0){
		elem.style.visibility = 'hidden'
	}
	else if(on_or_off == 1){
		elem.style.visibility = 'visible'
	}
}


function updateCashInButtonText(trials, bonus_earned, cash_in_option){
	var elem = document.querySelector("button[name=WorkerCashInButton]")

	if(cash_in_option == false){
		var button_string = 'Trials left: '+trials+'<br>Bonus: $'+bonus_earned.toFixed(3)
	}
	else if(cash_in_option == true){
		var button_string = 'CLICK TO SUBMIT<br>Bonus trials: '+trials+'<br>Bonus: $'+bonus_earned.toFixed(3)
	}
	elem.innerHTML = button_string

}	
function toggleCashInButtonClickability(on_or_off){
	var elem = document.querySelector("button[name=WorkerCashInButton]")
	if(on_or_off == 0){
		elem.disabled = true
		elem.style["background-color"] = "#DBDDDF"
		elem.style["color"] = "#767373"
	}
	else{
		elem.disabled = false
		elem.style["background-color"] = "#00cc66"
		elem.style["color"] = "#f7fcf8"


	}
	return
}


//================== LOAD STATUS DISPLAY ==================//
function refreshCanvasSettings(EXPERIMENT_entry){
	// TODO: cleanup CANVAS; separate canvas ID from sequence logic; 'tsequence' variables coded by length rather than absolute time

	// Adjust length / toggle presence of gray screen between sample and test screens
	if (EXPERIMENT_entry.t_SampleOFF > 0){
		CANVAS.sequence = ["sample","blank","test"]
		CANVAS.tsequence = [EXPERIMENT_entry.t_SampleON,TASK_entry.t_SampleON+EXPERIMENT_entry.t_SampleOFF, EXPERIMENT_entry.t_SampleON+EXPERIMENT_entry.t_SampleOFF]; 
	}
	else if (EXPERIMENT_entry.t_SampleOFF <= 0 ){
		CANVAS.sequence = ["blank","sample","test"]
		CANVAS.tsequence = [0,100,100+EXPERIMENT_entry.t_SampleON]; 
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

function setupMouseTracker(){
	console.log('setupmousetracker')
	// https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
	document.onmousemove = handleMouseMove;
	function handleMouseMove(event){
		t = Math.round(performance.now())
		var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        // Use event.pageX / event.pageY her

        MOUSESTRING+=Math.round(event.pageX)
        MOUSESTRING+=','+Math.round(event.pageY)
        MOUSESTRING+=','+t+'\n'
        MOUSESTRING_UPDATE_COUNTER+=1

	}
}

function setupDragTracker(){

	window.addEventListener('touchmove', function(event){
		// the user touched the screen
		pageX = event.targetTouches[0].pageX
		pageY = event.targetTouches[0].pageY

		clientXdelta_from_pageX = event.targetTouches[0].clientX - pageX
		clientYdelta_from_pageY = event.targetTouches[0].clientY - pageY
		
		screenXdelta_from_pageX = Math.round(event.targetTouches[0].screenX - pageX)
		screenYdelta_from_pageY = Math.round(event.targetTouches[0].screenY - pageY)

		radiusX = Math.round(event.targetTouches[0].radiusX)
		radiusY = Math.round(event.targetTouches[0].radiusY)
		t = Math.round(performance.now())


		TOUCHSTRING+= Math.round(pageX)
		TOUCHSTRING+=','+Math.round(pageY)
		
		TOUCHSTRING+=','+clientXdelta_from_pageX
		TOUCHSTRING+=','+clientYdelta_from_pageY

		TOUCHSTRING+=','+screenXdelta_from_pageX
		TOUCHSTRING+=','+screenYdelta_from_pageX
		
		TOUCHSTRING+=','+radiusX
		TOUCHSTRING+=','+radiusY

		TOUCHSTRING+=','+TOUCHSTRING_UDPATECOUNTER
		TOUCHSTRING+=','+t
		TOUCHSTRING+=',d\n'

		TOUCHSTRING_UDPATECOUNTER+=1

		//console.log(TOUCHSTRING_UDPATECOUNTER)
		//console.log('drag', x, y, t)
	},  {passive: true})
}
//passive event handlers: 
//https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive
function setupTapTracker(){
	window.addEventListener('touchstart', function(event){

		pageX = event.targetTouches[0].pageX
		pageY = event.targetTouches[0].pageY

		clientXdelta_from_pageX = event.targetTouches[0].clientX - pageX
		clientYdelta_from_pageY = event.targetTouches[0].clientY - pageY
		
		screenXdelta_from_pageX = Math.round(event.targetTouches[0].screenX - pageX)
		screenYdelta_from_pageX = Math.round(event.targetTouches[0].screenY - pageY)

		radiusX = Math.round(event.targetTouches[0].radiusX)
		radiusY = Math.round(event.targetTouches[0].radiusY)
		t = Math.round(performance.now())


		TOUCHSTRING+= Math.round(pageX)
		TOUCHSTRING+=','+Math.round(pageY)
		
		TOUCHSTRING+=','+clientXdelta_from_pageX
		TOUCHSTRING+=','+clientYdelta_from_pageY

		TOUCHSTRING+=','+screenXdelta_from_pageX
		TOUCHSTRING+=','+screenYdelta_from_pageX
		
		TOUCHSTRING+=','+radiusX
		TOUCHSTRING+=','+radiusY

		TOUCHSTRING+=','+TOUCHSTRING_UDPATECOUNTER
		TOUCHSTRING+=','+t
		TOUCHSTRING+=',t\n'

		TOUCHSTRING_UDPATECOUNTER+=1
	},  {passive: true})
}


function setupCanvas(canvasobj){
	// center in page
	canvasobj.style.top=CANVAS.offsettop + "px";
	canvasobj.style.left=CANVAS.offsetleft + "px";
	canvasobj.width=windowWidth - CANVAS.offsetleft;
	canvasobj.height=windowHeight - CANVAS.offsettop;
	canvasobj.style.margin="0 auto";
	canvasobj.style.display="block"; //visible

	// canvasobj.addEventListener('touchstart', function(e){e.preventDefault()})
	// canvasobj.addEventListener('touchmove', function(e){e.preventDefault()})
	
	//assign listeners
	//canvasobj.addEventListener('touchstart',touchstart_listener,{capture: false,passive: false}); // handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
	//canvasobj.addEventListener('touchmove',touchmove_listener,{passive: false}) // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	//canvasobj.addEventListener('touchend',touchend_listener,{capture: false, passive:false});
	//canvasobj.addEventListener('mousedown',touchstart_listener,{capture: false,passive: false}); // handle touch & mouse behavior independently http://www.html5rocks.com/en/mobile/touchandmouse/
	//canvasobj.addEventListener('mousemove',touchmove_listener,{passive: false}) // based on console suggestion: Consider marking event handler as 'passive' to make the page more responive. https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
	//canvasobj.addEventListener('mouseup',touchend_listener,{capture: false, passive:false});
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

function defineImageGrid(ngridpoints, source_image_width, source_image_height, gridscale){
	var unitgrid_x =[]
	var unitgrid_y =[]
	var xgridcent =[] 
	var ygridcent =[]

	console.log('defineImageGrid')
	console.log(ngridpoints, source_image_width, source_image_height, gridscale)
	var cnt=0;
	for (var i=1; i<=ngridpoints; i++){
		for (var j=1; j<=ngridpoints; j++){
			unitgrid_x[cnt]=i - 1/2;
			unitgrid_y[cnt]=j - 1/2;
			cnt++;
		}
	}
	console.log(windowWidth, windowHeight, CANVAS.offsetleft, CANVAS.offsettop, DEVICE.CanvasRatio, 
		DEVICE.DevicePixelRatio)
	//center x & y grid within canvas
	var canvas_center_x = (windowWidth - CANVAS.offsetleft)*DEVICE.CanvasRatio*DEVICE.DevicePixelRatio/2
	var dx = canvas_center_x - DEVICE.CanvasRatio*ngridpoints/2*source_image_width*gridscale; //left side of grid
	var canvas_center_y = (windowHeight - CANVAS.offsettop)*DEVICE.CanvasRatio*DEVICE.DevicePixelRatio/2
	var dy = canvas_center_y - DEVICE.CanvasRatio*ngridpoints/2*source_image_height*gridscale; //top of grid
	for (var i=0; i<=unitgrid_x.length-1; i++){
		xgridcent[i]=Math.round(unitgrid_x[i]*source_image_width*gridscale*DEVICE.CanvasRatio + dx);
		ygridcent[i]=Math.round(unitgrid_y[i]*source_image_height*gridscale*DEVICE.CanvasRatio + dy);
	}
	return [canvas_center_x, canvas_center_y, xgridcent, ygridcent]
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

class ScreenDisplayer{

	constructor(){

	}

	displayScreenSequence(sequence,tsequence){
		var resolveFunc
		var errFunc
		var p = new Promise(function(resolve,reject){
			resolveFunc = resolve;
			errFunc = reject;
		}).then();
		//console.log('seq', sequence, 'tseq', tsequence)

		var start = null;
		var frame_unix_timestamps = []

		var current_frame_index = 0
		var frames_left_to_animate = sequence.length

		function updateCanvas(timestamp){
			// If start has not been set to a float timestamp, set it now.
			if (!start) start = timestamp;

			// If time to show new frame, 
			if (timestamp - start > tsequence[current_frame_index]){
				frame_unix_timestamps[current_frame_index] = performance.now() //in milliseconds, rounded to nearest hundredth of a millisecond
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
		
				resolveFunc(frame_unix_timestamps);
			}
		}

		//requestAnimationFrame advantages: goes on next screen refresh and syncs to browsers refresh rate on separate clock (not js clock)
		window.requestAnimationFrame(updateCanvas); // kick off async work
		return p
	} 
	renderBlank(canvasobj){
		var context=canvasobj.getContext('2d');
		context.fillStyle="#7F7F7F";
		context.fillRect(0,0,canvasobj.width,canvasobj.height);
	}


	renderReward(canvasobj){
		var context=canvasobj.getContext('2d');
		context.fillStyle="green";
		context.fillRect(xcanvascenter-200,ycanvascenter-200,400,400);
	}

	renderPunish(canvasobj){
		var context=canvasobj.getContext('2d');
		context.rect(xcanvascenter-200,ycanvascenter-200,400,400);
		context.fillStyle="black";
		context.fill();
	}
	async bufferFixationScreenUsingDot(gridindex){
		var dot_pixelradius = CANVAS.FixationRadius
		var color = "white"

		var context=CANVAS.obj.touchfix.getContext('2d');
		context.clearRect(0,0,CANVAS.obj.touchfix.width,CANVAS.obj.touchfix.height);

		// Draw fixation dot
		var rad = dot_pixelradius;
		var xcent = DEVICE.XGridCenter[gridindex];
		var ycent = DEVICE.YGridCenter[gridindex];
		context.beginPath();
		context.arc(xcent,ycent,rad,0*Math.PI,2*Math.PI);
		context.fillStyle=color; 
		context.fill();

		// Define (rectangular) boundaries of fixation
		boundingBoxesFixation = [{}] // todo: move out of here 
		boundingBoxesFixation[0]['x']= [xcent-rad+CANVAS.offsetleft, xcent+rad+CANVAS.offsetleft]
		boundingBoxesFixation[0]['y']= [ycent-rad+CANVAS.offsettop, ycent+rad+CANVAS.offsettop]
		return boundingBoxesFixation
	}

	async bufferStimulusScreen(sample_image, sample_image_grid_index){

		//========== BUFFER SAMPLE CANVAS ==========//
		var canvasobj=CANVAS.obj.sample
		var context=CANVAS.obj.sample.getContext('2d'); 
		context.fillStyle="#7F7F7F";  // Gray out before buffering sample
		
		var boundingBoxesSample = [{"x":[], "y":[]}]
		funcreturn = await renderImageOnCanvas(sample_image, sample_image_grid_index, SubjectSettings['SampleScale'], CANVAS.obj.sample)
		boundingBoxesSample[0].x = funcreturn[0]
		boundingBoxesSample[0].y = funcreturn[1]
		return boundingBoxesSample
	}

	async bufferChoiceScreen(test_images, test_image_grid_indices){

		var boundingBoxesChoice = [] 
		for (i = 0; i<test_images.length; i++){
			boundingBoxesChoice.push({"x":[], "y":[]})
			funcreturn = await renderImageOnCanvas(test_images[i], test_image_grid_indices[i], SubjectSettings['TestScale'], CANVAS.obj.test); 
			boundingBoxesChoice[i].x = funcreturn[0]
			boundingBoxesChoice[i].y = funcreturn[1]
		}

		return boundingBoxesChoice
	}

}






