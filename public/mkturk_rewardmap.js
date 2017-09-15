class RewardMapTemplate{
    constructor(){

    }

    create_reward_map_with_bounding_boxes(boundingBoxes, reward_amounts){

    }

    async Promise_wait_until_active_response_then_return_reinforcement(){

    }

}

class MouseClickRewardMap{
    constructor(){        
        this._mouse_promise
        this.boundingBoxes = []
        this.reward_amounts = []

        this._resolveFunc
        this._errFunc

        var _this = this

        var boundingBoxes = this.boundingBoxes // 
        var reward_amounts = this.reward_amounts // upon this._listener construction, does it point to the reference or is it constructed with a copy of the initiial (undefined) value?

        this._listener = function(event){
            console.log(event)
            _this.handleMouseEvent(event)
        }  
        this.attached = false 
        
    } 

    handleMouseEvent(event){
        // mouse event properties
        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
        console.log('handleMouseEvent', event)
        var t = performance.now()
        var x = event.pageX - PLAYSPACE.leftbound
        var y = event.pageY - PLAYSPACE.topbound

        for (var box_index = 0; box_index<this.boundingBoxes.length; box_index++){
            if (x <= this.boundingBoxes[box_index].x[1] 
                && x >= this.boundingBoxes[box_index].x[0]
                && y <= this.boundingBoxes[box_index].y[1] 
                && y >= this.boundingBoxes[box_index].y[0]){

                var outcome = {
                    "x":x, 
                    "y":y, 
                    "timestamp":t, 
                    "reinforcement":this.reward_amounts[box_index], 
                    "region_index":box_index}

                this._resolveFunc(outcome)
            }
        }
    }   

    create_reward_map_with_bounding_boxes(boundingBoxes, reward_amounts){
        if(this.attached == false){
            this.add_event_listener()
            this.attached = true 
        }
        this.boundingBoxes = boundingBoxes
        this.reward_amounts = reward_amounts
        
    }

    async Promise_wait_until_active_response_then_return_reinforcement(){
        //this.add_event_listener()
        var _this = this
        this._mouse_promise = new Promise(function(resolve, reject){
            _this._resolveFunc = resolve
            _this._errFunc = reject
        })
        var outcome = this._mouse_promise
        return outcome
    }
    add_event_listener(){
        console.log('Attached event listener')
        window.addEventListener('mouseup', this._listener)
    }

    close_listener(){
        window.removeEventListener('mouseup', this._listener)
    }
}

class MouseMoveRewardMap{
    constructor(){        
        this._mouse_promise
        this.boundingBoxes = []
        this.reward_amounts = []

        this._resolveFunc
        this._errFunc

        var _this = this

        var boundingBoxes = this.boundingBoxes // 
        var reward_amounts = this.reward_amounts // upon this._listener construction, does it point to the reference or is it constructed with a copy of the initiial (undefined) value?

        this._listener = function(event){
            _this.handleMouseEvent(event)
        }  

        this.attached = false 
        
    } 

    handleMouseEvent(event){
        // mouse event properties
        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
        //console.log('handleMouseEvent', event)
        var t = performance.now()
        var x = event.pageX - PLAYSPACE.leftbound // In PLAYSPACE units. 
        var y = event.pageY - PLAYSPACE.topbound
        console.log(x, y, t)
        for (var box_index = 0; box_index<this.boundingBoxes.length; box_index++){

            if (x <= this.boundingBoxes[box_index].x[1] 
                && x >= this.boundingBoxes[box_index].x[0]
                && y <= this.boundingBoxes[box_index].y[1] 
                && y >= this.boundingBoxes[box_index].y[0]){
                console.log('hit non null region')

                var outcome = {
                    "x":x, 
                    "y":y, 
                    "timestamp":t, 
                    "reinforcement":this.reward_amounts[box_index], 
                    "region_index":box_index}

                this._resolveFunc(outcome)
            }
        }
    }   

    create_reward_map_with_bounding_boxes(boundingBoxes, reward_amounts){
        console.log(boundingBoxes)
        // boundingBoxes in units of PLAYSPACE
        if(this.attached == false){
            console.log('Attached mouse move listener for rewardmap')
            this.add_event_listener()
            this.attached = true 
        }
        this.boundingBoxes = boundingBoxes
        this.reward_amounts = reward_amounts
        
    }

    async Promise_wait_until_active_response_then_return_reinforcement(){
        //this.add_event_listener()
        var _this = this
        this._mouse_promise = new Promise(function(resolve, reject){
            _this._resolveFunc = resolve
            _this._errFunc = reject
        })
        var outcome = this._mouse_promise
        return outcome
    }
    add_event_listener(){
        window.addEventListener('mousemove', this._listener)
    }

    close_listener(){
        window.removeEventListener('mousemove', this._listener)
    }
}

class TouchRewardMap{
    constructor(){        
        this._touch_promise
        this.boundingBoxes = []
        this.reward_amounts = []

        this._resolveFunc
        this._errFunc

        var _this = this

        var boundingBoxes = this.boundingBoxes // 
        var reward_amounts = this.reward_amounts // upon this._listener construction, does it point to the reference or is it constructed with a copy of the initiial (undefined) value?

        this._listener = function(event){
            _this.handleTouchEvent(event)
        }  

        this.add_event_listener()
    } 

    handleTouchEvent(event){
        var t = performance.now()
        var x = event.targetTouches[0].pageX - PLAYSPACE.leftbound
        var y = event.targetTouches[0].pageY - PLAYSPACE.topbound
        for (var box_index = 0; box_index<this.boundingBoxes.length; box_index++){
            if (x <= this.boundingBoxes[box_index].x[1] 
                && x >= this.boundingBoxes[box_index].x[0]
                && y <= this.boundingBoxes[box_index].y[1] 
                && y >= this.boundingBoxes[box_index].y[0]){

                console.log(box_index, x, y, t)
                var outcome = {
                    "x":x, 
                    "y":y, 
                    "timestamp":t, 
                    "reinforcement":this.reward_amounts[box_index], 
                    "region_index":box_index}

                this._resolveFunc(outcome)
            }
        }
    }   

    create_reward_map_with_bounding_boxes(boundingBoxes, reward_amounts){
        this.boundingBoxes = boundingBoxes
        this.reward_amounts = reward_amounts
        
    }

    async Promise_wait_until_active_response_then_return_reinforcement(){
        //this.add_event_listener()
        var _this = this
        this._touch_promise = new Promise(function(resolve, reject){
            _this._resolveFunc = resolve
            _this._errFunc = reject
        })
        var outcome = this._touch_promise
        return outcome
    }
    add_event_listener(){
        window.addEventListener('touchmove', this._listener, {passive: true})
        window.addEventListener('touchstart', this._listener, {passive: true})
    }

    close_listener(){
        window.removeEventListener('touchmove', this._listener)
        window.removeEventListener('touchstart', this._listener)
    }

    

}
