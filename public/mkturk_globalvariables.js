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
ENV.Subject = ''
ENV.CurrentDate = new Date;
ENV.ImageHeightPixels = NaN; 
ENV.ImageWidthPixels = NaN;
ENV.CanvasRatio = 1
ENV.DevicePixelRatio = 1
ENV.FixationRadius = 0
ENV.XGridCenter = []
ENV.YGridCenter = []
ENV.RewardDuration = NaN
ENV.Ordered_Samplebag_Filenames = []
ENV.Ordered_Testbag_Filenames = []
ENV.ParamFileName = ''
ENV.ParamFileRev = ''
ENV.ParamFileDate = '' //stores complete path to subject parameter file
ENV.DataFileName = '' //stores complete path to behavioral data file
ENV.BatteryLDT = []

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
	obj: [],
}
for (var i in CANVAS.names){
	CANVAS.obj[CANVAS.names[i]]=document.getElementById("canvas" + CANVAS.names[i])
}

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


var trialhistory = {}
trialhistory.trainingstage = []
trialhistory.starttime = []
trialhistory.response = []
trialhistory.correct = []


var sounds = {
	folder: "/MonkeyTurk/sounds/au",
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
}

function updateTrialHistory(){
	var current_stage = stageHash(TASK); 
	trialhistory.trainingstage.push(current_stage);
	trialhistory.starttime.push(CURRTRIAL.starttime)
	trialhistory.response.push(CURRTRIAL.response)
	trialhistory.correct.push(CURRTRIAL.correct)
}

function purgeTrackingVariables(){
	// Purges heresies committed in the test period 
	TRIAL = resetTRIAL()

	ENV.CurrentDate = new Date;
	var datestr = ENV.CurrentDate.toISOString();
	ENV.DataFileName = DATA_SAVEPATH + ENV.Subject + "/" + datestr.slice(0,datestr.indexOf(".")) + "_" + ENV.Subject + ".txt";

	if(FLAGS.waitingforTouches > 0 || FLAGS.purge == 1){
		// purge requested by user at beginning of trial during fixation (most likely) 
		console.log('setting to 0')
		CURRTRIAL.num = 0
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





// XX Need to do something with parameter meta

function clearTASK(){
	// This function has no use in the current (01/27/2017) code, but TASK properties should be written down here, rather than propagated culturally through params files. 

	var TASK = {}
	var TASK = {
		subjectID: "", // "Name of subject, chosen from pulldown menu at beginning of task."},
		weight: -1, // "Weight in kilograms"},
		species: "aplysia", //"Name of primate species: marmoset, macaque, or human"},
		homecage: -1, // "Where task was performed. 0=lab 1=subject's home"},
		separated: -1, // {dataname: "Separated",user: 1,save: 1,init: 1,meta: "0=subject was paired with conspecific during task performance, 1=subject was separated from conspecific"},
		liquid: -1, // {dataname: "Liquid",user: 1,save: 1,init: 1,meta: "1=water 2=water-condensed milk 3=marshmallow slurry (4/30mL)"},
		tablet: "", // {dataname: "Tablet",user: 1,save: 1,init: "",meta: "Tablet used: nexus9, samsung10, googlepixelc10"},
		pump: -1, // {dataname: "Pump",user: 1,save: 1,init: 3,meta: "1=adafruit peristaltic 2=submersible centrifugal tcs 3=diaphragm pump tcs 4=piezoelectric 3mL takasago 5=newer diaphragm pumps tcs 6=piezoelectric 7mL takasago"},
		ngridpoints: -1, // {dataname: "NGridPoints",user: 1,save: 1,init: 3,meta: "Number of display grid points in either direction. Produces square grid. 3x3 is typical. Images (fixation,sample, & test) will appear centered on one of the grid points. Grid is serially zero indexed by rows then columns. ngridpoints can be made larger to allow for more response choices to be simultaneously displayed."},
		gridscale: -1, // {dataname: "GridScale",user: 1,save: 1,init: 1,meta: "Determines intergridpoint spacing. Can think of this as the resolution of grid. gridscale=1 means intergridpoint spacing is equal to the width of the sample image. Finer grid resolutions (gridscale<1) can be used for more precise sample positioning."},
		fixationGridindex: -1, // {dataname: "StaticFixationGridIndex",user: 1,save: 0,init: [5],meta: "Index on the grid where the fixation image will appear. If FixationMove>0, then fixationGridindex is ignored."},
		SampleGridIndex: -1, // {dataname: "SampleGridIndexIndex",user: 1,save: 1,init: [4],meta: "Index on grid where sample image appears. SampleGridIndex=4 centers the image on a 3x3 grid, where ngridpoints=3"},
		TestGridIndex: [], // {dataname: "TestGridIndex",user: 1,save: 1,init: [2,8],meta: "Index on grid where test images (choices) appear."},
		ObjectGrid: [], // {dataname: "ObjectGridIndex",user: 1,save: 1,init: [],meta: "Used for SR task. If this variable is set, then each object is tied to a particular location on the grid. ObjectGrid.length must equal objectlist.length for appropriate assignment of each object label to a grid location"},
		RewardStage:-1, // {dataname: "RewardStage",user: 1,save: 1,init: 1,meta: "RewardStage=0 rewards for successful fixtion and skips the choice phase of task. RewardStage=1 rewards for selecting the correct choice."},
		rewardper1000: -1, // {dataname: "RewardPer1000Trials",user: 1,save: 1,init: 1,meta: "Amount of liquid reward in mL for 1000 correct trials. For macaques, this is around 100mL for every 1000 correct trials."},
		punish: -1, // {dataname: "PunishTimeOut",user: 1,save: 1,init: 1000,meta: "Time out in milliseconds for incorrect responses. Black square and incorrect sound may be presented for feedback during this time."},
		nfixations: -1, //{dataname: "NFixations",user: 1,save: 1,init: 1,meta: "Number of times fixation dot needs to be pressed to advance to the match to sample phase of the task. nfixations=1 means the subject simply has to press the fixation dot once before the sample is presented. This mode allow parametric control over fixed ratio scheduling."},
		FixationDuration: -1, // {dataname: "FixationDuration",user: 1,save: 1,init: 0,meta: "How long subject has to hold fixation touch in milliseconds for a successful fixation to register. fixationdur<0, then the program skips the fixation step and instead presents the sample image at the beginning of the trial"},
		FixationMove: -1, // {dataname: "FixationMove",user: 1,save: 1,init: 0,meta: "FixationMove=0, fixation image is presented at fixationGridindex. FixationMove=N, N>0, fixation image is presented at a randomly selected grid point and the fixation position is redrawn every N milliseconds. FixationMove > 0 can be used to train subjects to touch different screen locations or to calibrate an eyetracker."},
		sampleON: -1, // {dataname: "SampleON",user: 1,save: 1,init: 1,meta: "Duration in milliseconds that sample image is presented"},
		sampleOFF: -1, // {dataname: "SampleOFF",user: 1,save: 1,init: 1,meta: "Duration in milliseconds that a gray screen is presented after the sample image before the response screen. This implements the delay in a DMS task. sampleOFF=0, leads to no delay"},
		KeepSampleON: -1, // {dataname: "KeepSampleON",user: 1,save: 1,init: 0,meta: "KeepSampleON=0, sample is presented only for sampleON milliseconds for a delayed match-to-sample, KeepSampleON=1 sample remains on during choice scree. This implements a spatial match to sample."},
		hideTestDistractors:-1, //  {dataname: "HideTestDistractors",user: 1,save: 1,init: 0,meta: "hideTestDistractors=1, hides the distractor choices so that subject only sees matching choice."},
		sampleBlockSize:-1, //  {dataname: "SampleBlockSize",user: 1,save: 1,init: 0,meta: "Number of consecutive times to present a sample from the same object label (if want subject performing blocked object recognition). SampleBlockSize=0 means sample is drawn randomly from all available objects in objectlist."},
		nstickyreponse: -1, // {dataname: "NStickyResponse",user: 1,save: 1,init: 5,meta: "Number of times subject can choose the same location on the screen before force them out of it by placing the correct answer somewhere else (i.e. if they have response bias, then on the next trial, the correct choice is drawn somewhere away from that bias)."},
		consecutivehitsITI: -1, // {dataname: "ConsecutiveHitsITI",user: 1,save: 1,init: 8000,meta: "Maximum time in milliseconds allowed to elapse from the previous trial for the current trial to count toward reward accumulation for a string of correct responses. For example, if consecutivehitsITI=8000, then subject has 8 seconds to complete the next trial successfully and the consecutivehits counter will be incremented. Otherwise, the number of consecutivehits will get set to 0"},
		nconsecutivehitsforbonus: -1, // {dataname: "NConsecutiveHitsforBonus",user: 1,save: 1,init: 4,meta: "How many consecutive hits subject needs for the reward amount to increase.  If nconsecutivehitsforbonus=4, then subject will get 2x reward for correct responses on 4 consecutive trials, 3x reward for correct responses on 8 consecutive trials, up to nrewardmax times of 1x reward. This is a way to make chance on a 2AFC task be virtually < 50% since reward is jointly distributed across trials rather than independently on the current trial."},
		nrewardmax: -1, // {dataname: "NRewardMax",user: 1,save: 1,init: 1,meta: "Max number of rewards that can be given for a successful trial. This caps how much extra (bonus) reward subject can get for successful completion of consecutive trials. If nrewardmax=3, then subject can get up to 3x reward for completing 3*nconsecutivehitsforbonus consecutive trials successfully, and then would get 3x reward after that until gets a trial wrong."},
		fixationUsesSample: -1, // {dataname: "FixationUsesSample",user: 1,save: 1,init: 0,meta: "fixationusessample=0, a fixation circle is shown for subject to touch; fixationusessample=1, sample image is shown as the fixation image. This allows implementation of a trianing strategy where the subject has to engage the sample image nfixations number of times before the choice screen."},
		ImageBagsSample: -1, // {dataname: "ImageBagsSample",user: 1,save: 1,init: 0,meta: "List of (list of) paths, where entries at the top level are directories / imagepaths for the sample images of one group; e.g. [['/bear_images', '/dog_images'], '/face_images'] is a {bear, dog} versus face task"},
		ImageBagsTest: -1, // {dataname: "ImageBagsTest",user: 1,save: 1,init: 0,meta: "List of (list of) paths, where entries at the top level are directories / imagepaths for the test images of one group; e.g. [['/buttons/bear_icon.png, '/buttons/dog_icon.png'], ['/buttons/face_icon1.png, '/buttons/face_icon2.png']]"},
		fixationScale: -1, // {dataname: "FixationScale",user: 1,save: 1,init: 1,meta: "Size of fixation image in units of sample image width."},
		fixationRadius:-1, //  {dataname: "FixationRadius",user: 0,save: 1,init: 0,meta: "Radius of fixation image in pixels. This is not set by the user. Rather, user specifies fixationScale, and then fixationRadius stores the actual pixel-based size in the json data file."},
		sampleScale: -1, // {dataname: "SampleScale",user: 1,save: 1,init: 1,meta: "Size of sample image in units of sample image width. sampleScal=1 displays a npx x npx image on npx x npx screen pixels on the screen (i.e. no up or down sampling/resizing/filtering of the image)"},
		testScale: -1, // {dataname: "TestScale",user: 1,save: 1,init: 1,meta: "Size of the test image in units of sample image width"},
		automator: -1, // {dataname: "Automator",user: 1,save: 1,init: 0,meta: "Boolean on/off"},
		AutomatorStage: "", // {dataname: "CurrentAutomatorStage",user: 1,save: 1,init: 0,meta: "Training stage of automator."},
		currentAutomatorStageName: "", // {dataname: "CurrentAutomatorStageName",user: 0,save: 1,init: "",meta: "Name of current automator training stage."},
		automatorFilePath: "", // {dataname: "AutomatorFilePath",user: 1,save: 1,init: "",meta: "File path for additional automator params to adjust the automator curriculum."},
		fixationGrid: [], // {dataname: "FixationGridIndex",user: 0,save: 1,init: [],meta: "Fixation grid location on each trial."},
		nreward: -1, // {dataname: "NReward",user: 0,save: 1,init: [],meta: "The number of rewards given at the end of the trial; usually 1x reward unless subject got many trials in a row correct in which case may get bonus reward according to nconsecutivehitsforbonus."},
	}
}