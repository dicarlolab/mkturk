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

	TASK.currdate = new Date;

	FLAGS.consecutivehits = 0; 
	FLAGS.need2loadImages = 1; 
	FLAGS.current = 0; 

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
		sequencepre: [0,3],
		tsequencepre: [0,300],
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
	var boundingBoxFixation=[]; //where the fixation dot is on the canvas
	var boundingBoxesTest = []; //where the test images are on the canvas
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
	


	var env = {};
	
//================== INITIALIZE VARIABLES (end) ==================//
