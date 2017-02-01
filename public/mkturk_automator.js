async function automateTask(automator_data, trialhistory){
	// Input: automator array; trialhistory (.trainingstage, .correct), current_automator_stage
	// Globals: trial.currentAutomatorStage (for reading); trial.stuff (for writing to)

	// Actions: if [mintrials of minpctcorrect] has been achieved, move on to the next automator stage. 
	// update trial.stuff 
	// Set flags for updating params file; reloading images (if necessary), starting new textfile, etc.


	// ---------- IF THERE ARE DISCREPANCIES, SET TRIAL.STUFF TO AUTOMATOR DATA [ CURRENT_STAGE ] ---------- 
	// Check for consistency between automator_data[current_stage] and trial.stuff: 
	// i_current_stage is the master; the ground truth for what trial.stuff should be. 

	var i_current_stage = TASK.automatorStage; 
	var current_stage = stageHash(TASK); 

	for (var property in automator_data[i_current_stage]){
		if (automator_data[i_current_stage].hasOwnProperty(property)){ // Apparently a necessary 'if' statement, as explained in: http://stackoverflow.com/questions/8312459/iterate-through-object-properties
			if (property === 'minPercentCriterion' || property === 'minTrialsCriterion'){
				continue 
			}

			if (!TASK[property].equals(automator_data[i_current_stage][property])){
				console.log('Discrepancy between TASK.'+property+'='+TASK[property]+' and automator_data['+i_current_stage+']['+property+']='+automator_data[i_current_stage][property])
				TASK[property] = automator_data[i_current_stage][property]
				FLAGS.need2writeParameters=1
			}
		}	
	}

	// ---------- CHECK IF STAGE TRANSITION CRITERIA HAS BEEN MET: -----------------------------------------
	// Read transition criteria from automator_data
	var minpctcorrect = automator_data[i_current_stage].minPercentCriterion; 
	var mintrials = automator_data[i_current_stage].minTrialsCriterion; 

	// Calculate current pctcorrect and ntrials
	var funcreturn = computeRunningHistory(mintrials, current_stage, trialhistory.trainingstage, trialhistory.correct)
	pctcorrect = funcreturn[0]
	ntrials = funcreturn[1]

	console.log('For '+ntrials+' trials, pctcorrect='+pctcorrect)

	// ---------- CHANGE TASK.STUFF TO AUTOMATOR DATA [ NEXT_STAGE ] --------------------------------------- 
	// If transition criteria are met, 
	if(pctcorrect > minpctcorrect && ntrials >= mintrials){

		
		// If finished final stage of automator,
		if(automator_data.length <= TASK.automatorStage+1){
			// Stay in current stage settings, and 
			// Turn automator off
			TASK.automator = 0; 
			console.log('With '+pctcorrect+'\% performance on n='+ntrials+', subject completed the final stage '+(i_current_stage)+' of '+(automator_data.length-1)+' (zero indexing) of automator.')
			console.log('Turning automator OFF.')
			return 
		}

		// Otherwise, advance to the next stage.
		TASK.automatorStage = TASK.automatorStage + 1; 
		console.log('With '+pctcorrect+'\% performance on n='+ntrials+', subject advanced to stage '+(i_current_stage+1)+' of '+(automator_data.length-1)+' (zero indexing) of automator.')

		// Save behavior with current TASK, ENV, and TRIAL before moving on. 
		await writeBehaviortoDropbox(TASK, ENV, TRIAL); 

		// Reset tracking variables 
		purgeTrackingVariables()

		for (var property in automator_data[i_current_stage+1]){
			if (property === 'minPercentCriterion' || property === 'minTrialsCriterion'){
				continue 
			}

			if (automator_data[i_current_stage+1].hasOwnProperty(property)){ 
				if (!TASK[property].equals(automator_data[i_current_stage+1][property])){
					console.log('\"'+property+'\" changed from '+TASK[property]+' to '+automator_data[i_current_stage+1][property])

					TASK[property] = automator_data[i_current_stage+1][property]
					
					// If imagebags are changed by automator, load images at beginning of next trial. 
					if (property === 'imageBagsSample' || property === 'imageBagsTest'){
						FLAGS.need2loadImages = 1; 
					}
				}
			}			
		}

		
		FLAGS.need2writeParameters=1
	}

	return 
}


function stageHash(task){
	// Returns a value that uniquely describes the automator and stage of the automator
	var current_stage_hash_string = ''
	if (task.automator != 0){
		current_stage_hash_string = task.automatorFilePath+'_stage'+task.automatorStage; 
	}

	else{
		current_stage_hash_string = 'automator_off'
	}

	return current_stage_hash_string

	// Todo: decide whether to count trials which have TASK that is consistent with an automator stage, as being part of that stage
}


async function readTrialHistoryFromDropbox(filepaths){
	
	var trialhistory = {}
	trialhistory.trainingstage = []
	trialhistory.correct = []
	trialhistory.tstart = []

	if (typeof filepaths == "string"){
		filepaths = [filepaths]
	}

	// Sort in ascending order, such that the OLDEST file is FIRST in trialhistory 
	// trialhistory: [oldest TRIALs... most recent TRIALs]
	filepaths.sort()

	// Iterate over files and add relevant variables
	for (var i = 0; i< filepaths.length; i++){
		datastring = await loadTextFilefromDropbox(filepaths[i])
		data = JSON.parse(datastring)
		task_data = data[0]
		trial_data = data[1]

		var numTRIALs = trial_data.response.length; 
		// Iterate over TRIALs
		for (var i_trial = 0; i_trial<numTRIALs; i_trial++){
			// Correct/incorrect TRIAL
			var correct = Number(trial_data.response[i_trial] == trial_data.correctItem[i_trial])
			trialhistory.correct.push(correct)

			// Current automator stage 
			var current_stage = stageHash(task_data)
			trialhistory.trainingstage.push(current_stage)

			// Start time (fixation dot appears) of trial 
			var starttime = trial_data.tstart[i_trial]
			trialhistory.tstart.push(starttime)
		}
	}
	console.log('Read '+trialhistory.trainingstage.length+' past trials from ', filepaths.length, ' datafiles.')
	return trialhistory
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

