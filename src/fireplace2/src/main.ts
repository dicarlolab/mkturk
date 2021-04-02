import 'bootstrap/dist/css/bootstrap.min.css';
import 'tabulator-tables/dist/css/bootstrap/tabulator_bootstrap.min.css';
import './fireplace.css';

import './init';

import firebase from 'firebase/app';

const auth = firebase.auth();
const db = firebase.firestore();

import { Fireplace } from './fireplace';
let fp = new Fireplace();


auth.getRedirectResult().then(result => {
  if (!result.credential && !auth.currentUser) {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.me');
    provider.addScope('https://www.googleapis.com/auth/user.emails.read');
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    auth.signInWithRedirect(provider);
  } else {
    console.log('User Authenticated');
    console.log(auth.currentUser);
  }
}).catch(e => {
  console.error('Error with authentication:', e);
});


const tableElem = document.querySelector('#table') as HTMLDivElement;
const endDateInput = document.querySelector('#end-date') as HTMLInputElement;
endDateInput.value = new Date().toLocaleDateString('en-CA');
const performancePlotElem = document.querySelector('#performance-plot') as HTMLDivElement;
fp.registerDomElement('perf-plot', performancePlotElem);

const refreshBtn = document.querySelector('#refresh-btn') as HTMLButtonElement;
refreshBtn.addEventListener('pointerup', (evt: Event) => {
  console.log('hello');
  fp.tLastQuery = 0;
  let query = db.collection('mkturkdata')
    .where('Doctype', '==', 'task')
    .where('CurrentDateValue', '<', fp.queryEndDateValue)
    .where('CurrentDateValue', '>=', fp.queryStartDateValue)
    .onSnapshot(snapshot => fp.queryCallback(snapshot));
});

fp.registerDomElement('table', tableElem);


let query = db.collection('mkturkdata')
  .where('Doctype', '==', 'task')
  .where('CurrentDateValue', '<', fp.queryEndDateValue)
  .where('CurrentDateValue', '>=', fp.queryStartDateValue)
  .onSnapshot(snapshot => fp.queryCallback(snapshot));



