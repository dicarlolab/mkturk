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
