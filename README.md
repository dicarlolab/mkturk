# mkturk
Wireless touchscreen behavioral training

Todo: 
* ~~Refactor folder structure~~
* ~~Dynamically populate subject list w/ paramfiles, not hard coded subject names.~~
* Improve subject selection UI (don't use dropdown menu with small buttons)
* Explicit sound referencing - remove constraint of file pattern matching; currently convention 'au'[*]
* Format parameter screen to be human readable 
* Reformat datafiles - 
    * unix timestamps; 
    * task constructors with random seeds; behavior; touch; separate out? Normalize.
* Reformat paramfiles
    * ~~Separate fairly static settings (e.g. subject parameters; tablet parameters) from very dynamic ones (imagebags)~~
    * ~~Fairly static parameters: "Weight": 14,
     "Species": "macaque",
     "Homecage": 1,
     "Separated": 1,
     "Liquid": 1,
     "Tablet": "samsung10",
     "Pump": 5,~~
* ~~Remove opaque dependencies (e.g. species changes several things, but it should simply be reported - not used as a variable that controls task logic)~~
* Control image display in terms of pixels or in terms of screen proportion - remove grid system 
* ~~(Dynamically populate automator list?)~~
* ~~Fix sound clipping on tablet~~
* ~~Refactor: Slim down main mkturk.html; improve readability~~
    * ~~Move "trial" logic into its own function~~
    * ~~Group dropbox related functions into an object~~
* ~~Deterministic trial generation~~ 
    * ~~Random seed that is specified in task constructor~~ 
    * ~~Trial number tracker that is revivified between web page loads (behavioral sessions); for automators and perhaps for non-automator sessions (so that the same sequence isn't played everytime the same parameters are loaded)~~
* ~~Record all touches~~
* Heads up display
* Option for ~~turning off consecutive reward~~
* ModelTurk task -> task constructor file -> MonkeyTurk task pipeline