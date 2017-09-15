


class ScreenDisplayer{

    constructor(){
        this._epoch_canvases = [] // key: i_epoch. key: i_screen. values: canvas, 
        this.canvas_sequences = [] // key: i_epoch
        this.time_sequences = [] // key: i_epoch
        this.canvas_front = this.createCanvas('canvas_blank')
        this.renderBlank(this.canvas_front)
        this.canvas_front.style['z-index'] = 3
    }

    getEpochCanvas(i_epoch, i_screen){
        if(this._epoch_canvases[i_epoch] == undefined){
            this._epoch_canvases[i_epoch] = []
        }
        if(this._epoch_canvases[i_epoch][i_screen] == undefined){
            this._epoch_canvases[i_epoch][i_screen] = this.createCanvas('canvas_epoch'+i_epoch+'_screen'+i_screen)
        }

        return this._epoch_canvases[i_epoch][i_screen]
    }
    createCanvas(canvas_id){
        var canvasobj = document.createElement('canvas')
        canvasobj.id = canvas_id
        setupCanvas(canvasobj)
        document.body.appendChild(canvasobj)
        return canvasobj 
    }

    async bufferScreenSequence(i_epoch, _images, _grid_placements, _msec_on){
        var num_screens = _images.length
        

        var last_event_time = 0
        var time_sequence = []
        var canvas_sequence = []



        for (var i_screen = 0; i_screen<num_screens; i_screen++){
            var screen_grid_locs = _grid_placements[i_screen]
            var screen_images = _images[i_screen]
            var screen_msec_on = _msec_on[i_screen]
            var canvasobj = this.getEpochCanvas(i_epoch, i_screen)

            for (var i_image = 0; i_image<screen_images.length; i_image++){
                await renderImageAndScaleIfNecessary(screen_images[i_image], screen_grid_locs[i_image], canvasobj)
            }

            
            time_sequence.push(last_event_time+screen_msec_on)
            last_event_time = time_sequence[time_sequence.length-1]
            canvas_sequence.push(canvasobj)
        }

        this.canvas_sequences[i_epoch] = canvas_sequence
        this.time_sequences[i_epoch] = time_sequence
    }

    async bufferRewardSequence(msec_duration){
        // Prebaked sequence

    }

    async bufferPunishSequence(msec_duration){
        // Prebaked sequence
    }

    displayScreenSequence(i_epoch){
        console.log('displayScreenSequence', i_epoch)
        var resolveFunc
        var errFunc
        var p = new Promise(function(resolve,reject){
            resolveFunc = resolve;
            errFunc = reject;
        }).then();
        //console.log('seq', sequence, 'tseq', tsequence)

        var start = null;
        var frame_unix_timestamps = []

        

        var sequence = this.canvas_sequences[i_epoch]
        var tsequence = this.time_sequences[i_epoch]

        var prev_canvasobj = this.canvas_front

        var current_frame_index = 0
        var frames_left_to_animate = sequence.length

        var _this = this
        function updateCanvas(timestamp){
            // If start has not been set to a float timestamp, set it now.
            if (!start) start = timestamp;

            // If time to show new frame, 
            if (timestamp - start > tsequence[current_frame_index]){
                console.log(current_frame_index)
                frame_unix_timestamps[current_frame_index] = performance.now() //in milliseconds, rounded to nearest hundredth of a millisecond
                // Move canvas in front
                var curr_canvasobj=sequence[current_frame_index]
                prev_canvasobj.style.zIndex="0";
                curr_canvasobj.style.zIndex="100";
                _this.canvas_front = sequence[current_frame_index];

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
        context.globalAlpha = 0.5
        context.fillRect(xcanvascenter-200,ycanvascenter-200,400,400);
    }

    renderPunish(canvasobj){
        var context=canvasobj.getContext('2d');
        context.rect(xcanvascenter-200,ycanvascenter-200,400,400);
        context.fillStyle="black";
        context.fill();
    }
    async bufferFixationScreenUsingDot(gridindex){

        var dot_pixelradius = PLAYSPACE._gridwidth/2.5
        var color = "white"

        var canvasobj = CANVAS.obj.touchfix
        var context=CANVAS.obj.touchfix.getContext('2d');

        context.clearRect(0,0,canvasobj.width,canvasobj.height);
        context.fillStyle="#7F7F7F"; 

        // Draw fixation dot
        var rad = dot_pixelradius;
        var xcent = PLAYSPACE._xgridcent[gridindex]; // playspace units
        var ycent = PLAYSPACE._ygridcent[gridindex];
        context.beginPath();
        context.arc(xcent,ycent,rad,0*Math.PI,2*Math.PI);
        context.fillStyle=color; 
        context.fill();

        // Define (rectangular) boundaries of fixation
        var boundingBoxesFixation = [{}] // todo: move out of here 
        boundingBoxesFixation[0]['x']= [xcent-rad+CANVAS.offsetleft, xcent+rad+CANVAS.offsetleft]
        boundingBoxesFixation[0]['y']= [ycent-rad+CANVAS.offsettop, ycent+rad+CANVAS.offsettop]

        return boundingBoxesFixation
    }

    async bufferCanvasWithImage(image, canvasobj, dx, dy, dwidth, dheight){
        // In playspace units
        var context = canvasobj.getContext('2d')
        context.fillStyle="#7F7F7F"; 
        context.fillRect(0,0,canvasobj.width,canvasobj.height);
          // ctx.drawImage(image, destination_x, destination_y, dWidth, dHeight);
          context.drawImage(image, dx, dy, dwidth, dheight)

          // todo: return bounding boxes

         

        var boundingBoxFixation = [{}]
        boundingBoxFixation[0].x = [dx,dx+dwidth]
        boundingBoxFixation[0].y = [dy, dy+dheight]

        return boundingBoxFixation// 'hello'
    }

    async bufferFixationScreenUsingImage(image, gridindex){
        // todo: remove dependence on fixation screen 
        

        // Gray out first 
        var canvasobj = CANVAS.obj.touchfix
        var context=canvasobj.getContext('2d');
        context.fillStyle="#7F7F7F"; 
        context.fillRect(0,0,canvasobj.width,canvasobj.height);

        // Draw image 

        // todo: make general 'buffer' functions without hardcoding canvas references
        funcreturn = await renderImageAndScaleIfNecessary(image, gridindex, canvasobj)
        
    
        // Define (rectangular) boundaries of fixation
        boundingBoxesFixation = [{}] // todo: move out of here 
        boundingBoxesFixation[0]['x']= funcreturn[0]
        boundingBoxesFixation[0]['y']= funcreturn[1]
        return boundingBoxesFixation
    }

    async bufferStimulusScreen(sample_image, sample_image_grid_index){

        //========== BUFFER SAMPLE CANVAS ==========//
        var context=CANVAS.obj.sample.getContext('2d'); 
        context.fillStyle="#7F7F7F";  // Gray out before buffering sample
        
        var boundingBoxesSample = [{"x":[], "y":[]}]
        funcreturn = await renderImageAndScaleIfNecessary(sample_image, sample_image_grid_index, CANVAS.obj.sample)
        boundingBoxesSample[0].x = funcreturn[0]
        boundingBoxesSample[0].y = funcreturn[1]
        return boundingBoxesSample
    }

    async bufferChoiceScreen(test_images, test_image_grid_indices){

        var boundingBoxesChoice = [] 
        for (i = 0; i<test_images.length; i++){
            boundingBoxesChoice.push({"x":[], "y":[]})
            funcreturn = await renderImageAndScaleIfNecessary(test_images[i], test_image_grid_indices[i], CANVAS.obj.test); 
            boundingBoxesChoice[i].x = funcreturn[0]
            boundingBoxesChoice[i].y = funcreturn[1]
        }

        return boundingBoxesChoice
    }

}



