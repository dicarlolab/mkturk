import * as T from "./Interfaces"; 

export class ENV implements T.ENV{
  public ResearcherDisplayName: string;
  public ResearcherEmail: string;
  public ResearcherID: string;
  public USBDeviceType: string;
  public USBDeviceName: string;
  public Subject: string;
  public AgentRFID: string;
  public CurrentDate: Date;
  public ImageHeightPixels: number;
  public ImageWidthPixels: number;
  public CanvasRatio: number;
  public DevicePixelRatio: number;
  public FixationRadius: number;
  public FixationColor: string;
  public ChoiceRadius: number;
  public ChoiceColor: string;
  public XGridCenter: number[];
  public YGridCenter: number[];
  public RewardDuration: number;
  public ParamFileName: string;
  public ParamFileRev: string;
  public ParamFileDate: string;
  public DataFileName: string;
  public FirestoreDocRoot: string;
  public CurrentAutomatorStageName: string;
  public MinPercentCriterion: number;
  public MinTrialsCriterion: number;

  public WebBluetoothAvailable: number;
  public WebUSBAvailable: number;
  public BatteryAPIAvailable: number;
  public OffscreenCanvasAvailable: number;

  public UserAgent: string;
  public DeviceType: string;
  public DeviceBrand: string;
  public DeviceName: string;
  public DeviceScreenWidth: any; // maybe number or string not sure yet
  public DeviceScreenHeight: any; // maybe number or string not sure yet
  public DeviceGPU: string;
  public DeviceBrowserName: string;
  public DeviceBrowserVersion: string;
  public DeviceOSName: string;
  public DeviceOSCodename: string;
  public DeviceOSVersion: string;
  public DeviceTouchscreen: string;

  public ScreenRatio: number;
  public ScreenSizePixels: number[];
  public ScreenSizeInches: number[];
  public ViewportPixels: number[];

  public ViewportPPI: number;
  public PhysicalPPI: number;

  public Task: string;
  public FixationScale: number;
  public SampleScale: number;
  public TestScale: number;
  public ChoiceScale: number;

  public Eye: T.Eye;

  public SubjectList: string[];
  public DataSavePath: string;
  public ParamDirPath: string;
  public SoundFilePrefix: string;
  public FirestoreCollection: {
    data: string,
    devices: string,
    agents: string,
    calibration: string
  };

  public NDataFiles2Read: number;


  constructor() {
    this.SubjectList = [
      'Eliaso','Youno', 'Sophieo', 'Hectoro', 'Ericao', 'Alexo', 'West',
      'Waffles', 'Sausage', 'Rafiki', 'Hutch', 'Eggo', 'East', 'Bloo',
      'Blintz', 'Blaise', 'Athena', 'AJ', 'You-Nah', 'Tahereh', 'Sophie',
      'Hector', 'Erica', 'Elias', 'Andrea', 'Alex'
    ];
    this.DataSavePath = '/mkturkfiles/datafiles/';
    this.ParamDirPath = '/mkturkfiles/parameterfiles/subjects/';
    this.SoundFilePrefix = '/mkturkfiles/sounds/au';
    this.FirestoreCollection = {
      data: 'mkturkdata',
      devices: 'devices',
      agents: 'marmosets',
      calibration: 'eyecalibrations'
    };
    this.NDataFiles2Read = 5;
  }

  public init() {
    this.ResearcherDisplayName = '';
    this.ResearcherEmail = '';
    this.ResearcherID = '';
    this.USBDeviceType = '';
    this.USBDeviceName = '';
    this.Subject = '';
    this.AgentRFID = '';
    this.CurrentDate = new Date();
    this.ImageHeightPixels = NaN;
    this.ImageWidthPixels = NaN;
    this.CanvasRatio = 1;
    this.DevicePixelRatio = 1;
    this.FixationRadius = 0;
    this.FixationColor = '';
    this.ChoiceRadius = 0;
    this.ChoiceColor = 'white';
    this.XGridCenter = [];
    this.YGridCenter = [];
    this.RewardDuration = NaN;
    this.ParamFileName = '';
    this.ParamFileRev = '';
    this.ParamFileDate = '';
    this.DataFileName = '';
    this.FirestoreDocRoot = '';
    this.CurrentAutomatorStageName = '';
    this.MinPercentCriterion = -1;
    this.MinTrialsCriterion = -1;

    this.WebBluetoothAvailable = 0;
    this.WebUSBAvailable = 0;
    this.BatteryAPIAvailable = 0;
    this.OffscreenCanvasAvailable = 0;

    // TODO: figure out best way to initialize device info
    this.UserAgent = '';
    this.DeviceType = '';
    this.DeviceBrand = '';
    this.DeviceScreenWidth = '';
    this.DeviceScreenHeight = '';
    this.DeviceGPU = '';
    this.DeviceBrowserName = '';
    this.DeviceBrowserVersion = '';
    this.DeviceOSName = '';
    this.DeviceOSCodename = '';
    this.DeviceOSVersion = '';
    this.DeviceTouchscreen = '';

    this.ScreenRatio = -1;
    this.ScreenSizePixels = [-1, -1];
    this.ScreenSizeInches = [-1, -1, -1];
    this.ViewportPixels = [-1, -1];

    this.ViewportPPI = -1;
    this.PhysicalPPI = -1;

    this.Task = '';

    this.FixationScale = -1;
    this.SampleScale = -1;
    this.TestScale = -1;
    this.ChoiceScale = -1;

    // Raw USB stream
    this.Eye = {
      // Raw USB stream
      Time: [],
      N: 0,

      // Eye states
      EventType: 'eyestart',
      timeOfLastGlanceInBB: -1,
      BlinkGracePeriod: 200,

      // Calibration
      Calibration: 0,
      CalibXTransform: [],
      CalibYTransform: [],
      CalibType: 'default',
      NCalibPointsTrain: 0,
      NCalibPointsTest: 0,
      CalibTrainMSE: [],
      CalibTestMSE: []
    };
  
  }
}

export class FLAGS implements T.FLAGS {
  public consecutivehits: number;
  public need2loadImagesTrialQueue: number;
  public need2loadScenes: number;
  public scene3d: number;
  public need2loadParameters: number;
  public need2writeParameters: number;
  public savedata: number;
  public stage: number;
  public imagesPresent: number;
  public stickyresponse: number;
  public sampleblockcount: number;

  public waitingforTouches: number;
  public touchduration: number;
  public punishOutsideTouch: number;
  public acquiredTouch: number;
  public touchGeneratorCreated: number;
  public runPump: number;
  public firestorecreatedoc: number;
  public firestorelastsavedtrial: number;
  public firestoretimeron: number;
  public stressTest: number;
  public RFIDGeneratorCreated: number;
  public purge: boolean;
  constructor() {
  }

  public init() {
    this.consecutivehits = 0;
    this.need2loadImagesTrialQueue = 1;
    this.need2loadScenes = 1;
    this.scene3d = 0;
    this.need2loadParameters = 1;
    this.need2writeParameters = 0;
    this.savedata = 0;
    this.stage = 0;
    this.imagesPresent = 0;
    this.stickyresponse = 0;
    this.sampleblockcount = 0;

    this.waitingforTouches = 0;
    this.touchduration = -1;
    this.punishOutsideTouch = -1;
    this.acquiredTouch = 0;
    this.touchGeneratorCreated = 0;
    this.runPump = 0;
    this.firestorecreatedoc = 0;
    this.firestorelastsavedtrial = 0;
    this.firestoretimeron = 0;
    this.stressTest = 0;
    this.RFIDGeneratorCreated = 0;
    this.purge = false;
  }
}

export class CANVAS implements T.CANVAS {
  public names: string[];
  public front: string;
  public sequenceblank: string[];
  public tsequenceblank: number[];
  public sequencepre: string[];
  public tsequencepre: number[];
  public sequence: string[];
  public tsequence: number[]; // initiated as NaN in mkturk_globalvariables.js
  public sequencepost: string[];
  public tsequencepost: number[];
  public headsupfraction: number;
  public offsetleft: number;
  public offsettop: number;

  constructor () {

  }

  public init() {
    this.names = [
      'blank', 'sample', 'test', 'touchfix', 'eyefix', 'reward', 'photoreward',
      'punish', 'choice'
    ];
    this.front = 'blank';
    this.sequenceblank = ['blank', 'blank'];
    this.tsequenceblank = [0, 50];
    this.sequencepre = ['touchfix'];
    this.tsequencepre = [0];
    this.sequence = ['blank', 'sample', 'blank', 'test'];
    this.tsequence = [NaN];
    this.sequencepost = ['blank', 'reward', 'blank'];
    this.tsequencepost = [0, 50, 100];
    this.headsupfraction = NaN;
    this.offsetleft = 0;
    this.offsettop = 0;
  }
}

export class CURRTRIAL implements T.CURRTRIAL {
  public num: number;
  public starttime: number;
  public fixationgridindex: number;
  public fixationxyt: number[];
  public allfixationxyt: number[];
  public sampleindex: number;
  public sampleimage: any[]; // don't know exact type yet; maybe string[]
  public testindices: any; // don't know exact type yet; maybe number[], or just number
  public testimages: any[]; // don't know exact type yet; maybe string[]
  public responsexyt: any[]; // don't know exact type yet
  public response: any[]; // don't know exact type yet
  public correctitem: number;
  public correct: any[]; // don't know exact type yet
  public nreward: number;
  public fixationtouchevent: string;
  public responsetouchevent: string;
  public lastTrialCompleted: Date;
  public lastFirebaseSave: Date;
  public tsequenceactual: number[]; // don't know exact type yet
  public tsequencedesired: number[]; // don't know exact type yet
  public xyt: any[]; // don't know exact type yet

  public sampleobjectty: number[];
  public sampleobjecttz: number[];
  public sampleobjectrxy: number[];
  public sampleobjectrxz: number[];
  public sampleobjectryz: number[];
  public sampleobjectscale: number[];

  public testobjectty: any[];
  public testobjecttz: any[];
  public testobjectrxy: any[];
  public testobjectrxz: any[];
  public testobjectryz: any[];
  public testobjectscale: any[];

  // need to check types for all these; are they number or string ?
  public sample_scenebag_label: any;
  public sample_scenebag_index: any;
  public test_scenebag_labels: any;
  public test_scenebag_indices: any;

  constructor() {

  }

  public init() {
    this.num = 0;
    this.starttime = NaN; 
    this.fixationgridindex = NaN; 
    this.fixationxyt = [];
    this.allfixationxyt = [];
    this.sampleindex = NaN;
    this.sampleimage = [];
    this.testindices = NaN;
    this.testimages = [];
    this.responsexyt = []; 
    this.response = []; 
    this.correctitem = NaN;
    this.correct = [];
    this.nreward = NaN;
    this.fixationtouchevent = '';
    this.responsetouchevent = '';
    this.lastTrialCompleted = new Date();
    this.lastFirebaseSave = new Date();
    this.tsequenceactual = [];
    this.tsequencedesired = [];
    this.xyt = [];;

    this.sampleobjectty = [];
    this.sampleobjecttz = [];
    this.sampleobjectrxy = [];
    this.sampleobjectrxz = [];
    this.sampleobjectryz = [];
    this.sampleobjectscale = [];

    this.testobjectty = [];
    this.testobjecttz = [];
    this.testobjectrxy = [];
    this.testobjectrxz = [];
    this.testobjectryz = [];
    this.testobjectscale = [];

    this.sample_scenebag_label = NaN;
    this.sample_scenebag_index = NaN;
    this.test_scenebag_labels = NaN;
    this.test_scenebag_indices = NaN;
  }
}

export class EVENTS implements T.EVENTS {
  public trialnum: number;
  public trialseries: T.trialseries;
  public timeseries: T.timeseries;
  public imageseries: T.imageseries;

  constructor() {

  }

  public reset(currTrialNum: number) {
    this.trialnum = currTrialNum;
    this.trialseries = {
      Sample: {},
      Test: {},
      CorrectItem: {},
      FixationGridIndex: {},
      StartTime: {},
      FixationTouchEvent: {},
      FixationXYT: {},
      Response: {},
      TSequenceDesired: {},
      TSequenceActual: {},
      ResponseTouchEvent: {},
      ResponseXYT: {},
      NReward: {},
      BatteryLDT: {},
      BLEBatteryLT: {},
    };

    this.timeseries = {
      RFIDTag: {},
      Weight: {},
      EyeData: {}
    };

    this.imageseries = {
      SampleObjectTy: {},
      SampleObjectTz: {},
      SampleObjectRxy: {},
      SampleObjectRxz: {},
      SampleObjectRyz: {},
      SampleObjectScale: {},
      TestObjectTy: {},
      TestObjectTz: {},
      TestObjectRxy: {},
      TestObjectRxz: {},
      TestObjectRyz: {},
      TestObjectScale: {}
    };
  }

  public log(evName: string, evVal: any[], evType: string, TRIAL: TRIAL, ENV: ENV, FLAGS: FLAGS) {
    if (evType == 'trialseries' || evType == 'imageseries') {
      let evIdx: number = NaN;
      if (evName == 'BatteryLDT') {
        evIdx = TRIAL.BatteryLDT.length - 1;
      } else if (evName == 'BLEBatteryLT') {
        // evIdx = blescale.tbattery.length - 1;
      }

      if (FLAGS.savedata == 0) {
        evIdx = 0; // store most recent trial in first position until start saving data
      }

      if (typeof(evVal) == 'number' || typeof(evVal) == 'string'
        || evVal.length == 1) {
          if (!Array.isArray(this[evType][evName])) {
            this[evType][evName] = [];
          }
          this[evType][evName][evIdx] = evVal;
      }
      else if (typeof(evVal) == 'object'){
        for (let i = 0; i < evVal.length; i++) {
          if (typeof(this[evType][evName][i]) == 'undefined') {
            this[evType][evName][i] = [];
          }
          this[evType][evName][i][evIdx] = evVal[i];
        }
      }
    }
    else if (evType == 'timeseries') {
      let evIdx: number;
      if (FLAGS.savedata == 0) {
        evIdx = 0;
      }
      evIdx = Object.keys(this[evType][evName]).length;

      let trialtime = [this.trialnum, Date.now() - ENV.CurrentDate.valueOf()];
      this[evType][evName][evIdx] = trialtime.concat(evVal);
    }
  }

}


export class TRIAL implements T.TRIAL {
  public StartTime: any[];
  public FixationGridIndex: any[];
  public FixationXYT: any[];
  public AllFixationXYT: any[];
  public Sample: any[];
  public Test: any[];
  public ResponseXYT: any[];
  public Response: any[];
  public CorrectItem: any[];
  public FixationTouchEvent: any[];
  public ResponseTouchEvent: any[];
  public NReward: any[];
  public AutomatorStage: any[];
  public TSequenceDesired: any[];
  public TSequenceActual: any[];
  public RFIDTag: any[];
  public RFIDTime: any[];
  public RFIDTrial: any[];
  public NRFID: number;
  public Weight: number[];
  public WeightTime: any[];
  public WeightTrial: any[];
  public NWeights: number;
  public BatteryLDT: any[];

  public SampleObjectTy: any[];
  public SampleObjectTz: any[];
  public SampleObjectRxy: any[];
  public SampleObjectRxz: any[];
  public SampleObjectRyz: any[];
  public SampleObjectScale: any[];

  public TestObjectTy: any[];
  public TestObjectTz: any[];
  public TestObjectRxy: any[];
  public TestObjectRxz: any[];
  public TestObjectRyz: any[];
  public TestObjectScale: any[];

  constructor() {

  }

  public reset(ENV: ENV, FLAGS: FLAGS) {
    this.StartTime = [];
    this.FixationGridIndex = [];
    this.FixationXYT = [];
    this.AllFixationXYT = [];
    this.Sample = [];
    this.Test = [];
    this.ResponseXYT = [];
    this.Response = [];
    this.CorrectItem = [];
    this.FixationTouchEvent = [];
    this.ResponseTouchEvent = [];
    this.NReward = [];
    this.AutomatorStage = [];
    this.TSequenceDesired = [];
    this.TSequenceActual = [];
    this.RFIDTag = [];
    this.RFIDTime = [];
    this.RFIDTrial = [];
    this.NRFID = 0;
    this.Weight = [];
    this.WeightTime = [];
    this.WeightTrial = [];
    this.NWeights = 0;
    this.BatteryLDT = [];

    let navigator: any = window.navigator;
    if ('getBattery' in navigator) {
      navigator.getBattery().then((batteryObj: any) => {
        this.BatteryLDT.push([
          batteryObj.level,
          batteryObj.dischargingTime,
          Date.now() - ENV.CurrentDate.valueOf()
        ]);
        //logEVENTS('BatteryLDT', this.BatteryLDT[this.BatteryLDT.length-1], 'timeseries');
      });
    }

    if (typeof(FLAGS) != 'undefined' && FLAGS.scene3d == 0) {
      this.SampleObjectTy = [];
      this.SampleObjectTz = [];
      this.SampleObjectRxy = [];
      this.SampleObjectRxz = [];
      this.SampleObjectRyz = [];
      this.SampleObjectScale = [];

      this.TestObjectTy = [];
      this.TestObjectTz = [];
      this.TestObjectRxy = [];
      this.TestObjectRxz = [];
      this.TestObjectRyz = [];
      this.TestObjectScale = [];
    }

    return this;
  }

  public update(CURRTRIAL: CURRTRIAL, TASK: TASK, FLAGS: FLAGS) {
    this.StartTime[CURRTRIAL.num] = CURRTRIAL.starttime;
    this.FixationGridIndex[CURRTRIAL.num] = CURRTRIAL.fixationgridindex;
    this.FixationXYT[CURRTRIAL.num] = CURRTRIAL.fixationxyt;
    this.AllFixationXYT[CURRTRIAL.num] = CURRTRIAL.allfixationxyt;
    this.Sample[CURRTRIAL.num] = CURRTRIAL.sampleindex;
    this.Test[CURRTRIAL.num] = CURRTRIAL.testindices;
    this.ResponseXYT[CURRTRIAL.num] = CURRTRIAL.responsexyt;
    this.Response[CURRTRIAL.num] = CURRTRIAL.response;
    this.FixationTouchEvent[CURRTRIAL.num] = CURRTRIAL.fixationtouchevent;
    this.ResponseTouchEvent[CURRTRIAL.num] = CURRTRIAL.responsetouchevent;
    this.CorrectItem[CURRTRIAL.num] = CURRTRIAL.correctitem;
    this.NReward[CURRTRIAL.num] = CURRTRIAL.nreward;
    this.AutomatorStage[CURRTRIAL.num] = TASK.CurrentAutomatorStage;
    this.TSequenceDesired[CURRTRIAL.num] = CURRTRIAL.tsequencedesired;
    this.TSequenceActual[CURRTRIAL.num] = CURRTRIAL.tsequenceactual;

    if (FLAGS.scene3d == 0) {
      this.SampleObjectTy[CURRTRIAL.num] = CURRTRIAL.sampleobjectty;
      this.SampleObjectTz[CURRTRIAL.num] = CURRTRIAL.sampleobjecttz;
      this.SampleObjectRxy[CURRTRIAL.num] = CURRTRIAL.sampleobjectrxy;
      this.SampleObjectRxz[CURRTRIAL.num] = CURRTRIAL.sampleobjectrxz;
      this.SampleObjectRyz[CURRTRIAL.num] = CURRTRIAL.sampleobjectryz;
      this.SampleObjectScale[CURRTRIAL.num] = CURRTRIAL.sampleobjectscale;

      this.TestObjectTy[CURRTRIAL.num] = CURRTRIAL.testobjectty;
      this.TestObjectTz[CURRTRIAL.num] = CURRTRIAL.testobjecttz;
      this.TestObjectRxy[CURRTRIAL.num] = CURRTRIAL.testobjectrxy;
      this.TestObjectRxz[CURRTRIAL.num] = CURRTRIAL.testobjectrxz;
      this.TestObjectRyz[CURRTRIAL.num] = CURRTRIAL.testobjectryz;
      this.TestObjectScale[CURRTRIAL.num] = CURRTRIAL.testobjectscale;
    }
  }
}

export class TASK {
  public Automator: boolean;
  public AutomatorFilePath: string;
  public BackgroundColor2D: string;
  public CheckRFID: number;
  public ChoiceGridIndex: any[];
  public ChoiceScale: number;
  public ChoiceSizeInches: number;
  public ChoiceTimeOut: number;
  public ConsecutiveHitsITI: number;
  public CurrentAutomatorStage: number;
  public FixationDuration: number;
  public FixationMove: number;
  public FixationScale: number;
  public FixationSizeInches: number;
  public FixationTimeOut: number;
  public FixationUsesSample: number;
  public GridSpacingInches: number;
  public HideChoiceDistractors: boolean;
  public HideTestDistractors: boolean;
  public Homecage: number;
  public ImageBagsSample: any[];
  public ImageBagsTest: any[];
  public ImageRewardsList: any[];
  public InterTrialInterval: number;
  public KeepSampleON: boolean;
  public KeepTestON: boolean;
  public Liquid: number;
  public NConsecutiveHitsforBonus: number;
  public NFixations: number;
  public NGridPoints: number;
  public NRewardMax: number;
  public NStickyResponse: number;
  public ObjectGridIndex: any[];
  public Pump: number;
  public PunishTimeOut: number;
  public RewardPer1000Trials: number;
  public RewardStage: number;
  public SampleGridIndex: number;
  public SamplingStrategy: string;
  public SampleON: number;
  public SampleOFF: number;
  public SampleScale: number;
  public SampleSizeInches: number;
  public Separated: boolean;
  public Species: string;
  public StaticFixationGridIndex: number;
  public TestGridIndex: any[];
  public TestON: number;
  public TestOFF: number;
  public TestScale: number;
  public TestSizeImages: number;
  public Weight: number;

  constructor() {

  }
}

export class TrialHistory {
  public trainingstage: any[];
  public starttime: any[];
  public response: any[];
  public correct: any[];

  constructor() {
    this.trainingstage = [];
    this.starttime = [];
    this.response = [];
    this.correct = [];
  }

  public update(CURRTRIAL: CURRTRIAL, TASK: TASK, stageHash: any) {
    let current_stage = stageHash(TASK);
    this.trainingstage.push(current_stage);
    this.starttime.push(CURRTRIAL.starttime);
    this.response.push(CURRTRIAL.response);
    this.correct.push(CURRTRIAL.correct);
  }
}