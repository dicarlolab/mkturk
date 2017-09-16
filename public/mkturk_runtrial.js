async function runtrial(){
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



// Prebuffer 
for (var i_epoch = 0; i_epoch < _TRIAL.length; i_epoch++){
    var _msec_on = _TRIAL[i_epoch]['msec_on'] 
    var _images = _TRIAL[i_epoch]['images'] 
    var _grid_placements = _TRIAL[i_epoch]['grid_placements']

    // Buffer canvas
    await SD.bufferEpochFrames(i_epoch, _images, _grid_placements, _msec_on)
}

var display_timestamps = {}
var reinforcement_timestamps = {}

var user_outcomes = {}


// Show fixation dot 

var boundingBoxFixation = await SD.displayFixation(5)
RewardMap.create_reward_map_with_bounding_boxes(boundingBoxFixation, 'none')

console.log('Awaiting fixation...')
var fixation_outcome = await RewardMap.Promise_wait_until_active_response_then_return_reinforcement()
console.log('Hit fixation')

// Screens 
for (var i_epoch = 0; i_epoch < _TRIAL.length; i_epoch++){

    display_timestamps[i_epoch] = await SD.displayEpoch(i_epoch)

    var _reward_amounts = _TRIAL[i_epoch]['reward_amounts']
    var _boundingBoxes = _TRIAL[i_epoch]['boundingBoxes']
    RewardMap.create_reward_map_with_bounding_boxes(_boundingBoxes, _reward_amounts)


    var _msec_timeout = _TRIAL[i_epoch]['msec_timeout']
    if(_msec_timeout > 0){
        var p = Promise.race([
                            RewardMap.Promise_wait_until_active_response_then_return_reinforcement(), 
                            choiceTimeOut(_msec_timeout)]) 
    }
    else{
        var p = RewardMap.Promise_wait_until_active_response_then_return_reinforcement()
    }

    user_outcomes[i_epoch] = await p
    _nreward = user_outcomes[i_epoch]['reinforcement']
    var reinforcement_start = performance.now()
    await R.deliver_reinforcement(_nreward)
    var reinforcement_end = performance.now()

    reinforcement_timestamps[i_epoch] = [reinforcement_start, reinforcement_end]
}

// Record results of trial 
var current_trial_outcome = {}
current_trial_outcome['display_timestamps'] = display_timestamps
current_trial_outcome['user_outcomes'] = user_outcomes
current_trial_outcome['reinforcement_timestamps'] = reinforcement_timestamps

TS.update_state(current_trial_outcome)
dataobj = TS.package_behavioral_data() // However you'd like, specific to your TaskStreamer


// Writeout (e.g. live to dropbox)
DWr.writeout(dataobj)
TRIAL_NUMBER_FROM_SESSION_START++

return 



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
current_trial_outcome['choice_reward_amounts'] = choice_reward_amounts

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


}