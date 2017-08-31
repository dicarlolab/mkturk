// Functions for recording scientific data to disk. 

class DataWriter{
    constructor(DIO){
        this.DIO = DIO
        this.min_write_timeout_period = TRIALDATA_SAVE_TIMEOUT_PERIOD // ms
        this.touchstring_max_cache_size = TOUCHSTRING_MAX_CACHE_SIZE // defined in install_settings
        this.trial_data_savepath = TRIAL_DATA_SAVEPATH
        this.touch_data_savepath = TOUCH_DATA_SAVEPATH

        this._debug_trial_data_savepath = _debug_TRIAL_DATA_SAVEPATH
        this._debug_touch_data_savepath = _debug_TOUCH_DATA_SAVEPATH
        this._last_touch_save = performance.now()
        this._last_trialbehavior_save = performance.now()

        this._touch_filename_suffix = this._generate_touch_filename_suffix()
    }

    async saveTrialData(save_to_debug_directory){

        var dataobj = [] 
        dataobj.push(SESSION)
        dataobj.push(DEVICE)
        dataobj.push(TS.EXPERIMENT)
        dataobj.push(CANVAS)
        dataobj.push(TRIAL_BEHAVIOR)
        dataobj.push(EVENT_TIMESTAMPS)
        var datastr = JSON.stringify(dataobj); //no pretty print for now, saves space and data file is unwieldy to look at for larger numbers of trials


        try{// In debug mode
            if (save_to_debug_directory == 1){
                var savepath = join([this._debug_trial_data_savepath,
                    SESSION.Subject,
                    "debug__"+SESSION.Subject +'_'+SESSION.TrialDataFileName_suffix])
            }
            else { 
                var savepath = join([this.trial_data_savepath,
                    SESSION.Subject,
                    SESSION.Subject +'_'+SESSION.TrialDataFileName_suffix])
            }

            await this.DIO.write_string(datastr, savepath)             
            console.log(" BEHAVIOR FILE UPLOADED at "+savepath)
            }
        catch(error){
            console.error(error)
        }
    }

    
    async saveTouches(save_to_debug_directory){
        try{

            if (save_to_debug_directory == 0){
                var savepath = join([this.touch_data_savepath, SESSION.Subject, SESSION.Subject+this._touch_filename_suffix ])
            }
            else { // In debug mode

                var savepath = join([this._debug_touch_data_savepath, SESSION.Subject, 'debug__'+SESSION.Subject+this._touch_filename_suffix ])
            }


            
            console.log(savepath, '  saveTouches does this look ok?')


            var header='pageX,pageY'
            header+=',clientXdelta_from_pageX,clientYdelta_from_pageY'
            header+=',screenXdelta_from_pageX,screenYdelta_from_pageY'
            header+=',radiusX,radiusY'
            header+=',touch_update_number'
            header+=',unix_timestamp_delta_from__'+SESSION.UnixTimestampAtStart
            header+=',Tap_or_Drag\n'

            var datastring = header+TOUCHSTRING

            this.DIO.write_string(datastring, savepath)

            if(TOUCHSTRING.length > TOUCHSTRING_MAX_CACHE_SIZE){
                // Start new file and flush cache
                this._touch_filename_suffix = _generate_touch_filename_suffix()
                TOUCHSTRING = ""
            }

            console.log("Touches written to disk as "+savepath) 
        }
        catch (error){
            console.error(error)
        }
    }

    _generate_touch_filename_suffix(){
        var datestr = SESSION.CurrentDate.toISOString();
        datestr = datestr.slice(0,datestr.indexOf("."))
        var _touch_filename_suffix = '_touch_'+datestr+'__'+TOUCHSTRING_UDPATECOUNTER+'.txt' // Initial name
        return _touch_filename_suffix
    }

}