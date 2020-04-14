# mkturk
Wireless touchscreen behavioral training

## Acknowledgement
We are happy to share the mkturk software and hardware and hope it helps with your project. Should this repository help in a substantitive way toward a publication, we would appreciate a brief acknowledgement: "Elias Issa and James DiCarlo for sharing their web based behavior system (mkturk)."

## Getting started
This document only applies to running the mkturk web app. For details on purchasing and construction of related hardware, please check out the Wiki pages. The Wiki also contains more detailed explanations of some of the javascript APIs utilized by mkturk.

## Hosting the web app
Running mkturk is as simple as loading a web page since mkturk is purely a client-side piece of code. This requires a server capable of loading an html. Dropbox and Google Drive have stopped serving html, so other options have to be considered such as GitHub, GitLab, Google Firebase or Amazon S3.

### Local hosting of the web app
Even before publishing to the world wide web, mkturk can be run on a local host which is useful for development, debugging, and demo purposes. Simply open a terminal window, cd to the path where _mkturk.html_ lives, and run a simple server in python:
_python -m SimpleHTTPServer portnum_. One can use any port# such as 8080.
Next, open the local url http://localhost:8080/mkturk.html in your browser

### Configuring mkturk_installsettings.js
Compared to a regular app, a web app technically doesn't need to be installed in the traditional sense of the word. However, there are still some deployment-specific options to configure, and these are all found in mkturk_installsettings.js. Here is what an example installsettings file might look like for those hosting in various places and using dropbox to store assets:

```javascript

// ---- Location of html page
var DBX_CLIENT_ID = "2m9hmv7q45kwren"
//localhost
var DBX_REDIRECT_URI_ROOT = "http://127.0.0.1:8080/"

//dropbox host (no longer possible)
// var DBX_REDIRECT_URI_ROOT = "https://dl.dropboxusercontent.com/spa/k79b8ph6lmcr30d/nightly/public2/" 

//gitlab host
// var DBX_REDIRECT_URI_ROOT = "https://elizabethyoo.gitlab.io/mkturk/mkturk/public/"

//Amazon S3 host
// var DBX_REDIRECT_URI_ROOT = "https://s3.amazonaws.com/mkturk/public/mkturk.html"

// ---- Location of asset storage relative to root
var DATA_SAVEPATH = "/MonkeyTurk/datafiles/"
var PARAM_DIRPATH = "/MonkeyTurk/parameterfiles/subjects/"
var SOUND_FILEPREFIX = "/MonkeyTurk/sounds/au"

//data files to read for performance history of subject
var ndatafiles2read=5;

// how long can you bother to wait at each imageload? 400 images ~ 30 seconds. Recommended to keep = 0 with good internet connection and automator on
var num_preload_images=0;

var subjectlist = ["Eliaso","Michaelo","Elizabetho"];
```

## Storing assets
mkturk is a client-side app that relies on cloud storage for handling all stimuli (images, sounds), parameter files (json), and data (json). Currently, mkturk has Dropbox, but Google Drive and Amazon S3 may also be added in the future.

To get started, one needs to add a few files to the cloud directory.
1. A subject parameter file (json) contains variables for loading the task.
2. There a few standard audio files we use for trial start or reward sounds.
3. mkturk needs an image folder with a few images to display during the task.
4. Finally, mkturk needs folder dedicated to storing the data files

The _"exampleinstall"_ folder contains example parameter, audio, image, and data files for seeding your mkturk installation.

### Instructions for setting up Dropbox
First, you want to go to [Dropbox Developers](https://www.dropbox.com/developers) and register your web app with dropbox. When you choose "Create your app," here are the options to select:  

1. Choose an API = "Dropbox API"
2. Choose the type of access you need = "Full Dropbox"

Once you have named your app and tied it to your dropbox, you can go into the app settings under "My apps" and get the "App Key" to put into mkturk_installsettings.js (the app key tells dropbox that this web app is a known page that is safe for giving access to files on dropbox). Also, you'll want to register the url for your webapp under "Redirect URIs." You can add as many URIs as you like. Again, this is part of the handshake that tells dropbox that this registered webpage is trustable. Example URIs include:  

mkturk -- https://dl.dropboxusercontent.com/spa/k79b8ph6lmcr30d/mkturk/public/mkturk.html

liveplot -- https://dl.dropboxusercontent.com/spa/k79b8ph6lmcr30d/mkturk/public/liveplot.html 

mkturk (localhost) -- http://localhost:8080/mkturk.html 

The root of this URI (e.g. https://dl.dropboxusercontent.com/spa/k79b8ph6lmcr30d/mkturk/public/) will go into the DBX_REDIRECT_URI_ROOT variable in mkturk_installsettings.js

Note, that the first time you load mkturk.html, you will go through the dropbox authentication process. Once successful, dropbox will return to mkturk at redirect_URI. When it does so, it will add an access token to the url. Such as:

http://127.0.0.1:8080/mkturk.html#access_token=DABgauK9rrsAAAAAAALSOPhyxKqxjOZWsJkugvxJN_6IBQdx33QkpZ5vthEo9649&token_type=bearer&uid=344340032&account_id=dbid%3AAACVH6fVPREjEq218dV0FEY7PG7pQS9C7ZY

You can use this URL+token to load mkturk in subsequent sessions on that device without having to authenticate. However, if you forget to store this url, it's fairly fast to re-authenticate on a device the next time around.

### (Future) Instructions for setting up Google Drive

## Configure Google Chrome Browser
Although as a web app, mkturk should run on any browser on any device, in reality, we rely on Google Chrome which implements the latest APIs such as the WebUSB API. Furthermore, because we are using the latest javascript features, we have to navigate to chrome://flags to enable these experimental features.

As of Chrome 66, the only flag that needs to be enabled is _Experimental Web Platform Features_ (for using offscreenCanvas API). However, it is generally advised to also enable _Experimental JavaScript_. Web Bluetooth and WebUSB are no longer behind flags.

## Setting up the touchscreen device
Depending on the device and which version of Android, you may have control over various settings and will want to adjust the Settings such as touch sensitivity, screen brightness, hiding home menus, disabling side or top swipe menus, disabling automatic dimming of screen, etc. For tablets with soft home keys, we used the app [GMD Immersive](https://play.google.com/store/apps/details?id=com.gmd.immersive&hl=en) to hide them and obtain full screen immersion.

A very important feature to add is a way to keep the screen on so that it doesn't shut off in the middle of the task. Rather than use an app, we found that by enabling Developer Options, we unlock a feature to keep the screen on. On the latest Android, navigate to Settings -> System -> Developer Options, and enable "Stay awake - Screen will never sleep while charging." Alternatively, you can download an app such as [Keep Screen On](https://play.google.com/store/apps/details?id=eu.aboutall.android.tools.kepscreenon&hl=en). Unfortunately, besides Developer Mode or an app, there is no setting in native Android to prevent the screen from shutting off.

## Liveplot
mkturk ships with a basic plotting web page that uses the google charts api. _liveplot.html_ can be hosted in the same place as _mkturk.html_ and can be loaded via the corresponding url, replacing _mkturk_ with _liveplot_ in the url.

