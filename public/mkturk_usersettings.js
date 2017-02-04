// For each experimenter's installation of mkturk, this contains information for dropbox keys, savepaths, stimuli
// Also used for liveplot to identify where to look for behavioarl files


// ------ Dropbox settings ------ 
var DBX_CLIENT_ID = "62jec4hj1swj2ee"
var DBX_REDIRECT_URI = "https://dl.dropboxusercontent.com/spa/tnra0lpcs5uvy54/GHprototype_mkturk/mkturk/public/mkturk.html"

// ------ Subject settings ------ 
var subjectlist = ["Crypto", "Michaelo"];

// ------ Save location settings ------
var DATA_SAVEPATH = "/MonkeyTurk/behavior_files/"
var PARAM_DIRPATH = "/MonkeyTurk/parameterfiles/"

// ------ Misc. -----------------------
var ndatafiles2read=5; // todo: change to trials. and use as upper bound (stop reading once you hit the first discrepancy). maybe this is effectively synonymous with mintrials
var num_preload_images = 0; // how long can you/the NHP bother waiting at each imageload? 400 images ~ 30 seconds. Recommended to keep = 0 with good internet connection and automator on

// ------ todo: move into params file -
