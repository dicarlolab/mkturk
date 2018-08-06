// For each experimenter's installation of mkturk, this contains information for dropbox keys, savepaths, stimuli
// Also used for liveplot to identify where to look for behavioral files

// ------ Dropbox WebApp settings ------ 

// MKTURK
var DBX_CLIENT_ID = "0o7n0wq1krlwwod"
// var DBX_REDIRECT_URI_ROOT = "http://127.0.0.1:8080/"
// "https://dl.dropboxusercontent.com/spa/k79b8ph6lmcr30d/mkturk/public/"
//var DBX_REDIRECT_URI_ROOT = "https://sandbox-ce2c5.firebaseapp.com/mkturk/"
var DBX_REDIRECT_URI_ROOT = "https://129.236.161.20:443/mkturk/public/"

// ------ Subject settings ------ 
var subjectlist = [
"Eliaso","Michaelo"
];

// ------ Save location settings ------
var DATA_SAVEPATH = "/datafiles/"
var PARAM_DIRPATH = "/parameterfiles/subjects/"
var SOUND_FILEPREFIX = "/sounds/au"

// ------ Misc. -----------------------
var ndatafiles2read=5; // todo: change to trials. and use as upper bound (stop reading once you hit the first discrepancy). maybe this is effectively synonymous with mintrials
var num_preload_images=0; // how long can you/the NHP bother waiting at each imageload? 400 images ~ 30 seconds. Recommended to keep = 0 with good internet connection and automator on

// ------ todo: move into params file -