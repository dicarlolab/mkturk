# Parameters

## TASK
Automator: Boolean on/off

AutomatorFilePath: File path to params for the automator curriculum.

ChoiceTimeOut: Time in milliseconds that subject has to make a choice in AFC task before trial aborts and new sample is displayed

ConsecutiveHitsITI: Maximum time in milliseconds allowed to elapse from the previous trial for the current trial to count toward reward accumulation for a string of correct responses. For example, if ConsecutiveHitsITI=8000, then subject has 8 seconds to complete the next trial successfully and the consecutivehits counter will be incremented. Otherwise, the number of consecutivehits will get set to 0

CurrentAutomatorStage: index of current training stage of automator.

FixationDuration: How long subject has to hold fixation touch in milliseconds for a successful fixation to register.

FixationMove: FixationMove=0, fixation image is presented at fixationGridindex. FixationMove=N, N>0, fixation image is presented at a randomly selected grid point and the fixation position is redrawn every N milliseconds. FixationMove > 0 can be used to train subjects to touch different screen locations or to calibrate an eyetracker.
FixationScale: Size of fixation image in units of sample image width.

FixationUsesSample: FixationUsesSample=0, a fixation circle is shown for subject to touch; FixationUsesSample=1, sample image is shown as the fixation image. This allows implementation of a trianing strategy where the subject has to engage the sample image nfixations number of times before the choice screen.

GridScale: Determines intergridpoint spacing. Can think of this as the resolution of grid. gridscale=1 means intergridpoint spacing is equal to the width of the sample image. Finer grid resolutions (gridscale<1) can be used for more precise sample positioning.

HideTestDistractors: HideTestDistractors=1, hides the distractor choices so that subject only sees matching choice.

Homecage: Where task was performed. 0=lab 1=subject's home

ImageBagsSample: List of (list of) paths, where entries at the top level are directories / imagepaths for the sample images of one group; e.g. [['/bear_images', '/dog_images'], '/face_images'] is a {bear, dog} versus face task

ImageBagsTest: List of (list of) paths, where entries at the top level are directories / imagepaths for the test images of one group; e.g. [['/buttons/bear_icon.png, '/buttons/dog_icon.png'], ['/buttons/face_icon1.png, '/buttons/face_icon2.png']]

KeepSampleON: KeepSampleON=0, sample is presented only for sampleON milliseconds for a delayed match-to-sample, KeepSampleON=1 sample remains on during choice scree. This implements a spatial match to sample.

Liquid: 1=water 2=water-condensed milk 3=marshmallow slurry (4/30mL)

NConsecutiveHitsforBonus: How many consecutive hits subject needs for the reward amount to increase.  If NConsecutiveHitsforBonus=4, then subject will get 2x reward for correct responses on 4 consecutive trials, 3x reward for correct responses on 8 consecutive trials, up to nrewardmax times of 1x reward. This is a way to make chance on a 2AFC task be virtually < 50% since reward is jointly distributed across trials rather than independently on the current trial.

NFixations: Number of times fixation dot needs to be pressed to advance to the match to sample phase of the task. nfixations=1 means the subject simply has to press the fixation dot once before the sample is presented. This mode allow parametric control over fixed ratio scheduling.

NGridPoints: Number of display grid points in either direction. Produces square grid. 3x3 is typical. Images (fixation,sample, & test) will appear centered on one of the grid points. Grid is serially zero indexed by rows then columns. ngridpoints can be made larger to allow for more response choices to be simultaneously displayed.

NRewardMax: Max number of rewards that can be given for a successful trial. This caps how much extra (bonus) reward subject can get for successful completion of consecutive trials. If nrewardmax=3, then subject can get up to 3x reward for completing 3*NConsecutiveHitsforBonus consecutive trials successfully, and then would get 3x reward after that until gets a trial wrong.

NStickyResponse: Number of times subject can choose the same location on the screen before force them out of it by placing the correct answer somewhere else (i.e. if they have response bias, then on the next trial, the correct choice is drawn somewhere away from that bias).

ObjectGridIndex: Used for SR task. If this variable is set, then each object is tied to a particular location on the grid. ObjectGrid.length must equal objectlist.length for appropriate assignment of each object label to a grid location

Pump: 1=adafruit peristaltic 2=submersible centrifugal tcs 3=diaphragm pump tcs 4=piezoelectric 3mL takasago 5=newer diaphragm pumps tcs 6=piezoelectric 7mL takasago

PunishTimeOut: Time out in milliseconds for incorrect responses. Black square and incorrect sound may be presented for feedback during this time.

RewardPer1000Trials: Amount of liquid reward in mL for 1000 correct trials. For macaques, this is around 100mL for every 1000 correct trials.

RewardStage: RewardStage=0 rewards for successful fixtion and skips the choice phase of task. RewardStage=1 rewards for selecting the correct choice.

SampleGridIndex: Index on grid where sample image appears. SampleGridIndex=4 centers the image on a 3x3 grid, where ngridpoints=3

SampleOFF: Duration in milliseconds that a gray screen is presented after the sample image before the response screen. This implements the delay in a DMS task. SampleOFF=0, leads to no delay

SampleON: Duration in milliseconds that sample image is presented

SampleScale: Size of sample image in units of sample image width. sampleScal=1 displays a npx x npx image on npx x npx screen pixels on the screen (i.e. no up or down sampling/resizing/filtering of the image)

Separated: 0=subject was paired with conspecific during task, 1=individual housed was separated from conspecific

Species: marmoset, macaque, or human

StaticFixationGridIndex: Index on the grid where the fixation image will appear. If FixationMove>0, then StaticFixationGridindex is ignored.

Tablet: nexus9, samsung10, pixelc

TestGridIndex: Index on grid where test images (choices) appear.

TestScale: Size of the test image in units of sample image width

Weight: Weight in kilograms

## ENV
BatteryLDT:

CanvasRatio:

CurrentDate:

DataFileName:

DevicePixelRatio:

FixationRadius: Radius of fixation image in pixels. This is not set by the user. Rather, user specifies FixationScale, and then FixationRadius stores the actual pixel-based size in the json data file.

ImageHeightPixels:

ImageWidthPixels:

Ordered_Samplebag_Filenames:

Ordered_Testbag_Filenames:

ParamFileDate:

ParamFileName:

ParamFileRev:

RewardDuration:

Subject: Name of subject, chosen from pulldown menu at beginning of task.

XGridCenter:

YGridCenter:

## TRIAL
AllFixationXYT:

AutomatorStage:

CorrectItem:

FixationGridIndex: Fixation grid location on each trial.

FixationTouchEvent:

FixationXYT:

NReward: The number of rewards given at the end of the trial; usually 1x reward unless subject got many trials in a row correct in which case may get bonus reward according to nconsecutivehitsforbonus.

Response:

ResponseTouchEvent: 

ResponseXYT: 

Sample: 

StartTime: 

Test: 
