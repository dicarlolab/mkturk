# Parameters

## TASK
Automator: Boolean on/off

AutomatorFilePath: File path to params for the automator curriculum.

BackgroundColor2D: specify the background color in hex (eg, #FFFFFF for white or #000000 for black). Not required in param file. If not provided, defaults to gray screen background (#7F7F7F)

CheckRFID: Time in milliseconds over which at least one matching RFID read is required so that agent doesn't get kicked off of task. If there is a read within the last CheckRFID ms, task continues, otherwise agent is locked out at start of next trial. CheckRFID <= 0 turns off RFID checking.

ChoiceGridIndex: For a same-different task, need to specify two locations, one for same choice (circle) and one for different choice (square).

ChoiceScale (computed internally and stored in ENV.ChoiceScale instead of provided by user in TASK): Size of choice circle and square in units of sample image width

ChoiceSizeInches: Size of choice circle and square in physical inches on the screen

ChoiceTimeOut: Time in milliseconds that subject has to make a choice in AFC task before trial aborts and new sample is displayed. This timeout applies to test response screen in SR2 or M2S and to choice response screen in same-different

ConsecutiveHitsITI: Maximum time in milliseconds allowed to elapse from the previous trial for the current trial to count toward reward accumulation for a string of correct responses. For example, if ConsecutiveHitsITI=8000, then subject has 8 seconds to complete the next trial successfully and the consecutivehits counter will be incremented. Otherwise, the number of consecutivehits will get set to 0

CurrentAutomatorStage: index of current training stage of automator.

FixationDuration: How long subject has to hold fixation touch in milliseconds for a successful fixation to register.

FixationMove: FixationMove=0, fixation image is presented at fixationGridindex. FixationMove=N, N>0, fixation image is presented at a randomly selected grid point and the fixation position is redrawn every N milliseconds. FixationMove > 0 can be used to train subjects to touch different screen locations or to calibrate an eyetracker.
FixationScale: Size of fixation image in units of sample image width.

FixationScale (computed internally and stored in ENV.FixationScale instead of provided by user in TASK params): Size of the fixation dot or image (ie FixationUsesSample=1) in units of sample image width

FixationSizeInches: Size of fixation dot or image (ie FixationUsesSample=1) in physical inches on the screen

FixationUsesSample: FixationUsesSample=0, a fixation circle is shown for subject to touch; FixationUsesSample=1, sample image is shown as the fixation image. This allows implementation of a trianing strategy where the subject has to engage the sample image nfixations number of times before the choice screen.

GridScale (deprecated, replaced by GridSpacingInches): Determines intergridpoint spacing. Can think of this as the resolution of grid. gridscale=1 means intergridpoint spacing is equal to the width of the sample image. Finer grid resolutions (gridscale<1) can be used for more precise sample positioning.

GridSpacingInches: Determines intergridpoint spacing in physical inches on screen.

HideChoiceDistractors: HideChoiceDistractors=1, hides the same or different button so that subject sees only the correct one to touch. Still gets punished if touches blank area where the incorrect button would have been. This only applies to same-different choice screen. See HideTestDistractors for test response screen used in SR2 and M2S.

HideTestDistractors: HideTestDistractors=1, hides the distractor choices so that subject only sees matching choice. Still gets punished if touches blank area where the incorrect button would have been.

Homecage: Where task was performed. 0=lab 1=subject's home

ImageBagsSample: List of (list of) paths, where entries at the top level are directories / imagepaths for the sample images of one group; e.g. [['/bear_images', '/dog_images'], '/face_images'] is a {bear, dog} versus face task

ImageBagsTest: List of (list of) paths, where entries at the top level are directories / imagepaths for the test images of one group; e.g. [['/buttons/bear_icon.png, '/buttons/dog_icon.png'], ['/buttons/face_icon1.png, '/buttons/face_icon2.png']]

ImageRewardsList: List of paths containing user-specified reward per image. Images in the image_reward_list file need to be referenced by their complete path. ImageReward values: 0=no feedback (no reward or punish for that sample image) >0=user set reward for that sample image, overrides bonus reward behavior. These can be partial lists. For images where reward is manually specified, then default bonus reward behavior is used. No corresponding list is used for test (choice) images. Instead, specify reward for a whole class by listing reward for each image in that class in ImageRewardsList.

KeepSampleON: KeepSampleON=0, sample is presented only for sampleON milliseconds for a delayed match-to-sample, KeepSampleON=1 sample remains on during choice screen. This implements a spatial match to sample.

KeepTestON: KeepTestON=0, test is presented only for testON milliseconds, KeepTestON=1 test remains on during choice screen. This only applies to same-different task when responses are indicated on additional choice screen following test screen.

Liquid: 1=water 2=water-condensed milk 3=marshmallow slurry (4/30mL)

NConsecutiveHitsforBonus: How many consecutive hits subject needs for the reward amount to increase.  If NConsecutiveHitsforBonus=4, then subject will get 2x reward for correct responses on 4 consecutive trials, 3x reward for correct responses on 8 consecutive trials, up to nrewardmax times of 1x reward. This is a way to make chance on a 2AFC task be virtually < 50% since reward is jointly distributed across trials rather than independently on the current trial.

NFixations: Number of times fixation dot needs to be pressed to advance to the match to sample phase of the task. nfixations=1 means the subject simply has to press the fixation dot once before the sample is presented. This mode allow parametric control over fixed ratio scheduling.

NGridPoints: Number of display grid points in either direction. Produces square grid. 3x3 is typical. Images (fixation,sample, & test) will appear centered on one of the grid points. Grid is serially zero indexed by rows then columns. ngridpoints can be made larger to allow for more response choices to be simultaneously displayed.

NRewardMax: Max number of rewards that can be given for a successful trial. This caps how much extra (bonus) reward subject can get for successful completion of consecutive trials. If nrewardmax=3, then subject can get up to 3x reward for completing 3*NConsecutiveHitsforBonus consecutive trials successfully, and then would get 3x reward after that until gets a trial wrong.

NStickyResponse: Number of times subject can choose the same location on the screen before force them out of it by placing the correct answer somewhere else (i.e. if they have response bias, then on the next trial, the correct choice is drawn somewhere away from that bias). Currently not implemented for same-different task or SR2

NTrialsPerBagBlock: if 0, randomly samples from all bags (default: interleaved match-t0-sample), if >0, samples N consecutive images from the same sample image bag. This is equivalent to blocking the session so that training is done in object blocks rather than interleaving all objects. After N trials are completed for bag i, proceeds to next bag i+1 according to bag sequence specified in ImageBagsSample. When all bags have been sampled NTrialsPerBagBlock times, starts back at bag 0.

NTrialsPerBagBlock: if 0, randomly samples from all bags (default: interleaved match-t0-sample), if >0, samples N consecutive images from the same sample image bag. This is equivalent to blocking the session so that training is done in object blocks rather than interleaving all objects. After N trials are completed for bag i, proceeds to next bag i+1 according to bag sequence specified in ImageBagsSample. When all bags have been sampled NTrialsPerBagBlock times, starts back at bag 0.

ObjectGridIndex: Used for SR task. If this variable is set, then each object is tied to a particular location on the grid. ObjectGrid.length must equal objectlist.length for appropriate assignment of each object label to a grid location

Pump: 1=adafruit peristaltic 2=submersible centrifugal tcs 3=diaphragm pump tcs 4=piezoelectric 3mL takasago 5=newer diaphragm pumps tcs 6=piezoelectric 7mL takasago

PunishTimeOut: Time out in milliseconds for incorrect responses. Black square and incorrect sound may be presented for feedback during this time.

RewardPer1000Trials: Amount of liquid reward in mL for 1000 correct trials. For macaques, this is around 100mL for every 1000 correct trials.

RewardStage: RewardStage=0 rewards for successful fixtion and skips the choice phase of task. RewardStage=1 rewards for selecting the correct choice.

SampleGridIndex: Index on grid where sample image appears. SampleGridIndex=4 centers the image on a 3x3 grid, where ngridpoints=3

SampleOFF: Duration in milliseconds that a gray screen is presented after the sample image before the response screen. This implements the delay in a DMS task. SampleOFF=0, leads to no delay

SampleON: Duration in milliseconds that sample image is presented

SampleScale (computed internally and stored in ENV.SampleScale instead of provided by user in TASK params): Size of sample image in units of sample image width. sampleScale=1 displays a npx x npx image on npx x npx screen pixels on the screen (i.e. no up or down sampling/resizing/filtering of the image)

SampleSizeInches: Size of sample image in physical inches on the screen. sampleSizeInches = 0.834444 displays a 256 x 256 image on 256 x 256 screen pixels on the google pixel c screen (i.e. no up or down sampling/resizing/filtering of the image)

Separated: 0=subject was paired with conspecific during task, 1=individual housed was separated from conspecific

Species: marmoset, macaque, or human

StaticFixationGridIndex: Index on the grid where the fixation image will appear. If FixationMove>0, then StaticFixationGridindex is ignored.

Tablet (deprecated, replaced by auto-detected ENV.DeviceName): nexus9, samsung10, pixelc

TestGridIndex: Index on grid where test images (choices) appear.

TestON: TestON > 0 indicates a Same-Different task so that last screen is a new choice screen with same (circle) and different (square) buttons. Test image extinguishes after TestON milliseconds, followed by TestOFF pause, followed by choice screen. If KeepTestON=1, then test image is on for TestON milliseconds and then remains on for choice screen

TestOFF: Choice screen appears TestOFF milliseconds after test image is extinguished. If TestOFF=0, then test screen does not extinguish (go to blank gray) until same-different choice screen appears. If KeepTestON=1, then test image reappears during the same-different choice screen.

TestScale (computed internally and stored in ENV.TestScale instead of provided by user in TASK params): Size of the test image in units of sample image width

TestSizeImages: Size of the test image in physical inches on the screen

Weight: Weight in kilograms

## ENV
AgentRFID: If CheckRFID>0, then fetches AgentRFID from database to check against incoming RFID reads to determine if correct agent is performing task. If tag doesn't match AgentRFID, task locks out and waits for a valid tag read

BatteryLDT: Stores any status update from the battery API, L=battery level in %  D=estimated time until battery discharges  T=Date.now()-StartDate timestamp of latest battery status update

CanvasRatio: Ratio of the logical canvas pixels to the physical screen pixels = BackingStoreRatio/DevicePixelRatio

ChoiceRadius: Radius (width) of same circle (different square) in pixels. This is not set by the user. Rather, user specifies ChoiceScale, and then ChoiceRadius stores the actual pixel-based size in the json data file.

ChoiceColor: Defaults to white circle (same) and square (different) buttons for same-different choice screen

ChoiceScale: Size of choice circle and square in units of sample image width

CurrentDate: date & time when task session was initiated

DataFileName: complete file path and name of datafile

DevicePixelRatio: In a typical retina display, there can be a devicePixelRatio of 2 so that each 1x1 logical pixel is rendered using 2x2 logical pixels. This upsampling requires interpolation and can lead to blurring over your image. However, this can be compensated by setting the CanvasRatio = BackingStoreRatio/DevicePixelRatio

DeviceBrand: eg Not available (for google devices) or Apple (depends on deviceAPI)

DeviceBrowserName: eg Chrome or Safari(depends on deviceAPI)

DeviceBrowserVerion: eg 78.0.3904.90 or 12.0 (depends on deviceAPI)

DeviceGPU: eg Adreno (TM) 640 or Apple A9 GPU (depends on deviceAPI)

DeviceName: the name of the device used by mkturk to search firestore records eg Pixel 4 XL or iPhone 6s Plus (depends on deviceAPI)

DeviceOSName: eg Android 10 or iOS 12.0.1 (depends on deviceAPI)

DeviceOSCodename: eg Android or iOS (depends on deviceAPI)

DeviceOSVersion: eg 10 or 12.0.1 (depends on deviceAPI)

DeviceScreenWidth: physical display pixels (depends on deviceAPI)

DeviceScreenHeight: physical display pixels (depends on deviceAPI)

DeviceTouchscreen: 0 (not available) or 1 (available), indicates if touchscreen functionality available on device (depends on deviceAPI)

DeviceType:desktop or mobile(depends on deviceAPI)

FixationRadius: Radius of fixation image in pixels. This is not set by the user. Rather, user specifies FixationScale, and then FixationRadius stores the actual pixel-based size in the json data file.

FixationColor: color of fixation dot if image is not used

FixationScale: Size of the fixation dot or image (ie FixationUsesSample=1) in units of sample image width

ImageHeightPixels: The height of the sample image in pixels. The image height is used as the unit for the vertical dimension. SampleScale, FixationScale, TestScale, or GridScale = 1 means correspond to 1 unit in terms of the sample image

ImageWidthPixels: The width of the sample image in pixels. The image width is used as the unit for the horizontal dimension. SampleScale, FixationScale, TestScale, or GridScale = 1 means correspond to 1 unit in terms of the sample image

Ordered_Samplebag_Filenames: Names of the sample image bags. Each bag is treated as a separate label class

Ordered_Testbag_Filenames: Names of the test image bags. Each test image bag serves as the label images for each sample class

Ordered_SampleImageRewardList: Reward specification for each image: -1=default behavior 0=now reward/punish feedback >0=fixed reward for that image, value overrides default task bonus reward behavior

ParamFileDate: Date of revision on dropbox of the parameter file used for loading the task.

ParamFileName: Name of the parameter file used for loading the task

ParamFileRev: Dropbox revision # of the parameter file. The revision number is used to determine if a new version of the parameter file was found

PhysicalPPI: physical quantity, should equal ENV.DevicePixelRatio*ENV.ViewportPPI, physical device pixels per inch

RewardDuration: How long the reward is dispensed in milliseconds of time the pump is on. RewardDuration is derived by the user-specified RewardPer1000Trials in mL and the calibration curve for that pump type. 

SampleScale: Size of sample image in units of sample image width. sampleScale=1 displays a npx x npx image on npx x npx screen pixels on the screen (i.e. no up or down sampling/resizing/filtering of the image)

ScreenRatio: the standard device pixel ratio for that screen assuming no scaling (retrieved from firestore device record if available)

ScreenSizeInches: physical quantity, recorded physical size of screen (retrieved from firestore device record if available)

ScreenSizePixels: physical quantity, recorded # of pixels of screen (retrieved from firestore device record if available)

Subject: Name of subject, chosen from pulldown menu at beginning of task.

TestScale: Size of the test image in units of sample image width

UserAgent: info from window.navigator.UserAgent

ViewportPixels: derived quantity computed as ENV.ViewportPixels = ENV.ScreenPhysicalPixels/ENV.DevicePixelRatio where ScreenPhysicalPixels is the screen spec retrieved from firestore, and DevicePixelRatio is from the scaling being used by the user as detected during the browser session

ViewportPPI: derived quantity, equals ENV.ViewportPixels[0]/ENV.ScreenSizeInches[0], viewport pixels per inch (computed from first screen dimension)

XGridCenter: The location of all grid points in pixels. Follows from user-specified NGridPoints and GridScale (e.g. to create a 3x3 grid with adjacent non-overlapping images, set NGridPoints=3, GridScale=1 and XGridCenters will be spaced by ImageWidthPixels)

YGridCenter: The location of all grid points in pixels. Follows from user-specified NGridPoints and GridScale (e.g. to create a 3x3 grid with adjacent non-overlapping images, set NGridPoints=3, GridScale=1 and YGridCenters will be spaced by ImageHeightPixels)

## TRIAL
AllFixationXYT: records all fixation touches as opposed to most recent fixation touch in FixationXYT. If NFixations > 1, then AllFixationXYT will have multiple touch entries on a given trial. X,Y=horizontal,vertical position of fixation touch in pixels T=time of touch measured during Date.now()

AutomatorStage: Stage number if Automator=1

CorrectItem: Index of the correct item on each trial

FixationGridIndex: Fixation grid location on each trial.

FixationTouchEvent: The type of touch event that was registered for that trial (e.g. touchheld or touchbroke if there was a required FixationDuration>0 period)

FixationXYT: records most recent fixation touch on each trial. X,Y=horizontal,vertical position of fixation touch in pixels T=time of touch measured using Date.now()

NReward: The number of rewards given at the end of each trial; usually 1x reward unless subject got many trials in a row correct in which case may get bonus reward according to nconsecutivehitsforbonus.

NRFID: total # of RFID tag reads

NWeights: total # of weight reads

Response: Index of the chosen item on each trial. For M2S and SR2, response is measured for touches on the test screen. For same-different task, this is collected at the choice screen.

ResponseTouchEvent: The type of touch event that was registered for that trial (e.g. touchheld, touchbroken, TimeOut)

ResponseXYT: records the coordinates and time of touching the choice item. X,Y=horizontal,vertical position of response touch in pixels T=time of touch measured using Date.now()

RFIDTag: tag read 

RFIDTime: time in milliseconds that tag was read

RFIDTrial: trial# during which tag was read

Sample: Index of sample displayed on each trial. Index into list of imagebags for that session

StartTime: Time recorded when the most recent fixation dot was shown for that trial.

Test: Indices of test choices displayed on each trial where N indices are stored for an N-AFC task. Index into list of test imagebags for that session

Weight: weight in grams

WeightTime: time in milliseconds of weight reading

WeightTrial: trial # during which tag was read