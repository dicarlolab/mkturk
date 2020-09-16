
/* (BEGIN) Initialize App (BEGIN) */
const config = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944"
};
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
/* (END) Initialize App (END) */

/* (BEGIN) Authentication Procedure (BEGIN) */
auth.getRedirectResult().then(result => {
  // User Authenticated
  if (result.credential) {
    console.log('User Authenticated:', result.credential);
  }
  // User already authenticated
  else if (auth.currentUser) {
    console.log('User Already Authenticated:', auth.currentUser);
  }
  // User not authenticated
  else {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.me');
    provider.addScope('https://www.googleapis.com/auth/user.emails.read');
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    auth.signInWithRedirect(provider);
  }
}).catch(err => {
  console.error('Authentication Error:', err);
});

auth.onAuthStateChanged(user => {
  if (user) {
    user.getIdTokenResult().then(idTokenResult => {
      if (idTokenResult.claims.labMember) {
        console.log('Authorized User:', user);
        console.log('idTokenResult:', idTokenResult);
      } else {
        console.log('Unauthorized User');
        alert('Keep Out');
      }
    });
  }
});
/* (END) Authentication Procedure (END) */