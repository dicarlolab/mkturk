const db = firebase.firestore();

document.querySelector('#init-btn');

let initBtn = document.querySelector('#init-btn');
initBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  addData();
});

const pixelC = {
  docname: 'pixel c',
  viewportPixels: [
    1280,
    900
  ],
  gpurenderer: 'nvidia tegra',
  screenRatio: 2,
  model: 'pixel c',
  screenSizeInches: [
    8.34,
    5.87,
    10.2
  ],
  ppi: 308,
  gpuvendor: 'nvidia corporation',
  bodySizeInches: [
    9.53,
    7.05,
    0.276
  ],
  screenPhysicalPixels: [
    2560,
    1800
  ],
  type: 'tablet',
  batterymAh: 9240,
  brand: 'google',
  weightOunces: 18.24
};

const pixel4XL = {
  ppi: 537,
  docname: 'pixel 4 xl',
  weightOunces: 6.81,
  screenSizeInches: [
    5.69,
    2.7,
    6.3
  ],
  viewportPixels: [
    869,
    411
  ],
  model: 'pixel 4 xl',
  batterymAh: 3700,
  brand: 'google',
  screenPhysicalPixels: [
    3040,
    1440
  ],
  gpuvendor: 'nvidia corporation',
  type: 'phone',
  gpurenderer: 'nvidia tegra',
  bodySizeInches: [
    6.3,
    2.9,
    0.3
  ],
  screenRatio: 3.5
};

const pixel4 = {
  docname: 'pixel 4',
  viewportPixels: [
    869,
    411
  ],
  batterymAh: 2800,
  model: 'pixel 4',
  screenRatio: 2.625,
  weightOunces: 5.71,
  bodySizeInches: [
    5.7,
    2.7,
    0.3
  ],
  brand: 'google',
  ppi: 444,
  screenPhysicalPixels: [
    2280,
    1080
  ],
  screenSizeInches: [
    5.15,
    2.44,
    5.7
  ],
  gpurenderer: 'nvidia tegra',
  gpuvendor: 'nvidia corporation',
  type: 'phone'
};

const pixel3 = {
  type: 'phone',
  viewportPixels: [
    640,
    320
  ],
  screenRatio: 2.625,
  screenPhysicalPixels: [
    2160,
    1080
  ],
  batterymAh: 2915,
  docname: 'pixel 3',
  ppi: 443,
  screenSizeInches: [
    4.92,
    2.46,
    5.5
  ],
  bodySizeInches: [
    5.73,
    2.69,
    0.3
  ],
  weightOunces: 5.22,
  brand: 'google',
  model: 'pixel 3'
};

const iphone6sPlus = {
  docname: "iphone 6s plus",
  model: "iphone 6s plus",
  brand: "apple",
  screenPhysicalPixels: [
   1920,
   1080
  ],
  ppi: 401,
  bodySizeInches: [
   6.23,
   3.07,
   0.29
  ],
  weightOunces: 6.77,
  viewportPixels: [
   736,
   414
  ],
  screenRatio: 3,
  type: "phone",
  screenSizeInches: [
   4.79,
   2.69,
   5.5
  ],
  batterymAh: 2915
};

const galaxyTab92 = {
 batterymAh: 5870,
 screenSizeInches: [
  7.76,
  5.82,
  9.7
 ],
 screenPhysicalPixels: [
  2048,
  1536
 ],
 type: "tablet",
 docname: "galaxy tab s2 9.7",
 brand: "samsung",
 ppi: 263.92,
 weightOunces: 13.72,
 screenRatio: 2,
 bodySizeInches: [
  9.34,
  6.65,
  0.22
 ],
 viewportPixels: [
  1024,
  768
 ],
 model: "galaxy tab s2 9.7"
};

const galaxyTab92_2016 = {
  "batterymAh": 5870,
  "ppi": 263.92,
  "screenPhysicalPixels": [
   2048,
   1536
  ],
  "screenSizeInches": [
   7.76,
   5.82,
   9.7
  ],
  "brand": "samsung",
  "model": "galaxy tab s2 9.7 (2016)",
  "screenRatio": 2,
  "docname": "galaxy tab s2 9.7 (2016)",
  "type": "tablet",
  "bodySizeInches": [
   9.34,
   6.65,
   0.22
  ],
  "viewportPixels": [
   1024,
   768
  ],
  "weightOunces": 13.72
};

const lg32ul = {
  weightOunces: 198.4,
  type: "monitor",
  model: "32ul750",
  viewportPixels: [
   3840,
   2160
  ],
  docname: "lg32ul750",
  brand: "lg",
  bodySizeInches: [
   28.7,
   16.7,
   1.96
  ],
  screenSizeInches: [
   27.9,
   15.69,
   32
  ],
  batterymAh: 0,
  ppi: 137.7,
  screenSizeInches: [
   3840,
   2160
  ],
  screenRatio: 1
};

const mkturkdata = {
  "ConsecutiveHitsITI": 8000,
  "tsequencepre": [
   0
  ],
  "ViewportPPI": 152.64875721817725,
  "DeviceGPU": "Adreno (TM) 640",
  "offsetleft": 0,
  "FixationDotSizeInches": 0,
  "CurrentAutomatorStage": 2,
  "Response": [
   1,
   0,
   1,
   0,
   1,
   0,
   0,
   0,
   1,
   0,
   0
  ],
  "ImageBagsSample": [
   "/mkturkfiles/scenebags/objectome3d/camel/20200902_camel_token_training_0_8_dur500ms.js",
   "/mkturkfiles/scenebags/objectome3d/wrench/20200902_wrench_token_training_0_8_dur500ms.js"
  ],
  "Doctype": "task",
  "SampleFixationTouchEvent": [
   "",
   "",
   "",
   "",
   "",
   "",
   "",
   "",
   "",
   "",
   ""
  ],
  "ObjectGridIndex": [
   22,
   58
  ],
  "TestOFF": -1,
  "DeviceOSCodename": "",
  "SameDifferent": 0,
  "FixationRadius": 61.0595028872709,
  "KeepSampleON": 1,
  "Sample": {
   "0": [
    1,
    0,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0
   ]
  },
  "ImageBagsTest": [
   "/mkturkfiles/scenebags/objectome3d/camel/20200902_camel_token_training_0_8_dur500ms.js",
   "/mkturkfiles/scenebags/objectome3d/wrench/20200902_wrench_token_training_0_8_dur500ms.js"
  ],
  "CalibrateEye": 0,
  "DeviceName": "Pixel 4 XL",
  "NGridPoints": 9,
  "StartTime": [
   0,
   2823,
   5718,
   7868,
   11247,
   13606,
   16372,
   18619,
   21179,
   25440,
   27503,
   29985
  ],
  "NRSVP": 0,
  "Homecage": 1,
  "UserAgent": "Mozilla/5.0 (Linux; Android 10; Pixel 4 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Mobile Safari/537.36",
  "DevicePixelRatio": 3.5,
  "SampleOFF": 0,
  "Pump": 6,
  "DeviceScreenHeight": 412,
  "USBDeviceType": "",
  "XGridCenter": [
   190,
   190,
   190,
   190,
   190,
   190,
   190,
   190,
   190,
   251,
   251,
   251,
   251,
   251,
   251,
   251,
   251,
   251,
   312,
   312,
   312,
   312,
   312,
   312,
   312,
   312,
   312,
   373,
   373,
   373,
   373,
   373,
   373,
   373,
   373,
   373,
   435,
   435,
   435,
   435,
   435,
   435,
   435,
   435,
   435,
   496,
   496,
   496,
   496,
   496,
   496,
   496,
   496,
   496,
   557,
   557,
   557,
   557,
   557,
   557,
   557,
   557,
   557,
   618,
   618,
   618,
   618,
   618,
   618,
   618,
   618,
   618,
   679,
   679,
   679,
   679,
   679,
   679,
   679,
   679,
   679
  ],
  "DeviceType": "smartphone",
  "FirestoreDocRoot": "2020-10-02T05:11:23_Hectoro",
  "MinPercentCriterion": 75,
  "sequenceblank": [
   "Blank",
   "Blank"
  ],
  "ChoiceSizeInches": 0.31,
  "RewardDuration": 0.20554363636363635,
  "TestGridIndex": [
   22,
   58
  ],
  "ParamFileName": "/mkturkfiles/parameterfiles/subjects/Hectoro_params.json",
  "InterTrialInterval": 0,
  "WebUSBAvailable": 1,
  "SamplingStrategy": "uniform_with_replacement",
  "NFixations": 1,
  "CurrentAutomatorStageName": "touchsample_then_choose_keepsampleon",
  "BackgroundColor2D": "#777777",
  "ScreenRatio": 3.5,
  "Eye": {
   "CalibTestMSE": [],
   "CalibTrainMSE": [],
   "BlinkGracePeriod": 200,
   "CalibXTransform": [],
   "NCalibPointsTrain": 0,
   "calibration": 0,
   "NCalibPointsTest": 0,
   "timeOfLastGlanceInBB": -1,
   "EventType": "eyestart",
   "CalibType": "default",
   "CalibYTransform": []
  },
  "CheckRFID": 0,
  "ResearcherID": "4YRo1vkArubH4h9oTpvwqVaGpQu2",
  "FixationUsesSample": 1,
  "ChoiceColor": "white",
  "ScreenPhysicalPixels": [
   3040,
   1440
  ],
  "sequencepost": [
   "Blank",
   "reward",
   "Blank"
  ],
  "ThreeJSRenderRatio": 3.5,
  "CurrentDateValue": 1601615483121,
  "Test": {
   "0": [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
   ],
   "1": [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
   ]
  },
  "NStickyResponse": 0,
  "OffscreenCanvasAvailable": 1,
  "BatteryAPIAvailable": 1,
  "PhysicalPPI": 537,
  "SampleGridIndex": [
   39,
   39,
   39,
   39,
   39,
   39,
   39,
   39,
   39,
   39,
   39
  ],
  "FixationTimeOut": 5000,
  "CurrentDate": firebase.firestore.Timestamp.fromDate(new Date("2020-10-02T05:11:23.121Z")),
  "GridXOffsetInches": 0,
  "DeviceScreenWidth": 869,
  "ViewportPixels": [
   868.5714285714286,
   411.42857142857144
  ],
  "GridYOffsetInches": 0,
  "HideTestDistractors": 0,
  "FixationXYT": {
   "0": [
    432.2857666015625,
    456.00006103515625,
    446.00006103515625,
    444.5714416503906,
    444.5714416503906,
    441.71429443359375,
    448.8572082519531,
    454.00006103515625,
    454.00006103515625,
    446.2857666015625,
    461.71429443359375
   ],
   "1": [
    175.14288330078125,
    169.42857360839844,
    161.71429443359375,
    181.42857360839844,
    172.5714569091797,
    179.71429443359375,
    157.42857360839844,
    162,
    156.85714721679688,
    156.2857208251953,
    154
   ],
   "2": [
    1182,
    3459,
    6068,
    8206,
    11687,
    13944,
    16417,
    19053,
    21629,
    25935,
    28016
   ]
  },
  "DeviceOSName": "Android",
  "DeviceBrowserVersion": "80.0",
  "CanvasRatio": 0.2857142857142857,
  "TSequenceDesiredClip": {
   "0": [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
   ],
   "1": [
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100
   ],
   "2": [
    584,
    584,
    584,
    584,
    584,
    584,
    584,
    584,
    584,
    584,
    584
   ]
  },
  "Automator": "training_sequence",
  "FixationSizeInches": 0.8,
  "NTrialsPerBagBlock": 0,
  "CorrectItem": [
   1,
   0,
   1,
   0,
   1,
   0,
   0,
   0,
   0,
   0,
   0
  ],
  "NRewardMax": 3,
  "RewardStage": 1,
  "FixationColor": "",
  "tsequenceblank": [
   0,
   50
  ],
  "FixationDuration": 0,
  "ScreenSizePixels": [
   -1,
   -1
  ],
  "FixationGridIndex": [
   39,
   39,
   39,
   39,
   39,
   39,
   39,
   39,
   39,
   39,
   39,
   39
  ],
  "FrameRateDisplay": 89.7674126338661,
  "WebBluetoothAvailable": 1,
  "DataFileName": "/mkturkfiles/datafiles/Hectoro/2020-10-02T05:11:23_Hectoro.json",
  "Battery": {
   "0": [
    0,
    "2020-10-02T05:11:23.122Z",
    0.56,
    null
   ]
  },
  "DeviceTouchscreen": 1,
  "USBDeviceName": "",
  "ResearcherEmail": "mkturkissa@gmail.com",
  "ResponseTouchEvent": [
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld"
  ],
  "ChoiceRadius": 23.660557368817475,
  "ScreenSizeInches": [
   5.69,
   2.7,
   6.3
  ],
  "Agent": "Hectoro",
  "Docname": "2020-10-02T05:11:23_Hectoro_task",
  "NReward": [
   1,
   1,
   1,
   2,
   2,
   2,
   2,
   3,
   0,
   1,
   1
  ],
  "workspace": [
   0,
   0,
   3041,
   934
  ],
  "AutomatorFilePath": "/mkturkfiles/parameterfiles/automators/training_sequence.json",
  "FixationWindowSizeInches": -1,
  "Liquid": 2,
  "SampleStartTime": [
   1183,
   3460,
   6069,
   8215,
   11692,
   13945,
   16420,
   19061,
   21635,
   25941,
   28022
  ],
  "AgentRFID": "XX",
  "YGridCenter": [
   -111,
   -50,
   11,
   72,
   134,
   195,
   256,
   317,
   378,
   -111,
   -50,
   11,
   72,
   134,
   195,
   256,
   317,
   378,
   -111,
   -50,
   11,
   72,
   134,
   195,
   256,
   317,
   378,
   -111,
   -50,
   11,
   72,
   134,
   195,
   256,
   317,
   378,
   -111,
   -50,
   11,
   72,
   134,
   195,
   256,
   317,
   378,
   -111,
   -50,
   11,
   72,
   134,
   195,
   256,
   317,
   378,
   -111,
   -50,
   11,
   72,
   134,
   195,
   256,
   317,
   378,
   -111,
   -50,
   11,
   72,
   134,
   195,
   256,
   317,
   378,
   -111,
   -50,
   11,
   72,
   134,
   195,
   256,
   317,
   378
  ],
  "ParamFileDate": firebase.firestore.Timestamp.fromDate(new Date("2020-10-02T05:11:19.575Z")),
  "SampleFixationXYT": {},
  "Subject": "Hectoro",
  "StageNTrials": 3,
  "Task": "SR",
  "offsettop": 101,
  "DeviceBrowserName": "Chrome Mobile",
  "DeviceOSVersion": "10.0",
  "DragtoRespond": 0,
  "NConsecutiveHitsforBonus": 4,
  "TSequenceActualClip": {
   "0": [
    11.13,
    11.14,
    11.14,
    11.15,
    11.15,
    11.15,
    11.14,
    11.15,
    11.15,
    11.15,
    11.15
   ],
   "1": [
    100.29,
    100.28,
    100.26,
    100.35,
    100.32,
    100.34,
    100.31,
    100.35,
    100.35,
    100.37,
    100.32
   ],
   "2": [
    679.67,
    601.7,
    601.82,
    601.85,
    601.93,
    602.08,
    601.9,
    601.61,
    601.74,
    601.62,
    601.85
   ]
  },
  "MinTrialsCriterion": 1000,
  "HideChoiceDistractors": 0,
  "Species": "marmoset",
  "FrameRateMovie": 44.88370631693305,
  "FixationDotRadius": 0,
  "Separated": 0,
  "FixationTouchEvent": [
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld",
   "theld"
  ],
  "RewardPer1000Trials": 12,
  "ChoiceGridIndex": [],
  "PunishTimeOut": 1500,
  "ResearcherDisplayName": "Issa Lab",
  "DeviceBrand": "Google",
  "Taskdoc": "2020-10-02T05:11:23_Hectoro_task",
  "tsequencepost": [
   0,
   50,
   255.54363636363635
  ],
  "headsupfraction": 0.2733333333333333,
  "FixationDotColor": "white",
  "StagePctCorrect": 100,
  "GridSpacingInches": 0.4,
  "ParamFileRev": "1601615479575573",
  "ChoiceTimeOut": 10000,
  "FixationWindowRadius": -76.32437860908863,
  "sequencepre": [
   "Touchfix"
  ],
  "ResponseXYT": {
   "0": [
    553.1429443359375,
    302.8571472167969,
    566,
    297.4285888671875,
    558.5714721679688,
    312,
    306.8571472167969,
    307.71429443359375,
    566.2858276367188,
    306.2857666015625,
    303.71429443359375
   ],
   "1": [
    240.2857208251953,
    212.2857208251953,
    231.14288330078125,
    215.71429443359375,
    234.2857208251953,
    210.00003051757812,
    214.85714721679688,
    206.85714721679688,
    261.1429138183594,
    215.42857360839844,
    209.14288330078125
   ],
   "2": [
    2348,
    5113,
    7395,
    10449,
    12828,
    15355,
    17876,
    20144,
    23760,
    27071,
    29547
   ]
  },
  "KeepTestON": 0
 };

const data = [
  pixelC,
  pixel4XL,
  pixel4,
  iphone6sPlus,
  galaxyTab92,
  galaxyTab92_2016,
  lg32ul
];

async function addData() {

  data.forEach(async doc => {
    await db.collection('devices').doc(doc.docname).set(doc);
  });
  db.collection('mkturkdata').doc('2020-10-02T05:11:23_Hectoro_task').set(mkturkdata)
  .then(() => {
    console.log('Done initializing Firestore collections and uploading data');
    let successDOM = document.createElement('p');
    successDOM.innerHTML = 'Firestore Collections Initialized & Data Uploaded <br />';
    successDOM.innerHTML += 'Please navigate to <a href="https://console.firebase.google.com">Firebase Cloud Firestore</a>';
    successDOM.innerHTML += ' to check that two collections {devices, mkturkdata} were created and that document(s) exist in'
    successDOM.innerHTML += ' both collections. Once you have verified, you can close this page.'
    let contentDiv = document.querySelector('.content');
    contentDiv.appendChild(successDOM);
  });

}

