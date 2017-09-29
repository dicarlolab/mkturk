async function runtrial(){
// (Current) Basic assumptions of what a TRIAL constitutes:
// Fixation screen 
// Stimulus period (which can be multiple screens, etc.)
// Choice period


writeToTrialCounterDisplay(TRIAL_NUMBER_FROM_SESSION_START)


var TRIAL = await TS.get_trial()

var image_sequence = TRIAL['image_sequence']
var grid_placement_sequence = TRIAL['grid_placement_sequence']
var frame_durations = TRIAL['frame_durations']
var timeout_msec = TRIAL['timeout_msec']
var choice_regions_reward_amounts = TRIAL['choice_rewards']
var choice_regions_gridIndices = TRIAL['choice_grid_indices']
var choice_area_scale_factor = TRIAL['choice_area_scale_factor']

// Prebuffer 
var sequence_id = 'stimulus_sequence'
await SD.bufferSequenceFrames(sequence_id, image_sequence, grid_placement_sequence, frame_durations)

// BLANK SCREEN
await SD.displayBlank()

// FIXATION SCREEN
var fixation_grid_index = 5 // todo: pull from params  
var funcreturn = await SD.displayFixation(fixation_grid_index)
var boundingBoxFixation = funcreturn[0]
var fixation_timestamps = funcreturn[1]

// Wait for fixation response
var fixationBoundingBox = RewardMap.create_reward_map_with_bounding_boxes(boundingBoxFixation, 'none')
var fixation_outcome = await RewardMap.Promise_wait_until_active_response_then_return_reinforcement()

// STIMULUS_SCREEN
var frame_timestamps = await SD.displaySequence(sequence_id)


// Wait for choice response, with optional timeout
// todo: chaining markov reward maps for multi-response tasks (v3); chain stimulus / reward map periods (but why call it a trial?)
var choiceBoundingBox = RewardMap.create_reward_map_with_grid_indices(choice_regions_gridIndices, choice_regions_reward_amounts, choice_area_scale_factor)
if(timeout_msec > 0){
    var choice_promise = Promise.race([
                        RewardMap.Promise_wait_until_active_response_then_return_reinforcement(), 
                        timeOut(timeout_msec)]) 
}
else{
    var choice_promise = RewardMap.Promise_wait_until_active_response_then_return_reinforcement()
}

choice_outcome = await choice_promise
nreward = choice_outcome['reinforcement']
var chosen_grid_index = choice_regions_gridIndices[choice_outcome['region_index']]

// Deliver reinforcement
var reinforcement_start = performance.now()
await R.deliver_reinforcement(nreward)
var reinforcement_end = performance.now()

// Update taskstreamer with results of this trial 
var current_trial_outcome = {}
current_trial_outcome['frame_timestamps'] = frame_timestamps

current_trial_outcome['timestamp_fixation_onset'] = fixation_timestamps[0]
current_trial_outcome['timestamp_FixationAcquired'] = fixation_outcome['timestamp']
current_trial_outcome['timestamp_reinforcement_on'] = reinforcement_start
current_trial_outcome['timestamp_reinforcement_off'] = reinforcement_end
current_trial_outcome['timestamp_Choice'] = choice_outcome['timestamp']

current_trial_outcome['FixationX'] = fixation_outcome['x']
current_trial_outcome['FixationY'] = fixation_outcome['y']
current_trial_outcome['FixationGridIndex'] = fixation_grid_index
current_trial_outcome['ChoiceX'] = choice_outcome['x']// todo: multiple response screens
current_trial_outcome['ChoiceY'] = choice_outcome['y']
current_trial_outcome['Response_GridIndex'] = chosen_grid_index
current_trial_outcome['fixation_boundingBoxes'] = fixationBoundingBox
current_trial_outcome['choice_boundingBoxes'] = choiceBoundingBox

current_trial_outcome['Return'] = nreward
current_trial_outcome['TRIAL'] = TRIAL

TS.update_state(current_trial_outcome)

// Package data and writeout (e.g. live, to dropbox)
dataobj = TS.package_behavioral_data() // However you'd like, specific to your TaskStreamer
DWr.writeout(dataobj)

TRIAL_NUMBER_FROM_SESSION_START++

return 

}