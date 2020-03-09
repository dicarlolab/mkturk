import * as T from "./Interfaces"; 


export class Utils {
  constructor () {

  }

  public async runPump(str: string) {
    //TODO: write function
    console.log(str);
  }

  public purgeTrackingVariables(CURRTRIAL: T.CURRTRIAL, TRIAL: T.TRIAL, ENV: T.ENV, FLAGS: T.FLAGS) {


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
      
    }   
  }
}