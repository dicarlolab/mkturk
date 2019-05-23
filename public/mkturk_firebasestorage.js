//------- ATOMIC OPERATIONS -------//

//---- Load JSON text
async function loadTextfromFirebase(textfile_path){
	var textfileRef = storage.ref().child(textfile_path)
	url = await textfileRef.getDownloadURL()
	response = await fetch(url)
	return response.json()
} //ReadFromFirebase

//---- Load image
async function loadImagefromFirebase(imagefile_path){
	var imagefileRef = storage.ref().child(imagefile_path)
	var url = await imagefileRef.getDownloadURL()

	return new Promise(
		function(resolve, reject){
			try {
				var image = new Image(); 
				image.onload = function(){
					// console.log('Loaded: ' + (imagepath));
					updateImageLoadingAndDisplayText('Loaded: ' + imagefile_path)
// 					console.log('Loaded: ' + imagefile_path)
					resolve(image)				
				}
				image.src = url
			} //try
			catch (error){
				console.log(error)
			} //catch
		}
	) //Promise
} //ReadFromFirebase


//---- Get file metadata
async function getFileMetadataFirebase(file_path){
	return await storage.ref().child(file_path).getMetadata()
// Even without Object Versioning enabled, all Cloud Storage objects have generation numbers and meta-generation numbers.
// GENERATION: The generation number changes each time the object is overwritten, and the meta-generation number changes each time the object's metadata is updated.
// MD5HASH: A Base64-encoded MD5 hash of the object being uploaded.
}

//---- Get file list


async function checkParameterFileStatusFirebase(){
try {
	var filemeta = await getFileMetadataFirebase(ENV.DataFileName)
	if (ENV.ParamFileRev != filemeta.md5Hash){
		ENV.ParamFileRev = filemeta.md5Hash
		ENV.ParamFileDate = new Date(filemeta.updated)

		// FLAGS.need2loadParameters = 1
		updateEventDataonFirestore(EVENTS);

		console.log('Parameter file on disk was changed. New rev =' + ENV.ParamFileRev)
	} //if file updated
} //try
catch(error){
	console.log('FIREBASE getmeta: ' + error)
}//catch
}


async function loadParametersfromFirebase(paramfile_path){
	try{ 
		data = await loadTextfromFirebase(paramfile_path)
// 		filemeta = await dbx.filesGetMetadata({path: paramfile_path})

		TASK = {}
		TASK = data

// 		ENV.ParamFileName = filemeta.path_display; 
// 		ENV.ParamFileRev = filemeta.rev
// 		ENV.ParamFileDate = new Date(filemeta.client_modified)
		return 0; //need2loadParameters
	}
	catch(error){
		console.error('loadParametersfromFirebase() error: ' + error)
		return 1; //need2loadParameters
	}
}



//---- Write text
async function saveBehaviorDatatoFirebase(TASK, ENV, CANVAS, TRIAL){
	var dataobj = [] 

	dataobj.push(ENV)
	dataobj.push(IMAGES.imagepaths)
	dataobj.push(CANVAS)
	dataobj.push(TASK)
	dataobj.push(TRIAL)
	datastr = JSON.stringify(dataobj); //no pretty print for now, saves space and data file is unwieldy to look at for larger numbers of trials


	var blob = new Blob([ datastr ], {type : 'application/json'});

	// Create file metadata including the content type
	var metadata = { contentType: 'text/json' };

	// Upload the file and metadata
	var response = await storage.ref().child(ENV.DataFileName).put(blob, metadata);
	CURRTRIAL.lastFirebaseSave = new Date(response.metadata.timeCreated)
	console.log("FIREBASE: Successful behavior file upload. Size:" + Math.round(response.totalBytes/1000) + 'kb')
} //UploadToFirebase




// async function saveBehaviorDatatoDropbox(TASK, ENV, CANVAS, TRIAL){
// 	try{
//         var dataobj = [] 

// 		dataobj.push(ENV)
// 		dataobj.push(IMAGES.imagepaths)
// 		dataobj.push(CANVAS)
// 		dataobj.push(TASK)
// 		dataobj.push(TRIAL)
// 		datastr = JSON.stringify(dataobj); //no pretty print for now, saves space and data file is unwieldy to look at for larger numbers of trials

// 		// TODO: 
// 		// Check if folder ENV.DataFileName exists 
// 		// If not, create it for this subjectID using dbx.filesCreateFolder (see: http://dropbox.github.io/dropbox-sdk-js/Dropbox.html#filesCreateFolder__anchor)

// 		response = await dbx.filesUpload({
// 			path: ENV.DataFileName,
// 			contents: datastr,
// 			mode: {[".tag"]: "overwrite"} })
// 			CURRTRIAL.lastDropboxSave = new Date(response.client_modified)
// 			console.log("Successful behavior file upload. Size:" + response.size)
// 		}
// 	catch(error){
// 		console.error(error)
// 	}
// }



// async function loadImagefromDropbox(imagepath){
// 	// Loads and returns a single image located at imagepath into an Image()
// 	// Upon failure (e.g. from Dropbox API limit), will retry up to MAX_RETRIES. 
// 	// Will wait between retries with linear increase in waittime between tries. 
// 	return new Promise(
// 		function(resolve, reject){
// 			try{
// 				try{
// 					dbx.filesDownload({path: imagepath}).then( 
// 						function(data){
// 							var data_src = window.URL.createObjectURL(data.fileBlob); 	
// 							var image = new Image(); 

// 							image.onload = function(){
// 								// console.log('Loaded: ' + (imagepath));
// 								updateImageLoadingAndDisplayText('Loaded: ' + imagepath)
// 								resolve(image)
// 								}
// 							image.src = data_src
// 						}
// 					).catch(function(error){
// 						console.log(error)
// 						console.log("Dropbox image load failed!!")
// 						var image = {src: 'failed'}
// 						resolve(image)
// 					})
// 				}
// 				catch(error){
// 					console.log(error)
// 				}
// 			}
// 			catch(error){
// 				console.log(error)
// 				resolve(0)
// 			}
// 		}
// 	)
// }