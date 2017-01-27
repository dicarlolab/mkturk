//================== INITIALIZE VARIABLES ==================//
// Variables (general)
	var TASK = {} // Global that encapsulates state of the current task 
	var FLAGS = {} // Global that keeps track of the task's requests to the Dropbox/server/disk/whatever; buffering requests; etc. The scientist does not care about tracking this variable.
	var TRIAL = {}
	TRIAL.sample = []
	TRIAL.test = []
	TRIAL.correctItem = []
	TRIAL.tstart = []
	TRIAL.xytfixation=[]
	TRIAL.fixationGrid = []
	TRIAL.response = []
	TRIAL.xytresponse = []
	TRIAL.nreward = []
	TRIAL.automatorStage = []

	

	FLAGS.consecutivehits = 0; 
	FLAGS.need2loadImages = 1; 
	FLAGS.current = 0; 


	var ENV = {}; // Task specific variables that are slaves to TASK settings, but still desired to be recorded. Hence, they should not appear in the TASK-based params file, but should be logged on their own. 
	ENV.subjectID = ''
	ENV.currdate = new Date;
	ENV.ht = NaN; 
	ENV.wd = NaN; 
	ENV.reward = NaN; 
	ENV.ordered_samplebag_filenames = []
	ENV.ordered_testbag_filenames = []
	ENV.paramfile = ''
	ENV.paramfile_rev = ''
	ENV.paramfile_date = ''
	ENV.filename = ''



	var subjectdialog = document.getElementById("subjectID_dialog");
	var subjectlistobj = document.getElementById("subjectID_list");
	//populate list
	for (var q=subjectlist.length-1; q>=0; q--){
		// add menu option
		var opt = document.createElement('option');
		opt.value = q;
		opt.innerHTML = subjectlist[q];
		subjectlistobj.appendChild(opt);
	}
	subjectlistobj.addEventListener("change",subjectlist_listener,false);

	var canvas = {
		blank: 0,
		sample: 1,
		test: 2,
		touchfix: 3,
		eyefix: 4,
		reward: 5,
		photoreward: 6,
		punish: 7,
		front: 0,
		sequenceblank: [0,0],
		tsequenceblank: [0,100],
		sequencepre: [3],
		tsequencepre: [300],
		sequence: [0,1,0,2], //0=gray 1=sample 2=test 3=touchfix 4=reward 5=punish
		tsequence: [0,100,200,400], //timing between frames
		sequencepost: [0,5,6],
		tsequencepost: [0,25,600],
		buffered: 0,
		headsupfraction: 1/3,
		offsetleft: 0,
		offsettop: 0,
	};

	var frame = {
		current: 0,
		shown: [],
	}
	var sounds = {
		folder: "/MonkeyTurk/sounds/au",
		serial: [0,1,2,3,4],
		buffer: [],
	}
	var boundingBoxFixation={}; //where the fixation dot is on the canvas
	var boundingBoxesTest = {}; //where the test images are on the canvas
	var waitforClick; //variable to hold generator
	var fixationTimer; //variable to hold timer
	var xgrid=[];
	var ygrid=[];
	var xgridcent=[];
	var ygridcent=[];
	var curridx = null;
	var battery = {
		current: 0,
		ldt: [],
	}
	var datafiles=[];


	

// Variable functions
function purgeTrackingVariables(){
	// Purges heresies committed in the test period 
	TRIAL = {}
	TRIAL.sample = []
	TRIAL.test = []
	TRIAL.correctItem = []
	TRIAL.tstart = []
	TRIAL.xytfixation=[]
	TRIAL.fixationGrid = []
	TRIAL.response = []
	TRIAL.xytresponse = []
	TRIAL.nreward = []
	TRIAL.automatorStage = []

	ENV.currdate = new Date;
	var datestr = ENV.currdate.toISOString();
	ENV.filename = datestr.slice(0,datestr.indexOf(".")) + "_" + ENV.subjectID + ".txt";

	FLAGS.current_trial = 0; 
	FLAGS.sampleblockcount = 0; 

	return 
}


function instantiateDefaultVariableValues(){

	var FLAGS = {
				savedata: {dataname: "SaveData",user: 0,save: 0,init: 0,meta: "Flag that allows trials to be performed without saving any data. trial.savedata=0 is used when the task is first loaded to do a few test trials before the subject is presented with the task."},
				takephoto: {dataname: "TakePhoto",user: 0,save: 0,init: 0,meta: "takephoto=1, use tablet camera to take photo during various task phases within a trial. If setting takephoto=1, check to make sure system performance/speed is not affected."},
				runvideo: {dataname: "RunVideo",user: 0,save: 0,init: 0,meta: "runvideo=1 will start a video object for showing camera feed on heads up display. runvideo=0 means no video object is created which may ensure better system performance."},

	}

	var TASK = {
		subjectID: {dataname: "Subject",user: 0,save: 1,init: "",meta: "Name of subject, chosen from pulldown menu at beginning of task."},
		weight: {dataname: "Weight",user: 1,save: 1,init: 0,meta: "Weight in kilograms"},
		species: {dataname: "Species",user: 1,save: 1,init: "",meta: "Name of primate species: marmoset, macaque, or human"},
		homecage: {dataname: "Homecage",user: 1,save: 1,init: 1,meta: "Where task was performed. 0=lab 1=subject's home"},
		separated: {dataname: "Separated",user: 1,save: 1,init: 1,meta: "0=subject was paired with conspecific during task performance, 1=subject was separated from conspecific"},
		liquid: {dataname: "Liquid",user: 1,save: 1,init: 1,meta: "1=water 2=water-condensed milk 3=marshmallow slurry (4/30mL)"},
		tablet: {dataname: "Tablet",user: 1,save: 1,init: "",meta: "Tablet used: nexus9, samsung10, googlepixelc10"},
		pump: {dataname: "Pump",user: 1,save: 1,init: 3,meta: "1=adafruit peristaltic 2=submersible centrifugal tcs 3=diaphragm pump tcs 4=piezoelectric 3mL takasago 5=newer diaphragm pumps tcs 6=piezoelectric 7mL takasago"},
		ngridpoints: {dataname: "NGridPoints",user: 1,save: 1,init: 3,meta: "Number of display grid points in either direction. Produces square grid. 3x3 is typical. Images (fixation,sample, & test) will appear centered on one of the grid points. Grid is serially zero indexed by rows then columns. ngridpoints can be made larger to allow for more response choices to be simultaneously displayed."},
		gridscale: {dataname: "GridScale",user: 1,save: 1,init: 1,meta: "Determines intergridpoint spacing. Can think of this as the resolution of grid. gridscale=1 means intergridpoint spacing is equal to the width of the sample image. Finer grid resolutions (gridscale<1) can be used for more precise sample positioning."},
		fixationGridindex: {dataname: "StaticFixationGridIndex",user: 1,save: 0,init: [5],meta: "Index on the grid where the fixation image will appear. If fixationMove>0, then fixationGridindex is ignored."},
		sampleGrid: {dataname: "SampleGridIndex",user: 1,save: 1,init: [4],meta: "Index on grid where sample image appears. sampleGrid=4 centers the image on a 3x3 grid, where ngridpoints=3"},
		testGrid: {dataname: "TestGridIndex",user: 1,save: 1,init: [2,8],meta: "Index on grid where test images (choices) appear."},
		objectGrid: {dataname: "ObjectGridIndex",user: 1,save: 1,init: [],meta: "Used for SR task. If this variable is set, then each object is tied to a particular location on the grid. objectGrid.length must equal objectlist.length for appropriate assignment of each object label to a grid location"},
		rewardStage: {dataname: "RewardStage",user: 1,save: 1,init: 1,meta: "rewardStage=0 rewards for successful fixtion and skips the choice phase of task. rewardStage=1 rewards for selecting the correct choice."},
		rewardper1000: {dataname: "RewardPer1000Trials",user: 1,save: 1,init: 1,meta: "Amount of liquid reward in mL for 1000 correct trials. For macaques, this is around 100mL for every 1000 correct trials."},
		punish: {dataname: "PunishTimeOut",user: 1,save: 1,init: 1000,meta: "Time out in milliseconds for incorrect responses. Black square and incorrect sound may be presented for feedback during this time."},
		nfixations: {dataname: "NFixations",user: 1,save: 1,init: 1,meta: "Number of times fixation dot needs to be pressed to advance to the match to sample phase of the task. nfixations=1 means the subject simply has to press the fixation dot once before the sample is presented. This mode allow parametric control over fixed ratio scheduling."},
		fixationDur: {dataname: "FixationDuration",user: 1,save: 1,init: 0,meta: "How long subject has to hold fixation touch in milliseconds for a successful fixation to register. fixationdur<0, then the program skips the fixation step and instead presents the sample image at the beginning of the trial"},
		fixationMove: {dataname: "fixationMove",user: 1,save: 1,init: 0,meta: "fixationMove=0, fixation image is presented at fixationGridindex. fixationMove=N, N>0, fixation image is presented at a randomly selected grid point and the fixation position is redrawn every N milliseconds. fixationMove > 0 can be used to train subjects to touch different screen locations or to calibrate an eyetracker."},
		sampleON: {dataname: "SampleON",user: 1,save: 1,init: 1,meta: "Duration in milliseconds that sample image is presented"},
		sampleOFF: {dataname: "SampleOFF",user: 1,save: 1,init: 1,meta: "Duration in milliseconds that a gray screen is presented after the sample image before the response screen. This implements the delay in a DMS task. sampleOFF=0, leads to no delay"},
		keepSampleON: {dataname: "KeepSampleON",user: 1,save: 1,init: 0,meta: "keepSampleON=0, sample is presented only for sampleON milliseconds for a delayed match-to-sample, keepSampleON=1 sample remains on during choice scree. This implements a spatial match to sample."},
		hideTestDistractors: {dataname: "HideTestDistractors",user: 1,save: 1,init: 0,meta: "hideTestDistractors=1, hides the distractor choices so that subject only sees matching choice."},
		sampleBlockSize: {dataname: "SampleBlockSize",user: 1,save: 1,init: 0,meta: "Number of consecutive times to present a sample from the same object label (if want subject performing blocked object recognition). SampleBlockSize=0 means sample is drawn randomly from all available objects in objectlist."},
		nstickyreponse: {dataname: "NStickyResponse",user: 1,save: 1,init: 5,meta: "Number of times subject can choose the same location on the screen before force them out of it by placing the correct answer somewhere else (i.e. if they have response bias, then on the next trial, the correct choice is drawn somewhere away from that bias)."},
		consecutivehitsITI: {dataname: "ConsecutiveHitsITI",user: 1,save: 1,init: 8000,meta: "Maximum time in milliseconds allowed to elapse from the previous trial for the current trial to count toward reward accumulation for a string of correct responses. For example, if consecutivehitsITI=8000, then subject has 8 seconds to complete the next trial successfully and the consecutivehits counter will be incremented. Otherwise, the number of consecutivehits will get set to 0"},
		nconsecutivehitsforbonus: {dataname: "NConsecutiveHitsforBonus",user: 1,save: 1,init: 4,meta: "How many consecutive hits subject needs for the reward amount to increase.  If nconsecutivehitsforbonus=4, then subject will get 2x reward for correct responses on 4 consecutive trials, 3x reward for correct responses on 8 consecutive trials, up to nrewardmax times of 1x reward. This is a way to make chance on a 2AFC task be virtually < 50% since reward is jointly distributed across trials rather than independently on the current trial."},
		nrewardmax: {dataname: "NRewardMax",user: 1,save: 1,init: 1,meta: "Max number of rewards that can be given for a successful trial. This caps how much extra (bonus) reward subject can get for successful completion of consecutive trials. If nrewardmax=3, then subject can get up to 3x reward for completing 3*nconsecutivehitsforbonus consecutive trials successfully, and then would get 3x reward after that until gets a trial wrong."},
		fixationUsesSample: {dataname: "FixationUsesSample",user: 1,save: 1,init: 0,meta: "fixationusessample=0, a fixation circle is shown for subject to touch; fixationusessample=1, sample image is shown as the fixation image. This allows implementation of a trianing strategy where the subject has to engage the sample image nfixations number of times before the choice screen."},
		imageBagsSample: {dataname: "ImageBagsSample",user: 1,save: 1,init: 0,meta: "List of (list of) paths, where entries at the top level are directories / imagepaths for the sample images of one group; e.g. [['/bear_images', '/dog_images'], '/face_images'] is a {bear, dog} versus face task"},
		imageBagsTest: {dataname: "ImageBagsTest",user: 1,save: 1,init: 0,meta: "List of (list of) paths, where entries at the top level are directories / imagepaths for the test images of one group; e.g. [['/buttons/bear_icon.png, '/buttons/dog_icon.png'], ['/buttons/face_icon1.png, '/buttons/face_icon2.png']]"},
		fixationScale: {dataname: "FixationScale",user: 1,save: 1,init: 1,meta: "Size of fixation image in units of sample image width."},
		fixationRadius: {dataname: "FixationRadius",user: 0,save: 1,init: 0,meta: "Radius of fixation image in pixels. This is not set by the user. Rather, user specifies fixationScale, and then fixationRadius stores the actual pixel-based size in the json data file."},
		sampleScale: {dataname: "SampleScale",user: 1,save: 1,init: 1,meta: "Size of sample image in units of sample image width. sampleScal=1 displays a npx x npx image on npx x npx screen pixels on the screen (i.e. no up or down sampling/resizing/filtering of the image)"},
		testScale: {dataname: "TestScale",user: 1,save: 1,init: 1,meta: "Size of the test image in units of sample image width"},
		automator: {dataname: "Automator",user: 1,save: 1,init: 0,meta: "Boolean on/off"},
		AutomatorStage: {dataname: "CurrentAutomatorStage",user: 1,save: 1,init: 0,meta: "Training stage of automator."},
		currentAutomatorStageName: {dataname: "CurrentAutomatorStageName",user: 0,save: 1,init: "",meta: "Name of current automator training stage."},
		automatorFilePath: {dataname: "AutomatorFilePath",user: 1,save: 1,init: "",meta: "File path for additional automator params to adjust the automator curriculum."},
		params: {dataname: "Params",user: 0,save: 1,init: "",meta: "Path to subject parameter file, e.g. /MonkeyTurk/parameterfiles/Zico_params.txt"},
		fixationGrid: {dataname: "FixationGridIndex",user: 0,save: 1,init: [],meta: "Fixation grid location on each trial."},
		nreward: {dataname: "NReward",user: 0,save: 1,init: [],meta: "The number of rewards given at the end of the trial; usually 1x reward unless subject got many trials in a row correct in which case may get bonus reward according to nconsecutivehitsforbonus."},
	}

	return [TASK, FLAGS]
}