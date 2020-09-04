import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const db = firebase.firestore();
const storage = firebase.storage();
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

  public async getDocumentData(collection: string, id: string) {
    return db.collection(collection).doc(id).get().then(doc => {
      return doc.data();
    });
  }

  public async getStorageFile(path: string) {
    let fileRef = storage.ref().child(path);
    let url = await fileRef.getDownloadURL().catch(e => {
      console.error('Error Getting URL');
    });
    let response = await fetch(url);
    let file = await response.json();
    return file;
  }

  public createContinuousArray(reference: any[], target: any[]) {
    if (reference.length === target.length) {
      let ref = [];
      let tar = [];

      for (let i = 0; i < reference.length; i++) {
        if (reference[i]) {
          ref.push(reference[i]);
          tar.push(target[i]);
        }
      }
      return {reference: ref, target: tar};
    } else {
      throw "Array Length Mismatch";
    }
  }

  public mergeTwoNumberArrays(arr1: any[], arr2: any[]) {
    if (arr1.length === arr2.length) {
      let arr: Number[] = [];
      for (let i = 0; i < arr1.length; i++) {
        if (!arr1[i]) {
          arr1[i] = 0;
        }

        if (!arr2[i]) {
          arr2[i] = 0;
        }

        arr.push(arr1[i] + arr2[i])
      }
      return arr;
    } else {
      throw "Array Length Mismatch";
    }
  }

  


}