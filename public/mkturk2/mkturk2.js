/* Load Script {usb, bluetooth} Asynchronously */
let loadScriptAsync = function(scriptName) {
  return new Promise((res, rej) => {
    let tag = document.createElement('script');
    tag.src = scriptName;
    tag.async = true;
    tag.onload = () => {
      res();
    };
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });
}

let usbScriptLoaded, bleScriptLoaded, bleScaleScriptLoaded;
if (typeof (navigator.usb) == 'object') {
  usbScriptLoaded = loadScriptAsync('mkturk2_usb.js');
}

if (typeof (navigator.bluetooth) == 'object') {
  bleScriptLoaded = loadScriptAsync('mkturk2_bluetooth.js');
  bleScaleScriptLoaded = loadScriptAsync('mkturk2_bluetoothscale.js');
} 

const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

/* CLOUD FUNCTIONS */
let bqInsertEyeData = functions.httpsCallable('bqInsertEyeData');
let detectDevice = functions.httpsCallable('detectDevice');

/* Detect device used to render Mkturk */
async function deviceDetect() {
  let navigator = window.navigator;

  // GPU INFO
  let cv = document.createElement('canvas');
  let gl, debugInfo, vendor, renderer;
  try {
    gl = cv.getContext('webgl') || cv.getContext('experimental-webgl');
  } catch (e) {
    console.error('WebGL Context Error:', e);
    return;
  }

  if (gl) {
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    vender = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  }

  // TOUCH INFO
  let touchscreen = 0;
  if (('ontouchstart') in window || window.TouchEvent || window.DocumentTouch
    && doucment instanceof DocumentTouch) {
      touchscreen = 1;
  }

  // DEVICE INFO
  let deviceInfo = await detectDevice(navigator.userAgent);

  if (deviceInfo.data.device == null) {
    deviceInfo.data.device = {
      type: '',
      brand: '',
      model: ''
    };
  }

  if (deviceInfo.data.client == null) {
    deviceInfo.data.client = {
      name: '',
      version: ''
    };
  }

  if (deviceInfo.data.os == null) {
    deviceInfo.data.os = {
      name: '',
      version: ''
    };
  }

  deviceInfo.data.gpu = {};
  deviceInfo.data.gpu.vendor = vendor;
  deviceInfo.data.gpu.renderer = renderer;
  deviceInfo.data.touchscreen = touchscreen;
  console.log(deviceInfo);
  return deviceInfo;
}

// Google Authentication
let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().getRedirectResult().then(result => {
  if (result.user) {
    ENV.ResearcherDisplayName = result.user.displayName;
    ENV.ResearcherEmail = result.user.email;
    ENV.ResearcherID = result.user.uid;

    console.log('Sign-In Redirect Result, USER ' + result.user.email
      + ' is signed in');
    
    updateHeadsUpDisplay();
  }

  else if (firebase.auth().currentUser) {
    ENV.ResearcherDisplayName = firebase.auth().currentUser.displayName;
    ENV.ResearcherEmail = firebase.auth().currentUser.email;
    ENV.ResearcherID = firebase.auth().currentUser.uid;

    console.log('Sign-In Redirect Result');
    console.log('User ' + ENV.ResearcherEmail + ' is signed in');
    updateHeadsUpDisplay();
  }

  else {
    // No user signed in
    firebase.auth().signInWithRedirect(provider);
  }
});


// Get PARAMFILE NAME
let subjectListObj = document.querySelector('#subject-id-select');
for (let i = 0; i < subjectList.length; i++) {
  let opt = document.createElement('option');
  opt.value = i;
  opt.innerHTML = subjectList[i];
  subjectListObj.appendChild(opt);
}
subjectListObj.addEventListener('change', subjectSelected, false);

// Check Availability of APIs
if (typeof(navigator.usb) == 'object') { ENV.WebUSBAvailable = 1; }
if (typeof(navigator.bluetooth) == 'object') { ENV.WebBluetoothAvailable = 1; }
if (typeof(navigator.getBattery) == 'function') { ENV.BatteryAPIAvailable = 1; }
if (typeof(OffscreenCanvas) == 'function') { ENV.OffscreenCanvasAvailable = 1; }

// Button callbacks for inline connection to arduino device
let googleSigninBtn = document.querySelector('button[id=google-sign]');
googleSigninBtn.style.display = 'block';
googleSigninBtn.style.visibility = 'visible';
googleSigninBtn.addEventListener('pointerup', firebaseRedirectSignIn, false);

let reloadPageBtn = document.querySelector('button[id=reload-page]');
reloadPageBtn.addEventListener('pointerup', (ev) => {
  window.location.reload(true);
}, false);

//---- googleSigninBtn, reloadPageBtn for Safari (BEGIN)
googleSigninBtn.addEventListener('click', firebaseRedirectSignIn, false);
reloadPageBtn.addEventListener('click', (ev) => {
  window.location.reload(true);
}, false);
//---- googleSigninBtn, reloadPageBtn for Safari (END)


let headsUpText = document.querySelector('#heads-up-text');
headsUpText.addEventListener('pointerup', headsUpTextChanged, false);
headsUpText.addEventListener('click', headsUpTextChanged, false); // for Safari


//============= Init Audio & Battery Objects ===============//

// prevent window scrolling and bounce back effect
document.body.addEventListener('touchmove', (ev) => {
  ev.preventDefault();
}, { capture: false, passive: false });

// audio pulses for reward
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let gainNode = audioContext.createGain();
gainNode.connect(audioContext.destination);

// check availability of OffscreenCanvas API
ENV.DevicePixelRatio = window.devicePixelRatio || 1;
let visibleCtx;
if (ENV.OffscreenCanvasAvailable) {
  visibleCtx = VISIBLECANVAS.getContext('bitmaprenderer');
} else {
  visibleCtx = VISIBLECANVAS.getContext('2d');
}

let backingStoreRatio = visibleCtx.webkitBackingStorePixelRatio
  || visibleCtx.mozBackingStorePixelRatio
  || visibleCtx.msBackingStorepixelRatio
  || visibleCtx.oBackingStorePixelRatio
  || visibleCtx.backingStorePixelRatio
  || 1;
ENV.CanvasRatio = backingStoreRatio / ENV.DevicePixelRatio;

// check availability of Battery API
if (ENV.BatteryAPIAvailable) {
  // monitor battery - from http://www.w3.org/TR/battery-status/
  
}