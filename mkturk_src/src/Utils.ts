import * as T from "./Interfaces"; 


export class Utils {
  constructor () {

  }

  public async runPump(str: string) {
    //TODO: write function
    console.log(str);
  }

  public purgeTrackingVariables(CURRTRIAL: T.CURRTRIAL, TRIAL: T.TRIAL,
    EVENTS: T.EVENTS, ENV: T.ENV, FLAGS: T.FLAGS) {
    
    // purges heresies committed in the test period
    TRIAL = TRIAL.reset(ENV, FLAGS);

    ENV.CurrentDate = new Date();
    let dateStr = ENV.CurrentDate.toISOString();
    ENV.DataFileName = ENV.DataSavePath + ENV.Subject + '/'
      + dateStr.slice(0, dateStr.indexOf('.')) + '_' + ENV.Subject + '.txt';
    ENV.FirestoreDocRoot = dateStr.slice(0, dateStr.indexOf('.')) 
      + '_' + ENV.Subject;

    if (FLAGS.waitingforTouches > 0 || FLAGS.purge == true) {
      // purge requested by user at the beginning of the trial during
      // fixation (most likely)
      console.log('setting to 0');
      CURRTRIAL.num = 0;
      EVENTS.trialnum = 0;
    } else {
      console.log('setting to -1');
      // purge requested by automator at the end of a trial
      CURRTRIAL.num = -1;
    }

    FLAGS.sampleblockcount = 0;
    FLAGS.consecutivehits = 0;

    return;
  }
}