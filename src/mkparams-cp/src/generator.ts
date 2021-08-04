import firebase from 'firebase/app';
import 'firebase/firestore';
const db = firebase.firestore();
export class Generator {


  public retrieveFirestoreDocs(collection: string) {
    let colRef = db.collection(collection);

  }
}