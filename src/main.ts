import * as firebase from "firebase/app";
import "firebase/firestore";
import { Mkquery } from "./mkquery";
import { Mkthree } from "./mkthree";

const firebaseConfig = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944"
};

firebase.initializeApp(firebaseConfig);

let m = new Mkquery();
let retval = m.mkquery([{field: "birthdate", keyword: "1/1/2015; +-100"}, {field: "name", keyword: "Hector"}]);
console.log(retval);


/* Quick Links */
let marmosetsLink = document.querySelector("#quick-link-marmosets");
let mkturkdataLink = document.querySelector("#quick-link-mkturkdata");
let mkturkfilesLink = document.querySelector("#quick-link-mkturkfiles");

marmosetsLink?.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();

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
let mt = new Mkthree();
let canvas = document.querySelector("#webgl-canvas") as HTMLCanvasElement;
async function runner() {
  await mt.displayMesh("mkturkfiles/scenebags/objectome3d/face/marmoset.glb", canvas);
}
runner();