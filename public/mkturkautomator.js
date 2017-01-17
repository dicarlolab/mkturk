// ***NOTE****
// Add list of automator controlled params to mkturkparams.js

//============== UPDATESRTASK ============== UPDATESRTASK ============== UPDATESRTASK ============ //
function updateSRTask(writestr){

	var default_objectgrid = [2, 8, 0, 6] 
	function get_obj_grid(n){
		// Returns first n elements of default_objectgrid
		return default_objectgrid.slice(0, n)
	}

//============== 1-DEFINE TRAINING PHASES ================//
	function touch(mintrials){
		var vals = {
		currentAutomatorStageName: 'touch',  // todo: log stagename as a meta field for each trial
		rewardStage: 0,
		fixationmove: 0, 
		fixationScale: 1,
		sampleON: 200, 
		keepSampleON: 0, 
		samplegrid: 4, 
		objectgrid: [2, 8], 
		imageFolderSample: 17, 
		nway: 1, 
		sampleScale: 0.75,
		testScale: 0.75,
		objectlist: [0, 1], 
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals
	}

	function movingtouch(mintrials){
		var vals = {currentAutomatorStageName: 'movingtouch', 
		rewardStage: 0,
		fixationmove: 3000, // 
		fixationScale: 1,
		sampleON: 200, // ms - how long does the sample image stay on
		keepSampleON: 0, // Bool - keep it on forever?
		samplegrid: 4, // index of sample in a 3x3, down-right indexed grid starting at 1
		objectgrid: [2, 8], // array of indices for the response images of each object (indexed in same order as param "TestedObjects")
		imageFolderSample: 17, // reference to folder from where to get sample (stimulus) images
		nway: 1, 
		sampleScale: 0.75,
		testScale: 0.75,
		objectlist: [0, 1], 
		minpctcorrect: 80, // purely internal for state transition, it seems
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals 
	}

	function nodistractorSR(mintrials, objectlist){
			// } = [0, 1]){
		var vals = {
		currentAutomatorStageName: 'nodistractorSR', 
		rewardStage: 1,
		fixationmove: 0, // 
		fixationScale: 1,
		sampleON: 200, // ms - how long does the sample image stay on
		keepSampleON: 1, // Bool - keep it on forever?
		samplegrid: 4, // index of sample in a 3x3, down-right indexed grid starting at 1
		objectgrid: get_obj_grid(objectlist.length), // array of indices for the response images of each object (indexed in same order as param "TestedObjects")
		imageFolderSample: 17, // reference to folder from where to get sample (stimulus) images
		nway: objectlist.length, 
		sampleScale: 0.625,
		testScale: 0.625,
		objectlist: objectlist, 
		minpctcorrect: 75, // purely internal for state transition, it seems
		mintrials: mintrials,
		hidetestdistractors: 1
		}
		return vals
	}

	function spatialSR(mintrials, nway, objectlist){
		// nway = 1, objectlist = [0, 1]){
		var vals = {
		currentAutomatorStageName: 'spatialSR'+nway.toString()+'ways', 
		rewardStage: 1,
		fixationmove: 0, // 
		fixationScale: 1,
		sampleON: 200, // ms - how long does the sample image stay on
		keepSampleON: 1, // Bool - keep it on forever?
		samplegrid: 4, // index of sample in a 3x3, down-right indexed grid starting at 1
		objectgrid: get_obj_grid(objectlist.length), // array of indices for the response images of each object (indexed in same order as param "TestedObjects")
		imageFolderSample: 17, // reference to folder from where to get sample (stimulus) images
		nway: nway, 
		sampleScale: 0.625,
		testScale: 0.625,
		objectlist: objectlist, 
		minpctcorrect: 75, // purely internal for state transition, it seems
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals
	}

	function delaySR(mintrials,nway,objectlist){
	// nway = 2, objectlist = [0,1]){
		var vals = {
		currentAutomatorStageName: 'delaySR_2way'+nway.toString()+'ways', 
		rewardStage: 1,
		fixationmove: 0, 
		fixationScale: 1,
		sampleON: 500, 
		keepSampleON: 0, 
		samplegrid: 4, 
		objectgrid: get_obj_grid(objectlist.length), 
		imageFolderSample: 17, 
		nway: nway, 
		sampleScale: 0.625,
		testScale: 0.625,
		objectlist: objectlist, 
		minpctcorrect: 80, // purely internal for state transition, it seems
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals
	}

	function stageSR(minpctcorrect, mintrials, sample_foldernum, objectlist){
	// assumes nway = 2
	// C = criterion performance [0, 100]
		var nway = objectlist.length
		var vals = {
		currentAutomatorStageName: 'SR'+nway.toString()+'ways', 
		rewardStage: 1,
		fixationmove: 0, 
		fixationScale: 0.5,
		sampleON: 100, 
		keepSampleON: 0, 
		samplegrid: 4, 
		objectgrid: get_obj_grid(objectlist.length), 
		imageFolderSample: sample_foldernum, 
		nway: nway, 
		sampleScale: 0.6262, // for 8degrees visual angle; 8inches viewing distance; 512x512 image; 287.51 dpi (samsung galaxy 10.5). 
		testScale: 0.55,
		objectlist: objectlist, 
		minpctcorrect: minpctcorrect, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals
	}


	var ntrials=500
	//// Define sequence of stages
	var phase_sequence = [touch(100), 
							 movingtouch(400), 
							 nodistractorSR(ntrials, [0, 3]), 
							 spatialSR(ntrials, 2, [0, 3]), 
							 spatialSR(ntrials, 3, [0, 3, 7]), 
							 spatialSR(ntrials, 4, [0, 3, 7, 5]), 
							 delaySR(ntrials, 4, [0, 3, 7, 5]),
							 nodistractorSR(ntrials, [1, 2]), 
							 spatialSR(ntrials, 2, [1, 2]), 
							 spatialSR(ntrials, 3, [1, 2, 4]), 
							 spatialSR(ntrials, 4, [1, 2, 4, 6]), 
							 delaySR(ntrials, 4, [1, 2, 4, 6]),
							 ]

	 

	 var phase_sequence = []
	 for (var phase_i = 0; phase_i<number_automator_stages; phase_i++){

	 	// Input arguments: minpctcorrect, mintrials, sample_foldernum, objectlist
	 	phase_sequence.push(stageSR(
	 		minpctcorrect_sequence[phase_i], 
	 		mintrials_sequence[phase_i], 
	 		sample_foldernum_sequence[phase_i], 
	 		objectlist_sequence[phase_i]));
	 }


	var trainingstages = {
		currentAutomatorStageName: [],
		rewardStage: [],
		fixationmove: [],
		fixationScale: [],
		sampleON: [],
		keepSampleON: [],
		samplegrid: [],
		objectgrid: [],
		imageFolderSample: [],
		nway: [], 
		sampleScale: [],
		testScale: [],
		objectlist: [],
		minpctcorrect: [],
		mintrials: [],
		hidetestdistractors: [],
	}
	
	for (var i=0; i<=phase_sequence.length-1; i++){
		for (var p=0; p<=SRautomatorparams.length-1; p++){
			trainingstages[SRautomatorparams[p]][i] = 
				phase_sequence[i][ORautomatorparams[p]]
		}
		trainingstages.minpctcorrect[i]=phase_sequence[i].minpctcorrect
		trainingstages.mintrials[i]=phase_sequence[i].mintrials
	}
//============== 1-DEFINE TRAINING PHASES (end) ================//

//============== 2-CHECK CURRENT STAGE ================//
	// Rather than implicitly inferring current training stage based on the state of params.txt, 
	// get current stage by looking at a new variable "currentAutomatorStage", specified in params file. 
	// Based on that parameter, update the rest of the params.txt file if there are discrepancies.
	trainingstages.current = trial.currentAutomatorStage; 

	var i = trainingstages.current
	var samestage = true
	for (p=0; p<SRautomatorparams.length - 1; p++){
		if ( trainingstages[SRautomatorparams[p]][i].toString() != 
			  trial[SRautomatorparams[p]].toString() )
			samestage = false
	}

	if (samestage == true){
			//do nothing
			trial.currentAutomatorStageName = trainingstages.currentAutomatorStageName[trainingstages.current]
	}
	else{
		// Current state of trial.[stuff] is incorrect; update parameters & reload images.
		trial.need2writeParameters=1
		trial.automatorstagechange=1
		for (p=0; p<=ORautomatorparams.length-1; p++){
			trial[ORautomatorparams[p]] = trainingstages[ORautomatorparams[p]][i]
		}
		console.log('Automator updated trial.[stuff] because of discrepancy between automator and params.')
	}

	if (writestr == "readtaskstageonly"){
		return trainingstages.current;		
	}
//============== 2-CHECK CURRENT STAGE (end) ================//

//============== 3-COMPUTE PERFORMANCE ================//
	var startingindex = -1;
	for (var i = 0; i < trialhistory.trainingstage.length; i++){
		if (typeof(trialhistory.trainingstage[i]) == "undefined"){
			// Do nothing 
		}
		else if (
				trialhistory.trainingstage[i] == trainingstages.current 
				&& startingindex == -1 
				&& trialhistory.automator_filepath[i] == trial.automatorFilePath){ 
			startingindex = i;
		}
		else if (trialhistory.trainingstage[i] != trainingstages.current){ 
			startingindex = -1; 
		}
		else if (trialhistory.automator_filepath[i] != trial.automatorFilePath){ 
			startingindex = -1; 
		}
	}
	trialhistory.startingindex=startingindex

	var ntrial=0;
	var ncorrect=0;
	var pctcorrect
	if (startingindex == -1){
		pctcorrect = 0;
	}
	else{ //take running average
		var ncompleted = trialhistory.correct.length - startingindex;
		if (ncompleted > trainingstages.mintrials[trainingstages.current]){
			startingindex = trialhistory.correct.length - trainingstages.mintrials[trainingstages.current];
		}
		for (var i=startingindex; i<=trialhistory.correct.length-1; i++)
		{
			if (trialhistory.correct[i]==1){ncorrect++;}
			ntrial++;
		}
		pctcorrect = 100 * ncorrect/ntrial;
	}
	trialhistory.trainingstagename = trainingstages.currentAutomatorStageName[trainingstages.current]
	trialhistory.pctcorrect = pctcorrect
	trialhistory.startingindex = startingindex
	trialhistory.ntrials_running = ntrial
	trialhistory.mintrials = trainingstages.mintrials[trainingstages.current]
	trialhistory.minpctcorrect = trainingstages.minpctcorrect[trainingstages.current]
//============== 3-COMPUTE PERFORMANCE (end) ================//

//============== 4-UPDATE STAGE ================//
	//Determine if updating stage and/or reward
	var updatingstage=0;

	if (pctcorrect >= trainingstages.minpctcorrect[trainingstages.current] && 
		ntrial >= trainingstages.mintrials[trainingstages.current] && 
		trainingstages.current < trainingstages.sampleON.length-1){
		updatingstage=1;
		trainingstages.current++;
	}

	if (updatingstage==1){

		// trial.need2loadParameters=1;
		trial.need2writeParameters=1;
		trial.automatorstagechange=1

		trial.currentAutomatorStage = trainingstages.current
		trial.currentAutomatorStageName = trainingstages.currentAutomatorStageName[trainingstages.current]

		//update training stage
		for (p=0; p<=SRautomatorparams.length-1; p++){
			trial[SRautomatorparams[p]] = trainingstages[SRautomatorparams[p]][trainingstages.current]
		}
		console.log('Automator updated trial.[stuff] because of stage change')

		//update trial history
		trialhistory.trainingstagename = trainingstages.currentAutomatorStageName[trainingstages.current]
		trialhistory.pctcorrect = 0
		trialhistory.startingindex = -1
		trialhistory.ntrials_running = 0
		trialhistory.mintrials = trainingstages.mintrials[trainingstages.current]
		trialhistory.minpctcorrect = trainingstages.minpctcorrect[trainingstages.current]
//============== 4-UPDATE STAGE (end) ================//
	}
	else{
		return
	}
}
//============== UPDATESRTASK ============== UPDATESRTASK ============== UPDATESRTASK ============ //

//============== UPDATEORTASK ============== UPDATEORTASK ============== UPDATEORTASK ============ //
function updateORTask(writestr){
// STAGES:
// (1a) touch
// (1b) movingtouch
// (1c) FRtouch
// (2a) spatialmatch
// (2b) delayedmatch
// (3a) var1match_set1
// (3b) var2match_set1
// (3c) var3match_set1
// (4a) var3match_set2
// (4b) var3match_set3
// (5) var3match_24obj

//============== 1-TRAINING PHASES ================//
	function touch(mintrials){
		var vals = {
		currentAutomatorStageName: 'touch',  // todo: log stagename as a meta field for each trial
		rewardStage: 0,
		fixationmove: 0, 
		fixationScale: 2,
		fixationusessample: 0,
		nfixations: 1,
		ngridpoints: 3,
		gridscale: 2,
		sampleON: 200, 
		keepSampleON: 0,
		fixationgridindex: 4, 
		samplegrid: 4, 
		objectgrid: [], 
		imageFolderSample: 0, 
		nway: 2, 
		sampleScale: 1,
		testScale: 1,
		objectlist: [0, 1], 
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals
	}

	function movingtouch(mintrials){
		var vals = {
		currentAutomatorStageName: 'movingtouch', 
		rewardStage: 0,
		fixationmove: 3000, //fixation dot changes location every 3 seconds
		fixationScale: 1.5,
		fixationusessample: 0,
		nfixations: 1,
		ngridpoints: 3,
		gridscale: 1.5,
		sampleON: 200, 
		keepSampleON: 0, 
		fixationgridindex: 4, 
		samplegrid: 4, 
		objectgrid: [], 
		imageFolderSample: 0, 
		nway: 2, 
		sampleScale: 1,
		testScale: 1,
		objectlist: [0, 1], 
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals 
	}

	function frtouch(mintrials){
		var vals = {
		currentAutomatorStageName: 'frtouch', 
		rewardStage: 0,
		fixationmove: 0,
		fixationScale: 1,
		fixationusessample: 1,
		nfixations: 5,
		ngridpoints: 3,
		gridscale: 1,
		sampleON: 200, 
		keepSampleON: 0, 
		fixationgridindex: 4, 
		samplegrid: 4, 
		objectgrid: [], 
		imageFolderSample: 0, 
		nway: 2, 
		sampleScale: 1,
		testScale: 1,
		objectlist: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals 
	}

	function spatialmatch(mintrials){
		var vals = {
		currentAutomatorStageName: 'spatialmatch', 
		rewardStage: 1,
		fixationmove: 0,
		fixationScale: 1,
		fixationusessample: 1,
		nfixations: 5,
		ngridpoints: 3,
		gridscale: 1,
		sampleON: 200, 
		keepSampleON: 1, 
		fixationgridindex: 4, 
		samplegrid: 4, 
		objectgrid: [], 
		imageFolderSample: 0, 
		nway: 2, 
		sampleScale: 1,
		testScale: 1,
		objectlist: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals 
	}

	function delayedmatch(mintrials){
		var vals = {
		currentAutomatorStageName: 'delayedmatch', 
		rewardStage: 1,
		fixationmove: 0,
		fixationScale: 1,
		fixationusessample: 1,
		nfixations: 5,
		ngridpoints: 3,
		gridscale: 1,
		sampleON: 200, 
		keepSampleON: 0, 
		fixationgridindex: 4, 
		samplegrid: 4, 
		objectgrid: [], 
		imageFolderSample: 0, 
		nway: 2, 
		sampleScale: 1,
		testScale: 1,
		objectlist: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals 
	}

	function var1match_set1(mintrials){
		var vals = {
		currentAutomatorStageName: 'var1match_set1', 
		rewardStage: 1,
		fixationmove: 0,
		fixationScale: 1,
		fixationusessample: 0,
		nfixations: 1,
		ngridpoints: 3,
		gridscale: 1,
		sampleON: 500, 
		keepSampleON: 0, 
		fixationgridindex: 5, 
		samplegrid: 4, 
		objectgrid: [], 
		imageFolderSample: 6, 
		nway: 2, 
		sampleScale: 1,
		testScale: 1,
		objectlist: [0,1,2,3,4,5,6,7], 
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals 
	}

	function var2match_set1(mintrials){
		var vals = {
		currentAutomatorStageName: 'var2match_set1', 
		rewardStage: 1,
		fixationmove: 0,
		fixationScale: 1,
		fixationusessample: 0,
		nfixations: 1,
		ngridpoints: 3,
		gridscale: 1,
		sampleON: 200, 
		keepSampleON: 0, 
		fixationgridindex: 5, 
		samplegrid: 4, 
		objectgrid: [], 
		imageFolderSample: 7, 
		nway: 2, 
		sampleScale: 1,
		testScale: 1,
		objectlist: [0,1,2,3,4,5,6,7], 
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals 
	}

	function var3match_set1(mintrials){
		var vals = {
		currentAutomatorStageName: 'var3match_set1', 
		rewardStage: 1,
		fixationmove: 0,
		fixationScale: 1,
		fixationusessample: 0,
		nfixations: 1,
		ngridpoints: 3,
		gridscale: 1,
		sampleON: 200, 
		keepSampleON: 0, 
		fixationgridindex: 5, 
		samplegrid: 4, 
		objectgrid: [], 
		imageFolderSample: 8, 
		nway: 2, 
		sampleScale: 1,
		testScale: 1,
		objectlist: [0,1,2,3,4,5,6,7], 
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals 
	}


	function var3match_set2(mintrials){
		var vals = {
		currentAutomatorStageName: 'var3match_set2', 
		rewardStage: 1,
		fixationmove: 0,
		fixationScale: 1,
		fixationusessample: 0,
		nfixations: 1,
		ngridpoints: 3,
		gridscale: 1,
		sampleON: 200, 
		keepSampleON: 0, 
		fixationgridindex: 5, 
		samplegrid: 4, 
		objectgrid: [], 
		imageFolderSample: 8, 
		nway: 2, 
		sampleScale: 1,
		testScale: 1,
		objectlist: [8,9,10,11,12,13,14,15], 
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals 
	}

	function var3match_set3(mintrials){
		var vals = {
		currentAutomatorStageName: 'var3match_set3', 
		rewardStage: 1,
		fixationmove: 0,
		fixationScale: 1,
		fixationusessample: 0,
		nfixations: 1,
		ngridpoints: 3,
		gridscale: 1,
		sampleON: 200, 
		keepSampleON: 0, 
		fixationgridindex: 5, 
		samplegrid: 4, 
		objectgrid: [], 
		imageFolderSample: 8, 
		nway: 2, 
		sampleScale: 1,
		testScale: 1,
		objectlist: [16,17,18,19,20,21,22,23], 
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals 
	}

	function var3match_obj24(mintrials){
		var vals = {
		currentAutomatorStageName: 'var3match_obj24', 
		rewardStage: 1,
		fixationmove: 0,
		fixationScale: 1,
		fixationusessample: 0,
		nfixations: 1,
		ngridpoints: 3,
		gridscale: 1,
		sampleON: 200, 
		keepSampleON: 0, 
		fixationgridindex: 5, 
		samplegrid: 4, 
		objectgrid: [], 
		imageFolderSample: 8, 
		nway: 2, 
		sampleScale: 1,
		testScale: 1,
		objectlist: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], 
		minpctcorrect: 80, 
		mintrials: mintrials,
		hidetestdistractors:0, 
		}
		return vals 
	}

	var ntrials=5
	//// Define sequence of stages
	var phase_sequence = [
				touch(ntrials), 
				movingtouch(ntrials),
				frtouch(ntrials),
				spatialmatch(ntrials),
				delayedmatch(ntrials),
				var1match_set1(ntrials),
				var2match_set1(ntrials),
				var3match_set1(ntrials),
				var3match_set2(ntrials),
				var3match_set3(ntrials),
				var3match_obj24(ntrials),
			]

	var trainingstages = {
		currentAutomatorStageName: [],
		rewardStage: [],
		fixationmove: [],
		fixationScale: [],
		nfixations: [],
		sampleON: [],
		keepSampleON: [],
		ngridpoints: [],
		gridscale: [],
		fixationgridindex: [], 
		samplegrid: [],
		objectgrid: [],
		fixationusessample: [],
		imageFolderSample: [],
		nway: [], 
		sampleScale: [],
		testScale: [],
		objectlist: [],
		minpctcorrect: [],
		mintrials: [],
		hidetestdistractors: [],
	}
	
	for (var i=0; i<=phase_sequence.length-1; i++){
		for (var p=0; p<=ORautomatorparams.length-1; p++){
			trainingstages[ORautomatorparams[p]][i] = 
				phase_sequence[i][ORautomatorparams[p]]
		}
		trainingstages.minpctcorrect[i]=phase_sequence[i].minpctcorrect
		trainingstages.mintrials[i]=phase_sequence[i].mintrials
	}
//============== 1-TRAINING PHASES (end) ================//

//============== 2-CHECK CURRENT STAGE ================//
	// Rather than implicitly inferring current training stage based on the state of params.txt, 
	// get current stage by looking at a new variable "currentAutomatorStage", specified in params file. 
	// Based on that parameter, update the rest of the params.txt file if there are discrepancies.
	trainingstages.current = trial.currentAutomatorStage; 

	var i = trainingstages.current
	var samestage = true
	for (p=0; p<ORautomatorparams.length - 1; p++){
		if ( trainingstages[ORautomatorparams[p]][i].toString() != 
			  trial[ORautomatorparams[p]].toString() )
			samestage = false
	}

	if (samestage == true){
			//do nothing
			trial.currentAutomatorStageName = trainingstages.currentAutomatorStageName[trainingstages.current]
	}
	else{
		// Current state of trial.[stuff] is incorrect; update parameters & reload images.
		trial.need2writeParameters=1;
		trial.automatorstagechange=1
		for (p=0; p<=ORautomatorparams.length-1; p++){
			trial[ORautomatorparams[p]] = trainingstages[ORautomatorparams[p]][i]
		}
		console.log('Automator updated trial.[stuff] because of discrepancy between automator and params.')
	} // if samestage

	if (writestr == "readtaskstageonly"){
		return trainingstages.current;
	}
//============== 2-CHECK CURRENT STAGE (end) ================//

//============== 3-COMPUTE PERFORMANCE ================//
	var startingindex = -1;
	for (var i = 0; i < trialhistory.trainingstage.length; i++){
		if (typeof(trialhistory.trainingstage[i]) == "undefined"){
			// Do nothing 
		}
		else if (
				trialhistory.trainingstage[i] == trainingstages.current 
				&& startingindex == -1 
				&& trialhistory.automator_filepath[i] == trial.automatorFilePath){ 
			startingindex = i;
		}
		else if (trialhistory.trainingstage[i] != trainingstages.current){ 
			startingindex = -1; 
		}
		else if (trialhistory.automator_filepath[i] != trial.automatorFilePath){ 
			startingindex = -1; 
		}
	}
	trialhistory.startingindex=startingindex

	var ntrial=0;
	var ncorrect=0;
	var pctcorrect
	var startingindexrunning = startingindex
	if (startingindex == -1){
		pctcorrect = 0;
	}
	else{ //take running average
		var ncompleted = trialhistory.correct.length - startingindex;
		if (ncompleted > trainingstages.mintrials[trainingstages.current]){
			startingindexrunning = trialhistory.correct.length - trainingstages.mintrials[trainingstages.current];
		}
		for (var i=startingindexrunning; i<=trialhistory.correct.length-1; i++)
		{
			if (trialhistory.correct[i]==1){ncorrect++;}
			ntrial++;
		}
		pctcorrect = 100 * ncorrect/ntrial;
	}
	trialhistory.trainingstagename = trainingstages.currentAutomatorStageName[trainingstages.current]
	trialhistory.pctcorrect = pctcorrect
	trialhistory.startingindex = startingindex
	trialhistory.ntrials_running = ntrial
	trialhistory.mintrials = trainingstages.mintrials[trainingstages.current]
	trialhistory.minpctcorrect = trainingstages.minpctcorrect[trainingstages.current]
//============== 3-COMPUTE PERFORMANCE (end) ================//

//============== 4-UPDATE STAGE ================//
	//Determine if updating stage and/or reward
	var updatingstage=0;

	if (pctcorrect >= trainingstages.minpctcorrect[trainingstages.current] && 
		ntrial >= trainingstages.mintrials[trainingstages.current] && 
		trainingstages.current < trainingstages.sampleON.length-1){
		updatingstage=1;
		trainingstages.current++;
	}

	if (updatingstage==1){
		// trial.need2loadParameters=1;
		trial.need2writeParameters=1;
		trial.automatorstagechange=1

		trial.currentAutomatorStage = trainingstages.current
		trial.currentAutomatorStageName = trainingstages.currentAutomatorStageName[trainingstages.current]
		//update training stage

		for (p=0; p<=ORautomatorparams.length-1; p++){
			trial[ORautomatorparams[p]] = trainingstages[ORautomatorparams[p]][trainingstages.current]
		}
		console.log('Automator updated trial.[stuff] because of stage change')

		//update trial history
		trialhistory.trainingstagename = trainingstages.currentAutomatorStageName[trainingstages.current]
		trialhistory.pctcorrect = 0
		trialhistory.startingindex = -1
		trialhistory.ntrials_running = 0
		trialhistory.mintrials = trainingstages.mintrials[trainingstages.current]
		trialhistory.minpctcorrect = trainingstages.minpctcorrect[trainingstages.current]
//============== 4-UPDATE STAGE (end) ================//
	}
	else{
		return	
	}
}
//============== UPDATEORTASK ============== UPDATEORTASK ============== UPDATEORTASK ============ //