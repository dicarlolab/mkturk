import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944",
  clientId: "1003719887944-rlc06cjecqrp9fgvmvo56vqop1otm9ht.apps.googleusercontent.com"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();


import { Mkcolony } from './mkcolony';
let signInModal = document.querySelector('#sign-in-modal') as HTMLDialogElement;
let modalCloseBtn
  = document.querySelector('#modal-close-btn') as HTMLButtonElement;
let modalSignInBtn
  = document.querySelector('#modal-sign-in-btn') as HTMLButtonElement;
let signInForm = document.querySelector('#sign-in-form') as HTMLFormElement;
let signInNavLink = document.querySelector('#sign-in-nav-link') as HTMLElement;
let signOutNavLink = document.querySelector('#sign-out-nav-link') as HTMLElement;


auth.getRedirectResult().then(result => {
  console.log('result', result);
  if (result.credential) {
    let token = result.credential;
    console.log('token:', token);
    console.log('result', result);
  } else {
    console.log('token: null');
  }
}).catch(e => {
  let errorCode = e.code;
  let errorMsg = e.message;
  let errorEmail = e.email;
  let errorCred = e.credential;

  if (errorCode === 'auth/account-exists-with-different-credentials') {
    alert('You have already signed up with a different auth provider for that email');
  } else {
    console.error(e);
  }
});

auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    console.log('email', user.email);
  } else {
    console.log('user is signed out', user);
  }
});


signInNavLink.addEventListener('click', (ev: Event) => {
  if (!auth.currentUser) {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.me');
    provider.addScope('https://www.googleapis.com/auth/user.emails.read');
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    auth.signInWithRedirect(provider);
  } else {
    console.log('what');
  }
});

signOutNavLink.addEventListener('click', (ev: Event) => {
  console.log('sign out');
  auth.signOut();
});


modalCloseBtn.addEventListener('click', (ev: Event) => {
  signInModal.close();
});

// trigger submit event for signInForm
modalSignInBtn.addEventListener('click', (ev: Event) => {
  // let submitEvent = new Event('submit');
  // signInForm.dispatchEvent(submitEvent);
});

// handle submitted email & password
// signInForm.addEventListener('submit', (ev: Event) => {
//   ev.preventDefault();
  
//   const signInEmail = signInForm['email'].value;
//   const signInPW = signInForm['pw'].value;

//   console.log(signInEmail, signInPW);
// });



// let provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
// firebase.auth().getRedirectResult().then(result => {
//   if (result.user) {
//     console.log("Sign-In Redirect Result, USER:", result.user.email);
//   } else if (firebase.auth().currentUser) {
//     console.log('Sign-In Redirect Result, USER:', firebase.auth().currentUser);
//   } else {
//     firebase.auth().signInWithRedirect(provider);
//   }
// });

let mkcolony = new Mkcolony();

let ret = mkcolony.loadWtData(db.collection('marmosets'));
ret.then(docs => {
  mkcolony.populateTable(docs);
  mkcolony.plotColonyData();
});