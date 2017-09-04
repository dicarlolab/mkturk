// That which delivers TaskStreams

class TaskStream_FinitePrebuilt{
    constructor(SIO){
        this.SIO = SIO
        this.IB = new ImageBuffer(SIO)

    }
    async build(){
        this.sample_image_q = []
        this.samplebag_index_q = []
        this.sample_grid_index_placement_q = []
        this.test_images_q = []
        this.testbag_indices_q = []
        this.test_correct_grid_index_q = []
        this.test_grid_index_placements_q = []
        this.choice_reward_amounts_q = []

        
        this.samplebag_urls = ['https://s3.amazonaws.com/monkeyturk/Resources/ImageBags/A.png', 'https://s3.amazonaws.com/monkeyturk/Resources/ImageBags/B.png']
        this.testbag_urls = ['https://s3.amazonaws.com/monkeyturk/Resources/ImageBags/Atoken.png', 'https://s3.amazonaws.com/monkeyturk/Resources/ImageBags/Btoken.png']
        
        await this.IB.cache_these_images(this.samplebag_urls)
        await this.IB.cache_these_images(this.testbag_urls)

        this.current_trial_number = 0
    }

    get_trial(i){ // called at the beginning of each trial 
        // returns images, reward maps, and other necessary things for runtrial()
        
        i = i || this.current_trial_number
        this.current_trial_number ++ 

        if(i >= this.sample_image_q.length){
            console.log("REACHED END OF QUEUE")
            return 
        }
        var trial = {}
        trial['sample_image'] = this.sample_image_q[i]
        trial['samplebag_index'] = 'samplebag_index_whatever'
        trial['sample_grid_index_placement'] = 4
        trial['test_images'] = this.test_images_q[i]
        trial['testbag_indices'] = ['testbag_index_whatever1', 'testbag_index_whatever2']
        trial['test_correct_grid_index'] = this.test_correct_grid_index_q[i]
        trial['test_grid_index_placements'] = [2, 8]
        var _choice_reward_amounts = []
        for (var j in trial['test_grid_index_placements']){
            if (trial['test_grid_index_placements'][j] == trial['test_correct_grid_index']){
                _choice_reward_amounts.push(1)
            }
            else{
                _choice_reward_amounts.push(0)
            }
        }
        trial['choice_reward_amounts'] = _choice_reward_amounts
        console.log("finite get_trial()", trial)
        return trial    
    }
}


class TaskStreamer{
    constructor(DIO, ExperimentFilePath, SubjectID){
        this.DIO = DIO
        this.ExperimentFilePath = ExperimentFilePath
        this.taskstream_checkpoint_fname = this._checkpoint_namehash(SubjectID)
        this.taskstream_checkpoint_path = join([CHECKPOINT_DIRPATH, this.taskstream_checkpoint_fname])
        
        // Checkpoint info
        this.state = {}        
        this.state['current_stage_index'] = undefined 
        this.state['current_stage_trial_number'] = undefined
        this.state['return_sequence_in_stage'] = undefined 

        
        // EXPERIMENT info 
        this.EXPERIMENT = undefined

        // TrialQueues for each stage  
        this.TQ_sequence = []

        // Image buffer
        this.IB = new ImageBuffer(this.DIO)

        // Save info
        this._last_checkpoint_save = performance.now()
        this._checkpoint_save_timeout_period = CHECKPOINT_SAVE_TIMEOUT_PERIOD
        this._SubjectID = SubjectID
        this._debug_mode = true
        this._debug_taskstream_checkpoint_path = join([_debug_CHECKPOINT_DIRPATH, this.taskstream_checkpoint_fname])


        // Terminal state 
        this.loop_at_end = true
        this._done_monitoring = false
    }

    _checkpoint_namehash(SubjectID){
        return 'Checkpoint_'+SubjectID + '.ckpt'
    }

    _generate_default_checkpoint(){

        this.state['current_stage_index'] = 0
        this.state['current_stage_trial_number'] = 0
        this.state['return_sequence_in_stage'] = []
    }

    async build(){
        console.log('Constructing new trial queue')
        // For now, this is built with a stimulus - discrete choice task in mind, like MTS or SR, 
        // with a performance-gated, sequential, potentially looping series of tasks

        // taskstream_generative_params: an array of objects, wherein at least the first must contain:
        // and the following encode the parameters you would like to change in transitioning from the 
        // previous stage to the next 

        var EXPERIMENT = await this.DIO.read_textfile(this.ExperimentFilePath)
        EXPERIMENT = JSON.parse(EXPERIMENT)
        this.EXPERIMENT = EXPERIMENT
        this.EXPERIMENT_hash = JSON.stringify(EXPERIMENT).hashCode()

        console.log(this)
        var generate_default = true        
        if(await this.DIO.exists(this.taskstream_checkpoint_path)){
            var checkpoint = await this.DIO.read_textfile(this.taskstream_checkpoint_path)

            checkpoint = JSON.parse(checkpoint)
            if(checkpoint['EXPERIMENT_hash'] != this.EXPERIMENT_hash){
                generate_default = true
                wdm('Checkpoint file on disk does not match current EXPERIMENT. Generating novel checkpoint...')
            }
            else{
                wdm('Loaded checkpoint '+ this.taskstream_checkpoint_path)
                generate_default = false
                this.state['current_stage_index'] = checkpoint["current_stage_index"]
                this.state['current_stage_trial_number'] = checkpoint["current_stage_index"]
                this.state['return_sequence_in_stage'] = checkpoint['return_sequence_in_stage']
            }
        }
        if(generate_default == true){
            this._generate_default_checkpoint() 
            await this.save_ckpt()
            wdm('Generated default checkpoint')
        }

        // Prebuffer stages of EXPERIMENT
        for (var i_stage = 0; i_stage < EXPERIMENT.length; i_stage++){

            var _tk = EXPERIMENT[i_stage]


            if(i_stage == this.state['current_stage_index']){
                var start_trial_number = this.state['current_stage_trial_number']                 
            }
            else{
                var start_trial_number = 0
            }
            updateProgressbar((i_stage+1)/EXPERIMENT.length*100, 'AutomatorLoadBar', 'Stages loaded:')

            var samplebag_paths = []
            var samplebag_labels = []
            for (var i_samplebag = 0; i_samplebag < _tk['ImageBagsSampleMetaPaths'].length; i_samplebag++){
                var _s_meta = await this.DIO.read_textfile(_tk['ImageBagsSampleMetaPaths'][i_samplebag])
                _s_meta = JSON.parse(_s_meta)
                samplebag_paths.push(... _s_meta['path'])
                samplebag_labels.push(... new Array(_s_meta['path'].length).fill(i_samplebag))
            }


            var testbag_paths = []
            var testbag_labels = []
            for (var i_testbag = 0; i_testbag < _tk['ImageBagsTestMetaPaths'].length; i_testbag++){
                var _t_meta = await this.DIO.read_textfile(_tk['ImageBagsTestMetaPaths'][i_testbag])
                _t_meta = JSON.parse(_t_meta)
                testbag_paths.push(... _t_meta['path'])
                testbag_labels.push(... new Array(_t_meta['path'].length).fill(i_testbag))
            }

            var _newTQ = new TrialQueue(samplebag_paths, samplebag_labels, testbag_paths, testbag_labels, this.IB, start_trial_number, _tk)

            await _newTQ.build(5)

            _newTQ.nickname = _tk['StageNickname']
            this.TQ_sequence.push(_newTQ)
            wdm('Loaded stage '+(i_stage+1)+' of '+EXPERIMENT.length)
        }

        this._initial_state = JSON.parse(JSON.stringify(this.state))

        return 
    }

    transition_from_debug_to_science_mode(){
        this.state = this._initial_state 
        this._initial_state = undefined
        this._debug_mode = false
    }

    get_trial(i){
        // called at the beginning of each trial 
        // returns images, reward maps, and other necessary things for runtrial()
        
        var trial_idx = i || this.state['current_stage_trial_number']
        console.log(trial_idx)
        var trial = this.TQ_sequence[this.state['current_stage_index']].get_trial(trial_idx)
        return trial
    }

    _check_transition_criterion(){
        var min_trials = this.EXPERIMENT[this.state['current_stage_index']]['MinTrialsCriterion']
        var average_return_criterion = this.EXPERIMENT[this.state['current_stage_index']]['AverageReturnCriterion']
        
        console.log('transition criterion')
        console.log(min_trials, average_return_criterion)
        console.log(this.state['return_sequence_in_stage'])

        if(min_trials == undefined 
            || min_trials <=0 
            || average_return_criterion == undefined
            || average_return_criterion < 0){
            return false
        }

        if(this.state['return_sequence_in_stage'].length < min_trials){
            // Haven't reached minimum number of trials
            return false 
        }

        var average_return_for_last_min_trials = (this.state['return_sequence_in_stage'].slice(-1 * min_trials).reduce(add, 0)) / min_trials
        wdm('Average return for last '+min_trials+': '+average_return_for_last_min_trials)
        if(average_return_for_last_min_trials >= average_return_criterion){
            return true
        }
        else if(average_return_for_last_min_trials < average_return_criterion){
            return false
        }
    }

    update_state(current_trial_outcome){
        console.log("called update_state")
        // trial_behavior: the just-finished trial's behavior. 
        // called at the end of every trial. 

        Math.seedrandom(repeat_rng_seed)

        var _repeat_if_wrong_probability = this.EXPERIMENT[this.state.current_stage_index]['probability_repeat_trial_if_wrong'] || 0
        if(current_trial_outcome['Return'] == 0){

            var repeat_rng_seed = cantor(this.state['current_stage_index'], this.EXPERIMENT[this.state.current_stage_index]['samplingRNGseed'])


            if(Math.random() < _repeat_if_wrong_probability){
                console.log('repeating TRIAL because of wrong response')
                this.state['current_stage_trial_number'] = this.state['current_stage_trial_number'] // Repeat trial
            }
            else{
                this.state['current_stage_trial_number']++
            }
        }
        else{
            this.state['current_stage_trial_number']++ // Equivalent to number of trials completed
        }
        
            
        this.state['return_sequence_in_stage'].push(current_trial_outcome['Return']) 

        // Check transition criterion, if monitoring 
        if(this._done_monitoring == false){
            var transition_criterion_met = this._check_transition_criterion()
            if(transition_criterion_met == true){
                updateProgressbar(this.state['current_stage_trial_number']+1 / this.EXPERIMENT.length*100, 'StageBar', 'Stages finished:')
                
                if(this.state['current_stage_index'] + 1 >= this.EXPERIMENT.length){
                    // Out of stages; start looping or continue current stage 
                    if (this.loop_at_end = true){
                        this.state['current_stage_index'] = 0 
                        this.state['current_stage_trial_number'] = 0
                        this.state['return_sequence_in_stage'] = [] 
                    }
                    else{
                        this._done_monitoring = true
                    }
                }
                else{
                    this.state['current_stage_index']++
                    this.state['current_stage_trial_number'] = 0 
                    this.state['return_sequence_in_stage'] = []
                }            
                //INITIALIZE = true // todo: remove (refreshes canvas settings)
            }
        }

        // Write checkpoint to disk if it's been a while
        if(performance.now() - this._last_checkpoint_save > this._checkpoint_save_timeout_period){
            this.save_ckpt()
            this._last_checkpoint_save = performance.now()
            wdm('Checkpoint save called')
        }
    }

    async save_ckpt(){
        var ckpt = {}
        ckpt['SubjectID'] = this._SubjectID
        ckpt['current_stage_index'] = this.state['current_stage_index']
        ckpt['current_stage_trial_number'] = this.state['current_stage_trial_number'] 
        ckpt['last_save_unix_timestamp'] = Math.round(performance.now() + SESSION.UnixTimestampAtStart)
        ckpt['return_sequence_in_stage'] = this.state['return_sequence_in_stage']
        ckpt['EXPERIMENT_hash'] = this.EXPERIMENT_hash
        var datastring = JSON.stringify(ckpt, null, 2)

        if(this._debug_mode == false){
            var savepath = this.taskstream_checkpoint_path
        }
        else{
            var savepath = this._debug_taskstream_checkpoint_path
        }

        await this.DIO.write_string(datastring, savepath)
        wdm('Wrote checkpoint file to '+savepath)
    }

    // async build_literal(){
    //     // TODO: pipe for ModelTurk-generated TaskStream constructor 

    //     // Literally supply array of length(numtrials) each of which is an object with: 

    //     var sample_grid_index_placement
    //     var test_images
    //     var testbag_indices
    //     var test_correct_grid_index
    //     var test_grid_index_placements
    //     var choice_reward_amounts
    //     return 
    // }


}




