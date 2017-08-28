class TrialQueue { 

constructor(samplingStrategy, ImageBagsSample, ImageBagsTest, _ObjectGridMapping, samplingRNGseed, trial_num_TaskStream){
	// Sampling properties
	this.nickname = ''
	
	this.samplingStrategy = samplingStrategy; 
	this.trialStartNumber = trial_num_TaskStream; 
	this.samplingRNGseed = samplingRNGseed; 

	// Resource properties
	this.ImageBagsSample = ImageBagsSample; 
	this.ImageBagsTest = ImageBagsTest; 
	this.ObjectGridMapping = _ObjectGridMapping; 

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
	this.IB = new ImageBuffer(); 

	// Settings 
	this.max_queue_size = 500; // Max number of trials (and their images) to have prepared from now; to improve browser performance
}

async build(trial_cushion_size){
	// Call after construction
	var funcreturn = await DW.loadImageBagPathsParallel(this.ImageBagsSample); 
	this.samplebag_labels = funcreturn[1];
	this.samplebag_paths = funcreturn[0]; 
	var funcreturn = await DW.loadImageBagPathsParallel(this.ImageBagsTest); 
	this.testbag_labels = funcreturn[1]; 
	this.testbag_paths = funcreturn[0]; 

	await this.buffer_trials(trial_cushion_size); 
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
		var _RNGseed = cantor(this.samplingRNGseed, trialnumber)
		
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

	return [sample_image,
	 samplebag_index, 
	 sample_grid_index_placement, 
	 test_images, 
	 testbag_indices, 
	 test_correct_grid_index, 
	 test_grid_index_placements]
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
	var sample_image_grid_index_placement = TASK.SampleGridIndex
	return [samplebag_index, sample_image_grid_index_placement]
}

selectTestImages(correct_label, testbag_labels, _RNGseed){
	
	Math.seedrandom(_RNGseed)

	var testbag_Indices = []; 
	var correct_grid_index = NaN;
	var grid_index_placements = []

	// If SR is on, 
	if (this.ObjectGridMapping.length == this.ImageBagsTest.length){ // Is this a robust SR check?
	
		// For each object, 
		for (var i = 0; i<this.ObjectGridMapping.length; i++){
			
			var object_test_indices = getAllInstancesIndexes(testbag_labels, i)

			var test_image_index = object_test_indices[Math.floor((object_test_indices.length)*Math.random())]; 
			testbag_Indices.push(test_image_index)

			var object_grid_index = this.ObjectGridMapping[i] 
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
	for (var i=0; i <= TASK.TestGridIndex.length-2; i++){
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