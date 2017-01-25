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
async function getMostRecentBehavioralFilePathsFromDropbox(num_files_to_get, subject_id, save_directory){
	var file_list = []
	try{

		// TODO: add code for reading huge folders -- (see getImageListDropboxRecursive)
		response = await dbx.filesListFolder({path: save_directory})
		console.log("Success: read directory "+save_directory)

		var q2=0;
		for (var q = 0; q <= response.entries.length-1; q++){
			if (response.entries[q][".tag"] == "file" && response.entries[q].name.indexOf(subject_id) != -1){
				file_list[q2] = response.entries[q].path_display
				q2++;
			}
		}

		// [oldest,...,most recent]
		file_list.sort();

		// Return most recent files 
		num_files = file_list.length
		return file_list.slice(num_files - num_files_to_get, num_files)
	}
	catch (error) {
		console.error(error)
	}

}

async function getFileListDropbox(directorypath){
	// Returns list of files in this directory (no recursion)
	try{
		var datafiles = []
		response = await dbx.filesListFolder({path: directorypath})

		var q2=0;
		for (var q = 0; q <= response.entries.length-1; q++){
			if (response.entries[q][".tag"] == "file" && response.entries[q].name.indexOf(TRIAL.subjectID) != -1){
				datafiles[q2] = response.entries[q].path_display; 
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

		return datafiles; 
	}
	catch (error) {
		console.error(error)
	}
}

async function getImageListDropboxRecursive(dirpath){
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

		
		var q2=0;
		for (var q = 0; q <= entries.length-1; q++){
			if (entries[q][".tag"] == "file" && entries[q].name.endsWith(".png")) {
				file_list.push(entries[q].path_display) //'/'+entries[q].name)
				q2++;
			}
		}
		console.log(file_list.length+" file(s) discovered in directory \""+dirpath+"\" (and any subdirectories). ")

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

//================== CHECK FILE REV ==================//
// Asynchronous: Check for parmater file update

async function checkParameterFileStatus(){
	var need2refresh = false 

	try{
		filemeta = await dbx.filesGetMetadata({path: TASK.paramfile})
		if (TASK.paramfile_rev != filemeta.rev){
			TASK.paramfile_rev = filemeta.rev
			TASK.paramfile_date = new Date(filemeta.client_modified)

			FLAGS.need2loadParameters = 1
			FLAGS.need2loadImages = 1

			console.log('Parameter file on disk was changed. New rev =' + TASK.paramfile_rev)
		}
	}
	catch(error) {
		console.error(error)
	}

	return need2refresh
}

//================== LOAD JSON ==================//
async function loadParametersfromDropbox(paramfile_path){
	datastring = await loadTextFilefromDropbox(paramfile_path)
	filemeta = await dbx.filesGetMetadata({path: paramfile_path})
	data = JSON.parse(datastring)

	TASK = {}
	TASK = data

	TASK.paramfile = filemeta.path_display; 
	TASK.paramfile_rev = filemeta.rev
	TASK.paramfile_date = new Date(filemeta.client_modified)
}


async function parseAutomatorFilefromDropbox(jsontxt_filepath){
	// From a JSON.txt of the format: 
	// [{param:val, param:val}, {param:val, param:val}]

	// Returns an array of identical format
	var datastring = await loadTextFilefromDropbox(jsontxt_filepath)
	data = JSON.parse(datastring);
	return data

	// Not being used, but maybe if you want to iterate over individual parameters
	// e.g. to check that certain parameters are present; and to set defaults otherwise 
	// e.g. to ensure consistency between fieldnames and TRIAL.[stuff]
	automator_stage_parameters = []
	for (var i = 0; i<data.length; i++){
		automator_stage_parameters[i] = []
		for (var property in data[i]){
			if (data[i].hasOwnProperty(property)){ // Apparently necessary as explained in: http://stackoverflow.com/questions/8312459/iterate-through-object-properties
				automator_stage_parameters[i][property] = data[i][property]
			}	
		}
	}
	return automator_stage_parameters
}


function loadTextFilefromDropbox(textfile_path){
	return new Promise(function(resolve,reject){
		dbx.filesDownload({path: textfile_path}).then(function(data){
			console.log("Read textfile "+textfile_path+" of size " + data.size)

			var reader = new FileReader()
			reader.onload = function(e){
				var data = JSON.parse(reader.result)
				resolve(reader.result)
			}
			reader.readAsText(data.fileBlob)
		})
	.catch(function(error){
		console.error(error)
	})
	})
}

async function readTrialHistoryFromDropbox(filepaths){
	
	var trialhistory = []
	trialhistory.trainingstage = []
	trialhistory.correct = []

	if (typeof filepaths == "string"){
		filepaths = [filepaths]
	}

	// Sort in ascending order, such that the OLDEST file is FIRST in trialhistory 
	// trialhistory: [oldest TRIALs... most recent TRIALs]
	filepaths.sort()

	// Iterate over files and add relevant variables
	for (var i = 0; i< filepaths.length; i++){
		//console.log('Parsing trialhistory from '+filepaths[i])
		datastring = await loadTextFilefromDropbox(filepaths[i])
		data = JSON.parse(datastring)
		task_data = data[0]
		trial_data = data[1]

		var numTRIALs = trial_data.response.length; 
		// Iterate over TRIALs
		for (var i_TRIAL = 0; i<numTRIALs; i++){
			// Correct/incorrect TRIAL
			var correct = trial_data.response[i] == trial_data.correctItem[i]
			trialhistory.correct.push(correct)

			// Current automator stage 
			var current_stage = stageHash(task_data)
			trialhistory.trainingstage.push(current_stage)
		}
	}
	console.log('Read trial history successfully from ', filepaths.length, ' datafiles.')
	return trialhistory
}


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


//================== LOAD IMAGE ==================//

async function loadBagfromDropbox(imagebags_parameter){
	// Locate all .png in directory and subdirectories specified in imagebags_parameter
	// Return in ONE 1-dimensional array, along with label vector that indexes given imagbags_order
	var funcreturn = await loadImageBagPaths(imagebags_parameter); 
	var imagebag_paths = funcreturn[0]
	var imagebag_labels = funcreturn[1] 

	// Load all .png blobs into an array. 
	var imagebag = []
	for (var i = 0; i < imagebag_paths.length; i++){
		var fpath = imagebag_paths[i];
		var img = await loadImagefromDropbox(fpath)
		imagebag.push(img)
	}
	// Todo: fix array load (promises elements aren't actually fulfilled)
	// var imagebag = await loadImageArrayfromDropbox(imagebag_paths)
	console.log('Done loading bag: '+imagebag.length+' out of '+imagebag_paths.length+ ' images loaded successfully.')
	renderBlank()
	return [imagebag, imagebag_labels, imagebag_paths]
}

async function loadImageBagPaths(imagebagroot_s){
	var bagitems_paths = [] // Can also be paths to a single .png file. 
	var bagitems_labels = [] // The labels are integers that index elements of imagebagroot_s. So, a label of '0' means the image belongs to the first imagebag.

	// Case 1: input = string. output = array of .png imagenames
	if (typeof(imagebagroot_s) == "string"){
		bagitems_paths = await getImageListDropboxRecursive(imagebagroot_s)
		for(var i_item = 0; i_item < bagitems_paths.length; i_item++){
			bagitems_labels.push(0)
		}
		return [bagitems_paths, bagitems_labels, bag2itemindex]
	}

	// Case 2: input = array of (array of) paths. output = array of arrays of .png imagenames 	
	for (var i = 0; i<imagebagroot_s.length; i++){
		// If this class's imagebag consists of one (1) root. 
		if (typeof(imagebagroot_s[i]) == "string"){
			var i_itempaths = await getImageListDropboxRecursive(imagebagroot_s[i])
			bagitems_paths.push(... i_itempaths); 

			for(var i_item = 0; i_item < i_itempaths.length; i_item++){
				bagitems_labels.push(i)
			}
		}
		// If this class's imagebag consists of multiple roots.
		else if(typeof(imagebagroot_s[i]) == "object"){
			var i_itempaths = []
			for (var j = 0; j<imagebagroot_s[i].length; j++){
				i_itempaths.push(... await getImageListDropboxRecursive(imagebagroot_s[i][j])); 
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


//================== WRITE JSON ==================//
async function writeBehaviortoDropbox(){
	try{
        var dataobj = [] 
		dataobj.push(TASK)
		dataobj.push(TRIAL)
		datastr = JSON.stringify(dataobj);

		// TODO: 
		// Check if folder DATA_SAVEPATH + TASK.subjectID+"/"+TASK.filename exists 
		// If not, create it for this subjectID using dbx.filesCreateFolder (see: http://dropbox.github.io/dropbox-sdk-js/Dropbox.html#filesCreateFolder__anchor)

		response = await dbx.filesUpload({
			path: DATA_SAVEPATH + TASK.subjectID+"/"+TASK.filename,
			contents: datastr,
			mode: {[".tag"]: "overwrite"} })
			console.log("Successful behavior file upload. Size:" + response.size)
		}
	catch(error){
		console.error(error)
	}
}

async function writeParameterTexttoDropbox(parameter_text){
	try{
	    datastr = parameter_text

	    var success = false 
	    var i = 1; 
	    var timeout_seed =  1000; 
	    var max_retries = 10; 

	    while(!success && i < max_retries){
	    	try{
				response = await dbx.filesUpload({
					path: TASK.paramfile,
					contents: datastr,
					mode: {[".tag"]: "overwrite"} })
						console.log("successful paramater file upload size " + response.size)
						FLAGS.need2writeParameters = 0;
			}
			catch(error){
				console.log(error)
				console.log('Trying to write in '+(timeout_seed*i)+'ms...on try '+ i)
				sleep(timeout_seed * i)
				i++
				continue; 
			}
			success = true
		}
	}
	catch (error){
		console.error(error)
	}

	try{
		filemeta = await dbx.filesGetMetadata({path: TASK.paramfile})
			if (TASK.paramfile_rev != filemeta.rev){
				TASK.paramfile_rev = filemeta.rev
				TASK.paramfile_date = new Date(filemeta.client_modified)

				console.log('Parameter file was updated rev=' + TASK.paramfile_rev)
			}
	}
	catch(error) {
		console.error(error)
	}
}


async function saveParameterstoDropbox() {

	try{

		var savepath = TASK.paramfile
	    var datastr = JSON.stringify(TASK);

		response = await dbx.filesUpload({
			path: savepath,
			contents: datastr,
			mode: {[".tag"]: "overwrite"} })
		
		FLAGS.need2writeParameters = 0;

		filemeta = await dbx.filesGetMetadata({path: savepath})
		if (TASK.paramfile_rev != filemeta.rev){
			TASK.paramfile_rev = filemeta.rev
			TASK.paramfile_date = new Date(filemeta.client_modified)	
		}
		console.log("Task parameters successfully saved to disk. Size: " + response.size)

	}
	catch (error){
		console.error(error)
	}

}


//================== WRITE JSON (end) ==================//


