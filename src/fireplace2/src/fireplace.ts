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
    this.tLastQuery = Date.now();
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

      if (Array.isArray(d.Response)) {
        r = matrix(d.Response);
        c = matrix(d.CorrectItem);
        numCorrect = (<math.Matrix>filter(subtract(r, c) as math.Matrix, el => el == 0)).size()[0];
        numTrials = d.Response.length;
      } else {
        return; // skip to next iteration since d.Response is undefined
      }

      if (agentIdx > -1) {
        let dateIdx = data[agentIdx]['dates'].indexOf(dateString);
        if (dateIdx > -1) {
          data[agentIdx]['numTrials'][dateIdx] += numTrials;
          data[agentIdx]['numCorrect'][dateIdx] += numCorrect;
        } else {
          data[agentIdx]['dates'].push(dateString);
          data[agentIdx]['numTrials'].push(numTrials);
          data[agentIdx]['numCorrect'].push(numCorrect);
        }
        
      } else {
        agentList.push(d.Agent);
        data.push({
          agent: d.Agent,
          dates: [dateString],
          numTrials: [numTrials],
          numCorrect: [numCorrect]
        });
      }
    });
    this.constructTable(data);
  }

  private constructTable(data: any[]) {
    console.log(data);

    function numTrialAccessor(cell: Tabulator.CellComponent, params: any, onRendered: any) {
      if (params.range == 24) {
        let dateStringToday = new Date().toLocaleDateString();
        console.log(cell.getRow());
      }
      
    }

    let table = new Tabulator(this.tableElem, {
      data: data,
      layout: 'fitColumns',
      columns: [
        {
          title: 'n (today)',
          field: 'numTrials',
          formatter: numTrialAccessor,
          formatterParams: { range: 24 }
        },
        
      ],
      tooltips: true,
    });
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