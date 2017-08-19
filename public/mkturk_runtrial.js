//============= AWAIT LOAD PARAMS =============//
async function runtrial(){

if (TASK.Automator !=0){    
    TASK = await AM.monitorStage_State_and_Transition(TASK);
}

// Check if parameters need to be reloaded (e.g. because they changed on disk or because of the automator)
if (FLAGS.need2loadParameters == 1){
    var old_ImageBagsSample = TASK.ImageBagsSample
    var old_ImageBagsTest = TASK.ImageBagsTest
    TASK = await DW.loadParametersfromDropbox(ENV.ParamFileName);

    //============= SET UP CANVAS =============//
    // Update canvas based on latest TASK state: 
    refreshCanvasSettings(TASK); 
    setupCanvasHeadsUp()
    setupImageLoadingText()
    windowWidth = document.body.clientWidth; //get true window dimensions at last possible moment
    windowHeight = document.body.clientHeight;  
    for (var i = 0; i <= CANVAS.names.length-1; i++) {
        setupCanvas(CANVAS.obj[CANVAS.names[i]]);
    }
    if (ENV.DevicePixelRatio !== 1){
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
        TQ = new TrialQueue(samplingStrategy, TASK.ImageBagsSample, TASK.ImageBagsTest, TASK.samplingRNGseed, TASK.trialStartNumber)
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
    await TQ.generate_trials(1)
    var representative_image = await TQ.IB.get_by_name(TQ.sampleq.filename[0])
    ENV.ImageWidthPixels = representative_image.width
    ENV.ImageHeightPixels = representative_image.height

    FLAGS.need2loadImages = 0;
} 

// define image display grid
ENV.FixationRadius=(ENV.ImageWidthPixels/2)*TASK.FixationScale*ENV.CanvasRatio
funcreturn = defineImageGrid(TASK.NGridPoints, ENV.ImageWidthPixels, ENV.ImageHeightPixels, TASK.GridScale);
xcanvascenter = funcreturn[0]
ycanvascenter = funcreturn[1]
ENV.XGridCenter = funcreturn[2]
ENV.YGridCenter = funcreturn[3]

// pre-render images. 
renderReward(CANVAS.obj.reward);
renderPunish(CANVAS.obj.punish);
renderBlank(CANVAS.obj.blank);

//============ SELECT SAMPLE & TEST IMAGES ============//
// Draw one (1) sample image from samplebag
[CURRTRIAL.sampleimage, CURRTRIAL.sampleindex, CURRTRIAL.testimages, CURRTRIAL.testindices, CURRTRIAL.correctitem] = await TQ.get_next_trial();


//============ AWAIT BUFFER CANVASES WITH SAMPLE & TEST IMAGES ============//
await bufferTrialImages(CURRTRIAL.sampleimage, TASK.SampleGridIndex, CURRTRIAL.testimages, TASK.TestGridIndex, CURRTRIAL.correctitem);

//============ FIXATION SCREEN ============//
FLAGS.waitingforTouches = TASK.NFixations

CURRTRIAL.allfixationxyt = []
while (FLAGS.waitingforTouches > 0){

    CURRTRIAL.fixationgridindex = TASK.StaticFixationGridIndex;

    // Render fixation screen 
    if (TASK.FixationUsesSample == 1){
        renderFixationUsingImage(CURRTRIAL.sampleimage, CURRTRIAL.fixationgridindex, TASK.SampleScale, CANVAS.obj.touchfix)
    }
    else if(TASK.FixationUsesSample != 1){
        var color = "white" // todo move into task    
        renderFixationUsingDot(color, CURRTRIAL.fixationgridindex, ENV.FixationRadius, CANVAS.obj.touchfix);
    }
    
    // Start timer for this fixation render trial. 
    CURRTRIAL.starttime=Math.round(performance.now());
    frame.shown=[];
    for (var q in CANVAS.sequencepre){
        frame.shown[q]=0
    }; 
    frame.current=0;

    //========= AWAIT SHOW FIXATION =========//
    await displayTrial(CANVAS.sequencepre,CANVAS.tsequencepre);
    SP.audiocontext.suspend()

    //========= AWAIT HOLD FIXATION TOUCH =========//
    var touchhold_return = await touchhold_promise(TASK.FixationDuration,boundingBoxesFixation,FLAGS.punishOutsideTouch)
    CURRTRIAL.fixationtouchevent = touchhold_return.type
    CURRTRIAL.fixationxyt = [touchhold_return.cxyt[1], touchhold_return.cxyt[2], touchhold_return.cxyt[3]]
    CURRTRIAL.allfixationxyt[TASK.NFixations - FLAGS.waitingforTouches - 1] = CURRTRIAL.fixationxyt
    if (CURRTRIAL.fixationtouchevent == "touchheld"){
        CURRTRIAL.response = CURRTRIAL.correctitem
    } //touched fixation

    //========= AWAIT CLEAR FIXATION =========//
    for (var q in CANVAS.sequenceblank){frame.shown[q]=0}
    frame.current=0;
    if (FLAGS.waitingforTouches > 0){
        await displayTrial(CANVAS.sequenceblank,CANVAS.tsequenceblank);
    } //blank out screen
} 

//============== AWAIT SHOW SAMPLE THEN TEST ==============//
if (TASK.RewardStage === 1){
    frame.shown=[]
    for (var q in CANVAS.sequence){
        frame.shown[q]=0
    } 
    
    frame.current=0
    
    CURRTRIAL.tsequenceactual = await displayTrial(CANVAS.sequence,CANVAS.tsequence);
    CURRTRIAL.tsequencedesired = CANVAS.tsequence
    SP.audiocontext.suspend()

    //========= AWAIT TOUCH RESPONSE =========//
    FLAGS.waitingforTouches = 1    
    FLAGS.punishOutsideTouch = 0            
    
    var p1 = touchhold_promise(0,boundingBoxesChoice,FLAGS.punishOutsideTouch)
    var p2 = choiceTimeOut(TASK.ChoiceTimeOut)

    var race_return = await Promise.race([p1,p2])
    CURRTRIAL.responsetouchevent = race_return.type
    CURRTRIAL.response = race_return.cxyt[0]
    CURRTRIAL.responsexyt = [race_return.cxyt[1], race_return.cxyt[2], race_return.cxyt[3]]
} 

if (CURRTRIAL.response == CURRTRIAL.correctitem){ 
    CURRTRIAL.correct = 1; 
}
else { 
    CURRTRIAL.correct=0; 
}


//============ DETERMINE NUMBER OF REWARDS ============//
if (CURRTRIAL.correct == 1){
    CURRTRIAL.nreward = 1 
}
else if (CURRTRIAL.correct == 0){
    CURRTRIAL.nreward = 0;
} 

ENV.RewardDuration = setReward();

//============ DELIVER REWARD/PUNISH ============//
// REWARD
if (CURRTRIAL.correct == 1){
    CANVAS.sequencepost[1]="reward";
    CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+ENV.RewardDuration*1000;

    for (var q = 0; q <= CURRTRIAL.nreward-1; q++){
        frame.shown=[];
        for (var q2 in CANVAS.sequencepost){frame.shown[q2]=0}; frame.current=0;

        SP.playSound(2);
        var p1 = displayTrial(CANVAS.sequencepost,CANVAS.tsequencepost)
        if (ble.connected == false){
            await Promise.all([p1])
        }
        else if (ble.connected == true){
            var p2 = writepumpdurationtoBLE(Math.round(ENV.RewardDuration*1000))
            await Promise.all([p1, p2])
        }
    } 
}

//PUNISH
else if (CURRTRIAL.correct == 0) {
    CANVAS.sequencepost[1] = "punish";
    CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+TASK.PunishTimeOut;
    frame.shown=[];
    for (var q in CANVAS.sequencepost){frame.shown[q]=0}; frame.current=0;

    var p1 = displayTrial(CANVAS.sequencepost,CANVAS.tsequencepost);
    var num_trials_to_buffer_in_punishperiod = 20
    var p2 = TQ.generate_trials(num_trials_to_buffer_in_punishperiod)
    SP.playSound(3);
    await Promise.all([p1,p2])
}

//================= Record results of trial =================//
TRIAL.StartTime[CURRTRIAL.num] = CURRTRIAL.starttime
TRIAL.FixationGridIndex[CURRTRIAL.num] = CURRTRIAL.fixationgridindex
TRIAL.FixationXYT[CURRTRIAL.num] = CURRTRIAL.fixationxyt
TRIAL.AllFixationXYT[CURRTRIAL.num] = CURRTRIAL.allfixationxyt  
TRIAL.Sample[CURRTRIAL.num] = CURRTRIAL.sampleindex 
TRIAL.Test[CURRTRIAL.num] = CURRTRIAL.testindices 
TRIAL.ResponseXYT[CURRTRIAL.num] = CURRTRIAL.responsexyt
TRIAL.Response[CURRTRIAL.num] = CURRTRIAL.response
TRIAL.FixationTouchEvent[CURRTRIAL.num] = CURRTRIAL.fixationtouchevent
TRIAL.ResponseTouchEvent[CURRTRIAL.num] = CURRTRIAL.responsetouchevent
TRIAL.CorrectItem[CURRTRIAL.num] = CURRTRIAL.correctitem
TRIAL.NReward[CURRTRIAL.num] = CURRTRIAL.nreward
TRIAL.AutomatorStage[CURRTRIAL.num] = TASK.CurrentAutomatorStage; 
TRIAL.TSequenceDesired[CURRTRIAL.num] = CURRTRIAL.tsequencedesired
TRIAL.TSequenceActual[CURRTRIAL.num] = CURRTRIAL.tsequenceactual
TRIAL.TrialNumber[CURRTRIAL.num] = CURRTRIAL.num

var current_stage = stageHash(TASK); 
AM.trialhistory.trainingstage.push(current_stage);
AM.trialhistory.starttime.push(CURRTRIAL.starttime)
AM.trialhistory.response.push(CURRTRIAL.response)
AM.trialhistory.correct.push(CURRTRIAL.correct)

CURRTRIAL.num++


// Asynchronous save at most every T seconds

var _ms_since_last_trial_data_save = performance.now() - last_trial_data_save
var _ms_since_last_touch_data_save = performance.now() - last_touch_save
if ( _ms_since_last_trial_data_save > TRIALDATA_SAVE_TIMEOUT_PERIOD){ 
    console.log(_ms_since_last_trial_data_save/1000+'s since last trial data save. At trial'+ CURRTRIAL.num+'. automator stage:'+TASK.CurrentAutomatorStage)
    DW.saveTrialDatatoDropbox(TASK, ENV, CANVAS, TRIAL, FLAGS.debug_mode)
    last_trial_data_save = performance.now()
}

if (TOUCHSTRING.length > TOUCHSTRING_MAX_CACHE_SIZE || _ms_since_last_touch_data_save > TOUCHSTRING_SAVE_TIMEOUT_PERIOD){
    console.log(_ms_since_last_touch_data_save/1000 +'s since last TOUCHSTRING save. '+TOUCHSTRING.length+' length TOUCHSTRING save requested.')
    DW.saveTouchestoDropbox(FLAGS.debug_mode)
    last_touch_save = performance.now()
}

if (FLAGS.need2saveParameters == 1){
    FLAGS.need2saveParameters = DW.saveParameterstoDropbox(); // Save parameters asynchronously
}

FLAGS.need2loadParameters = DW.checkParameterFileStatus()

updateHeadsUpDisplay();
}