// resources:
// API - https://webbluetoothcg.github.io/web-bluetooth/
// Samples - https://googlechrome.github.io/samples/web-bluetooth/index.html
// MDN - https://developer.mozilla.org/en-US/docs/Web/API/BluetoothDevice/gatt
// Playbulb - https://googlecodelabs.github.io/candle-bluetooth/
// Implementation status - https://github.com/WebBluetoothCG/web-bluetooth/blob/gh-pages/implementation-status.md#chrome


//Performing operations that require explicit user interaction on touchstart events is deprecated
// and will be removed in M54, around October 2016.
// See https://www.chromestatus.com/features/5649871251963904 for more details.

//----retry on disconnect
//---ble status write
//---detect multiple ble devices
//---ble opt out

const auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('profile');
// provider.addScope('email');
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

auth.getRedirectResult().then(function(result) {
  if (result.user) {
  // User just signed in. you can get the result.credential.
    console.log('Sign-In Redirect Result, USER ' + result.user.email + ' is signed in')
    console.log(result);
    console.log(firebase.auth().currentUser);
    blescale.displayName = result.user.displayName;
    blescale.email = result.user.email;
    blescale.uid = result.user.uid;
  }
  else if (auth.currentUser) {
    firebase.auth().currentUser.reload();
    console.log('Sign-In Redirect Result, USER ' 
      + auth.currentUser.email + ' is signed in')
    blescale.displayName = auth.currentUser.displayName;
    blescale.email = auth.currentUser.email;
    blescale.uid = auth.currentUser.uid;
    // console.log(result);
    // console.log(firebase.auth().currentUser);
    // var credential = firebase.auth().EmailAuthProvider.credential(email, password);
    // currentUser.reauthenticate(credential);
    // firebase.auth().currentUser.updateEmail("yc3135@columbia.edu");
    // console.log(firebase.auth().currentUser);
    //firebase.auth().currentUser.sendEmailVerification();
  }
  else {
  // No user signed in, update your UI, show the redirect sign-in screen.
	  firebase.auth().signInWithRedirect(provider)
  }
});

//================ INITIALIZE BLE VARIABLE ================//
var blescale = {
  // name: "redbearlabsnano",
  name: "Motif Scale",
  namePrefix: "Motif",
  weightServiceUUID: ["1bc50001-0200-0aa5-e311-24cb004a98c5"], // Service UUID, must be UUID alias (e.g. 0x1234) or lowercase hex
  batteryServiceUUID: ["0x2A19"],

  device: [],
  server: [],
  weightService: [],
  readWeightCharacteristic: [],
  batteryService: [],
  readBatteryCharacteristic: [],
  connected: false,

  weights: [],
  tweights: [],
  weightunits: ["gram"],
  weightstart: 0,
  tareflag: 1,
  firstflag: 1,
  firsttweight: 0,
  lastdraw: 0,
  maxweight: 0,
  maxweighttimeout: 0,

  battery: [],
  tbattery: [],

  statustext_connect: "",
  statustext_sent: "",
  statustext_received: "",

  displayName: "",
  email: "",
  uid: ""
}

const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = firebase.storage().ref();
const mkscaledataRef = storageRef.child("mkturkfiles/mkscaledata");

let editorContainer = document.querySelector("#editor-card");
let editor = new JSONEditor(editorContainer);
let entrySelector = document.querySelector('#entry-selector')


window.addEventListener('load', (ev) => {
  let marmosetEntry = document.querySelector('#marmosets-entry');
  db.collection('mkdailydata').get().then(sns => {
    sns.forEach(doc => {
      let marmosetOption = document.createElement('option');
      marmosetOption.setAttribute('label', doc.id);
      marmosetOption.setAttribute('value', doc.id);
      marmosetEntry.appendChild(marmosetOption);
    });
  });
});

entrySelector.addEventListener('change', (ev) => {
  let nameEntryDiv = document.querySelector('#entry-name-div');
  if (entrySelector.value != "mkscale") {
    nameEntryDiv.style.display = 'none';
  } else if (entrySelector.value == "mkscale") {
    nameEntryDiv.style.display = 'inline-block';
  }
});

google.charts.load('current', {packages: ['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  console.log(blescale.tweights);
  data = new google.visualization.DataTable();
  data.addColumn('number', 'seconds');
  data.addColumn('number', 'weight (g)');
  data.addRows([
    [0, 0]
  ]);
  console.log(data);
  options = {
    chart: {
      title: 'Weight',
      subtitle: 'in grams'
    },
    allowAsync: true,
    animation: {
      duration: 1000,
      easing:'out'
    },
    legend: {
      position: 'none'
    }
  };
  chart = new google.charts.Line(document.getElementById("plot-card"));
  chart.draw(data, google.charts.Line.convertOptions(options));
  blescale.lastdraw = performance.now();
}
//================ INITIALIZE BLE VARIABLE (end) ================//

function updateConnectBLEButton() {
  let connectBtn = document.querySelector("#connect-ble-scale");
  if (connectBtn.textContent == "CONNECT BLE SCALE") {
    connectBtn.textContent = "DISCONNECT BLE SCALE";
    connectBtn.style.color = "red";
    connectBtn.removeEventListener("pointerup", blescaleconnect, false);
    connectBtn.addEventListener("pointerup", blescaledisconnect, false);
  }
  else {
    connectBtn.textContent = "CONNECT BLE SCALE";
    connectBtn.style.color = "green";
    connectBtn.removeEventListener("pointerup", blescaledisconnect, false);
    connectBtn.addEventListener("pointerup", blescaleconnect, false);
  }
}

function blescaleconnect(event){
  findBLEDevice(event)
  console.log('done blescale connection callback')
}

function blescaledisconnect(event){
  console.log('done blescale disconnection callback')

  if (blescale.device.gatt.connected) {
    blescale.device.gatt.disconnect();
  } else {
    log('> Bluetooth Device is already disconnected');
  }
}

//==================== CONNECT BLE ====================//
async function findBLEDevice(event){
  event.preventDefault(); //prevents additional downstream call of click listener
  try{
    await requestBLEDevice()
    await connectBLEDeviceAndCacheCharacteristics()
  }
  catch(error){
    console.error("ERROR ON LINE 92", error);
    if (blescale.connected == false){
      var textstr = 'Error getting blescale device/service/characteristic';
      console.log(textstr)
      blescale.statustext = blescale.statustext + "<br>" + textstr
    }
  }
}

// Step 1: Manually select device -- returns a promise
async function requestBLEDevice(){
  let result = Promise.resolve()
  if (blescale.connected == false){
    blescale.statustext_connect = "Requesting bluetooth device list"
    console.log(blescale.statustext_connect)

    let options = {
    				filters: [ {namePrefix: blescale.namePrefix}, {services: blescale.weightServiceUUID}],
     				optionalServices: ["battery_service"]
     				}

    try{
      device = await navigator.bluetooth.requestDevice(options)

      blescale.statustext_connect = "Found a device name: " + device.name + "   id: " + device.id
      console.log(blescale.statustext_connect)
      console.log(device.uuids)

      blescale.device=device
      blescale.device.addEventListener('gattserverdisconnected',onDisconnectedBLE)
    }
    catch(error){
      if (blescale.connected == false){
        blescale.statustext_connect = "Connection error encountered"
        console.log(blescale.statustext_connect)

        return error
      }
    }
  }
  return result
}

// Step 2: Connect server & Cache characteristics -- returns a promise
async function connectBLEDeviceAndCacheCharacteristics() {
  console.log('Connecting to GATT Server...');

  server = await blescale.device.gatt.connect();
  var textstr = "found a GATT server";
  console.log(textstr,server);
  blescale.statustext = blescale.statustext + "<br>" + textstr;
  // updateHeadsUpDisplayDevices()
  blescale.server=server;

  weightService = await server.getPrimaryService(blescale.weightServiceUUID)
  blescale.statustext_connect = "Found weight service" + weightService.uuid + "Getting characteristics..."
  console.log(blescale.statustext_connect)
  // updateHeadsUpDisplayDevices()
  blescale.weightService=weightService

  characteristics = await weightService.getCharacteristics()
  characteristics.forEach(characteristic => {
    blescale.statustext_connect = 
      ">> Characteristic: " + characteristic.uuid + "" + getSupportedProperties(characteristic);
    console.log(blescale.statustext_connect)

    //Get read characteristic
    if (characteristic.properties.read == true && 
        characteristic.properties.write == false && 
        characteristic.properties.notify == true) {
          blescale.readWeightCharacteristic = characteristic
          blescale.statustext_received = "Found read characteristic " + characteristic.uuid
    }
  });

  await blescale.readWeightCharacteristic.startNotifications()
  blescale.readWeightCharacteristic.addEventListener('characteristicvaluechanged', onWeightNotificationFromScale)
  blescale.statustext_received = "Initiated scale read notifications"
  console.log(blescale.statustext_received)

  // Get Battery Service
  try {
    batteryService = await server.getPrimaryService("battery_service");
    console.log("Battery Service", batteryService);

    blescale.statustext_connect = "Found battery service" 
      + batteryService.uuid + "Getting characteristics...";
    console.log(blescale.statustext_connect);
    blescale.batteryService = batteryService;

    characteristics = await batteryService.getCharacteristics();
    characteristic.forEach(characteristic => {
      blescale.statustext_connect = ">> Characteristic: " + characteristic.uuid
        + " " + getSupportedProperties(characteristic);
      console.log(blescale.statustext_connect);

      if (characteristic.properties.read == true &&
          characteristic.properties.write == false && 
          characteristic.properties.notify == true) {
            blescale.readBatteryCharacteristic = characteristic;
            blescale.statustext_received = "Found read characteristic "
              + characteristic.uuid;
      }
    });

    await blescale.readBatteryCharacteristic.startNotifications();
    blescale.readBatteryCharacteristic.addEventListener("characteristicvaluechanged", onBatteryNotificationFromScale);
    blescale.statustext_received = "Initiated battery read notifications";
    console.log(blescale.statustext_received);

    await blescale.readBatteryCharacteristic.readValue();
    blescale.connected = true;
    blescale.tareflag = 1;
    updateConnectBLEButton();
    console.log("battery working");

  } catch (error) {
    console.error("Battery service error");
  }
}
//==================== CONNECT BLE (end) ====================//

/* Utils */

function getSupportedProperties(characteristic) {
  let supportedProperties = [];
  for (const p in characteristic.properties) {
    if (characteristic.properties[p] === true) {
      supportedProperties.push(p.toUpperCase());
    }
  }
  return '[' + supportedProperties.join(', ') + ']';
}


//==================== RECONNECT BLE ====================//
// adapted from: https://googlechrome.github.io/samples/web-bluetooth/automatic-reconnect.html

function onDisconnectedBLE(){
  blescale.connected = false
  blescale.statustext_connect = 'BLE Disconnected!'
  console.log(blescale.statustext_connect)
  updateConnectBLEButton()
}

async function reconnectBLE(){
  exponentialBackoff(100 /* max retries */, 2 /* seconds delay */,
    async function toTry() {
      time('Connecting to Bluetooth Device... ');
      blescale.statustext_connect = 'Attempting to reconnect to BLE...'
      console.log(blescale.statustext_connect)

      await connectBLEDeviceAndCacheCharacteristics()
    },
    function success() {
      blescale.statustext_connect = '>> Bluetooth Device reconnected!'
      console.log(blescale.statustext_connect)
    },
    function fail() {
      time('Failed to reconnect.');
      blescale.statustext_connect = 'Could not reconnect to Bluetooth Device after multipe tries'
      console.log(blescale.statustext_connect)
    });
}

// This function keeps calling "toTry" until promise resolves or has
// retried "max" number of times. First retry has a delay of "delay" seconds.
// "success" is called upon success.
async function exponentialBackoff(max, delay, toTry, success, fail) {
  try {
    const result = await toTry();
    success(result);
  } catch(error) {
    if (max === 0) {
      return fail();
    }
    time('Retrying in ' + delay + 's... (' + max + ' tries left)');
    setTimeout(function() {
      exponentialBackoff(--max, delay * 2, toTry, success, fail);
    }, delay * 1000);
  }
}

function time(text) {
  console.log('[' + new Date().toJSON().substr(11, 8) + '] ' + text);
}
//==================== RECONNECT BLE (end) ====================//

//============== READ NOTIFICATIONS & WRITES ==============//
function onWeightNotificationFromScale(event){
  // var t_notify = Date.now() - ENV.CurrentDate.valueOf()
  // var dt = t_notify-blescale.tweights[blescale.tweights.length-1]
  let value = event.target.value
  console.log("value:", value);

  value = value.buffer ? value : new DataView(value)
  let a = []
  for (var i = 0; i < value.byteLength; i++){
      a.push(('00' + value.getUint8(i).toString(16)).slice(-2));
  }
  // blescale.statustext_received = 'Received WEIGHT notification:  ' + a.join(' ') + ' dt=' + Math.round(dt) + 'ms'

  //Decode values (specific to scale)
  var weight = parseInt(a[3] + a[2] + a[1] + a[0],16)
  
  if (weight> parseInt("FFFFFFFF",16) - 7500000) {
    weight = weight - parseInt("FFFFFFFF",16)
  }

	if (blescale.weights.length <= 1 || blescale.tareflag == 1){
		blescale.startweight = weight
		blescale.tareflag = 0
		console.log('**** TARED SCALE ****')
	}

  var displayweight = weight - blescale.startweight //Tare the weight displayed
  displayweight = displayweight/1000 //grams
  displayweight = Math.round(100*displayweight)/100 //0.01 gram precision


	weight = weight/1000 //grams
	weight = Math.round(100*weight)/100 //0.01 gram precision

  blescale.weights[blescale.weights.length] = displayweight
  
  if (blescale.firstflag == 1) {
    blescale.firsttweight = performance.now();
    blescale.tweights[blescale.weights.length - 1] = 0;
    blescale.firstflag = 0;
  }

  blescale.tweights[blescale.weights.length-1] 
    = Number(performance.now() - blescale.firsttweight);

  blescale.statustext_received = 
    'Wt=' + blescale.weights[blescale.weights.length-1] + " g";
      


  console.log(blescale.statustext_received);
  let weightDisplay = document.querySelector("#weight-display");
  weightDisplay.textContent = blescale.weights[blescale.weights.length-1] + " g";
  // console.log("blescale.weights", blescale.weights);
  // console.log("blescale.tweights", blescale.tweights);
  data.addRows([
    [ parseFloat(blescale.tweights[blescale.weights.length-1]/1000.0), parseFloat(blescale.weights[blescale.weights.length-1]) ]
  ]);

  if (blescale.weights.length > 600) {
    data.removeRow(0);
    console.log("removed row")
  }

  if (performance.now() - blescale.lastdraw < 333) {
    console.log("no draw");
  } else if (performance.now() - blescale.lastdraw >= 333) {
    console.log("draw called")
    chart.draw(data, google.charts.Line.convertOptions(options));
    blescale.lastdraw = performance.now();
  }
}

function onBatteryNotificationFromScale(event){
  let value = event.target.value

  value = value.buffer ? value : new DataView(value)
  let a = []
  for (var i = 0; i < value.byteLength; i++){
      a.push(('00' + value.getUint8(i).toString(16)).slice(-2));
    }
    blescale.statustext_received = 'Received BATTERY notification:  ' + a.join(' ') + ' dt=' + Math.round(dt) + 'ms'
    console.log(blescale.statustext_received)

    //Decode values (specific to scale)
    var battery = parseInt(a[0],16)
    blescale.battery[blescale.battery.length] = battery

    console.log(blescale.statustext_received)
}

//============== READ NOTIFICATIONS & WRITES (end) ==============//

//============== RUNNER CODE ===============//
let connectBtn = document.querySelector("#connect-ble-scale");
connectBtn.addEventListener("pointerup", ev => {
  ev.preventDefault();
  blescaleconnect(ev);
});

let tareBtn = document.querySelector("#tare-button");
tareBtn.addEventListener("pointerup", ev => {
  ev.preventDefault();
  blescale.tareflag = 1;
  console.log("hello");
});

let getWeightBtn = document.querySelector("#get-weight-btn");
getWeightBtn.addEventListener("pointerup", ev => {
  ev.preventDefault();
  let weightEntry = document.querySelector("#entry-weight");
  weightEntry.focus();
  weightEntry.value = blescale.weights[blescale.weights.length-1];
  let divvv = document.querySelector("#entry-weight-div");
  divvv.classList.add("is-dirty");
});

async function getDocumentData(collection, id) {
  return db.collection(collection).doc(id).get().then(doc => {
    return doc.data();
  });
}

async function getStorageFile(path) {
  let fileRef = storage.ref().child(path);
  let url = await fileRef.getDownloadURL().catch(e => {
    console.error('Error Getting URL:', e);
  });

  let response = await fetch(url);
  let file = await response.json();

  return file;
}

let entryForm = document.querySelector("#entry-form");
entryForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  let name = '';
  let today = new Date();
  let wt = document.querySelector('#entry-weight').value;
  let notes = document.querySelector('#entry-notes').value;
  let initials = document.querySelector('#entry-initials').value;
  
  if (entrySelector.value != 'mkscale') {
    name = entrySelector.value;

    let path = 'mkturkfiles/mkdailydata/' + name + '.json';
    let storageFile = await getStorageFile(path);
    let firestoreDoc = await getDocumentData('mkdailydata', name);

    let tmp = {};
    tmp.weight = Number(wt);
    tmp.implant_cleaned = '';
    tmp.reward = '';
    tmp.supplement = '';
    tmp.time_on = '';
    tmp.time_off = '';
    tmp.comments = notes ? notes : '';
    tmp.initials = initials ? initials : '';
    tmp.timestamp = new Date();
    tmp.date = new Date();

    for (let key in tmp) {
      if (firestoreDoc !== undefined) {
        if (key === 'timestamp') {
          storageFile[key].push(tmp[key].toJSON());
          firestoreDoc[key].push(firebase.firestore.Timestamp.fromDate(tmp[key]));
        } else {
          storageFile[key].push(tmp[key]);
          firestoreDoc[key].push(tmp[key]);
        }
      } else {
        throw 'firestore/mkdailydata Document Not Found';
      }
    }

    await db.collection('mkdailydata').doc(name).set(firestoreDoc).then(async () => {
      console.log(name, 'weight uploaded to firestore/mkdailydata');
      storageFile = new Blob(
        [JSON.stringify(storageFile, Object.keys(storageFile).sort(), 1)]
      );
      let fileRef = storage.ref().child(path);
      await fileRef.put(storageFile, {contentType: 'application/json'}).then(() => {
        console.log(name, 'weight uploaded to mkturkfiles/mkdailydata');
        editor.destroy();
        tmp.timestamp = tmp.timestamp.toJSON();
        tmp.date = tmp.date.toJSON();
        editor = new JSONEditor(editorContainer, {}, tmp);
        alert('Weight Successfully Uploaded/Updated');
      }).catch(e => {
        console.error('Error uploading weight to mkturkfiles/mkdailydata', e);
        alert('Error Uploading file to GCS');
      });
    }).catch(e => {
      console.error('Error uploading weight to firestore/mkdailydata', e);
      alert('Error updating Firestore doc');
    });

  } else if (entrySelector.value == 'mkscale') {
    name = document.querySelector('#entry-name').value;

    let fileName = today.toISOString() + '_' + name + '_weight.json';

    let file = {
      Name: name,
      WeightValue: wt,
      WeightTime: today.toJSON(),
      WeightNote: notes,
      CurrentDateValue: today.getTime(),
      CurrentDate: today.toJSON(),
      Doctype: 'weights',
      Docname: fileName,
      ResearcherDisplayName: blescale.displayName,
      ResearcherEmail: blescale.email,
      ResearcherID: blescale.uid
    };

    let fileToGCS = new Blob(
      [JSON.stringify(file, null, 1)]
    );
    let fileRef = mkscaledataRef.child(fileName);
    fileRef.put(fileToGCS, {contentType: 'application/json'}).then(sns => {
      console.log('File Uploaded to GCS/mkturkfiles/mkscaledata');
      alert('File Uploaded to GCS/mkturkfiles/mkscaledata');
      editor.destroy();
      editor = new JSONEditor(editorContainer, {}, file);
    }).catch(e => {
      console.error('Error Uploading File to GCS:', e);
      alert('Error Uploading File to GCS');
    });
  }
});