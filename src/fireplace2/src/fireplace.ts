import firebase from 'firebase/app';
import { matrix, subtract } from 'mathjs';


const db = firebase.firestore();

export class Fireplace {
  public agents: any;
  public queryStartDateValue: number;
  public queryEndDateValue: number;
  public tLastQuery: number;
  public tQueryInterval: number;

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
      this.computeStatistics(snapshot);
    }
  }

  private async computeStatistics(snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) {
    this.tLastQuery = Date.now();
    console.log('snapshot', snapshot);
    let idx = 0;
    snapshot.forEach(doc => {

      console.log(idx, doc.data().CurrentDateValue);
      idx++;
      if (doc.data().Agent == 'Bloo') {
        let r = matrix(doc.data().Response);
        let c = matrix(doc.data().CorrectItem);
        console.log('r:', r, 'c:', c);
      }
    });
  }

  
}