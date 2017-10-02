function reloadPage(){
  wdm("RELOADING PAGE...")
  location.reload(true)
}

function wdm(s){
  // Write debug message
  console.log(s)
  if(FLAGS.debug_mode == 1){
    var elem = document.getElementById('DebugMessageTextBox')
    elem.innerHTML = s; // text
  }
}


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



// Return all indices of val in arr
function getAllInstancesIndexes(arr, val){
  var indexes = []
    for(var i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

// Shuffles an array
function shuffle(array, RNGseed) {
  Math.seedrandom(RNGseed)

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

function cantor(k1, k2){
  // Cantor hash function maps two nonnegative integers into another nonnegative integer 
  // https://stackoverflow.com/questions/919612/mapping-two-integers-to-one-in-a-unique-and-deterministic-way
  
  if (k1 < 0){
    k1 = -1 * k1 * 2 - 1
  }
  else{
    k1 = 2 * k1
  }
  if (k2 < 0){
    k2 = -1 * k2 * 2 - 1
  }
  else{
    k2 = 2 * k2
  }

  hash = (k1 + k2) * (k1 + k2 + 1) /  2 + k2

  return hash
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


function md5Hash(blob){
  var hash = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(blob));
  return hash
}
// Promise: choice time-out
function timeOut(timeout_length){
  return new Promise(
    function(resolve, reject){
      var timer_return = function(){resolve({
        "x":'timed_out', 
        "y":'timed_out', 
        'timestamp':performance.now(), 
        'reinforcement':0, 
        'region_index':'timed_out'})}

      setTimeout(timer_return,timeout_length)
    })
}


String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) return hash;
    for (i = 0; i < this.length; i++) {
        char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}


//================== UTILITIES ==================//




function join(parts, sep){
   var separator = sep || '/';
   var replace   = new RegExp(separator+'{1,}', 'g');
   return parts.join(separator).replace(replace, separator);
}

function add(a, b) {
    // For use in .reduce
    // See 
    // https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
    
    // var sum = [1, 2, 3].reduce(add, 0);
    // console.log(sum); // 6

    return a + b;
}

function splitFilename(s){
  // https://stackoverflow.com/questions/423376/how-to-get-the-file-name-from-a-full-path-using-javascript
  // Takes full path and returns filename only
  var filename = s.replace(/^.*[\\\/]/, '')
  return filename
}
