class RewardMapGenerator{
    constructor(event_types){

        this.event_types = event_types        
        this._response_promise
        this.boundingBoxes = []
        this.reward_amounts = []

        this._resolveFunc
        this._errFunc

        var _this = this

        var boundingBoxes = this.boundingBoxes // 
        var reward_amounts = this.reward_amounts 

        this.listening = false
        this.attached = false 


        this.handleTouchEvent = function(event){
            var t = performance.now()
            var x = event.targetTouches[0].pageX - PLAYSPACE.leftbound
            var y = event.targetTouches[0].pageY - PLAYSPACE.topbound
            if(_this.listening == true){
                _this.check_if_interior(x, y, t)
            }
            
        }  

        this.handleMouseEvent = function(event){
            var t = performance.now()

            var x = event.pageX - PLAYSPACE.leftbound // In PLAYSPACE units. 
            var y = event.pageY - PLAYSPACE.topbound

            if(_this.listening == true){
                _this.check_if_interior(x, y, t)
            }
        }
    } 

    check_if_interior(x, y, t){
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
                this.listening = false
                this._resolveFunc(outcome)
            }
        }
    }
    

    create_reward_map_with_bounding_boxes(boundingBoxes, reward_amounts){
        // boundingBoxes in units of PLAYSPACE
        if(this.attached == false){
            console.log('Attached mouse move listener for rewardmap')
            this.add_event_listener()
            this.attached = true 
        }
        if(boundingBoxes.constructor != Array){
            boundingBoxes = [boundingBoxes]
        }
        if(reward_amounts.constructor != Array){
            reward_amounts = [reward_amounts]
        }
        
        this.boundingBoxes = boundingBoxes
        this.reward_amounts = reward_amounts
        this.listening = true

        return boundingBoxes
    }

    create_reward_map_with_grid_indices(grid_indices, reward_amounts, scale_factor){

        if(this.attached == false){
            console.log('Attached mouse move listener for rewardmap')
            this.add_event_listener()
            this.attached = true 
        }
        if(typeof(grid_indices) == "number"){
            grid_indices = [grid_indices]
        }
        if(typeof(reward_amounts) == "number"){
            reward_amounts = [reward_amounts]
        }

        scale_factor = scale_factor || 1
        var boundingBoxes = []

        
        var base_width = 0 
        var base_height = 0
        var x_dim = 0 
        var y_dim = 0 

        for (var i = 0; i < grid_indices.length; i++){
            if(scale_factor == 1){
                boundingBoxes.push(PLAYSPACE._grid_boundingBox[grid_indices[i]])
                continue
            }

            base_width = PLAYSPACE._grid_boundingBox[grid_indices[i]].x[1] - PLAYSPACE._grid_boundingBox[grid_indices[i]].x[0]
            base_height = PLAYSPACE._grid_boundingBox[grid_indices[i]].y[1] - PLAYSPACE._grid_boundingBox[grid_indices[i]].y[0]

            x_dim = (base_width - scale_factor * (base_width)) /2
            y_dim = (base_height - scale_factor * (base_height)) /2

            var box = {}
            box['x'] = [PLAYSPACE._grid_boundingBox[grid_indices[i]].x[0]+x_dim, PLAYSPACE._grid_boundingBox[grid_indices[i]].x[1]-x_dim]
            box['y'] = [PLAYSPACE._grid_boundingBox[grid_indices[i]].y[0]+y_dim, PLAYSPACE._grid_boundingBox[grid_indices[i]].y[1]-y_dim]

            boundingBoxes.push(box)
        }   

        this.boundingBoxes = boundingBoxes
        this.reward_amounts = reward_amounts
        this.listening = true

        return boundingBoxes
    }

    async Promise_wait_until_active_response_then_return_reinforcement(){
        //this.add_event_listener()
        var _this = this
        this._response_promise = new Promise(function(resolve, reject){
            _this._resolveFunc = resolve
            _this._errFunc = reject
        })
        var outcome = this._response_promise
        return outcome
    }
    add_event_listener(){

        if(typeof(this.event_types) == "string"){
            var event_types = [this.event_types]
        }
        else{
            var event_types = this.event_types
        }

        for(var i = 0; i < event_types.length; i++){
            if(event_types[i] == 'touchmove' || event_types[i] == 'touchstart' || event_types[i] == 'touchend'){
                window.addEventListener(event_types[i], this.handleTouchEvent, {passive:true})
            }
            else{
                window.addEventListener(event_types[i], this.handleMouseEvent)
            }
            
            console.log('Added ', event_types[i])
        }
        
    }

    close_listener(){
        if(typeof(this.event_types) == "string"){
            var event_types = [this.event_types]
        }
        else{
            var event_types = this.event_types
        }

        for(var i = 0; i < event_types.length; i++){
            if(event_types[i] == 'touchmove' || 'touchstart' || 'touchend'){
                window.removeEventListener(event_types[i], this.handleTouchEvent, {passive:true})
            }
            else{
                window.removeEventListener(event_types[i], this.handleMouseEvent)
            }
            
            console.log('Removed ', event_types[i])
        }
    }
}

