import * as tf from '@tensorflow/tfjs';
import { train } from '@tensorflow/tfjs';
import firebase from 'firebase/app';
import 'firebase/auth';
import { StandardScaler } from './data';

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

const resnetUrl = 'https://tfhub.dev/google/tfjs-model/imagenet/resnet_v2_50/feature_vector/3/default/1';
const resnetModel = await tf.loadGraphModel(resnetUrl, {fromTFHub: true});

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

// async function createFeatureDataset(ref: firebase.storage.Reference, dest: any) {
//   await ref.listAll().then(async result => {
//     dest['key'] = {};
//     dest[ref.name] = [];
//     for (let idx = 0; idx < result.prefixes.length; idx++) {
//       console.log('hello');
//       console.log('idx', idx);
//       if (idx == 0) {
//         dest['key'][result.prefixes[idx].name] = -1;
//       } else {
//         dest['key'][result.prefixes[idx].name] = idx;
//       }
//       let urlArray = await loadUrl(result.prefixes[idx]);
//       for (let url of urlArray) {
//         if (idx == 0) {
//           dest[ref.name].push({xs: await generateFeatureTensor(url), ys: -1});
//         } else {
//           dest[ref.name].push({xs: await generateFeatureTensor(url), ys: idx});
//         }
//       }
//     }
//     console.log(dest);
//   });

//   // let urlArray = await loadUrl(ref);
//   // // urlArray.forEach(async url => {
//   // //   dest.push(generateFeatureTensor(url))
//   // // });
//   // // Promise.all(dest);
//   // for (let url of urlArray) {
//   //   dest.push(await generateFeatureTensor(url));
//   // }
// }

async function createFeatureDataset(ref: firebase.storage.Reference, dest: any) {
  await ref.listAll().then(async result => {
    dest['key'] = {};
    let xArr = [];
    let yArr = [];
    

    for (let idx = 0; idx < result.prefixes.length; idx++) {
      
      if (idx == 0) {
        dest['key'][result.prefixes[idx].name] = -1;
      } else {
        dest['key'][result.prefixes[idx].name] = idx;
      }
      let urlArray = await loadUrl(result.prefixes[idx]);
      for (let url of urlArray) {
        if (idx == 0) {
          // dest[ref.name].push({xs: await generateFeatureTensor(url), ys: tf.tensor([1, 0]).toFloat() });
          // dest[ref.name].push({xs: await generateFeatureTensor(url), ys: tf.scalar(0) });
          // dest[ref.name].push({xs: await generateFeatureTensor(url), ys: tf.scalar(-1) });

          xArr.push(await generateFeatureTensor(url));
          yArr.push(-1);
          
        } else {
          // dest[ref.name].push({xs: await generateFeatureTensor(url), ys: tf.scalar(1) });
          // dest[ref.name].push({xs: await generateFeatureTensor(url), ys: tf.scalar(1) });
          xArr.push(await generateFeatureTensor(url));
          yArr.push(1);
        }
      }
    }


    if (ref.name == 'train') {
      dest['xTrain'] = xArr;
      dest['yTrain'] = yArr;
    } else if (ref.name == 'test') {
      dest['xTest'] = xArr;
      dest['yTest'] = yArr;
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
    
    // let feature = model.execute(tensor);
    let feature = resnetModel.execute(tensor) as tf.Tensor;
    feature = feature.reshape([2048]);
    feature.print();
    console.log('feature', feature);
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
    let t = dataObj.train[idx].xs.arraySync();
    // let tt = tf.batchNorm(dataObj.train[idx].xs, tf.scalar(0).toFloat(), tf.scalar(1).toFloat());
    // console.log('tt', tt.arraySync());
    yield t;
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
    let t = dataObj.test[idx].xs.arraySync();
    console.log('testData', t);
    yield t;
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
    let t = dataObj.train[idx].ys.arraySync();
    // console.log('trainLabel: ', t);
    yield t;
    // yield tf.scalar(dataObj.train[idx].ys);
    idx++;
  }
}

function* testLabelGenerator() {
  let numElem = dataObj.test.length;
  let idx = 0;
  while (idx < numElem) {
    let t = dataObj.test[idx].ys.arraySync();
    // console.log('testLabel: ', t);
    yield t;
    // yield tf.scalar(dataObj.test[idx].ys);
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
  model.add(tf.layers.dense({inputShape: [2048], units: 2, useBias: true, kernelInitializer: 'heNormal' ,kernelRegularizer: tf.regularizers.l2({l2: 0.0001})}));
  model.add(tf.layers.activation({activation: 'linear'}));
  model.compile({loss: 'hinge', optimizer: tf.train.adadelta(), metrics: ['accuracy']});
  // model.compile({
  //   optimizer: tf.train.adam(),
  //   loss: 'sparseCategoricalCrossentropy',
  //   metrics: ['accuracy']
  // });
  model.summary();
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
  // let trainData = tf.data.generator(trainDataGenerator);
  // let trainLabel = tf.data.generator(trainLabelGenerator);
  // let testData = tf.data.generator(testDataGenerator);
  // let testLabel = tf.data.generator(testLabelGenerator);
  // let trainDataset = tf.data.zip({xs: trainData, ys: trainLabel}).batch(2);
  // let testDataset = tf.data.zip({xs: testData, ys: testLabel}).batch(1);
  // await xyDataset.forEachAsync(e => console.log(e));

  // let xTrainTmp: any = tf.stack(dataObj.xTrain);
  // let xTrainMoments = tf.moments(xTrainTmp, 0);
  // let xTrainMean = xTrainMoments.mean.arraySync() as number[];
  // let xTrainVar = xTrainMoments.variance.arraySync() as number[];
  // let xTrainShape = xTrainTmp.shape;

  // console.log('xTrainMean:', xTrainMean);
  // console.log('xTrainVar', xTrainVar);

  // xTrainTmp = tf.split(xTrainTmp, xTrainMoments.mean.size, 1);
  // for (let i = 0; i < xTrainTmp.length; i++) {
  //   xTrainTmp[i] = tf.sub(xTrainTmp[i], tf.scalar(xTrainMean[i]));
  //   xTrainTmp[i] = tf.div(xTrainTmp[i], tf.sqrt(tf.scalar(xTrainVar[i])));
  // }
  // console.log('at point 0:', xTrainTmp);
  
  // xTrainTmp = tf.stack(xTrainTmp, 1).reshape(xTrainShape);
  // console.log('after stack:', xTrainTmp);
  // xTrainMoments = tf.moments(xTrainTmp, 0);
  // xTrainMean = xTrainMoments.mean.arraySync() as number[];
  // xTrainVar = xTrainMoments.variance.arraySync() as number[];

  // console.log('xTrainMean:', xTrainMean);
  // console.log('xTrainVar', xTrainVar);

  
  // xTrainTmp = tf.unstack(xTrainTmp);
  // console.log('after unstack', xTrainTmp);
  

  
  // for (let i = 0; i < xTrainTmp.length; i++) {
  //   console.log(xTrainTmp[i].arraySync());
  // }

  // let xTrain = tf.data.array(xTrainTmp);
  // let yTrain = tf.data.array(dataObj.yTrain);
  // let trainDataset = tf.data.zip({xs: xTrain, ys: yTrain}).batch(1);
  // let xTest = tf.data.array(dataObj.xTest);
  // let yTest = tf.data.array(dataObj.yTest);
  // let testDataset = tf.data.zip({xs: xTest, ys: yTest}).batch(2).shuffle(4);


  let scaler = new StandardScaler();
  scaler.fit(dataObj.xTrain);
  console.log(scaler.mean, scaler.var);
  dataObj.xTrain = scaler.transform(dataObj.xTrain);
  console.log('sanity check:', scaler.sanityCheck(dataObj.xTrain));
  dataObj.xTest = scaler.transform(dataObj.xTest);
  console.log('sanity_check test:', scaler.sanityCheck(dataObj.xTest));
  console.log(dataObj.xTest);

  let xTrain = tf.data.array(dataObj.xTrain);
  let yTrain = tf.data.array(dataObj.yTrain);
  let xTest = tf.data.array(dataObj.xTest);
  let yTest = tf.data.array(dataObj.yTest);
  let trainDataset = tf.data.zip({xs: xTrain, ys: yTrain}).batch(1).shuffle(4);
  let testDataset = tf.data.zip({xs: xTest, ys: yTest}).batch(1).shuffle(4);


  let myModel = buildModel();
  console.log(tf.getBackend());
  const beginMs = performance.now();
  

  await myModel.fitDataset(trainDataset, {
    epochs: 100,
    validationData: testDataset,
    callbacks: {
      onEpochEnd: async (epoch, logs) => {
        const secPerEpoch = 
          (performance.now() - beginMs) / (1000 * (epoch + 1));
        console.log('Training model ... Approximately ' + `${secPerEpoch.toFixed(4)} sec/epoch`);
        console.log('logs:', logs);
        // const stuff = await testDataset.toArray();
        // console.log('stuff', stuff);
      }
    }
  }).then(info => {
    console.log('Accuracy', info.history.acc);
    console.log('Info', info);
    // kernel:
    myModel.layers[0].getWeights()[0].print();

    // bias:
    myModel.layers[0].getWeights()[1].print();
  });

  // console.log('test obj:', dataObj.test[1])
  // // // let prediction = myModel.predict(dataObj.test[0].xs);
  // let prediction = myModel.predict(dataObj.test[1].xs) as tf.Tensor2D;
  // console.log(prediction.array());


  // for (let i = 0; i < dataObj.test.length; i++) {
  //   let inputToPred =  tf.expandDims(dataObj.test[i].xs, 0);
  //   let prediction = myModel.predict(inputToPred) as tf.Tensor1D;
  //   prediction.print();

  //   // let prediction = myModel.predict(dataObj.test[i].xs.transpose()) as tf.Tensor;
  //   // let argmax = tf.argMax(prediction);
  //   // console.log('argmax', argmax.dataSync());
  //   // console.log('True:', dataObj.test[i].ys.array());
  //   // prediction.print();
  //   // let result = myModel.evaluate(dataObj.test[i].xs, tf.tensor(dataObj.test[i].ys)).toString();
  //   // console.log('result', result);
  // }

  // let classifierObj: any = {};
  // classifierObj.pos = [];
  // classifierObj.neg = [];

  // for (let i = 0; i < dataObj.train.length; i++) {
  //   if (dataObj.train[i].ys.dataSync() == 1) {
  //     classifierObj.pos.push(dataObj.train[i].xs);
  //   } else {
  //     classifierObj.neg.push(dataObj.train[i].xs);
  //   }
  // }

  // console.log('classifierObj.pos', classifierObj.pos);
  // console.log('classifierObj.neg', classifierObj.neg);

  // const avgLayer = tf.layers.average();
  // classifierObj.posActivation = avgLayer.apply(classifierObj.pos) as tf.Tensor;
  // classifierObj.negActivation = avgLayer.apply(classifierObj.neg) as tf.Tensor;

  // for (let i = 0; i < dataObj.test.length; i++) {
  //   let distPos = classifierObj.posActivation.sub(dataObj.test[i].xs).norm('euclidean');
  //   let distNeg = classifierObj.negActivation.sub(dataObj.test[i].xs).norm('euclidean');
  //   console.log(`distPos = ${distPos}, distNeg = ${distNeg}`);
  //   if (distPos < distNeg) {
  //     console.log(`True Label: ${dataObj.test[i].ys.dataSync()[0]}; Predicted Label: 1`);
  //   } else {
  //     console.log(`True Label: ${dataObj.test[i].ys.dataSync()[0]}; Predicted Label: -1`);
  //   }
  // }

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
