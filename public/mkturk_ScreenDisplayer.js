
class ScreenDisplayer{

    constructor(){
        this._sequence_canvases = {} // key: sequence. key: frame. value: canvas 
        this.canvas_sequences = {} // key: sequence_id
        this.time_sequences = {} // key: sequence_id

        this.canvas_blank = this.createCanvas('canvas_blank')
        this.canvas_blank.style['z-index'] = 50

        this.canvas_front = this.canvas_blank

        this.canvas_reward = this.createCanvas('canvas_reward')
        this.canvas_punish = this.createCanvas('canvas_punish')


        this.canvas_fixation = this.createCanvas('canvas_fixation', true)


        this.renderReward(this.canvas_reward)
        this.renderPunish(this.canvas_punish) 
    }
    async displaySequence(sequence_id){
        console.log('displaying sequence ', sequence_id)
        var sequence = this.canvas_sequences[sequence_id]
        var tsequence = this.time_sequences[sequence_id]
        var frame_unix_timestamps = await this.displayScreenSequence(sequence, tsequence)

        return frame_unix_timestamps
    }

    togglePlayspaceBorder(on_or_off){
        // Turns on / off the dotted PLAYSPACE border
        if(on_or_off == 1){
            var bs = '1px dotted #E6E6E6' // border style 
        }
        else{
            var bs = '0px'
        }
        this.canvas_blank.style.border = bs
        this.canvas_reward.style.border = bs
        this.canvas_punish.style.border = bs
        this.canvas_fixation.style.border = bs

        for (var sequence in this._sequence_canvases){
            if(this._sequence_canvases.hasOwnProperty(sequence)){
                for (var i = 0; i<this._sequence_canvases[sequence].length; i ++){
                    this._sequence_canvases[sequence][i].style.border = bs
                }
            }
        }
    }

    async bufferSequenceFrames(sequence_id, image_sequence, grid_placement_sequence, frame_durations){

        var num_frames = image_sequence.length
        
        // Draw the images on each of the canvases in this sequence
        var canvas_sequence = []
        for (var i_frame = 0; i_frame<num_frames; i_frame++){
            var frame_grid_indices = grid_placement_sequence[i_frame]
            var frame_images = image_sequence[i_frame]
            var canvasobj = this.getSequenceCanvas(sequence_id, i_frame)


            if(frame_images.constructor == Array){
                // Iterate over the images in this frame and draw them all
                for (var i_image = 0; i_image<frame_images.length; i_image++){
                    await this.renderImageAndScaleIfNecessary(frame_images[i_image], frame_grid_indices[i_image], canvasobj)
                }
            }

            else{
                // Draw the single image in this frame 

                if(frame_grid_indices.constructor == Array){
                    frame_grid_indices = frame_grid_indices[0]
                }
                
                await this.renderImageAndScaleIfNecessary(frame_images, frame_grid_indices, canvasobj)
            }
            
            canvas_sequence.push(canvasobj)
        
        }

        this.canvas_sequences[sequence_id] = canvas_sequence
        this.time_sequences[sequence_id] = frame_durations
    }   

    async displayBlank(){
        await this.renderBlank(this.canvas_blank)
        await this.displayScreenSequence(this.canvas_blank, 0)
    }

    async displayFixation(gridindex){
        await this.renderBlank(this.canvas_fixation)

        var boundingBoxesFixation = this.renderFixationDot(gridindex, PLAYSPACE._gridwidth*0.4, 'white', this.canvas_fixation)
        var frame_timestamps = await this.displayScreenSequence(this.canvas_fixation, 0)
        return [boundingBoxesFixation, frame_timestamps]
    }

    async displayReward(msec_duration){
        var frame_unix_timestamps = await this.displayScreenSequence([this.canvas_blank, this.canvas_reward, this.canvas_blank],
            [0, msec_duration, 0])
        return frame_unix_timestamps
    }
    async displayPunish(msec_duration){
        var frame_unix_timestamps = await this.displayScreenSequence([this.canvas_blank, this.canvas_punish, this.canvas_blank],
            [0, msec_duration, 0])


        return frame_unix_timestamps
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
        var boundingBoxesFixation = {'x':[xcent-rad, xcent+rad], 'y':[ycent-rad, ycent+rad]}

        return boundingBoxesFixation


    }
    getSequenceCanvas(sequence_id, i_frame){
        if(this._sequence_canvases[sequence_id] == undefined){
            this._sequence_canvases[sequence_id] = []
        }
        if(this._sequence_canvases[sequence_id][i_frame] == undefined){
            this._sequence_canvases[sequence_id][i_frame] = this.createCanvas(sequence_id+'_frame'+i_frame)
        }

        return this._sequence_canvases[sequence_id][i_frame]
    }
    createCanvas(canvas_id, use_image_smoothing){
        use_image_smoothing = false || use_image_smoothing
        var canvasobj = document.createElement('canvas')
        canvasobj.id = canvas_id
        setupCanvas(canvasobj, use_image_smoothing)
        document.body.appendChild(canvasobj)
        return canvasobj 
    }

    



    displayScreenSequence(sequence, t_durations){
        console.log('calling sequence', sequence, 't_durations', t_durations)
        if(typeof(t_durations) == "number"){
            t_durations = [t_durations]
        }
        if(sequence.constructor != Array){
            sequence = [sequence]
        }
        var resolveFunc
        var errFunc
        var p = new Promise(function(resolve,reject){
            resolveFunc = resolve;
            errFunc = reject;
        }).then();
        //console.log('seq', sequence, 'tseq', tsequence)

        var lastframe_timestamp = undefined;
        var frame_unix_timestamps = []


        var prev_canvasobj = this.canvas_front

        var current_frame_index = -1
        var frames_left_to_animate = sequence.length

        var _this = this


        function updateCanvas(timestamp){
        
            // If time to show new frame OR first frame, 
            if (timestamp - lastframe_timestamp >= t_durations[current_frame_index] || lastframe_timestamp == undefined){
                current_frame_index++;
                frame_unix_timestamps[current_frame_index] = performance.now() //in milliseconds, rounded to nearest hundredth of a millisecond
                // Move canvas in front
                var curr_canvasobj = sequence[current_frame_index]
                prev_canvasobj.style.zIndex="0";
                curr_canvasobj.style.zIndex="100";
                prev_canvasobj = curr_canvasobj;

                lastframe_timestamp = timestamp
                console.log('lastframe_timestamp', lastframe_timestamp)
                frames_left_to_animate--
                
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
        var width = parseFloat(canvasobj.style.width)
        var height = parseFloat(canvasobj.style.height)

        context.fillRect(0,0,width,height);
        context.fill()
    }


    renderReward(canvasobj){
        var context=canvasobj.getContext('2d');
        context.fillStyle="#00cc00";
        context.globalAlpha = 0.5
        var width = parseFloat(canvasobj.style.width)
        var height = parseFloat(canvasobj.style.height)


        var square_width = PLAYSPACE._gridwidth * 2
        var square_height = PLAYSPACE._gridheight * 2
        context.fillRect(width/2 - square_width/2,height/2 - square_width/2, square_width,square_height);

        context.fill()
    }

    renderPunish(canvasobj){
        var context=canvasobj.getContext('2d');
        var width = parseFloat(canvasobj.style.width)
        var height = parseFloat(canvasobj.style.height)

        context.fillStyle="black";
        var square_width = PLAYSPACE._gridwidth * 2
        var square_height = PLAYSPACE._gridheight * 2
        context.fillRect(width/2 - square_width/2,height/2 - square_width/2, square_width,square_height);
        
        context.fill();
    }


    async bufferCanvasWithImage(image, canvasobj, dx, dy, dwidth, dheight){
        // In playspace units
        var context = canvasobj.getContext('2d')
        context.fillStyle="#7F7F7F"; 
        context.fillRect(0,0,canvasobj.width,canvasobj.height);

        context.drawImage(image, dx, dy, dwidth, dheight)


         

        var _boundingBox = [{}]
        _boundingBox[0].x = [dx,dx+dwidth]
        _boundingBox[0].y = [dy, dy+dheight]

        return _boundingBox
    }

    async renderImageAndScaleIfNecessary(image, grid_index, canvasobj){
      // Render image onto the playspace

      // Special cases for 'image'
      if(image == 'dot'){
        await this.renderFixationDot(grid_index, PLAYSPACE._gridwidth*0.45, "white", canvasobj)
        return
      }
      if(image == 'blank'){
        await this.renderBlank(canvasobj)
        return
      }

      var context = canvasobj.getContext('2d')

      var devicePixelRatio = window.devicePixelRatio || 1
      var backingStoreRatio = context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio || 1 // /1 by default for chrome?

      var _ratio = devicePixelRatio / backingStoreRatio

      var original_left_start = PLAYSPACE._xgridcent[grid_index] - PLAYSPACE._gridwidth/2// in virtual pixel coordinates
      var original_top_start = PLAYSPACE._ygridcent[grid_index] - PLAYSPACE._gridheight/2


      context.drawImage(image, original_left_start, original_top_start, PLAYSPACE._gridwidth, PLAYSPACE._gridheight)


      var xbound=[original_left_start, original_left_start+PLAYSPACE._gridwidth];
      var ybound=[original_top_start, original_top_start+PLAYSPACE._gridheight];

      xbound[0]=xbound[0]
      xbound[1]=xbound[1]
      ybound[0]=ybound[0]
      ybound[1]=ybound[1]
      return [xbound, ybound]
    }


}



