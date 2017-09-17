class TaskStreamer{
    constructor(DIO_checkpointing, DIO_images, Experiment, SubjectID, use_checkpointing){
        // To save 
        this.trial_behavior = this.initialize_behavior_records()
        this.image_bag_paths = {}
        this.image_bag_labels = {}

        this.DIO_checkpointing = DIO_checkpointing // For checkpointing 
        this.DIO_images = DIO_images // for loading images and loading textfiles with imagebag definitions 
        this.EXPERIMENT = Experiment["Experiment"]
        this.ImageBags = Experiment["ImageBags"]

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

        t['Sample_ImageBagIndex'] = []  
        t['SampleGridIndex'] = [] 

        t['Choices_ImageBagIndices'] = [] 
        t['ChoiceGridIndices'] = [] 

        t['Choices_RewardAmounts'] = [] 
        
        return t
    }

    update_behavior_records(t, cto){

        // map the timestamps of the frames to your preferred field names 
        // to save massive headache down the line 

        // and save the various TRIAL fields of interest to your own fieldnames

        // t: this.trial_behavior, cto: current_trial_outcome created at end of runtrial()
        t['StartTime'].push(cto['FixationT'])
        t['TrialNumber_Session'].push(TRIAL_NUMBER_FROM_SESSION_START)
        t['TrialNumber_Stage'].push(this.state['current_stage_trial_number'])
        t['StageNumber'].push(this.state['current_stage_index'])

        t['timestamp_FixationOnset'].push(cto['timestamp_FixationOnset'])
        
        t['timestamp_StimulusOn'].push(cto['frame_timestamps'][0])
        t['timestamp_StimulusOff'].push(cto['frame_timestamps'][1])
        t['timestamp_ChoiceOn'].push(cto['frame_timestamps'][2])

        t['timestamp_ReinforcementOn'].push(cto['timestamp_ReinforcementOn'])
        t['timestamp_ReinforcementOff'].push(cto['timestamp_ReinforcementOff'])

        t['ChoiceX'].push(cto['ChoiceX'])
        t['ChoiceY'].push(cto['ChoiceY'])
        t['ChoiceT'].push(cto['ChoiceT'])
        t['Return'].push(cto['Return'])

        t['Response_GridIndex'].push(cto['Response_GridIndex'])
        t['Correct_GridIndex'].push(cto['TRIAL']['correct_grid_index'])

        t['FixationX'].push(cto['FixationX'])
        t['FixationY'].push(cto['FixationY'])
        t['FixationT'].push(cto['FixationT'])

        t['Sample_ImageBagIndex'] = []  
        t['Choices_ImageBagIndices'] = [] 

        t['SampleGridIndex'].push(cto['TRIAL']['grid_placement_sequence'][0])
        t['ChoiceGridIndices'].push(cto['TRIAL']['grid_placement_sequence'][2])

        t['Choices_RewardAmounts'].push(cto['TRIAL']['choice_regions_gridIndices'])
        console.log(t)
        return t 
    }


    


    async get_trial(i){
        // called at the beginning of each trial 
        // returns images, reward maps, and other necessary things for runtrial()
        
        var trial_idx = i || this.state['current_stage_trial_number']
        var _t = await this.TQ_sequence[this.state['current_stage_index']].get_trial(trial_idx)
        console.log('returned trial from TQ', _t)


        var sample_grid_index = this.EXPERIMENT[this.state['current_stage_index']]['SampleGridIndex']
        var test_grid_indices = this.EXPERIMENT[this.state['current_stage_index']]['ObjectGridMapping']

        var choice_reward_amounts = Array(test_grid_indices.length).fill(0)
        choice_reward_amounts[_t['correct_test_selection']] = 1

        var sample_image = _t['sample_image']
        var test_images = _t['test_images']



        var trial = {}
        var t_sample_on = this.EXPERIMENT[this.state['current_stage_index']]['t_SampleON']
        var t_sample_off = this.EXPERIMENT[this.state['current_stage_index']]['t_SampleOFF']
        trial['frame_durations'] = [t_sample_on,t_sample_off,0] // List of durations
        trial['image_sequence'] = [sample_image, [], test_images] // List of {images, lists of images, or [] for blank}
        trial['grid_placement_sequence'] = [sample_grid_index, [], test_grid_indices] // list of lists
        trial['frame_names'] = ['frame_stimulus', 'frame_delay', 'frame_choice']

        trial['choice_regions_rewardAmounts'] = choice_reward_amounts // list of award amounts
        trial['choice_regions_gridIndices'] = test_grid_indices // list of bounding box objects
        trial['timeout_msec'] = this.EXPERIMENT[this.state['current_stage_index']]['ChoiceTimeOut']

        // Optional
        trial['correct_grid_index'] = _t['test_correct_grid_index']


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
       // trial_behavior: the just-finished trial's behavior. 
        // called at the end of every trial. 

        var Return = current_trial_outcome['Return']


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
        console.log('this.trial_behavior', this.trial_behavior)
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

        dataobj['EXPERIMENT'] = this.EXPERIMENT
        dataobj["IMAGEBAGS"] = this.ImageBags
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

            var samplebags = {}
            for (var i_samplebag = 0; i_samplebag < _tk['SampleImageBagNames'].length; i_samplebag++){
                var samplebag_name = _tk["SampleImageBagNames"][i_samplebag]
                samplebags[samplebag_name] = this.ImageBags[samplebag_name]
            }



            var testbags = []
            for (var i_testbag = 0; i_testbag < _tk['TestImageBagNames'].length; i_testbag++){

                var testbag_name = _tk["TestImageBagNames"][i_testbag]
                testbags[testbag_name] = this.ImageBags[testbag_name]
            }

            var _newTQ = new TrialQueue(EXPERIMENT[i_stage]['SampleImageBagNames'], 
                                        EXPERIMENT[i_stage]['TestImageBagNames'], 
                                        this.ImageBags,
                                        this.IB, 
                                        start_trial_number, 
                                        _tk['samplingRNGseed'])

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




