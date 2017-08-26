

class ScreenStateMachine{
    constructor(){
    }

    get_initial_screen(){
        return initial_screen
    }

    async monitor_subject_input(){

        var emission = {}

        var meaningful_xy = await this.current_screen.WaitForMeaningfulXY()
        var meaningful_x = meaningful_xy[0]
        var meaningful_y = meaningful_xy[1]



        emission['juice'] = 0 
        emission['next_screen'] = undefined 
        emission['is_terminal'] = true

        return emission

    }

}

class RewardMap{
    constructor(){        
        this._listener = {}
        this._currentlylistening = false
    } 

    create_reward_map_with_bounding_boxes(boundingBoxes, reward_amounts){
        if (this._currentlylistening == true){
            this.close_listener()
        }
        
        var boundingBoxes = boundingBoxes
        var reward_amounts = reward_amounts
        var resolveFunc 
        var errFunc 

        this._touch_promise = new Promise(function(resolve, reject){
            resolveFunc = resolve
            errFunc = reject
        })
        this._listener['_touch_listener'] = function(event){
                                            var t = performance.now()
                                            var x = event.targetTouches[0].pageX
                                            var y = event.targetTouches[0].pageY

                                            for (var box_index = 0; box_index<boundingBoxes.length; box_index++){
                                                if (x <= boundingBoxes[box_index].x[1] 
                                                    && x >= boundingBoxes[box_index].x[0]
                                                    && y <= boundingBoxes[box_index].y[1] 
                                                    && y >= boundingBoxes[box_index].y[0]){
                                                        
                                                        console.log(box_index, x, y, t)
                                                        var outcome = {"x":x, "y":y, "timestamp":t, "juice":reward_amounts[box_index], "region_index":box_index}

                                                        resolveFunc(outcome)
                                                    }
                                            }
                                        }  
    }



    async Promise_wait_until_active_response_then_return_juice(timeout_period){
        // add timeout here 
        this.add_event_listener()
        var outcome = this._touch_promise
        return outcome
    }
    add_event_listener(){
        if (this._currentlylistening == true){
            this.close_listener()
        }
        window.addEventListener('touchmove', this._listener._touch_listener)
        window.addEventListener('touchstart', this._listener._touch_listener)
        this._currentlylistening = true
    }

    close_listener(){
        window.removeEventListener('touchmove', this._listener._touch_listener)
        window.removeEventListener('touchstart', this._listener._touch_listener)
        this._currentlylistening = false 
    }

    

}

class Screen{
    constructor(){
        this.html_element_name
        this.screen_name 
        this.length
        this.meaningful_locations = undefined // boolean image of meaningful screen regions; or bounding box
    }

    async buffer(){
        return 
    }
}
