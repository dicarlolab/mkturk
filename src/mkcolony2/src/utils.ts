import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const db = firebase.firestore();
type Timestamp = firebase.firestore.Timestamp;

export class Utils {
  constructor() {

  }

  public async getFirestoreData(collection: string) {
  
    return db.collection(collection).get().then(async snapshot => {
      let promises = snapshot.docs.map(x => x.data());
      return promises;
    });

  }

  public isValidDate(obj: any) {
    return !isNaN(obj) && obj instanceof Date;
  }


  public isDictionary(obj: any) {
    return obj && typeof obj === 'object' && obj.constructor === Object;
  }

  public isString(obj: any) {
    return obj && typeof obj === 'string' || obj.constructor === String;
  }

  public isNumber(obj: any) {
    return typeof obj === 'number' && isFinite(obj);
  }

  public timestampsToDates(data: any[], precision: string) {
    function datePrecisionHelper(elem: Timestamp, idx: number, arr: any[]) {
      try {
        arr[idx] = elem.toDate().toLocaleString('en-US')
        let tmp = elem.toDate().toLocaleString('en-US').split(',')[0];
        tmp = tmp.split('/')[2] + '-';
      } catch {
        
      }
    }
  }


  public findLastValidIndexOf(arr: any[]) {
    for (let idx = arr.length - 1; idx >= 0; idx--) {
      if (arr[idx]) {
        return idx;
      }
    }
    return -1;
  }

  public isNotEmptyObject(obj: any) {
    for (let k in obj) {
      if (obj[k]) {
        return true;
      }
    }
    return false;
  }


}