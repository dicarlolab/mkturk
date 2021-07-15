/**
 * mkturk_init.js
 * Initialization code for MkTurk
 */

// Check Availability of APIs
if (typeof(navigator.usb) == "object"){ ENV.WebUSBAvailable = 1; }
if (typeof(navigator.bluetooth) == "object"){ ENV.WebBluetoothAvailable = 1; }
if (typeof(navigator.getBattery) == "function"){ ENV.BatteryAPIAvailable = 1; }
if (typeof(OffscreenCanvas) == "function"){ ENV.OffscreenCanvasAvailable = 1; }

// Button callbacks for inline connection to arduino device
document.querySelector("button[id=googlesignin]").style.display = "block";
document.querySelector("button[id=googlesignin]").style.visibility = "visible";
document.querySelector('button[id=googlesignin')
  .addEventListener('pointerup', firebaseRedirectSignIn, false);
document.querySelector('button[id=reloadpage]')
  .addEventListener('pointerup', () => {
    window.location.reload();
  }, false);

//---- for Safari
document.querySelector('button[id=googlesignin]')
.addEventListener('click', firebaseRedirectSignIn, false);
document.querySelector('button[id=reloadpage]')
.addEventListener('click', () => {
  window.location.reload();
}, false);
//---- (END) for Safari

let textObj = document.getElementById('headsuptext');
textObj.addEventListener('pointerup', headsuptext_listener, false);
textObj.addEventListener('click', headsuptext_listener, false);