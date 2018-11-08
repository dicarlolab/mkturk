//================== WRITE JSON ==================//
// async function saveBehaviorDatatoFirestore(TASK, ENV, CANVAS, TRIAL){
//   // Save some data collection.doc(name).set(data)
//   await db.collection("data").doc("mytempfilefortoday").set(TASK)
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   });
// }


//================== CREATE FIRESTORE DOCS ====================//
async function saveBehaviorDatatoFirestore(TASK,ENV,CANVAS){
	// Get a new write batch
	var batch = db.batch();
	
	var metaRef = db.collection("data").doc(ENV.FirestoreDocRoot + '_meta')
	var trialseriesRef = db.collection("data").doc(ENV.FirestoreDocRoot + '_trialseries')
	var timeseriesRef = db.collection("data").doc(ENV.FirestoreDocRoot + '_timeseries')

	
	batch.set(metaRef,{filetype: "meta", 
						trialseriesdoc: ENV.FirestoreDocRoot + '_trialseries',
						timeseriesdoc: ENV.FirestoreDocRoot + '_timeseries'}) //link docs
	batch.update(metaRef,ENV) // write all ENV metadata once
	batch.update(metaRef,TASK) // write all TASK metadata once
	batch.update(metaRef,CANVAS) // write all CANVAS metadata once
	batch.set(trialseriesRef,{filetype: "trialseries", metafile: ENV.FirestoreDocRoot + '_meta'}) //initialize with pointer to meta doc
	batch.set(timeseriesRef,{filetype: "timeseries", metafile: ENV.FirestoreDocRoot + '_meta'}) //initialize with pointer to meta doc


	// Commit the batch
	batch.commit().then(function () {
	    console.log("Firestore meta/trialseries/timeseries docs batch created");
	    FLAGS.createnewfirestore = 0;
	})
	.catch(function(error) {
		console.error("!Error creating firestore meta/trialseries/timeseries docs: ", error);
	});
}
//================== CREATE FIRESTORE DOCS (end) ====================//


//================== UPDATE FIRESTORE WITH EVENT DATA ====================//
async function updateEventDataonFirestore(EVENTS){
	// Get a new write batch
	var batch = db.batch();

	var trialseriesRef = db.collection("data").doc(ENV.FirestoreDocRoot + '_trialseries')
	batch.update(trialseriesRef,EVENTS.trialseries)

	// var timeseriesRef = db.collection("data").doc(ENV.FirestoreDocRoot + '_timeseries')
	// batch.update(timeseriesRef,EVENTS.timeseries)

	// Commit the batch
	batch.commit().then(function () {
	    console.log("Firestore trialseries & timeseries docs batch updated");
	})
	.catch(function(error) {
		console.error("!Error updating firestore trialseries or timeseries doc: ", error);
	});
}
//================== UPDATE FIRESTORE WITH EVENT DATA (end) ====================//

