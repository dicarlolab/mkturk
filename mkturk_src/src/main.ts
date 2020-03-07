import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/functions";
import * as G from "./Globals";

const firebaseConfig = {
  apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
  authDomain: "sandbox-ce2c5.firebaseapp.com",
  databaseURL: "https://sandbox-ce2c5.firebaseio.com",
  projectId: "sandbox-ce2c5",
  storageBucket: "sandbox-ce2c5.appspot.com",
  messagingSenderId: "1003719887944"
};
firebase.initializeApp(firebaseConfig);

// let provider = new firebase.auth.GoogleAuthProvider();

// let offscreenCanvas = null;
// let visibleCanvas = 
//   document.querySelector('#canvasvisible') as HTMLCanvasElement;
// let visibleCanvasWebGL =
//   document.querySelector('#canvasvisiblewebgl') as HTMLCanvasElement;
// let eyetrackerCanvas = 
//   document.querySelector('#canvaseyetracker') as HTMLCanvasElement;

// let frame: frame = {
//   current: 0,
//   shown: []
// };

// let trialHist: trialhistory = {
//   trainingstage: [],
//   starttime: [],
//   response: [],
//   correct: []
// };

// let sounds: sounds = {
//   serial: [0, 1, 2, 3, 4],
//   buffer: []
// };

// let boudingBoxesFixation = {};
// let boudingBoxesChoice = {};
// let waitforClick;
// let waitforEvent;
// let touchTimer;
// let xcanvascenter = [];
// let ycanvascenter = [];
// let curridx = null;
// let datafiles = [];
// let displayoutofboudsstr = '';
// let imageloadingtimestr = 'Loaded: ';

let ENV = new G.ENV();
ENV.init();
let FLAGS = new G.FLAGS();
FLAGS.init();
let CANVAS = new G.CANVAS();
CANVAS.init();
let CURRTRIAL = new G.CURRTRIAL();
CURRTRIAL.init();
let TRIAL = new G.TRIAL();
TRIAL.reset(ENV, FLAGS);
