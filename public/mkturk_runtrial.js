async function runtrial(){
// (Current) Basic assumptions of what a TRIAL constitutes:
// Fixation screen 
// Stimulus period (which can be multiple screens, etc.)
// Choice period


writeToTrialCounterDisplay(TRIAL_NUMBER_FROM_SESSION_START)


var TRIAL = await TS.get_trial()

// Unpack TRIAL 
var image_sequence = TRIAL['image_sequence']
var grid_placement_sequence = TRIAL['grid_placement_sequence']
var frame_durations = TRIAL['frame_durations']
var timeout_msec = TRIAL['timeout_msec']
var choice_regions_reward_amounts = TRIAL['choice_regions_rewardAmounts']
var choice_regions_gridIndices = TRIAL['choice_regions_gridIndices']

// Prebuffer 
var sequence_id = 'stimulus_sequence'
await SD.bufferSequenceFrames(sequence_id, image_sequence, grid_placement_sequence, frame_durations)

// Blank out screen
await SD.displayBlank()

// Show fixation dot 
var funcreturn = await SD.displayFixation(5)
var boundingBoxFixation = funcreturn[0]
var fixation_timestamps = funcreturn[1]

// Wait for fixation response
RewardMap.create_reward_map_with_bounding_boxes(boundingBoxFixation, 'none')
var fixation_outcome = await RewardMap.Promise_wait_until_active_response_then_return_reinforcement()

// Show stimulus 
await SD.displaySequence(sequence_id)

// Construct choice

RewardMap.create_reward_map_with_grid_indices(choice_regions_gridIndices, choice_regions_reward_amounts)

// Wait for choice response, with optional timeout
if(timeout_msec > 0){
    var choice_promise = Promise.race([
                        RewardMap.Promise_wait_until_active_response_then_return_reinforcement(), 
                        choiceTimeOut(timeout_msec)]) 
}
else{
    var choice_promise = RewardMap.Promise_wait_until_active_response_then_return_reinforcement()
}

choice_outcome = await choice_promise
nreward = choice_outcome['reinforcement']

// Deliver reinforcement
var reinforcement_start = performance.now()
await R.deliver_reinforcement(nreward)
var reinforcement_end = performance.now()

// Update taskstreamer with results of this trial 
var current_trial_outcome = {}
TS.update_state(current_trial_outcome)

// Package data and writeout (e.g. live, to dropbox)
dataobj = TS.package_behavioral_data() // However you'd like, specific to your TaskStreamer
DWr.writeout(dataobj)


TRIAL_NUMBER_FROM_SESSION_START++

return 

}