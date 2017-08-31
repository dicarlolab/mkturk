async function sync_data_listener(event){
    console.log("Called data save from sync button")
    var original_text = document.querySelector("button[name=SyncButton]").innerHTML 
    var original_color = document.querySelector("button[name=SyncButton]").style['background-color']


    document.querySelector("button[name=SyncButton]").innerHTML = '....'
    document.querySelector("button[name=SyncButton]").style['background-color'] = '#ADFF97'
    

    //await DWr.saveTrialData(FLAGS.debug_mode)
    //await DWr.saveTouches(FLAGS.debug_mode)
    //await SP.playSound(5) // Chime
    console.log('HELLO')

    document.querySelector("button[name=SyncButton]").style['background-color'] = original_color
    document.querySelector("button[name=SyncButton]").innerHTML = original_text

    return 
}
