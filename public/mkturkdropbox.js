

//return whether user was redirected here after authenticating
function isAuthenticated(){
	return !!getAccessTokenFromUrl()
}

//parse access token from url if in urls hash
function getAccessTokenFromUrl(){
	return utils.parseQueryString(window.location.hash).access_token
}

//================== LIST FILES ==================//
// Asynchronous: Get file list from dropbox directory
async function getFileListDropbox2(){
	try{
	response = await dbx.filesListFolder({path: DATA_SAVEPATH+trial.subjid+'/'})
		console.log("success: read directory ")

		var q2=0;
		for (var q = 0; q <= response.entries.length-1; q++){
			if (response.entries[q][".tag"] == "file" && response.entries[q].name.indexOf(trial.subjid) != -1){
				datafiles[q2] = response.entries[q].name
				q2++;
			}
		}

		datafiles.sort(function (a,b){
			if (a > b){
				return -1;
			}
			if (a < b){
				return 1;
			}
			return 0;
		}); //sort in descending order
	}
	catch (error) {
		console.error(error)
	}
}

async function getFileListDropboxRecursive(dirpath){
	var file_list = []

	if(dirpath.endsWith('.png')){
		return [dirpath]
	}

	try{
		var entries = []
		response = await dbx.filesListFolder({path: dirpath, 
											  recursive: true}) 
		entries.push(... response.entries)

		// Use response.has_more to propagate 
		var num_iterations = 0
		var iteration_limit = 100
		while(response.has_more == true){
			response = await dbx.filesListFolderContinue(response.cursor)
			entries.push(... response.entries)

			num_iterations = num_iterations + 1 
			if(num_iterations > iteration_limit)
				{throw 'Hit iteration limit of '+iteration_limit+'. Check your imagebag directory is not insanely large.'}
		}

		console.log("Success. Read directory \""+dirpath+"\" (and any subdirectories). ")
		var q2=0;
		for (var q = 0; q <= entries.length-1; q++){
			if (entries[q][".tag"] == "file" && entries[q].name.endsWith(".png")) {
				file_list.push(entries[q].path_display) //'/'+entries[q].name)
				q2++;
			}
		}
		console.log(file_list.length+" files found.")

		datafiles.sort(function (a,b){
			if (a > b){
				return -1;
			}
			if (a < b){
				return 1;
			}
			return 0;
		}); //sort in descending order

		return file_list
	}
	catch (error) {
		console.error(error)
	}
}
//================== LIST FILES (end) ==================//


//================== CHECK FILE REV ==================//
// Asynchronous: Check for parmater file update
async function checkParameterFileStatus2(){
	try{
	filemeta = await dbx.filesGetMetadata({path: paramfile.name})
		if (paramfile.rev != filemeta.rev){
			paramfile.rev = filemeta.rev
			paramfile.date = new Date(filemeta.client_modified)

			trial.need2loadParameters = 1
			trial.need2loadImages = 1

			console.log('parameter file was updated rev=' + paramfile.rev)
		}
	}
	catch(error) {
		console.error(error)
	}
	return false
}
//================== CHECK FILE REV (end)==================//


//================== LOAD JSON ==================//
function readParametersfromDropbox2(){
	return new Promise(function(resolve,reject){
		dbx.filesDownload({path: paramfile.name}).then(function(data){
		console.log("success: read parameter file size" + data.size)

		paramfile.rev = data.rev
		paramfile.date = new Date(data.client_modified)

		var reader = new FileReader()
		reader.onload = function(e){
			paramfile.text = reader.result
			paramfile.data = JSON.parse(reader.result)

			// Set parameters
			env["weight"] = paramfile.data[0].Weight;
			env["species"] = paramfile.data[0].Species;
			env["homecage"] = paramfile.data[0].Homecage;
			env["separated"] = paramfile.data[0].Separated;
			env["liquid"] = paramfile.data[0].Liquid;
			env["tablet"] = paramfile.data[0].Tablet;
			env["pump"] = paramfile.data[0].Pump;
			trial["objectlist"] = paramfile.data[0].TestedObjects;
			trial["nway"] = paramfile.data[0].Nway;
			trial["samplegrid"] = paramfile.data[0].SampleGridIndex;
			trial["testgrid"] = paramfile.data[0].TestGridIndex;
			trial["objectgrid"] = paramfile.data[0].ObjectGridIndex; 
			trial["rewardStage"] = paramfile.data[0].RewardStage;
			trial["rewardper1000"] = paramfile.data[0].RewardPer1000Trials;
			trial["punish"] = paramfile.data[0].PunishTimeOut;
			trial["fixationdur"] = paramfile.data[0].FixationDuration;
			trial["fixationradius"] = paramfile.data[0].FixationRadius;
			trial["fixationmove"] = paramfile.data[0].FixationMove;
			trial["sampleON"] = paramfile.data[0].SampleON;
			trial["sampleOFF"] = paramfile.data[0].SampleOFF;
			trial["keepSampleON"] = paramfile.data[0].KeepSampleON;
			trial["hidetestdistractors"] = paramfile.data[0].HideTestDistractors;
			trial["sampleblocksize"] = paramfile.data[0].SampleBlockSize;
			trial["nstickyresponse"] = paramfile.data[0].NStickyResponse;
			trial["consecutivehitsITI"] = paramfile.data[0].ConsecutiveHitsITI;
			trial["nconsecutivehitsforbonus"] = paramfile.data[0].NConsecutiveHitsforBonus;
			trial["nrewardmax"] = paramfile.data[0].NRewardMax;
			trial["imageBagsSample"] = paramfile.data[0].ImageBagsSample;
			trial["imageBagsTest"] = paramfile.data[0].ImageBagsTest;
			trial["sampleScale"] = paramfile.data[0].SampleScale;
			trial["testScale"] = paramfile.data[0].TestScale;
			trial["automator"] = paramfile.data[0].Automator;
			trial["currentAutomatorStage"] = paramfile.data[0].CurrentAutomatorStage;
			trial["params"] = paramfile.name;
			trial["automatorFilePath"] = paramfile.data[0].AutomatorFilePath
			resolve(1)
		}
		reader.readAsText(data.fileBlob)
	})
	.catch(function(error){
		console.error(error)
	})
	})
}

function readAutomatorFilefromDropbox2(){
	return new Promise(function(resolve,reject){
		dbx.filesDownload({path: trial.automatorFilePath}).then(function(data){
		console.log("success: read AutomatorFile of size " + data.size)

		var reader = new FileReader()
		reader.onload = function(e){
			var data = JSON.parse(reader.result)

			// Set parameters
			//var minpctcorrect_sequence = []
			//var mintrials_sequence = []
			//var sample_foldernum_sequence = []
			//var objectlist_sequence = []

			minpctcorrect_sequence = data[0].PercentCorrectCriterion;
			mintrials_sequence = data[0].MinimumTrialsCriterion;
			sample_foldernum_sequence = data[0].FolderNumSequence;
			objectlist_sequence = data[0].ObjectListSequence;
			number_automator_stages = objectlist_sequence.length; 

			resolve(1)
		}
		reader.readAsText(data.fileBlob)
	})
	.catch(function(error){
		console.error(error)
	})
	})
}

function readPerformanceHistoryfromDropbox2(filenum){
	return new Promise(function(resolve,reject){
		dbx.filesDownload({path: DATA_SAVEPATH + trial.subjid+"/"+ datafiles[filenum]}).then(function(data){
		console.log("success: read data file size " + data.size)

		var reader = new FileReader()
		reader.onload = function(e){
			var file = {data: JSON.parse(reader.result)}

			if (typeof(file.data[0].Weight) != "undefined"){
				env["weight"] = file.data[0].Weight;
			}
			else{
				env["weight"] = 10;
			}
			env["species"] = file.data[0].Species;
			env["homecage"] = file.data[0].Homecage;
			env["separated"] = file.data[0].Separated;
			env["liquid"] = file.data[0].Liquid;
			env["tablet"] = file.data[0].Tablet;
			env["pump"] = file.data[0].Pump;
			trial["objectlist"] = file.data[0].TestedObjects;
			trial["nway"] = file.data[0].Nway;
			trial["samplegrid"] = file.data[0].SampleGridIndex;
			trial["testgrid"] = file.data[0].TestGridIndex;
			trial["objectgrid"] = file.data[0].ObjectGridIndex;
			trial["rewardStage"] = file.data[0].RewardStage
			trial["rewardper1000"] = file.data[0].RewardPer1000Trials;
			// trial.reward = file.data[0].RewardDuration;
			trial["punish"] = file.data[0].PunishTimeOut;
			trial["fixationdur"] = file.data[0].FixationDuration;
			trial["fixationradius"] = file.data[0].FixationRadius;
			trial["fixationmove"] = file.data[0].FixationMove;
			trial["sampleON"] = file.data[0].SampleON;
			trial["sampleOFF"] = file.data[0].SampleOFF;
			trial["keepSampleON"] = file.data[0].KeepSampleON;
			trial["hidetestdistractors"] = file.data[0].HideTestDistractors;
			trial["sampleblocksize"] = file.data[0].SampleBlockSize;
			trial["nstickyresponse"] = file.data[0].NStickyResponse;
			trial["imageBagsSample"] = file.data[0].ImageBagsSample;
			trial["imageBagsTest"] = file.data[0].ImageBagsTest;
			trial["sampleScale"] = file.data[0].SampleScale;
			trial["testScale"] = file.data[0].TestScale;			
			trial["automator"] = file.data[0].Automator;
			trial["currentAutomatorStage"] = file.data[0].CurrentAutomatorStage;
			trial["automatorFilePath"] = paramfile.data[0].AutomatorFilePath

			if (typeof(trial.automator) == "undefined" || trial.automator == 0 || trial.automator != trial.currentAutomator){
			}
			else if (trial.automator == 1){
				funcreturn = updateTask1("readtaskstageonly"); //read task stage only
				trialhistory.trainingstage[trialhistory.current]=funcreturn;
			}
			else if (trial.automator == 2){
				funcreturn = updateTask2("readtaskstageonly"); //read task stage only
				trialhistory.trainingstage[trialhistory.current]=funcreturn;
			}
			else if (trial.automator == 3){
				funcreturn = updateTask3("readtaskstageonly"); //read task stage only
				trialhistory.trainingstage[trialhistory.current]=funcreturn;
			}

			else if (trial.automator == "SR"){
				trialhistory.trainingstage[trialhistory.current]=trial.currentAutomatorStage;
				trialhistory.automator_filepath[trialhistory.current] = trial.automatorFilePath; 
			}

			if (typeof(trial.automator) == "undefined" || trial.automator == 0 || trial.automator != trial.currentAutomator){
				// do nothing 
			}
			else {
			  	for (var i=0; i<=file.data[0].CorrectItem.length-1; i++){
			  		if (file.data[0].CorrectItem[i] == file.data[0].Response[i]){
			  			trialhistory.correct[trialhistory.current]=1;
			  		}
			  		else {
			  			trialhistory.correct[trialhistory.current]=0;
			  		}
			  		trialhistory.automator_filepath[trialhistory.current] = file.data[0].AutomatorFilePath

			  		trialhistory.current++;
			  	}
			}
			resolve(1)



		} //reader.onload
		reader.readAsText(data.fileBlob)
	})
	.catch(function(error){
		console.error(error)
	})
	})
}
//================== LOAD JSON (end) ==================//

// MDN using files from web applications -->
//   https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
// Why createObjectUrl and advantages of blob urls --> 
//   http://stackoverflow.com/questions/20950791/html5s-file-api-blob-usages

//================== LOAD AUDIO ==================//
function loadSoundfromDropbox2(src,idx){
	return new Promise(function(resolve,reject){
		dbx.filesDownload({path: sounds.folder + src + ".wav"}).then(function(data){
		var reader = new FileReader()
		reader.onload = function(e){
			audiocontext.decodeAudioData(reader.result).then(function(buffer){
				sounds.buffer[idx] = buffer;
				resolve(idx)
			})
		}
		reader.readAsArrayBuffer(data.fileBlob)
	})
	.catch(function(error){
		console.error(error)
	})
	})
}
//================== LOAD AUDIO (end) ==================//


//================== LOAD IMAGE ==================//

async function loadBagfromDropbox(imagebags_parameter){
	console.time('TotalBagLoadTime')

	// Locate all .png in directory and subdirectories specified in imagebags_parameter
	// Return in ONE 1-dimensional array, along with label vector that indexes given imagbags_order
	var funcreturn = await loadImageBagPaths(imagebags_parameter); 
	var imagebag_paths = funcreturn[0]
	var imagebag_labels = funcreturn[1] 

	// Load all .png blobs into an array. 
	console.log('Will load '+ imagebag_paths.length+' images...')
	var imagebag = await loadImageArrayfromDropbox(imagebag_paths)
	console.log(imagebag.length+' images loaded successfully.')
	console.timeEnd('TotalBagLoadTime')
	return [imagebag, imagebag_labels, imagebag_paths]
}

async function loadImageBagPaths(imagebagroot_s){
	
	var bagitems_paths = [] // Can also be paths to a single .png file. 
	var bagitems_labels = [] // The labels are integers that index elements of imagebagroot_s. So, a label of '0' means the image belongs to the first imagebag.

	// Case 1: input = string. output = array of .png imagenames
	if (typeof(imagebagroot_s) == "string"){
		bagitems_paths = await getFileListDropboxRecursive(imagebagroot_s)
		for(var i_item = 0; i_item < bagitems_paths.length; i_item++){
			bagitems_labels.push(0)
		}
		return [bagitems_paths, bagitems_labels, bag2itemindex]
	}

	// Case 2: input = array of (array of) paths. output = array of arrays of .png imagenames 	
	for (var i = 0; i<imagebagroot_s.length; i++){
		// If this class's imagebag consists of one (1) root. 
		if (typeof(imagebagroot_s[i]) == "string"){
			var i_itempaths = await getFileListDropboxRecursive(imagebagroot_s[i])
			bagitems_paths.push(... i_itempaths); 

			for(var i_item = 0; i_item < i_itempaths.length; i_item++){
				bagitems_labels.push(i)
			}
		}
		// If this class's imagebag consists of multiple roots.
		else if(typeof(imagebagroot_s[i]) == "object"){
			var i_itempaths = []
			for (var j = 0; j<imagebagroot_s[i].length; j++){
				i_itempaths.push(... await getFileListDropboxRecursive(imagebagroot_s[i][j])); 
			}
			bagitems_paths.push(... i_itempaths)

			for(var i_item = 0; i_item < i_itempaths.length; i_item++){
				bagitems_labels.push(i)
			}	
		}
	}

	return [bagitems_paths, bagitems_labels] 
}


async function loadImageArrayfromDropbox(imagepathlist){

	try{
		console.time('ImgLoadingTime')
		// From a list of paths, load the images from Dropbox and store them into an array. 
		var MAX_SIMULTANEOUS_REQUESTS = 500 // Empirically chosen based on our guess of Dropbox API's download request limit in a "short" amount of time.
		var MAX_TOTAL_REQUESTS = 3000 // Empirically chosen

		if (imagepathlist.length > MAX_TOTAL_REQUESTS) {
			throw "Under the Dropbox API, cannot load more than "+MAX_TOTAL_REQUESTS+" images at a short time period. You have requested "
			+imagepathlist.length+". Consider using an image loading strategy that reduces the request rate on Dropbox."
			return 
		}

		if (imagepathlist.length > MAX_SIMULTANEOUS_REQUESTS){
			console.log('Chunking your '+ imagepathlist.length+' image requests into '+Math.ceil(imagepathlist.length / MAX_SIMULTANEOUS_REQUESTS)+' chunks of (up to) '+MAX_SIMULTANEOUS_REQUESTS+' each. ')
			var image_array = []

			for (var i = 0; i < Math.ceil(imagepathlist.length / MAX_SIMULTANEOUS_REQUESTS); i++){
				var lb = i*MAX_SIMULTANEOUS_REQUESTS; 
				var ub = i*MAX_SIMULTANEOUS_REQUESTS + MAX_SIMULTANEOUS_REQUESTS; 
				var partial_pathlist = imagepathlist.slice(lb, ub);

				var partial_image_requests = partial_pathlist.map(loadImagefromDropbox);
				var partial_image_array = await Promise.all(partial_image_requests)
				image_array.push(... partial_image_array); 
			}
		}
		else { // If number of images is less than MAX_SIMULTANEOUS_REQUESTS, request them all simultaneously: 
			var image_requests = [] 
			image_requests = imagepathlist.map(loadImagefromDropbox)
			var image_array = await Promise.all(image_requests) 
		}

		// Clear out top screen
		renderBlank()
		console.log('Blanked out screen')

		console.timeEnd('ImgLoadingTime')
		return image_array
	}
	catch(err){
		console.log(err)
	}

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadImagefromDropbox(imagepath){
	// Loads and returns a single image located at imagepath into an Image()
	// Upon failure (e.g. from Dropbox API limit), will retry up to MAX_RETRIES. 
	// Will wait between retries with linear increase in waittime between tries. 

	try{
		var MAX_RETRIES = 5 
		var backoff_time_seed = 500 // ms; is multiplied by retry number. 
		var retry_number = 0; 
		while(true && retry_number <= MAX_RETRIES){
			try{
				data = await dbx.filesDownload({path: imagepath}); 
				image = new Image(); 
				image.src = window.URL.createObjectURL(data.fileBlob); 
				image.onload = function(){
						console.log('Loaded: ' + (imagepath));
						displayTextOnBlackBar('Loaded: ' + (imagepath))
					}
				return image
			}
			catch(error){
				retry_number = retry_number + 1; 
				console.log(error)
				console.log('On retry '+retry_number)
				await sleep(backoff_time_seed * retry_number)
				continue
			}
		}
		return 
	}
	catch(error){
		console.log(error)
	}
}



//================== LOAD IMAGE (end) ==================//


//================== WRITE JSON ==================//
async function writeDatatoDropbox2() {
	try{
        var dataobj = [], datastr;
	    dataobj.push({
	    	Subject: trial.subjid,
	    	Weight: env.weight,
	    	Species: env.species,
	    	Homecage: env.homecage,
	    	Separated: env.separated,
	    	Liquid: env.liquid,
	    	Tablet: env.tablet,
	    	Pump: env.pump,
	    	TestedObjects: trial.objectlist,
	    	Nway: trial.nway,
	    	SampleGridIndex: trial.samplegrid,
	    	TestGridIndex: trial.testgrid,
	    	ObjectGridIndex: trial.objectgrid, 
	    	ImageBagsSample: trial.imageBagsSample,
	    	ImageBagsTest: trial.imageBagsTest,
	    	RewardStage: trial.rewardStage,
	    	RewardPer1000Trials: trial.rewardper1000,
	    	RewardDuration: trial.reward,
	    	PunishTimeOut: trial.punish,
	    	FixationDuration: trial.fixationdur,
	    	FixationRadius: trial.fixationradius,
	    	FixationMove: trial.fixationmove,
	    	SampleON: trial.sampleON,
	    	SampleOFF: trial.sampleOFF,
	    	KeepSampleON: trial.keepSampleON,
	    	HideTestDistractors: trial.hidetestdistractors,
	    	SampleBlockSize: trial.sampleblocksize,
	    	NStickyResponse: trial.nstickyresponse,
	    	ConsecutiveHitsITI: trial.consecutivehitsITI,
	    	NConsecutiveHitsforBonus: trial.nconsecutivehitsforbonus,
	    	NRewardMax: trial.nrewardmax,
	    	Automator: trial.automator,
	    	CurrentAutomatorStage: trial.currentAutomatorStage,
	    	AutomatorFilePath: trial.automatorFilePath,
	    	Params: trial.params,

	    	PreSequence: canvas.sequencepre,
	    	PreSequenceTimes: canvas.tsequencepre,
	    	ImageSequence: canvas.sequence,
	    	ImageSequenceTimes: canvas.tsequence,
	    	PostSequence: canvas.sequencepost,
	    	PostSequenceTimes: canvas.tsequencepost,
	    	PixelRatio: devicePixelRatio,
	    	BackingStoreRatio: backingStoreRatio,
	    	CanvasScale: canvasScale,
	    	WindowWidth: windowWidth,
	    	WindowHeight: windowHeight,
	    	XGridCenter: xgridcent,
	    	YGridCenter: ygridcent,

	    	SamplePixels: [imagesSample.wd, imagesSample.ht],
    	    TestPixels: [imagesTest.wd, imagesTest.ht],
    	    SampleScale: imagesSample.scale,
	    	TestScale: imagesTest.scale,
	    	SampleImageDir: imagesSample.folder,
	    	TestImageDir: imagesTest.folder,
	    	AllSampleSerials: imagesSample.serial,
	    	AllTestSerials: imagesTest.serial,

	    	FixationGridIndex: trial.fixationgrid,
	    	Sample: trial.sampleserial,
	    	Test: trial.testserial,
	    	Response: trial.response,
	    	CorrectItem: trial.correctItem,
	    	StartTime: trial.tstart,
	    	FixationXYT: trial.xytfixation,
	    	ResponseXYT: trial.xytresponse,
	    	BatteryLDT: battery.ldt,
	    	NReward: trial.nreward,
	    });
	    datastr = JSON.stringify(dataobj);

	response = await dbx.filesUpload({
		path: DATA_SAVEPATH + trial.subjid+"/"+trial.filename,
		contents: datastr,
		mode: {[".tag"]: "overwrite"} })
		console.log("successful data file upload size " + response.size)
	}
	catch(error){
		console.error(error)
	}

}

async function writeParameterTexttoDropbox2(){
	try{
	    datastr = paramfile.text

	response = await dbx.filesUpload({
		path: trial.params,
		contents: datastr,
		mode: {[".tag"]: "overwrite"} })
			console.log("successful paramater file upload size " + response.size)
			trial.need2writeParameters = 0;
	}
	catch (error){
		console.error(error)
	}

	try{
	filemeta = await dbx.filesGetMetadata({path: paramfile.name})
		if (paramfile.rev != filemeta.rev){
			paramfile.rev = filemeta.rev
			paramfile.date = new Date(filemeta.client_modified)

			console.log('parameter file was updated rev=' + paramfile.rev)
		}
	}
	catch(error) {
		console.error(error)
	}
}

//Write parameter file to dropbox
async function writeParameterstoDropbox2() {
	try{
        var dataobj = [], datastr;
	    dataobj.push({
	    	Weight: env.weight,
	    	Species: env.species,
	    	Homecage: env.homecage,
	    	Separated: env.separated,
	    	Liquid: env.liquid,
	    	Tablet: env.tablet,
	    	Pump: env.pump,
	    	TestedObjects: trial.objectlist,
	    	Nway: trial.nway,
	    	SampleGridIndex: trial.samplegrid,
	    	TestGridIndex: trial.testgrid,
	    	ObjectGridIndex: trial.objectgrid, 
	    	RewardStage: trial.rewardStage,
	    	RewardPer1000Trials: trial.rewardper1000,
	    	PunishTimeOut: trial.punish,
	    	FixationDuration: trial.fixationdur,
	    	FixationRadius: trial.fixationradius,
	    	FixationMove: trial.fixationmove,
	    	SampleON: trial.sampleON,
	    	SampleOFF: trial.sampleOFF,
	    	KeepSampleON: trial.keepSampleON,
	    	HideTestDistractors: trial.hidetestdistractors,
	    	SampleBlockSize: trial.sampleblocksize,
	    	NStickyResponse: trial.nstickyresponse,
			ConsecutiveHitsITI: trial.consecutivehitsITI,
			NConsecutiveHitsforBonus: trial.nconsecutivehitsforbonus,
			NRewardMax: trial.nrewardmax,	    	    	
	    	ImageBagsSample: trial.imageBagsSample,
	    	ImageBagsTest: trial.imageBagsTest,
	    	SampleScale: trial.sampleScale,
	    	TestScale: trial.testScale,
	    	Automator: trial.automator,
	    	CurrentAutomatorStage: trial.currentAutomatorStage, 
	    	AutomatorFilePath: trial.automatorFilePath
	    	// RewardDuration: trial.reward,
	    });
	    datastr = JSON.stringify(dataobj);

	response = await dbx.filesUpload({
		path: trial.params,
		contents: datastr,
		mode: {[".tag"]: "overwrite"} })
			console.log("successful paramater file upload size " + response.size)
			trial.need2writeParameters = 0;
	}
	catch (error){
		console.error(error)
	}

	try{
	filemeta = await dbx.filesGetMetadata({path: paramfile.name})
		if (paramfile.rev != filemeta.rev){
			paramfile.rev = filemeta.rev
			paramfile.date = new Date(filemeta.client_modified)

			console.log('parameter file was updated rev=' + paramfile.rev)
		}
	}
	catch(error) {
		console.error(error)
	}
}
//================== WRITE JSON (end) ==================//


//================== WRITE IMAGE ==================//
// asynchronous image capture
// using blobs for image capture to work with binary data directly instead of base64 encoded uri string -->
// https://developers.google.com/web/updates/2016/03/canvas-toblob-in-chrome-50
function takephoto2(currtrial,currstage){
	canvascaptureobj=document.getElementById('canvascapture');

	canvascaptureobj.setAttribute('width',videoobj.clientWidth);
	canvascaptureobj.setAttribute('height',videoobj.clientHeight);

	var context = canvascaptureobj.getContext('2d');
	context.drawImage(videoobj,0,0,videoobj.clientWidth,videoobj.clientHeight);

	canvascaptureobj.toBlob(async function(blob){
		// var reader = new FileReader()
		// reader.onload = function(e){
		try{
		response = await dbx.filesUpload({
				path: "/MonkeyTurk/imagecapture/" + trial.subjid + "/imcapture" + currtrial + "_" + currstage + ".png",
				contents: blob,
				mode: {[".tag"]: "overwrite"} })
			console.log("successful image upload size " + response.size)
		}
		catch(error){
			console.error(error)
		}
		// reader.readAsArrayBuffer(blob)
	},'image/png')
}
//================== (end) WRITE IMAGE  ==================//
