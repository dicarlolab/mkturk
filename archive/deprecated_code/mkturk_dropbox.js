//return whether user was redirected here after authenticating


class TwoWayFileBuffer{
	constructor(DW, filepath){
		this.DW = DW
		this.filepath = filepath 
		this.data_raw = undefined 
		this.data_json = undefined 
		this.rev = undefined
		this._file_changed_on_disk = true
		
	}

	async read(){
		
		if(this._file_changed_on_disk == false){
			return this.data_json
		}

		try{ 
			var datastring = await this.DW.loadTextFilefromDropbox(this.filepath)
			var filemeta = await this.DW.dbx.filesGetMetadata({path: this.filepath})
			this.data_raw = datastring 
			this.data_json = JSON.parse(datastring)
			this.rev = filemeta.rev

			return this.data_json
		}
		catch(error){
			console.error('TwoWayFileBuffer.read() error: ' + error)
			return undefined; 
		}
	}

	async check_if_changed_on_disk(){
		var filemeta = await this.DW.dbx.filesGetMetadata({path: this.filepath})
		if(this.rev != filemeta.rev){
			this._file_changed_on_disk = true 
			FLAGS.need2loadParameters = 1
			console.log('Need 2 load new PARAMETERS!')
		}
		else{
			this._file_changed_on_disk = false 
			console.log('NO need to load new PARAMETERS!')
		}
	}

	async write_object_as_json(dataobj){
		var datastr = JSON.stringify(TASK ,null,' ');
		var response = await this.DW.dbx.filesUpload({
				path: this.filepath,
				contents: datastr,
				mode: {[".tag"]: "overwrite"} })
		var filemeta = await this.DW.dbx.filesGetMetadata({path:this.filepath})
		this.rev = filemeta.rev
	}

}

class DropboxWriter{

	constructor(dbx){
		this.dbx = dbx
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
	async listdir(directory_path){
		var iteration_limit = 100

		var file_list = []

		try{
			var entries = []
			var response = await dbx.filesListFolder({path: directory_path, 
												  recursive: true}) 
			entries.push(... response.entries)

			// Use response.has_more to propagate 
			var num_iterations = 0
			
			while(response.has_more == true){
				response = await dbx.filesListFolderContinue(response.cursor)
				entries.push(... response.entries)

				num_iterations = num_iterations + 1 
				if(num_iterations > iteration_limit)
					{throw 'Hit iteration limit of '+iteration_limit+'. Check your imagebag directory is not insanely large.'}
			}

			
			for (var q = 0; q <= entries.length-1; q++){
				if (entries[q][".tag"] == "file") {
					file_list.push(entries[q].path_display) //'/'+entries[q].name)
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

			return file_list
		}
		catch (error) {
			console.error(error)
		}
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



	//================== LOAD JSON ==================//


	async readJSONfromDropbox(jsontxt_filepath){
		// From a JSON.txt of the format: 
		// [{param:val, param:val}, {param:val, param:val}]

		// Returns an array of identical format
		console.time('Loaded text file from Dropbox:'+jsontxt_filepath)
		var datastring = await this.loadTextFilefromDropbox(jsontxt_filepath)

		var data = JSON.parse(datastring);
		console.timeEnd('Loaded text file from Dropbox:'+jsontxt_filepath)
		return data
	}


	loadTextFilefromDropbox(textfile_path){
		var _this = this
		return new Promise(function(resolve,reject){
			_this.dbx.filesDownload({path: textfile_path})
			.then(function(data){
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



	


	
	
		

	async write_string(datastr, filepath){
		try{
			var response = await this.dbx.filesUpload({
					path: filepath,
					contents: datastr,
					mode: {[".tag"]: "overwrite"} })
		}
		catch(error){
			console.log('DW.write_string:', error)
		}
	}
	async checkpointTaskStreamState(TaskStreamState, save_to_debug_directory){
		var checkpoint_filename = this.checkpoint_namehash(SUBJECT.SubjectID, EXPERIMENT)
		var checkpoint_string = JSON.stringify(TaskStreamState)
		
		try{
			if (save_to_debug_directory == 0){
				var dirpath = CHECKPOINT_DIRPATH
			}
			else { // In debug mode
				var dirpath = _debug_CHECKPOINT_DIRPATH
			}
			var savepath = join([dirpath,checkpoint_filename])
			var response = await this.dbx.filesUpload({
				path: savepath,
				contents: checkpoint_string,
				mode: {[".tag"]: "overwrite"} })
				console.log(checkpoint_filename+" CHECKPOINT UPLOADED at "+savepath)
			}
		catch(error){
			console.error(error)
		}
	}




	//================== WRITE JSON ==================//
	async saveTrialDatatoDropbox(save_to_debug_directory){
		// Add request to queue 

		var dataobj = [] 
		dataobj.push(SESSION)
		dataobj.push(DEVICE)
		dataobj.push(TASK_ARCHIVE)
		dataobj.push(CANVAS)
		dataobj.push(TRIAL_BEHAVIOR)
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
			var datestr = SESSION.CurrentDate.toISOString();
			datestr = datestr.slice(0,datestr.indexOf("."))
			this._touch_filename_suffix = '_touch_'+datestr+'__0.txt'


			
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


			var header='pageX,pageY'
			header+=',clientXdelta_from_pageX,clientYdelta_from_pageY'
			header+=',screenXdelta_from_pageX,screenYdelta_from_pageY'
			header+=',radiusX,radiusY'
			header+=',touch_update_number'
			header+=',unix_timestamp_delta_from__'+starttime
			header+=',Tap_or_Drag\n'

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



	

}

