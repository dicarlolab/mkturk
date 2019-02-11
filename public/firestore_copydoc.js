
var docroot = "2019-02-07T15:33:12_Sausage"
var fromcollection = 'data'
var tocollection = 'mkturkdata'
var taskRef = db.collection(fromcollection).doc(docroot + '_task')
var imagesRef = db.collection(fromcollection).doc(docroot + '_images')
var taskRef2 = db.collection(tocollection).doc(docroot + '_task')
var imagesRef2 = db.collection(tocollection).doc(docroot + '_images')
	

taskRef.get().then(
    function(doc)
    {
    	taskRef2.set(doc.data()).then(function(){console.log('wrote task')})
    }
}

imagesRef.get().then(
    function(doc)
    {
    	imagesRef2.set(doc.data()).then(function(){console.log('wrote images')})
    }
}