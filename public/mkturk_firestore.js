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

var DOCSIZE = []

//================== CREATE FIRESTORE DOCS ====================//
async function saveBehaviorDatatoFirestore(TASK,ENV,CANVAS){
	// Get a new write batch
	var batch = db.batch();
	
	var metaRef = db.collection("data").doc(ENV.FirestoreDocRoot + '_meta')
	var trialseriesRef = db.collection("data").doc(ENV.FirestoreDocRoot + '_trialseries')

	
	// meta doc
	batch.set(metaRef,{Doctype: "meta", 
						Agent: ENV.Subject,
						CurrentDateValue: ENV.CurrentDate.valueOf(),
						Metadoc: ENV.FirestoreDocRoot + '_meta',
						Trialseriesdoc: ENV.FirestoreDocRoot + '_trialseries'}) //link docs
	batch.update(metaRef,ENV) // write all ENV metadata once
// 	batch.update(metaRef,TASK) // write all TASK metadata once
// 	batch.update(metaRef,CANVAS) // write all CANVAS metadata once

	//trial doc
	batch.set(trialseriesRef,{Doctype: "trialseries",
								Agent: ENV.Subject,
								ResearcherID: ENV.ResearcherID,
								CurrentDate: ENV.CurrentDate,
								CurrentDateValue: ENV.CurrentDate.valueOf(),
								Metadoc: ENV.FirestoreDocRoot + '_meta',
								Trialseriesdoc: ENV.FirestoreDocRoot + '_trialseries'}) //link docs

	// Commit the batch
	batch.commit().then(function () {
	    console.log("Firestore meta/trialseries docs batch created");
	    FLAGS.createnewfirestore = 0;
	})
	.catch(function(error) {
		console.error("!Error creating firestore meta/trialseries docs: ", error);
	});
}
//================== CREATE FIRESTORE DOCS (end) ====================//


//================== UPDATE FIRESTORE WITH EVENT DATA ====================//
async function updateEventDataonFirestore(EVENTS){
	// Get a new write batch
	var batch = db.batch();

	var trialseriesRef = db.collection("data").doc(ENV.FirestoreDocRoot + '_trialseries')
	batch.update(trialseriesRef,EVENTS.trialseries)

	// Commit the batch
	batch.commit().then(function () {
	    console.log("Firestore trialseries docs batch updated");
	    getFirestoreDocSize("data")
	})
	.catch(function(error) {
		console.error("!Error updating firestore trialseries doc: ", error);
	});
}
//================== UPDATE FIRESTORE WITH EVENT DATA (end) ====================//




function getFirestoreDocSize(collectionName){
    var docName = "2018-11-17T15:33:36_Eliaso_trialseries"
    var docName = ENV.FirestoreDocRoot + "_trialseries"
    var docRef = db.collection(collectionName).doc(docName)

    docRef.get().then(function(doc){
        if (doc.exists){
            console.log("Document found " + doc.id)
            docSize = calcFirestoreDocSize(collectionName,doc.id,doc.data())
            console.log("Document size : " + docSize)
            DOCSIZE[CURRTRIAL.num-1] = docSize
        }
    })
} //get the firestore doc



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