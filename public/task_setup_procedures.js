async function setupTaskFunctionTemplate(){
  // Responsible for setting the following global objects: 

  // DWr: Disk writer 
  // R: Reinforcer
  // SD: ScreenDisplayer
  // UX: UX poller 
  // DIO: Disk I/O
  // Experiment file 
  // SubjectSettings

  // Effector tracker (e.g. drag and tap or mouse move)
}


async function initializeSetupButtons(){
  
}

async function setupTurkTask(){

  TS_finite = new TaskStream_FinitePrebuilt(SIO)
  await TS_finite.build()

  DIO = new DropboxIO()
  subject_filepath_list = await DIO.listdir(SUBJECT_DIRPATH)

  // GET PARAMFILE NAME
  subjectdialog = document.getElementById("subjectID_dialog");
  subjectlistobj = document.getElementById("subjectID_list");
  for (var i=subject_filepath_list.length-1; i>=0; i--){
      var opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = splitFilename(subject_filepath_list[i]) // subject_filepath_list[i];
      subjectlistobj.appendChild(opt);
  }
  subjectlistobj.addEventListener("change",subjectlist_listener,false);
  subjectdialog.showModal()
  await subjectIDPromise() // sets SESSION.SubjectFilePath

  SubjectSettings = await DIO.read_textfile(SESSION.SubjectFilePath)
  SubjectSettings = JSON.parse(SubjectSettings)

  console.log(SubjectSettings)
  wdm("Subject settings loaded...")

  SESSION.SubjectID = SubjectSettings['SubjectID'];
  updateSessionTextbox(SESSION.SubjectID, '')

  //================== AWAIT LOAD Experiment Filepath ==================//
  experiment_file_list = await DIO.listdir(EXPERIMENT_DIRPATH)
  experiment_dialog = document.getElementById("ExperimentFile_dialog");
  experimentfile_obj = document.getElementById("ExperimentFile_list");
  for (var i=experiment_file_list.length-1; i>=0; i--){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = splitFilename(experiment_file_list[i]) // subject_filepath_list[i];
    experimentfile_obj.appendChild(opt);
  }
  experimentfile_obj.addEventListener("change",experimentlist_listener,false);
  experiment_dialog.showModal()
  await ExperimentFile_Promise() // sets SESSION.ExperimentFilePath
  updateSessionTextbox(SESSION.SubjectID, splitFilename(SESSION.ExperimentFilePath))

  TS = new TaskStreamer(DIO, SESSION.ExperimentFilePath, SESSION.SubjectID) 
  await TS.build()
  wdm('TaskStreamer built')

  //================== await create SoundPlayer ==================// 
    SP = new SoundPlayer()
    await SP.build()    

    wdm("Sounds loaded...")
    
    //================== AWAIT CONNECT TO BLE ==================//
    document.querySelector("button[name=connectble]").style.display = "block"
    document.querySelector("button[name=connectble]").style.visibility = "visible"
    document.querySelector("button[name=noble]").style.display = "block"
    document.querySelector("button[name=noble]").style.visibility = "visible"
    wdm("Waiting for Bluetooth preferences...")
    await connectBLEButtonPromise()
    wdm("Bluetooth connection handled...")

    document.querySelector("button[name=connectble]").style.display = "none" //if do style.visibility=hidden, element will still occupy space
    document.querySelector("button[name=noble]").style.display = "none"
    
    



    //========= Start in TEST mode =======//
    document.querySelector("button[name=doneTestingTask]").style.display = "block"
    document.querySelector("button[name=doneTestingTask]").style.visibility = "visible"
    

    TRIAL_NUMBER_FROM_SESSION_START = 0
    FLAGS.debug_mode = 1 
}

async function setupTabletTask(){

  DIO = new DropboxIO()
  SIO = new S3_IO() 
  DWr = new DropboxDataWriter(DIO)
  UX = new UX_poller(DIO)

  // Button callbacks
  document.querySelector("button[name=connectble]").addEventListener(
    'touchend',findBLEDevice,false)
  document.querySelector("button[name=connectble]").addEventListener(
    'mouseup',findBLEDevice,false)
  document.querySelector("button[name=noble]").addEventListener(
    'touchend',skipBLEDevice,false)
  document.querySelector("button[name=noble]").addEventListener(
    'mouseup',skipBLEDevice,false)
  document.querySelector("button[name=doneTestingTask]").addEventListener(
    'touchend',doneTestingTask_listener,false)
  document.querySelector("button[name=doneTestingTask]").addEventListener(
    'mouseup',doneTestingTask_listener,false)
  //document.querySelector("button[name=SyncButton]").addEventListener(
  //  'mouseup',sync_data_listener,false)
  document.querySelector("button[name=SyncButton]").addEventListener(
    'touchend',sync_data_listener,false)

  subject_filepath_list = await DIO.listdir(SUBJECT_DIRPATH)

  // GET PARAMFILE NAME
  subjectdialog = document.getElementById("subjectID_dialog");
  subjectlistobj = document.getElementById("subjectID_list");
  for (var i=subject_filepath_list.length-1; i>=0; i--){
      var opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = splitFilename(subject_filepath_list[i]) // subject_filepath_list[i];
      subjectlistobj.appendChild(opt);
  }
  subjectlistobj.addEventListener("change",subjectlist_listener,false);
  subjectdialog.showModal()
  await subjectIDPromise() // sets SESSION.SubjectFilePath

  SubjectSettings = await DIO.read_textfile(SESSION.SubjectFilePath)
  SubjectSettings = JSON.parse(SubjectSettings)

  console.log(SubjectSettings)
  wdm("Subject settings loaded...")

  SESSION.SubjectID = SubjectSettings['SubjectID'];
  updateSessionTextbox(SESSION.SubjectID, '')

  //================== AWAIT LOAD Experiment Filepath ==================//
  experiment_file_list = await DIO.listdir(EXPERIMENT_DIRPATH)
  experiment_dialog = document.getElementById("ExperimentFile_dialog");
  experimentfile_obj = document.getElementById("ExperimentFile_list");
  for (var i=experiment_file_list.length-1; i>=0; i--){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = splitFilename(experiment_file_list[i]) // subject_filepath_list[i];
    experimentfile_obj.appendChild(opt);
  }
  experimentfile_obj.addEventListener("change",experimentlist_listener,false);
  experiment_dialog.showModal()
  await ExperimentFile_Promise() // sets SESSION.ExperimentFilePath
  updateSessionTextbox(SESSION.SubjectID, splitFilename(SESSION.ExperimentFilePath))

  TS = new TaskStreamer(DIO, SIO, SESSION.ExperimentFilePath, SESSION.SubjectID) 
  await TS.build()
  wdm('TaskStreamer built')

  //================== await create SoundPlayer ==================// 
    SP = new SoundPlayer()
    await SP.build()    

    wdm("Sounds loaded...")
    
    //================== AWAIT CONNECT TO BLE ==================//
    document.querySelector("button[name=connectble]").style.display = "block"
    document.querySelector("button[name=connectble]").style.visibility = "visible"
    document.querySelector("button[name=noble]").style.display = "block"
    document.querySelector("button[name=noble]").style.visibility = "visible"
    wdm("Waiting for Bluetooth preferences...")
    await connectBLEButtonPromise()
    wdm("Bluetooth connection handled...")

    document.querySelector("button[name=connectble]").style.display = "none" //if do style.visibility=hidden, element will still occupy space
    document.querySelector("button[name=noble]").style.display = "none"
    
    



    //========= Start in TEST mode =======//
    document.querySelector("button[name=doneTestingTask]").style.display = "block"
    document.querySelector("button[name=doneTestingTask]").style.visibility = "visible"
    

    TRIAL_NUMBER_FROM_SESSION_START = 0
    FLAGS.debug_mode = 1 

    // Make sync button visible 
    document.querySelector("button[name=SyncButton]").style.visibility = "visible"


    // Initialize components of task
    FixationRewardMap = new RewardMap()
    ChoiceRewardMap = new RewardMap()
    SD = new ScreenDisplayer()
    R = new JuiceReinforcer()



  windowHeight = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;


  windowWidth = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;


  // Reference: https://www.w3schools.com/js/js_window.asp


  refreshCanvasSettings(TS.EXPERIMENT[TS.state.current_stage_index]); 

  for (var i = 0; i <= CANVAS.names.length-1; i++) {
      setupCanvas(CANVAS.obj[CANVAS.names[i]]);
  }
  if (DEVICE.DevicePixelRatio !== 1){
      scaleCanvasforHiDPI(CANVAS.obj.sample);
      scaleCanvasforHiDPI(CANVAS.obj.test);
  }

  CANVAS.workspace = [
      0,
      0,
      CANVAS.obj["touchfix"].width,
      CANVAS.obj["touchfix"].height
  ]


  // Write down dimensions of (assumedly) all images in samplebag and testbag, based on the first sample image.
  var representative_trial = await TS.get_trial()
  console.log('representative_trial', representative_trial)

  var representative_image = representative_trial['sample_image']
  DEVICE.source_ImageWidthPixels = representative_image.width
  DEVICE.source_ImageHeightPixels = representative_image.height

  CANVAS.FixationRadius=(DEVICE.source_ImageWidthPixels/2)*SubjectSettings['FixationScale']*DEVICE.CanvasRatio

  funcreturn = defineImageGrid(TS.EXPERIMENT[0]['NGridPoints'], 
      DEVICE.source_ImageWidthPixels, 
      DEVICE.source_ImageHeightPixels, 
      SubjectSettings['GridScale']);

  xcanvascenter = funcreturn[0]
  ycanvascenter = funcreturn[1]

  DEVICE.XGridCenter = funcreturn[2]
  DEVICE.YGridCenter = funcreturn[3]

  console.log('windowWidth', windowWidth, 'windowHeight', windowHeight)


  // Start in testing mode
  wdm("Running debug mode...")
  while(FLAGS.debug_mode == 1){
    await runtrial()
    UX.poll()
  }

  transition_from_debug_to_science_trials()

}