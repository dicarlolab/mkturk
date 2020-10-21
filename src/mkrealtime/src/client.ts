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

let runBtn = document.querySelector('#run-btn') as HTMLButtonElement;
let inactiveBtn = document.querySelector('#inactive-btn') as HTMLButtonElement;
let offBtn = document.querySelector('#off-btn') as HTMLButtonElement;

runBtn.addEventListener('click', evt => {
  evt.preventDefault();
  rtdb.ref('agents').set({
    Sausage: 'active'
  }).catch(err => {
    console.error(err);
  });
});

inactiveBtn.addEventListener('click', evt => {
  evt.preventDefault();
  rtdb.ref('agents').set({
    Sausage: 'inactive'
  }).catch(err => {
    console.error(err);
  });
});

offBtn.addEventListener('click', evt => {
  evt.preventDefault();
  rtdb.ref('data/Sausage').off();
})

rtdb.ref('data/Sausage').on('value', snapshot => {
  console.log('Data', snapshot.val());
});


