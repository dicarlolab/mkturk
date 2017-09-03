// Setup 


// Run state machine 
var reached_session_terminal_state = false

var episode_number = 0

while(reached_session_terminal_state == false){
    
    // Run episode 
    episode_state_machine = TaskStreamer.get_episode(episode_number)
    var reached_episode_terminal_state = false
    var state_number = 0
    while(reached_episode_terminal_state == false){
        screen_constructor_params, action_reward_map = episode_state_machine.get_next_state(state_number)
        episode_outcome, state_number, reached_episode_terminal_state = await deliverScreen(screen_constructor_params, action_reward_map)
    }  

    TaskStreamer.set_next_episode(episode_outcome)
    DiskWriter.write_episode_outcome(episode_outcome)
    reached_session_terminal_state = check_terminal_state(episode_outcome)
}

// Conclude session
DiskWriter.conclude_experiment()

function check_terminal_state(){
    return true
}

function deliverScreen(screen_constructor, action_reward_map){
    // device specific
    // for now, can rely on assumptions about grid indexes, number of screens, etc., kinds of screens (stimulus vs choice)
    // to enable heuristics for timing
}

class DiskWriter{

    constructor(DiskWriter_constructor_params){ // live? where to write to?

    }

    write_episode_outcome(episode_outcome){
        // Write to disk
    }

}