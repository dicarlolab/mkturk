async function sync_data_listener(event){
    if(FLAGS.save_request_in_progress == false){
        FLAGS.save_request_in_progress = true
        console.log("Called data save from sync button")
        var original_text = document.querySelector("button[name=SyncButton]").innerHTML 
        var original_color = document.querySelector("button[name=SyncButton]").style['background-color']


        document.querySelector("button[name=SyncButton]").innerHTML = '....'
        document.querySelector("button[name=SyncButton]").style['background-color'] = '#ADFF97'
        

        var existing_flags = {}
        existing_flags["SaveRequested"] = 1 
        existing_flags["FlagFulfilled"] = 0

        await DIO.write_string(JSON.stringify(existing_flags), get_saveRequest_filepath())


        console.log('save request written to disk')

        document.querySelector("button[name=SyncButton]").style['background-color'] = original_color
        document.querySelector("button[name=SyncButton]").innerHTML = original_text
        FLAGS.save_request_in_progress = false
        return 
    }
}


function get_saveRequest_filepath(){
    return "/UserUX/"+vitals.subject+"_saverequest.txt"
}
function get_juiceRequest_filepath(){
    return "/UserUX/"+vitals.subject +'_juicerequest.txt'
}


function filelist_listener(event){
  console.log("Selected new file")
  CURRENT_VIEW['filepath'] = DISK_STATE['filepaths'][this.value]
  CURRENT_VIEW['filename'] = splitFilename(DISK_STATE['filepaths'][this.value])
  console.log("filelist listener", CURRENT_VIEW)
  CURRENT_VIEW['filehasChanged']=true;
}

async function change_juice_listener(event){
    if(FLAGS.juiceChange_request_in_progress == false){
        FLAGS.n_juicechanges_requested++

        FLAGS.juiceChange_request_in_progress = true 

        console.log("Called juice change from juice change button")
        var original_text = document.querySelector("button[name=ChangeJuiceButton]").innerHTML 
        var original_color = document.querySelector("button[name=ChangeJuiceButton]").style['background-color']

        var original_header = document.getElementById("juice_form_header").innerHTML
        document.getElementById("juice_form_header").innerHTML = 'Sent request...'

        document.querySelector("button[name=ChangeJuiceButton]").innerHTML = '....'
        document.querySelector("button[name=ChangeJuiceButton]").style['background-color'] = '#ADFF97'
        

        var JUICE_REQUESTED = parseInt(document.getElementById('juice_amount').value)
        console.log("JUICE_REQUESTED per 1000", JUICE_REQUESTED)

        var existing_flags = {}
        existing_flags["RewardPer1000Trials"] = JUICE_REQUESTED // edit existing flags
        existing_flags["FlagFulfilled"] = 0
        
        await DIO.write_string(JSON.stringify(existing_flags), get_juiceRequest_filepath())
        
        console.log('juice change')

        document.querySelector("button[name=ChangeJuiceButton]").style['background-color'] = original_color
        document.querySelector("button[name=ChangeJuiceButton]").innerHTML = original_text
        document.getElementById("juice_form_header").innerHTML = original_header
        FLAGS.juiceChange_request_in_progress = false 
    }

    return 
}