async function getFileListDropboxRecursive(dirpath){
	var file_list = []

	if(dirpath.endsWith('.txt')){
		return [dirpath]
	}
	try{
		var entries = []
		let response = await dbx.filesListFolder({path: dirpath, 
											  recursive: true}) 
		entries.push(... response.entries)

		// Use response.has_more to propagate 
		var num_iterations = 0
		var iteration_limit = 100
		while(response.has_more == true){
			response = await dbx.filesListFolderContinue({cursor: response.cursor})
			entries.push(... response.entries)

			num_iterations = num_iterations + 1 
			if(num_iterations > iteration_limit)
				{throw 'Hit iteration limit of '+iteration_limit+'. Check your imagebag directory is not insanely large.'}
		}

		
		var q2=0;
		for (var q = 0; q <= entries.length-1; q++){
			if (entries[q][".tag"] == "file" && entries[q].name.endsWith(".txt")) {
				file_list.push(entries[q].path_display) //'/'+entries[q].name)
				q2++;
			}
		}
		//console.log(file_list.length+" file(s) discovered in directory \""+dirpath+"\" (and any subdirectories). ")

		file_list.sort(function (a,b){
			if (a < b){
				return 1;
			}
			if (a > b){
				return -1;
			}
			return 0;
		}); //sort in descending order

		return file_list
	}
	catch (error) {
		console.error(error)
	}
}
