import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';

const firebaseCfg = {
  apiKey: 'AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI',
  authDomain: 'sandbox-ce2c5.firebaseapp.com',
  databaseURL: 'https://sandbox-ce2c5.firebaseio.com',
  projectId: 'sandbox-ce2c5',
  storageBucket: 'sandbox-ce2c5.appspot.com',
  messagingSenderId: '1003719887944',
};

export const firebaseApp = initializeApp(firebaseCfg);
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
getRedirectResult(auth).then((result) => {
  if (result) {
    console.log(
      'Sign-In Redirect Result, USER:',
      result.user.email,
      'is signed in'
    );
  } else if (auth.currentUser) {
    console.log('Sign-In Redirect Result, USER:', 'is signed in');
  } else {
    signInWithRedirect(auth, provider);
  }
});