// For each experimenter's installation of mkturk, this contains information for dropbox keys, savepaths, stimuli
// Also used for liveplot to identify where to look for behavioral files

// ------ Subject settings ------ 
var subjectlist = [
"Eliaso","Youno","Sophieo","West","Waffles","Sausage","Rafiki","Hutch","East","Bloo","Blintz","Blaise","AJ","You-Nah","Tahereh","Sophie","Elias","Alex"
];

// ------ Save location settings ------
var DATA_SAVEPATH = "/mkturkfiles/datafiles/"
var PARAM_DIRPATH = "/mkturkfiles/parameterfiles/subjects/"
var SOUND_FILEPREFIX = "/mkturkfiles/sounds/au"

var FIREBASE_COLLECTION = 'mkturkdata'

// ------ Misc. -----------------------
var ndatafiles2read=5; // todo: change to trials. and use as upper bound (stop reading once you hit the first discrepancy). maybe this is effectively synonymous with mintrials

// ------ todo: move into params file -