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

class TrialQueue{
    constructor(IB){
        this.IB = IB
    }

    get_trial(i){

    }
}

class TaskStreamer{
    constructor(DIO_checkpointing, DIO_images, Experiment, ImageBags, SubjectID, on_finish){
        // To save 
        this.trial_behavior = this.initialize_behavior_records()



        this.DIO_checkpointing = DIO_checkpointing // For writing checkpoints 
        this.DIO_images = DIO_images // for loading images 

        this.Experiment = Experiment
        this.ImageBags = ImageBags

        this.use_checkpointing = (DIO_checkpointing != undefined) 
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
        this.state['current_stage'] = undefined 
        this.state['current_stage_trial_number'] = undefined
        this.state['returns_in_stage'] = undefined 

    
        // Image buffer
        this.IB = new ImageBuffer(DIO_images)        

        // Terminal state 
        on_finish = on_finish || "loop" 
        this.on_finish = on_finish // "loop", "terminate", "continue"
        this._done_monitoring = false
    }

    selectSampleImage(SampleBagNames, _RNGseed){
    
        Math.seedrandom(_RNGseed)

        // Select sample class 
        var num_classes = SampleBagNames.length
        var selected_bag_index = Math.floor(Math.random()*num_classes)
        var selected_bag_name = SampleBagNames[selected_bag_index]

        // Select image inside of that class
        var num_bag_images = this.ImageBags[selected_bag_name].length
        var selected_image_index = Math.floor(Math.random() * num_bag_images)
        var selected_image_name = this.ImageBags[selected_bag_name][selected_image_index]

        var sample = {'bag_name':selected_bag_name, 
                        'bag_index':selected_bag_index,
                        'image_index':selected_image_index, 
                        'image_name': selected_image_name}

        return sample
    }

    selectTestImages(TestBagNames, _RNGseed){
        
        Math.seedrandom(_RNGseed)

        // Select distractor (SR)
        var num_classes = TestBagNames.length

        var test = {}
        test['bag_name'] = []
        test['bag_index'] = []
        test['image_index'] = []
        test['image_name'] = []

        for (var i_choice_class = 0; i_choice_class<num_classes; i_choice_class++){
            // Get name of class
            var bag_name = TestBagNames[i_choice_class]

            // Select image inside of that class 
            var test_image_index = Math.floor(Math.random()*this.ImageBags[bag_name].length)
            var test_image_name = this.ImageBags[bag_name][test_image_index]

            test['bag_name'].push(bag_name)
            test['bag_index'].push(i_choice_class)
            test['image_index'].push(test_image_index)
            test['image_name'].push(test_image_name)
        }
        return test 
    }


    async get_trial(i){
        // called at the beginning of each trial 
        // returns images, reward maps, and other necessary things for runtrial()
        var E = this.Experiment[this.state['current_stage']]
        var trial_idx = i || this.state['current_stage_trial_number']

        var sample_selection_RNGseed = cantor(trial_idx, E['samplingRNGseed'])
        var test_selection_RNGseed = cantor(trial_idx, E['samplingRNGseed']+1)
        var distractor_location_RNGseed = cantor(trial_idx, E['samplingRNGseed']+2)

        

        

        
        var SampleBagNames = E['SampleImageBagNames']
        var TestBagNames = E['TestImageBagNames']

        var sample = this.selectSampleImage(SampleBagNames, sample_selection_RNGseed)
        var test = this.selectTestImages(TestBagNames, test_selection_RNGseed)

       


        var t_sample_on = E['t_SampleON']
        var t_sample_off = E['t_SampleOFF']
        
         // Buffer image from disk 
        var sample_image = await this.IB.get_by_name(sample['image_name'])

        var test_images = []
        for (var i_test_image = 0; i_test_image < test['image_name'].length; i_test_image++){
            test_images.push(this.IB.get_by_name(test['image_name'][i_test_image]))
        }
        test_images = await Promise.all(test_images)

        var sample_grid_index = E['SampleGridIndex']

        if(E['Task'] == 'SR'){
            var test_grid_indices = E['ObjectGridMapping']
            var correct_test_selection = sample['bag_index'] // Indexes ObjectGridMapping
        }
        else if(E['Task'] == 'MTS'){
            var correct_test_selection = test['bag_index'].indexOf(sample['bag_index'])

            // Grid order 
            var _order = [... Array(E['ObjectGridMapping'].length).keys()]
            _order = shuffle(_order, distractor_location_RNGseed)
            console.log('order', _order)

            var test_grid_indices = []
            for (var i_order = 0; i_order <_order.length; i_order++){
                test_grid_indices.push(E['ObjectGridMapping'][_order[i_order]])
            }

        }
        else if(E['Task'] == 'nonMTS'){
            // Assumes two-way task
            var _matchindex = test['bag_index'].indexOf(sample['bag_index'])
            if(_matchindex == 0){
                var correct_test_selection = 1
            }
            else{
                var correct_test_selection = 0
            }

            // Grid order 
            var _order = [... Array(E['ObjectGridMapping'].length).keys()]
            _order = shuffle(_order, distractor_location_RNGseed)
            console.log('order', _order)

            var test_grid_indices = []
            for (var i_order = 0; i_order <_order.length; i_order++){
                test_grid_indices.push(E['ObjectGridMapping'][_order[i_order]])
            }
        }
            
            
        var choice_reward_amounts = Array(test_grid_indices.length).fill(0)
        choice_reward_amounts[correct_test_selection] = 1

        // Write down trial
        
        // Stimulus
        var trial = {}
        trial['frame_durations'] = [t_sample_on,t_sample_off,0] // List of durations
        trial['image_sequence'] = [sample_image, 'blank', test_images] // List of {images, lists of images, or [] for blank}
        trial['grid_placement_sequence'] = [sample_grid_index, [], test_grid_indices] // list of lists
        trial['frame_names'] = ['frame_stimulus', 'frame_delay', 'frame_choice']

        // Choice
        trial['choice_rewards'] = choice_reward_amounts // list of award amounts
        trial['choice_grid_indices'] = test_grid_indices // list of bounding box objects
        trial['timeout_msec'] = this.Experiment[this.state['current_stage']]['ChoiceTimeOut']

        // Optional
        trial['correct_grid_index'] = test_grid_indices[correct_test_selection]
        
        trial['sample_bag_index'] = sample['bag_index']
        trial['sample_image_index'] = sample['image_index']

        trial['test_bag_indices'] = test['bag_index']
        trial['test_image_indices'] = test['image_index']

        return trial
    }

    _check_transition_criterion(){
        var min_trials = this.Experiment[this.state['current_stage']]['MinTrialsCriterion']
        var average_return_criterion = this.Experiment[this.state['current_stage']]['AverageReturnCriterion']
        
   

        if(min_trials == undefined 
            || min_trials <=0 
            || average_return_criterion == undefined
            || average_return_criterion < 0){
            return false
        }

        if(this.state['returns_in_stage'].length < min_trials){
            // Haven't reached minimum number of trials
            return false 
        }

        var average_return_for_last_min_trials = (this.state['returns_in_stage'].slice(-1 * min_trials).reduce(add, 0)) / min_trials
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


        var _repeat_if_wrong_probability = this.Experiment[this.state.current_stage]['probability_repeat_trial_if_wrong'] || 0
        if(Return == 0){

            var repeat_rng_seed = cantor(this.state['current_stage'], this.Experiment[this.state.current_stage]['samplingRNGseed'])
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
        
            
        this.state['returns_in_stage'].push(Return) 

        // Check transition criterion, if monitoring 
        if(this._done_monitoring == false){
            var transition_criterion_met = this._check_transition_criterion()
            if(transition_criterion_met == true){
                updateProgressbar(this.state['current_stage_trial_number']+1 / this.Experiment.length*100, 'StageBar', 'Stages finished:')
                
                if(this.state['current_stage'] + 1 >= this.Experiment.length){
                    // Out of stages; start looping or continue current stage 
                    if (this.on_finish == 'loop'){
                        this.state['current_stage'] = 0 
                        this.state['current_stage_trial_number'] = 0
                        this.state['returns_in_stage'] = [] 
                    }
                    else if(this.on_finish == 'terminate' ){
                        TERMINAL_STATE = true
                        return 
                    }
                    else if(this.on_finish == 'continue'){
                        this._done_monitoring = true
                    }
                    else{
                        // just loop (default)
                        this.state['current_stage'] = 0 
                        this.state['current_stage_trial_number'] = 0
                        this.state['returns_in_stage'] = [] 
                    }
                }
                else{
                    this.state['current_stage']++
                    this.state['current_stage_trial_number'] = 0 
                    this.state['returns_in_stage'] = []
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

        dataobj['Experiment'] = this.Experiment
        dataobj["IMAGEBAGS"] = this.ImageBags
        dataobj['BEHAVIOR'] = this.trial_behavior
        return dataobj
    }

    async save_ckpt(){
        var ckpt = {}
        ckpt['SubjectID'] = this._SubjectID
        ckpt['current_stage'] = this.state['current_stage']
        ckpt['current_stage_trial_number'] = this.state['current_stage_trial_number'] 
        ckpt['last_save_unix_timestamp'] = Math.round(performance.now() + SESSION.UnixTimestampAtStart)
        ckpt['returns_in_stage'] = this.state['returns_in_stage']
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

    async build(num_trials_per_stage_to_prebuffer){
        num_trials_per_stage_to_prebuffer = num_trials_per_stage_to_prebuffer || 10
        console.log('Constructing new trial queue')


        var Experiment = this.Experiment
        this.EXPERIMENT_hash = JSON.stringify(Experiment).hashCode()

        if(this.use_checkpointing == true){
            // Try to load checkpoint from disk, if it exists      
            if(await this.DIO_checkpointing.exists(this.taskstream_checkpoint_path)){
                var checkpoint = await this.DIO_checkpointing.read_textfile(this.taskstream_checkpoint_path)

                checkpoint = JSON.parse(checkpoint)
                if(checkpoint['EXPERIMENT_hash'] != this.EXPERIMENT_hash){
                    wdm('Checkpoint file on disk does not match current Experiment. Generating default state...')
                    this._generate_default_state() 
                    await this.save_ckpt()
                }
                else{
                    wdm('Successfully loaded valid checkpoint '+ this.taskstream_checkpoint_path)
                    this.state['current_stage'] = checkpoint["current_stage"]
                    this.state['current_stage_trial_number'] = checkpoint["current_stage"]
                    this.state['returns_in_stage'] = checkpoint['returns_in_stage']
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


        // Prebuffer stages of Experiment
        for (var i_stage = 0; i_stage < Experiment.length; i_stage++){

            var _tk = Experiment[i_stage]

            

            if(i_stage == this.state['current_stage']){
                var start_trial_number = this.state['current_stage_trial_number']                 
            }
            else{
                var start_trial_number = 0
            }

            updateProgressbar((i_stage+1)/Experiment.length*100, 'AutomatorLoadBar', 'Stages loaded:')
            
            var image_requests = new Set()
            for (var i_trial = start_trial_number; i_trial < start_trial_number + num_trials_per_stage_to_prebuffer; i_trial++){
                var _RNGseed = cantor(i_trial, _tk['samplingRNGseed'])
                var sample = this.selectSampleImage(_tk['SampleImageBagNames'], _RNGseed)
                var test = this.selectTestImages(_tk['TestImageBagNames'], _RNGseed)
                image_requests.add(sample['image_name'])
                for (var i_test = 0; i_test<test['image_name'].length; i_test++){
                    image_requests.add(test['image_name'][i_test])
                }
                await this.IB.cache_these_images(image_requests)
            }

            wdm('Loaded stage '+(i_stage+1)+' of '+Experiment.length)
        }

        this._initial_state = JSON.parse(JSON.stringify(this.state))

        return 
    }

    _checkpoint_namehash(SubjectID){
        return 'Checkpoint_'+SubjectID + '.ckpt'
    }

    _generate_default_state(){
        this.state['current_stage'] = 0
        this.state['current_stage_trial_number'] = 0
        this.state['returns_in_stage'] = []
    }

    

    transition_from_debug_to_science_mode(){
        this.state = this._initial_state 
        this._initial_state = undefined
        this._debug_mode = false
        this.trial_behavior = this.initialize_behavior_records()
    }

    update_behavior_records(t, cto){

        // map the timestamps of the frames to your preferred field names 
        // to save massive headache down the line 

        // and save the various TRIAL fields of interest to your own fieldnames

        // t: this.trial_behavior, cto: current_trial_outcome created at end of runtrial()
        t['StartTime'].push(cto['FixationT'])
        t['TrialNumber_Session'].push(TRIAL_NUMBER_FROM_SESSION_START)
        t['TrialNumber_Stage'].push(this.state['current_stage_trial_number'])
        t['StageNumber'].push(this.state['current_stage'])

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

        t['Sample_ImageIndex'].push(cto['TRIAL']['sample_image_index'])
        t['Sample_BagIndex'].push(cto['TRIAL']['sample_bag_index'])

        t['Choices_ImageIndices'].push(cto['TRIAL']['test_image_indices'])
        t['Choices_BagIndices'].push(cto['TRIAL']['test_bag_indices'])

        t['SampleGridIndex'].push(cto['TRIAL']['grid_placement_sequence'][0])
        t['ChoiceGridIndices'].push(cto['TRIAL']['grid_placement_sequence'][2])
        t['Choices_RewardAmounts'].push(cto['TRIAL']['choice_regions_gridIndices'])
        return t 
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

        t['Sample_ImageIndex'] = []  
        t['Sample_BagIndex'] = []

        t['Choices_ImageIndices'] = [] 
        t['Choices_BagIndices'] = [] 

        t['SampleGridIndex'] = []
        t['ChoiceGridIndices'] = []
        t['Choices_RewardAmounts'] = [] 
        
        return t
    }

}




