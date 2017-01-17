// Mkturk
var DBX_CLIENT_ID = "2m9hmv7q45kwren"
var DBX_REDIRECT_URI = "https://dl.dropboxusercontent.com/spa/k79b8ph6lmcr30d/mkturk/public/mkturk.html"

// E. Issa Nightly
var DBX_CLIENT_ID = "3rd6bco8cdmcadz"
var DBX_REDIRECT_URI = "https://dl.dropboxusercontent.com/spa/k79b8ph6lmcr30d/nightly/public/mkturk.html"

// // M. Lee Nightly
// var DBX_CLIENT_ID = "c704p4lo4g3op39"
// var DBX_REDIRECT_URI = "https://dl.dropboxusercontent.com/spa/tnra0lpcs5uvy54/debugging_mkturk/public/mkturk.html"

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
	response = await dbx.filesListFolder({path: trial.datadir})
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

if (Array.isArray(paramfile.data)){
	var datajson = paramfile.data[0]
}
else {
	var datajson = paramfile.data
}
			// Set parameters
			for (p in params){
				if (params[p].user == 1){
					trial[p] = datajson[params[p].dataname]
				}
			} //for p user-defined params
//			trial["objectlist"] = paramfile.data[0].TestedObjects;
			trial["params"] = paramfile.name;
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

if (Array.isArray(data)){
	var datajson = data[0]
}
else {
	var datajson = data
}

			minpctcorrect_sequence = datajson.PercentCorrectCriterion;
			mintrials_sequence = datajson.MinimumTrialsCriterion;
			sample_foldernum_sequence = datajson.FolderNumSequence;
			objectlist_sequence = datajson.ObjectListSequence;
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
		dbx.filesDownload({path: trial.datadir + datafiles[filenum]}).then(function(data){
		console.log("success: read data file size " + data.size)

		var reader = new FileReader()
		reader.onload = function(e){
			var file = {data: JSON.parse(reader.result)}

if (Array.isArray(file.data)){
	var datajson = file.data[0]
}
else {
	var datajson = file.data
}

			trial["species"] = datajson.Species;
			trial["homecage"] = datajson.Homecage;
			trial["separated"] = datajson.Separated;
			trial["liquid"] = datajson.Liquid;
			trial["tablet"] = datajson.Tablet;
			trial["pump"] = datajson.Pump;
			trial["objectlist"] = datajson.TestedObjects;
			trial["nway"] = datajson.Nway;
			trial["samplegrid"] = datajson.SampleGridIndex;
			trial["testgrid"] = datajson.TestGridIndex;
			trial["objectgrid"] = datajson.ObjectGridIndex;
			trial["rewardStage"] = datajson.RewardStage
			trial["rewardper1000"] = datajson.RewardPer1000Trials;
			// trial.reward = datajson.RewardDuration;
			trial["punish"] = datajson.PunishTimeOut;
			trial["fixationdur"] = datajson.FixationDuration;
			trial["fixationradius"] = datajson.FixationRadius;
			trial["fixationmove"] = datajson.FixationMove;
			trial["sampleON"] = datajson.SampleON;
			trial["sampleOFF"] = datajson.SampleOFF;
			trial["keepSampleON"] = datajson.KeepSampleON;
			trial["hidetestdistractors"] = datajson.HideTestDistractors;
			trial["sampleblocksize"] = datajson.SampleBlockSize;
			trial["nstickyresponse"] = datajson.NStickyResponse;
			trial["imageFolderSample"] = datajson.ImageFolderSample;
			trial["imageFolderTest"] = datajson.ImageFolderTest;
			trial["sampleScale"] = datajson.SampleScale;
			trial["testScale"] = datajson.TestScale;			
			trial["automator"] = datajson.Automator;
			trial["currentAutomatorStage"] = datajson.CurrentAutomatorStage;
			trial["automatorFilePath"] = datajson.AutomatorFilePath

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

//================== WRITE JSON ==================//
async function writeDatatoDropbox2() {
	try{
        var dataobj = {}, datastr;
        for (p in params){
        	if (params[p].save == 1){
        		dataobj[params[p].dataname] = trial[p]
        	}
        } //for p user-defined params

		dataobj.PreSequence = canvas.sequencepre
		dataobj.PreSequenceTimes = canvas.tsequencepre
		dataobj.ImageSequence = canvas.sequence
		dataobj.ImageSequenceTimes = canvas.tsequence
		dataobj.PostSequence = canvas.sequencepost
		dataobj.PostSequenceTimes = canvas.tsequencepost

		dataobj.PixelRatio = devicePixelRatio
		dataobj.BackingStoreRatio = backingStoreRatio
		dataobj.CanvasScale = canvasScale
		dataobj.WindowWidth = windowWidth
		dataobj.WindowHeight = windowHeight
		dataobj.XGridCenter = xgridcent
		dataobj.YGridCenter = ygridcent
		dataobj.SamplePixels = [imagesSample.wd, imagesSample.ht],
		dataobj.TestPixels = [imagesTest.wd, imagesTest.ht],
		dataobj.SampleScale = imagesSample.scale,
		dataobj.TestScale = imagesTest.scale,
		dataobj.SampleImageDir = imagesSample.folder
		dataobj.TestImageDir = imagesTest.folder
		dataobj.AllSampleSerials = imagesSample.serial
		dataobj.AllTestSerials = imagesTest.serial
		dataobj.BatteryLDT = battery.ldt
	    	
	    datastr = JSON.stringify(dataobj);

	response = await dbx.filesUpload({
		path: trial.datadir + trial.filename,
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
		var dataobj = {}, datastr;
		for (p in params){
        	if (params[p].user == 1){
        		dataobj[params[p].dataname] = trial[p]
        	}
        } //for p user-defined params
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
function loadSampleImagefromDropbox2(src,idx){
	return new Promise(function(resolve,reject){
		dbx.filesDownload({path: imagesSample.folder + src + ".png"}).then(function(data){
			imagesSamplePack[curridx+idx] = new Image();
			imagesSamplePack[curridx+idx].src = window.URL.createObjectURL(data.fileBlob)

			imagesSamplePack[curridx+idx].onload = function(){
				console.log('loaded image' + (curridx+idx));

				renderBlank();
				var blank_canvasobj=document.getElementById("canvas"+canvas.blank);
				var visible_ctxt = blank_canvasobj.getContext('2d');
				visible_ctxt.textBaseline = "hanging";
				visible_ctxt.fillStyle = "white";
				visible_ctxt.font = "20px Verdana";
				visible_ctxt.fillText('Loaded image ' + (curridx+idx),20.5,20.5);
				resolve(curridx+idx)
			}
	})
	.catch(function(error){
		console.error(error)
	})
	})
}

function loadTestImagefromDropbox2(src,idx){
	return new Promise(function(resolve,reject){
		dbx.filesDownload({path: imagesTest.folder + src + ".png"}).then(function(data){
			imagesTestPack[curridx+idx] = new Image();
			imagesTestPack[curridx+idx].src = window.URL.createObjectURL(data.fileBlob)

			imagesTestPack[curridx+idx].onload = function(){
				console.log('loaded image' + (curridx+idx));

				renderBlank();
				var blank_canvasobj=document.getElementById("canvas"+canvas.blank);
				var visible_ctxt = blank_canvasobj.getContext('2d');
				visible_ctxt.textBaseline = "hanging";
				visible_ctxt.fillStyle = "white";
				visible_ctxt.font = "20px Verdana";
				visible_ctxt.fillText('Loaded image ' + (curridx+idx),125.5,20.5);
				resolve(curridx+idx)
			}
	})
	.catch(function(error){
		console.error(error)
	})
	})
}


function loadOriginalSampleImagefromDropbox2(src){
	return new Promise(function(resolve,reject){
		dbx.filesDownload({path: imagesSample.folderOriginal + src + ".png"}).then(function(data){
			imagesSampleOriginal[src] = new Image();
			imagesSampleOriginal[src].src = window.URL.createObjectURL(data.fileBlob)

			imagesSampleOriginal[src].onload = function(){
				console.log('loaded original sample image' + (src));

				renderBlank();
				var blank_canvasobj=document.getElementById("canvas"+canvas.blank);
				var visible_ctxt = blank_canvasobj.getContext('2d');
				visible_ctxt.textBaseline = "hanging";
				visible_ctxt.fillStyle = "white";
				visible_ctxt.font = "20px Verdana";
				visible_ctxt.fillText('Loaded original sample image ' + (src),20.5,20.5);
				resolve(src)
			}
	})
	.catch(function(error){
		console.error(error)
	})
	})
}

function loadOriginalTestImagefromDropbox2(src){
	return new Promise(function(resolve,reject){
		dbx.filesDownload({path: imagesTest.folderOriginal + src + ".png"}).then(function(data){
			imagesTestOriginal[src] = new Image();
			imagesTestOriginal[src].src = window.URL.createObjectURL(data.fileBlob)

			imagesTestOriginal[src].onload = function(){
				console.log('loaded original sample image' + (src));

				renderBlank();
				var blank_canvasobj=document.getElementById("canvas"+canvas.blank);
				var visible_ctxt = blank_canvasobj.getContext('2d');
				visible_ctxt.textBaseline = "hanging";
				visible_ctxt.fillStyle = "white";
				visible_ctxt.font = "20px Verdana";
				visible_ctxt.fillText('Loaded original sample image ' + (src),20.5,20.5);
				resolve(src)
			}
	})
	.catch(function(error){
		console.error(error)
	})
	})
}
//================== LOAD IMAGE (end) ==================//

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
