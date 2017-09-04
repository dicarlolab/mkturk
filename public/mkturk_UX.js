class UX_poller{
    constructor(DIO){
        this.DIO = DIO
        this.min_poll_period = 10*1000 // at least 10 seconds in between polling
        this.last_poll = performance.now()
    }

    async poll(){
        console.log("Called UX_poller.poll()")
        if(performance.now() - this.last_poll < this.min_poll_period){
            console.log('not enough time has passed to poll again')
            return
        }

        var saveRequest_flag = await this._diskread(this.get_saveRequest_filepath())
        var juiceRequest_flag = await this._diskread(this.get_juiceRequest_filepath())

        
        if (saveRequest_flag != undefined){
            if(saveRequest_flag['FlagFulfilled'] == 0){
                await DWr.saveTrialData(FLAGS.debug_mode)
                await DWr.saveTouches(FLAGS.debug_mode)

                saveRequest_flag['FlagFulfilled'] = 1      
                await DIO.write_string(JSON.stringify(saveRequest_flag), this.get_saveRequest_filepath())   
                console.log('RECEIVED SAVE REQUEST FORCED SAVE, wrote flag fulfilled to disk')       
            }
        }

        if (juiceRequest_flag != undefined){
            if(juiceRequest_flag['FlagFulfilled'] == 0){
                SubjectSettings['RewardPer1000Trials'] = juiceRequest_flag['RewardPer1000Trials']
                juiceRequest_flag['FlagFulfilled'] = 1
                await DIO.write_string(JSON.stringify(juiceRequest_flag), this.get_juiceRequest_filepath())
                console.log('RECEIVED VALID JUICE REQUEST FORCED SAVE, wrote flag fulfilled to disk')       
            }
            // if 1, no change has since been requested by liveplot
        }

    }

    async _diskread(fpath){
        var exists = await this.DIO.exists(fpath)
        if(exists == true){
            var string = await this.DIO.read_textfile(fpath)
            var flag = JSON.parse(string)
            return flag
        }
        else{
            return undefined
        }
    }

    get_saveRequest_filepath(){
        return "/UserUX/"+SESSION.SubjectID+"_saverequest.txt"
    }
    get_juiceRequest_filepath(){
        return "/UserUX/"+SESSION.SubjectID+'_juicerequest.txt'
    }

}

class Dummy_UX_poller{
    constructor(){

    }

    async poll(){
        console.log('using dummy UX poller')
    }

}