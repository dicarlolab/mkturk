import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/functions';

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

const functions = firebase.functions();
const auth = firebase.auth();
const storage = firebase.app().storage('gs://mkturk-mturk');

let mturkUserConfig: any = {};

// let workerId = Math.random().toString(36).substr(2);
// console.log(workerId);

console.log(window);
try {
  let mturkCfgPairStr = window.location.search.split('?')[1].split('&');
  mturkCfgPairStr.forEach(str => {
  let pair = str.split('=');
  if (pair[0] == 'AID') { // AID: assignmentId
    mturkUserConfig.aid = pair[1];
  } else if (pair[0] == 'HID') { // HID: HITId
    mturkUserConfig.hid = pair[1];
  } else if (pair[0] == 'WID') { // WID: workerId
    mturkUserConfig.wid = pair[1];
  } else if (pair[0] == 'TASK') {
    mturkUserConfig.task = pair[1];
  }
  console.log('pair:', pair);
  });
} catch (e) {
  console.log('e:', e);
}


const isLabMember = functions.httpsCallable('isLabMember');
const isMturkUser = functions.httpsCallable('isMturkUser');
const decodeToken = functions.httpsCallable('decodeToken');
const processMturkUser = functions.httpsCallable('processMturkUser');
const copyParamFile = functions.httpsCallable('copyParamFile');

const signOutBtn = (
  document.querySelector('#sign-out-btn') as HTMLButtonElement
);

signOutBtn.addEventListener('click', (ev: Event) => {
  ev.preventDefault();
  auth.signOut().then(() => {
    console.log('[SignOut]: Success');
  }).catch(error => {
    console.error('[SignOut] Error:', error);
  });
});


auth.getRedirectResult().then(redirectResult => {
  if (redirectResult.credential) {
    console.log('User Signed In Now');
    console.log('redirectResult.credential:', redirectResult.credential);
  } else if (auth.currentUser) {
    console.log('User Already Signed In');
    console.log('auth.currentUser:', auth.currentUser);
  } else {
    console.log('User Not Yet Authenticated');
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.me');
    provider.addScope('https://www.googleapis.com/auth/user.emails.read');
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    auth.signInWithRedirect(provider);
  }
}).catch(e => {
  console.error('[Authentication Error]', e);
});

auth.onAuthStateChanged(user => {
  if (user) {
    user.getIdToken(true).then(async idToken => {
      mturkUserConfig.token = idToken;
      console.log('token:', idToken);
      processMturkUser(mturkUserConfig).then(async res => {
        console.log('[processMturkUser] Result:', res);
      }).catch(error => {
        console.error('[processMturkUser] Error:', error);
      });
    });
  }
});


// let res = await copyParamFile();
// console.log(res);


// let fileRef = storage.ref('mkturkfiles/scenebags/objectome3d/camel/hello.txt');

// let fileUrl = await fileRef.getDownloadURL().catch(e => {
//   console.error("Error getting download URL", e);
// });

// let response = await fetch(fileUrl);
// // let file = await response.json();
// console.log(await response.text());