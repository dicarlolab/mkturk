async function sync_data_listener(event){
    console.log("Called data save from sync button")
    var original_text = document.querySelector("button[name=SyncButton]").innerHTML 
    var original_color = document.querySelector("button[name=SyncButton]").style['background-color']


    document.querySelector("button[name=SyncButton]").innerHTML = '....'
    document.querySelector("button[name=SyncButton]").style['background-color'] = '#ADFF97'
    

    var existing_string = await DIO.read_textfile(get_saveRequest_filepath())
    existing_flags = JSON.parse(existing_string)
    existing_flags["SaveRequested"] = 1 // edit existing flags
    existing_flags["FlagFulfilled"] = 0

    await DIO.write_string(JSON.stringify(existing_flags), get_flag_filepath())


    console.log('HELLO')

    document.querySelector("button[name=SyncButton]").style['background-color'] = original_color
    document.querySelector("button[name=SyncButton]").innerHTML = original_text

    return 
}


function get_saveRequest_filepath(){
    return "/UserUX/"+vitals.subject+"_saverequest.txt"
}
function get_juiceRequest_filepath(){
    return "/UserUX/"+vitals.subject +'_juicerequest.txt'
}



async function change_juice_listener(event){
    if(FLAGS.juiceChange_request_in_progress == false){
        FLAGS.n_juicechanges_requested++

        FLAGS.juiceChange_request_in_progress = true 

        console.log("Called juice change from juice change button")
        var original_text = document.querySelector("button[name=ChangeJuiceButton]").innerHTML 
        var original_color = document.querySelector("button[name=ChangeJuiceButton]").style['background-color']

        document.getElementById("juice_form_header").innerHTML = 'Sent request...'

        document.querySelector("button[name=ChangeJuiceButton]").innerHTML = '....'
        document.querySelector("button[name=ChangeJuiceButton]").style['background-color'] = '#ADFF97'
        

        var JUICE_REQUESTED = parseInt(document.getElementById('juice_amount').value)
        console.log("JUICE_REQUESTED per 1000", JUICE_REQUESTED)

        try{
            var existing_string = await DIO.read_textfile(get_juiceRequest_filepath())
            existing_flags = JSON.parse(existing_string)
        }
        catch(error){
            var existing_flags = {}
            existing_flags["RewardPer1000Trials"] = JUICE_REQUESTED // edit existing flags
            existing_flags["FlagFulfilled"] = 0
        }

        await DIO.write_string(JSON.stringify(existing_flags), get_flag_filepath())
        
        console.log('juice change')

        document.querySelector("button[name=ChangeJuiceButton]").style['background-color'] = original_color
        document.querySelector("button[name=ChangeJuiceButton]").innerHTML = original_text
        FLAGS.juiceChange_request_in_progress = false 
    }

    return 
}