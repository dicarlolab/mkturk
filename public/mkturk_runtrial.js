//============= AWAIT LOAD PARAMS =============//
async function runtrial(){

writeTextToBox(TRIAL_NUMBER_FROM_SESSION_START)


windowHeight = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;


 //get true window dimensions at last possible moment
windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;


console.log('windowWidth', windowWidth, 'windowHeight', windowHeight)
// Reference: https://www.w3schools.com/js/js_window.asp


if (TASK.Automator == 1){    
    TASK = await AM.monitorStage_State_and_Transition(TASK);
}

// Check if parameters need to be reloaded (e.g. because they changed on disk or because of the automator)
if (FLAGS.need2loadParameters == 1 || INITIALIZE == true){
    FLAGS.need2loadParameters = 0
    var old_ImageBagsSample = TASK.ImageBagsSample
    var old_ImageBagsTest = TASK.ImageBagsTest
    TASK = await TASK_buffer.read()

    TASK_ARCHIVE.push(TASK)
    TASK_ARCHIVE_COUNTER++
    //============= SET UP CANVAS =============//
    // Update canvas based on latest TASK state: 
    refreshCanvasSettings(TASK); 
    
    for (var i = 0; i <= CANVAS.names.length-1; i++) {
        setupCanvas(CANVAS.obj[CANVAS.names[i]]);
    }
    if (DEVICE.DevicePixelRatio !== 1){
        scaleCanvasforHiDPI(CANVAS.obj.sample);
        scaleCanvasforHiDPI(CANVAS.obj.test);
    }

    CANVAS.workspace = [
        0,
        0,
        CANVAS.obj["touchfix"].width,
        CANVAS.obj["touchfix"].height
    ]

    if(!old_ImageBagsTest.equals(TASK.ImageBagsTest) || !old_ImageBagsSample.equals(TASK.ImageBagsSample)){
        FLAGS.need2loadImages = 1; 
    }
} 


if(TASK.Automator == 0){
    if (FLAGS.need2loadImages == 1){
        var samplingStrategy = 'uniform_with_replacement'
        TQ = new TrialQueue(samplingStrategy, TASK.ImageBagsSample, TASK.ImageBagsTest, TASK.ObjectGridMapping, TASK.samplingRNGseed, TRIAL_NUMBER_FROM_TASKSTREAM_START)
        await TQ.build(1)
   }   
}
else if(TASK.Automator == 1){
    console.log("TASK.CurrentAutomatorStage", TASK.CurrentAutomatorStage)
    TQ = AM.AutomatorPreBuffer.TrialQueue[TASK.CurrentAutomatorStage]
} 


if (INITIALIZE == true){
    INITIALIZE = false // todo: remove this 
    console.log('hello TQ', TQ)
    samplebag_paths = TQ.samplebag_paths
    samplebag_labels = TQ.samplebag_labels
    testbag_paths = TQ.testbag_paths
    testbag_labels = TQ.testbag_labels

    // Write down dimensions of (assumedly) all images in samplebag and testbag, based on the first sample image.
    await TQ.get_trial(TRIAL_NUMBER_FROM_TASKSTREAM_START)
    var representative_image = await TQ.IB.get_by_name(TQ.sampleq.filename[0])
    DEVICE.source_ImageWidthPixels = representative_image.width
    DEVICE.source_ImageHeightPixels = representative_image.height

    FixationRadius=(DEVICE.source_ImageWidthPixels/2)*TASK.FixationScale*DEVICE.CanvasRatio


    FLAGS.need2loadImages = 0;
}

funcreturn = defineImageGrid(TASK.NGridPoints, 
    DEVICE.source_ImageWidthPixels, 
    DEVICE.source_ImageHeightPixels, 
    TASK.GridScale);

xcanvascenter = funcreturn[0]
ycanvascenter = funcreturn[1]
DEVICE.XGridCenter = funcreturn[2]
DEVICE.YGridCenter = funcreturn[3]

// pre-render images. 
renderReward(CANVAS.obj.reward);
renderPunish(CANVAS.obj.punish);
renderBlank(CANVAS.obj.blank);

//============ SELECT SAMPLE & TEST IMAGES ============//

[sample_image,
     samplebag_index, 
     sample_grid_index_placement, 
     test_images, 
     testbag_indices, 
     test_correct_grid_index, 
     test_grid_index_placements, 
     choice_reward_amounts] = await TQ.get_trial(TRIAL_NUMBER_FROM_TASKSTREAM_START);


//============ AWAIT BUFFER CANVASES WITH SAMPLE & TEST IMAGES ============//
boundingBoxesFixation = await bufferFixationScreenUsingDot("white", TASK.StaticFixationGridIndex, FixationRadius);
boundingBoxesSample = await bufferStimulusScreen(sample_image, sample_grid_index_placement)
boundingBoxesChoice = await bufferChoiceScreen(test_images, test_grid_index_placements)

//============ FIXATION SCREEN ============//


FixationRewardMap.create_reward_map_with_bounding_boxes(boundingBoxesFixation, [0])
ChoiceRewardMap.create_reward_map_with_bounding_boxes(boundingBoxesChoice, choice_reward_amounts)

var fixation_onset_timestamps = await displayScreenSequence(CANVAS.sequencepre,CANVAS.tsequencepre);

console.log('Awaiting fixation...')
var fixation_outcome = await FixationRewardMap.Promise_wait_until_active_response_then_return_juice()
console.log('Fixation reached')


//============== SHOW SAMPLE THEN TEST ==============//

var stimulus_timestamps = await displayScreenSequence(CANVAS.sequence,CANVAS.tsequence);



var outcome_from_touch_response_promise = ChoiceRewardMap.Promise_wait_until_active_response_then_return_juice()
var timeout_promise = choiceTimeOut(TASK.ChoiceTimeOut)
var choice_outcome = await Promise.race([outcome_from_touch_response_promise, timeout_promise])


//========= AWAIT TOUCH RESPONSE =========//
var correct = choice_juice
var chosen_grid_index = test_grid_index_placements[choice_outcome["region_index"]]


//============ DETERMINE NUMBER OF REWARDS ============//
if (correct == 1){
    nreward = 1 
}
else if (correct == 0){
    nreward = 0;
} 

RewardDuration = setReward();

//============ DELIVER REWARD/PUNISH ============//
if (correct == 1){
    CANVAS.sequencepost[1]="reward";
    CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+RewardDuration*1000;

    for (var q = 0; q <= nreward-1; q++){
        reinforcement_onset = performance.now()
        SP.playSound(2);
        var p1 = displayScreenSequence(CANVAS.sequencepost,CANVAS.tsequencepost)
        if (ble.connected == false){
            await Promise.all([p1])
        }
        else if (ble.connected == true){
            var p2 = writepumpdurationtoBLE(Math.round(RewardDuration*1000))
            await Promise.all([p1, p2])
        }
    } 
}

//PUNISH
else{
    reinforcement_onset = performance.now()
    CANVAS.sequencepost[1] = "punish";
    CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+TASK.PunishTimeOut;
    SP.playSound(3);
    var p1 = await displayScreenSequence(CANVAS.sequencepost,CANVAS.tsequencepost);
}
reinforcement_end = performance.now()


//================= Record results of trial =================//
EVENT_TIMESTAMPS.fixation_onset.push(fixation_onset_timestamps[0])
EVENT_TIMESTAMPS.fixation_touch.push(fixation_outcome['timestamp'])

EVENT_TIMESTAMPS.blank_onset.push(stimulus_timestamps[0])
EVENT_TIMESTAMPS.stimulus_onset.push(stimulus_timestamps[1])

if (TASK.t_sampleOFF > 0) {
    EVENT_TIMESTAMPS.delay_onset.push(stimulus_timestamps[2])
    EVENT_TIMESTAMPS.choice_onset.push(stimulus_timestamps[3]) 
}
else{
    EVENT_TIMESTAMPS.delay_onset.push(-1)
    EVENT_TIMESTAMPS.choice_onset.push(stimulus_timestamps[2]) 
}
EVENT_TIMESTAMPS.choice_touch.push(choice_outcome['timestamp'])
EVENT_TIMESTAMPS.reinforcement_onset.push(reinforcement_onset)
EVENT_TIMESTAMPS.reinforcement_end.push(reinforcement_end)



var fixation_x = fixation_outcome['x']
var fixation_y = fixation_outcome['y']
var fixation_juice = fixation_outcome['juice']
var choice_x = choice_outcome['x']
var choice_y = choice_outcome['y']
var choice_juice = choice_outcome['juice']



TRIAL.FixationXYT.push([fixation_outcome['x'], fixation_outcome['y'], fixation_outcome['timestamp']])
TRIAL.ChoiceXYT.push([choice_outcome['x'], choice_outcome['y'], choice_outcome['timestamp']])
TRIAL.StartTime.push(Math.round(fixation_outcome['timestamp']))
TRIAL.FixationGridIndex.push(TASK.StaticFixationGridIndex)
TRIAL.SampleBagIndex.push(samplebag_index)
TRIAL.Test.push(testbag_indices)
TRIAL.Response.push(chosen_grid_index)
TRIAL.CorrectItem.push(test_correct_grid_index)
TRIAL.Juice.push(choice_outcome['juice'])
TRIAL.NReward.push(nreward)
TRIAL.AutomatorStage.push(TASK.CurrentAutomatorStage)
TRIAL.trial_num_Session.push(TRIAL_NUMBER_FROM_SESSION_START)
TRIAL.trial_num_TaskStream.push(TRIAL_NUMBER_FROM_TASKSTREAM_START)
TRIAL.reward_duration.push(Math.round(1000*RewardDuration)/1000)
TRIAL.TASK_ARCHIVE_counter.push(TASK_ARCHIVE_COUNTER)


if (TASK.Automator == 1){
    var current_stage = stageHash(TASK); 
    AM.trialhistory.trainingstage.push(current_stage);
    AM.trialhistory.starttime.push(fixation_outcome['timestamp'])
    AM.trialhistory.response.push(chosen_grid_index)
    AM.trialhistory.correct.push(choice_juice)
}

TRIAL_NUMBER_FROM_SESSION_START++
TRIAL_NUMBER_FROM_TASKSTREAM_START++

// Asynchronous save at most every T seconds
var _ms_since_last_trial_data_save = performance.now() - last_trial_data_save
var _ms_since_last_touch_data_save = performance.now() - last_touch_save
var _ms_since_last_paramfile_check = performance.now() - last_paramfile_check 

if ( _ms_since_last_trial_data_save > TRIALDATA_SAVE_TIMEOUT_PERIOD){ 
    console.log(_ms_since_last_trial_data_save/1000+'s since last trial data save. At trial'+ TRIAL_NUMBER_FROM_SESSION_START +'. automator stage:'+TASK.CurrentAutomatorStage)
    DW.saveTrialDatatoDropbox(FLAGS.debug_mode)
    last_trial_data_save = performance.now()
}

if (_ms_since_last_touch_data_save > TOUCHSTRING_SAVE_TIMEOUT_PERIOD){
    console.log(_ms_since_last_touch_data_save/1000 +'s since last TOUCHSTRING save. '+TOUCHSTRING.length+' length TOUCHSTRING save requested.')
    DW.saveTouchestoDropbox(FLAGS.debug_mode)
    last_touch_save = performance.now()
}

if(_ms_since_last_paramfile_check > PARAMFILE_CHECK_TIMEOUT_PERIOD){
    TASK_buffer.check_if_changed_on_disk()
    last_paramfile_check = performance.now()
    console.log(_ms_since_last_touch_data_save/1000 +'s since last paramfile check.')

}


if (FLAGS.need2saveParameters == 1){
    TASK_buffer.write_object_as_json(TASK)
    FLAGS.need2saveParameters = 0 
}


}