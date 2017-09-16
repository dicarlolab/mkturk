
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


        this.canvas_fixation = this.createCanvas('canvas_fixation', true)


        this.renderReward(this.canvas_reward)
        this.renderPunish(this.canvas_punish) 
    }

    async displayBlank(){
        await this.renderBlank(this.canvas_blank)
        await this.displayScreenSequence(this.canvas_blank, 0)
    }

    async displayFixation(gridindex){
        await this.renderBlank(this.canvas_fixation)

        var boundingBoxesFixation = this.renderFixationDot(gridindex, PLAYSPACE._gridwidth*0.5*0.5, 'white', this.canvas_fixation)
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
    createCanvas(canvas_id, use_image_smoothing){
        use_image_smoothing = false || use_image_smoothing
        var canvasobj = document.createElement('canvas')
        canvasobj.id = canvas_id
        setupCanvas(canvasobj, use_image_smoothing)
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


            if(frame_images.constructor == Array){
                // Iterate over (potentially multiple) images in this frame
                for (var i_image = 0; i_image<frame_images.length; i_image++){
                    console.log('hello1')
                    await renderImageAndScaleIfNecessary(frame_images[i_image], frame_grid_locs[i_image], canvasobj)
                }
            }
            else{
                if(frame_grid_locs.constructor == Array){
                    frame_grid_locs = frame_grid_locs[0]
                }
                await renderImageAndScaleIfNecessary(frame_images, frame_grid_locs, canvasobj)
            }
            
            canvas_sequence.push(canvasobj)
        
        }



        this.canvas_sequences[epoch_name] = canvas_sequence
        this.time_sequences[epoch_name] = msec_sequence
    }


    

    async displayEpoch(epoch_name){
        console.log('displayEpoch', epoch_name)
        var sequence = this.canvas_sequences[epoch_name]
        var tsequence = this.time_sequences[epoch_name]
        console.log(tsequence)
        var frame_unix_timestamps = await this.displayScreenSequence(sequence, tsequence)

        return frame_unix_timestamps
    }


    displayScreenSequence(sequence, t_durations){
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

        context.fillStyle="black";
        context.fillRect(width/2 - 200,height/2 - 200, 400,400);
        
        context.fill();
    }


    async bufferCanvasWithImage(image, canvasobj, dx, dy, dwidth, dheight){
        // In playspace units
        var context = canvasobj.getContext('2d')
        context.fillStyle="#7F7F7F"; 
        context.fillRect(0,0,canvasobj.width,canvasobj.height);
          // ctx.drawImage(image, destination_x, destination_y, dWidth, dHeight);
          context.drawImage(image, dx, dy, dwidth, dheight)

          // todo: return bounding boxes

         

        var _boundingBox = [{}]
        _boundingBox[0].x = [dx,dx+dwidth]
        _boundingBox[0].y = [dy, dy+dheight]

        return _boundingBox
    }



}



