

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





// Define task and imagebag
// Buffer all assets into user's browser with progressbar
// Run task until end criterion 
// Submit

