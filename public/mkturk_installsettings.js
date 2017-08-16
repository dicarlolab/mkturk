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
var DATA_SAVEPATH = "/Behavior/science_logfiles/"
var PARAM_DIRPATH = "/Tasks/SubjectParameters/"
var SOUND_FILEPREFIX = "/Resources/sounds/au"
var AUTOMATOR_FILEPATH

// ------ Misc. -----------------------
var ndatafiles2read=5; // todo: change to trials. and use as upper bound (stop reading once you hit the first discrepancy). maybe this is effectively synonymous with mintrials
var num_preload_images=0; // how long can you/the NHP bother waiting at each imageload? 400 images ~ 30 seconds. Recommended to keep = 0 with good internet connection and automator on

// ------ todo: move into params file -