import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import firebase from 'firebase/app';
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

import 'firebase/storage';

const model = await mobilenet.load();

const storage = firebase.storage();
const storageRef = storage.ref();
const tokenVarRef = storageRef.child('/mkturkfiles/imagebags/objectome/wrench/flarenut_spanner/Var6NoBkgdNoPos_Batch1')

tokenVarRef.listAll().then(res => {
  res.items.forEach(itemRef => {
    itemRef.getDownloadURL().then(async url => {
      let tmpImg = document.createElement('img');
      tmpImg.width = 256;
      tmpImg.height = 256;
      tmpImg.src = url;
      let prediction = await model.classify(tmpImg);
      console.log('Prediction:', prediction);
      console.log(`Prediction for ${itemRef}: ${JSON.stringify(prediction)}`);
    });
  });
}).catch(err => {
  console.error(`Err: ${err}`);
});
