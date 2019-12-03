import * as firebase from "firebase/app";
import "firebase/firestore";
import { Mkquery } from "./mkquery";
import { Mkthree } from "./mkthree";
import { Mkfinder } from "./mkfinder";

const firebaseConfig = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

let m = new Mkquery();
let retval = m.mkquery([{field: "CurrentDate", keyword: "4/3/2018; +-5"}]);
retval = "db.collection('mkturkdata')" + retval;
console.log("retval:", retval);

let query = eval(retval);
console.log("query", query);

let mkf = new Mkfinder();


/* Quick Links */
let marmosetsLink = document.querySelector("#quick-link-marmosets");
let mkturkdataLink = document.querySelector("#quick-link-mkturkdata");
let mkturkfilesLink = document.querySelector("#quick-link-mkturkfiles");

marmosetsLink?.addEventListener("click", async event => {
  event.preventDefault();
  event.stopPropagation();

  async function loadData(doc: any, arr: any[]) {
    await arr.push(doc.data());
  }

  let arr = new Array();

  await query.get().then(async (snapshot: any) => {
    if (!query.empty) {
      let promises = snapshot.docs.map((doc: any) => loadData(doc, arr));
      await Promise.all(promises);
    }
  });

  console.log("arr:", arr);

  mkf.displayFirestoreTable(arr, "mkturkdata");

  console.log("marmosets quick link");
});

mkturkdataLink?.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();

  console.log("mkturkdata quick link");
});

mkturkfilesLink?.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();

  console.log("mkturkfiles quick link");
});

/* Mkthree tester */
// let mt = new Mkthree();
// let canvas = document.querySelector("#webgl-canvas") as HTMLCanvasElement;
// async function runner() {
//   await mt.displayMesh("mkturkfiles/scenebags/objectome3d/face/marmoset.glb", canvas);
// }
// runner();