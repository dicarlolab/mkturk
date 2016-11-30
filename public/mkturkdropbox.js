var DBX_CLIENT_ID = "2m9hmv7q45kwren"
var DBX_REDIRECT_URI = "https://dl.dropboxusercontent.com/spa/k79b8ph6lmcr30d/mkturk/public/mkturk.html"

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
			trial["imageFolderSample"] = paramfile.data[0].ImageFolderSample;
			trial["imageFolderTest"] = paramfile.data[0].ImageFolderTest;
			trial["sampleScale"] = paramfile.data[0].SampleScale;
			trial["testScale"] = paramfile.data[0].TestScale;
			trial["automator"] = paramfile.data[0].Automator;
			trial["currentAutomatorStage"] = paramfile.data[0].CurrentAutomatorStage;
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

function readPerformanceHistoryfromDropbox2(filenum){
	return new Promise(function(resolve,reject){
		dbx.filesDownload({path: trial.datadir + datafiles[filenum]}).then(function(data){
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
			trial["imageFolderSample"] = file.data[0].ImageFolderSample;
			trial["imageFolderTest"] = file.data[0].ImageFolderTest;
			trial["sampleScale"] = file.data[0].SampleScale;
			trial["testScale"] = file.data[0].TestScale;			
			trial["automator"] = file.data[0].Automator;
			trial["currentAutomatorStage"] = file.data[0].CurrentAutomatorStage;

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
				funcreturn = updateSRTask("readtaskstageonly"); //read task stage only
				trialhistory.trainingstage[trialhistory.current]=funcreturn;
			}

			if (typeof(trial.automator) == "undefined" || trial.automator == 0 || trial.automator != trial.currentAutomator){
			}
			else {
			  	for (var i=0; i<=file.data[0].CorrectItem.length-1; i++){
			  		if (file.data[0].CorrectItem[i] == file.data[0].Response[i]){
			  			trialhistory.correct[trialhistory.current]=1;
			  		}
			  		else {
			  			trialhistory.correct[trialhistory.current]=0;
			  		}
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
	    	ImageFolderSample: trial.imageFolderSample,
	    	ImageFolderTest: trial.imageFolderTest,
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
	    	ImageFolderSample: trial.imageFolderSample,
	    	ImageFolderTest: trial.imageFolderTest,
	    	SampleScale: trial.sampleScale,
	    	TestScale: trial.testScale,
	    	Automator: trial.automator,
	    	CurrentAutomatorStage: trial.currentAutomatorStage, 
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
//================== WRITE IMAGE (end) ==================//