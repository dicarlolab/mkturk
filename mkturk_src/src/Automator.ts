import * as T from "./Interfaces"; 

export class Automator {
  public async automateTask(amData: any[], th: T.trialhistory, stageHash: any, TASK: T.TASK, ENV: T.ENV, FLAGS: T.FLAGS) {
    let currStageIdx = TASK.CurrentAutomatorStage;
    let currStage = stageHash(TASK);
    let amEventStr = [];

    for (let key in amData[currStageIdx]) {
      if (amData[currStageIdx].hasOwnProperty(key)) {
        if (key === 'MinPercentCriterion' || key === 'MinTrialsCriterion'
          || key === 'CurrentAutomatorStageName') {
            continue;
        }

        let taskKeyVal = TASK[key].toString();
        let amDataKeyVal = amData[currStageIdx][key].toString();

        if (!taskKeyVal == amDataKeyVal) {
          let str = 'WRITE NEW PARAMS: ' + 'Discrepency between TASK.' + key 
            + '=' + TASK[key] + ' and automator_data[' + currStageIdx
            + '][' + key + ']=' + amData[currStageIdx][key];
          amEventStr.push(str);
          console.log(str);
          TASK[key] = amData[currStageIdx][key];
          FLAGS.need2writeParameters = 1;
        }
      }
    }

    ENV.MinPercentCriterion = amData[currStageIdx].MinPercentCriterion;
    ENV.MinTrialsCriterion = amData[currStageIdx].MinTrialsCriterion;
    ENV.CurrentAutomatorStageName 
      = amData[currStageIdx].CurrentAutomatorStageName;

    // calculate current pctcorrect and ntrials
    let funcreturn = computeRunningHistory(ENV.MinTrialsCriterion, currStage)
  }


}