
// Continuously log x,y position until it hits a hotspot; then give juice and/or transition to the next canvas


// A value passed to next() will be treated as the result of the last yield expression that paused the generator.

function resize_event_listener(){
	// https://stackoverflow.com/questions/1664785/resize-html5-canvas-to-fit-window
	

	console.log('Resized body...')
}







function doneTestingTask_listener(event){
	event.preventDefault()
	//console.log("User is done testing. Start saving data");
	FLAGS.debug_mode = 0
	
	document.querySelector("button[name=doneTestingTask]").style.display = "none"
	return
}

function subjectlist_listener(event){
	//console.log("subject selected");

	SESSION.SubjectFilePath = subject_filepath_list[this.value]
	
	subjectdialog.close();
	waitforClick.next(1);
	return
}

function experimentlist_listener(event){

	SESSION.ExperimentFilePath = experiment_file_list[this.value]
	
	experiment_dialog.close();
	waitforClick.next(1);
	return
}


async function cash_in_listener(event){
	console.log('Worker called cash in')
	var original_text = document.querySelector("button[name=WorkerCashInButton]").innerHTML
	var original_color = document.querySelector("button[name=WorkerCashInButton]").style['background-color']

	document.querySelector("button[name=WorkerCashInButton]").innerHTML = 'Submitting...'

	document.querySelector("button[name=WorkerCashInButton]").style['background-color'] = '#ADFF97'
	
	await SP.playSound(5) // Chime
	
	TERMINAL_STATE = true // end on next trial

	document.querySelector("button[name=WorkerCashInButton]").style['background-color'] = original_color
	DWr.concludeSession()

	//document.querySelector("button[name=WorkerCashInButton]").innerHTML = original_text



	return 
}

async function sync_data_listener(event){
	console.log("Called data save from sync button")
	document.querySelector("button[name=SyncButton]").innerHTML = '....'

	var original_color = document.querySelector("button[name=SyncButton]").style['background-color']
	document.querySelector("button[name=SyncButton]").style['background-color'] = '#ADFF97'
	await DWr.saveTrialData(FLAGS.debug_mode)
	await DWr.saveTouches(FLAGS.debug_mode)
	await SP.playSound(5) // Chime
	document.querySelector("button[name=SyncButton]").style['background-color'] = original_color
	document.querySelector("button[name=SyncButton]").innerHTML = 'Save'

	return 
}

//================== PROMISE STATES ==================//
// Promise: Select Subject
function subjectIDPromise(){
	var resolveFunc
	var errFunc
	p = new Promise(
		function(resolve,reject){
			resolveFunc = resolve;
			errFunc = reject;
		}).then(
		function(resolveval){
			//console.log('User selected ' + resolveval)
		});
	
	function *waitforclickGenerator(){
		var imclicked =[-1];
		while (true){
			imclicked = yield imclicked;
			resolveFunc(imclicked);
		}
	}

	waitforClick = waitforclickGenerator(); // start async function
	waitforClick.next(); //move out of default state
	return p;
}

// Select Experiment file
function ExperimentFile_Promise(){
	var resolveFunc
	var errFunc
	p = new Promise(
		function(resolve,reject){
			resolveFunc = resolve;
			errFunc = reject;
		}).then(
		function(resolveval){
			//console.log('User selected ' + resolveval)
		});
	
	function *waitforclickGenerator(){
		var imclicked =[-1];
		while (true){
			imclicked = yield imclicked;
			resolveFunc(imclicked);
		}
	}

	waitforClick = waitforclickGenerator(); // start async function
	waitforClick.next(); //move out of default state
	return p;
}
