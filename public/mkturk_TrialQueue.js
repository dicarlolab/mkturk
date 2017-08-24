class TrialQueue { 

constructor(samplingStrategy, ImageBagsSample, ImageBagsTest, samplingRNGseed, trial_num_TaskStream){
	// Sampling properties
	this.samplingStrategy = samplingStrategy; 
	this.trialStartNumber = trial_num_TaskStream; 
	this.samplingRNGseed = samplingRNGseed; 

	// Resource properties
	this.ImageBagsSample = ImageBagsSample; 
	this.ImageBagsTest = ImageBagsTest; 

	// Queues
	this.sampleq = {}
	this.sampleq.filename = []; 
	this.sampleq.index = []; 

	this.testq = {}
	this.testq.filenames = []; 
	this.testq.indices = []; 
	this.testq.correctIndex = [];

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
		
		// console.log('Generating trial ', trialnumber, '. Using seed ', _RNGseed)
		var sample_index = selectSampleImage(this.samplebag_labels, this.samplingStrategy, _RNGseed)
		var sample_label = this.samplebag_labels[sample_index]; 
		var sample_filename = this.samplebag_paths[sample_index]; 

		var funcreturn = selectTestImages(sample_label, this.testbag_labels, _RNGseed) 
		var test_indices = funcreturn[0] 
		var correctIndex = funcreturn[1] 
		var test_filenames = []
		for (var j = 0; j < test_indices.length; j++){
			test_filenames.push(this.testbag_paths[test_indices[j]])
		}

		var image_requests = []; 
		image_requests.push(sample_filename)
		image_requests.push(... test_filenames)
		this.sampleq.filename.push(sample_filename)
		this.sampleq.index.push(sample_index)

		this.testq.filenames.push(test_filenames)
		this.testq.indices.push(test_indices)
		this.testq.correctIndex.push(correctIndex)

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
	var sample_index = this.sampleq.index[idx] 

	var test_filenames = this.testq.filenames[idx]
	var test_indices = this.testq.indices[idx] 
	var test_correctIndex = this.testq.correctIndex[idx]

	var sample_image = await this.IB.get_by_name(sample_filename); 
	var test_images = []
	for (var i = 0; i < test_filenames.length; i++){
		test_images.push(await this.IB.get_by_name(test_filenames[i]))
	}

	return [sample_image, sample_index, test_images, test_indices, test_correctIndex]
}
}

function selectSampleImage(samplebag_labels, SamplingStrategy, _RNGseed){
	
	Math.seedrandom(_RNGseed)

	// Vanilla random uniform sampling with replacement: 
	var sample_image_index = NaN
	if(SamplingStrategy == 'uniform_with_replacement'){
		sample_image_index = Math.floor((samplebag_labels.length)*Math.random());
	}
	else {
		throw SamplingStrategy + " not implemented in selectSampleImage."
	}

	return sample_image_index
}

function selectTestImages(correct_label, testbag_labels, _RNGseed){
	
	// Input arguments: 
	// 	correct_label: int. It is one element of testbag_labels corresponding to the rewarded group. 
	//	testbag_labels: array of ints, of length equal to the number of images ( == testbag.length). 


	// Outputs: 
	//	[0]: testIndices: array of ints, of length TASK.TestGridIndex.length. The elements are indexes of testbag_labels. The order corresponds to TestGridIndex. 
	//	[1]: correctSelection: int. It indexes testIndices / TestGridIndex to convey the correct element. 

	Math.seedrandom(_RNGseed)

	var testIndices = []; 
	var correctSelection = NaN;

	// If SR is on, 
	if (TASK.ObjectGridMapping.length == TASK.ImageBagsTest.length){ // Is this a robust SR check?
		// For each object, 
		for (var i = 0; i<TASK.ObjectGridMapping.length; i++){
			
			// Get pool of the object's test images: 
			var object_test_indices = getAllInstancesIndexes(testbag_labels, i)

			// Get one (1) random sample of the object's test images: 
			var test_image_index = object_test_indices[Math.floor((object_test_indices.length)*Math.random())]; 

			// Get grid index where the object should be placed: 
			var object_grid_index = TASK.ObjectGridMapping[i] 

			// Determine which location that grid index corresponds to in testIndices: 
			order_idx = TASK.TestGridIndex.indexOf(object_grid_index)

			// Place the selected test image in the appropriate location in testIndices. 
			testIndices[order_idx] = test_image_index

			// If this is the correct object, set the current testIndices location as being the correctSelection. 
			if(i == correct_label){
				correctSelection = order_idx; 
			}
		}
		return [testIndices, correctSelection] 
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