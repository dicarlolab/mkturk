// For each experimenter's installation of mkturk, this contains information for dropbox keys, savepaths, stimuli
// Also used for liveplot to identify where to look for behavioral files

// ------ Dropbox WebApp settings ------ 
// MKTURK

var DBX_CLIENT_ID = "jufvjpyt19d4eh7"
var DBX_REDIRECT_URI_ROOT = "https://dicarlo5.mit.edu/~mil/MonkeyTurk/mkturk/public/"


// ------ Subject settings ------ 
var subjectlist = [
"Michaelo","Zico",
"Crypto","Chromeo"
];

// ------ Save location settings ------
// Make sure to include the forward slash for the savepaths 

var TRIAL_DATA_SAVEPATH = "/Behavior/trial_logfiles/"
var TOUCH_DATA_SAVEPATH = "/Behavior/touch_logfiles/"
var _debug_TRIAL_DATA_SAVEPATH = "/Behavior/debug/debug_trial_logfiles/"
var _debug_TOUCH_DATA_SAVEPATH = "/Behavior/debug/debug_touch_logfiles/"


var PARAM_DIRPATH = "/Tasks/SubjectParameters/"
var SOUND_FILEPREFIX = "/Resources/sounds/au"
var AUTOMATOR_FILEPATH

// ------ Misc. -----------------------
var ndatafiles2read=5; // todo: change to trials. and use as upper bound (stop reading once you hit the first discrepancy). maybe this is effectively synonymous with mintrials
var num_preload_images=0; // how long can you/the NHP bother waiting at each imageload? 400 images ~ 30 seconds. Recommended to keep = 0 with good internet connection and automator on
var max_save_rate = 1/5 // times per second; i.e. once every five seconds

var TOUCHSTRING_MAX_CACHE_SIZE = 30000 // saves if touchstring gets to be 30k characters or larger
var TOUCHSTRING_SAVE_TIMEOUT_PERIOD_IN_SECONDS = 10 // saves touches at most every TOUCHSTRING_SAVE_TIMEOUT_PERIOD seconds
var TOUCHSTRING_SAVE_TIMEOUT_PERIOD = TOUCHSTRING_SAVE_TIMEOUT_PERIOD_IN_SECONDS * 1000 
var last_touch_save = performance.now()


var TRIALDATA_SAVE_TIMEOUT_PERIOD_IN_SECONDS = 5 // 
var TRIALDATA_SAVE_TIMEOUT_PERIOD = TRIALDATA_SAVE_TIMEOUT_PERIOD_IN_SECONDS * 1000 
var last_trial_data_save = performance.now()
// ------ todo: move into params file -