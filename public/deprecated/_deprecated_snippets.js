function displayPhysicalSize(tabletname,displayobject_coord,canvasobj){
  if (tabletname == "nexus9"){
    var dpi = 281
  }
  else if (tabletname == "samsung10"){
    var dpi = 287
  }
  else if (tabletname == "samsung8"){
    var dpi = 359
  }
  else if (tabletname == "pixelc"){
    var dpi = 308
  }
  else {
    var dpi = -1
  }
  var visible_ctxt = canvasobj.getContext('2d');
  visible_ctxt.textBaseline = "hanging";
  visible_ctxt.fillStyle = "white";
  visible_ctxt.font = "16px Verdana";
  visible_ctxt.fillText( 
    Math.round(100*(displayobject_coord[2]-displayobject_coord[0])/dpi/DEVICE.CanvasRatio)/100 +
    ' x ' +
    Math.round(100*(displayobject_coord[3]-displayobject_coord[1])/dpi/DEVICE.CanvasRatio)/100 + 
    ' in', 
    displayobject_coord[0],displayobject_coord[1]-16
  );
}

// Promise: punish time-out
function dispensePunish(){
  return new Promise(function(resolve,reject){
    setTimeout(function(){resolve(1);},TASK.PunishTimeOut); //milliseconds
  }).then();
}

/* Randomize array element order in-place.  Using Fisher-Yates shuffle algorithm. http://bost.ocks.org/mike/shuffle/ */
// To test your shuffling algorithm: go to http://bost.ocks.org/mike/shuffle/compare.html
function shuffleArray(array){
  // Expand to index vector if needed
  if (array.length==1){
    var len=array[0];
    for (var i = 0; i<=len-1; i++){array[i]=i;}
  }
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

/* Randomize array element order in-place.  Using Fisher-Yates shuffle algorithm. http://bost.ocks.org/mike/shuffle/ */
// To test your shuffling algorithm: go to http://bost.ocks.org/mike/shuffle/compare.html
function shuffleArray(array){
  // Expand to index vector if needed
  if (array.length==1){
    var len=array[0];
    for (var i = 0; i<=len-1; i++){array[i]=i;}
  }
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

// Gets "filename.ext" from some /.../path/filename.ext
function get_filename_from_pathstring(pathstring){
  var filename = pathstring.replace(/^.*[\\\/]/, '')
  return filename
}



// convert base64 to buffer array (from: http://stackoverflow.com.80bola.com/questions/27524283/save-image-to-dropbox-with-data-from-canvas?rq=1)
function _base64ToArrayBuffer(base64){
  base64 = base64.split('data:image/png;base64,').join('');
  var binary_string =  window.atob(base64),
  len = binary_string.length,
  bytes = new Uint8Array( len ),
  i;
  for (i = 0; i < len; i++){
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}



// convert base64 to buffer array (from: http://stackoverflow.com.80bola.com/questions/27524283/save-image-to-dropbox-with-data-from-canvas?rq=1)
function _base64ToArrayBuffer(base64){
  base64 = base64.split('data:image/png;base64,').join('');
  var binary_string =  window.atob(base64),
  len = binary_string.length,
  bytes = new Uint8Array( len ),
  i;
  for (i = 0; i < len; i++){
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}