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
