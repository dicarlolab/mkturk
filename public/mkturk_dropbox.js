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

class DropboxWriter{

	constructor(dbx){
		this.dbx = dbx

		var datestr = SESSION.CurrentDate.toISOString();
		datestr = datestr.slice(0,datestr.indexOf("."))

		this._touch_filename_suffix = '_touch_'+datestr+'__0.txt'
	}

	async getMostRecentBehavioralFilePathsFromDropbox(num_files_to_get, subject_id, save_directory){
		var file_list = []
		try{


			// If folder does not end with /, add it. 
			if (save_directory.endsWith('/') == false){ 
				save_directory = save_directory + '/'
			}
			var response = await this.dbx.filesListFolder({path: save_directory})
			//console.log("Success: read directory "+save_directory)

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
			var num_files = file_list.length
			return file_list.slice(num_files - num_files_to_get, num_files)
		}
		catch (error) {
			console.error(error)
		}

	}

	async loadImageBagPathsParallel(imagebagroot_s){
		var imagepath_promises = []
		for (var i = 0; i < imagebagroot_s.length; i++){
			imagepath_promises.push(this.loadImageBagPaths(this.dbx, this.getImageListDropboxRecursive, imagebagroot_s[i], i))
		}

		var funcreturn = await Promise.all(imagepath_promises);
		//Assemble images and add labels
		var bagitems_paths = [] // Can also be paths to a single .png file. 
		var bagitems_labels = [] // The labels are integers that index elements of imagebagroot_s. So, a label of '0' means the image belongs to the first imagebag.
		for (var i=0; i<=funcreturn.length-1; i++){
			bagitems_paths.push(... funcreturn[i][0])
			for (var j=0; j<= funcreturn[i][0].length-1; j++){
				bagitems_labels.push(i)
			}
		} //for i labels
		return [bagitems_paths, bagitems_labels] 
	}


	async loadImageBagPaths(dbx, getImageListDropboxRecursive, imagebagroot_s,idx) //(imagebagroot_s)
	{
		try{
			var bagitems_paths = [] // Can also be paths to a single .png file. 
			var bagitems_labels = [] // The labels are integers that index elements of imagebagroot_s. So, a label of '0' means the image belongs to the first imagebag.

			// Case 1: input = string. output = array of .png imagenames
			if (typeof(imagebagroot_s) == "string"){
				bagitems_paths = await getImageListDropboxRecursive(dbx, imagebagroot_s)
				for(var i_item = 0; i_item < bagitems_paths.length; i_item++){
					bagitems_labels.push(0)
				}
				return [bagitems_paths, bagitems_labels]
			}

			// Case 2: input = array of (array of) paths. output = array of arrays of .png imagenames 	
			for (var i = 0; i<imagebagroot_s.length; i++){
				// If this class's imagebag consists of one (1) root. 
				if (typeof(imagebagroot_s[i]) == "string"){
					var i_itempaths = await getImageListDropboxRecursive(dbx, imagebagroot_s[i])
					bagitems_paths.push(... i_itempaths); 

					for(var i_item = 0; i_item < i_itempaths.length; i_item++){
						bagitems_labels.push(i)
					}
				}
				// If this class's imagebag consists of multiple roots.
				else if(typeof(imagebagroot_s[i]) == "object"){
					var i_itempaths = []
					for (var j = 0; j<imagebagroot_s[i].length; j++){
						i_itempaths.push(... await getImageListDropboxRecursive(dbx, imagebagroot_s[i][j])); 
					}
					bagitems_paths.push(... i_itempaths)

					for(var i_item = 0; i_item < i_itempaths.length; i_item++){
						bagitems_labels.push(i)
					}	
				}
			}
		}
		catch(error){
			console.log(error)
		}

		return [bagitems_paths, bagitems_labels] 
	}


	async getImageListDropboxRecursive(dbx, dirpath){
		var file_list = []

		if(dirpath.endsWith('.png')){
			return [dirpath]
		}

		try{
			var entries = []
			var response = await dbx.filesListFolder({path: dirpath, 
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
			//console.log(file_list.length+" file(s) discovered in directory \""+dirpath+"\" (and any subdirectories). ")

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
	async checkIfFileChangedOnDisk(_Filepath, _FileRevisionHash){
		try{
			var filemeta = await this.dbx.filesGetMetadata({path: _Filepath})
			if (_FileRevisionHash != filemeta.rev){
				_FileRevisionHash = filemeta.rev
				console.log('File '+_Filepath+ ' on disk was changed. New rev =' + _FileRevisionHash)
				console.log('checkIfFileChangedOnDisk', 1)
				return 1
			}
			else{
				return 0
			}
		}
		catch(error) {
			console.error(error)
			return 1
		}
	}

	//================== LOAD JSON ==================//
	async loadParametersfromDropbox(paramfile_path){
		try{ 
			var datastring = await this.loadTextFilefromDropbox(this.dbx, paramfile_path)
			var filemeta = await this.dbx.filesGetMetadata({path: paramfile_path})
			var data = JSON.parse(datastring)

			var TASK_entry = data
			var ParamFileRev = filemeta.rev
			return [TASK_entry, ParamFileRev]; 
		}
		catch(error){
			console.error('loadParametersfromDropbox() error: ' + error)
			return undefined; 
		}
	}


	async parseAutomatorFilefromDropbox(jsontxt_filepath){
		// From a JSON.txt of the format: 
		// [{param:val, param:val}, {param:val, param:val}]

		// Returns an array of identical format
		console.log('Starting load of automator file from Dropbox:'+jsontxt_filepath)
		var datastring = await this.loadTextFilefromDropbox(this.dbx, jsontxt_filepath)

		var data = JSON.parse(datastring);
		console.log('Successfully loaded automator file from Dropbox:'+jsontxt_filepath)
		return data
	}


	loadTextFilefromDropbox(dbx, textfile_path){
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



	// MDN using files from web applications -->
	//   https://developer.mozilla.org/en-US/docs/Using_files_from_web_applications
	// Why createObjectUrl and advantages of blob urls --> 
	//   http://stackoverflow.com/questions/20950791/html5s-file-api-blob-usages

	//================== LOAD AUDIO ==================//



	//================== LOAD IMAGE ==================//
	async loadBagfromDropbox(imagebags_parameter){

		// Locate all .png in directory and subdirectories specified in imagebags_parameter
		// Return in ONE 1-dimensional array, along with label vector that indexes given imagbags_order
		try{
			var funcreturn = await this.loadImageBagPaths(this.dbx, this.getImageListDropboxRecursive, imagebags_parameter); 
		}
		catch(error){
			console.log('Path loading failed', error)
		}
		var imagebag_paths = funcreturn[0]
		var imagebag_labels = funcreturn[1] 

		// Load all .png blobs into an array. 
		// Todo: fix array load (promises elements aren't actually fulfilled)
		try{
			var imagebag = await this.loadImageArrayfromDropbox(imagebag_paths)
		}
		catch(error){
			console.log('Image array load failed', error)
		}

		console.log('Done loading bag: '+imagebag.length+' out of '+imagebag_paths.length+ ' images loaded successfully.')
		return [imagebag, imagebag_labels, imagebag_paths]
	}


	async loadImageArrayfromDropbox(imagepathlist){
		try{
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

					// var partial_image_requests = partial_pathlist.map(loadImagefromDropbox);
					var partial_image_requests = []
					for (var j = 0; j<partial_pathlist.length; j++){
						partial_image_requests.push(this.loadImagefromDropbox(partial_pathlist[j]))
					}

					var partial_image_array = await Promise.all(partial_image_requests)
					image_array.push(... partial_image_array); 
				}
				
			}
			else { 
				var image_requests = imagepathlist.map(this.loadImagefromDropbox); 
				var image_array = await Promise.all(image_requests)
			}
			return image_array
		}
		catch(err){
			console.log(err)
		}

	}


	async loadImagefromDropbox(imagepath){
		// Loads and returns a single image located at imagepath into an Image()
		// Upon failure (e.g. from Dropbox API limit), will retry up to MAX_RETRIES. 
		// Will wait between retries with linear increase in waittime between tries. 
		return new Promise(
			function(resolve, reject){
				try{
					var MAX_RETRIES = 5 
					var backoff_time_seed = 500 // ms; is multiplied by retry number. 
					var retry_number = 0; 
					try{
						dbx.filesDownload({path: imagepath}).then( 
							function(data){
								var data_src = window.URL.createObjectURL(data.fileBlob); 	
								var image = new Image(); 

								image.onload = function(){
									//console.log('Loaded: ' + (imagepath));
									resolve(image)
									}
								image.src = data_src
							}
						)
					}
					catch(error){
						retry_number = retry_number + 1; 
						console.log(error)
						console.log('On retry '+retry_number)
						sleep(backoff_time_seed * retry_number)
						//continue
					}	
				}
				catch(error){
					console.log(error)
					resolve(0)
				}
			}
		)
	}
	async readTrialHistoryFromDropbox(ndatafiles2read){
		var subject_behavior_save_directory = TRIAL_DATA_SAVEPATH + SESSION.Subject
		
		try{
				await dbx.filesGetMetadata({"path":subject_behavior_save_directory, "include_deleted":false})
			}
		catch(error){
			console.log(error)
			console.log("Subject save directory does not exist...making one at "+subject_behavior_save_directory)
			await dbx.filesCreateFolder({"path":subject_behavior_save_directory})
		}

		 var filepaths = await this.getMostRecentBehavioralFilePathsFromDropbox(ndatafiles2read, SESSION.Subject, subject_behavior_save_directory)
		

		var trialhistory = {}
		trialhistory.trainingstage = []
		trialhistory.starttime = []
		trialhistory.response = []
		trialhistory.correct = []
		trialhistory.trialnumber = []

		if (typeof filepaths == "string"){
			filepaths = [filepaths]
		}

		// Sort in ascending order, such that the OLDEST file is FIRST in trialhistory 
		// trialhistory: [oldest TRIALs... most recent TRIALs]
		filepaths.sort()

		// Iterate over files and add relevant variables
		for (var i = 0; i< filepaths.length; i++){
			var datastring = await DW.loadTextFilefromDropbox(dbx, filepaths[i])
			var data = JSON.parse(datastring)

		


			var session_data = data[0]
			var UnixTimeStampAtStart = session_data.UnixTimeStampAtStart
			var task_archive_data = data[2]
			var trial_data = data[4]

			var numTRIALs = trial_data.Response.length; 
			// Iterate over TRIALs
			for (var i_trial = 0; i_trial<numTRIALs; i_trial++){
				// Correct/incorrect TRIAL
				var correct = Number(trial_data.Response[i_trial] == trial_data.CorrectItem[i_trial])
				trialhistory.correct.push(correct)

				// Current automator stage 
				var current_stage = stageHash(task_archive_data[task_archive_data.length-1])
				trialhistory.trainingstage.push(current_stage)

				// Start time (fixation dot appears) of trial 
				var starttime = UnixTimeStampAtStart + trial_data.StartTime[i_trial]
				trialhistory.starttime.push(starttime)

			}
		}
		console.log('Read '+trialhistory.trainingstage.length+' past trials from ', filepaths.length, ' datafiles.')
		return trialhistory
	}

	//================== WRITE JSON ==================//
	async saveTrialDatatoDropbox(SESSION, DEVICE, TASK_ARCHIVE, CANVAS, TRIAL, EVENT_TIMESTAMPS, save_to_debug_directory){
		// Add request to queue 

		var dataobj = [] 
		dataobj.push(SESSION)
		dataobj.push(DEVICE)
		dataobj.push(TASK_ARCHIVE)
		dataobj.push(CANVAS)
		dataobj.push(TRIAL)
		dataobj.push(EVENT_TIMESTAMPS)
		var datastr = JSON.stringify(dataobj); //no pretty print for now, saves space and data file is unwieldy to look at for larger numbers of trials


		try{
        

			if (save_to_debug_directory == 0){
				var savepath = TRIAL_DATA_SAVEPATH + SESSION.Subject+'/'+ SESSION.Subject +'_'+ SESSION.TrialDataFileName_suffix
			}
			else { // In debug mode
				var savepath = _debug_TRIAL_DATA_SAVEPATH + SESSION.Subject+'/'+ "debug__"+SESSION.Subject +'_'+SESSION.TrialDataFileName_suffix
			}
			 
			var response = await this.dbx.filesUpload({
				path: savepath,
				contents: datastr,
				mode: {[".tag"]: "overwrite"} })
				console.log(TASK.CurrentAutomatorStage+" BEHAVIOR FILE UPLOADED at "+savepath)
			

			}

			

		catch(error){
			console.error(error)
		}
	}

	async saveTouchestoDropbox(save_to_debug_directory) {
		try{
			
			if (save_to_debug_directory == 0){
				var root_savedir = TOUCH_DATA_SAVEPATH+SESSION.Subject+'/'
			}
			else { // In debug mode
				var root_savedir = _debug_TOUCH_DATA_SAVEPATH+SESSION.Subject+'/'
			}

			var datestr = SESSION.CurrentDate.toISOString();
			datestr = datestr.slice(0,datestr.indexOf("."))

			var savepath = root_savedir + SESSION.Subject+this._touch_filename_suffix 
			
			var starttime = SESSION.UnixTimestampAtStart

			var header = 'x_pixels_left2right,y_pixels_top2bottom,touch_number,unix_timestamp_delta_from__'+starttime+',Tap_or_Drag\n'

			var response = await this.dbx.filesUpload({
				path: savepath,
				contents: header+TOUCHSTRING,
				mode: {[".tag"]: "overwrite"} })

			if(TOUCHSTRING.length > TOUCHSTRING_MAX_CACHE_SIZE){
				// Start new file and flush cache
				this._touch_filename_suffix = '_touch_'+datestr+'__'+TOUCHSTRING_UDPATECOUNTER+'.txt'
				TOUCHSTRING = ""
			}

			
			console.log("Touches written to disk as "+savepath+". Size: " + response.size)
			return 0; //need2saveParameters
		}
		catch (error){
			console.error(error)
			return -50 //need2saveParameters
		}
	}

	async saveParameterTexttoDropbox(parameter_text){
		try{
		    datastr = parameter_text

		    var success = false 
		    var i = 1; 
		    var timeout_seed =  1000; 
		    var max_retries = 10; 

		    while(!success && i < max_retries){
		    	try{
					var response = await this.dbx.filesUpload({
						path: ParamFilePath,
						contents: datastr,
						mode: {[".tag"]: "overwrite"} })
							console.log("Successful parameter text upload. Size: " + response.size)
							FLAGS.need2saveParameters = 0;
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
			var filemeta = await this.dbx.filesGetMetadata({path: ParamFilePath})
				if (ParamFileRev != filemeta.rev){
					ParamFileRev = filemeta.rev

					//console.log('Parameter file was updated. Rev=' + ParamFileRev)
				}
		}
		catch(error) {
			console.error(error)
		}
	}


	async saveParameterstoDropbox() {
		try{
			var savepath = ParamFilePath
		    var datastr = JSON.stringify(TASK ,null,' ');

			var response = await this.dbx.filesUpload({
				path: savepath,
				contents: datastr,
				mode: {[".tag"]: "overwrite"} })
			
			var filemeta = await this.dbx.filesGetMetadata({path: savepath})
			if (ParamFileRev != filemeta.rev){
				ParamFileRev = filemeta.rev
			}
			console.log("TASK written to disk as "+ParamFilePath+". Size: " + response.size)
			return 0; //need2saveParameters
		}
		catch (error){
			console.error(error)
			return 1 //need2saveParameters
		}
	}
	


}

