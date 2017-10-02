    async readTrialHistoryFromDropbox(ndatafiles2read){
        var subject_behavior_save_directory = TRIAL_DATA_SAVEPATH + SESSION.Subject
        
        try{
                await dbx.filesGetMetadata({"path":subject_behavior_save_directory, "include_deleted":false})
            }
        catch(error){
            console.log(error)
            console.log("Subject save directory does not exist...making one at "+subject_behavior_save_directory)
            await dbx.filesCreateFolder({"path":subject_behavior_save_directory})
        }

         var filepaths = await this.getMostRecentBehavioralFilePathsFromDropbox(ndatafiles2read, SESSION.Subject, subject_behavior_save_directory)
        

        var trialhistory = {}
        trialhistory.trainingstage = []
        trialhistory.starttime = []
        trialhistory.response = []
        trialhistory.correct = []
        trialhistory.trialnumber = []

        if (typeof filepaths == "string"){
            filepaths = [filepaths]
        }

        // Sort in ascending order, such that the OLDEST file is FIRST in trialhistory 
        // trialhistory: [oldest TRIALs... most recent TRIALs]
        filepaths.sort()

        // Iterate over files and add relevant variables
        for (var i = 0; i< filepaths.length; i++){
            var datastring = await DW.loadTextFilefromDropbox(dbx, filepaths[i])
            var data = JSON.parse(datastring)

        


            var session_data = data[0]
            var UnixTimeStampAtStart = session_data.UnixTimeStampAtStart
            var task_archive_data = data[2]
            var trial_data = data[4]

            var numTRIALs = trial_data.Response.length; 
            // Iterate over TRIALs
            for (var i_trial = 0; i_trial<numTRIALs; i_trial++){
                // Correct/incorrect TRIAL
                var correct = Number(trial_data.Response[i_trial] == trial_data.CorrectItem[i_trial])
                trialhistory.correct.push(correct)

                // Current automator stage 
                var current_stage = stageHash(task_archive_data[task_archive_data.length-1])
                trialhistory.trainingstage.push(current_stage)

                // Start time (fixation dot appears) of trial 
                var starttime = UnixTimeStampAtStart + trial_data.StartTime[i_trial]
                trialhistory.starttime.push(starttime)

            }
        }
        console.log('Read '+trialhistory.trainingstage.length+' past trials from ', filepaths.length, ' datafiles.')
        return trialhistory
    }

    // Promise: dispense reward (through audio control)
  _legacy_driveJuicer_via_Audio(){
    console.log('Legacy dispense reward')
    return 
    return new Promise(function(resolve,reject){
      this.audiocontext.resume()
      var oscillator = this.audiocontext.createOscillator();
      this.gainNode.gain.value=1;
      if (SubjectSettings['Pump'] == 1){
        oscillator.type='square'; //Square wave
        oscillator.frequency.value=25; //frequency in hertz       
      } //peristaltic (adafruit)
      else if (SubjectSettings['Pump']==2){
        oscillator.type='square'; //Square wave
        oscillator.frequency.value=0.1; //frequency in hertz
      } //submersible (TCS)
      else if (SubjectSettings['Pump']==3){
        oscillator.type='square'; //Square wave
        oscillator.frequency.value=10; //frequency in hertz   
      } //diaphragm (TCS)
      else if (SubjectSettings['Pump']==4){
        oscillator.type='square'; //Square wave
        oscillator.frequency.value=0.1; //frequency in hertz        
      } //piezoelectric (takasago)
      else if (SubjectSettings['Pump']==5){
        oscillator.type='square';
        oscillator.frequency.value=0.1;
      } //diaphragm new (TCS)
      else if (SubjectSettings['Pump']==6){
        oscillator.type='square'; //Square wave
        oscillator.frequency.value=0.1; //frequency in hertz        
      } //piezoelectric 7ml/min (takasago)
      // oscillator.connect(audiocontext.destination); //Connect sound to output
      // //var gainNode = audiocontext.createGainNode(); //Create boost pedal
      // //gainNode.gain.value=0.3; //set boost pedal to 30% volume
      oscillator.connect(gainNode);
      // //gainNode.connect(audiocontext.destination); //Connect boost pedal to output
      // // oscillator.onended=function(){
      // //   console.log('done with reward pulse');
      // //   resolve(1);
      // // }
      var currentTime= this.audiocontext.currentTime;


      oscillator.start(currentTime);
      oscillator.stop(currentTime + ENV.RewardDuration);
      setTimeout(function(){console.log('sound done'); resolve(1);},ENV.RewardDuration*1000);
    }).then();
  }