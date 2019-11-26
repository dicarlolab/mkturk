import * as firebase from "firebase/app";
import "firebase/firestore";
import { Mkquery } from "./mkquery";

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

let aLink = document.querySelector("#hi");
aLink?.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();

  console.log("hello");
})