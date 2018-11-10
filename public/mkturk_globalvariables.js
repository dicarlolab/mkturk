//================== INITIALIZE GLOBALS ==================//
// In the interest of code readability and spaghetti-minimization, the use of globals should be kept to a minimum, and instead explicit passage of variables into and out of functions is encouraged.
// For certain things, globals make sense and may even be required, like event listeners and async processes.

//================ TASK,TRIAL,ENV (SAVED) ================//
// TASK <-- Read from Subject Parameter file
// ENV <-- TASK drives creation of ENV
// TASK,TRIAL,ENV --> Saved to Behavioral Data file
var TASK = {}; // Global that encapsulates state of the current task, read from Subject's Params file
var TRIAL = resetTRIAL() // Global that contains data variables that are incremented every trial, and are dumped to disk for scientific purposes.
var ENV = {}; // Task specific variables that are slaves to TASK settings, but still desired to be recorded. Hence, they should not appear in the TASK-based params file, but should be logged on their own. 

ENV.ResearcherDisplayName = ''
ENV.ResearcherEmail = ''
ENV.ResearcherLastName = ''
ENV.ResearcherID = ''
ENV.USBDeviceType = ''
ENV.USBDeviceName = ''
ENV.Subject = ''
ENV.CurrentDate = new Date;
ENV.ImageHeightPixels = NaN; 
ENV.ImageWidthPixels = NaN;
ENV.CanvasRatio = 1
ENV.DevicePixelRatio = 1
ENV.FixationRadius = 0
ENV.FixationColor = ''
ENV.XGridCenter = []
ENV.YGridCenter = []
ENV.RewardDuration = NaN
ENV.Ordered_Samplebag_Filenames = []
ENV.Ordered_Testbag_Filenames = []
ENV.ParamFileName = ''
ENV.ParamFileRev = ''
ENV.ParamFileDate = '' //stores complete path to subject parameter file
ENV.DataFileName = '' //stores complete path to behavioral data file
ENV.FirestoreDocRoot = ''
ENV.CurrentAutomatorStageName = ''
ENV.MinPercentCriterion = -1
ENV.MinTrialsCriterion = -1

//================ OTHER GLOBALS (NOT SAVED) ================//
var FLAGS = {} // Global that keeps track of the task's requests to the Dropbox/server/disk/whatever; buffering requests; etc.
// The scientist does not care about tracking this variable into the behavioral files. 
FLAGS.consecutivehits = 0;
FLAGS.need2loadImages = 1; 
FLAGS.need2loadParameters = 1; 
FLAGS.savedata = 0; 
FLAGS.stage = 0; 
FLAGS.imagesPresent = 0;
FLAGS.stickyresponse = 0;

FLAGS.waitingforTouches = 0
FLAGS.touchduration = -1;
FLAGS.punishOutsideTouch = 0
FLAGS.acquiredTouch = 0
FLAGS.touchGeneratorCreated = 0
FLAGS.runPump = 0
FLAGS.firestorecreatedoc = 0

var CANVAS = {}; 
var CANVAS = {
	names: ["blank","sample","test","touchfix","eyefix","reward","photoreward","punish"],
	front: "blank",
	sequenceblank: ["blank","blank"], 
	tsequenceblank: [0,50], 
	sequencepre: ["touchfix"],
	tsequencepre: [0],
	sequence: ["blank","sample","blank","test"], // blank, sample, blank, test
	tsequence: NaN, 
	sequencepost: ["blank","reward","blank"], // blank, reward
	tsequencepost: [0,50,100],
	headsupfraction: NaN,
	offsetleft: 0,
	offsettop: 0,
}

var OFFSCREENCANVAS = null
var VISIBLECANVAS = document.getElementById("canvasvisible")

var frame = {
	current: 0,
	shown: [],
}

// States of the current trial, entered into running trialhistory
var CURRTRIAL = {}
CURRTRIAL.num = 0;
CURRTRIAL.starttime = NaN; 
CURRTRIAL.fixationgridindex = NaN; 
CURRTRIAL.fixationxyt = [];
CURRTRIAL.allfixationxyt = [];
CURRTRIAL.sampleindex = NaN;
CURRTRIAL.sampleimage = undefined;
CURRTRIAL.testindices = NaN;
CURRTRIAL.testimages = [];
CURRTRIAL.responsexyt = []; 
CURRTRIAL.response = []; 
CURRTRIAL.correctitem = NaN;
CURRTRIAL.correct = [];
CURRTRIAL.nreward = NaN;
CURRTRIAL.fixationtouchevent = ""
CURRTRIAL.responsetouchevent = ""
CURRTRIAL.lastTrialCompleted = new Date
CURRTRIAL.lastDropboxSave = new Date
CURRTRIAL.tsequenceactual = []
CURRTRIAL.tsequencedesired = []


var EVENTS = {}
EVENTS.reset = function(){
	this.trialnum = CURRTRIAL.num;
	this.trialseries = {};
	this.timeseries = {};
	this.trialseries.Sample = {}
	this.trialseries.Test = {}
	this.trialseries.CorrectItem = {}
	this.trialseries.FixationGridIndex = {}
	this.trialseries.StartTime = {}
	this.trialseries.FixationTouchEvent = {}
	this.trialseries.FixationXYT = {}
	this.trialseries.Response = {}
	this.trialseries.TSequenceDesired = {}
	this.trialseries.TSequenceActual = {}
	this.trialseries.ResponseTouchEvent = {}
	this.trialseries.ResponseXYT = {}
	this.trialseries.Response = {}
	this.trialseries.NReward = {}
	this.timeseries.BatteryLDT = {}	
	this.timeseries.RFIDTag = {}
	this.timeseries.Weight = {}
	this.timeseries.BLEBattery = {}
}
EVENTS.reset()

// 	TRIAL.RFIDTag = []
// 	TRIAL.RFIDTime = []
// 	TRIAL.RFIDTrial = []
// 	TRIAL.NRFID = 0
// 	TRIAL.Weight = []
// 	TRIAL.WeightTime = []
// 	TRIAL.WeightTrial = []
// 	TRIAL.NWeights = 0


var trialhistory = {}
trialhistory.trainingstage = []
trialhistory.starttime = []
trialhistory.response = []
trialhistory.correct = []


var sounds = {
	serial: [0,1,2,3,4],
	buffer: [],
}
var boundingBoxesFixation={}; //where the fixation touch targets are on the canvas
var boundingBoxesChoice={}; //where the choice touch targets are on the canvas
var waitforClick; //variable to hold generator
var waitforEvent; //variable to hold generator
var touchTimer; //variable to hold timer
var xcanvascenter=[];
var ycanvascenter=[];
var curridx = null;
var datafiles=[];
var displayoutofboundsstr=""

//================ UPDATE VARIABLE FUNCTIONS ================//
function resetTRIAL(){
	var TRIAL = {}
	TRIAL.StartTime = []
	TRIAL.FixationGridIndex = []
	TRIAL.FixationXYT=[]
	TRIAL.AllFixationXYT=[]
	TRIAL.Sample = []
	TRIAL.Test = []
	TRIAL.ResponseXYT = []
	TRIAL.Response = []
	TRIAL.CorrectItem = []
	TRIAL.FixationTouchEvent = []
	TRIAL.ResponseTouchEvent = []
	TRIAL.NReward = []
	TRIAL.AutomatorStage = []
	TRIAL.TSequenceDesired = []
	TRIAL.TSequenceActual = []
	TRIAL.RFIDTag = []
	TRIAL.RFIDTime = []
	TRIAL.RFIDTrial = []
	TRIAL.NRFID = 0
	TRIAL.Weight = []
	TRIAL.WeightTime = []
	TRIAL.WeightTrial = []
	TRIAL.NWeights = 0
	TRIAL.BatteryLDT = []
	navigator.getBattery().then(function(batteryobj){
		TRIAL.BatteryLDT.push([batteryobj.level, batteryobj.dischargingTime, Math.round(performance.now())]);
		logEVENTS("BatteryLDT",TRIAL.BatteryLDT[TRIAL.BatteryLDT.length-1],"timeseries")
	}) // starting battery level
	return TRIAL
}

function updateTRIAL(){
	TRIAL.StartTime[CURRTRIAL.num] = CURRTRIAL.starttime
	TRIAL.FixationGridIndex[CURRTRIAL.num] = CURRTRIAL.fixationgridindex
	TRIAL.FixationXYT[CURRTRIAL.num] = CURRTRIAL.fixationxyt
	TRIAL.AllFixationXYT[CURRTRIAL.num] = CURRTRIAL.allfixationxyt	
	TRIAL.Sample[CURRTRIAL.num] = CURRTRIAL.sampleindex 
	TRIAL.Test[CURRTRIAL.num] = CURRTRIAL.testindices 
	TRIAL.ResponseXYT[CURRTRIAL.num] = CURRTRIAL.responsexyt
	TRIAL.Response[CURRTRIAL.num] = CURRTRIAL.response
	TRIAL.FixationTouchEvent[CURRTRIAL.num] = CURRTRIAL.fixationtouchevent
	TRIAL.ResponseTouchEvent[CURRTRIAL.num] = CURRTRIAL.responsetouchevent
	TRIAL.CorrectItem[CURRTRIAL.num] = CURRTRIAL.correctitem
	TRIAL.NReward[CURRTRIAL.num] = CURRTRIAL.nreward
	TRIAL.AutomatorStage[CURRTRIAL.num] = TASK.CurrentAutomatorStage; 
	TRIAL.TSequenceDesired[CURRTRIAL.num] = CURRTRIAL.tsequencedesired
	TRIAL.TSequenceActual[CURRTRIAL.num] = CURRTRIAL.tsequenceactual
}

function updateTrialHistory(){
	var current_stage = stageHash(TASK); 
	trialhistory.trainingstage.push(current_stage);
	trialhistory.starttime.push(CURRTRIAL.starttime)
	trialhistory.response.push(CURRTRIAL.response)
	trialhistory.correct.push(CURRTRIAL.correct)
}

function logEVENTS(eventname,eventval,eventtype){
	return
	//log events for a trial
	if (eventtype == 'trialseries'){
		//index by trial
		var indevent = EVENTS.trialnum
		if (FLAGS.savedata == 0){
			indevent = 0 //store most recent trial in first position until start saving data
		}
	}
	else if (eventtype == 'timeseries'){
		//running index
		var indevent = Object.keys(EVENTS[eventtype][eventname]).length
		if (FLAGS.savedata == 0){
			indevent = 0 //store most recent timepoint in first position until start saving data
		}
	}
	var trialtime = [EVENTS.trialnum, Math.round(performance.now())]
	EVENTS[eventtype][eventname][indevent.toString()] = trialtime.concat(eventval)
}

function purgeTrackingVariables(){
	// Purges heresies committed in the test period 
	TRIAL = resetTRIAL()

	ENV.CurrentDate = new Date;
	var datestr = ENV.CurrentDate.toISOString();
	ENV.DataFileName = DATA_SAVEPATH + ENV.Subject + "/" + datestr.slice(0,datestr.indexOf(".")) + "_" + ENV.Subject + ".txt";
	ENV.FirestoreDocRoot = datestr.slice(0,datestr.indexOf(".")) + "_" + ENV.Subject

	if(FLAGS.waitingforTouches > 0 || FLAGS.purge == 1){
		// purge requested by user at beginning of trial during fixation (most likely) 
		console.log('setting to 0')
		CURRTRIAL.num = 0
		EVENTS.trialnum = 0
	}
	else{
		console.log('setting to -1')
		// purge requested by automator at end of trial
		CURRTRIAL.num = -1;
	}
	
	FLAGS.sampleblockcount = 0; 
	FLAGS.consecutivehits = 0; 

	return 
}