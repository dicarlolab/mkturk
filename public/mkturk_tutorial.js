//============= AWAIT LOAD PARAMS =============//

async function showMechanicalTurkInstructions(){
    //todo: allow arbitrary strings as input 

    var screen1_instructions = "<ul>"
    screen1_instructions +=  "<li><p>Thank you for accepting this HIT! You are contributing to ongoing research at at M.I.T.</p>"
    screen1_instructions += "<li><p>You will look at rapidly flashed images and be required to move your mouse.</p>"
    screen1_instructions += "<li><p>Based on the movement of your mouse cursor, you will sometimes hear a bell and see a green flash. This means you have received a small CASH BONUS."
    screen1_instructions += "<li><p>This takes around 10 minutes. The top right button will turn GREEN when are allowed to submit your work. Press it to submit the HIT.</p>"
    screen1_instructions += "<li><p>For additional reward, you can continue working after the button turns green.</p>"
    screen1_instructions += "<li><p> Please make sure your SOUND IS ON."
    screen1_instructions += "<li>If you cannot meet these requirements for any reason, or if doing so could cause discomfort or injury, do not accept this HIT."
    screen1_instructions += "</ul>"
    console.log("document.getElementById()", document.getElementById("InstructionSplashText"))
    document.getElementById("InstructionSplashText").innerHTML = screen1_instructions
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

    writeToTrialCounterDisplay("Tutorial")

    SD.renderReward(CANVAS.obj.reward);
    SD.renderPunish(CANVAS.obj.punish);
    SD.renderBlank(CANVAS.obj.blank);

    boundingBoxFixation = await SD.bufferFixationScreenUsingDot(5)
    FixationRewardMap.create_reward_map_with_bounding_boxes(boundingBoxFixation, [0])
    await SD.displayScreenSequence(CANVAS.sequencepre,CANVAS.tsequencepre);
    var fixation_outcome = await FixationRewardMap.Promise_wait_until_active_response_then_return_reinforcement()

    //============ AWAIT BUFFER CANVASES WITH SAMPLE & TEST IMAGES ============//
    boundingBoxFixation = await SD.bufferFixationScreenUsingImage(tutorial_image, tutoral_gridindex)

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
