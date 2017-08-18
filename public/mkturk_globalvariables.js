//================== INITIALIZE GLOBALS ==================//
// In the interest of code readability and spaghetti-minimization, the use of globals should be kept to a minimum, and instead explicit passage of variables into and out of functions is encouraged.
// For certain things, globals make sense and may even be required, like event listeners and async processes.

//================ TASK,TRIAL,ENV (SAVED) ================//
// TASK <-- Read from Subject Parameter file
// ENV <-- TASK drives creation of ENV
// TASK,TRIAL,ENV --> Saved to Behavioral Data file


TOUCHSTRING = ""
TOUCHSTRING_UDPATECOUNTER = 0

var TASK = {}; // Global that encapsulates state of the current task, read from Subject's Params file
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
TRIAL.TrialNumber = []

var ENV = {}; // Task specific variables that are slaves to TASK settings, but still desired to be recorded. Hence, they should not appear in the TASK-based params file, but should be logged on their own. 
ENV.Subject = ''
ENV.UnixTimestampAtStart = window.performance.timing.navigationStart
ENV.CurrentDate = new Date;
ENV.ImageHeightPixels = NaN; 
ENV.ImageWidthPixels = NaN;
ENV.CanvasRatio = 1
ENV.DevicePixelRatio = 1
ENV.FixationRadius = 0
ENV.XGridCenter = []
ENV.YGridCenter = []
ENV.RewardDuration = NaN
ENV.ParamFileName = ''
ENV.ParamFileRev = ''
ENV.ParamFileDate = '' //stores complete path to subject parameter file

var datestr = ENV.CurrentDate.toISOString();
ENV.TrialDataFileName = datestr.slice(0,datestr.indexOf(".")) + "_" + ENV.Subject + ".txt";


ENV.BatteryLDT = []


//================ OTHER GLOBALS (NOT SAVED) ================//
var FLAGS = {} 
FLAGS.need2loadImages = 1; 
FLAGS.need2loadParameters = 1; 
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
CURRTRIAL.tsequenceactual = []
CURRTRIAL.tsequencedesired = []


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
	TASK = __initial_load_TASK
	__initial_load_TASK = {}

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
	TRIAL.TrialNumber = []

	CURRTRIAL.num = 0


	return 
}