import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  UserCredential,
  onAuthStateChanged,
  setPersistence,
  inMemoryPersistence,
  signOut,
} from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';
import './modals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: 'AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI',
  authDomain: 'sandbox-ce2c5.firebaseapp.com',
  databaseURL: 'https://sandbox-ce2c5.firebaseio.com',
  projectId: 'sandbox-ce2c5',
  storageBucket: 'sandbox-ce2c5.appspot.com',
  messagingSenderId: '1003719887944',
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const functions = getFunctions(firebaseApp);
const getClientToken = httpsCallable(functions, 'createTokenOnServer');
const isLabMember = httpsCallable(functions, 'isLabMember');

const adminBtn = document.querySelector('#admin-btn') as HTMLButtonElement;
const newUserBtn = document.querySelector('#new-user-btn') as HTMLButtonElement;

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/user.emails.read');
provider.addScope('https://www.googleapis.com/auth/userinfo.email');

getRedirectResult(auth).then(async (redirectResult) => {
  if (redirectResult) {
    if ((await redirectResult.user.getIdTokenResult()).claims.labMember) {
      console.log('hi');
      const hell = await isLabMember(await redirectResult.user.getIdToken());
      const tokenResult = await getClientToken('idToken');
      console.log(tokenResult);
      // const tokenResult = await getClientToken(
      //   await redirectResult.user.getIdToken()
      // );

      // window.location.replace('http://localhost:5000/mkusers/admin');
      console.log('true');
    } else {
      window.location.replace('https://google.com');
    }
  }
});

const processAuthResult = async (user: any) => {
  if (user) {
    console.log(user);
    const idToken = await getClientToken('hello');
    console.log('idToken:', idToken);
  }
};
onAuthStateChanged(auth, processAuthResult);

adminBtn.addEventListener('pointerup', (event: PointerEvent) => {
  // setPersistence(auth, inMemoryPersistence).then(() => {
  //   signInWithRedirect(auth, provider);
  // });
  signInWithRedirect(auth, provider);
});

newUserBtn.addEventListener('pointerup', (event: PointerEvent) => {
  signOut(auth);
  alert('new user btn was pressed');
});
// onAuthStateChanged(auth, processAuthResult);
