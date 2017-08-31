


class Automator{
	constructor(automator_data, samplingStrategy, DIO){
		wdm("Initializing automator...")
		this.automator_data = automator_data
		this.TaskStreamState = undefined
		this.samplingStrategy = samplingStrategy
		this.__initial_TaskStreamState = undefined
		this.loop_automator = true // todo: move into settings
		this.DIO = DIO // Disk I/O

		this.TASKARCHIVE = []
		this.TASK_ARCHIVE_COUNTER = 0
	
		this.TQs = []
	}

	async build(num_prebuffer_trials){
		try{

			this.TaskStreamState = await this.DIO.read_textfile()
			wdm("Read TaskStream checkpoint.")
			this.__initial_TaskStreamState = JSON.parse(JSON.stringify(this.TaskStreamState));

			//this.automator_data = await this.DW.readJSONfromDropbox(TASK.AutomatorFilePath)
			//wdm("Read automator file")

			this.AutomatorPreBuffer = {}
			this.AutomatorPreBuffer['TrialQueue'] = {}; 


			if(this.loop_automator == false){
				var starting_load_stage = this.TaskStreamState['current_stage_index']
			}
			else{
				var starting_load_stage = 0
			}
			for (var a = starting_load_stage; a < this.automator_data.length; a++){
				wdm("Loading stage"+a)
				updateProgressbar((a+1)/this.automator_data.length * 100, "AutomatorLoadBar", 'Stages loaded:')
				console.time('Stage '+a)


				var _ImageBagsSample = this._populate_default(a, 'ImageBagsSample')
				var _ImageBagsTest = this._populate_default(a, 'ImageBagsTest')
				var _samplingRNGseed = this._populate_default(a, 'samplingRNGseed')
				var _trial_num_TaskStream = this._populate_default(a, 'trial_num_TaskStream')
				var _ObjectGridMapping = this._populate_default(a, 'ObjectGridMapping')
				console.log('automator _ObjectGridMapping', _ObjectGridMapping)
				this.AutomatorPreBuffer['TrialQueue'][a] = new TrialQueue(
					this.samplingStrategy, 
					_ImageBagsSample,
					_ImageBagsTest,
					_ObjectGridMapping,
					_samplingRNGseed, 
					_trial_num_TaskStream); 
				// Populate the stage's imagebuffer with some images
				await this.AutomatorPreBuffer['TrialQueue'][a].build(num_prebuffer_trials)
				this.AutomatorPreBuffer['TrialQueue'][a].nickname = 'stage'+a+' trial queue'
				console.timeEnd('Loaded stage '+a)
			}
			wdm("Done constructing automator")
			console.log('Done prebuffering automator stages.')

			return 
		}
		catch(error){
			wdm(error)
			console.error(error)
		}
	}

	get_trial(trial_number_from_session_start){
		var trial = {}

		var sample_grid_index_placement
		var test_images
		var testbag_indices
		var test_correct_grid_index
		var test_grid_index_placements
		var choice_reward_amounts

		[sample_grid_index_placement,
		test_images,
		testbag_indices,
		test_correct_grid_index,
		test_grid_index_placements,
		choice_reward_amounts] = this.TQs[this.current_stage].get_trial(this.current_taskstream_number)


		trial['sample_image']=sample_image // image actual =
		trial['samplebag_index']=samplebag_index // image in sampelbag paths=
		trial['sample_grid_index_placement']=sample_grid_index_placement // =
		trial['test_images']=test_images
		trial['testbag_indices']=testbag_indices
		trial['test_correct_grid_index']=test_correct_grid_index
		trial['test_grid_index_placements']=test_grid_index_placements
		trial['choice_reward_amounts']=choice_reward_amounts

		return trial 
	}

	update_state(TRIAL_BEHAVIOR){
		var met_transition_criterion = check_transition_criterion(TRIAL_BEHAVIOR)
		

		return 
	}

	async checkpoint(){

		function _savecheckpoint(){
			console.log('hi')
		}

		while(true){
			setTimeout(10000)
			_savecheckpoint()
		}

	}
	
	_populate_default(a, property){
		if (this.automator_data[a].hasOwnProperty(property)){
			//console.log('Found '+property+' in automator data')
			var _property = this.automator_data[a][property]
		}
		else if(property == 'trial_num_TaskStream'){
			//console.log('Reverting to 0 for trial_num_TaskStream')
			var _property = 0
		}
		else{
			//console.log('Reverting to TASK setting for '+property)
			var _property = TASK[property]
		}
		return _property
	}

	check_transition_criterion(TRIAL_BEHAVIOR){
		var nextTASK = undefined
		// todo: make it more general; high performance for many kinds of Tasks 
		var i_current_stage = this.TaskStreamState['current_stage_index']

		var MinPercentCriterion = this.automator_data[i_current_stage].MinPercentCriterion;
		var MinTrialsCriterion = this.automator_data[i_current_stage].MinTrialsCriterion; 
		var CurrentAutomatorStageName = this.automator_data[i_current_stage].CurrentAutomatorStageName;

		
		var ntrials = this.TaskStreamState['last_ntrial_reinforcement_amounts'].length
		var pctcorrect = 100 * (this.TaskStreamState['last_ntrial_reinforcement_amounts'].reduce(add, 0) / ntrials)

		console.log('For '+ntrials+' trials, pctcorrect='+Math.round(10*pctcorrect)/10)
		updateProgressbar((i_current_stage+1)/this.automator_data.length * 100, 'EpochBar', 'Stage '+this.TaskStreamState['current_stage_index']+':')
		var transition_criterion_met = pctcorrect >= MinPercentCriterion && ntrials >= MinTrialsCriterion

		return transition_criterion_met 

		if (transition_criterion_met == true){
			nextTASK = JSON.parse(JSON.stringify(TASK))
			// Ready to move to next stage
			if(this.TaskStreamState['current_stage_index']+1 >= this.automator_data.length){
				this.TaskStreamState['current_stage_index']++
				i_current_stage = this.TaskStreamState['current_stage_index']
				for (var property in this.automator_data[i_current_stage]){
					if (property === 'MinPercentCriterion' || property === 'MinTrialsCriterion' ||
						property === 'CurrentAutomatorStageName'){
						continue 
					}
					if (this.automator_data[i_current_stage].hasOwnProperty(property)){ 
						if (!(nextTASK[property].toString() == this.automator_data[i_current_stage][property].toString())){
							console.log('\"'+property+'\" changing from '+nextTASK[property]+' to '+this.automator_data[i_current_stage][property])
							nextTASK[property] = this.automator_data[i_current_stage+1][property]
							
						}
					}			
				}
			}

			// Reached last stage
			else{
				if(this.loop_automator == false){ 
					nextTASK.Automator = 0; 
					// this.TaskStreamState['current_stage_index'] = 'off';
					console.log('With '+pctcorrect+'\% performance on n='+ntrials+', subject completed the final stage '+(i_current_stage)+' of '+(this.automator_data.length-1)+' (zero indexing) of automator.')
				}

				else if(this.loop_automator == true){
					this.TaskStreamState['current_stage_index'] = 0
					for (var property in this.automator_data[0]){
						if (property === 'MinPercentCriterion' || property === 'MinTrialsCriterion' ||
							property === 'CurrentAutomatorStageName'){
							continue 
						}
						if (this.automator_data[0].hasOwnProperty(property)){ 
							if (!(nextTASK[property].toString() == this.automator_data[0][property].toString())){
								console.log('\"'+property+'\" changed from '+nextTASK[property]+' to '+this.automator_data[0][property])

								nextTASK[property] = this.automator_data[0][property]
								
							}
						}			
					}
					console.log("COMPLETED FINAL STAGE, LOOPING AUTOMATOR:")					
				}
			}

		}

		else if(transition_criterion_met == false){
			nextTASK = TASK
		}


		
		return [nextTASK, transition_criterion_met]
	}
	

	async resetToInitialLoadState(){
		this.TaskStreamState = this.__initial_TaskStreamState
		this.__initial_TaskStreamState = undefined
	}

	async monitorStage_State_and_Transition(TASK){
		// Call this at the beginning of each trial. 
		// Check for stage transitions, and if necessary, change TASK. 
		// Enforce adherence to the automator file if user has changed paramfile.

		var current_stage_hash = stageHash(TASK); 
		var i_current_stage = this.TaskStreamState['current_stage_index']

		// Overwrite any user-generated changes to TASK to adhere to i_current_stage
		for (var property in this.automator_data[i_current_stage]){
			if (this.automator_data[i_current_stage].hasOwnProperty(property)){ // Apparently a necessary 'if' statement, as explained in: http://stackoverflow.com/questions/8312459/iterate-through-object-properties
				if (property === 'MinPercentCriterion' || property === 'MinTrialsCriterion' || 
					property === 'CurrentAutomatorStageName'){
					continue 
				}
				if (!(TASK[property].toString() == this.automator_data[i_current_stage][property].toString())){

					TASK[property] = this.automator_data[i_current_stage][property]
					FLAGS.need2writeParameters=1
				}
			}
		}

		// ---------- CHECK IF STAGE TRANSITION CRITERIA HAS BEEN MET: -----------------------------------------
		// Read transition criteria from automator_data
		var transition_criterion_met = undefined
		[TASK, transition_criterion_met] = this.check_transition_criterion()
		// ---------- CHANGE TASK.STUFF TO AUTOMATOR DATA [ NEXT_STAGE ] --------------------------------------- 
		if(transition_criterion_met == true){
			
			this.TASK_ARCHIVE.push(TASK) // Archive current TASK state
			this.TASK_ARCHIVE_COUNTER++


			TRIAL_NUMBER_FROM_TASKSTREAM_START = TASK.initial_TaskStream_trial_number || 0  			

			FLAGS.need2saveParameters=1
			console.log('SUBJECT ADVANCED TO STAGE ' + (i_current_stage+1) + ' of '+(this.automator_data.length-1) + ' with ' + pctcorrect+'\% performance on n='+ntrials)
			console.log('With '+pctcorrect+'\% performance on n='+ntrials+', subject advanced to stage '+(i_current_stage+1)+' of '+(this.automator_data.length-1)+' (zero indexing) of automator.')

			// Update TASK 
			var old_imageBagsSample = TASK.ImageBagsSample
			var old_imageBagsTest = TASK.ImageBagsTest

			
			// If imagebags are changed by automator, load images at beginning of next trial. 
			if(!old_imageBagsTest.equals(TASK.ImageBagsTest) || !old_imageBagsSample.equals(TASK.ImageBagsSample)){
				FLAGS.need2loadImages = 1; 
			}
		}

		return TASK  
	}
}





function stageHash(task){
	// Returns a value that uniquely describes the automator and stage of the automator
	var current_stage_hash_string = ''
	if (task.Automator != 0){
		current_stage_hash_string = task.AutomatorFilePath+'_stage'+task.CurrentAutomatorStage; 
	}

	else{
		current_stage_hash_string = 'automator_off'
	}

	return current_stage_hash_string

	// Todo: decide whether to count trials which have TASK that is consistent with an automator stage, as being part of that stage
}





