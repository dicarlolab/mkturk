//============= AWAIT LOAD PARAMS =============//

async function showMechanicalTurkInstructions(){
    //todo: allow arbitrary strings as input 

    var screen1_instructions = "<ul>"
    screen1_instructions +=  "<li>Thank you for your interest and contributing to research at at M.I.T.!"
    screen1_instructions += "<li>You will look at rapidly flashed images and be required to have a working mouse, touchscreen, or touchpad."
    screen1_instructions += '<li>You will sometimes <text style="font-weight:bold">hear a bell</text> and see a <text style="font-weight:bold; color:green">green flash</text>. This means you earned a small CASH BONUS.'
    screen1_instructions += '<li>The HIT takes around 10 minutes. When the top right button turns  <text style="font-weight:bold; color:green">GREEN</text> you can press it to submit the HIT.'
    screen1_instructions += "<li>For additional reward, you can continue working after the button turns green."
    screen1_instructions += "<li>If you cannot meet these requirements or if doing so could cause discomfort or injury, do not accept this HIT. You will not be penalized in any way."
    screen1_instructions += "</ul>"
    console.log("document.getElementById()", document.getElementById("InstructionSplashText"))
    document.getElementById("InstructionSplashText").innerHTML = screen1_instructions

    var screen2_instructions = "Select which device you will be using to move your cursor."

    var screen3_instructions = 'Adjust your volume until you can hear the <text style="font-weight:bold">bell</text> after pressing this button:'
    
    
    return new Promise(function(resolve, reject){
        FLAGS.clicked_close_instructions = resolve
    })
}

async function showDeviceSelectionDialogue_and_getUserSelection(){
    // Turn on dialogue
    FLAGS.clicked_device_selection = false
    FLAGS._MechanicalTurk_DeviceSelected = 'not_selected'
    document.getElementById("MechanicalTurkCursorDeviceSelectionScreen").style.visibility = 'visible'
    return new Promise(function(resolve, reject){
        FLAGS.clicked_device_selection = resolve
    })


}

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
