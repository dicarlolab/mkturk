//============= AWAIT LOAD PARAMS =============//

async function run_MouseOver_TutorialTrial(tutorial_image, tutoral_gridindex){

    // todo: make into object so we can create a 'tutorial' state machine for previewing HITs

    // Global references: 
    // TRIAL_NUMBER_FROM_SESSION_START
    // TS 
    // CANVAS
    // SD 
    // FixationRewardMap
    // ChoiceRewardMap
    // R
    // EVENT_TIMESTAMPS
    // TRIAL_BEHAVIOR
    // DWr
    // TERMINAL_STATE

    writeToTrialCounterDisplay("Running tutorial")

    _TRIAL = await TS.get_trial()
    console.log(_TRIAL)


    SD.renderReward(CANVAS.obj.reward);
    SD.renderPunish(CANVAS.obj.punish);
    SD.renderBlank(CANVAS.obj.blank);


    //============ AWAIT BUFFER CANVASES WITH SAMPLE & TEST IMAGES ============//
    boundingBoxFixation = await SD.bufferFixationScreenUsingImage(tutorial_image, Math.min(Math.random()*DEVICE.XGridCenter.length))

    //============ FIXATION SCREEN ============//
    FixationRewardMap.create_reward_map_with_bounding_boxes(boundingBoxFixation, [1])

    var fixation_onset_timestamps = await SD.displayScreenSequence(CANVAS.sequencepre,CANVAS.tsequencepre);


    wdm('Awaiting fixation...')


    console.log('Awaiting fixation...')
    var fixation_outcome = await FixationRewardMap.Promise_wait_until_active_response_then_return_reinforcement()
    console.log('Fixation reached')
    var correct = fixation_outcome['reinforcement']

    //============ DETERMINE NUMBER OF REWARDS ============//
    if (correct == 1){
        nreward = 1 
    }
    else if (correct == 0){
        nreward = 0;
    } 

    reinforcement_onset = performance.now()
    await R.deliver_reinforcement(nreward)
    reinforcement_end = performance.now()


}
