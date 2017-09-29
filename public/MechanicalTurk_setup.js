
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


  


  SIO = new S3_IO() 
  DWr = new MechanicalTurkDataWriter()
  UX = new MechanicalTurk_UX_poller()



  //Monitor Battery - from: http://www.w3.org/TR/battery-status/
  navigator.getBattery().then(function(batteryobj){
    SESSION.BatteryLDT.push([batteryobj.level, batteryobj.dischargingTime, Math.round(performance.now())]);
    batteryobj.addEventListener('levelchange',function(){
      SESSION.BatteryLDT.push([batteryobj.level, batteryobj.dischargingTime, Math.round(performance.now())]);
    })
  });


  SUBJECT = await loadStringFromLocalStorage("SubjectSettings_string")
  SUBJECT = JSON.parse(SUBJECT)
  console.log('FROM LOCAL STORAGE:', SUBJECT)
  wdm("Subject settings loaded...")

  SESSION.SubjectID = SUBJECT['SubjectID'];
  //SESSION.ExperimentFilePath = "https://s3.amazonaws.com/monkeyturk/Tasks/ExperimentDefinitions/NuevoToy.txt"
  var Experiment = await loadStringFromLocalStorage('Experiment_string')

  //console.log('FROM LOCAL STORAGE:', Experiment)
  Experiment = JSON.parse(Experiment)


  MechanicalTurkSettings = await loadStringFromLocalStorage('HIT_settings_string')
  MechanicalTurkSettings = JSON.parse(MechanicalTurkSettings)

  SUBMIT_TO_SANDBOX = MechanicalTurkSettings['sandbox'] || false

  console.log('FROM LOCAL STORAGE:', MechanicalTurkSettings)
  
  // Get IP address from local storage
  SESSION['IP_address'] = await loadStringFromLocalStorage('IP_address')

  TS = new TaskStreamer(undefined, SIO, Experiment["Experiment"], Experiment["ImageBags"], SESSION.SubjectID, MechanicalTurkSettings['on_finish']) 
  await TS.build()
  wdm('TaskStreamer built')


  //================== await create SoundPlayer ==================// 
    SP = new SoundPlayer()
    await SP.build()    

    wdm("Sounds loaded...")


    FLAGS.debug_mode = 1 


    // Initialize components of task
    RewardMap = new RewardMapGenerator('mousemove'); 
    

    R = new MonetaryReinforcer(MechanicalTurkSettings['bonus_usd_per_correct'])


  var ngridpoints = TS.Experiment[0]['NGridPoints'] 
  setupPlayspace(ngridpoints) // sets up PLAYSPACE based on window dimensions


  SD = new ScreenDisplayer()

  window.addEventListener('resize', onWindowResize)


  var skip_preview_mode = false
  console.log(window.location.href.startsWith('http://localhost:7800'))

  if(skip_preview_mode != true && window.location.href.startsWith('http://localhost:7800') == false){
    if(SUBJECT['assignmentId'] == 'ASSIGNMENT_ID_NOT_AVAILABLE' || SUBJECT['assignmentId'] == '' ){
      console.log('RUNNING IN PREVIEW MODE')
      // If in preview mode on MechanicalTurk
      toggleElement(1, 'PreviewModeSplash')
      var tutorial_image = await SIO.load_image('tutorial_images/TutorialMouseOver.png')

      while(true){
        await run_MouseOver_TutorialTrial(tutorial_image) 
      }
    }
  }

  // Show user the cash-in button, which is referenced in the instructions
  document.querySelector("button[name=WorkerCashInButton]").style.visibility = 'visible'
  toggleCashInButtonClickability(0)




  var show_instructions = true
  if(show_instructions == true){
    await showMechanicalTurkInstructions()
    // Ask for handedness 
    
    // Show device selection
    var hand_used = await showHandSelectionDialogue_and_getUserSelection()
    var device_selected = await showDeviceSelectionDialogue_and_getUserSelection()
    
    console.log(hand_used)
    console.log(device_selected)
  }
  transition_from_debug_to_science_trials()

  // Show trial progress counter
  
  toggleElement(1, 'MechanicalTurk_ProgressBar')
  toggleElement(1, 'MechanicalTurk_TrialBar')

  // Add cash in button 
  document.querySelector("button[name=WorkerCashInButton]").addEventListener(
    'mouseup',cash_in_listener,false)
  
  updateCashInButtonText(MechanicalTurkSettings["MinimumTrialsForCashIn"], 0, false)
  
}

async function showMechanicalTurkInstructions(){
    //todo: allow arbitrary strings as input  
    var screen1_instructions =  "" 
    screen1_instructions += "<ul>"
    screen1_instructions +='<p><text style="font-weight:bold; font-size:large">Thank you for your interest and contributing to research at at MIT!</text>'
    screen1_instructions += "<pi><li>Please use the latest version of <b>Google Chrome</b> to work on this HIT. It may not work correctly on other browsers."
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
    SESSION.MechanicalTurk_DeviceSelected = 'not_selected'
    document.getElementById("MechanicalTurkCursorDeviceSelectionScreen").style.visibility = 'visible'
    return new Promise(function(resolve, reject){
        FLAGS.clicked_device_selection = resolve
    })
}

async function showHandSelectionDialogue_and_getUserSelection(){
    // Turn on dialogue
    SESSION.MechanicalTurk_Handedness = 'not_selected'
    document.getElementById("MechanicalTurkHandSelectionScreen").style.visibility = 'visible'
    return new Promise(function(resolve, reject){
        FLAGS.clicked_hand_selection = resolve
    })
}

