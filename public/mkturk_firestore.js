var DOCSIZE = {task: [], images: []}

//================== CREATE FIRESTORE DOCS ====================//
async function saveBehaviorDatatoFirestore(TASK,ENV,CANVAS){
	// Get a new write batch
	var batch = db.batch();
	
	var taskRef = db.collection(FIRESTORECOLLECTION.DATA).doc(ENV.FirestoreDocRoot + '_task')
	var imagesRef = db.collection(FIRESTORECOLLECTION.DATA).doc(ENV.FirestoreDocRoot + '_images')
	

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
	    console.log("FIRESTORE: task & image docs batch created");
	    FLAGS.createnewfirestore = 0;
	})
	.catch(function(error) {
		console.error("FIRESTORE: !Error creating database task or image doc: ", error);
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

	var taskRef = db.collection(FIRESTORECOLLECTION.DATA).doc(ENV.FirestoreDocRoot + '_task')
	batch.update(taskRef,EVENTS.trialseries)
	
	var imagesRef = db.collection(FIRESTORECOLLECTION.DATA).doc(ENV.FirestoreDocRoot + '_images')
	batch.update(imagesRef,EVENTS.imageseries)
	
	// Commit the batch
	var currtrial = CURRTRIAL.num
	await batch.commit().then(function () {
		FLAGS.firestorelastsavedtrial = currtrial
	    console.log("FIRESTORE: Trial " + FLAGS.firestorelastsavedtrial + "--Batch updated database task & image docs");

	    delete firestoreTimer //to start a new timer
		pingFirestore()
	})
	.catch(function(error) {
		console.error("FIRESTORE: !Trial" + FLAGS.firestorelastsavedtrial + "--Error updating database task or image doc: ", error);

		delete firestoreTimer //to start a new timer
		pingFirestore()
	});
}
//================== UPDATE FIRESTORE WITH EVENT DATA (end) ====================//


async function loadAgentRFIDfromFirestore(subject,species){
	if (species != "marmoset"){
		ENV.AgentRFID = "XX"	
	}
	else {
		try{
			var docRef = db.collection("marmosets").doc(subject)
			var doc = await db.collection("marmosets").doc(subject).get()

			if (doc.exists == false){
				ENV.AgentRFID = "XX"	
				console.log('MISSING AGENT: no biographical document in firestore database for this agent')				
			}
			else {
				ENV.AgentRFID = doc.data().rfid
			}
		}
		catch(error){
			ENV.AgentRFID = "XX"	
			console.log('no subject document in firestore database for this agent')
		}
	}
}

async function queryDeviceonFirestore(deviceName){
	var query = await db.collection(FIRESTORECOLLECTION.DEVICES).where("model","==",deviceName.toLowerCase())
	var querySnapshot = await query.get()
	return new Promise(
		function(resolve, reject){
			try {
				if (querySnapshot.size==0){
					resolve({screenSizeInches: [-1], screenPhysicalPixels: [-1], screenRatio: -1, ppi: -1})
				}
				querySnapshot.forEach(function(doc){
					if (typeof(doc.data().screenRatio) == "undefined"){
						//do nothing
						resolve({screenSizeInches: [-1], screenPhysicalPixels: [-1], screenRatio: -1, ppi: -1})
					} //END if no matching device
					else {
						resolve({screenSizeInches: doc.data().screenSizeInches, screenPhysicalPixels: doc.data().screenPhysicalPixels, screenRatio: doc.data().screenRatio, ppi: doc.data().ppi})
					} //END else matching device
				})		
			} //try
			catch (error){
				console.log(error)
			} //catch
		}
	) //Promise
} //FUNCTION queryDeviceonFirestore


function getFirestoreDocSize(collectionName,docRef,doctype){
    docRef.get().then(function(doc){
        if (doc.exists){
            console.log("FIRESTORE: Document found " + doc.id)
            docSize = calcFirestoreDocSize(collectionName,doc.id,doc.data())
            console.log("FIRESTORE: Document size : " + docSize)
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
	    console.log("FIRESTORE: wrote to firestore");
	})
	.catch(function(error) {
		console.error("FIRESTORE: !Error creating database meta/trialseries docs: ", error);
	});
}