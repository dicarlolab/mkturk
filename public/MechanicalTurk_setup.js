async function showMechanicalTurkInstructions(){
    //todo: allow arbitrary strings as input  
    var screen1_instructions =  "" 
    screen1_instructions += "<ul>"
    screen1_instructions +='<p><text style="font-weight:bold; font-size:large">Thank you for your interest and contributing to research at at MIT!</text>'
    screen1_instructions += "<pi><li>Please use <b>Google Chrome</b> to work on this HIT. It may not work correctly on other browsers."
    screen1_instructions += "<p><li>You will look at rapidly flashed images and be required to have a working mouse, touchscreen, or touchpad."
    screen1_instructions += '<p><li>The sound of a <text style="font-weight:bold">bell</text> means you received a small bonus reward.'
    screen1_instructions += '<p><li>When the top right button turns  <text style="font-weight:bold; color:green">GREEN</text> you can press it to submit early, though we encourage you to continue working for bonus rewards.'
    screen1_instructions += '<p><li>Highly productive workers may be contacted for exclusive, higher-paying HITs.' 
            screen1_instructions += '<p><text style="color:#7A7A7A; font-size:smaller; font-style:italic">If you cannot meet these requirements or if doing so could cause discomfort or injury, do not accept this HIT. You will not be penalized in any way.</text>'
    screen1_instructions += "</ul>"


    document.getElementById("MechanicalTurkInstructionsSplash").style.visibility = 'visible'

    document.getElementById("InstructionSplashText").innerHTML = screen1_instructions

    var screen2_instructions = "Select which device you will be using to move your cursor."

    var screen3_instructions = 'Adjust your volume until you can comfortably hear the <text style="font-weight:bold">bell</text> after pressing this button:'
    
    var btn = document.getElementById('CloseInstructionsButton')
    btn.disabled = false 
    btn.innerHTML = 'Continue'

    return new Promise(function(resolve, reject){
        FLAGS.clicked_close_instructions = resolve
    })
}

async function showDeviceSelectionDialogue_and_getUserSelection(){
    // Turn on dialogue
    FLAGS.clicked_device_selection = false
    DEVICE.MechanicalTurk_DeviceSelected = 'not_selected'
    document.getElementById("MechanicalTurkCursorDeviceSelectionScreen").style.visibility = 'visible'
    return new Promise(function(resolve, reject){
        FLAGS.clicked_device_selection = resolve
    })


}


async function setupMechanicalTurkTask(){

  var windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;


  var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  console.log(window)
  console.log('dimensions', windowWidth, windowHeight)


  toggleElement(0, "SessionTextBox")
  toggleElement(0, "ReloadButton")
  toggleElement(0, 'DebugMessageTextBox')
  toggleElement(0, 'ImageLoadBar')
  toggleElement(0, 'StageBar')
  toggleElement(0, 'AutomatorLoadBar')


  // Global references for runtrial
  // TRIAL_NUMBER_FROM_SESSION_START
  // TS 
  // CANVAS
  // SD 
  // FixationRewardMap
  // ChoiceRewardMap
  // R
  // EVENT_TIMESTAMPS
  // TRIAL_BEHAVIOR
  // DWr
  // TERMINAL_STATE

  SIO = new S3_IO() 
  DWr = new MechanicalTurkDataWriter()
  UX = new MechanicalTurk_UX_poller()


  DEVICE.DevicePixelRatio = window.devicePixelRatio || 1;
  var visiblecanvasobj = CANVAS.obj[CANVAS.front];
  var visiblecontext = visiblecanvasobj.getContext("2d");
  backingStoreRatio = visiblecontext.webkitBackingStorePixelRatio ||
                              visiblecontext.mozBackingStorePixelRatio ||
                              visiblecontext.msBackingStorePixelRatio ||
                              visiblecontext.oBackingStorePixelRatio ||
                              visiblecontext.backingStorePixelRatio || 1;
  DEVICE.CanvasRatio = backingStoreRatio/DEVICE.DevicePixelRatio

  //Monitor Battery - from: http://www.w3.org/TR/battery-status/
  navigator.getBattery().then(function(batteryobj){
    DEVICE.BatteryLDT.push([batteryobj.level, batteryobj.dischargingTime, Math.round(performance.now())]);
    batteryobj.addEventListener('levelchange',function(){
      DEVICE.BatteryLDT.push([batteryobj.level, batteryobj.dischargingTime, Math.round(performance.now())]);
    })
  });


  // todo: load subject settings from URL 
  MechanicalTurkSettings = {
    'MinimumTrialsForCashIn':5, 
    'MAX_SESSION_TRIALS_MECHANICALTURK':10
  }
  
  var name = 'workerID'
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href) || ["", "workerID_notFound"] 
  results = results[1];

  SubjectSettings = {
    "SubjectID":results,
    "Species": "human",
    "GridScale": 0.6262,
    "FixationScale": 0.6262,
    "SampleScale": 0.6262,
    "TestScale": 0.6262, 
    }

  wdm("Subject settings loaded...")

  SESSION.SubjectID = SubjectSettings['SubjectID'];


  // TODO: specify experimentfilepath programatically @ upload interface
  SESSION.ExperimentFilePath = "https://s3.amazonaws.com/monkeyturk/Tasks/ExperimentDefinitions/NuevoToy.txt"

  var Experiment = await SIO.read_textfile(SESSION.ExperimentFilePath)
  Experiment = JSON.parse(Experiment)
 
  TS = new TaskStreamer(undefined, SIO, Experiment, SESSION.SubjectID, false) 
  await TS.build()
  wdm('TaskStreamer built')


  //================== await create SoundPlayer ==================// 
    SP = new SoundPlayer()
    await SP.build()    

    wdm("Sounds loaded...")

    
    
    
    FLAGS.debug_mode = 1 


    // Initialize components of task
    FixationRewardMap = new MouseMoveRewardMap()
    ChoiceRewardMap = new MouseMoveRewardMap()
    SD = new ScreenDisplayer()
    R = new MonetaryReinforcer()

  refreshScreenTSequenceSettings(TS.EXPERIMENT[TS.state.current_stage_index]); 

  var ngridpoints = TS.EXPERIMENT[0]['NGridPoints'] 
  setupPlayspace(ngridpoints) // sets up PLAYSPACE based on window dimensions

  for (var i = 0; i <= CANVAS.names.length-1; i++) {
      setupCanvas(CANVAS.obj[CANVAS.names[i]]);
  }

  window.addEventListener('resize', onWindowResize)

  //await drawGridDots()

  // Draw dots

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
  DEVICE.source_image_height = representative_image.height
  DEVICE.source_image_width = representative_image.width

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


  // Start in testing mode
  wdm("Running test mode...")

  name = 'assignmentId'
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  console.log(results)
  var results = regex.exec(window.location.href) || ["", ""] 
  results = results[1];

  console.log('raw regex', results) // because calling it in this function performs the regex on the amazon url, not the iframe url. why?

  var tutorial_image = await SIO.load_image('tutorial_images/TutorialMouseOver.png')

  console.log('hello')
  
  
  var skip_preview_mode = false

  if(skip_preview_mode != true){
    if(results == 'ASSIGNMENT_ID_NOT_AVAILABLE' || results == '' ){
      // If in preview mode on MechanicalTurk
      toggleElement(1, 'PreviewModeSplash')

      var _last_gridindex = -1

      while(true){
        

        console.log('RUNNING IN PREVIEW MODE')

        var tutorial_grid_index = Math.floor(Math.random() * (DEVICE.XGridCenter.length))
        while (tutorial_grid_index == _last_gridindex || tutorial_grid_index == 5){
          // todo: i don't like while loops.... take out 
          tutorial_grid_index = Math.floor(Math.random() * (DEVICE.XGridCenter.length))
        }
        await run_MouseOver_TutorialTrial(tutorial_image, tutorial_grid_index) 
        _last_gridindex = tutorial_grid_index
      }
    }
  }

  // Show user the cash-in button, which is referenced in the instructions
  document.querySelector("button[name=WorkerCashInButton]").style.visibility = 'visible'
  toggleCashInButtonClickability(0)

  await showMechanicalTurkInstructions()
  var device_selected = await showDeviceSelectionDialogue_and_getUserSelection()
  console.log(device_selected)
  transition_from_debug_to_science_trials()


  // Await clickthrough tutorial screen 

  // Add cash in button 
  document.querySelector("button[name=WorkerCashInButton]").addEventListener(
    'mouseup',cash_in_listener,false)
  
  updateCashInButtonText(MechanicalTurkSettings["MinimumTrialsForCashIn"], 0, false)
  



}