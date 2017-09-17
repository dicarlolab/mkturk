
// TQs are in charge of image ordering, image delivery, grid index delivery, and reward map delivery given || image (paths), their labels, and experiment details 


// trial_constructor_parameters: 
// load imagebagssample paths
// load imagebagstest paths 
// samplingRNGseed
// samplegridindex
// objectgridmapping

class TrialQueue { 

constructor(SampleBagNames, TestBagNames, ImageBags, IB, stage_start_number, samplingRNGseed){
	// Sampling properties
	this.nickname = ''
	this.samplingStrategy = "uniform_with_replacement";


	this.samplingRNGseed = samplingRNGseed	 
	this.trialStartNumber = stage_start_number; 


	// imagebag info 
	this.ImageBags = ImageBags 
	this.SampleBagNames = SampleBagNames
	this.TestBagNames = TestBagNames 

	// Queues
	this.sampleq = []
	this.testq = []
	this.correct_test_index_q = []
	

	this.trialNumber_q = []

	// ImageBuffer
	this.IB = IB 

	// Settings 
	this.max_queue_size = 500; // Max number of trials (and their images) to have prepared from now; to improve browser performance
	console.log('TrialQueue', this)
}

async build(trial_cushion_size){
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
			// Already generated 
			return 			
		}

		var trialnumber = i 
		var _RNGseed = cantor(this.samplingRNGseed, trialnumber)
		
		var sample = this.selectSampleImage(_RNGseed)
		var test = this.selectTestImages(_RNGseed) 
		var correct_test_selection = this.SampleBagNames.indexOf(sample['bag_name'])

		this.sampleq.push(sample)
		this.testq.push(test)
		this.correct_test_index_q.push(correct_test_selection)
		this.trialNumber_q.push(trialnumber)

		var image_requests = []; 
		image_requests.push(sample['image_name'])
		image_requests.push(... test['image_name'])
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

	// Get trial params from queue
	var sample = this.sampleq[idx]
	var test = this.testq[idx]
	var correct_test_selection = this.correct_test_index_q[idx]


	// Load images from ImageBuffer
	var trial = {}
	trial['sample_image'] = await this.IB.get_by_name(sample['image_name'])
	
	var image_req = []
	for (var i = 0; i < test['image_name'].length; i++){
		image_req.push(this.IB.get_by_name(test['image_name'][i]))
	}
	trial['test_images'] = await Promise.all(image_req)

	// Package meta info
	trial['test_bag_names'] = test['bag_name']
	trial['test_bag_indices'] = test['bag_index']
	trial['test_image_indices'] = test['image_index']
	
	trial['sample_bag_name'] = sample['bag_name']
	trial['sample_bag_index'] = sample['bag_index']
	trial['sample_image_index'] = sample['image_index']

	trial['correct_test_selection'] = correct_test_selection

	// Return
	return trial
}

selectSampleImage(_RNGseed){
	
	Math.seedrandom(_RNGseed)

	// Select sample class 
	var num_classes = this.SampleBagNames.length
	var selected_bag_index = Math.floor(Math.random()*num_classes)
	var selected_bag_name = this.SampleBagNames[selected_bag_index]

	// Select image inside of that class
	var num_bag_images = this.ImageBags[selected_bag_name].length
	var selected_image_index = Math.floor(Math.random() * num_bag_images)
	var selected_image_name = this.ImageBags[selected_bag_name][selected_image_index]

	var sample = {'bag_name':selected_bag_name, 
					'bag_index':selected_bag_index,
					'image_index':selected_image_index, 
					'image_name': selected_image_name}

	return sample
}

selectTestImages(_RNGseed){
	
	Math.seedrandom(_RNGseed)


	// Select distractor (SR)
	var num_classes = this.TestBagNames.length

	var test = {}
	test['bag_name'] = []
	test['bag_index'] = []
	test['image_index'] = []
	test['image_name'] = []

	for (var i_choice_class = 0; i_choice_class<num_classes; i_choice_class++){
		// Get name of class
		var bag_name = this.TestBagNames[i_choice_class]

		// Select image inside of that class 
		var test_image_index = Math.floor(Math.random()*this.ImageBags[bag_name].length)
		var test_image_name = this.ImageBags[bag_name][test_image_index]

		test['bag_name'].push(bag_name)
		test['bag_index'].push(i_choice_class)
		test['image_index'].push(test_image_index)
		test['image_name'].push(test_image_name)
	}
	return test 


	// TODO: for match-to-sample (where effectors are shuffled)

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