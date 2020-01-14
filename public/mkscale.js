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
  maxweight: 0,
  maxweighttimeout: 0,

  battery: [],
  tbattery: [],

  statustext_connect: "",
  statustext_sent: "",
  statustext_received: "",
}

const db = firebase.firestore();
const storageRef = firebase.storage().ref();
const mkscaledataRef = storageRef.child("mkturkfiles/mkscaledata");

let editorContainer = document.querySelector("#editor-card");
let editor = new JSONEditor(editorContainer);

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
      // updateHeadsUpDisplayDevices()
    }
  }
}

// Step 1: Manually select device -- returns a promise
async function requestBLEDevice(){
  let result = Promise.resolve()
  if (blescale.connected == false){
    blescale.statustext_connect = "Requesting bluetooth device list"
    console.log(blescale.statustext_connect)
    // updateHeadsUpDisplayDevices()
    // let options = {filters: [ {name: ble.name}, {services:[ ble.customserviceUUID ]} ]}
//     let options = {filters: [ {namePrefix: ble.namePrefix}, {services: ble.weightServiceUUID} ]}
    let options = {
    				filters: [ {namePrefix: blescale.namePrefix}, {services: blescale.weightServiceUUID}],
     				optionalServices: ["battery_service"]
     				}

    try{
      device = await navigator.bluetooth.requestDevice(options)

      blescale.statustext_connect = "Found a device name: " + device.name + "   id: " + device.id
      console.log(blescale.statustext_connect)
      console.log(device.uuids)
      // updateHeadsUpDisplayDevices()

      blescale.device=device
      blescale.device.addEventListener('gattserverdisconnected',onDisconnectedBLE)

      // ENV.BLEDeviceType = 'scale'
      // ENV.BLEDeviceName = device.name
    }
    catch(error){
      if (blescale.connected == false){
        blescale.statustext_connect = "Connection error encountered"
        console.log(blescale.statustext_connect)
        // updateHeadsUpDisplayDevices()

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
    // updateHeadsUpDisplayDevices()

    //Get read characteristic
    if (characteristic.properties.read == true && 
        characteristic.properties.write == false && 
        characteristic.properties.notify == true) {
          blescale.readWeightCharacteristic = characteristic
          blescale.statustext_received = "Found read characteristic " + characteristic.uuid
          // updateHeadsUpDisplayDevices()
    }
  });

  await blescale.readWeightCharacteristic.startNotifications()
  blescale.readWeightCharacteristic.addEventListener('characteristicvaluechanged', onWeightNotificationFromScale)
  blescale.statustext_received = "Initiated scale read notifications"
  console.log(blescale.statustext_received)
  // updateHeadsUpDisplayDevices()

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
    // batteryService = await server.getPrimaryService("battery_service")
    // console.log("BATTERY SERVICEEEEEE", batteryService);

    // blescale.statustext_connect = "Found battery service" + batteryService.uuid + "Getting characteristics..."
    // console.log(blescale.statustext_connect)
    // // updateHeadsUpDisplayDevices()
    // blescale.batteryService=batteryService

    // characteristics = await batteryService.getCharacteristics()
    // characteristics.forEach(characteristic => {
    //   blescale.statustext_connect = 
    //     ">> Characteristic: " + characteristic.uuid + "" + getSupportedProperties(characteristic);
    //   console.log(blescale.statustext_connect)
    //   // updateHeadsUpDisplayDevices()

    //   //Get read characteristic
    //   if (characteristic.properties.read == true && 
    //       characteristic.properties.write == false && 
    //       characteristic.properties.notify == true) {
    //     blescale.readBatteryCharacteristic = characteristic
    //     blescale.statustext_received = "Found read characteristic " + characteristic.uuid
    //     // updateHeadsUpDisplayDevices()
    //   }
    // });

    //   await blescale.readBatteryCharacteristic.startNotifications()
    //   blescale.readBatteryCharacteristic.addEventListener('characteristicvaluechanged', onBatteryNotificationFromScale)
    //   blescale.statustext_received = "Initiated battery read notifications"
    //   console.log(blescale.statustext_received)
    //   // updateHeadsUpDisplayDevices()

	  // // read initial battery level
	  // await blescale.readBatteryCharacteristic.readValue()

    //   blescale.connected = true
    //   blescale.tareflag = 1
    //   updateConnectBLEButton()
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

    
	// 	console.log(weight)
	// // weight wraps after reaching FF FF FF FF
	// if (weight/1000 - ble.startweight/1000 < -7500){
	// 	//wrapped
	// 	weight = weight + (parseInt("FFFFFFFF",16) - ble.startweight)
	// 	console.log('wrapped weight')
	// }
	// else { 
	// 	weight = weight - ble.startweight
	// }
  var displayweight = weight - blescale.startweight //Tare the weight displayed
  displayweight = displayweight/1000 //grams
  displayweight = Math.round(100*displayweight)/100 //0.01 gram precision


	weight = weight/1000 //grams
	weight = Math.round(100*weight)/100 //0.01 gram precision

  // logEVENTS("Weight",weight,"timeseries");
  // TRIAL.WeightTime[TRIAL.NWeights] = Date.now() - ENV.CurrentDate.valueOf();
  // TRIAL.WeightTrial[TRIAL.NWeights] = CURRTRIAL.num
  // TRIAL.Weight[TRIAL.NWeights] = weight
  // TRIAL.NWeights = TRIAL.NWeights+1;


  //   blescale.tweights[blescale.tweights.length] = Math.round(t_notify)
  blescale.weights[blescale.weights.length] = displayweight

  // if (TRIAL.Weight[TRIAL.NWeights-1] > 500){
  //   blescale.maxweight = 0 //reset weight since too high indicating jumped
  //   blescale.maxweighttimeout = TRIAL.WeightTime[TRIAL.NWeights-1] + 1000 //wait 1 seconds
  // }
  // else if (TRIAL.Weight[TRIAL.NWeights-1] > blescale.maxweight &&
  //   TRIAL.WeightTime[TRIAL.NWeights-1] > blescale.maxweighttimeout){
  //   blescale.maxweight = TRIAL.Weight[TRIAL.NWeights-1]
  // }


    blescale.statustext_received = 
      'Wt=' + blescale.weights[blescale.weights.length-1] + " g";
      
      // + '  ' 
      // + Math.round(dt) + 'ms' + '     '
      // + ' MAX =' + blescale.maxweight + '  ' + blescale.weightunits

    console.log(blescale.statustext_received);
    let weightDisplay = document.querySelector("#weight-display");
    weightDisplay.textContent = blescale.weights[blescale.weights.length-1] 
      + " g";
    // updateHeadsUpDisplayDevices()
}

function onBatteryNotificationFromScale(event){
  // var t_notify = Date.now() - ENV.CurrentDate.valueOf()
  // var dt = t_notify-blescale.tbattery[blescale.tbattery.length-1]
  let value = event.target.value

  value = value.buffer ? value : new DataView(value)
  let a = []
  for (var i = 0; i < value.byteLength; i++){
      a.push(('00' + value.getUint8(i).toString(16)).slice(-2));
    }
    blescale.statustext_received = 'Received BATTERY notification:  ' + a.join(' ') + ' dt=' + Math.round(dt) + 'ms'
    console.log(blescale.statustext_received)
    // updateHeadsUpDisplayDevices()

    //Decode values (specific to scale)
    var battery = parseInt(a[0],16)
    // blescale.tbattery[blescale.tbattery.length] = Math.round(t_notify)
    blescale.battery[blescale.battery.length] = battery
    // logEVENTS("BLEBatteryLT",[battery,Math.round(t_notify)],"trialseries");

    // blescale.statustext_received = 
    //   'BATTERY(%)=' + blescale.battery[blescale.battery.length-1] + ' dt='
    //   + Math.round(dt) + 'ms'

    console.log(blescale.statustext_received)
    // updateHeadsUpDisplayDevices()
}

//============== READ NOTIFICATIONS & WRITES (end) ==============//

//============== RUNNER CODE ===============//
let connectBtn = document.querySelector("#connect-ble-scale");
connectBtn.addEventListener("pointerup", ev => {
  ev.preventDefault();
  blescaleconnect(ev);
});

// connectBtn.addEventListener("pointerup", blescaleconnect, false);

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

let entryForm = document.querySelector("#entry-form");
entryForm.addEventListener("submit", ev => {
  ev.preventDefault();
  
  let name = document.querySelector("#entry-name").value;
  let wt = document.querySelector("#entry-weight").value;
  let notes = document.querySelector("#entry-notes").value;

  let refDate = new Date(Date.now());
  refDate = new Date(refDate.toLocaleDateString());
  let upperDate = new Date(refDate.getTime() + 86400000);

  let query = db.collection("mkscale").where("CurrentDate", ">=", refDate)
    .where("CurrentDate", "<=", upperDate).where("name", "==", name);

  query.get().then(sns => {
    if (sns.empty) {
      let today = new Date(Date.now());
      let idFirestore = today.toISOString() + "_" + name + "_weight";
      let idStorage = idFirestore + ".json";

      db.collection("mkscale").doc(idFirestore).set({
        name: name,
        weights: [Number(wt)],
        t_weights: [firebase.firestore.Timestamp.fromDate(today)],
        notes: [notes],
        CurrentDateValue: today.getTime(),
        CurrentDate: firebase.firestore.Timestamp.fromDate(today)
      }).then(() => {
        console.log("Firestore Weight Save Success:", idFirestore);
      }).catch(e => {
        console.error("Firestore Weight Save Fail:", idFirestore);
        alert("Firestore Weight Save Failed");
        throw "FIRESTORE SAVE FAILED EXCEPTION";
      });

      let file = {
        name: name,
        weights: [Number(wt)],
        t_weights: [today.toJSON()],
        notes: [notes],
        CurrentDateValue: today.getTime(),
        CurrentDate: today.toJSON()
      };

      let fileRef = mkscaledataRef.child(idStorage);
      let storageFile = new Blob([JSON.stringify(file, null, 1)]);
      let metadata = { contentType: "application/json" };
      fileRef.put(storageFile, metadata).then(sns => {
        console.log("Storage Weight Save Success:", idStorage);
      }).catch(e => {
        console.error("Storage Weight Save Fail:", idStorage);
        alert("Storage Weight Save Failed");
        throw "STORAGE SAVE FAILED EXCEPTION";
      });

      alert("Firestore/Storage Weight Save Success. Displaying Result...");

      editor.destroy();
      editor = 
        new JSONEditor(editorContainer, {}, file);
    }
    
    else if (sns.size == 1) {
      sns.forEach(doc => {
        function timestampToDate(element, idx, arr) {
          try {
            arr[idx] = element.toDate().toJSON();
          } catch (e) {
            console.error("Error converting t_weights:", e);
          }
        }

        function dateToTimestamp(element, idx, arr) {
          try {
            arr[idx] = firebase.firestore.Timestamp.fromDate(new Date(element));
          } catch (e) {
            console.error("Error converting t_weights:", e);
          }
        }

        let file = doc.data();
        let firestoreFile = file;
        file.t_weights.forEach(timestampToDate);
        file.CurrentDate = file.CurrentDate.toDate().toJSON();

        let timeNow = new Date(Date.now());
        file.weights.push(Number(wt));
        file.t_weights.push(timeNow.toJSON());
        file.notes.push(notes);

        let fileRef = mkscaledataRef.child(doc.id + ".json");
        let storageFile = new Blob([JSON.stringify(file, null, 1)]);
        let metadata = { contentType: "application/json" };
        fileRef.put(storageFile, metadata).then(sns => {
          console.log("Storage Weight Save Success:" , doc.id + ".json");
        }).catch(e => {
          console.error("Storage Weight Save Fail:", doc.id + ".json");
          alert("Storage Weight Save Failed");
          throw "STORAGE SAVE FAILED EXCEPTION";
        });

        firestoreFile.t_weights.forEach(dateToTimestamp);
        firestoreFile.CurrentDate 
          = firebase.firestore.Timestamp.fromDate(new Date(firestoreFile.CurrentDate));

        db.collection("mkscale").doc(doc.id).set(
          firestoreFile
        ).then(() => {
          console.log("Firestore Weight Save Success:", doc.id);
        }).catch(e => {
          console.error("Firestore Weight Save Fail:", doc.id);
          alert("Firestore Weight Save Failed");
          throw "FIRESTORE SAVE FAILED EXCEPTION";
        });

        alert("Firestore/Storage Weight Save Success. Displaying Result...");

        editor.destroy();
        editor = new JSONEditor(editorContainer, {}, file);

      });
    }
  }).catch(e => {
    console.error("ERROR:", e);
  });
  
  
});
