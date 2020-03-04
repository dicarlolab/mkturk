import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944"
};
firebase.initializeApp(firebaseConfig);

let provider = new firebase.auth.GoogleAuthProvider();

let offscreenCanvas = null;
let visibleCanvas = 
  document.querySelector('#canvasvisible') as HTMLCanvasElement;
let visibleCanvasWebGL =
  document.querySelector('#canvasvisiblewebgl') as HTMLCanvasElement;
let eyetrackerCanvas = 
  document.querySelector('#canvaseyetracker') as HTMLCanvasElement;