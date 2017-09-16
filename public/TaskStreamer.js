class TaskStreamer{
    constructor(DIO_checkpointing, DIO_images, Experiment, SubjectID, use_checkpointing){
        // To save 
        this.trial_behavior = this.initialize_behavior_records()
        this.image_bag_paths = {}
        this.image_bag_labels = {}

        this.DIO_checkpointing = DIO_checkpointing // For checkpointing 
        this.DIO_images = DIO_images // for loading images and loading textfiles with imagebag definitions 
        this.EXPERIMENT = Experiment
        this.use_checkpointing = use_checkpointing
        if(this.use_checkpointing == true){
            this.taskstream_checkpoint_fname = this._checkpoint_namehash(SubjectID)
            this.taskstream_checkpoint_path = join([CHECKPOINT_DIRPATH, this.taskstream_checkpoint_fname])
            this._last_checkpoint_save = performance.now()
            this._checkpoint_save_timeout_period = CHECKPOINT_SAVE_TIMEOUT_PERIOD
            this._SubjectID = SubjectID
            this._debug_mode = true
            this._debug_taskstream_checkpoint_path = join([_debug_CHECKPOINT_DIRPATH, this.taskstream_checkpoint_fname])
        }        

        // State info
        this.state = {}        
        this.state['current_stage_index'] = undefined 
        this.state['current_stage_trial_number'] = undefined
        this.state['return_sequence_in_stage'] = undefined 

        

        // TrialQueues for each stage  
        this.TQ_sequence = []

        // Image buffer
        this.IB = new ImageBuffer(DIO_images)        

        // Terminal state 
        this.loop_at_end = true
        this._done_monitoring = false
    }

    initialize_behavior_records(){
        var t = {}

        t['StartTime'] = []
        t['TrialNumber_Session'] = []
        t['TrialNumber_Stage'] = []
        t['StageNumber'] = []

        t['timestamp_FixationOnset'] = []
        t['timestamp_StimulusOn'] = []
        t['timestamp_StimulusOff'] = []
        t['timestamp_ChoiceOn'] = []
        t['timestamp_ReinforcementOn'] = []
        t['timestamp_ReinforcementOff'] = []

        t['ChoiceX'] = []
        t['ChoiceY'] = []
        t['ChoiceT'] = []
        t['Return'] = [] 

        t['Response_GridIndex'] = []
        t['Correct_GridIndex'] = []

        t['FixationX'] = []
        t['FixationY'] = []
        t['FixationT'] = []
        t['FixationReturn'] =[]

        t['Sample_ImageBagIndex'] = []  
        t['Sample_GridIndex'] = [] 

        t['Choices_ImageBagIndices'] = [] 
        t['Choices_GridIndices'] = [] 

        t['Choices_RewardAmounts'] = [] 

        
        
        return t
    }

    update_behavior_records(t, cto){
        // todo: make data recording easier
        // cto is current_trial_outcome 
        var i_epoch = 0 
        t['StartTime'].push(cto['fixation_outcome']['timestamp'])
        t['TrialNumber_Session'].push(TRIAL_NUMBER_FROM_SESSION_START)
        t['TrialNumber_Stage'].push(this.state['current_stage_trial_number'])
        t['StageNumber'].push(this.state['current_stage_index'])

        t['timestamp_FixationOnset'].push(cto['fixation_timestamps'][0])
        
        t['timestamp_StimulusOn'].push(cto['epoch_timestamps'][i_epoch][0])
        t['timestamp_StimulusOff'].push(cto['epoch_timestamps'][i_epoch][1])
        t['timestamp_ChoiceOn'].push(cto['epoch_timestamps'][i_epoch][2])
        t['timestamp_ReinforcementOn'].push(cto['epoch_reinforcement_timestamps'][i_epoch][0])
        t['timestamp_ReinforcementOff'].push(cto['epoch_reinforcement_timestamps'][i_epoch][1])

        t['ChoiceX'].push(cto['epoch_outcomes'][i_epoch]['x'])
        t['ChoiceY'].push(cto['epoch_outcomes'][i_epoch]['y'])
        t['ChoiceT'].push(cto['epoch_outcomes'][i_epoch]['timestamp'])
        t['Return'].push(cto['epoch_outcomes'][i_epoch]['reinforcement'])

        t['FixationX'].push(cto['fixation_outcome']['x'])
        t['FixationY'].push(cto['fixation_outcome']['y'])
        t['FixationT'].push(cto['fixation_outcome']['timestamp'])
        t['FixationReturn'].push(cto['fixation_outcome']['reinforcement'])


        var _t = cto['trial_constructor'][i_epoch]
        var chosen_grid_index = _t['grid_placements'][2][cto['epoch_outcomes'][i_epoch]['region_index']]
        t['Response_GridIndex'].push(chosen_grid_index)
        t['Correct_GridIndex'].push(cto['trial_constructor'][i_epoch]['test_correct_grid_index'])

        t['Sample_ImageBagIndex'].push(cto['trial_constructor'][i_epoch]['samplebag_index'])
        t['Sample_GridIndex'].push(cto['trial_constructor'][i_epoch]['grid_placements'][0])

        t['Choices_ImageBagIndices'].push(cto['trial_constructor'][i_epoch]['testbag_indices'])
        t['Choices_GridIndices'].push(cto['trial_constructor'][i_epoch]['grid_placements'][2])
        t['Choices_RewardAmounts'].push(cto['trial_constructor'][i_epoch]['reward_amounts'])


        return t 

    }
    


    async get_trial(i){
        // called at the beginning of each trial 
        // returns images, reward maps, and other necessary things for runtrial()
        
        var trial_idx = i || this.state['current_stage_trial_number']
        var _t = await this.TQ_sequence[this.state['current_stage_index']].get_trial(trial_idx)
        console.log(_t)

        //var _msec_on
        //var _images
        //var _grid_placements
        //var _reward_amounts 
        //var _boundingBoxes 

        var sample_grid_index = _t['sample_grid_index_placement']
        var test_grid_indices = _t['test_grid_index_placements']

        

        var msec_timeout = 5000

        var sample_image = _t['sample_image']
        var test_images = _t['test_images']




        var trial = {}
        trial['frame_durations'] = [100,0,0] // List of durations
        trial['image_sequence'] = [sample_image, [], test_images] // List of {images, lists of images, or [] for blank}
        trial['grid_placement_sequence'] = [sample_grid_index, [], test_grid_indices] // list of lists
        trial['frame_names'] = ['frame_stimulus', 'frame_delay', 'frame_choice']

        trial['choice_regions_rewardAmounts'] = _t['choice_reward_amounts'] // list of award amounts
        trial['choice_regions_gridIndices'] = _t['test_grid_index_placements'] // list of bounding box objects
        trial['timeout_msec'] = msec_timeout

        return trial
    }

    _check_transition_criterion(){
        var min_trials = this.EXPERIMENT[this.state['current_stage_index']]['MinTrialsCriterion']
        var average_return_criterion = this.EXPERIMENT[this.state['current_stage_index']]['AverageReturnCriterion']
        
        console.log('transition criterion', min_trials, average_return_criterion, this.state['return_sequence_in_stage'])
   

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
        return
        // trial_behavior: the just-finished trial's behavior. 
        // called at the end of every trial. 

        var Return = current_trial_outcome['epoch_outcomes'][0]['reinforcement']


        var _repeat_if_wrong_probability = this.EXPERIMENT[this.state.current_stage_index]['probability_repeat_trial_if_wrong'] || 0
        if(Return == 0){

            var repeat_rng_seed = cantor(this.state['current_stage_index'], this.EXPERIMENT[this.state.current_stage_index]['samplingRNGseed'])
            Math.seedrandom(repeat_rng_seed)

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
        
            
        this.state['return_sequence_in_stage'].push(Return) 

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


        // Update trial object 
        this.trial_behavior = this.update_behavior_records(this.trial_behavior, current_trial_outcome)

        // Write checkpoint to disk if it's been a while
        if(performance.now() - this._last_checkpoint_save > this._checkpoint_save_timeout_period){
            this.save_ckpt()
            this._last_checkpoint_save = performance.now()
            wdm('Checkpoint save called')
        }
    }

    package_behavioral_data(){
        var dataobj = {}

        dataobj['DEVICE'] = DEVICE
        dataobj['PLAYSPACE'] = PLAYSPACE
        dataobj['TOUCHSTRING'] = TOUCHSTRING
        dataobj['SUBJECT'] = SUBJECT
        dataobj['SESSION'] = SESSION

        dataobj['EXPERIMENT'] = TS.EXPERIMENT
        dataobj['BEHAVIOR'] = this.trial_behavior

        return dataobj
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

        await this.DIO_checkpointing.write_string(datastring, savepath)
        wdm('Wrote checkpoint file to '+savepath)
    }
    async build(){
        console.log('Constructing new trial queue')
        // For now, this is built with a stimulus - discrete choice task in mind, like MTS or SR, 
        // with a performance-gated, sequential, potentially looping series of tasks

        // taskstream_generative_params: an array of objects, wherein at least the first must contain:
        // and the following encode the parameters you would like to change in transitioning from the 
        // previous stage to the next 
        var EXPERIMENT = this.EXPERIMENT
        this.EXPERIMENT_hash = JSON.stringify(EXPERIMENT).hashCode()

        if(this.use_checkpointing == true){
            // Try to load checkpoint from disk, if it exists      
            if(await this.DIO_checkpointing.exists(this.taskstream_checkpoint_path)){
                var checkpoint = await this.DIO_checkpointing.read_textfile(this.taskstream_checkpoint_path)

                checkpoint = JSON.parse(checkpoint)
                if(checkpoint['EXPERIMENT_hash'] != this.EXPERIMENT_hash){
                    wdm('Checkpoint file on disk does not match current EXPERIMENT. Generating default state...')
                    this._generate_default_state() 
                    await this.save_ckpt()
                }
                else{
                    wdm('Successfully loaded valid checkpoint '+ this.taskstream_checkpoint_path)
                    this.state['current_stage_index'] = checkpoint["current_stage_index"]
                    this.state['current_stage_trial_number'] = checkpoint["current_stage_index"]
                    this.state['return_sequence_in_stage'] = checkpoint['return_sequence_in_stage']
                }
            }
            else{
                this._generate_default_state()
                await this.save_ckpt
            }
        }
        else{
            this._generate_default_state()
            wdm('Not using checkpointing...generated default state')
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
                var _s_meta = await this.DIO_images.read_textfile(_tk['ImageBagsSampleMetaPaths'][i_samplebag])
                _s_meta = JSON.parse(_s_meta)
                samplebag_paths.push(... _s_meta['path'])
                samplebag_labels.push(... new Array(_s_meta['path'].length).fill(i_samplebag))
            }



            var testbag_paths = []
            var testbag_labels = []
            for (var i_testbag = 0; i_testbag < _tk['ImageBagsTestMetaPaths'].length; i_testbag++){
                var _t_meta = await this.DIO_images.read_textfile(_tk['ImageBagsTestMetaPaths'][i_testbag])
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
    _checkpoint_namehash(SubjectID){
        return 'Checkpoint_'+SubjectID + '.ckpt'
    }

    _generate_default_state(){

        this.state['current_stage_index'] = 0
        this.state['current_stage_trial_number'] = 0
        this.state['return_sequence_in_stage'] = []
    }

    

    transition_from_debug_to_science_mode(){
        this.state = this._initial_state 
        this._initial_state = undefined
        this._debug_mode = false
        this.trial_behavior = this.initialize_behavior_records()
    }
}




