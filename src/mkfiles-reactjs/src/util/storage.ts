import { firebaseApp } from '../Auth';
import { getApp } from 'firebase/app';
import { getFirestore, doc, collection, Query, query, where } from "firebase/firestore";
import { getStorage, StorageReference, ref } from "firebase/storage";


const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const storageRef = ref(storage); 
const rootRef = ref(storageRef, 'mkturkfiles');

export function listStuff() {
  return rootRef;
}