import * as T from "./Interfaces"; 

export class Mkglobals {
  public ENV: T.ENV;
  public FLAGS: T.FLAGS;
  public CANVAS: T.CANVAS;
  public frame: T.frame;
  public CURRTRIAL: T.CURRTRIAL;
  public trialHist: T.trialhistory;
  public TRIAL: T.TRIAL;

  constructor() {
    this.initENV();
    this.initFLAGS();
    this.initCANVAS();
    this.initFrame();
    this.initCURRTRIAL();
    this.initTrialHistory();
  }

  private initENV() {
    this.ENV.ResearcherDisplayName = '';
    this.ENV.ResearcherEmail = '';
    this.ENV.ResearcherID = '';
    this.ENV.USBDeviceType = '';
    this.ENV.USBDeviceName = '';
    this.ENV.Subject = '';
    this.ENV.AgentRFID = '';
    this.ENV.CurrentDate = new Date();
    this.ENV.ImageHeightPixels = NaN;
    this.ENV.ImageWidthPixels = NaN;
    this.ENV.CanvasRatio = 1;
    this.ENV.DevicePixelRatio = 1;
    this.ENV.FixationRadius = 0;
    this.ENV.FixationColor = '';
    this.ENV.ChoiceRadius = 0;
    this.ENV.ChoiceColor = 'white';
    this.ENV.XGridCenter = [];
    this.ENV.YGridCenter = [];
    this.ENV.RewardDuration = NaN;
    this.ENV.ParamFileName = '';
    this.ENV.ParamFileRev = '';
    this.ENV.ParamFileDate = '';
    this.ENV.DataFileName = '';
    this.ENV.FirestoreDocRoot = '';
    this.ENV.CurrentAutomatorStageName = '';
    this.ENV.MinPercentCriterion = -1;
    this.ENV.MinTrialsCriterion = -1;

    this.ENV.WebBluetoothAvailable = 0;
    this.ENV.WebUSBAvailable = 0;
    this.ENV.BatteryAPIAvailable = 0;
    this.ENV.OffscreenCanvasAvailable = 0;

    // TODO: figure out best way to initialize device info
    this.ENV.UserAgent = '';
    this.ENV.DeviceType = '';
    this.ENV.DeviceBrand = '';
    this.ENV.DeviceScreenWidth = '';
    this.ENV.DeviceScreenHeight = '';
    this.ENV.DeviceGPU = '';
    this.ENV.DeviceBrowserName = '';
    this.ENV.DeviceBrowserVersion = '';
    this.ENV.DeviceOSName = '';
    this.ENV.DeviceOSCodename = '';
    this.ENV.DeviceOSVersion = '';
    this.ENV.DeviceTouchscreen = '';

    this.ENV.ScreenRatio = -1;
    this.ENV.ScreenSizePixels = [-1, -1];
    this.ENV.ScreenSizeInches = [-1, -1, -1];
    this.ENV.ViewportPixels = [-1, -1];

    this.ENV.ViewportPPI = -1;
    this.ENV.PhysicalPPI = -1;

    this.ENV.Task = '';

    this.ENV.FixationScale = -1;
    this.ENV.SampleScale = -1;
    this.ENV.TestScale = -1;
    this.ENV.ChoiceScale = -1;

    // Raw USB stream
    this.ENV.Eye.Time = [];
    this.ENV.Eye.N = 0;

    // Eye states
    this.ENV.Eye.EventType = 'eyestart';
    this.ENV.Eye.timeOfLastGlanceInBB = -1;
    this.ENV.Eye.BlinkGracePeriod = 200;

    // Calibration
    this.ENV.Eye.calibration = 0;
    this.ENV.Eye.CalibXTransform = [];
    this.ENV.Eye.CalibYTransform = [];
    this.ENV.Eye.CalibType = 'default';
    this.ENV.Eye.NCalibPointsTrain = 0;
    this.ENV.Eye.NCalibPointsTest = 0;
    this.ENV.Eye.CalibTrainMSE = [];
    this.ENV.Eye.CalibTestMSE = [];
  }

  private initFLAGS() {
    this.FLAGS.consecutivehits = 0;
    this.FLAGS.need2loadImagesTrialQueue = 1;
    this.FLAGS.need2loadScenes = 1;
    this.FLAGS.scene3d = 0;
    this.FLAGS.need2loadParameters = 1; 
    this.FLAGS.savedata = 0; 
    this.FLAGS.stage = 0; 
    this.FLAGS.imagesPresent = 0;
    this.FLAGS.stickyresponse = 0;

    this.FLAGS.waitingforTouches = 0;
    this.FLAGS.touchduration = -1;
    this.FLAGS.punishOutsideTouch = 0;
    this.FLAGS.acquiredTouch = 0;
    this.FLAGS.touchGeneratorCreated = 0;
    this.FLAGS.runPump = 0;
    this.FLAGS.firestorecreatedoc = 0;
    this.FLAGS.firestorelastsavedtrial = 0;
    this.FLAGS.firestoretimeron = 0;
    this.FLAGS.stressTest = 0;
    this.FLAGS.RFIDGeneratorCreated = 0;
  }

  private initCANVAS() {
    this.CANVAS.names = [
      'blank', 'sample', 'test', 'touchfix', 'eyefix', 'reward', 'photoreward',
      'punish', 'choice'
    ];
    this.CANVAS.front = 'blank';
    this.CANVAS.sequenceblank = ['blank', 'blank'];
    this.CANVAS.tsequenceblank = [0, 50];
    this.CANVAS.sequencepre = ['touchfix'];
    this.CANVAS.tsequencepre = [0];
    this.CANVAS.sequence = ['blank', 'sample', 'blank', 'test'];
    this.CANVAS.tsequence = []; // initialized as NaN but it seems to be an array of numbers
    this.CANVAS.sequencepost = ['blank', 'reward', 'blank'];
    this.CANVAS.tsequencepost = [0, 50, 100];
    this.CANVAS.headsupfraction = NaN;
    this.CANVAS.offsetleft = 0;
    this.CANVAS.offsettop = 0;
  }

  private initFrame() {
    this.frame.current = 0;
    this.frame.shown = [];
  }

  private initCURRTRIAL() {
    this.CURRTRIAL.num = 0;
    this.CURRTRIAL.starttime = NaN; 
    this.CURRTRIAL.fixationgridindex = NaN; 
    this.CURRTRIAL.fixationxyt = [];
    this.CURRTRIAL.allfixationxyt = [];
    this.CURRTRIAL.sampleindex = NaN;
    this.CURRTRIAL.sampleimage = [];
    this.CURRTRIAL.testindices = NaN;
    this.CURRTRIAL.testimages = [];
    this.CURRTRIAL.responsexyt = []; 
    this.CURRTRIAL.response = []; 
    this.CURRTRIAL.correctitem = NaN;
    this.CURRTRIAL.correct = [];
    this.CURRTRIAL.nreward = NaN;
    this.CURRTRIAL.fixationtouchevent = '';
    this.CURRTRIAL.responsetouchevent = '';
    this.CURRTRIAL.lastTrialCompleted = new Date();
    this.CURRTRIAL.lastFirebaseSave = new Date();
    this.CURRTRIAL.tsequenceactual = [];
    this.CURRTRIAL.tsequencedesired = [];
    this.CURRTRIAL.xyt = [];;

    this.CURRTRIAL.sampleobjectty = [];
    this.CURRTRIAL.sampleobjecttz = [];
    this.CURRTRIAL.sampleobjectrxy = [];
    this.CURRTRIAL.sampleobjectrxz = [];
    this.CURRTRIAL.sampleobjectryz = [];
    this.CURRTRIAL.sampleobjectscale = [];

    this.CURRTRIAL.testobjectty = [];
    this.CURRTRIAL.testobjecttz = [];
    this.CURRTRIAL.testobjectrxy = [];
    this.CURRTRIAL.testobjectrxz = [];
    this.CURRTRIAL.testobjectryz = [];
    this.CURRTRIAL.testobjectscale = [];

    this.CURRTRIAL.sample_scenebag_label = NaN;
    this.CURRTRIAL.sample_scenebag_index = NaN;
    this.CURRTRIAL.test_scenebag_labels = NaN;
    this.CURRTRIAL.test_scenebag_indices = NaN;
  }

  // TODO: initEVENTS()

  private initTrialHistory() {
    this.trialHist.trainingstage = [];
    this.trialHist.starttime = [];
    this.trialHist.response = [];
    this.trialHist.correct = [];
  }

  
}