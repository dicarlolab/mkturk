//Get file list from dropbox diretory
function getFileListDropbox() {
	return new Promise(function(resolve,reject){
        client.readdir(trial.datadir,function(error,string,filestat,filestat_array){
			if (error){
				return showError(error); //Something went wrong
			}
			console.log("success: read directory ");

			var q2=0;
			for (var q = 0; q <= filestat_array.length-1; q++){
				if (filestat_array[q].isFile == true && filestat_array[q].name.indexOf(trial.subjid) != -1){
					datafiles[q2] = [filestat_array[q].name,filestat_array[q].modifiedAt.toISOString()];
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

			resolve(1);
		})
	}).then();
}



function readPerformanceHistoryfromDropbox(filenum){
	return new Promise(function(resolve,reject){
        client.readFile(trial.datadir + datafiles[filenum][0],function(error,string,filestat,httpinfo){
			if (error){
				return showError(error); //Something went wrong
			}
			console.log("success: read file size " + filestat.size);
			var file ={data: JSON.parse(string)};

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
		resolve(1);
		})
	}).then();
}

//Read parameter file in dropbox
function readParametersfromDropbox() {
	return new Promise(function(resolve,reject){
        client.readFile(paramfile.name,function(error,string,filestat,httpinfo){
			if (error){
				console.log("no parameter file found for subject " + trial.subjid);
				resolve(1);
				return showError(error); //Something went wrong
			}
			console.log("success: read parameter file size " + filestat.size);
			paramfile.data=JSON.parse(string);
			paramfile.ver=filestat.versionTag;
			paramfile.date=filestat.modifiedAt;

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
			trial["fixationgridindex"] = paramfile.data[0].FixationGridIndex;
			trial["fixationusessample"] = paramfile.data[0].FixationUsesSample;
			trial["samplegrid"] = paramfile.data[0].SampleGridIndex;
			trial["testgrid"] = paramfile.data[0].TestGridIndex;
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
			trial["params"] = paramfile.name;
			resolve(1);
		})
	}).then();
}

//Write parameter file to dropbox
function writeParameterstoDropbox() {
	return new Promise(function(resolve,reject){
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
	    	FixationUsesSample: trial.fixationusessample,
	    	SampleGridIndex: trial.samplegrid,
	    	TestGridIndex: trial.testgrid,
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
	    	// RewardDuration: trial.reward,
	    });
	    datastr = JSON.stringify(dataobj);
		client.writeFile(trial.params,datastr,function(error,filestat){
			if (error){
				return showError(error); //Something went wrong
			}
			console.log("success: file size " + filestat.size);
			resolve(1);
		})
	}).then();
}

function writeDatatoDropbox() {
	return new Promise(function(resolve,reject){
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
	    	FixationUsesSample: trial.fixationusessample,
	    	SampleGridIndex: trial.samplegrid,
	    	TestGridIndex: trial.testgrid,
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
	    	HeadsUpFraction: canvas.headsupfraction,
	    	CanvasOffsetLeft: canvas.offsetleft,
	    	CanvasOffsetTop: canvas.offsettop,

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
		client.writeFile(trial.datadir + trial.filename,datastr,function(error,filestat){
			if (error){
				return showError(error); //Something went wrong
			}
			console.log("success: file size " + filestat.size);
			resolve(1);
		})
	}).then();
}

// Asynchronous: Check for parmater file update
function checkParameterFileStatus(){
	client.stat(paramfile.name,function(error,filestat){
		if (error){
			return showError(error); //Something went wrong
		}
		if (paramfile.ver != filestat.versionTag){
			paramfile.ver=filestat.versionTag;
			paramfile.date=filestat.modifiedAt;

			trial.need2loadParameters=1;
			trial.need2loadImages=1;

			console.log('parameter file was updated ver=' + paramfile.ver);
		}
	})
}

// Promise: load image from Dropbox
function loadSampleImagefromDropbox(src,idx) {
	return new Promise(function(resolve,reject){
		imagesSamplePack[curridx+idx] = new Image();
		client.makeUrl(imagesSample.folder + src + ".png",{download: 1},function(error,url){
			if (error){
				return showError(error); //Something went wrong.
			}
			imagesSamplePack[curridx+idx].src=url.url;
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
		});
	}).then();
}

// Promise: load image from Dropbox
function loadTestImagefromDropbox(src,idx) {
	return new Promise(function(resolve,reject){
		imagesTestPack[curridx+idx] = new Image();
		client.makeUrl(imagesTest.folder + src + ".png",{download: 1},function(error,url){
			if (error){
				return showError(error); //Something went wrong.
			}
			imagesTestPack[curridx+idx].src=url.url;
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
		});
	}).then();
}

function loadSoundfromDropbox(src,idx){
	return new Promise(function(resolve,reject){
		client.makeUrl(sounds.folder + src + ".wav",{download: 1},function(error,url){
			if (error){
				return showError(error); //Something went wrong
			}
			var request = new XMLHttpRequest();
			request.open('GET',url.url,'true');
			request.responseType = 'arraybuffer';

			//Decode asychnronously
			request.onload = function(){
				audiocontext.decodeAudioData(request.response,function(buffer){
					sounds.buffer[idx] = buffer;
					resolve(idx);
				}, function(){console.log('audio load error')})
			}
			request.send();
		})
	}).then();
}

