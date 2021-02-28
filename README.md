# [mkturk](mkturk.com)
A purely web-based psychophysics tool for neuroscience and psychology


## Acknowledgement
We are happy to share the mkturk software and hardware and hope it helps with your project. Should this repository help in a substantitive way toward a publication, we would appreciate a brief acknowledgement: "Issa Lab for sharing their web based behavior system (mkturk)."

## Getting started
For getting the web app up and running, see https://mkturk.com/installation.html
Then see the [general guide](https://mkturk.com/features.html) & [detailed guide](https://paper.dropbox.com/doc/MkTurk-Guide--BF6Zcm6igbE2cwsKtibyddKOAg-Vpip4yINDsGnF3JwvBcJT)
[Full list of task parameter definitions](https://github.com/issalab/mkturk/tree/master/public/mkturk)

## Hosting the web app
Running mkturk is as simple as loading a web page since mkturk is purely a client-side piece of code. This requires a server capable of loading an html. Dropbox and Google Drive have stopped serving html, so other options have to be considered such as GitHub, GitLab, Google Firebase or Amazon S3.

### Local hosting of the web app
Even before publishing to the world wide web, mkturk can be run on a local host which is useful for development, debugging, and demo purposes.

### Configuring mkturk_installsettings.js
Compared to a regular app, a web app technically doesn't need to be installed in the traditional sense of the word. However, there are still some deployment-specific options to configure, and these are all found in mkturk_installsettings.js.

## Browser Compatibility
Although as a web app, mkturk should run on any browser on any device, in reality, we rely on Google Chrome which implements the latest APIs such as the WebUSB API. MkTurk will also run on Safari and Firefox browsers if not using an Arduino (which would require Chrome's WebUSB API).

## Setting up the touchscreen device
Depending on the device and which version of Android, you may have control over various settings and will want to adjust the Settings such as touch sensitivity, screen brightness, hiding home menus, disabling side or top swipe menus, disabling automatic dimming of screen, etc.

A very important feature to add is a way to keep the screen on so that it doesn't shut off in the middle of the task. Rather than use an app, we found that by enabling Developer Options, we unlock a feature to keep the screen on. On the latest Android, navigate to Settings -> System -> Developer Options, and enable "Stay awake - Screen will never sleep while charging." Alternatively, you can download an app such as [Keep Screen On](https://play.google.com/store/apps/details?id=eu.aboutall.android.tools.kepscreenon&hl=en). Unfortunately, besides Developer Mode or an app, there is no setting in native Android to prevent the screen from shutting off.