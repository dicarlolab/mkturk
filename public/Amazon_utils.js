



function submit_to_turk(submit_to_sandbox){
    if(submit_to_sandbox == true){
        var submit_url = "https://workersandbox.mturk.com/mturk/externalSubmit" 
    }
    else if(submit_to_sandbox == false){
        var submit_url = "https://www.mturk.com/mturk/externalSubmit"
    }

    document.getElementById("postdata").action = submit_url
    console.log(document.getElementById('postdata'))

    var url_string = window.location.href 
    var aID = extract_assignmentId_from_url(url)
    //document.getElementById("assignmentId").value = aID;
    //document.getElementById("data").value = resultstr;
    //document.getElementById("postdata").submit();
    console.log('SIMULATED SUBMISSION TO TURK')

}

// http://docs.aws.amazon.com/AWSMechTurk/latest/AWSMturkAPI/ApiReference_ExternalQuestionArticle.html
function getURLParameter(name) {
    // e.g. call with name = 'assignmentId'
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results === null) return "";
        else return results[1];
};


function extract_assignmentId_from_url(url){
    var assignmentId
    return assignmentId
}

function extract_workerId_from_url(url){
    var workerId
    return Id
}
function extract_hitId_from_url(url){
    var hitId
    return hitId
}


// Define task and imagebag
// Buffer all assets into user's browser with progressbar
// Run task until end criterion 
// Submit

