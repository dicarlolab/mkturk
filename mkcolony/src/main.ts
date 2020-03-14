import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/functions';
import { Mkcolony } from './mkcolony';

const firebaseConfig = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944"
};

firebase.initializeApp(firebaseConfig);

let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().getRedirectResult().then(result => {
  if (result.user) {
    console.log("Sign-In Redirect Result, USER:", result.user.email);
  } else if (firebase.auth().currentUser) {
    console.log('Sign-In Redirect Result, USER:', firebase.auth().currentUser);
  } else {
    firebase.auth().signInWithRedirect(provider);
  }
});

const functions = firebase.functions();
const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();
const rootRef = storageRef.child('mkturkfiles/');

const clTableDiv = document.querySelector('#colony-table') as HTMLDivElement;
const clWtPlotDiv 
  = document.querySelector('#colony-weight-plot') as HTMLDivElement;
const clFlPlotDiv
  = document.querySelector('#colony-fluid-plot') as HTMLDivElement;

let mkcolony = new Mkcolony(clTableDiv, clWtPlotDiv, clFlPlotDiv);

let ret = mkcolony.loadData(db.collection('marmosets'));
ret.then(docs => {
  mkcolony.populateTable(docs);
  console.log('docs', docs);
  mkcolony.reorganizeData(docs);
});