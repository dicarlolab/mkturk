const db = firebase.firestore();

// db.collection('test').doc('test').set({
//   name: 'Test',
// })
// .then(() => {
//   console.log('Doc success');
// })
// .catch(err => {
//   console.error('Error', err);
// });

document.querySelector('#init-btn');

let initBtn = document.querySelector('#init-btn');
initBtn.addEventListener('click', (ev) => {
  ev.preventDefault();
  addData();
});

const pixelC = {
  docname: 'pixel c',
  viewportPixels: [
    1280,
    900
  ],
  gpurenderer: 'nvidia tegra',
  screenRatio: 2,
  model: 'pixel c',
  screenSizeInches: [
    8.34,
    5.87,
    10.2
  ],
  ppi: 308,
  gpuvendor: 'nvidia corporation',
  bodySizeInches: [
    9.53,
    7.05,
    0.276
  ],
  screenPhysicalPixels: [
    2560,
    1800
  ],
  type: 'tablet',
  batterymAh: 9240,
  brand: 'google',
  weightOunces: 18.24
};

const pixel4XL = {
  ppi: 537,
  docname: 'pixel 4 xl',
  weightOunces: 6.81,
  screenSizeInches: [
    5.69,
    2.7,
    6.3
  ],
  viewportPixels: [
    869,
    411
  ],
  model: 'pixel 4 xl',
  batterymAh: 3700,
  brand: 'google',
  screenPhysicalPixels: [
    3040,
    1440
  ],
  gpuvendor: 'nvidia corporation',
  type: 'phone',
  gpurenderer: 'nvidia tegra',
  bodySizeInches: [
    6.3,
    2.9,
    0.3
  ],
  screenRatio: 3.5
};

const pixel4 = {
  docname: 'pixel 4',
  viewportPixels: [
    869,
    411
  ],
  batterymAh: 2800,
  model: 'pixel 4',
  screenRatio: 2.625,
  weightOunces: 5.71,
  bodySizeInches: [
    5.7,
    2.7,
    0.3
  ],
  brand: 'google',
  ppi: 444,
  screenPhysicalPixels: [
    2280,
    1080
  ],
  screenSizeInches: [
    5.15,
    2.44,
    5.7
  ],
  gpurenderer: 'nvidia tegra',
  gpuvendor: 'nvidia corporation',
  type: 'phone'
};

const pixel3 = {
  type: 'phone',
  viewportPixels: [
    640,
    320
  ],
  screenRatio: 2.625,
  screenPhysicalPixels: [
    2160,
    1080
  ],
  batterymAh: 2915,
  docname: 'pixel 3',
  ppi: 443,
  screenSizeInches: [
    4.92,
    2.46,
    5.5
  ],
  bodySizeInches: [
    5.73,
    2.69,
    0.3
  ],
  weightOunces: 5.22,
  brand: 'google',
  model: 'pixel 3'
};

const iphone6sPlus = {
  docname: "iphone 6s plus",
  model: "iphone 6s plus",
  brand: "apple",
  screenPhysicalPixels: [
   1920,
   1080
  ],
  ppi: 401,
  bodySizeInches: [
   6.23,
   3.07,
   0.29
  ],
  weightOunces: 6.77,
  viewportPixels: [
   736,
   414
  ],
  screenRatio: 3,
  type: "phone",
  screenSizeInches: [
   4.79,
   2.69,
   5.5
  ],
  batterymAh: 2915
};

const galaxyTab92 = {
 batterymAh: 5870,
 screenSizeInches: [
  7.76,
  5.82,
  9.7
 ],
 screenPhysicalPixels: [
  2048,
  1536
 ],
 type: "tablet",
 docname: "galaxy tab s2 9.7",
 brand: "samsung",
 ppi: 263.92,
 weightOunces: 13.72,
 screenRatio: 2,
 bodySizeInches: [
  9.34,
  6.65,
  0.22
 ],
 viewportPixels: [
  1024,
  768
 ],
 model: "galaxy tab s2 9.7"
};

const galaxyTab92_2016 = {
  "batterymAh": 5870,
  "ppi": 263.92,
  "screenPhysicalPixels": [
   2048,
   1536
  ],
  "screenSizeInches": [
   7.76,
   5.82,
   9.7
  ],
  "brand": "samsung",
  "model": "galaxy tab s2 9.7 (2016)",
  "screenRatio": 2,
  "docname": "galaxy tab s2 9.7 (2016)",
  "type": "tablet",
  "bodySizeInches": [
   9.34,
   6.65,
   0.22
  ],
  "viewportPixels": [
   1024,
   768
  ],
  "weightOunces": 13.72
};

const lg32ul = {
  weightOunces: 198.4,
  type: "monitor",
  model: "32ul750",
  viewportPixels: [
   3840,
   2160
  ],
  docname: "lg32ul750",
  brand: "lg",
  bodySizeInches: [
   28.7,
   16.7,
   1.96
  ],
  screenSizeInches: [
   27.9,
   15.69,
   32
  ],
  batterymAh: 0,
  ppi: 137.7,
  screenSizeInches: [
   3840,
   2160
  ],
  screenRatio: 1
};

const data = [
  pixelC,
  pixel4XL,
  pixel4,
  iphone6sPlus,
  galaxyTab92,
  galaxyTab92_2016,
  lg32ul
];

async function addData() {

  // data.forEach(async doc => {
  //   let tmp = JSON.parse(doc);
  //   await db.collection('test').doc(tmp.docname).set(tmp)
  //   .then(docRef => {
  //     console.log('Document written with ID: ', docRef.id);
  //   }).catch(err => {
  //     console.error('Error adding document: ', err);
  //   });
  // });
  // console.log('Done');
  await db.collection('test').doc()
}