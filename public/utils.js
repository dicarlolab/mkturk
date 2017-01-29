(function(window){
  window.utils = {
    parseQueryString: function(str) {
      var ret = Object.create(null);

      if (typeof str !== 'string') {
        return ret;
      }

      str = str.trim().replace(/^(\?|#|&)/, '');

      if (!str) {
        return ret;
      }

      str.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        // Firefox (pre 40) decodes `%3D` to `=`
        // https://github.com/sindresorhus/query-string/pull/37
        var key = parts.shift();
        var val = parts.length > 0 ? parts.join('=') : undefined;

        key = decodeURIComponent(key);

        // missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        val = val === undefined ? null : decodeURIComponent(val);

        if (ret[key] === undefined) {
          ret[key] = val;
        } else if (Array.isArray(ret[key])) {
          ret[key].push(val);
        } else {
          ret[key] = [ret[key], val];
        }
      });

      return ret;
    }
  };
})(window);

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

// ----- Array equality ---- 
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});


// Gets "filename.ext" from some /.../path/filename.ext
function get_filename_from_pathstring(pathstring){
  var filename = pathstring.replace(/^.*[\\\/]/, '')
  return filename
}

// Return all indices of val in arr
function getAllInstancesIndexes(arr, val){
  var indexes = []
    for(var i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

// Shuffles an array...in place?
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
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


function toBytesInt16(num){
  arr = new ArrayBuffer(2) //2 bytes
  view = new DataView(arr)
  view.setUint16(0,num); //arg1: byteOffset arg3: false || undefined -> bigEndian
  arr = new Uint8Array([view.getUint8(1), view.getUint8(0)])
  return arr
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
