async function setupTabletTask(){


  var windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;


  var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  console.log(window)
  console.log('dimensions', windowWidth, windowHeight)



  DIO = new DropboxIO()
  await DIO.build()

  SIO = new S3_IO() 
  DWr = new DropboxDataWriter(DIO)
  UX = new UX_poller(DIO)

  
  //Monitor Battery - from: http://www.w3.org/TR/battery-status/
  navigator.getBattery().then(function(batteryobj){
    DEVICE.BatteryLDT.push([batteryobj.level, batteryobj.dischargingTime, Math.round(performance.now())]);
    batteryobj.addEventListener('levelchange',function(){
      DEVICE.BatteryLDT.push([batteryobj.level, batteryobj.dischargingTime, Math.round(performance.now())]);
    })
  });

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


  // Load Subject and Experiment file from landing page if available, 
  // otherwise run dialogue

  var run_manual_setup = await loadStringFromLocalStorage("manualSetupFlag") || 'true'
  var run_manual_setup = (run_manual_setup == 'true') 
  if(run_manual_setup == true){
    // USER INPUT: get Subject file
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


    // USER INPUT: get Experiment file
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
    
  }
  else{
    console.log('Loading from landing page')
    SESSION.SubjectFilePath = await loadStringFromLocalStorage('SubjectFilePath')
    SESSION.ExperimentFilePath = await loadStringFromLocalStorage('ExperimentFilePath')
  }

  SUBJECT = await DIO.read_textfile(SESSION.SubjectFilePath)
  SUBJECT = JSON.parse(SUBJECT)

  console.log(SUBJECT)
  wdm("Subject settings loaded...")

  SESSION.SubjectID = SUBJECT['SubjectID'];

  updateSessionTextbox(SESSION.SubjectID, '')

  updateSessionTextbox(SESSION.SubjectID, splitFilename(SESSION.ExperimentFilePath))
  var Experiment = await DIO.read_textfile(SESSION.ExperimentFilePath)
  Experiment = JSON.parse(Experiment)





  
  TS = new TaskStreamer(DIO, SIO, Experiment["Experiment"], Experiment["ImageBags"], SESSION.SubjectID, "loop") // todo: move terminal setting into experiment constructor 
  await TS.build()
  wdm('TaskStreamer built')



  var estimated_eye_screen_distance_inches = SUBJECT['estimated_eye_screen_distance_inches']
  var estimated_screen_virtual_pixels_per_inch = SUBJECT['estimated_screen_virtual_pixels_per_inch']
  var estimated_grid_vertical_offset_inches = SUBJECT['estimated_grid_vertical_offset_inches']
  var intended_grid_degrees_of_visual_angle = SUBJECT['intended_grid_degrees_of_visual_angle']
  
  

  var ngridpoints = TS.Experiment[0]['NGridPoints'] 
  setupPlayspace(ngridpoints, estimated_eye_screen_distance_inches, estimated_screen_virtual_pixels_per_inch, estimated_grid_vertical_offset_inches, intended_grid_degrees_of_visual_angle) // sets up PLAYSPACE based on window dimensions


  //================== await create SoundPlayer ==================// 
    SP = new SoundPlayer()
    await SP.build()    

    wdm("Sounds loaded...")
    FLAGS.debug_mode = 1 


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
  

    // Make sync button visible 
    document.querySelector("button[name=SyncButton]").style.visibility = "visible"


    // Initialize components of task
    RewardMap = new RewardMapGenerator(['touchmove', 'touchstart'])
    SD = new ScreenDisplayer()
    R = new JuiceReinforcer()


  // Start in testing mode
  wdm("Running debug mode...")
  while(FLAGS.debug_mode == 1){
    await runtrial()
    UX.poll()
  }

  transition_from_debug_to_science_trials()
  toggleElement(0, 'SyncButton')
  toggleElement(0, 'TrialCounter')
  SD.togglePlayspaceBorder(0)


}