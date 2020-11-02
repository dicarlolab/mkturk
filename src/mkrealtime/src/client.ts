import firebase from 'firebase/app';
import 'firebase/database';

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

const rtdb = firebase.database();

let activeBtn = document.querySelector('#run-btn') as HTMLButtonElement;
let inactiveBtn = document.querySelector('#inactive-btn') as HTMLButtonElement;

let agent = 'Hectoro';
let agentsRef = rtdb.ref('agents/');
let dataRef = rtdb.ref('data/' + agent);

activeBtn.addEventListener('click', evt => {
  evt.preventDefault();
  let obj: any = {};
  obj[agent] = true;
  agentsRef.set(obj);
});

inactiveBtn.addEventListener('click', evt => {
  evt.preventDefault();
  let obj: any = {};
  obj[agent] = false;
  agentsRef.set(obj);
});

window.addEventListener('data_arrived', (evt: CustomEventInit) => {
  console.log(evt.detail)
  let ts = new Date(evt.detail.timestamp).getTime();
  let diff = Date.now() - ts;
  console.log('Diff', diff);
});

dataRef.on('value', snapshot => {
  let event = new CustomEvent('data_arrived', { detail: snapshot.val() });
  window.dispatchEvent(event);
});




