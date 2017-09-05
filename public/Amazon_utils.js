

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

