//Behavior automation

//reward calculated as a function of body weight, calibrated to maximum for 3000 trials
//reward doubles at the start of each new stage
//move to next stage once hit 75% for last 500 trials

//read parameters & current performance from last data file
//write a new parameter file
//continue with task html


// starttask - zero variables, dialog box, look for data file/update paramfile, otw load paramfile, load images
// updatetask - if above 75%, update paramfile, zero tracking variables, load paramfile, if needed load images


// TASK STRUCTURE (NEW)
// LARGE SIZE
// 	(1) Touch
//	(2) Touch moving
// 	(3) 2 touch (no sample)
//	(4) Match -- Spatially dissociated sample (stays on)
// 	(5) Delayed match -- Temporally dissociated sample (500 ms)
// TASK DIFFICULTY
//	(6) 200ms
//	(7) var1 (no pos)
//	(8) var2
//	(9) var3 (background)
// SMALL SIZE
//	(10)
// NEW OBJECTS


function updateSRTask(writestr){
	//imagefoldersample
	//objectlist

	var default_objectgrid = [2, 8, 0, 6] 
	function get_obj_grid(n){
		// Returns first n elements of default_objectgrid
		return default_objectgrid.slice(0, n)
	}

	// Define training phases
	function touch(mintrials){
		var vals = {
		stagename: 'touch',  // todo: log stagename as a meta field for each trial
		rewardStage: 0,
		fixationmove: 0, 
		fixationradius: 120,
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
		var vals = {stagename: 'movingtouch', 
		rewardStage: 0,
		fixationmove: 3000, // 
		fixationradius: 120,
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

	function nodistractorSR(mintrials, objectlist = [0, 1]){
		var vals = {
		stagename: 'nodistractorSR', 
		rewardStage: 1,
		fixationmove: 0, // 
		fixationradius: 120,
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

	function spatialSR(mintrials, nway = 1, objectlist = [0, 1]){
		var vals = {
		stagename: 'spatialSR'+nway.toString()+'ways', 
		rewardStage: 1,
		fixationmove: 0, // 
		fixationradius: 120,
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

	function delaySR(mintrials, nway = 2, objectlist = [0,1]){
		var vals = {
		stagename: 'delaySR_2way'+nway.toString()+'ways', 
		rewardStage: 1,
		fixationmove: 0, 
		fixationradius: 120,
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


	
/* todo: 
	// [7] Introduce 3D shape stimuli (pose variation). 
	// [8] Introduce var3 position variation. 
	// [9] Introduce var6 position variation. 
	// [10] Add backgrounds. 
*/

var ntrials=5

	//// Define sequence of stages
	var phase_sequence = [touch(ntrials), 
							 movingtouch(ntrials), 
							 nodistractorSR(ntrials, objectlist = [0, 3]), 
							 spatialSR(ntrials, nway = 2, objectlist = [0, 3]), 
							 spatialSR(ntrials, nway = 3, objectlist = [0, 3, 7]), 
							 spatialSR(ntrials, nway = 4, objectlist = [0, 3, 7, 5]), 
							 delaySR(ntrials, nway = 4, objectlist = [0, 3, 7, 5]),
							 nodistractorSR(ntrials, objectlist = [1, 2]), 
							 spatialSR(ntrials, nway = 2, objectlist = [1, 2]), 
							 spatialSR(ntrials, nway = 3, objectlist = [1, 2, 4]), 
							 spatialSR(ntrials, nway = 4, objectlist = [1, 2, 4, 6]), 
							 delaySR(ntrials, nway = 4, objectlist = [1, 2, 4, 6]),
							 ]


	var trainingstages = {
		rewardStage: [],
		fixationmove: [],
		fixationradius: [],
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
		trainingstages.rewardStage[i]=phase_sequence[i].rewardStage
		trainingstages.fixationmove[i]=phase_sequence[i].fixationmove
		trainingstages.fixationradius[i]=phase_sequence[i].fixationradius
		trainingstages.sampleON[i]=phase_sequence[i].sampleON
		trainingstages.samplegrid[i]=phase_sequence[i].samplegrid
		trainingstages.objectgrid[i]=phase_sequence[i].objectgrid
		trainingstages.keepSampleON[i]=phase_sequence[i].keepSampleON
		trainingstages.nway[i]=phase_sequence[i].nway
		trainingstages.imageFolderSample[i]=phase_sequence[i].imageFolderSample
		trainingstages.sampleScale[i]=phase_sequence[i].sampleScale
		trainingstages.testScale[i]=phase_sequence[i].testScale
		trainingstages.objectlist[i]=phase_sequence[i].objectlist
		trainingstages.minpctcorrect[i]=phase_sequence[i].minpctcorrect
		trainingstages.mintrials[i]=phase_sequence[i].mintrials
		trainingstages.hidetestdistractors[i]=phase_sequence[i].hidetestdistractors
	}

/*
//DETERMINE TASK STAGE
	//determine current training stage
	for (var i = 0; i<=trainingstages.sampleON.length-1; i++){
		if (trainingstages.rewardStage[i] == trial.rewardStage && 
			trainingstages.fixationmove[i] == trial.fixationmove && 
			trainingstages.fixationradius[i] == trial.fixationradius && 
			trainingstages.sampleON[i] == trial.sampleON && 
			trainingstages.samplegrid[i] == trial.samplegrid && 
			trainingstages.keepSampleON[i] == trial.keepSampleON && 
			trainingstages.imageFolderSample[i] == trial.imageFolderSample && 
			trainingstages.sampleScale[i] == trial.sampleScale && 
			trainingstages.testScale[i] == trial.testScale && 
<<<<<<< Updated upstream
			trainingstages.objectlist[i].toString() == trial.objectlist.toString()){
=======
			trainingstages.objectlist[i] == trial.objectlist){
>>>>>>> Stashed changes
			trainingstages.current = i;
		}
	}
*/

	// Rather than implicitly inferring current training stage based on the state of params.txt, 
	// get current stage by looking at a new variable "currentAutomatorStage", specified in params file. 
	// Based on that parameter, update the rest of the params.txt file if there are discrepancies.
	trainingstages.current = trial.currentAutomatorStage; 

	// trial.need2writeParameters=0; 

	var i = trainingstages.current
	if (trainingstages.rewardStage[i] == trial.rewardStage && 
		trainingstages.fixationmove[i] == trial.fixationmove && 
		trainingstages.fixationradius[i] == trial.fixationradius && 
		trainingstages.sampleON[i] == trial.sampleON && 
		trainingstages.samplegrid[i] == trial.samplegrid && 
		trainingstages.objectgrid[i].toString() == trial.objectgrid.toString() && 
		trainingstages.keepSampleON[i] == trial.keepSampleON && 
		trainingstages.nway[i] == trial.nway && 
		trainingstages.imageFolderSample[i] == trial.imageFolderSample && 
		trainingstages.sampleScale[i] == trial.sampleScale && 
		trainingstages.testScale[i] == trial.testScale && 
		trainingstages.hidetestdistractors[i] == trial.hidetestdistractors && 
		trainingstages.objectlist[i].toString() == trial.objectlist.toString())
		{
			//do nothing
	}
	else{
		// Loaded up with wrong images & parameters, need to update parameters & reload images
		trial.need2writeParameters=1;
		trial.automatorstagechange=1


		trial.rewardStage = trainingstages.rewardStage[i]
		trial.fixationmove = trainingstages.fixationmove[i]
		trial.fixationradius = trainingstages.fixationradius[i]
		trial.sampleON = trainingstages.sampleON[i]
		trial.samplegrid = [trainingstages.samplegrid[i]] // why is this in brackets?
		trial.objectgrid = trainingstages.objectgrid[i]
		trial.keepSampleON = trainingstages.keepSampleON[i]
		trial.nway = trainingstages.nway[i]
		trial.imageFolderSample = trainingstages.imageFolderSample[i]
		trial.sampleScale = trainingstages.sampleScale[i]
		trial.testScale = trainingstages.testScale[i]
		trial.hidetestdistractors = trainingstages.hidetestdistractors[i] 
		trial.objectlist = trainingstages.objectlist[i] //todo
	}



	// "RewardStage":1,
	// "FixationMove":0,
	// "FixationRadius":60,
	// "SampleON":200,
	// "SampleGridIndex":[4],
	// "KeepSampleON":0,
	// "ImageFolderSample":1,
	// "SampleScale":2,
	// "TestScale":2,
	// "TestedObjects":[7,8],


	// [{"Weight":5.6
	// "Species":"macaque"
	// "Homecage":1
	// "Separated":1
	// "Liquid":1,
	// "Tablet":"samsung10",
	// "Pump":3,
	// "Nway":2,
	// "TestGridIndex":[1,7],
	// "RewardPer1000Trials":90,
	// "PunishTimeOut":3000,
	// "FixationDuration":30,
	// "SampleOFF":100,
	// "HideTestDistractors":0,
	// "SampleBlockSize":0,
	// "NStickyResponse":5,
	// "ImageFolderTest":0,
	// "Automator":0}]

	if (writestr == "readtaskstageonly"){
		return trainingstages.current;		
	}

//COMPUTE PERFORMANCE
	var startingindex = -1;
	for (var i = 0; i < trialhistory.trainingstage.length; i++){
		if (typeof(trialhistory.trainingstage[i]) == "undefined"){
		}
		else if (trialhistory.trainingstage[i] == trainingstages.current && startingindex == -1){
			startingindex = i;
		}
		else if (trialhistory.trainingstage[i] != trainingstages.current){
			startingindex = -1; //reset starting index, not a continuous block
		}
	}

	var ntrial=0;
	var ncorrect=0;
	var pctcorrect
	if (startingindex == -1){
		pctcorrect = 0;
	}
	else{
		//take running average
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
		//update training stage
		trial.rewardStage = trainingstages.rewardStage[trainingstages.current]
		trial.fixationmove = trainingstages.fixationmove[trainingstages.current]
		trial.fixationradius = trainingstages.fixationradius[trainingstages.current]
		trial.sampleON = trainingstages.sampleON[trainingstages.current]
		trial.samplegrid = [trainingstages.samplegrid[trainingstages.current]] // why is this in brackets?
		trial.objectgrid = trainingstages.objectgrid[trainingstages.current]
		trial.keepSampleON = trainingstages.keepSampleON[trainingstages.current]
		trial.nway = trainingstages.nway[trainingstages.current]
		trial.imageFolderSample = trainingstages.imageFolderSample[trainingstages.current]
		trial.sampleScale = trainingstages.sampleScale[trainingstages.current]
		trial.testScale = trainingstages.testScale[trainingstages.current]
		trial.hidetestdistractors = trainingstages.hidetestdistractors[trainingstages.current] 
		trial.objectlist = trainingstages.objectlist[trainingstages.current] //todo

	}
	else{
//		// trial.need2loadParameters=0;
		return
	}
}







function updateTask3(writestr){
	var defaultValues = {
		rewardStage: 1,
		fixationmove: 0,
		fixationradius: 60,
		sampleON: 200,
		samplegrid: 4,
		keepSampleON: 0,
		imageFolderSample: 8,
		sampleScale: 1,
		testScale: 1,
		objgroup: 0,
		minpctcorrect: 75,
		mintrials: 1000,
	}

	var trainingstages = {
		rewardStage: [],
		fixationmove: [],
		fixationradius: [],
		sampleON: [],
		samplegrid: [],
		keepSampleON: [],
		imageFolderSample: [],
		sampleScale: [],
		testScale: [],
		objgroup: [],
		minpctcorrect: [],
		mintrials: [],
	}
	
	var nstages=13
	for (var i=0; i<=nstages-1; i++){
		trainingstages.rewardStage[i]=defaultValues.rewardStage
		trainingstages.fixationmove[i]=defaultValues.fixationmove
		trainingstages.fixationradius[i]=defaultValues.fixationradius
		trainingstages.sampleON[i]=defaultValues.sampleON
		trainingstages.samplegrid[i]=defaultValues.samplegrid
		trainingstages.keepSampleON[i]=defaultValues.keepSampleON
		trainingstages.imageFolderSample[i]=defaultValues.imageFolderSample
		trainingstages.sampleScale[i]=defaultValues.sampleScale
		trainingstages.testScale[i]=defaultValues.testScale
		trainingstages.objgroup[i]=defaultValues.objgroup
		trainingstages.minpctcorrect[i]=defaultValues.minpctcorrect
		trainingstages.mintrials[i]=defaultValues.mintrials
	}

	// [0] touch
	trainingstages.rewardStage[0]=0; trainingstages.fixationradius[0]=120;  trainingstages.sampleScale[0]=1.5; trainingstages.testScale[0]=1.5; //var1//touch

	// [1] moving touch
	trainingstages.rewardStage[1]=0; trainingstages.fixationradius[1]=120; trainingstages.fixationmove[1]=3000;  trainingstages.sampleScale[1]=1.5; trainingstages.testScale[1]=1.5; //var1//moving touch

	// [2] match
	trainingstages.keepSampleON[2]=1; trainingstages.imageFolderSample[2]=0; trainingstages.fixationradius[2]=120; trainingstages.sampleScale[2]=2; trainingstages.testScale[2]=2; trainingstages.samplegrid[2]=4; //match

	// [3] delayed match
	trainingstages.sampleON[3] = 500; trainingstages.imageFolderSample[3]=0; trainingstages.fixationradius[3]=120; trainingstages.sampleScale[3]=2; trainingstages.testScale[3]=2;//delayed match

	// [4] var1
	trainingstages.sampleON[4] = 500; trainingstages.imageFolderSample[4]=6; trainingstages.fixationradius[4]=120; trainingstages.sampleScale[4]=2; trainingstages.testScale[4]=2; //var1

	// [5] var2
	trainingstages.imageFolderSample[5]=7; trainingstages.fixationradius[5]=120; trainingstages.sampleScale[5]=2; trainingstages.testScale[5]=2; //var2

	// [6] var3
	trainingstages.imageFolderSample[6]=8; trainingstages.fixationradius[6]=120; trainingstages.sampleScale[6]=2; trainingstages.testScale[6]=2; //var3

	// [7] small size
	trainingstages.objgroup[7]=0; //small size

	// [8] 4 objects
	trainingstages.objgroup[8]=1; //4 object

	// [9] obj0-7
	trainingstages.objgroup[9]=2; //0-7

	// [10] obj8-15
	trainingstages.objgroup[10]=3; //8-15

	// [11] obj16-23
	trainingstages.objgroup[11]=4; //16-23

	// [2] obj0-23
	trainingstages.objgroup[12]=24; //all obj

//DETERMINE TASK STAGE
	//determine current object group
	trial.objgroup = 0;
	if (trial.objectlist.length == 2 && trial.objectlist[0] == 7 && trial.objectlist[1] == 8){
		trial.objgroup = 0;
	}
	if (trial.objectlist.length == 4 && trial.objectlist[0] == 7 && trial.objectlist[1] == 8 && trial.objectlist[2] == 9 && trial.objectlist[3] == 10){
		trial.objgroup = 1;
	}
	if (trial.objectlist.length == 8 && trial.objectlist[0] == 0){
		trial.objgroup = 2;
	}
	if (trial.objectlist.length == 8 && trial.objectlist[0] == 8){
		trial.objgroup = 3;
	}
	if (trial.objectlist.length == 8 && trial.objectlist[0] == 16){
		trial.objgroup = 4;
	}
	if (trial.objectlist.length == 24){
		trial.objgroup = 24;
	}

	//determine current training stage
	for (var i = 0; i<=trainingstages.sampleON.length-1; i++){
		if (trainingstages.rewardStage[i] == trial.rewardStage && 
			trainingstages.fixationmove[i] == trial.fixationmove && 
			trainingstages.fixationradius[i] == trial.fixationradius && 
			trainingstages.sampleON[i] == trial.sampleON && 
			trainingstages.samplegrid[i] == trial.samplegrid && 
			trainingstages.keepSampleON[i] == trial.keepSampleON && 
			trainingstages.imageFolderSample[i] == trial.imageFolderSample && 
			trainingstages.sampleScale[i] == trial.sampleScale && 
			trainingstages.testScale[i] == trial.testScale && 
			trainingstages.objgroup[i] == trial.objgroup){
			trainingstages.current = i;
		}
	}

	// "RewardStage":1,
	// "FixationMove":0,
	// "FixationRadius":60,
	// "SampleON":200,
	// "SampleGridIndex":[4],
	// "KeepSampleON":0,
	// "ImageFolderSample":1,
	// "SampleScale":2,
	// "TestScale":2,
	// "TestedObjects":[7,8],


	// [{"Weight":5.6
	// "Species":"macaque"
	// "Homecage":1
	// "Separated":1
	// "Liquid":1,
	// "Tablet":"samsung10",
	// "Pump":3,
	// "Nway":2,
	// "TestGridIndex":[1,7],
	// "RewardPer1000Trials":90,
	// "PunishTimeOut":3000,
	// "FixationDuration":30,
	// "SampleOFF":100,
	// "HideTestDistractors":0,
	// "SampleBlockSize":0,
	// "NStickyResponse":5,
	// "ImageFolderTest":0,
	// "Automator":0}]

	if (writestr == "readtaskstageonly"){
		return trainingstages.current;		
	}

//COMPUTE PERFORMANCE
	var startingindex = -1;
	for (var i = 0; i < trialhistory.trainingstage.length; i++){
		if (typeof(trialhistory.trainingstage[i]) == "undefined"){
		}
		else if (trialhistory.trainingstage[i] == trainingstages.current && startingindex == -1){
			startingindex = i;
		}
		else if (trialhistory.trainingstage[i] != trainingstages.current){
			startingindex = -1; //reset starting index, not a continuous block
		}
	}

	var ntrial=0;
	var ncorrect=0;
	var pctcorrect
	if (startingindex == -1){
		pctcorrect = 0;
	}
	else{
		//take running average
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
	}
	else{
//		// trial.need2loadParameters=0;
		return
	}

	if (updatingstage==1){
		if (trial.objgroup != trainingstages.objgroup[trainingstages.current] || 
			trial.imageFolderSample != trainingstages.imageFolderSample[trainingstages.current]){
				trial.objgroup = trainingstages.objgroup[trainingstages.current];
				// trial.need2loadImages = 1;
		}
		else{
//			// trial.need2loadImages = 0;
		}
	}

//update training stage
	trial.rewardStage = trainingstages.rewardStage[trainingstages.current]
	trial.fixationmove = trainingstages.fixationmove[trainingstages.current]
	trial.fixationradius = trainingstages.fixationradius[trainingstages.current]
	trial.sampleON = trainingstages.sampleON[trainingstages.current]
	trial.samplegrid = [trainingstages.samplegrid[trainingstages.current]]
	trial.keepSampleON = trainingstages.keepSampleON[trainingstages.current]
	trial.imageFolderSample = trainingstages.imageFolderSample[trainingstages.current]
	trial.sampleScale = trainingstages.sampleScale[trainingstages.current]
	trial.testScale = trainingstages.testScale[trainingstages.current]

	//update object list
	if (trial.objgroup == 0){
		trial.objectlist = [7,8];
	}
	if (trial.objgroup == 1){
		trial.objectlist = [7,8,9,10];
	}
	if (trial.objgroup == 2){
		trial.objectlist = [0,1,2,3,4,5,6,7];
	}
	if (trial.objgroup == 3){
		trial.objectlist = [8,9,10,11,12,13,14,15];
	}
	if (trial.objgroup == 4){
		trial.objectlist = [16,17,18,19,20,21,22,23];
	}
	if (trial.objgroup == 24){
		trial.objectlist = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
	}
}

function updateTask1(writestr){
	var trainingstages = {
		rewardStage: [0,0,1,1,1,1,1,1,1,1,1,1,1],
		hidetestdistractors: [1,1,1,0,0,0,0,0,0,0,0,0,0],
		keepSampleON: [1,1,1,1,0,0,0,0,0,0,0,0,0],
		imageFolderSample: [0,0,0,0,0,1,2,3,3,3,3,3,3,3],
		sampleON: [1000,1000,1000,1000,1000,400,300,200,200,200,200,200,100],
		objgroup: [0,0,0,0,0,0,0,0,1,2,3,4,24],

		fixationdur: [50,150,150,100,100,100,100,100,100,100,100,100,100],
		fixationradius: [150,125,100,60,60,30,30,30,30,30,30,30,30],
		fixationmove: [0,2000,0,0,0,0,0,0,0,0,0,0,0],
		nway: [2,2,2,2,2,2,2,2,2,2,2,2,2],
		imageFolderTest: [0,0,0,0,0,0,0,0,0,0,0,0,0],
		sampleOFF: [100,100,100,100,100,100,100,100,100,100,100,100,100],
		sampleblocksize: [0,0,0,0,0,0,0,0,0,0,0,0,0],
		nstickyresponse: [5,5,5,5,5,5,5,5,5,5,5,5,5],
		current: -1,
		mintrials: [500,500,500,500,500,500,500,500,500,500,500,500,500],
		// mintrials: [5,5,5,5,5,5,5,5,5,5,5,5],
		minpctcorrect: [60,60,60,70,70,70,70,70,70,70,70,70,70],
		reward: [1,1,1,1,1,1,1,1,1,1,1,1,1],
		hireward: [2,2,2,2,2,2,2,2,2,2,2,2,2],
		hirewardtrials: [500,500,500,500,500,500,500,500,500,500,500,500,500],
		punish: [1000,1000,1000,3000,3000,3000,3000,3000,3000,3000,3000,3000,3000],
	}

	if (env.species == "macaque"){
		var trials2reachminimum=1000;
	}
	else if (env.species == "marmoset"){
		var trials2reachminimum=500;
	}
	else {
		var trials2reachminimum=1000;
	}


//DETERMINE TASK STAGE
	//determine current object group
	trial.objgroup = 0;
	if (trial.objectlist.length == 2 && trial.objectlist[0] == 7 && trial.objectlist[1] == 8){
		trial.objgroup = 0;
	}
	if (trial.objectlist.length == 4 && trial.objectlist[0] == 7 && trial.objectlist[1] == 8 && trial.objectlist[2] == 9 && trial.objectlist[3] == 10){
		trial.objgroup = 1;
	}
	if (trial.objectlist.length == 8 && trial.objectlist[0] == 0){
		trial.objgroup = 2;
	}
	if (trial.objectlist.length == 8 && trial.objectlist[0] == 8){
		trial.objgroup = 3;
	}
	if (trial.objectlist.length == 8 && trial.objectlist[0] == 16){
		trial.objgroup = 4;
	}
	if (trial.objectlist.length == 24){
		trial.objgroup = 24;
	}

	//determine current training stage
	for (var i = 0; i<=trainingstages.sampleON.length-1; i++){
		if (trainingstages.rewardStage[i] == trial.rewardStage && trainingstages.hidetestdistractors[i] == trial.hidetestdistractors &&
			trainingstages.keepSampleON[i] == trial.keepSampleON && trainingstages.imageFolderSample[i] == trial.imageFolderSample && 
			trainingstages.sampleON[i] == trial.sampleON && trainingstages.objgroup[i] == trial.objgroup && 
			trainingstages.fixationdur[i] == trial.fixationdur && trainingstages.fixationradius[i] == trial.fixationradius && 
			trainingstages.fixationmove[i] == trial.fixationmove && trainingstages.nway[i] == trial.nway && 
			trainingstages.imageFolderTest[i] == trial.imageFolderTest && trainingstages.sampleOFF[i] == trial.sampleOFF && 
			trainingstages.sampleblocksize[i] == trial.sampleblocksize && trainingstages.nstickyresponse[i] == trial.nstickyresponse){
			trainingstages.current = i;
		}
	}

	if (writestr == "readtaskstageonly"){
		return trainingstages.current;		
	}

//COMPUTE PERFORMANCE
	var startingindex = -1;
	for (var i = 0; i < trialhistory.trainingstage.length; i++){
		if (typeof(trialhistory.trainingstage[i]) == "undefined"){
		}
		else if (trialhistory.trainingstage[i] == trainingstages.current && startingindex == -1){
			startingindex = i;
		}
		else if (trialhistory.trainingstage[i] != trainingstages.current){
			startingindex = -1; //reset starting index, not a continuous block
		}
	}

	var ntrial=0;
	var ncorrect=0;
	var pctcorrect
	if (startingindex == -1){
		pctcorrect = 0;
	}
	else{
		//take running average
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


//Determine if updating stage and/or reward
var updatingstage=0;
var updatingreward=0;

	if (pctcorrect >= trainingstages.minpctcorrect[trainingstages.current] && ntrial >= trainingstages.mintrials[trainingstages.current] && trainingstages.current < trainingstages.sampleON.length-1){
		updatingstage=1;
		trainingstages.current++;
	}

	var minreward = 1000*env.weight * 20 / (trials2reachminimum);
	if (updatingstage == 1){
		trial.rewardper1000 = minreward * trainingstages.hireward[trainingstages.current];
		updatingreward = 1;
	}
	else if (ncompleted > trainingstages.hirewardtrials[trainingstages.current] && Math.round(trial.rewardper1000) != Math.round(trainingstages.reward[trainingstages.current]*minreward)){
		trial.rewardper1000 = minreward * trainingstages.reward[trainingstages.current];
		updatingreward = 1;
	}

	if (updatingstage==1 || updatingreward==1){
		trial.need2loadParameters=1;
	}
	else{
		trial.need2loadParameters=0;
		return
	}

	if (updatingstage==0){
		trial.need2loadImages=0;
	}
	else if (updatingstage==1){
		if (trial.objgroup != trainingstages.objgroup[trainingstages.current] || trial.imageFolderSample != trainingstages.imageFolderSample[trainingstages.current]){
			trial.objgroup = trainingstages.objgroup[trainingstages.current];
			trial.need2loadImages = 1;
		}
		else{
			trial.need2loadImages = 0;
		}
	}

//update training stage
	trial.rewardStage = trainingstages.rewardStage[trainingstages.current];
	trial.hidetestdistractors = trainingstages.hidetestdistractors[trainingstages.current];
	trial.keepSampleON = trainingstages.keepSampleON[trainingstages.current];
	trial.imageFolderSample = trainingstages.imageFolderSample[trainingstages.current];
	trial.sampleON = trainingstages.sampleON[trainingstages.current];
	trial.fixationdur = trainingstages.fixationdur[trainingstages.current];
	trial.fixationradius = trainingstages.fixationradius[trainingstages.current];
	trial.fixationmove = trainingstages.fixationmove[trainingstages.current];
	trial.nway = trainingstages.nway[trainingstages.current];
	trial.imageFolderTest = trainingstages.imageFolderTest[trainingstages.current];
	trial.sampleOFF = trainingstages.sampleOFF[trainingstages.current];
	trial.sampleblocksize = trainingstages.sampleblocksize[trainingstages.current];
	trial.nstickyresponse = trainingstages.nstickyresponse[trainingstages.current];
	trial.punish = trainingstages.punish[trainingstages.current];

	//update object list
	if (trial.objgroup == 0){
		trial.objectlist = [7,8];
	}
	if (trial.objgroup == 1){
		trial.objectlist = [7,8,9,10];
	}
	if (trial.objgroup == 2){
		trial.objectlist = [0,1,2,3,4,5,6,7];
	}
	if (trial.objgroup == 3){
		trial.objectlist = [8,9,10,11,12,13,14,15];
	}
	if (trial.objgroup == 4){
		trial.objectlist = [16,17,18,19,20,21,22,23];
	}
	if (trial.objgroup == 24){
		trial.objectlist = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
	}
}




function updateTask2(writestr){

	var trainingstages = {
		rewardStage: [1,1,1],
		hidetestdistractors: [0,0,0],
		keepSampleON: [1,1,0],
		imageFolderSample: [5,5,5],
		sampleON: [500,500,200],
		objgroup: [0,1,2],

		fixationdur: [100,100,100],
		fixationradius: [30,30,30],
		fixationmove: [0,0,0],
		nway: [2,2,2],
		imageFolderTest: [4,4,4],
		sampleOFF: [100,100,100],
		sampleblocksize: [0,0,0],
		nstickyresponse: [5,5,5],
		current: -1,
		mintrials: [500,500,500],
		minpctcorrect: [60,60,60],
		reward: [1,1,1],
		hireward: [2,2,2],
		hirewardtrials: [500,500,500],
		punish: [1500,1500,3000],
	}

	if (env.species == "macaque"){
		var trials2reachminimum=1500;
	}
	else if (env.species == "marmoset"){
		var trials2reachminimum=500;
	}
	else {
		var trials2reachminimum=1500;
	}


//DETERMINE TASK STAGE
	//determine current object group
	trial.objgroup = 0;
	if (trial.objectlist.length == 8 && trial.objectlist[0] == 0){
		trial.objgroup = 0;
//inanimate: [0,3,5,14,34,37,39,48]; //bucket-vase, drum-glockenspiel, fryingpan-pot, plate-bowl
	}
	if (trial.objectlist.length == 8 && trial.objectlist[0] == 24){
		trial.objgroup = 1;
//animate: [24,26,30,31  53,57,60,61] //eel-cod, hound-horse, pig-llama, platypus-echidna
	}
	if (trial.objectlist.length == 16 && trial.objectlist[0] == 0){
		trial.objgroup = 2;
	}


	//determine current training stage
	for (var i = 0; i<=trainingstages.sampleON.length-1; i++){
		if (trainingstages.rewardStage[i] == trial.rewardStage && trainingstages.hidetestdistractors[i] == trial.hidetestdistractors && trainingstages.keepSampleON[i] == trial.keepSampleON && trainingstages.imageFolderSample[i] == trial.imageFolderSample && trainingstages.sampleON[i] == trial.sampleON && trainingstages.objgroup[i] == trial.objgroup && trainingstages.fixationdur[i] == trial.fixationdur && trainingstages.fixationradius[i] == trial.fixationradius && trainingstages.fixationmove[i] == trial.fixationmove && trainingstages.nway[i] == trial.nway && trainingstages.imageFolderTest[i] == trial.imageFolderTest && trainingstages.sampleOFF[i] == trial.sampleOFF && trainingstages.sampleblocksize[i] == trial.sampleblocksize && trainingstages.nstickyresponse[i] == trial.nstickyresponse){
			trainingstages.current = i;
		}
	}

	if (writestr == "readtaskstageonly"){
		return trainingstages.current;		
	}

//COMPUTE PERFORMANCE
	var startingindex = -1;
	for (var i = 0; i < trialhistory.trainingstage.length; i++){
		if (typeof(trialhistory.trainingstage[i]) == "undefined"){
		}
		else if (trialhistory.trainingstage[i] == trainingstages.current && startingindex == -1){
			startingindex = i;
		}
		else if (trialhistory.trainingstage[i] != trainingstages.current){
			startingindex = -1; //reset starting index, not a continuous block
		}
	}

	var ntrial=0;
	var ncorrect=0;
	var pctcorrect
	if (startingindex == -1){
		pctcorrect = 0;
	}
	else{
		//take running average
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


//Determine if updating stage and/or reward
var updatingstage=0;
var updatingreward=0;

	if (pctcorrect >= trainingstages.minpctcorrect[trainingstages.current] && ntrial >= trainingstages.mintrials[trainingstages.current] && trainingstages.current < trainingstages.sampleON.length-1){
		updatingstage=1;
		trainingstages.current++;
	}

	var minreward = 1000*env.weight * 20 / (trials2reachminimum);
	if (updatingstage == 1){
		trial.rewardper1000 = minreward * trainingstages.hireward[trainingstages.current];
		updatingreward = 1;
	}
	else if (ncompleted > trainingstages.hirewardtrials[trainingstages.current] && Math.round(trial.rewardper1000) != Math.round(trainingstages.reward[trainingstages.current]*minreward)){
		trial.rewardper1000 = minreward * trainingstages.reward[trainingstages.current];
		updatingreward = 1;
	}

	if (updatingstage==1 || updatingreward==1){
		trial.need2loadParameters=1;
	}
	else{
		trial.need2loadParameters=0;
		return
	}

	if (updatingstage==0){
		trial.need2loadImages=0;
	}
	else if (updatingstage==1){
		if (trial.objgroup != trainingstages.objgroup[trainingstages.current] || trial.imageFolderSample != trainingstages.imageFolderSample[trainingstages.current]){
			trial.objgroup = trainingstages.objgroup[trainingstages.current];
			trial.need2loadImages = 1;
		}
		else{
			trial.need2loadImages = 0;
		}
	}

//update training stage
	trial.rewardStage = trainingstages.rewardStage[trainingstages.current];
	trial.hidetestdistractors = trainingstages.hidetestdistractors[trainingstages.current];
	trial.keepSampleON = trainingstages.keepSampleON[trainingstages.current];
	trial.imageFolderSample = trainingstages.imageFolderSample[trainingstages.current];
	trial.sampleON = trainingstages.sampleON[trainingstages.current];
	trial.fixationdur = trainingstages.fixationdur[trainingstages.current];
	trial.fixationradius = trainingstages.fixationradius[trainingstages.current];
	trial.fixationmove = trainingstages.fixationmove[trainingstages.current];
	trial.nway = trainingstages.nway[trainingstages.current];
	trial.imageFolderTest = trainingstages.imageFolderTest[trainingstages.current];
	trial.sampleOFF = trainingstages.sampleOFF[trainingstages.current];
	trial.sampleblocksize = trainingstages.sampleblocksize[trainingstages.current];
	trial.nstickyresponse = trainingstages.nstickyresponse[trainingstages.current];
	trial.punish = trainingstages.punish[trainingstages.current];

	//update object list
	if (trial.objgroup == 0){
//inanimate: [0,3,5,14,34,37,39,48]; //bucket-vase, drum-glockenspiel, fryingpan-pot, plate-bowl
		trial.objectlist = [0,3,5,14,34,37,39,48];
	}
	if (trial.objgroup == 1){
//animate: [24,26,30,31  53,57,60,61] //eel-cod, hound-horse, pig-llama, platypus-echidna
		trial.objectlist = [24,26,30,31,53,57,60,61];
	}
	if (trial.objgroup == 2){
		trial.objectlist = [0,3,5,14,34,37,39,48,24,26,30,31,53,57,60,61];
	}
}