


class ScreenDisplayer{

    constructor(){
        this._epoch_canvases = {} // key: i_epoch. key: i_screen. values: canvas, 
        this.canvas_sequences = {} // key: i_epoch
        this.time_sequences = {} // key: i_epoch

        this.canvas_blank = this.createCanvas('canvas_blank')
        this.canvas_blank.style['z-index'] = 50

        this.canvas_front = this.canvas_blank

        this.canvas_reward = this.createCanvas('canvas_reward')
        this.canvas_punish = this.createCanvas('canvas_punish')


        this.canvas_fixation = this.createCanvas('canvas_fixation')


        this.renderReward(this.canvas_reward)
        this.renderPunish(this.canvas_punish) 
        

    }

    async displayFixation(gridindex){
        var boundingBoxesFixation = this.renderFixationDot(gridindex, PLAYSPACE._gridwidth*0.5*0.5, 'white', this.canvas_fixation)
        await this.displayScreenSequence([this.canvas_blank, this.canvas_fixation], [0, 10])
        return boundingBoxesFixation
    }

    renderFixationDot( gridindex, dot_pixelradius, color, canvasobj){
        var context=canvasobj.getContext('2d');
        // do not clear in case user would like to draw multiple

        // Draw fixation dot
        var rad = dot_pixelradius;
        var xcent = PLAYSPACE._xgridcent[gridindex]; // playspace units
        var ycent = PLAYSPACE._ygridcent[gridindex];
        context.beginPath();
        context.arc(xcent,ycent,rad,0*Math.PI,2*Math.PI);
        context.fillStyle=color; 
        context.fill();

        // Define (rectangular) boundaries of fixation
        boundingBoxesFixation = PLAYSPACE._grid_boundingBox[gridindex]
        console.log(boundingBoxesFixation)
        return boundingBoxesFixation


    }
    getEpochCanvas(epoch_name, i_screen){
        if(this._epoch_canvases[epoch_name] == undefined){
            this._epoch_canvases[epoch_name] = []
        }
        if(this._epoch_canvases[epoch_name][i_screen] == undefined){
            this._epoch_canvases[epoch_name][i_screen] = this.createCanvas('canvas_'+epoch_name+'_screen'+i_screen)
        }

        return this._epoch_canvases[epoch_name][i_screen]
    }
    createCanvas(canvas_id){
        var canvasobj = document.createElement('canvas')
        canvasobj.id = canvas_id
        setupCanvas(canvasobj)
        document.body.appendChild(canvasobj)
        return canvasobj 
    }

    async bufferEpochFrames(
        epoch_name, 
        image_sequence,
        grid_sequence,
        msec_sequence){
        // An epoch is a sequence of deterministic frames that is ended by the presence of a RewardMap, which transitions the user to the next epoch after an active response in a non-null region. 
        // e.g.; a fixation screen is an epoch consisting of one frame, with a RewardMap centered on the fixation dot. 

        var num_frames = image_sequence.length
        
        var time_sequence = []
        var canvas_sequence = []



        for (var i_frame = 0; i_frame<num_frames; i_frame++){
            var frame_grid_locs = grid_sequence[i_frame]
            var frame_images = image_sequence[i_frame]
            var frame_msec_on = msec_sequence[i_frame]
            var canvasobj = this.getEpochCanvas(epoch_name, i_frame)

            // Iterate over (potentially multiple) images in this frame
            for (var i_image = 0; i_image<frame_images.length; i_image++){
                await renderImageAndScaleIfNecessary(frame_images[i_image], frame_grid_locs[i_image], canvasobj)
            }
            if(i_frame == 0){
                var last_event_time = -1 * frame_msec_on
            }

            
            time_sequence.push(last_event_time+frame_msec_on)
            last_event_time = time_sequence[time_sequence.length-1]
            canvas_sequence.push(canvasobj)
        }

        this.canvas_sequences[epoch_name] = canvas_sequence
        this.time_sequences[epoch_name] = time_sequence
    }


    async displayReward(msec_duration){
        var frame_unix_timestamps = await this.displayScreenSequence([this.canvas_blank, this.canvas_reward, this.canvas_blank],[0, 50, 50+msec_duration,])
        return frame_unix_timestamps
    }
    async displayPunish(msec_duration){
        var frame_unix_timestamps = await this.displayScreenSequence([this.canvas_blank, this.canvas_punish, this.canvas_blank],[0, 50, 50+msec_duration])


        return frame_unix_timestamps
    }

    async displayEpoch(epoch_name){
        console.log('displayEpoch', epoch_name)
        var sequence = this.canvas_sequences[epoch_name]
        var tsequence = this.time_sequences[epoch_name]
        console.log(tsequence)
        var frame_unix_timestamps = await this.displayScreenSequence(sequence, tsequence)

        return frame_unix_timestamps
    }



    displayScreenSequence(sequence, tsequence){
        var resolveFunc
        var errFunc
        var p = new Promise(function(resolve,reject){
            resolveFunc = resolve;
            errFunc = reject;
        }).then();
        //console.log('seq', sequence, 'tseq', tsequence)

        var start = null;
        var frame_unix_timestamps = []


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
                var curr_canvasobj = sequence[current_frame_index]
                prev_canvasobj.style.zIndex="0";
                curr_canvasobj.style.zIndex="100";
                prev_canvasobj = curr_canvasobj;

                frames_left_to_animate--
                current_frame_index++;
            }; 
            // continue if not all frames shown
            if (frames_left_to_animate>0){
                window.requestAnimationFrame(updateCanvas);
            }
            else{
                _this.canvas_front = curr_canvasobj
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
        context.fill()
    }


    renderReward(canvasobj){
        var context=canvasobj.getContext('2d');
        context.fillStyle="#00cc00";
        context.globalAlpha = 0.5
        var width = canvasobj.width
        var height = canvasobj.height
        context.fillRect(width/2 - 200,height/2 - 200, 400,400);

        context.fill()
    }

    renderPunish(canvasobj){
        var context=canvasobj.getContext('2d');
        var width = canvasobj.width
        var height = canvasobj.height

        context.fillRect(width/2 - 200,height/2 - 200, 400,400);
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



