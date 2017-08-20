

class Automator{
	constructor(samplingStrategy){
		this.trialhistory = []
		this.samplingStrategy = samplingStrategy
		this.__initial_trial_history_on_load = undefined

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
	async build(num_prebuffer_trials){
		this.trialhistory = await DW.readTrialHistoryFromDropbox(ndatafiles2read);

		this.__initial_trial_history_on_load = await DW.readTrialHistoryFromDropbox(ndatafiles2read);

		// trialhistory.trainingstage 
		// trialhistory.starttime
		// trialhistory.response 
		// trialhistory.correct 
		// trialhistory.trialnumber 		
		this.automator_data = await DW.parseAutomatorFilefromDropbox(TASK.AutomatorFilePath)
		// await DW.saveParameterstoDropbox() 

		this.AutomatorPreBuffer = {}
		this.AutomatorPreBuffer['TrialQueue'] = {}; 


		for (var a = TASK.CurrentAutomatorStage; a < this.automator_data.length; a++){
			updateProgressbar(a/this.automator_data.length * 100)
			console.time('Stage '+a)


			var _ImageBagsSample = this._populate_default(a, 'ImageBagsSample')
			var _ImageBagsTest = this._populate_default(a, 'ImageBagsTest')
			var _samplingRNGseed = this._populate_default(a, 'samplingRNGseed')
			var _trial_num_TaskStream = this._populate_default(a, 'trial_num_TaskStream')
			
			this.AutomatorPreBuffer['TrialQueue'][a] = new TrialQueue(
				this.samplingStrategy, 
				_ImageBagsSample,
				_ImageBagsTest,
				_samplingRNGseed, 
				_trial_num_TaskStream,
				); 

			// Populate the stage's imagebuffer with some images
			await this.AutomatorPreBuffer['TrialQueue'][a].build(num_prebuffer_trials)
			console.timeEnd('Loaded stage '+a)
		}
		console.log('Done prebuffering automator stages.')
	}

	async resetToInitialLoadState(){
		this.trialhistory = this.__initial_trial_history_on_load
		this.__initial_trial_history_on_load = undefined
	}
	async monitorStage_State_and_Transition(TASK){

		// Call this at the beginning of each trial. 
		// Check for stage transitions, and if necessary, change TASK. 
		// Enforce adherence to the automator file if user has changed paramfile.

		var current_stage_hash = stageHash(TASK); 
		var i_current_stage = TASK.CurrentAutomatorStage

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
		var MinPercentCriterion = this.automator_data[i_current_stage].MinPercentCriterion;
		var MinTrialsCriterion = this.automator_data[i_current_stage].MinTrialsCriterion; 
		var CurrentAutomatorStageName = this.automator_data[i_current_stage].CurrentAutomatorStageName;

		// Calculate current pctcorrect and ntrials
		var funcreturn = computeRunningHistory(MinTrialsCriterion, current_stage_hash, this.trialhistory.trainingstage, this.trialhistory.correct)
		var pctcorrect = funcreturn[0]
		var ntrials = funcreturn[1]

		console.log('For '+ntrials+' trials, pctcorrect='+pctcorrect)

		// ---------- CHANGE TASK.STUFF TO AUTOMATOR DATA [ NEXT_STAGE ] --------------------------------------- 
		if(pctcorrect >= MinPercentCriterion && ntrials >= MinTrialsCriterion){
			TRIAL_NUMBER_FROM_TASKSTREAM_START = 0 // todo: read from disk 
			console.log('TASK_ARCHIVE.push @ stage transition')
			TASK_ARCHIVE.push(TASK) // Archive current TASK state
			TASK_ARCHIVE_COUNTER++
			// If finished final stage of automator,

			if(TASK.CurrentAutomatorStage+1 >= this.automator_data.length){
				// Stay in current stage settings, and 
				// Turn automator off
				TASK.Automator = 0; 
				TASK.CurrentAutomatorStage = 'off';
				console.log('COMPLETED FINAL STAGE, TURNING AUTOMATOR OFF')
				console.log('With '+pctcorrect+'\% performance on n='+ntrials+', subject completed the final stage '+(i_current_stage)+' of '+(this.automator_data.length-1)+' (zero indexing) of automator.')
				return TASK
			}
			else{
				// Otherwise, advance to the next stage.
				TASK.CurrentAutomatorStage = TASK.CurrentAutomatorStage + 1; 
				FLAGS.need2saveParameters=1
				console.log('SUBJECT ADVANCED TO STAGE ' + (i_current_stage+1) + ' of '+(this.automator_data.length-1) + ' with ' + pctcorrect+'\% performance on n='+ntrials)
				console.log('With '+pctcorrect+'\% performance on n='+ntrials+', subject advanced to stage '+(i_current_stage+1)+' of '+(this.automator_data.length-1)+' (zero indexing) of automator.')

				// Update TASK 
				var old_imageBagsSample = TASK.ImageBagsSample
				var old_imageBagsTest = TASK.ImageBagsTest

				for (var property in this.automator_data[i_current_stage+1]){
					if (property === 'MinPercentCriterion' || property === 'MinTrialsCriterion' ||
						property === 'CurrentAutomatorStageName'){
						continue 
					}
					if (this.automator_data[i_current_stage+1].hasOwnProperty(property)){ 
						if (!(TASK[property].toString() == this.automator_data[i_current_stage+1][property].toString())){
							console.log('\"'+property+'\" changed from '+TASK[property]+' to '+this.automator_data[i_current_stage+1][property])

							TASK[property] = this.automator_data[i_current_stage+1][property]
							
						}
					}			
				}

				// If imagebags are changed by automator, load images at beginning of next trial. 
				if(!old_imageBagsTest.equals(TASK.ImageBagsTest) || !old_imageBagsSample.equals(TASK.ImageBagsSample)){
					FLAGS.need2loadImages = 1; 
				}
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





function computeRunningHistory(mintrials, current_stage, history_trainingstage, history_corrects){
	// todo: 
	// should trials that are performed with the automator off, but with the SAME settings as an automator stage, 
	// be counted as being part of the automator? (nope, explicit is always better. -MLee. )

	if (history_trainingstage.length!=history_corrects.length){
	 	console.log('trainingstage vec. length'+history_trainingstage.length)
	 	console.log('corrects vec. length '+history_corrects.length)
 		throw('The history arrays are of different length. Check what went wrong; cannot compute performance history.')
	}

	// returns 
	// The at most current-mintrials trial which starts a contiguous sequence to current trial with the same trainingstage/automatorfilepath as the current state,  

	// trialhistory is assumed to include all trials except the current one
	// It is arranged in [oldest, ..., current-1] order


	// Starting from the most recent trial, move backwards until you hit either 1) mintrials or 2) another automatorstage
	var startingindex = history_trainingstage.length;
	for (var i = history_trainingstage.length-1; i >= 0; i--){
		if (history_trainingstage[i] == current_stage){
			if(history_trainingstage.length - i <= mintrials){
				startingindex = i;
			}
			else if(history_trainingstage.length - i > mintrials){
				break; 
			}
			else{throw "Something went wrong"}
		}

		else if (history_trainingstage[i] != current_stage){
			break
		}
		else{
			console.log(history_trainingstage[i])
			console.log(current_stage)
			throw "Something went wrong 2"
		}
	}

	var ndiscrepancy = 0
	var ncountedtrials = 0
	for (var i = startingindex; i<history_trainingstage.length; i++){
		if (history_trainingstage[i] != current_stage){
			ndiscrepancy = ndiscrepancy+1
			console.log(history_trainingstage[i])
			console.log(current_stage)
			throw "Something went wrong 3"
		}
		ncountedtrials = ncountedtrials+1
	}

	var ntrial=0;
	var ncorrect=0;
	var pctcorrect = NaN
	if (startingindex == history_corrects.length){
		pctcorrect = 0;
		return [pctcorrect, ntrial]
	}

	for (var i=startingindex; i<history_corrects.length; i++){
		if (history_corrects[i]==1){
			ncorrect = ncorrect+1;
		}
		
		ntrial++;
	}
	pctcorrect = 100 * ncorrect/ntrial;
	return [pctcorrect, ntrial]
}