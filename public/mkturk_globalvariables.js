//================== INITIALIZE GLOBALS ==================//
// In the interest of code readability and spaghetti-minimization, the use of globals should be kept to a minimum, and instead explicit passage of variables into and out of functions is encouraged.
// For certain things, globals make sense and may even be required, like event listeners and async processes.



FixationRadius = 0
acquiredTouch = 0 

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


var EVENT_TIMESTAMPS = {}
EVENT_TIMESTAMPS.fixation_onset = [] // todo: move to control of task / screen state machine
EVENT_TIMESTAMPS.fixation_touch = []
EVENT_TIMESTAMPS.blank_onset = []
EVENT_TIMESTAMPS.stimulus_onset = []
EVENT_TIMESTAMPS.delay_onset = []
EVENT_TIMESTAMPS.choice_onset = []
EVENT_TIMESTAMPS.choice_touch = []
EVENT_TIMESTAMPS.reinforcement_onset = []
EVENT_TIMESTAMPS.reinforcement_end = []


var TRIAL = {} // Global that contains data variables that are incremented every trial, and are dumped to disk for scientific purposes.
TRIAL.FixationGridIndex = []
TRIAL.Sample = []
TRIAL.Test = []
TRIAL.Response = []
TRIAL.CorrectItem = []
TRIAL.Juice = []
TRIAL.NReward = []
TRIAL.AutomatorStage = []
TRIAL.trial_num_Session = []
TRIAL.trial_num_TaskStream = []
TRIAL.reward_duration = []
TRIAL.TASK_ARCHIVE_counter = []

var DEVICE = {} // Does not change during a session on a particular device 
DEVICE.BatteryLDT = []
DEVICE.DevicePixelRatio = 1
DEVICE.CanvasRatio = 
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
FLAGS.touchGeneratorCreated = 0

var CANVAS = {};
CANVAS.names= ["blank","sample","test","touchfix","eyefix","reward","photoreward","punish"]
CANVAS.front= "blank"
CANVAS.sequenceblank= ["blank","blank"],
CANVAS.tsequenceblank= [0,50],
CANVAS.sequencepre= ["touchfix"]
CANVAS.tsequencepre= [0]
CANVAS.sequence= ["blank","sample","blank","test"], // blank, sample, blank, tes
CANVAS.tsequence= NaN,
CANVAS.sequencepost= ["blank","reward","blank"], // blank, rewar
CANVAS.tsequencepost= [0,50,100]
CANVAS.offsetleft= 0
CANVAS.offsettop= 0
CANVAS.obj= []

for (var i in CANVAS.names){
	CANVAS.obj[CANVAS.names[i]]=document.getElementById("canvas" + CANVAS.names[i])
}



var boundingBoxesFixation=[]; //where the fixation touch targets are on the canva
var boundingBoxesChoice=[]; //where the choice touch targets are on the canva
var waitforClick; //variable to hold generator
var waitforEvent; //variable to hold generator
var touchTimer; //variable to hold timer
var xcanvascenter=[]
var ycanvascenter=[]
var curridx = null;
var datafiles=[];
var displayoutofboundsstr=""


FixationRewardMap = new RewardMap()
ChoiceRewardMap = new RewardMap()


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
	

	TRIAL.EventTimestamps = []
	TRIAL.FixationGridIndex = []
	TRIAL.Sample = []
	TRIAL.Test = []
	TRIAL.Response = []
	TRIAL.CorrectItem = []
	TRIAL.NReward = []
	TRIAL.AutomatorStage = []
	TRIAL.trial_num_Session = []
	TRIAL.trial_num_TaskStream = []
	TRIAL.reward_duration = []
	TRIAL.TASK_ARCHIVE_counter = []

	TRIAL_NUMBER_FROM_SESSION_START = 0
	CANVAS.TRIAL_NUMBER_FROM_TASKSTREAM_START = 0 // todo= read from dis


	return 
}