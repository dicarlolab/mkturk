import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/auth';

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

import { Utils } from './utils';

const storage = firebase.storage();
const storageRef = storage.ref();
const utils = new Utils();

const DATA_PATH = 'mkturkfiles/datafiles/';
const dataRef = storageRef.child(DATA_PATH);
const PARAM_PATH = 'mkturkfiles/parameterfiles/subjects/';
const paramRef = storageRef.child(PARAM_PATH);

const fileListSelector = (
  document.querySelector('#file-list') as HTMLSelectElement
);

fileListSelector.addEventListener('change', evt => {
  evt.preventDefault();
  evt.stopPropagation();
  console.log('New File!');
  file.name = file.fileList[parseInt(fileListSelector.value)].fullpath;
  file.fileChanged = true;
  console.log('file name:', file.name);
});

let file: any = {
  path: DATA_PATH,
  list: [],
  fileList: [],
  name: '',
  data: null,
  ver: null,
  date: null,
  dateChanged: false,
  fileChanged: false
};



async function populateDropdownMenu() {
  try {
    let fileList = await utils.getFileList(file.path);
    

    fileList.sort((a: any, b: any) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();

      if (nameA > nameB) {
        return -1;
      }

      if (nameA < nameB) {
        return 1;
      }

      return 0;
    });

    file.fileList = fileList;
    

    for (let i = 0; i < fileList.length; i++) {
      let opt = document.createElement('option');
      opt.value = i.toString();
      opt.innerHTML = fileList[i].name;
      fileListSelector.appendChild(opt);
    }
    
    file.name = file.fileList[0].fullpath;
    file.fileChanged = true;
  
  } catch (error) {
    console.error('ERROR #file-list:', error);
  }
}

populateDropdownMenu();


async function loadAndRenderEditor(filePath: string) {
  let dataFile = utils.getStorageFile(filePath);
  
}

let provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().getRedirectResult().then(function(result) {
  if (result.user) {
    // User just signed in. you can get the result.credential.
	console.log('Sign-In Redirect Result, USER ' + result.user.email + ' is signed in')
  }
  else if (firebase.auth().currentUser) {
    // User already signed in.
	console.log('Sign-In Redirect Result, USER is signed in')
  }
  else {
    // No user signed in, update your UI, show the redirect sign-in screen.
	firebase.auth().signInWithRedirect(provider)
  }
});