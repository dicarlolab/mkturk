function submit_to_turk(submit_to_sandbox){
    if(submit_to_sandbox == true){
        var submit_url = "https://workersandbox.mturk.com/mturk/externalSubmit" 
    }
    else if(submit_to_sandbox == false){
        var submit_url = "https://www.mturk.com/mturk/externalSubmit"
    }

    document.getElementById("postdata").action = submit_url
    console.log(document.getElementById('postdata'))

    //document.getElementById("assignmentId").value = aID;
    //document.getElementById("data").value = resultstr;
    //document.getElementById("postdata").submit();
    console.log('SIMULATED SUBMISSION TO TURK')

}

<form style="display: none;" id="postdata" action="https://www.mturk.com/mturk/externalSubmit" method="post">
  <input type="text" name="data" id="data" value="">
  <input type="text" name="assignmentId" id="assignmentId" value="">
</form>