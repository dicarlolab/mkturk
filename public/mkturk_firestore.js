var DOCSIZE = {task: [], images: []}

//================== CREATE FIRESTORE DOCS ====================//
async function saveBehaviorDatatoFirestore(TASK,ENV,CANVAS){
	// Get a new write batch
	var batch = db.batch();
	
	var taskRef = db.collection(FIREBASE_COLLECTION).doc(ENV.FirestoreDocRoot + '_task')
	var imagesRef = db.collection(FIREBASE_COLLECTION).doc(ENV.FirestoreDocRoot + '_images')
	

	//task meta & trial data
	batch.set(taskRef,{Doctype: "task",
								Agent: ENV.Subject,
								CurrentDateValue: ENV.CurrentDate.valueOf(),
								Taskdoc: ENV.FirestoreDocRoot + '_task',
								Imagesdoc: ENV.FirestoreDocRoot + '_images'}) //link docs

	batch.update(taskRef,ENV) // write all ENV metadata once
	batch.update(taskRef,TASK) // write all TASK metadata once
	batch.update(taskRef,CANVAS) // write all CANVAS metadata once

	//image meta & trial data for each image
	batch.set(imagesRef,{Doctype: "images",
								Agent: ENV.Subject,
								ResearcherID: ENV.ResearcherID,
								CurrentDate: ENV.CurrentDate,
								CurrentDateValue: ENV.CurrentDate.valueOf(),
								Taskdoc: ENV.FirestoreDocRoot + '_task',
								Imagesdoc: ENV.FirestoreDocRoot + '_images'}) //link docs
	batch.update(imagesRef,IMAGES.Sample) //per image meta for sample bags
	batch.update(imagesRef,IMAGES.Test) //per image meta for test bags

	// Commit the batch
	batch.commit().then(function () {
	    console.log("Firestore task & image docs batch created");
	    FLAGS.createnewfirestore = 0;
	})
	.catch(function(error) {
		console.error("!Error creating firestore task or image doc: ", error);
	});
}
//================== CREATE FIRESTORE DOCS (end) ====================//


function pingFirestore(){
	if (FLAGS.firestorelastsavedtrial != CURRTRIAL.num && 
		typeof(firestoreTimer) != "undefined"){
		updateEventDataonFirestore(EVENTS)
	} //if timer expired & new data added
	else {
		firestoreTimer = setTimeout(function(){
			clearTimeout(firestoreTimer)
			pingFirestore()
		},10000)
	} //else check again in 10 seconds
}

//================== UPDATE FIRESTORE WITH EVENT DATA ====================//
async function updateEventDataonFirestore(EVENTS){
	// Get a new write batch
	var batch = db.batch();

	var taskRef = db.collection(FIREBASE_COLLECTION).doc(ENV.FirestoreDocRoot + '_task')
	batch.update(taskRef,EVENTS.trialseries)
	
	var imagesRef = db.collection(FIREBASE_COLLECTION).doc(ENV.FirestoreDocRoot + '_images')
	batch.update(imagesRef,EVENTS.imageseries)
	
	// Commit the batch
	var currtrial = CURRTRIAL.num
	await batch.commit().then(function () {
		FLAGS.firestorelastsavedtrial = currtrial
	    console.log("Trial " + FLAGS.firestorelastsavedtrial + "--Batch updated Firestore task & image docs");

	    delete firestoreTimer //to start a new timer
		pingFirestore()
	})
	.catch(function(error) {
		console.error("!Trial" + FLAGS.firestorelastsavedtrial + "--Error updating firestore task or image doc: ", error);

		delete firestoreTimer //to start a new timer
		pingFirestore()
	});
}
//================== UPDATE FIRESTORE WITH EVENT DATA (end) ====================//



function getFirestoreDocSize(collectionName,docRef,doctype){
    docRef.get().then(function(doc){
        if (doc.exists){
            console.log("Document found " + doc.id)
            docSize = calcFirestoreDocSize(collectionName,doc.id,doc.data())
            console.log("Document size : " + docSize)
            DOCSIZE[doctype][CURRTRIAL.num-1] = docSize
            if (docSize > 200000){
            	console.log("Firestore " + doc.id + " is LARGE!  " + docSize + " bytes")
            }
        }
    })
} //get the firestore doc


//from: https://stackoverflow.com/questions/49473148/calculating-size-of-google-firestore-documents
function calcFirestoreDocSize(collectionName, docId, docObject) {
    let docNameSize = encodedLength(collectionName) + 1 + 16
    let docIdType = typeof(docId)
    if(docIdType === 'string') {
        docNameSize += encodedLength(docId) + 1
    } else {
        docNameSize += 8
    }  
    let docSize = docNameSize + calcObjSize(docObject)

    return  docSize
}
function encodedLength(str) {
    var len = str.length;
    for (let i = str.length - 1; i >= 0; i--) {
        var code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) {
            len++;
        } else if (code > 0x7ff && code <= 0xffff) {
            len += 2;
        } if (code >= 0xDC00 && code <= 0xDFFF) {
            i--;
        }
    }
    return len;
}

function calcObjSize(obj) {
    let key;
    let size = 0;
    let type = typeof obj;

    if(!obj) {
        return 1
    } else if(type === 'number') {
        return 8
    } else if(type === 'string') {
        return encodedLength(obj) + 1
    } else if(type === 'boolean') {
        return 1
    } else if (obj instanceof Date) {
        return 8
    } else if(obj instanceof Array) {
        for(let i = 0; i < obj.length; i++) {
            size += calcObjSize(obj[i])
        }
        return size
    } else if(type === 'object') {

        for(key of Object.keys(obj)) {
            size += encodedLength(key) + 1 
            size += calcObjSize(obj[key])
        }
        return size += 32
    }
}

function savetofirestore(docref,data){
	docref.set(data).then(function () {
	    console.log("wrote to firestore");
	})
	.catch(function(error) {
		console.error("!Error creating firestore meta/trialseries docs: ", error);
	});
}