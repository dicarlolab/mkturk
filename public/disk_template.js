// Core disk I/O capabilities that are needed to run the task. 

//return whether user was redirected here after authenticating

// Template 
class DiskIO{
    constructor(){

    }
    async exists(filepath){
        var is_a_file = false 
        return is_a_file

    }
    async listdir(dirpath){
        var filelist
        return filelist
    }

    async write_string(savepath){

        return
    }

    async read_textfile(filepath){
        var s 
        return s
    }

    async load_image(blobpath){
        var blob
        return blob
    }

    async changed_on_disk(filepath, rev){
        // "rev" is some hash that can be used to compare the in-memory version of the file and the disk version.
        var changed = false
        return changed 
    }

    async get_rev(filepath){
        // get the version hash
    }

}   


class DropboxIO{

    

    constructor(){
        function isAuthenticated(){
            return !!getAccessTokenFromUrl()
        }

        //parse access token from url if in urls hash
        function getAccessTokenFromUrl(){
            return utils.parseQueryString(window.location.hash).access_token
        }

        var DBX_REDIRECT_URI = DBX_REDIRECT_URI_ROOT + "mkturk.html"

        if (isAuthenticated()){
            //Create an instance of Dropbox with the access token
            var dbx = new Dropbox({accessToken: getAccessTokenFromUrl()})
        }
        else {
            var dbx = new Dropbox({clientId: DBX_CLIENT_ID});
            var dbx_authUrl = dbx.getAuthenticationUrl(DBX_REDIRECT_URI);
            window.location.href = dbx_authUrl //send to Dropbox sign-in screen
        }

        this.dbx = dbx
        this.exists = this._exists.bind(this)
        this.listdir = this._listdir.bind(this)
        this.write_string = this._write_string.bind(this)
        this.read_textfile = this._read_textfile.bind(this)
        this.load_image = this._load_image.bind(this)
        this.changed_on_disk = this._changed_on_disk.bind(this)
        this.get_rev = this._get_rev(this)
        // Need to .bind, because "this" changes its meaning depending on the context in which 
        // a DIO function (or any function) is called. Binding makes it so that "this"
        // always refers to the DIO object, not the "this" of the particular moment (context). 

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

    }
    async _exists(check_path){
        try{
            var filemeta = await this.dbx.filesGetMetadata({path: check_path})
            return true
        }
        catch(error){
            return false
        }
    }

    async _listdir(directory_path){

        var iteration_limit = 100

        var file_list = []

        try{
            var entries = []
            var response = await this.dbx.filesListFolder({path: directory_path, 
                                                  recursive: true}) 
            entries.push(... response.entries)

            // Use response.has_more to propagate 
            var num_iterations = 0
            
            while(response.has_more == true){
                response = await this.dbx.filesListFolderContinue(response.cursor)
                entries.push(... response.entries)

                num_iterations = num_iterations + 1 
                if(num_iterations > iteration_limit)
                    {throw 'Hit iteration limit of '+iteration_limit+'. Check your imagebag directory is not insanely large.'}
            }

            
            for (var q = 0; q <= entries.length-1; q++){
                if (entries[q][".tag"] == "file") {
                    file_list.push(entries[q].path_display) //'/'+entries[q].name)
                }
            }

            datafiles.sort(function (a,b){
                if (a > b){
                    return -1;
                }
                if (a < b){
                    return 1;
                }
                return 0;
            }); //sort in descending order

            return file_list
        }
        catch (error) {
            console.error(error)
        }
    }

    async _write_string(datastr, filepath){
        try{
            var response = await this.dbx.filesUpload({
                    path: filepath,
                    contents: datastr,
                    mode: {[".tag"]: "overwrite"} })
        }
        catch(error){
            console.log('DIO.write_string:', error)
        }
    }

    async _read_textfile(textfile_path){
        var _this = this
        return new Promise(function(resolve,reject){
            _this.dbx.filesDownload({path: textfile_path})
            .then(function(data){
                console.log("Read textfile "+textfile_path+" of size " + data.size)

                var reader = new FileReader()
                reader.onload = function(e){
                    resolve(reader.result)
                    var data = JSON.parse(reader.result)
                    resolve(reader.result)
                }
                reader.readAsText(data.fileBlob)
            })
            .catch(function(error){
                console.error(error)
            })
        })
    }

    async _load_image(imagepath){
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

        // Loads and returns a single image located at imagepath into an Image()
        // Upon failure (e.g. from Dropbox API limit), will retry up to MAX_RETRIES. 
        // Will wait between retries with linear increase in waittime between tries. 
        var _this = this
        var p = new Promise(
            function(resolve, reject){
                try{
                    var MAX_RETRIES = 5 
                    var backoff_time_seed = 500 // ms; is multiplied by retry number. 
                    var retry_number = 0; 
                    try{
                        _this.dbx.filesDownload({path: imagepath}).then( 
                            function(data){
                                var data_src = window.URL.createObjectURL(data.fileBlob);   
                                var image = new Image(); 

                                image.onload = function(){
                                    //console.log('Loaded: ' + (imagepath));
                                    resolve(image)
                                    }
                                image.src = data_src
                            }
                        )
                    }
                    catch(error){
                        retry_number = retry_number + 1; 
                        console.log(error)
                        console.log('On retry '+retry_number)
                        sleep(backoff_time_seed * retry_number)
                        //continue
                    }   
                }
                catch(error){
                    console.log(error)
                    resolve(0)
                }
            }
        )
        return p

    }

    async _changed_on_disk(filepath, rev){
        try{
            var filemeta = await this.dbx.filesGetMetadata({path: filepath})
            if(this.rev != filemeta.rev){
                return true
            }
            else{
                return false
            }
        }
        catch(error){
            console.log(error)
            wdm('DIO.changed_on_disk error', error)
        }
    }

    async _get_rev(filepath){
        try{
            var filemeta = await this.dbx.filesGetMetadata({path: filepath})
            return filemeta.rev
        }
        catch(error){
            console.log(error)
            wdm('DIO.get_rev error', error)
        }
    }

}

