import * as tf from '@tensorflow/tfjs';
import { mod } from '@tensorflow/tfjs';
// import * as mobilenet from '@tensorflow-models/mobilenet';
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

// const model = await mobilenet.load();
const modelUrl = 'https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_140_224/feature_vector/3/default/1';
const model = await tf.loadGraphModel(modelUrl, {fromTFHub: true});
const storage = firebase.storage();
const storageRef = storage.ref();
const tokenVarRef = storageRef.child('/mkturkfiles/imagebags/objectome/wrench/flarenut_spanner/Var6NoBkgdNoPos_Batch1')
const imgHolder = document.querySelector('#img-holder') as HTMLDivElement;
console.log('hello');


tokenVarRef.listAll().then(res => {
  res.items.forEach(itemRef => {
    itemRef.getDownloadURL().then(async url => {
      let tmpImg = document.createElement('img');
      tmpImg.crossOrigin = 'anonymous';
      tmpImg.src = url;
      tmpImg.width = 224;
      tmpImg.height = 224;
      tmpImg.onload = () => {
        let img = tf.browser.fromPixels(tmpImg);
        img.print();
        img = img.reshape([1, 224, 224, 3]);
        img = tf.cast(img, 'float32');
        let features = model.execute(img) as tf.Tensor;
        features.print();
        features.dispose();
      }
      
    });
  });
}).catch(err => {
  console.error(`Err: ${err}`);
});

let arr = ['google.com'];

function* data() {
  for (let i = 0; i < 100; i++) {
    let imgHolder = document.createElement('img');
    imgHolder.crossOrigin = 'anonymous';
    imgHolder.src = arr[i];
    function* stuff() {
      yield imgHolder.decode()
    }
    stuff.next()
    imgHolder.width = 224;
    imgHolder.height = 224;
    let img = tf.browser.fromPixels(imgHolder);
    img = img.reshape([1, 224, 224, 3]);
    img = tf.cast(img, 'float32');
    let features = model.execute(img) as tf.Tensor;
    yield features;
    features.dispose();
    }
}

function* labels() {
  for (let i = 0; i < 100; i++) {
    yield tf.randomUniform([10]);
  }
}

const xs = tf.data.generator(data);

// function* data() {
//   tokenVarRef.listAll().then(res => {
//     res.items.forEach(itemRef => {
//       itemRef.getDownloadURL().then(async url => {
//         let tmpImg = document.createElement('img');
//         tmpImg.crossOrigin = 'anonymous';
//         tmpImg.src = url;
//         tmpImg.width = 224;
//         tmpImg.height = 224;
//         tmpImg.onload = () => {
//           let img = tf.browser.fromPixels(tmpImg);
//           img.print();
//           img = img.reshape([1, 224, 224, 3]);
//           img = tf.cast(img, 'float32');
//           let features = model.execute(img) as tf.Tensor;
//           features.print();
//           features.dispose();
//         }
        
//       });
//     });
//   }).catch(err => {
//     console.error(`Err: ${err}`);
//   });
// }
