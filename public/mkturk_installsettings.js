// For each experimenter's installation of mkturk, this contains information for dropbox keys, savepaths, stimuli
// Also used for liveplot to identify where to look for behavioral files

// ------ Dropbox WebApp settings ------ 
// MKTURK
var DBX_CLIENT_ID = "p4dju7hqsqpkm32" //mkturkissa
var DBX_REDIRECT_URI_ROOT = "http://localhost:5000/"
var DBX_REDIRECT_URI_ROOT = "https://sandbox-ce2c5.firebaseapp.com/"

// ------ Subject settings ------ 
var subjectlist = [
"Eliaso","Youno","Tahereho","Sophieo","Praneetho","West","Waffles","Setta","Sausage","Rafiki","Hutch","Barb","AJ"
];

// ------ Save location settings ------
var DATA_SAVEPATH = "/mkturkfiles/datafiles/"
var PARAM_DIRPATH = "/mkturkfiles/parameterfiles/subjects/"
var SOUND_FILEPREFIX = "/mkturkfiles/sounds/au"

// ------ Misc. -----------------------
var ndatafiles2read=5; // todo: change to trials. and use as upper bound (stop reading once you hit the first discrepancy). maybe this is effectively synonymous with mintrials
var num_preload_images=5; // how long can you/the NHP bother waiting at each imageload? 400 images ~ 30 seconds. Recommended to keep = 0 with good internet connection and automator on

// ------ todo: move into params file -