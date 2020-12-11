import * as tf from '@tensorflow/tfjs';
import { train } from '@tensorflow/tfjs';
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

const modelUrl = 'https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_140_224/feature_vector/3/default/1';
const model = await tf.loadGraphModel(modelUrl, {fromTFHub: true});
const storage = firebase.storage();
const storageRef = storage.ref();
const tokenVarRef = storageRef.child('/mkturkfiles/imagebags/objectome/wrench/flarenut_spanner/Var6NoBkgdNoPos_Batch1');
const imgHolder = document.querySelector('#img-holder') as HTMLDivElement;

// const someRef = storageRef.child('/mkturkfiles/mkmodels');
// await someRef.listAll().then(async res => {
//   console.log(res);
//   for (let ref of res.prefixes) {
//     console.log(ref);
//   }
// });

async function loadUrl(ref: firebase.storage.Reference) {
  return ref.listAll().then(result => {
    return Promise.all(result.items.map(imgRef => imgRef.getDownloadURL()));
  });
}




console.log(tf.getBackend());

let trainDataArr: string[] = [];
let trainDataFeatureArr: any = [];
let testDataArr: any[] = [];
let trainDataObj: any = {};
let testDataObj: any = {};
let dataObj: any = {};

// loadUrl().then(hello => {
//   console.log('hello', hello);
//   testDataArr = hello;
// });

// async function dothis() {
//   testDataArr = await loadUrl();
//   console.log('testdataarr', testDataArr);
//   testDataArr.forEach()

  
  

//   await tokenVarRef.listAll().then(async res => {
//     for (let itemRef of res.items) {
//       await itemRef.getDownloadURL().then(async url => {
//         trainDataFeatureArr.push(await generateFeatureTensor(url));
//       });
//     }
    
//     // trainDataFeatureArr = tf.data.array(trainDataFeatureArr);
//     // console.log('traindatafeaturearr', trainDataFeatureArr);
//     // tf.keep(trainDataFeatureArr);
//   });

//   // await trainModel();
// }

async function createFeatureDataset(ref: firebase.storage.Reference, dest: any) {
  await ref.listAll().then(async result => {
    dest['key'] = {};
    dest[ref.name] = [];
    for (let idx = 0; idx < result.prefixes.length; idx++) {
      console.log('hello');
      console.log('idx', idx);
      dest['key'][result.prefixes[idx].name] = idx;
      let urlArray = await loadUrl(result.prefixes[idx]);
      for (let url of urlArray) {
        dest[ref.name].push({xs: await generateFeatureTensor(url), ys: idx});
      }
    }
    console.log(dest);
  });

  // let urlArray = await loadUrl(ref);
  // // urlArray.forEach(async url => {
  // //   dest.push(generateFeatureTensor(url))
  // // });
  // // Promise.all(dest);
  // for (let url of urlArray) {
  //   dest.push(await generateFeatureTensor(url));
  // }
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

const generateFeatureTensor = async (imgUrl: string) => {
  let image = await loadImage(imgUrl) as HTMLImageElement;
  
  return tf.tidy(() => {
    let offset = tf.scalar(127.5);
    let tensor = tf.browser.fromPixels(image)
      .resizeNearestNeighbor([224, 224])
      .toFloat()
      .sub(offset)
      .div(offset)
      .expandDims();
    
    let feature = model.execute(tensor);
    return feature;
  });
}

// const generateFeatureTensor = async (imgUrl: string) => {
//   let image = await loadImage(imgUrl) as HTMLImageElement;
//   let tmp = tf.browser.fromPixels(image);
//   tmp = tmp.reshape([1, 224, 224, 3]);
//   tmp = tf.cast(tmp, 'float32');
//   console.log('tmp', tmp)
//   // return model.execute(tmp) as tf.Tensor;
//   let features = model.execute(tmp) as tf.Tensor2D;
//   console.log('features', features);
//   features.print()
//   return features;
// }

function* trainDataGenerator() {
  let numElem = dataObj.train.length;
  let idx = 0;
  while (idx < numElem) {
    yield dataObj.train[idx].xs.array();
    idx++;
    // yield {
    //   xs: dataObj.train[idx].xs.array(),
    //   ys: tf.scalar(dataObj.train[idx].ys)
    // };
    // idx++;

  }
}

function* testDataGenerator() {
  let numElem = dataObj.test.length;
  let idx = 0;
  while (idx < numElem) {
    yield dataObj.test[idx].xs.array();
    idx++;
    // yield {
    //   xs: dataObj.train[idx].xs.array(),
    //   ys: tf.scalar(dataObj.train[idx].ys)
    // };
    // idx++;

  }
}

function* trainLabelGenerator() {
  let numElem = dataObj.train.length;
  let idx = 0;
  while (idx < numElem) {
    yield tf.scalar(dataObj.train[idx].ys);
    idx++;
  }
}

function* testLabelGenerator() {
  let numElem = dataObj.test.length;
  let idx = 0;
  while (idx < numElem) {
    yield tf.scalar(dataObj.test[idx].ys);
    idx++;
  }
}

// function *testDataGenerator() {
//   let numElem = dataObj.test.length;
//   let idx = 0;
//   while (idx < numElem) {
//     yield {
//       xs: dataObj.test[idx].xs.array(),
//       ys: tf.scalar(dataObj.test[idx].ys)
//     };
//     idx++;
//   } 
// }


function* dataGenerator() {
  // for (let i = 0; i < trainDataFeatureArr.length; i++) {
  //   console.log('hello');
  //   yield trainDataFeatureArr[i];
  // }
  // const numelem = trainDataFeatureArr.length;
  const numelem = trainDataFeatureArr.length;
  let idx = 0;
  while (idx < numelem) {
    let serializedFeature = trainDataFeatureArr[idx];
    // let t = tf.tensor(serializedFeature);
    // console.log('t', t);
    let t = serializedFeature.array();
    console.log('t', t);
    // let featureArray = JSON.parse(serializedFeature);
    // let t = tf.tensor(featureArray);
    // let t = tf.tensor(serializedFeature)
    // console.log('dataGenFeatures', serializedFeature);
    idx++;
    yield t;
    // console.log(trainDataFeatureArr[idx]);
    // yield {xs: trainDataFeatureArr[idx], ys: idx % 2};
    // idx++;
  }
}

function* labelGenerator() {
  const numelem = trainDataFeatureArr.length;
  let idx = 0;
  while (idx < numelem) {
    yield tf.scalar(idx % 2);
    idx++;
  }
}

// async function trainModel() {
//   console.log('hellohello');
//   const ds = tf.data.generator(dataGenerator);
//   // const ys = tf.data.generator(labelGenerator);
//   // const ds = tf.data.zip({xs: xs, ys: ys});
//   await ds.forEachAsync(e => console.log(e));
//   return ds;
// }

function buildModel() {
  let model = tf.sequential();
  model.add(tf.layers.conv1d({inputShape: [1, 1792], filters: 2, kernelSize: 1, kernelRegularizer: tf.regularizers.l2(), biasRegularizer: tf.regularizers.l2()}))
  model.add(tf.layers.flatten());
  model.compile({loss: 'hinge', optimizer: 'adam', metrics: ['acc']});
  return model;
}

async function mainmain() {
  // await dothis();
  // let dataset = await trainModel();
  await createFeatureDataset(storageRef.child('mkturkfiles/mkmodels/train'), dataObj);
  await createFeatureDataset(storageRef.child('mkturkfiles/mkmodels/test'), dataObj);
  // const xs = tf.data.generator(dataGenerator);
  // const ys = tf.data.generator(labelGenerator)
  // const xyDataset = tf.data.zip({xs: xs, ys: ys}).batch(2);
  let trainData = tf.data.generator(trainDataGenerator);
  let trainLabel = tf.data.generator(trainLabelGenerator);
  let testData = tf.data.generator(testDataGenerator);
  let testLabel = tf.data.generator(testLabelGenerator);
  let trainDataset = tf.data.zip({xs: trainData, ys: trainLabel}).shuffle(3).batch(2);
  let testDataset = tf.data.zip({xs: testData, ys: testLabel}).shuffle(3).batch(2);
  // await xyDataset.forEachAsync(e => console.log(e));
  let myModel = buildModel();
  console.log(tf.getBackend());

  await myModel.fitDataset(trainDataset, {
    epochs: 50,
    validationData: testDataset,
    callbacks: { onEpochEnd: (epoch, logs) => console.log(epoch, logs!.loss) }
  }).then(info => {
    console.log('Accuracy', info.history.acc);
    console.log('Info', info);
  });

  // myModel.evaluateDataset(testDataset, {batches: 2})
  // await myModel.fit(xs, ys, {epochs: 4})

}

await mainmain();




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
