# Writing your own task 

The user needs to supply instances of the following classes to mkturk.html. In creating their own instances, they are defining the the task that will be run. 


## TaskStreamer
```javascript
class TaskStreamerTemplate{
    constructor(){

    }

    transition_from_debug_to_science_mode(){

    }
    update_state(trial_outcome){
        // Available information:
        trial_outcome['frame_timestamps']
        trial_outcome['timestamp_fixation_onset']
        trial_outcome['timestamp_reinforcement_on']
        trial_outcome['timestamp_reinforcement_off']
        trial_outcome['FixationX']
        trial_outcome['FixationY']
        trial_outcome['FixationT']
        trial_outcome['ChoiceX']
        trial_outcome['ChoiceY']
        trial_outcome['ChoiceT']
        trial_outcome['FixationGridIndex']
        trial_outcome['Response_GridIndex']
        trial_outcome['Return']
    }

    get_trial(){   
        // Required to be returned:
        var TRIAL = {}
        TRIAL['image_sequence']
        TRIAL['grid_placement_sequence']
        TRIAL['frame_durations']
        TRIAL['timeout_msec']
        TRIAL['choice_rewards']
        TRIAL['choice_grid_indices']

        return TRIAL

    }
    package_behavior_data(){
        var dataobj 

        dataobj['DEVICE'] = DEVICE
        dataobj['PLAYSPACE'] = PLAYSPACE
        dataobj['TOUCHSTRING'] = TOUCHSTRING
        dataobj['SUBJECT'] = SUBJECT
        dataobj['SESSION'] = SESSION


        return dataobj
    }

}
```