//============= AWAIT LOAD PARAMS =============//
async function runtrial(){
// Slavish function that does the dirty work of displaying, getting user inputs, and delivering reinforcemnet 

writeToTrialCounterDisplay(TRIAL_NUMBER_FROM_SESSION_START)
_TRIAL = await TS.get_trial()

// Check if parameters need to be reloaded (e.g. because they changed on disk or because of the automator)

// Render various screens 
renderReward(CANVAS.obj.reward);
renderPunish(CANVAS.obj.punish);
renderBlank(CANVAS.obj.blank);

//============ SELECT SAMPLE & TEST IMAGES ============//
var sample_image = _TRIAL['sample_image']
var samplebag_index = _TRIAL['samplebag_index']
var sample_grid_index_placement = _TRIAL['sample_grid_index_placement']
var test_images = _TRIAL['test_images']
var testbag_indices = _TRIAL['testbag_indices']
var test_correct_grid_index = _TRIAL['test_correct_grid_index']
var test_grid_index_placements = _TRIAL['test_grid_index_placements']
var choice_reward_amounts = _TRIAL['choice_reward_amounts']


//============ AWAIT BUFFER CANVASES WITH SAMPLE & TEST IMAGES ============//
boundingBoxesFixation = await bufferFixationScreenUsingDot("white", TS.EXPERIMENT[TS.state.current_stage_index]['StaticFixationGridIndex'], FixationRadius);
boundingBoxesSample = await bufferStimulusScreen(sample_image, sample_grid_index_placement)
boundingBoxesChoice = await bufferChoiceScreen(test_images, test_grid_index_placements)

//============ FIXATION SCREEN ============//

FixationRewardMap.create_reward_map_with_bounding_boxes(boundingBoxesFixation, [0])
ChoiceRewardMap.create_reward_map_with_bounding_boxes(boundingBoxesChoice, choice_reward_amounts)

var fixation_onset_timestamps = await displayScreenSequence(CANVAS.sequencepre,CANVAS.tsequencepre);


if(FLAGS.debug_mode == 1){
    wdm('Awaiting fixation...')
}

console.log('Awaiting fixation...')
var fixation_outcome = await FixationRewardMap.Promise_wait_until_active_response_then_return_juice()
console.log('Fixation reached')



//============== SHOW SAMPLE THEN TEST ==============//

if(FLAGS.debug_mode == 1){
    wdm('Awaiting choice...')
}

var stimulus_timestamps = await displayScreenSequence(CANVAS.sequence,CANVAS.tsequence);

var outcome_from_touch_response_promise = ChoiceRewardMap.Promise_wait_until_active_response_then_return_juice()
var timeout_promise = choiceTimeOut(TS.EXPERIMENT[TS.state.current_stage_index]['ChoiceTimeOut'])
var choice_outcome = await Promise.race([outcome_from_touch_response_promise, timeout_promise])


//========= AWAIT TOUCH RESPONSE =========//
var correct = choice_outcome['juice']
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
    CANVAS.tsequencepost[2] = CANVAS.tsequencepost[1]+TS.EXPERIMENT[TS.state.current_stage_index]['PunishTimeOut'];
    SP.playSound(3);
    var p1 = await displayScreenSequence(CANVAS.sequencepost,CANVAS.tsequencepost);
}
reinforcement_end = performance.now()


//================= Record results of trial =================//
EVENT_TIMESTAMPS.fixation_onset.push(fixation_onset_timestamps[0])
EVENT_TIMESTAMPS.fixation_touch.push(fixation_outcome['timestamp'])

EVENT_TIMESTAMPS.blank_onset.push(stimulus_timestamps[0])
EVENT_TIMESTAMPS.stimulus_onset.push(stimulus_timestamps[1])

if (TS.EXPERIMENT[TS.state.current_stage_index]['t_sampleOFF'] > 0) {
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


var current_trial_outcome = {}
current_trial_outcome['FixationXYT'] = [fixation_outcome['x'], fixation_outcome['y'], fixation_outcome['timestamp']]
current_trial_outcome['ChoiceXYT'] = [choice_outcome['x'], choice_outcome['y'], choice_outcome['timestamp']]
current_trial_outcome['StartTime'] = Math.round(fixation_outcome['timestamp'])
current_trial_outcome['FixationGridIndex'] = TS.EXPERIMENT[TS.state.current_stage_index]['StaticFixationGridIndex']
current_trial_outcome['SampleBagIndex'] = samplebag_index
current_trial_outcome['TestBagIndices'] = testbag_indices
current_trial_outcome['Response'] = chosen_grid_index
current_trial_outcome['CorrectItem'] = test_correct_grid_index
current_trial_outcome['Juice'] = choice_outcome['juice']
current_trial_outcome['NReward'] = nreward
current_trial_outcome['CurrentStageIndex'] = TS.state.current_stage_index
current_trial_outcome['trial_num_Session'] = TRIAL_NUMBER_FROM_SESSION_START
//current_trial_outcome['trial_num_TaskStream'] = TRIAL_NUMBER_FROM_TASKSTREAM_START
current_trial_outcome['reward_duration'] = Math.round(1000*RewardDuration)/1000
current_trial_outcome['TASK_ARCHIVE_counter'] = TASK_ARCHIVE_COUNTER
current_trial_outcome['BoundingBoxFixationImage'] = boundingBoxesFixation[0]
current_trial_outcome['BoundingBoxSampleImage'] = boundingBoxesSample[0]
current_trial_outcome['BoundingBoxesChoiceImages'] = boundingBoxesChoice
current_trial_outcome['Return'] = choice_outcome['juice']

for (var _property in current_trial_outcome){
    if(current_trial_outcome.hasOwnProperty(_property)){
        TRIAL_BEHAVIOR[_property].push(current_trial_outcome[_property])
    }
}

// TRIAL_BEHAVIOR.FixationXYT.push([fixation_outcome['x'], fixation_outcome['y'], fixation_outcome['timestamp']])
// TRIAL_BEHAVIOR.ChoiceXYT.push([choice_outcome['x'], choice_outcome['y'], choice_outcome['timestamp']])
// TRIAL_BEHAVIOR.StartTime.push(Math.round(fixation_outcome['timestamp']))
// TRIAL_BEHAVIOR.FixationGridIndex.push(TASK.StaticFixationGridIndex)
// TRIAL_BEHAVIOR.SampleBagIndex.push(samplebag_index)
// TRIAL_BEHAVIOR.TestBagIndices.push(testbag_indices)
// TRIAL_BEHAVIOR.Response.push(chosen_grid_index)
// TRIAL_BEHAVIOR.CorrectItem.push(test_correct_grid_index)
// TRIAL_BEHAVIOR.Juice.push(choice_outcome['juice'])
// TRIAL_BEHAVIOR.NReward.push(nreward)
// TRIAL_BEHAVIOR.AutomatorStage.push(TASK.CurrentAutomatorStage)
// TRIAL_BEHAVIOR.trial_num_Session.push(TRIAL_NUMBER_FROM_SESSION_START)
// TRIAL_BEHAVIOR.trial_num_TaskStream.push(TRIAL_NUMBER_FROM_TASKSTREAM_START)
// TRIAL_BEHAVIOR.reward_duration.push(Math.round(1000*RewardDuration)/1000)
// TRIAL_BEHAVIOR.TASK_ARCHIVE_counter.push(TASK_ARCHIVE_COUNTER)
// TRIAL_BEHAVIOR.BoundingBoxFixationImage.push(boundingBoxesFixation[0])
// TRIAL_BEHAVIOR.BoundingBoxSampleImage.push(boundingBoxesSample[0])
// TRIAL_BEHAVIOR.BoundingBoxesChoiceImages.push(boundingBoxesChoice)


TS.update_state(current_trial_outcome)

TRIAL_NUMBER_FROM_SESSION_START++
//TRIAL_NUMBER_FROM_TASKSTREAM_START++

// Asynchronous save at most every T seconds
var _ms_since_last_trial_data_save = performance.now() - last_trial_data_save
var _ms_since_last_touch_data_save = performance.now() - last_touch_save
var _ms_since_last_paramfile_check = performance.now() - last_paramfile_check 

if ( _ms_since_last_trial_data_save > TRIALDATA_SAVE_TIMEOUT_PERIOD){ 
    console.log(_ms_since_last_trial_data_save/1000+'s since last trial data save. At trial'+ 
        TRIAL_NUMBER_FROM_SESSION_START +'. Epoch stage:'+TS.state.current_stage_index)
    DWr.saveTrialData(FLAGS.debug_mode)
    last_trial_data_save = performance.now()
}

if (_ms_since_last_touch_data_save > TOUCHSTRING_SAVE_TIMEOUT_PERIOD){
    console.log(_ms_since_last_touch_data_save/1000 +'s since last TOUCHSTRING save. '+TOUCHSTRING.length+' length TOUCHSTRING save requested.')
    DWr.saveTouches(FLAGS.debug_mode)
    last_touch_save = performance.now()
}

}