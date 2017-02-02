class ImageBuffer { 
	// This object downloads, caches, and gives out images based on their filenames. 
	// Nothing else. No labels, no grouping, nothing. Just images and their filenames. 

	// Single buffer for now for finite list of images that can completely fit in device RAM. 
	// Construct with image_source (directory string or list of directory strings) and all_filenames ([first to download, last to download])

	// Todo: double buffer to serve imagelists > device RAM (basically, set upper limit on size of cache)
	//														and then flush cache as needed) 
	// Todo: make this Dropbox independent - make this usable with local disk, or in-lab server, for example
	// Todo:  

constructor(){
	// future: some "generator" object that can take queries 
	
	// Buffer: 
	this.cache_dict = {}; // filename:
	this.download_queue = []; // [first in line, ..., last in line]
}


print_buffer(){
	console.log("Printing buffer:")
	for (var filename in this.cache_dict){
		console.log(filename)
	}
}
// ------- Image blob getting functions ----------------------------
async get_by_name(filename){

	try{
		// Requested image not in buffer. Add it, then return. 
		if (filename in this.cache_dict){
			return this.cache_dict[filename]
		}
		else if (!(filename in this.cache_dict)){
			await this.buffer_these_images(filename)
			return this.cache_dict[filename]
		}

	}
	catch(error){
		console.error("get_by_name failed with error:", error)
	}
}

async get_by_query(query){
	throw("Getting images by query not yet implemented.")
	// For future use with generators. 
}

// ------- Buffer-related functions --------------------------------
// Add specific image, or list of images, to cache before moving on.
async buffer_these_images(imagenames){
	try{

		if (typeof(imagenames) == "string"){
			var filename = imagenames; 
			if (!(filename in this.cache_dict)){
				var image = await loadImagefromDropbox(filename); 
				this.cache_dict[filename] = image; 
				// Remove this image from queue 
				this.remove_from_queue(filename)
				return 
			}
			else{
				return 
			}
		}

		else if (typeof(imagenames) == "object"){
			var requested_imagenames = []
			for (var i = 0; i < imagenames.length; i ++){
				if(!(filename in this.cache_dict)){
					requested_imagenames.push(imagenames[i])
				}
			}

			var image_array = await loadImageArrayFromDropbox(requested_imagenames)
			for (var i = 0; i < image_array.length; i++){
				this.cache_dict[imagenames[i]] = image_array[i]; 
			}

			// Remove these images from queue 
			for (var i = 0; i < imagenames.length; i ++){
				this.remove_from_queue(imagenames[i])
			}
			return
		}
	}
	catch(error){
		console.error("buffer_these_images failed with error:", error)
	}
}



async buffer_chunk(chunksize){
	// Downloads files using this.download_queue, [first_in_line, last_in_line]
	// and adds to this.cache_dict
	try{
		if(chunksize == 0){
			return 
		}


		// Nothing left to buffer
		if(this.download_queue.length == 0){
			console.log("buffer_chunk requested, but this.download_queue is empty.")
			return 
		}
		else if(this.download_queue.length > 0){
			var requested_imagenames = []
			for ( var i = 0; i < chunksize; i++){
				var image_request = this.download_queue.shift();
				// Add to request array 
				if (image_request != undefined && !(image_request in this.cache_dict) && (requested_imagenames.indexOf(image_request) == -1)){
					//console.log('Will download ', image_request)
					requested_imagenames.push(image_request)
				}
				// Nothing left in download queue
				else if(this.download_queue.length == 0){
					console.log('download queue depleted, continuing')
					break
				}
				// Image was already cached
				else if(image_request in this.cache_dict){
					//console.log('image already downloaded, continuing')
					continue
				}

				// Image was already requested
				else if(requested_imagenames.indexOf(image_request) != -1){
					//console.log('image '+ image_request+' already requested, continuing')
					continue
				}
			}
			var image_array = await loadImageArrayfromDropbox(requested_imagenames)
			for (var i = 0; i < image_array.length; i++){
				this.cache_dict[requested_imagenames[i]] = image_array[i]; 
			}
		}
	}
	catch(error){
		console.error("buffer_chunk failed with error:", error)
	}
}

add_to_queue(filenames){
	// Adds filename(s) to front of queue, in their given order. 
	// Lazily does so, such that duplicate elements may end up in queue. 
	// The default behavior for buffer_chunk is that images that are already in the cache are skipped. 
	// The downside is that overriding previous imagenames in the cache is not possible. todo: force override option

	// or: check now, if in queue...because adding to queue is not done at critical times anyway...
	// if in queue, delete later entry and move to front. 
	// solution with arrays?
	if (typeof(filenames) == "string"){
		var imagename = filenames; 
		this.download_queue.unshift(imagename)
	}
	else if (typeof(filenames) == "object"){
		this.download_queue.unshift(... filenames)
	}

	return
}

remove_from_queue(filename){
	// Get location (index) of this file in current queue 
	// If not present, returns -1. 
	//var queue_index = this.download_queue.indexOf(filename)
	var queue_indices = getAllInstancesIndexes(this.download_queue, filename); 
	// todo: performance improvement...?

	if(queue_indices.length > 0){
		for(var i = 0; i < queue_indices.length; i ++){
			this.download_queue.splice(queue_indices[i], 1)
		}
	}
	else if (queue_indices.length == 0){
		console.log ('Filename '+filename+' was requested to be removed, but not in queue')
	}
	else{
		throw "remove_from_queue failed"
	}
}

async remove_image_from_buffer(filename){
	window.URL.revokeObjectURL(this.cache_dict[filename].src)
	delete this.cache_dict[filename]; 

	return 
}
}
