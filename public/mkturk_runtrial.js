async function runtrial(){


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

}