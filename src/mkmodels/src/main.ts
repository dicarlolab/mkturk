import * as tf from '@tensorflow/tfjs';
import { Imag, mod, Tensor, TensorContainer, TensorContainerArray, train } from '@tensorflow/tfjs';
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
// console.log('hello');

// tokenVarRef.listAll().then(res => {
//   res.items.forEach(itemRef => {
//     itemRef.getDownloadURL().then(url => {
//       let tmpImg = document.createElement('img');
//       tmpImg.crossOrigin = 'anonymous';
//       tmpImg.src = url;
//       tmpImg.width = 224;
//       tmpImg.height = 224;
//     });
//   })
// })

// img = img.reshape([1, 224, 224, 3]);
//         img = tf.cast(img, 'float32');
//         let features = model.execute(img) as tf.Tensor;

let trainDataArr: string[] = [];
let trainDataFeatureArr: TensorContainerArray = [];
let testDataArr = [];

async function dothis() {
  // await tokenVarRef.listAll().then(async res => {
  //   await res.items.forEach(async itemRef => {
  //     await itemRef.getDownloadURL().then(async url => {
  //       // console.log('hello');
  //       trainDataArr.push(url);
  //       let features = await generateFeatureTensor(url);
  //       console.log(features);
  //       trainDataFeatureArr.push(features);
  //     });
  //   });
  // });

  await tokenVarRef.listAll().then(async res => {
    for (let itemRef of res.items) {
      await itemRef.getDownloadURL().then(async url => {
        trainDataFeatureArr.push(await generateFeatureTensor(url));
      });
    }
    return 0;
  });

  await trainModel();
}


function loadImage(url: string) {
  // console.log('hello2');
  return new Promise((res, rej) => {
    let img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;
    img.width = 224;
    img.height = 224;
    img.onload = () => {
      res(img);
    }
  });
}

// img = img.reshape([1, 224, 224, 3]);
//         img = tf.cast(img, 'float32');
//         let features = model.execute(img) as tf.Tensor;

const generateFeatureTensor = async (imgUrl: string) => {
  let image = await loadImage(imgUrl) as HTMLImageElement;
  let tmp = tf.browser.fromPixels(image);
  tmp = tmp.reshape([1, 224, 224, 3]);
  tmp = tf.cast(tmp, 'float32');
  return model.execute(tmp) as tf.Tensor;
}


function* dataGenerator() {
  // for (let i = 0; i < trainDataFeatureArr.length; i++) {
  //   console.log('hello');
  //   yield trainDataFeatureArr[i];
  // }
  const numelem = trainDataFeatureArr.length;
  let idx = 0;
  while (idx < numelem) {
    idx++;
    yield trainDataFeatureArr[idx];
  }
}

function* labelGenerator() {
  const numelem = trainDataFeatureArr.length;
  let idx = 0;
  while (idx < numelem) {
    idx++;
    yield idx % 2;
  }
}

async function trainModel() {
  console.log('hellohello');
  const xs = tf.data.generator(dataGenerator);
  const ys = tf.data.generator(labelGenerator);
  const ds = tf.data.zip({xs, ys});
  await xs.forEachAsync(e => console.log(e));
}

async function mainmain() {
  await dothis();
  await trainModel();
}

mainmain();



// tokenVarRef.listAll().then(res => {
//   res.items.forEach(itemRef => {
//     itemRef.getDownloadURL().then(async url => {
//       let tmpImg = document.createElement('img');
//       tmpImg.crossOrigin = 'anonymous';
//       tmpImg.src = url;
//       tmpImg.width = 224;
//       tmpImg.height = 224;
//       tmpImg.onload = () => {
//         let img = tf.browser.fromPixels(tmpImg);
//         img.print();
//         img = img.reshape([1, 224, 224, 3]);
//         img = tf.cast(img, 'float32');
//         let features = model.execute(img) as tf.Tensor;
//         features.print();
//         features.dispose();
//       }
      
//     });
//   });
// }).catch(err => {
//   console.error(`Err: ${err}`);
// });

// let arr = ['google.com'];

// function* data() {
//   for (let i = 0; i < 100; i++) {
//     let imgHolder = document.createElement('img');
//     imgHolder.crossOrigin = 'anonymous';
//     imgHolder.src = arr[i];
//     function* stuff() {
//       yield imgHolder.decode()
//     }
//     stuff.next()
//     imgHolder.width = 224;
//     imgHolder.height = 224;
//     let img = tf.browser.fromPixels(imgHolder);
//     img = img.reshape([1, 224, 224, 3]);
//     img = tf.cast(img, 'float32');
//     let features = model.execute(img) as tf.Tensor;
//     yield features;
//     features.dispose();
//     }
// }

// function* labels() {
//   for (let i = 0; i < 100; i++) {
//     yield tf.randomUniform([10]);
//   }
// }

// const xs = tf.data.generator(data);

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
