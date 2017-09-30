// Functions for recording scientific data to disk. 


class MechanicalTurkDataWriter{
    // Where there can be no live writing / reading
    constructor(){
        this.dataobj = undefined
    }

    initialize(){
        this.dataobj = undefined
        initializeMouseTracker()
    }

    async writeout(dataobj){
        this.dataobj = dataobj
        console.log(dataobj)
    }
    async saveTrialData(dataobj, debug_mode){
        console.log('No saveTrialData until concludeSession()')
    }
    async saveTouches(debug_mode){
        console.log('No saveTouches until concludeSession()')
    }

    async concludeSession(){
        // Upload to turk
        


        if(SUBMIT_TO_SANDBOX == true){
            var submit_url = "https://workersandbox.mturk.com/mturk/externalSubmit" 
        }
        else if(SUBMIT_TO_SANDBOX == false){
            var submit_url = "https://www.mturk.com/mturk/externalSubmit"
        }

        document.getElementById("MechanicalTurk_SubmissionForm").action = submit_url
        console.log(document.getElementById('MechanicalTurk_SubmissionForm'))

        var aID = SUBJECT['assignmentId']


        var result_str = {'TASK_DATA':this.dataobj}


        result_str = JSON.stringify(result_str)

        //alert('Size of uncompressed is '+ result_str.length)
        //result_str = LZString.compress(result_str)
        //alert('Size of compressed is '+ result_str.length)

        document.getElementById("MechanicalTurk_SubmissionForm").action = submit_url


        document.getElementById("assignmentId").value = SUBJECT['assignmentId']; 
        document.getElementById("hitId").value = SUBJECT['hitId']
        console.log(aID) 
        document.getElementById("submission_data").value = result_str;

        await timeOut(1500)

        document.getElementById("MechanicalTurk_SubmissionForm").submit();
        console.log('SIMULATED SUBMISSION TO TURK')

    }
}

class DropboxDataWriter{
    constructor(DIO){
        this.dataobj =undefined 

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

    initialize(){
        this.dataobj = undefined
        initializeTouchTracker()
    }

    async saveTrialData(dataobj, save_to_debug_directory){

        
        var datastr = JSON.stringify(dataobj); 
        var __datestr = SESSION.CurrentDate.toISOString();
        var TrialDataFileName_suffix = __datestr.slice(0, __datestr.indexOf(".")) + "_" + SESSION.SubjectID + ".txt"; 

        try{// In debug mode
            if (save_to_debug_directory == 1){
                var savepath = join([this._debug_trial_data_savepath,
                    SESSION.SubjectID,
                    "debug__"+SESSION.SubjectID +'_'+TrialDataFileName_suffix])
            }
            else { 
                var savepath = join([this.trial_data_savepath,
                    SESSION.SubjectID,
                    SESSION.SubjectID +'_'+TrialDataFileName_suffix])
            }

            await this.DIO.write_string(datastr, savepath)             
            console.log(" BEHAVIOR FILE UPLOADED at "+savepath)
            }
        catch(error){
            console.error(error)
        }
    }

    async writeout(dataobj){
        // Asynchronous save at most every T seconds
        var _ms_since_last_trial_data_save = performance.now() - last_trial_data_save
        var _ms_since_last_touch_data_save = performance.now() - last_touch_save
        var _ms_since_last_paramfile_check = performance.now() - last_paramfile_check 

        if ( _ms_since_last_trial_data_save > TRIALDATA_SAVE_TIMEOUT_PERIOD){ 
            console.log(_ms_since_last_trial_data_save/1000+'s since last trial data save. Requesting save...')
            this.saveTrialData(dataobj, FLAGS.debug_mode)
            last_trial_data_save = performance.now()
        }

        if (_ms_since_last_touch_data_save > TOUCHSTRING_SAVE_TIMEOUT_PERIOD){
            console.log(_ms_since_last_touch_data_save/1000 +'s since last TOUCHSTRING save. '+TOUCHSTRING.length+' length TOUCHSTRING save requested.')
            this.saveTouches(FLAGS.debug_mode)
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


            

            var datastring = TOUCHSTRING

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

    async concludeSession(){
        console.log("Nothing to concludeSession() in DropboxDataWriter; actively wrote out every trial")
    }

}