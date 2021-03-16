import 'bootstrap/dist/css/bootstrap.min.css';
import 'tabulator-tables/dist/css/bootstrap/tabulator_bootstrap.min.css';
import Tabulator from 'tabulator-tables';
import './init';

import firebase from 'firebase/app';

const auth = firebase.auth();
const db = firebase.firestore();

import { Fireplace } from './fireplace';
let fp = new Fireplace();
let stuff = await fp.getAgentList();
console.log(stuff);

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


const table = document.querySelector('#table') as HTMLDivElement;


let query = db.collection('mkturkdata')
  .where('Doctype', '==', 'task')
  .where('CurrentDateValue', '<', fp.queryEndDateValue)
  .where('CurrentDateValue', '>=', fp.queryStartDateValue)
  .onSnapshot(snapshot => fp.queryCallback(snapshot));



let tabledata = [
  {id:1, name:"Oli Bob", progress:12, gender:"male", rating:1, col:"red", dob:"19/02/1984", car:1},
  {id:2, name:"Mary May", progress:1, gender:"female", rating:2, col:"blue", dob:"14/05/1982", car:true},
  {id:3, name:"Christine Lobowski", progress:42, gender:"female", rating:0, col:"green", dob:"22/05/1982", car:"true"},
  {id:4, name:"Brendon Philips", progress:100, gender:"male", rating:1, col:"orange", dob:"01/08/1980"},
  {id:5, name:"Margret Marmajuke", progress:16, gender:"female", rating:5, col:"yellow", dob:"31/01/1999"},
  {id:6, name:"Frank Harbours", progress:38, gender:"male", rating:4, col:"red", dob:"12/05/1966", car:1},
];

let dt = new Tabulator(table, {
  data: tabledata,
  layout: 'fitColumns',
  autoColumns: true,
  tooltips: true,
  
});