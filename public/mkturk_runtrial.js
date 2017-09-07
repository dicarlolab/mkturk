//============= AWAIT LOAD PARAMS =============//
async function runtrial(){

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

writeToTrialCounterDisplay(TRIAL_NUMBER_FROM_SESSION_START)


_TRIAL = await TS.get_trial()
console.log(_TRIAL)


SD.renderReward(CANVAS.obj.reward);
SD.renderPunish(CANVAS.obj.punish);
SD.renderBlank(CANVAS.obj.blank);

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
boundingBoxesFixation = await SD.bufferFixationScreenUsingDot(TS.EXPERIMENT[TS.state.current_stage_index]['StaticFixationGridIndex']);
boundingBoxesSample = await SD.bufferStimulusScreen(sample_image, sample_grid_index_placement)
boundingBoxesChoice = await SD.bufferChoiceScreen(test_images, test_grid_index_placements)

//============ FIXATION SCREEN ============//

FixationRewardMap.create_reward_map_with_bounding_boxes(boundingBoxesFixation, [0])
ChoiceRewardMap.create_reward_map_with_bounding_boxes(boundingBoxesChoice, choice_reward_amounts)

var fixation_onset_timestamps = await SD.displayScreenSequence(CANVAS.sequencepre,CANVAS.tsequencepre);


wdm('Awaiting fixation...')


console.log('Awaiting fixation...')
var fixation_outcome = await FixationRewardMap.Promise_wait_until_active_response_then_return_reinforcement()
console.log('Fixation reached')



//============== SHOW SAMPLE THEN TEST ==============//

wdm('Awaiting choice...')


var stimulus_timestamps = await SD.displayScreenSequence(CANVAS.sequence,CANVAS.tsequence);
var outcome_from_touch_response_promise = ChoiceRewardMap.Promise_wait_until_active_response_then_return_reinforcement()
var timeout_promise = choiceTimeOut(TS.EXPERIMENT[TS.state.current_stage_index]['ChoiceTimeOut'])
var choice_outcome = await Promise.race([outcome_from_touch_response_promise, timeout_promise])


//========= AWAIT TOUCH RESPONSE =========//
var correct = choice_outcome['reinforcement']
var chosen_grid_index = test_grid_index_placements[choice_outcome["region_index"]]


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



var current_trial_outcome = {}
current_trial_outcome['FixationX'] = fixation_outcome['x']
current_trial_outcome['FixationY'] = fixation_outcome['y']
current_trial_outcome['FixationT'] = Math.round(fixation_outcome['timestamp']*1000)/1000

current_trial_outcome['ChoiceX'] = choice_outcome['x']
current_trial_outcome['ChoiceY'] = choice_outcome['y']
current_trial_outcome['ChoiceT'] = Math.round(choice_outcome['timestamp']*1000)/1000

current_trial_outcome['StartTime'] = Math.round(fixation_outcome['timestamp']*1000)/1000
current_trial_outcome['FixationGridIndex'] = TS.EXPERIMENT[TS.state.current_stage_index]['StaticFixationGridIndex']
current_trial_outcome['SampleBagIndex'] = samplebag_index
current_trial_outcome['TestBagIndices'] = testbag_indices
current_trial_outcome['Response'] = chosen_grid_index
current_trial_outcome['CorrectItem'] = test_correct_grid_index
current_trial_outcome['CurrentStageIndex'] = TS.state.current_stage_index
current_trial_outcome['trial_num_Stage'] = TS.state.current_stage_trial_number
current_trial_outcome['trial_num_Session'] = TRIAL_NUMBER_FROM_SESSION_START
current_trial_outcome['reward_duration'] = Math.round(1000*RewardDuration)/1000
current_trial_outcome['BoundingBoxFixationImage'] = boundingBoxesFixation[0]
current_trial_outcome['BoundingBoxSampleImage'] = boundingBoxesSample[0]
current_trial_outcome['BoundingBoxesChoiceImages'] = boundingBoxesChoice
current_trial_outcome['Return'] = choice_outcome['reinforcement']

TS.update_state(current_trial_outcome)
TRIAL_NUMBER_FROM_SESSION_START++


//================= Update tracking variables =================//
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

for (var _property in current_trial_outcome){
    if(current_trial_outcome.hasOwnProperty(_property)){
        TRIAL_BEHAVIOR[_property].push(current_trial_outcome[_property])
    }
}


// Writeout (e.g. live to dropbox)
DWr.writeout()

// Check if reached terminal state
//TERMINAL_STATE = false

}