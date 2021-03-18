import firebase from 'firebase/app';
import math, { matrix, subtract, filter } from 'mathjs';
import Tabulator from 'tabulator-tables';


const db = firebase.firestore();

export class Fireplace {
  public agents: any;
  public queryStartDateValue: number;
  public queryEndDateValue: number;
  public tLastQuery: number;
  public tQueryInterval: number;
  private tableElem: HTMLDivElement;
  private editorElem: HTMLDivElement;
  private table: Tabulator;

  constructor() {
    this.queryEndDateValue = new Date(new Date().toLocaleDateString()).valueOf() 
      + (24 * 3600 * 1000);
    this.queryStartDateValue = this.queryEndDateValue - (7 * 24 * 3600 * 1000);
    this.tQueryInterval = 20 * 1000;
    this.tLastQuery = 0;
  }

  public async getAgentList() {
    
    let stuff = await db.collection('marmosets').get().then(snapshot => {
      return snapshot.docs.map(x => x.data());
    });

    return stuff;

  }

  public async queryCallback(snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) {
    if (this.tLastQuery === 0 || Date.now() - this.tLastQuery > this.tQueryInterval) {
      this.processData(snapshot);
    }
  }

  private processData(snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) {
    // this.tLastQuery = Date.now();
    console.log('snapshot', snapshot);
    let data: any[] = [];
    let agentList: string[] = [];
    snapshot.forEach(doc => {
      let d = doc.data();
      let agentIdx = agentList.indexOf(d.Agent);
      let dateString = new Date(d.CurrentDateValue).toLocaleDateString();
      let r: math.Matrix;
      let c: math.Matrix;
      let numCorrect: number;
      let numTrials: number;
      let tLastTrial: number;

      if (Array.isArray(d.Response)) {
        r = matrix(d.Response);
        c = matrix(d.CorrectItem);
        numCorrect = (<math.Matrix>filter(subtract(r, c) as math.Matrix, el => el == 0)).size()[0];
        numTrials = d.Response.length;
        tLastTrial = d.CurrentDateValue + d.StartTime[d.StartTime.length - 1];
      } else {
        return; // skip to next iteration since d.Response is undefined
      }

      if (agentIdx > -1) {
        let dateIdx = data[agentIdx]['dates'].indexOf(dateString);
        if (dateIdx > -1) {
          data[agentIdx]['numTrials'][dateIdx] += numTrials;
          data[agentIdx]['numCorrect'][dateIdx] += numCorrect;
          data[agentIdx]['tLastTrial'] = tLastTrial;
        } else {
          data[agentIdx]['dates'].push(dateString);
          data[agentIdx]['numTrials'].push(numTrials);
          data[agentIdx]['numCorrect'].push(numCorrect);
          data[agentIdx]['tLastTrial'] = tLastTrial;
        }
        
      } else {
        agentList.push(d.Agent);
        data.push({
          agent: d.Agent,
          dates: [dateString],
          numTrials: [numTrials],
          numCorrect: [numCorrect],
          tLastTrial: tLastTrial
        });
      }
    });
    
    if (this.tLastQuery == 0) {
      console.log(this.table);
      this.constructTable(data);
      this.tLastQuery = Date.now();
    } else {
      this.updateTable(data);
      this.tLastQuery = Date.now();
    }
    
  }

  private constructTable(data: any[]) {
    let timeNow = Date.now();


    function numTrialMutator(value: any, data: any, type: any, params: any, component: any) {
      if (params.range == 24) {
        let dateStringToday = new Date().toLocaleDateString();
        let idx = data['dates'].indexOf(dateStringToday);
        if (idx > -1) {
          return data['numTrials'][idx];
        } else {
          return 0;
        }
      } else if (params.range == 48) {
        if (data['numTrials'].slice(1).slice(-2).length < 2) {
          return NaN;
        } else {
          let numTrialsSum = (
            data['numTrials'].slice(1).slice(-2).reduce((a: number, b: number) => a + b, 0)
          );
          return numTrialsSum / 2;
        }
      }
    }

    function pctCorrectMutator(value: any, data: any, type: any, params: any, component: any) {
      if (params.range == 24) {
        let dateStringToday = new Date().toLocaleDateString();
        let idx = data['dates'].indexOf(dateStringToday);
        if (idx > -1) {
          return Math.round(data['numCorrect'][idx] / data['numTrials'][idx] * 100);
        } else {
          return 0;
        }
      } else if (params.range == 48) {
        if (data['numCorrect'].slice(1).slice(-2).length < 2) {
          return NaN;
        } else {
          let numCorrectSum = (
            data['numCorrect'].slice(1).slice(-2).reduce((a: number, b: number) => a + b, 0)
          );
          let numTrialsSum = (
            data['numTrials'].slice(1).slice(-2).reduce((a: number, b: number) => a + b, 0)
          );
          return Math.round(numCorrectSum / numTrialsSum * 100);
        }
      }
    }

    function tSinceLastTrial(value: any, data: any, type: any, params: any, component: any) {
      let dtt = Date.now();
      console.log(dtt);
      return Math.round((dtt - data.tLastTrial) / 1000 / 60);
    }

    function tLastTrialFormat(cell: Tabulator.CellComponent) {
      if (cell.getValue() <= 5) {
        cell.getElement().style.background = '#198754';
      } else if (cell.getValue() > 5 && cell.getValue() < 60) {
        cell.getElement().style.background = 'dc3545';
      }
      return cell.getValue();
    }

    this.table = new Tabulator(this.tableElem, {
      data: data,
      layout: 'fitColumns',
      columns: [
        {
          title: 'Agent',
          field: 'agent'
        },
        {
          title: '% (today)',
          field: 'pctCorrectToday',
          mutator: pctCorrectMutator,
          mutatorParams: { range: 24 }
        },
        {
          title: 'n (today)',
          field: 'numTrialsToday',
          mutator: numTrialMutator,
          mutatorParams: { range: 24 }
        },
        {
          title: '% (-2d)',
          field: 'pctCorrectAvg',
          mutator: pctCorrectMutator,
          mutatorParams: { range: 48 }
        },
        {
          title: 'n (-2d)',
          field: 'numTrialsAvg',
          mutator: numTrialMutator,
          mutatorParams: { range: 48 }
        },
        {
          title: 'tLast',
          field: 'tSinceLastTrial',
          mutator: tSinceLastTrial,
          formatter: tLastTrialFormat
        }
        
        
      ],
      tooltips: true,
      dataLoaded: function(data) {
        console.log(data);
      }
    });
  }

  private updateTable(data: any[]) {
    this.table.replaceData(data);
  }

  public registerDomElement(type: string, elem: HTMLDivElement) {
    if (type === 'table') {
      console.log(elem);
      this.tableElem = elem;
    } else if (type === 'editor') {
      this.editorElem = elem;
    }
    
  }



  
}