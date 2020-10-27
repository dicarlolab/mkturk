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

let agent = 'Sausage';
let agentRef = rtdb.ref('agents/' + agent);
let dataRef = rtdb.ref('data/' + agent);

let genBtn = document.querySelector('#gen-btn') as HTMLButtonElement;
let trialBtn = document.querySelector('#trial-btn') as HTMLButtonElement;

let trialActive = false;

trialBtn.addEventListener('click', evt => {
  evt.preventDefault();
  if (trialActive == false) {
    trialActive = true;
  } else if (trialActive == true) {
    trialActive = false;
  }
});

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

genBtn.addEventListener('click', async evt => {
  evt.preventDefault();
  let agentActive = await agentRef.once('value').then(sns => {
    return sns.val();
  });

  console.log('trialActive', trialActive);

  if (trialActive && agentActive) {
    dataRef.set({
      x: getRandomInt(255),
      y: getRandomInt(255),
      meta: getRandomInt(10)
    });
  } else if (!trialActive && agentActive) {
    dataRef.set({
      x: getRandomInt(255),
      y: getRandomInt(255),
      meta: -1
    });
  } else {
    console.log('Not sending data to Realtime DB');
    console.log('x:', getRandomInt(255), 'y:', getRandomInt(255), 'meta:', -1);
  }
  
});