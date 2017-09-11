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

    writeToTrialCounterDisplay("")

    SD.renderReward(CANVAS.obj.reward);
    SD.renderPunish(CANVAS.obj.punish);
    SD.renderBlank(CANVAS.obj.blank);

    boundingBoxFixation = await SD.bufferFixationScreenUsingDot(5)
    FixationRewardMap.create_reward_map_with_bounding_boxes(boundingBoxFixation, [0])
    await SD.displayScreenSequence(CANVAS.sequencepre,CANVAS.tsequencepre);
    var fixation_outcome = await FixationRewardMap.Promise_wait_until_active_response_then_return_reinforcement()

    //============ AWAIT BUFFER CANVASES WITH SAMPLE & TEST IMAGES ============//
    boundingBoxFixation = await SD.bufferFixationScreenUsingImage(tutorial_image, tutoral_gridindex)


    // Make smaller
    var original_x_width = boundingBoxFixation[0].x[1] - boundingBoxFixation[0].x[0]
    var original_y_width = boundingBoxFixation[0].y[1] - boundingBoxFixation[0].y[0]

    boundingBoxFixation[0].x[0] += original_x_width * 0.3
    boundingBoxFixation[0].x[1] -= original_x_width * 0.3
    boundingBoxFixation[0].y[0] += original_y_width * 0.3
    boundingBoxFixation[0].y[1] -= original_y_width * 0.3
    //============ Mouse over SCREEN ============//
    FixationRewardMap.create_reward_map_with_bounding_boxes(boundingBoxFixation, [1])

    var fixation_onset_timestamps = await SD.displayScreenSequence(CANVAS.sequencepre,CANVAS.tsequencepre);


    wdm('Awaiting fixation...')


    console.log('Awaiting fixation...')
    var fixation_outcome = await FixationRewardMap.Promise_wait_until_active_response_then_return_reinforcement()
    console.log('Fixation reached')
    var correct = fixation_outcome['reinforcement']
    correct = correct || 1


    //============ DETERMINE NUMBER OF REWARDS ============//
    if (correct == 1){
        nreward = 1 
    }
    else if (correct == 0){
        nreward = 0;
    } 

    await R.deliver_reinforcement(nreward)



}
