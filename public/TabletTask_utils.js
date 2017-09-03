async function initializeSetupButtons(){
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