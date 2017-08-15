// For each experimenter's installation of mkturk, this contains information for dropbox keys, savepaths, stimuli
// Also used for liveplot to identify where to look for behavioral files

// ------ Dropbox WebApp settings ------ 
// MKTURK

var DBX_CLIENT_ID = "ayaj26gekiu83wo"
var DBX_REDIRECT_URI_ROOT = "https://dicarlo5.mit.edu/~mil/MonkeyTurk/mkturk/public/"


// ------ Subject settings ------ 
var subjectlist = [
"Eliaso","Michaelo","Zico","Waffles","Solo",
"Setta","Sausage","Picasso","Pablo","Crypto","Chromeo","Castro","Bento"
];

// ------ Save location settings ------
var DATA_SAVEPATH = "/MonkeyTurk/datafiles/"
var PARAM_DIRPATH = "/MonkeyTurk/parameterfiles/subjects/"
var SOUND_FILEPREFIX = "/MonkeyTurk/sounds/au"

// ------ Misc. -----------------------
var ndatafiles2read=5; // todo: change to trials. and use as upper bound (stop reading once you hit the first discrepancy). maybe this is effectively synonymous with mintrials
var num_preload_images=0; // how long can you/the NHP bother waiting at each imageload? 400 images ~ 30 seconds. Recommended to keep = 0 with good internet connection and automator on

// ------ todo: move into params file -