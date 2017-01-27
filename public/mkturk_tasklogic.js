function selectSampleImage(samplebag_labels, SamplingStrategy){

	// Vanilla random uniform sampling with replacement: 
	var sample_image_index = NaN
	if(SamplingStrategy == 'uniform_with_replacement'){
		sample_image_index = Math.floor((samplebag.length)*Math.random());
	}
	else if(SamplingStrategy == 'uniform_without_ImageReplacementAfterMaxReps'){
		throw "Not implemented."
	}

	// Sample blocking behavior: 
	if (FLAGS.sampleblockcount >0 && FLAGS.sampleblockcount < TASK.sampleBlockSize && TASK.sampleBlockSize > 1){
		sample_image_index = TRIAL.sample[FLAGS.current_trial - 1];
		FLAGS.sampleblockcount++;
	} 
	else if(FLAGS.sampleblockcount >= TASK.sampleBlockSize && TASK.sampleBlockSize > 1){
		FLAGS.sampleblockcount = 0 ; 
	}

	return sample_image_index
	
	
}

function selectTestImages(correct_label, testbag_labels){
	
	// Input arguments: 
	// 	correct_label: int. It is one element of testbag_labels corresponding to the rewarded group. 
	//	testbag_labels: array of ints, of length equal to the number of images ( == testbag.length). 

	// Globals: TASK.objectGrid; TASK.testGrid; TASK.nstickyresponse; 

	// Outputs: 
	//	[0]: testIndices: array of ints, of length TASK.testGrid.length. The elements are indexes of testbag_labels. The order corresponds to testGrid. 
	//	[1]: correctSelection: int. It indexes testIndices / testGrid to convey the correct element. 


	var testIndices = []; 
	var correctSelection = NaN;

	// If SR is on, 
	if (TASK.objectGrid.length == TASK.imageBagsTest.length){ // Is this a robust SR check?
		// For each object, 
		for (var i = 0; i<TASK.objectGrid.length; i++){
			
			// Get pool of the object's test images: 
			var object_test_indices = getAllInstancesIndexes(testbag_labels, i)

			// Get one (1) random sample of the object's test images: 
			var test_image_index = object_test_indices[Math.floor((object_test_indices.length)*Math.random())]; 

			// Get grid index where the object should be placed: 
			var object_grid_index = TASK.objectGrid[i] 

			// Determine which location that grid index corresponds to in testIndices: 
			order_idx = TASK.testGrid.indexOf(object_grid_index)

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
		if(labelspace.indexOf(testbag_labels[i]) == -1){
			labelspace.push(testbag_labels[i])
		}
	}

	// Randomly select n-1 labels to serve as distractors 

	var distractors = []
	while(distractors.length < TASK.testGrid.length-1){
		distractor_sample = labelspace[Math.floor((labelspace.length)*Math.random())]; 
		if(distractors.indexOf(distractor_sample) == -1){
			labelspace.push(distractor_sample)
		} 
	}	

	// Add distractors and correct label to testpool, and then shuffle. 
	var testpool = []
	testpool.push(distractors)
	testpool.push(correct_label)
	testpool = shuffle(testpool)

	// If the past nstickyresponse trials has been on one side, then make this upcoming trial's correct answer be at another location. 
	if (FLAGS.stickyresponse >= TASK.nstickyresponse && TASK.nstickyresponse > 0){
		console.log('Moving correct response to nonstick location')
		var sticky_grid_location = TRIAL.response[FLAGS.current_trial-1]; 
		if (sticky_grid_location == undefined){
			console.log('Something strange has happened in the stickyresponse logic')
		}

		var candidate_nonstick_locations = []
		for (var i = 0; i < testpool.length; i++){
			if(i == sticky_grid_location)
				{continue}
			else if (i != sticky_grid_location){
				candidate_nonstick_locations.push(i)
			}
			else{throw 'Error occurred in sticky response logic'}
		}
		
		// Switch correct_label into correct_label_nonstick_location
		var correct_label_nonstick_location =candidate_nonstick_locations[Math.floor((candidate_nonstick_locations.length)*Math.random())]; 
		var switched_out_label = testpool[correct_label_nonstick_location]; 
		testpool[correct_label_nonstick_location] = correct_label; 
		testpool[sticky_grid_location] = switched_out_label
	}	
	

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