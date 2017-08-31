// For each experimenter's installation of mkturk, this contains information for dropbox keys, savepaths, stimuli
// Also used for liveplot to identify where to look for behavioral files

// ------ Dropbox WebApp settings ------ 
// MKTURK

var DBX_CLIENT_ID = "jufvjpyt19d4eh7"
var DBX_REDIRECT_URI_ROOT = "https://s3.amazonaws.com/monkeyturk/"


// ------ Save location settings ------
// Make sure to include the forward slash for the savepaths 

var TRIAL_DATA_SAVEPATH = "/Behavior/trial_logfiles/"
var TOUCH_DATA_SAVEPATH = "/Behavior/touch_logfiles/"
var _debug_TRIAL_DATA_SAVEPATH = "/Behavior/debug/debug_trial_logfiles/"
var _debug_TOUCH_DATA_SAVEPATH = "/Behavior/debug/debug_touch_logfiles/"


var PARAM_DIRPATH = "/Tasks/SubjectParameters/"
var SOUND_FILEPREFIX = "/Resources/sounds/au"


// New 
var SUBJECT_DIRPATH = "/Subjects/SubjectSettings/" // SubjectID; tablet; pump; liquid; species
var CHECKPOINT_DIRPATH = "/Subjects/SubjectCheckpoints/" // Used to revivify the state of a TaskStream
var _debug_CHECKPOINT_DIRPATH = "/Subjects/debug/SubjectCheckpoints/"


var EXPERIMENT_DIRPATH = "/Tasks/ExperimentDefinitions/" // Used to define the TaskStream trial generator




// ------ Misc. -----------------------
var num_preload_images=0; // how long can you/the NHP bother waiting at each imageload? 400 images ~ 30 seconds. Recommended to keep = 0 with good internet connection and automator on
var max_save_rate = 1/5 // times per second; i.e. once every five seconds

var TOUCHSTRING_MAX_CACHE_SIZE = 30000 // saves if touchstring gets to be 30k characters or larger
var TOUCHSTRING_SAVE_TIMEOUT_PERIOD_IN_SECONDS = 10 // saves touches at most every TOUCHSTRING_SAVE_TIMEOUT_PERIOD seconds
var TOUCHSTRING_SAVE_TIMEOUT_PERIOD = TOUCHSTRING_SAVE_TIMEOUT_PERIOD_IN_SECONDS * 1000 
var last_touch_save = performance.now()


var TRIALDATA_SAVE_TIMEOUT_PERIOD_IN_SECONDS = 5 // 
var TRIALDATA_SAVE_TIMEOUT_PERIOD = TRIALDATA_SAVE_TIMEOUT_PERIOD_IN_SECONDS * 1000 
var last_trial_data_save = performance.now()

var PARAMFILE_CHECK_TIMEOUT_PERIOD = 5000 // Check at most every five seconds 
var last_paramfile_check = performance.now()

var CHECKPOINT_SAVE_TIMEOUT_PERIOD = 7500 // Save at most every n milliseconds
// ------ todo: move into params file -