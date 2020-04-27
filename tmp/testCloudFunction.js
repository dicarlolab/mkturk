var functions = firebase.functions();
let bqInsertEyeData = functions.httpsCallable('bqInsertEyeData');
let bqQuery = functions.httpsCallable('bqQuery');
let listTables = functions.httpsCallable('listTables');
let bqListDatasets = functions.httpsCallable('bqListDatasets');
let detectDevice = functions.httpsCallable('detectDevice');

// let fixData = [{
//   agent: "Eliaso",
//   timestamp: new Date('2020-02-14').toJSON(),  
//   num_eyes: 0,
//   left_x: 0.0,
//   left_y: 0.0,
//   left_aux_0: 0.0,
//   left_aux_1: 0.0,
//   right_x: 0.0,
//   right_y: 0.0,
//   right_aux_0: 0.0,
//   right_aux_1: 0.0
// },
// {
//   agent: "Eliaso",
//   timestamp: new Date(Date.now()).toJSON(),  
//   num_eyes: 1,
//   left_x: 0.1,
//   left_y: 0.0,
//   left_aux_0: 0.0,
//   left_aux_1: 0.0,
//   right_x: 0.0,
//   right_y: 0.0,
//   right_aux_0: 0.0,
//   right_aux_1: 0.0
// }];

// bqInsertEyeData(fixData);

// async function deviceDetect() {
//   let navigator = window.navigator;
//   let canvas = document.createElement('canvas');
//   let gl, debugInfo, vendor, renderer;

//   try {
//     gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
//   } catch (e) {
//     console.error('WebGL Context Error:', e);
//     return;
//   }
//   if (gl) {
//     debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
//     vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
//     renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
//   }
//   let deviceInfo = await detectDevice(navigator.userAgent);
//   deviceInfo.data.gpu = {};
//   deviceInfo.data.gpu.vendor = vendor;
//   deviceInfo.data.gpu.renderer = renderer;
//   console.log(deviceInfo.data);


//   let devInfoDiv = document.querySelector('#dev-info');
//   devInfoDiv.style.display = 'block';

//   let client = document.createElement('span');
//   client.textContent = 'Client';
//   client.style.fontWeight = 'bold';

//   let clientType = document.createElement('span');
//   clientType.textContent = 'type: ' + deviceInfo.data.client.type;
//   let clientName = document.createElement('span');
//   clientName.textContent = 'name: ' + deviceInfo.data.client.name;
//   let clientVersion = document.createElement('span');
//   clientVersion.textContent = 'version: ' + deviceInfo.data.client.version;
//   let clientEngine = document.createElement('span');
//   clientEngine.textContent = 'engine: ' + deviceInfo.data.client.engine;
//   let clientEngineVersion = document.createElement('span');
//   clientEngineVersion.textContent = 'engine version: ' + deviceInfo.data.client.engineVersion;

//   devInfoDiv.appendChild(client);
//   devInfoDiv.appendChild(clientType);
//   devInfoDiv.appendChild(clientName);
//   devInfoDiv.appendChild(clientVersion);
//   devInfoDiv.appendChild(clientEngine);
//   devInfoDiv.appendChild(clientEngineVersion);

//   let operSys = document.createElement('span');
//   operSys.textContent = 'OS:';
//   operSys.style.fontWeight = 'bold';

//   let osName = document.createElement('span');
//   osName.textContent = 'name: ' + deviceInfo.data.os.name;
//   let osVersion = document.createElement('span');
//   osVersion.textContent = 'name: ' + deviceInfo.data.os.version;
//   let osPlatform = document.createElement('span');
//   osPlatform.textContent = 'name: ' + deviceInfo.data.os.platform;

//   devInfoDiv.appendChild(operSys);
//   devInfoDiv.appendChild(osName);
//   devInfoDiv.appendChild(osVersion);
//   devInfoDiv.appendChild(osPlatform);

//   let device = document.createElement('span');
//   device.textContent = 'Device:';
//   device.style.fontWeight = 'bold';

//   let deviceType = document.createElement('span');
//   deviceType.textContent = 'type: ' + deviceInfo.data.device.type;
//   let deviceBrand = document.createElement('span');
//   deviceBrand.textContent = 'brand: ' + deviceInfo.data.device.brand;
//   let deviceModel = document.createElement('span');
//   deviceModel.textContent = 'model: ' + deviceInfo.data.device.model;

//   devInfoDiv.appendChild(device);
//   devInfoDiv.appendChild(deviceType);
//   devInfoDiv.appendChild(deviceBrand);
//   devInfoDiv.appendChild(deviceModel);


//   let gpu = document.createElement('span');
//   gpu.textContent = 'GPU:';
//   gpu.style.fontWeight = 'bold';

//   let gpuVendor = document.createElement('span');
//   gpuVendor.textContent = 'vendor: ' + deviceInfo.data.gpu.vendor;
//   let gpuRenderer = document.createElement('span');
//   gpuRenderer.textContent = 'renderer: ' + deviceInfo.data.gpu.renderer;

//   devInfoDiv.appendChild(gpu);
//   devInfoDiv.appendChild(gpuVendor);
//   devInfoDiv.appendChild(gpuRenderer);

// }
// deviceDetect();

// console.log('test', test);

// let dt = new Date('2020-02-14');
// let dt2 = new Date(dt);
// dt2.setDate(dt2.getDate() + 4);
// dt = dt.toJSON().split('T')[0];
// dt2 = dt2.toJSON().split('T')[0];

// let tb = 'Eliaso';
// let str = `SELECT *
//           FROM \`sandbox-ce2c5.fixationdata.${tb}\`
//           WHERE timestamp BETWEEN '${dt}' AND '${dt2}'
//           ORDER BY timestamp ASC`;

// console.log(str);

// bqQuery(str).then(ret => {
//   console.log('return query', ret);
// }).catch(error => {
//   console.error('error', error);
// })

// listTables('fixationdata').then(tables => {
//   console.log('tables', tables);
// }).catch(error => {
//   console.error('error', error);
// })



// async function listD() {
//   let returned = await bqListDatasets();
//   console.log('datasets', returned);
// }

// listD();

// async function listT() {
//   let returned = await listTables('fixationdata');
//   console.log(returned.data);
// }

// listT();

// let navigator = window.navigator;

// let sBrowser, sUsrAg = navigator.userAgent;
// console.log('sBrowser', sBrowser);
// console.log('sUsrAg', sUsrAg);

let ed = [];

for(let i = 0; i < 20; i++) {
  ed.push({
    agent: 'PowerboostV2',
    timestamp: new Date(Date.now()).toJSON(),
    trial_num: 0,
    num_eyes: 2,
    left_x: Math.random(),
    left_y: Math.random(),
    left_aux_0: Math.random(),
    left_aux_1: Math.random(),
    right_x: Math.random(),
    right_y: Math.random(),
    right_aux_0: Math.random(),
    right_aux_1: Math.random()
  });
}

bqInsertEyeData(ed);