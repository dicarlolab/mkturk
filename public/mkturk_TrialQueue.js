class TrialQueue { 

constructor(DIO, IB, stage_start_number, trial_constructor_parameters){
	// Sampling properties
	this.nickname = ''
	this.samplingStrategy = "uniform_with_replacement";


	this.tk = trial_constructor_parameters	 
	this.trialStartNumber = stage_start_number; 

	// Queues
	this.sampleq = {}
	this.sampleq.filename = []; 
	this.sampleq.samplebag_index = []; 
	this.sampleq.grid_index_placement = []

	this.testq = {}
	this.testq.filenames = []; 
	this.testq.testbag_indices = []; 
	this.testq.correctGridIndex = [];
	this.testq.grid_index_placements = [];

	this.trialNumber_q = []

	// ImageBuffer
	this.IB = IB 
	this.DIO = DIO

	// Settings 
	this.max_queue_size = 500; // Max number of trials (and their images) to have prepared from now; to improve browser performance
	console.log('TrialQueue', this)
}

async build(trial_cushion_size, samplingStrategy){
	// Call after construction
	var funcreturn = await this.loadImageBagPathsParallel(this.tk['ImageBagsSample']); 
	this.samplebag_labels = funcreturn[1];
	this.samplebag_paths = funcreturn[0]; 
	var funcreturn = await this.loadImageBagPathsParallel(this.tk['ImageBagsTest']); 
	this.testbag_labels = funcreturn[1]; 
	this.testbag_paths = funcreturn[0]; 

	await this.buffer_trials(trial_cushion_size); 
}



async loadImageBagPathsParallel(imagebagroot_s){
	var imagepath_promises = []
	for (var i = 0; i < imagebagroot_s.length; i++){
		imagepath_promises.push(this.loadImageBagPaths(imagebagroot_s[i], i))
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
	}
	return [bagitems_paths, bagitems_labels] 
}
async loadImageBagPaths(imagebagroot_s,idx){
	try{
		var bagitems_paths = [] // Can also be paths to a single .png file. 
		var bagitems_labels = [] // The labels are integers that index elements of imagebagroot_s. So, a label of '0' means the image belongs to the first imagebag.

		// Case 1: input = string. output = array of .png imagenames
		if (typeof(imagebagroot_s) == "string"){
			bagitems_paths = await this.list_images(imagebagroot_s)
			for(var i_item = 0; i_item < bagitems_paths.length; i_item++){
				bagitems_labels.push(0)
			}
			return [bagitems_paths, bagitems_labels]
		}

		// Case 2: input = array of (array of) paths. output = array of arrays of .png imagenames 	
		for (var i = 0; i<imagebagroot_s.length; i++){
			// If this class's imagebag consists of one (1) root. 
			if (typeof(imagebagroot_s[i]) == "string"){
				var i_itempaths = await this.list_images(imagebagroot_s[i])
				bagitems_paths.push(... i_itempaths); 

				for(var i_item = 0; i_item < i_itempaths.length; i_item++){
					bagitems_labels.push(i)
				}
			}
			// If this class's imagebag consists of multiple roots.
			else if(typeof(imagebagroot_s[i]) == "object"){
				var i_itempaths = []
				for (var j = 0; j<imagebagroot_s[i].length; j++){
					i_itempaths.push(... await this.list_images(imagebagroot_s[i][j])); 
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
async list_images(dirpath){
	var file_list = []

	if(dirpath.endsWith('.png')){
		return [dirpath]
	}

	try{
		var entries = []
		var response = await this.DIO.listdir(dirpath)

		entries.push(... response)
		file_list = []
		var fname = ''
		for (var i = 0; i<entries.length; i++){
			fname = entries[i]
			if(fname.endsWith('.png') || fname.endsWith('.jpg')){
				file_list.push(entries[i])
			}
			else{
				wdm('fname'+fname+'not supported (.png and .jpg supported')
				console.log('fname', fname, 'not supported (.png and .jpg supported')
			}
		}
		return file_list
	}
	catch (error) {
		console.error(error)
	}
}



async buffer_trials(num_trials_to_buffer){
	var max_trial_number = Math.max(Math.max(... this.trialNumber_q), -1)
	var trial_generation_calls = []
	var trial_num
	for (var t = 0; t < num_trials_to_buffer; t++){
		trial_num = max_trial_number + t + 1
		trial_generation_calls.push(this.generate_trial(trial_num))
	}
	console.time('Trial generation')
	await Promise.all(trial_generation_calls)
	console.timeEnd('Trial generation')
}

async generate_trial(i){
	try{
		if (this.trialNumber_q.indexOf(i) >= 0){
			//console.log(i+' already geneated')
			return 
			// Already generated 
		}

		var trialnumber = i 
		var _RNGseed = cantor(this.tk['samplingRNGseed'], trialnumber)
		
		var funcreturn = this.selectSampleImage(this.samplebag_labels, this.samplingStrategy, _RNGseed)
		var sample_index = funcreturn[0]
		var sample_grid_index_placement = funcreturn[1]
		var sample_label = this.samplebag_labels[sample_index]; 
		var sample_filename = this.samplebag_paths[sample_index]; 

		var funcreturn = this.selectTestImages(sample_label, this.testbag_labels, _RNGseed) 
		var testbag_indices = funcreturn[0] 
		var correctGridIndex = funcreturn[1] 
		var testimage_grid_index_placements = funcreturn[2]

		var test_filenames = []
		for (var j = 0; j < testbag_indices.length; j++){
			test_filenames.push(this.testbag_paths[testbag_indices[j]])
		}

		var image_requests = []; 
		image_requests.push(sample_filename)
		image_requests.push(... test_filenames)
		this.sampleq.filename.push(sample_filename)
		this.sampleq.samplebag_index.push(sample_index)
		this.sampleq.grid_index_placement.push(sample_grid_index_placement)

		this.testq.filenames.push(test_filenames)
		this.testq.testbag_indices.push(testbag_indices)
		this.testq.correctGridIndex.push(correctGridIndex)
		this.testq.grid_index_placements.push(testimage_grid_index_placements)
		this.trialNumber_q.push(trialnumber)
		await this.IB.cache_these_images(image_requests); 
	}
	catch(error){
		console.log(error)
	}
}

async get_trial(i){
	
	var idx = this.trialNumber_q.indexOf(i)
	if (idx < 0){
		console.log('Trial number '+i+ ' was not found in queue. Generating...')
		await this.generate_trial(i)
		idx = this.trialNumber_q.indexOf(i)
	}

	var sample_filename = this.sampleq.filename[idx]; 
	var samplebag_index = this.sampleq.samplebag_index[idx] 
	var sample_grid_index_placement = this.sampleq.grid_index_placement[idx]

	var test_filenames = this.testq.filenames[idx]
	var testbag_indices = this.testq.testbag_indices[idx] 
	var test_correct_grid_index = this.testq.correctGridIndex[idx]
	var test_grid_index_placements = this.testq.grid_index_placements[idx]


	var sample_image = await this.IB.get_by_name(sample_filename); 
	var test_images = []
	for (var i = 0; i < test_filenames.length; i++){
		test_images.push(await this.IB.get_by_name(test_filenames[i]))
	}


	var choice_reward_amounts = []
	for (var _r = 0; _r < test_grid_index_placements.length; _r++){
	    if(test_grid_index_placements[_r] != test_correct_grid_index){
	        choice_reward_amounts[_r] = 0
	    }
	    else{
	        console.log("correct choice:", test_correct_grid_index)
	        choice_reward_amounts[_r] = 1
    	}
    }

    var trial = {}
    trial['sample_image'] = sample_image
	trial['samplebag_index'] = samplebag_index
	trial['sample_grid_index_placement'] = sample_grid_index_placement
	trial['test_images'] = test_images
	trial['testbag_indices'] = testbag_indices
	trial['test_correct_grid_index'] = test_correct_grid_index
	trial['test_grid_index_placements'] = test_grid_index_placements
	trial['choice_reward_amounts'] = choice_reward_amounts

	return trial
}

selectSampleImage(samplebag_labels, SamplingStrategy, _RNGseed){
	
	Math.seedrandom(_RNGseed)

	// Vanilla random uniform sampling with replacement: 
	var samplebag_index = NaN
	if(SamplingStrategy == 'uniform_with_replacement'){
		samplebag_index = Math.floor((samplebag_labels.length)*Math.random());
	}
	else {
		throw SamplingStrategy + " not implemented in selectSampleImage."
	}
	var sample_image_grid_index_placement = this.tk['SampleGridIndex']
	return [samplebag_index, sample_image_grid_index_placement]
}

selectTestImages(correct_label, testbag_labels, _RNGseed){
	
	Math.seedrandom(_RNGseed)

	var testbag_Indices = []; 
	var correct_grid_index = NaN;
	var grid_index_placements = []

	// If SR is on, 
	if (this.tk['ObjectGridMapping'].length == this.tk['ImageBagsTest'].length){ // Is this a robust SR check?
	
		// For each object, 
		for (var i = 0; i<this.tk['ObjectGridMapping'].length; i++){
			
			var object_test_indices = getAllInstancesIndexes(testbag_labels, i)

			var test_image_index = object_test_indices[Math.floor((object_test_indices.length)*Math.random())]; 
			testbag_Indices.push(test_image_index)

			var object_grid_index = this.tk['ObjectGridMapping'][i] 
			grid_index_placements.push(object_grid_index)

			if(i == correct_label){
				correct_grid_index = object_grid_index; 
			}

		}
		return [testbag_Indices, correct_grid_index, grid_index_placements] // Return in terms of 
	}



	// Otherwise, for match-to-sample (where effectors are shuffled)

	// Get all unique labels 
	var labelspace = []
	for (var i = 0; i < testbag_labels.length; i++){
		if(labelspace.indexOf(testbag_labels[i]) == -1 && 
			testbag_labels[i] != correct_label){
			labelspace.push(testbag_labels[i])
		}
	}

	// Randomly select n-1 labels to serve as distractors 
	var distractors = []
	labelspace = shuffle(labelspace)
	for (var i=0; i <= this.tk['TestGridIndex'].length-2; i++){
		distractors[i] = labelspace[i]
	}

	// Add distractors and correct label to testpool, and then shuffle. 
	var testpool = []
	testpool.push(... distractors)
	testpool.push(correct_label)
	testpool = shuffle(testpool)	

	// For each label in the testpool, add a random testimage index of it to testIndices. 
	for (var i = 0; i<testpool.length; i++){
		label = testpool[i]
		object_test_indices = getAllInstancesIndexes(testbag_labels, label); 
		test_image_index = object_test_indices[Math.floor((object_test_indices.length)*Math.random())]; 
		testIndices[i] = test_image_index
		if(label == correct_label){
			correctSelection = i
		}
	}

	return [testIndices, correctSelection]
}
}