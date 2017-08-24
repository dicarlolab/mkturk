//============= AWAIT LOAD PARAMS =============//
async function runtrial(){
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
FLAGS.waitingforTouches = 1


screen = SCREEN_STATE_MACHINE.get_initial_screen()
while(trial_running){
    
    _emission = await screen.monitor_subject_input()

    giveJuice(_emission['juice'])
    screen = _emission['next_screen']

    if(_emission['is_terminal'] == true){
        trial_running = false
    }
}


var response = -1 
while (FLAGS.waitingforTouches > 0){
    console.log(x, y)
     
    fixationgridindex = TASK.StaticFixationGridIndex;

    // Render fixation screen 

    var color = "white" // todo move into task    
    renderFixationUsingDot(color, fixationgridindex, FixationRadius, CANVAS.obj.touchfix);
    
    // Start timer for this fixation render trial. 
    starttime=Math.round(performance.now());

    //========= SHOW FIXATION =========//
    await displayScreenSequence(CANVAS.sequencepre,CANVAS.tsequencepre);

    //========= HOLD FIXATION TOUCH =========//
    var touchhold_return = await touchhold_promise(TASK.FixationDuration,boundingBoxesFixation)
    var fixationtouchevent = touchhold_return.type
    if (fixationtouchevent == "touchheld"){
        response = correctitem
    } 

    //========= CLEAR FIXATION =========//
    if (FLAGS.waitingforTouches > 0){
        await displayScreenSequence(CANVAS.sequenceblank,CANVAS.tsequenceblank);
    } 
} 

//============== AWAIT SHOW SAMPLE THEN TEST ==============//

tsequenceactual = await displayScreenSequence(CANVAS.sequence,CANVAS.tsequence);
tsequencedesired = CANVAS.tsequence
//SP.audiocontext.suspend()

//========= AWAIT TOUCH RESPONSE =========//
FLAGS.waitingforTouches = 1    



var p1 = touchhold_promise(0,boundingBoxesChoice)
var p2 = choiceTimeOut(TASK.ChoiceTimeOut)

var race_return = await Promise.race([p1,p2])
var responsetouchevent = race_return.type
response = race_return.cxyt[0]

if (response == correctitem){ 
    correct = 1; 
}
else { 
    correct=0; 
}


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
else if (correct == 0) {
    CANVAS.sequencepost[1] = "punish";
    CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+TASK.PunishTimeOut;

    
    SP.playSound(3);
    var p1 = await displayScreenSequence(CANVAS.sequencepost,CANVAS.tsequencepost);
}

//================= Record results of trial =================//
TRIAL.StartTime.push(starttime)
TRIAL.FixationGridIndex.push(fixationgridindex)
TRIAL.Sample.push(sampleindex )
TRIAL.Test.push(testindices )
TRIAL.Response.push(response)
TRIAL.FixationTouchEvent.push(fixationtouchevent)
TRIAL.ResponseTouchEvent.push(responsetouchevent)
TRIAL.CorrectItem.push(correctitem)
TRIAL.NReward.push(nreward)
TRIAL.AutomatorStage.push(TASK.CurrentAutomatorStage)
TRIAL.TSequenceDesired.push(tsequencedesired)
TRIAL.TSequenceActual.push(tsequenceactual)
TRIAL.trial_num_Session.push(TRIAL_NUMBER_FROM_SESSION_START)
TRIAL.trial_num_TaskStream.push(TRIAL_NUMBER_FROM_TASKSTREAM_START)
TRIAL.reward_duration.push(RewardDuration)
TRIAL.TASK_ARCHIVE_counter.push(TASK_ARCHIVE_COUNTER)


var current_stage = stageHash(TASK); 
AM.trialhistory.trainingstage.push(current_stage);
AM.trialhistory.starttime.push(starttime)
AM.trialhistory.response.push(response)
AM.trialhistory.correct.push(correct)

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