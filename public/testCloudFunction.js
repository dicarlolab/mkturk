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

async function deviceDetect() {
  let navigator = window.navigator;
  let canvas = document.createElement('canvas');
  let gl, debugInfo, vendor, renderer;

  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (e) {
    console.error('WebGL Context Error:', e);
    return;
  }
  if (gl) {
    debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
  }
  let deviceInfo = await detectDevice(navigator.userAgent);
  deviceInfo.data.gpu = {};
  deviceInfo.data.gpu.vendor = vendor;
  deviceInfo.data.gpu.renderer = renderer;
  console.log(deviceInfo);


  let devInfoDiv = document.querySelector('#dev-info');
  devInfoDiv.style.display = 'block';

  let client = document.createElement('span');
  client.textContent = 'Client';

  let clientType = document.createElement('span');
  clientType.textContent = 'type' + deviceInfo.data.client.type;
  let clientName = document.createElement('span');
  clientName.textContent = deviceInfo.data.client.name;
  let clientVersion = document.createElement('span');
  clientVersion.textContent = deviceInfo.data.client.version;
  let clientEngine = document.createElement('span');
  clientEngine.textContent = deviceInfo.data.client.engine;
  let clientEngineVersion = document.createElement('span');
  clientEngineVersion.textContent = deviceInfo.data.client.engineVersion;

  devInfoDiv.appendChild(clientType);
  devInfoDiv.appendChild(clientName);
  devInfoDiv.appendChild(clientVersion);
  devInfoDiv.appendChild(clientEngine);
  devInfoDiv.appendChild(clientEngineVersion);

  let nodes = document.getElementById('dev-info').childNodes;
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].style.display = 'block';
  }

  console.log(nodes);





  // return deviceInfo;
}
deviceDetect();

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