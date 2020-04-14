import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944"
};
firebase.initializeApp(firebaseConfig);

import { Mkcolony } from './mkcolony';

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

const db = firebase.firestore();

let mkcolony = new Mkcolony();

let ret = mkcolony.loadWtData(db.collection('marmosets'));
ret.then(docs => {
  mkcolony.populateTable(docs);
  mkcolony.plotColonyData();
});