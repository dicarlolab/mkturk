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

let workerId = Math.random().toString(36).substr(2);
console.log(workerId);

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
      let tmp = {
        wid: workerId,
        token: idToken
      };
      processMturkUser(tmp).then(async res => {
        console.log('[processMturkUser] Result:', res);
        let ppath = `mkturkfiles/parameterfiles/subjects/${workerId}_params.json`;
        let fileRef = storage.ref(ppath);
        let fileUrl = await fileRef.getDownloadURL().catch(e => {
          console.error('Error getting download URL', e);
        });

        let response = await fetch(fileUrl);
        let file = await response.json();
        console.log(file);
      }).catch(error => {
        console.error('[processMturkUser] Error:', error);
      });
    })
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