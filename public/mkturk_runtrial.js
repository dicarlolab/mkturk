//============= AWAIT LOAD PARAMS =============//
async function runtrial(){
windowWidth = document.body.clientWidth; //get true window dimensions at last possible moment
windowHeight = document.body.clientHeight;  

if (TASK.Automator !=0){    
    TASK = await AM.monitorStage_State_and_Transition(TASK);
}

// Check if parameters need to be reloaded (e.g. because they changed on disk or because of the automator)
if (FLAGS.need2loadParameters == 1 || INITIALIZE == true){
    INITIALIZE = false 

    var old_ImageBagsSample = TASK.ImageBagsSample
    var old_ImageBagsTest = TASK.ImageBagsTest
    var _funcreturn = await DW.loadParametersfromDropbox(ParamFilePath)
    TASK =_funcreturn[0]
    ParamFileRev = _funcreturn[1]

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

// Check if images need to be reloaded. 
if (FLAGS.need2loadImages == 1){
    if(TASK.Automator != 1){
        var samplingStrategy = 'uniform_with_replacement'
        TQ = new TrialQueue(samplingStrategy, TASK.ImageBagsSample, TASK.ImageBagsTest, TASK.samplingRNGseed, TRIAL_NUMBER_FROM_TASKSTREAM_START)
        await TQ.build(1)
    }   

    else if(TASK.Automator == 1){
        TQ = AM.AutomatorPreBuffer.TrialQueue[TASK.CurrentAutomatorStage]
    } 

    samplebag_paths = TQ.samplebag_paths
    samplebag_labels = TQ.samplebag_labels
    testbag_paths = TQ.testbag_paths
    testbag_labels = TQ.testbag_labels

    // Write down dimensions of (assumedly) all images in samplebag and testbag, based on the first sample image.
    await TQ.get_trial(TRIAL_NUMBER_FROM_TASKSTREAM_START)
    var representative_image = await TQ.IB.get_by_name(TQ.sampleq.filename[0])
    DEVICE.source_ImageWidthPixels = representative_image.width
    DEVICE.source_ImageHeightPixels = representative_image.height

    FLAGS.need2loadImages = 0;
} 

// define image display grid
FixationRadius=(DEVICE.source_ImageWidthPixels/2)*TASK.FixationScale*DEVICE.CanvasRatio
funcreturn = defineImageGrid(TASK.NGridPoints, DEVICE.source_ImageWidthPixels, DEVICE.source_ImageHeightPixels, TASK.GridScale);
xcanvascenter = funcreturn[0]
ycanvascenter = funcreturn[1]
DEVICE.XGridCenter = funcreturn[2]
DEVICE.YGridCenter = funcreturn[3]

// pre-render images. 
renderReward(CANVAS.obj.reward);
renderPunish(CANVAS.obj.punish);
renderBlank(CANVAS.obj.blank);

//============ SELECT SAMPLE & TEST IMAGES ============//
// Draw one (1) sample image from samplebag
[sampleimage, sampleindex, testimages, testindices, correctitem] = await TQ.get_trial(TRIAL_NUMBER_FROM_TASKSTREAM_START);


//============ AWAIT BUFFER CANVASES WITH SAMPLE & TEST IMAGES ============//
await bufferTrialImages(sampleimage, TASK.SampleGridIndex, testimages, TASK.TestGridIndex, correctitem);

//============ FIXATION SCREEN ============//
var event_timestamps = {}


renderFixationUsingDot("white", TASK.StaticFixationGridIndex, FixationRadius, CANVAS.obj.touchfix);
var fixation_timestamps = await displayScreenSequence(CANVAS.sequencepre,CANVAS.tsequencepre);
console.log("fixation_timestamps", fixation_timestamps)

FixationRewardMap = new RewardMap()
reward_amounts = [0]
FixationRewardMap.create_reward_map_with_bounding_boxes(boundingBoxesFixation, reward_amounts)
var outcome = await FixationRewardMap.Promise_wait_until_active_response_then_return_juice()
await displayScreenSequence(CANVAS.sequenceblank,CANVAS.tsequenceblank);

var fixation_x = outcome['x']
var fixation_y = outcome['y']
var fixation_timestamp = outcome['timestamp']
var fixation_juice = outcome['juice']

//============== SHOW SAMPLE THEN TEST ==============//

var stimulus_timestamps = await displayScreenSequence(CANVAS.sequence,CANVAS.tsequence);
tsequencedesired = CANVAS.tsequence

console.log("stimulus_timestamps", stimulus_timestamps)

console.log(boundingBoxesChoice)


reward_amounts = []
for (var _r = 0; _r < boundingBoxesChoice.length; _r++){
    if(_r != correctitem){
        reward_amounts[_r] = 0
    }
    else{
        console.log("correct choice:", correctitem)
        reward_amounts[_r] = 1
    }
}
FixationRewardMap.create_reward_map_with_bounding_boxes(boundingBoxesChoice, reward_amounts)
var outcome_from_touch_response_promise = FixationRewardMap.Promise_wait_until_active_response_then_return_juice()
var timeout_promise = choiceTimeOut(TASK.ChoiceTimeOut)
var choice_outcome = await Promise.race([outcome_from_touch_response_promise, timeout_promise])

var choice_x = choice_outcome['x']
var choice_y = choice_outcome['y']
var choice_timestamp = choice_outcome['timestamp']
var choice_juice = choice_outcome['juice']

console.log("trial outcome: ", choice_outcome)

//========= AWAIT TOUCH RESPONSE =========//

var correct = choice_juice
var response = choice_outcome["region_index"]




//============ DETERMINE NUMBER OF REWARDS ============//
if (correct == 1){
    nreward = 1 
}
else if (correct == 0){
    nreward = 0;
} 

RewardDuration = setReward();

//============ DELIVER REWARD/PUNISH ============//
// REWARD
if (correct == 1){
    CANVAS.sequencepost[1]="reward";
    CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+RewardDuration*1000;

    for (var q = 0; q <= nreward-1; q++){

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
    CANVAS.sequencepost[1] = "punish";
    CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+TASK.PunishTimeOut;

    
    SP.playSound(3);
    var p1 = await displayScreenSequence(CANVAS.sequencepost,CANVAS.tsequencepost);
}

//================= Record results of trial =================//
TRIAL.EventTimestamps.push(event_timestamps)
TRIAL.FixationGridIndex.push(TASK.StaticFixationGridIndex)
TRIAL.Sample.push(sampleindex )
TRIAL.Test.push(testindices )
TRIAL.Response.push(response)
TRIAL.CorrectItem.push(correctitem)
TRIAL.NReward.push(nreward)
TRIAL.AutomatorStage.push(TASK.CurrentAutomatorStage)
TRIAL.trial_num_Session.push(TRIAL_NUMBER_FROM_SESSION_START)
TRIAL.trial_num_TaskStream.push(TRIAL_NUMBER_FROM_TASKSTREAM_START)
TRIAL.reward_duration.push(RewardDuration)
TRIAL.TASK_ARCHIVE_counter.push(TASK_ARCHIVE_COUNTER)


if (TASK.Automator == 1){
    var current_stage = stageHash(TASK); 
    AM.trialhistory.trainingstage.push(current_stage);
    AM.trialhistory.starttime.push(starttime)
    AM.trialhistory.response.push(response)
    AM.trialhistory.correct.push(correct)
}

TRIAL_NUMBER_FROM_SESSION_START++
TRIAL_NUMBER_FROM_TASKSTREAM_START++

// Asynchronous save at most every T seconds

var _ms_since_last_trial_data_save = performance.now() - last_trial_data_save
var _ms_since_last_touch_data_save = performance.now() - last_touch_save
if ( _ms_since_last_trial_data_save > TRIALDATA_SAVE_TIMEOUT_PERIOD){ 
    // console.log(_ms_since_last_trial_data_save/1000+'s since last trial data save. At trial'+ TRIAL_NUMBER_FROM_SESSION_START +'. automator stage:'+TASK.CurrentAutomatorStage)
    DW.saveTrialDatatoDropbox(SESSION, DEVICE, TASK_ARCHIVE, CANVAS, TRIAL, FLAGS.debug_mode)
    last_trial_data_save = performance.now()
}

if (_ms_since_last_touch_data_save > TOUCHSTRING_SAVE_TIMEOUT_PERIOD){
    // console.log(_ms_since_last_touch_data_save/1000 +'s since last TOUCHSTRING save. '+TOUCHSTRING.length+' length TOUCHSTRING save requested.')
    DW.saveTouchestoDropbox(FLAGS.debug_mode)
    last_touch_save = performance.now()
}

if (FLAGS.need2saveParameters == 1){
    FLAGS.need2saveParameters = DW.saveParameterstoDropbox(); // Save parameters asynchronously
}

FLAGS.need2loadParameters = DW.checkIfFileChangedOnDisk(ParamFilePath, ParamFileRev)

}