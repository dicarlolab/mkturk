//============= AWAIT LOAD PARAMS =============//



async function run_MouseOver_TutorialTrial(tutorial_image){

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

    var funcreturn = await SD.displayFixation(5)
    boundingBoxesFixation = funcreturn[0]
    
    RewardMap.create_reward_map_with_bounding_boxes(boundingBoxesFixation, 1)
    var fixation_outcome = await RewardMap.Promise_wait_until_active_response_then_return_reinforcement()

    var dwidth = PLAYSPACE._gridwidth*0.7
    var dheight = PLAYSPACE._gridheight*0.7
    var dx = PLAYSPACE._gridwidth/2+(PLAYSPACE.width-PLAYSPACE._gridwidth) * Math.random() // [0, playspace width - one imagewidth]
    var dy = PLAYSPACE._gridheight/2+(PLAYSPACE.height - 2*PLAYSPACE._gridheight) * Math.random() // avoid overlapping with fixation dot

    var boundingBoxMouseOver = await SD.bufferCanvasWithImage(tutorial_image, SD.canvas_fixation, dx, dy, dwidth, dheight)
    // Make smaller
    var original_x_width = boundingBoxMouseOver[0].x[1] - boundingBoxMouseOver[0].x[0]
    var original_y_width = boundingBoxMouseOver[0].y[1] - boundingBoxMouseOver[0].y[0]

    boundingBoxMouseOver[0].x[0] += original_x_width * 0.2
    boundingBoxMouseOver[0].x[1] -= original_x_width * 0.2
    boundingBoxMouseOver[0].y[0] += original_y_width * 0.2
    boundingBoxMouseOver[0].y[1] -= original_y_width * 0.2
    //============ Mouse over SCREEN ============//
    RewardMap.create_reward_map_with_bounding_boxes(boundingBoxMouseOver, 1)
    var fixation_onset_timestamps = await SD.displayScreenSequence(SD.canvas_fixation,0);

    wdm('Awaiting fixation...')


    console.log('Awaiting fixation...')
    var fixation_outcome = await RewardMap.Promise_wait_until_active_response_then_return_reinforcement()
    await SD.displayScreenSequence(SD.canvas_blank,0);

    await R.deliver_reinforcement(1)



}
