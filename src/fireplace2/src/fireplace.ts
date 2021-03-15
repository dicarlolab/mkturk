import firebase from 'firebase/app';


const db = firebase.firestore();

export class Fireplace {
  public agents: any;

  constructor() {
  }

  public async getAgentList() {
    
    let stuff = await db.collection('marmosets').get().then(snapshot => {
      return snapshot.docs.map(x => x.data());
    });

    return stuff;

  }

  
}