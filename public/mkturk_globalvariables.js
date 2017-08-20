//================== INITIALIZE GLOBALS ==================//
// In the interest of code readability and spaghetti-minimization, the use of globals should be kept to a minimum, and instead explicit passage of variables into and out of functions is encouraged.
// For certain things, globals make sense and may even be required, like event listeners and async processes.


FixationRadius = 0

TOUCHSTRING = ""
TOUCHSTRING_UDPATECOUNTER = 0

TRIAL_NUMBER_FROM_SESSION_START = 0 
TRIAL_NUMBER_FROM_TASKSTREAM_START = 0
RewardDuration = 0 

var ParamFilePath = ''; 
var ParamFileRev = ''; // Tracks revision number of the TASK file on disk. 

TASK_ARCHIVE_COUNTER = 0 // attached to trial data
var TASK_ARCHIVE = []; // Array whose entries are objects that encapsulates state of the current task, read from Subject's Params file
var TASK // Current 

var TRIAL = {} // Global that contains data variables that are incremented every trial, and are dumped to disk for scientific purposes.
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
TRIAL.trial_num_Session = []
TRIAL.trial_num_TaskStream = []
TRIAL.reward_duration = []
TRIAL.TASK_ARCHIVE_counter = []

var DEVICE = {} // Does not change during a session on a particular device 
DEVICE.BatteryLDT = []
DEVICE.DevicePixelRatio = 1
DEVICE.CanvasRatio = 1
DEVICE.XGridCenter = []
DEVICE.YGridCenter = []
DEVICE.source_ImageHeightPixels = NaN; 
DEVICE.source_ImageWidthPixels = NaN;

var SESSION = {}
SESSION.Subject = ''
SESSION.UnixTimestampAtStart = window.performance.timing.navigationStart
SESSION.CurrentDate = new Date;
var __datestr = SESSION.CurrentDate.toISOString();
SESSION.TrialDataFileName_suffix = __datestr.slice(0, __datestr.indexOf(".")) + "_" + SESSION.Subject + ".txt";



var FLAGS = {} 
FLAGS.need2loadImages = 1; 
FLAGS.need2loadParameters = 0; 
FLAGS.debug_mode = 1; 

FLAGS.waitingforTouches = 0
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

var CURRTRIAL = {}
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
CURRTRIAL.tsequenceactual = []
CURRTRIAL.tsequencedesired = []
CURRTRIAL.TASK_idx = []

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


function transition_from_debug_to_science_trials(){

	// Reset TASK to initial load state 
	TASK_ARCHIVE = __initial_load_TASK_ARCHIVE
	__initial_load_TASK_ARCHIVE = undefined
	TASK = __initial_load_TASK
	__initial_load_TASK = undefined
	TASK_ARCHIVE_COUNTER = 0

	// Reset automator 
	if(TASK.Automator == 1){
		console.log("Reset AM")
		AM.resetToInitialLoadState()
	}

	//Used to transition from test to experimental mode 
	
	TOUCHSTRING = ""
	TOUCHSTRING_UDPATECOUNTER = 0
	

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
	TRIAL.trial_num_Session = []

	TRIAL_NUMBER_FROM_SESSION_START = 0
	TRIAL_NUMBER_FROM_TASKSTREAM_START = 0 // todo: read from disk


	return 
}