# mkturk v2.0

This is a work-in-progress. 

# Goals (roughly in order of priority): 
* Convert mkturk v1 code to work with Dropbox API v2. 
* Create a codebase that allows for variants of the delayed AFC match-to-sample task template to be easily written (e.g. stimulus-response, serial target match-to-sample, n-back)
* In the spirit of v1's params.txt system, have a human-readable, online interface that can be used to specify aspects of the monkey's task while it is running
* Streamline the current process for adding novel stimuli to a preexisting task 
	* automate the packing of images 
	* remove the user's responsibility to follow hard-coded naming / folder-ing conventions on the user's image files
* Replicate the functionality of "automator.js" - a task-switching automator that allows for automated traversal through a monkey training pipeline
* Add a functionality for automatically archiving tasks and stimulus images, and enabling one-command recreation of previous task HTMLs for record-keeping / replication / inheritance purposes
* Automate database storage of monkey psychophysics data to a local lab server (e.g. dicarlo5), in line with the lab specified data format

# Code structure (tentative): 
* Base code which applies to every mkturk task - does universal things like specifying a base HTML template, logging to Dropbox / some DB, etc.
* Task template code which specifies the rules, temporal structure, and other general aspects of a task. Particulars like the stimulus set to be used, reward amount, etc. are not specified here; this is supposed to be a template that anyone can plug-and-play by using the next item. 
* An online interface (like params.txt) used to specify the task template and the parameters of that task (e.g. which image folder / meta to pull stimuli from, stim duration, juice) by the experimenter or by a task automator. Can be used to perform day-to-day (or trial-to-trial) tweaks during data collection. 
* A piece of automator code in which a user-specified sequence of task templates / task params can be traversed based on some specified criteria. (e.g. for a training pipeline)

