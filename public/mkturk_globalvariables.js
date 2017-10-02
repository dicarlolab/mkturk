//================== INITIALIZE GLOBALS ==================//
// In the interest of code readability and spaghetti-minimization, the use of globals should be kept to a minimum, and instead explicit passage of variables into and out of functions is encouraged.
// For certain things, globals make sense and may even be required, like event listeners and async processes.

PLAYSPACE = {}

TOUCHSTRING = ""
TOUCHSTRING_UDPATECOUNTER = 0

MOUSESTRING = "" 
MOUSESTRING_UPDATE_COUNTER = 0

TRIAL_NUMBER_FROM_SESSION_START = 0 
TRIAL_NUMBER_FROM_TASKSTREAM_START = 0

SUBMIT_TO_SANDBOX = false 
var SUBJECT = {}


var SESSION = {} // Does not change during a session on a particular device 
SESSION.BatteryLDT = []
SESSION.DevicePixelRatio = window.devicePixelRatio || 1
SESSION.navigator_appVersion = navigator.appVersion
SESSION.navigator_platform = navigator.platform
SESSION.navigator_userAgent = navigator.userAgent
SESSION.navigator_vendor = navigator.vendor
SESSION.navigator_language = navigator.language


var windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;


var windowWidth = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

SESSION.windowHeight = windowHeight
SESSION.windowWidth = windowWidth


SESSION.SubjectID = ''
SESSION.UnixTimestampAtStart = window.performance.timing.navigationStart
SESSION.CurrentDate = new Date;
SESSION.url = window.location.href


var FLAGS = {} 
FLAGS.debug_mode = 1; 



function transition_from_debug_to_science_trials(){

	// Revert TaskStreamer
	TS.transition_from_debug_to_science_mode()

	DWr.initialize()
	
	TRIAL_NUMBER_FROM_SESSION_START = 0

	// Turn off certain HTML elements
	progressbar_names = [
						'AutomatorLoadBar',
						'StageBar',]

	for (var _p in progressbar_names){
		toggleProgressbar(0, progressbar_names[_p])
	}

	//toggleTextBox(0)
	toggleElement(0, "DebugMessageTextBox")
	toggleElement(0, "SessionTextBox")

	// Remove reload button
	document.querySelector("button[name=ReloadButton]").style.visibility = "hidden"

	// Dim save button
	document.querySelector("button[name=SyncButton]").style['background-color'] = "#808080"
	document.querySelector("button[name=SyncButton]").style.opacity = 0.3

	return 
}
