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

        var dataobj = {}
        dataobj['SESSION'] = SESSION
        dataobj['DEVICE'] = DEVICE
        dataobj['EXPERIMENT'] = TS.EXPERIMENT
        dataobj['CANVAS'] = CANVAS
        dataobj['TRIAL_BEHAVIOR'] = TRIAL_BEHAVIOR
        dataobj['EVENT_TIMESTAMPS'] = EVENT_TIMESTAMPS
        dataobj['SubjectSettings'] = SubjectSettings
        var datastr = JSON.stringify(dataobj); //no pretty print for now, saves space and data file is unwieldy to look at for larger numbers of trials


        try{// In debug mode
            if (save_to_debug_directory == 1){
                var savepath = join([this._debug_trial_data_savepath,
                    SESSION.SubjectID,
                    "debug__"+SESSION.SubjectID +'_'+SESSION.TrialDataFileName_suffix])
            }
            else { 
                var savepath = join([this.trial_data_savepath,
                    SESSION.SubjectID,
                    SESSION.SubjectID +'_'+SESSION.TrialDataFileName_suffix])
            }

            await this.DIO.write_string(datastr, savepath)             
            console.log(" BEHAVIOR FILE UPLOADED at "+savepath)
            }
        catch(error){
            console.error(error)
        }
    }

    async writeout(){

        // Asynchronous save at most every T seconds
        var _ms_since_last_trial_data_save = performance.now() - last_trial_data_save
        var _ms_since_last_touch_data_save = performance.now() - last_touch_save
        var _ms_since_last_paramfile_check = performance.now() - last_paramfile_check 

        if ( _ms_since_last_trial_data_save > TRIALDATA_SAVE_TIMEOUT_PERIOD){ 
            console.log(_ms_since_last_trial_data_save/1000+'s since last trial data save. At trial'+ 
                TRIAL_NUMBER_FROM_SESSION_START +'. Epoch stage:'+TS.state.current_stage_index)
            DWr.saveTrialData(FLAGS.debug_mode)
            last_trial_data_save = performance.now()
        }

        if (_ms_since_last_touch_data_save > TOUCHSTRING_SAVE_TIMEOUT_PERIOD){
            console.log(_ms_since_last_touch_data_save/1000 +'s since last TOUCHSTRING save. '+TOUCHSTRING.length+' length TOUCHSTRING save requested.')
            DWr.saveTouches(FLAGS.debug_mode)
            last_touch_save = performance.now()
        }
    }
    
    async saveTouches(save_to_debug_directory){
        try{

            if (save_to_debug_directory == 0){
                var savepath = join([this.touch_data_savepath, SESSION.SubjectID, SESSION.SubjectID+this._touch_filename_suffix ])
            }
            else { // In debug mode

                var savepath = join([this._debug_touch_data_savepath, SESSION.SubjectID, 'debug__'+SESSION.SubjectID+this._touch_filename_suffix ])
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