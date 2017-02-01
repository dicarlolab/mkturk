class ImageBuffer { 
	// This object downloads, caches, and gives out images based on their filenames. 
	// Nothing else. No labels, no grouping, nothing. Just images and their filenames. 

	// Single buffer for now for finite list of images that can completely fit in device RAM. 
	// Todo: double buffer to serve imagelists > device RAM (basically, set upper limit on size of cache)
	//														and then flush cache as needed) 
	// Todo: make this Dropbox independent - make this usable with local disk, or in-lab server, for example
	// Todo:  

constructor(image_source){
	// image source can be list of directory paths, or single directory path
	// future: some "generator" object that can take queries 
	this.src = image_source; 
	
	// Buffer: 
	this.cache_images = []; 
	this.cache_filenames = []; 

	this.all_filenames = NaN; 
	this.not_downloaded_filenames = NaN; 

}

// Image blob getting functions
async get_by_name(filename){

	try{
		var buffer_index = this.get_buffer_index(filename)

		// Requested image not in buffer. Add it, then return. 
		if(buffer_index == -1){
			await this.buffer_these_images(filename)
			buffer_index = this.get_buffer_index(filename)
			return this.cache_images[buffer_index]
		}

		// Image already in buffer. Return it.
		else if (buffer_index != -1){
			return this.cache_images[buffer_index]
		}

	}
	catch(error){
		console.error("get_by_name failed with error:", error)
	}
}

async get_by_query(query){
	throw("Getting images by query not yet implemented.")
}

// Buffer-related functions


// Add specific image, or list of images, to cache before moving on.
async buffer_these_images(imagenames){
	try{
		if (this.not_downloaded_filenames.length == undefined){
			await this.prepare_queue()
		}

		if (typeof(imagenames) == "string"){
			if (this.get_buffer_index(imagenames) == -1){
				var image = await loadImagefromDropbox(imagenames) 
				this.cache_images.push(image)
				this.cache_filenames.push(imagenames)

				// Remove this image from queue 
				this.remove_from_queue(imagenames)
				return 
			}
			else{
				return 
			}
			
		}
		else if (typeof(imagenames) == "object"){
			var requested_imagenames = []
			for (var i = 0; i < imagenames.length; i ++){
				if(this.get_buffer_index(imagenames[i]) == -1){
					requested_imagenames.push(imagenames[i])
				}
			}

			var image_array = await loadImageArrayFromDropbox(requested_imagenames)
			this.cache_images.push(... image_array)
			this.cache_filenames.push(... imagenames)

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

async get_all_filenames(){
	try{
		// Get total list of names 
		this.all_filenames = NaN; 

		if(typeof(this.src) == "string"){
			var images2download = await getImageListDropboxRecursive(this.src)
		}

		else if (typeof(this.src) == "object"){
			var images2download = []; 
			for (var i = 0; i < this.src.length; i++){
				images2download.push(... await getImageListDropboxRecursive(this.src[i]))
			}
		}		
		else{
			throw("Image sources other than directorypaths and lists of directorypaths are NOT yet implemented.")
		}
		this.all_filenames = images2download; 
	}

	catch(error) { 
		console.error("get_all_filenames failed with error:", error)
	}
}

async prepare_queue(){
	// Gets this.all_filenames (if not already there)
	// Updates this.not_downloaded_filenames
	try{
		// get_all_filenames() is intended to only be run once in the lifetime of this object
		if (isNaN(this.all_filenames)){
			await this.get_all_filenames(); 
		}

		var not_downloaded_yet = []; 
		for (var i = 0; i < this.all_filenames.length; i++){
			if(this.get_buffer_index(this.all_filenames[i]) == -1){
				not_downloaded_yet.push(this.all_filenames[i])
			}
		}

		this.not_downloaded_filenames = not_downloaded_yet; 
	}
	catch(error){
		console.error("prepare_queue failed with error:", error)
	}
}

async buffer_chunk(chunksize){
	try{
		if(chunksize == 0){
			return 
		}
		// The queue has not been created 
		if (this.not_downloaded_filenames.length == undefined){
			await this.prepare_queue()
		}

		// Nothing left to buffer
		if(this.not_downloaded_filenames.length == 0){
			return 
		}
		else if(this.not_downloaded_filenames.length > 0){
			var requested_imagenames = []
			for ( var i = 0; i < chunksize; i++){
				var image_request = this.not_downloaded_filenames.pop(); 
				if(image_request != undefined){
					requested_imagenames.push(image_request)
				}
				else{
					break
				}
			}
			var image_array = await loadImageArrayfromDropbox(requested_imagenames)
			this.cache_images.push(... image_array)
			this.cache_filenames.push(... requested_imagenames) 
		}
	}
	catch(error){
		console.error("buffer_chunk failed with error:", error)
	}
}

get_buffer_index(filename){
	// Get location (index) of this file in current cache 
	// If not present, returns -1. 
	var buffer_index = this.cache_filenames.indexOf(filename)
	return buffer_index

}

remove_from_queue(filename){
	// Get location (index) of this file in current queue 
	// If not present, returns -1. 
	var queue_index = this.not_downloaded_filenames.indexOf(filename)
	if(queue_index > -1){
		this.not_downloaded_filenames.splice(queue_index, 1)
	}
	else if (queue_index == -1){
		console.log ('Filename '+filename+' was not in queue')
	}
}

async remove_element_from_buffer(buffer_idx){
	window.URL.revokeObjectURL(this.cache_images[buffer_idx].src)
	return 
}
}
