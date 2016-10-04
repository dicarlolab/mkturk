Original mkturk code. This runs DMS task and is the working version as of 10.04.2016.

Images are grouped into folders. A task would simply choose the folder for drawing sample images and the folder for drawing test images in a DMS. Here is an example parameter file:

[{
"Weight":11,
"Species":"macaque",
"Homecage":1,
"Separated":1,
"Liquid":1,
"Tablet":"samsung10",
"Pump":5,
"TestedObjects":[0,1,2,3,4,5,6,7,8,9],
"Nway":2,
"SampleGridIndex":[4],
"TestGridIndex":[2,8],
"RewardStage":1,
"RewardPer1000Trials":100,
"PunishTimeOut":1500,
"FixationDuration":100,
"FixationRadius":30,
"FixationMove":0,
"SampleON":100,
"SampleOFF":100,
"KeepSampleON":0,
"HideTestDistractors":0,
"SampleBlockSize":0,
"NStickyResponse":5,
"ConsecutiveHitsITI":8000,
"NConsecutiveHitsforBonus":4,
"NRewardMax":1,
**"ImageFolderSample":13,**
**"ImageFolderTest":12,**
"SampleScale":1.25,
"TestScale":1.25,
"Automator":0
}]
