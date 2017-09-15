//================== INITIALIZE GLOBALS ==================//
// In the interest of code readability and spaghetti-minimization, the use of globals should be kept to a minimum, and instead explicit passage of variables into and out of functions is encouraged.
// For certain things, globals make sense and may even be required, like event listeners and async processes.


WORKSPACE_WIDTH_HEIGHT_RATIO = 1 // width divided by height
WORKSPACE_MARGIN = 10 // in percent; on whichever dimension is shorter (usually height); on each side

PLAYSPACE = {}

TOUCHSTRING = ""
TOUCHSTRING_UDPATECOUNTER = 0

MOUSESTRING = "" 
MOUSESTRING_UPDATE_COUNTER = 0

TRIAL_NUMBER_FROM_SESSION_START = 0 
TRIAL_NUMBER_FROM_TASKSTREAM_START = 0
RewardDuration = 0 

var ParamFilePath = ''; 

//var TASK // Current 


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


var TRIAL_BEHAVIOR = {} // Global that contains data variables that are incremented every trial, and are dumped to disk for scientific purposes.
initialize_TRIAL()

var DEVICE = {} // Does not change during a session on a particular device 
DEVICE.BatteryLDT = []
DEVICE.DevicePixelRatio = 1
DEVICE.CanvasRatio = undefined 
DEVICE.XGridCenter = undefined
DEVICE.YGridCenter = undefined
DEVICE.source_ImageHeightPixels = NaN; 
DEVICE.source_ImageWidthPixels = NaN;

var SESSION = {}
SESSION.SubjectID = ''
SESSION.UnixTimestampAtStart = window.performance.timing.navigationStart
SESSION.CurrentDate = new Date;
var __datestr = SESSION.CurrentDate.toISOString();
SESSION.TrialDataFileName_suffix = __datestr.slice(0, __datestr.indexOf(".")) + "_" + SESSION.SubjectID + ".txt";



var FLAGS = {} 
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
CANVAS.obj= {}

for (var i in CANVAS.names){
	CANVAS.obj[CANVAS.names[i]]=document.getElementById(CANVAS.names[i])
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




//================ UPDATE VARIABLE FUNCTIONS ================//


function transition_from_debug_to_science_trials(){


	// Revert TaskStreamer
	TS.transition_from_debug_to_science_mode()

	TOUCHSTRING = ""
	TOUCHSTRING_UDPATECOUNTER = 0
	
		
	initialize_TRIAL()
	
	TRIAL_NUMBER_FROM_SESSION_START = 0
	progressbar_names = [
						'AutomatorLoadBar',
						'ImageLoadBar',
						'StageBar',]

	for (var _p in progressbar_names){
		toggleProgressbar(0, progressbar_names[_p])
	}

	//toggleTextBox(0)
	toggleElement(0, "DebugMessageTextBox")
	toggleElement(0, "SessionTextBox")

	// Remove reload button
	document.querySelector("button[name=ReloadButton]").style.visibility = "hidden"

	// Dim save button
	document.querySelector("button[name=SyncButton]").style['background-color'] = "#808080"
	document.querySelector("button[name=SyncButton]").style.opacity = 0.3

	for (var i = 0; i <= CANVAS.names.length-1; i++) {
		//toggleCanvasStealthMode(0, CANVAS.obj[CANVAS.names[i]])
	}

	return 
}

function initialize_TRIAL(){
	TRIAL_BEHAVIOR.FixationGridIndex = []
	TRIAL_BEHAVIOR.SampleBagIndex = []
	TRIAL_BEHAVIOR.TestBagIndices = []
	TRIAL_BEHAVIOR.Response = []
	TRIAL_BEHAVIOR.CorrectItem = []
	TRIAL_BEHAVIOR.Return = []
	TRIAL_BEHAVIOR.CurrentStageIndex = []
	TRIAL_BEHAVIOR.trial_num_Session = []
	TRIAL_BEHAVIOR.trial_num_Stage = []
	TRIAL_BEHAVIOR.reward_duration = []
	TRIAL_BEHAVIOR.StartTime = []

	TRIAL_BEHAVIOR.FixationX = []
	TRIAL_BEHAVIOR.FixationY = []
	TRIAL_BEHAVIOR.FixationT = []

	TRIAL_BEHAVIOR.ChoiceX = []
	TRIAL_BEHAVIOR.ChoiceY = []
	TRIAL_BEHAVIOR.ChoiceT = []

	TRIAL_BEHAVIOR.BoundingBoxesChoiceImages = []
	TRIAL_BEHAVIOR.BoundingBoxSampleImage = []
	TRIAL_BEHAVIOR.BoundingBoxFixationImage = []
	TRIAL_BEHAVIOR.choice_reward_amounts = []
}