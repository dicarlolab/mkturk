class S3_IO{
    constructor(){

        this.read_textfile = this._read_textfile.bind(this)
        this.load_image = this._load_image.bind(this)
        this.exists = this._exists.bind(this)

    }
    async _load_image(blob_url){
        
        var resolvefunc 
        var rejectfunc 
        var p = new Promise(function(resolve, reject){
            resolvefunc = resolve
            rejectfunc = reject
        })

        var img =  new Image();
        img.onload = function() {
            console.log('loaded '+blob_url)
            console.log('img', img)
            console.log(this)
            resolvefunc(this)
        }; 
        img.src = blob_url

        var img_loaded = await p
        return img_loaded
    }
    async _read_textfile(text_url){
        // https://www.w3schools.com/xml/ajax_intro.asp

        // Configuring S3: to accept xhttp requests:
        // https://stackoverflow.com/questions/17533888/s3-access-control-allow-origin-header
        var resolveFunc
        var rejectFunc
        var p = new Promise(function(resolve, reject){
            resolveFunc = resolve
            rejectFunc = reject
        })

        var xhttp = new XMLHttpRequest(); 


        try{
            xhttp.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200){
                    console.log(text_url, ' loaded')
                    resolveFunc(this.responseText)
                }
            }
        }
        catch(error){
            console.log(error)
        }
        
        xhttp.open("GET", text_url, true);
        xhttp.send();
        var s = await p
        return s
    }

    async _exists(url){
        var resolveFunc
        var rejectFunc
        var p = new Promise(function(resolve, reject){
            resolveFunc = resolve
            rejectFunc = reject
        })

        var xhttp = new XMLHttpRequest(); 


        try{
            xhttp.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200){
                    resolveFunc(true)
                }
                else{
                    resolveFunc(false)
                }
            }
        }
        catch(error){
            console.log(error)
        }
        
        xhttp.open("GET", url, true);
        xhttp.send();
        var s = await p
        return s

    }

  
}



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

