import Worker from "worker-loader?name=[name].js!./worker";

const worker = new Worker();
//----------DEMO 1-----------------------
// let hiBtn = document.querySelector('#hi-btn') as HTMLButtonElement;
// let byeBtn = document.querySelector('#bye-btn') as HTMLButtonElement;

// hiBtn.addEventListener('click', ev => {
//   worker.postMessage('[Main Thread] Hi');
// });

// byeBtn.addEventListener('click', ev => {
//   worker.postMessage('[Main Thread] Bye');
// });

// let counter = 0;
// let counterSpan = document.querySelector('#counter-span') as HTMLSpanElement;
// setInterval(() => {
//   counterSpan.innerText = String(++counter);

//   if (counter == 10) {
//     // console.log('[Main Thread] Start For Loop');
//     // for (let i = 0; i < 9999999999; i++) {}
//     // console.log('[Main Thread] End For Loop');

//     console.log('[Main Thread] Delegate For Loop to Worker');
//     worker.postMessage('start');
//     worker.addEventListener('message', ev => {
//       if (ev.data == 'end') {
//         console.log('[Main Thread] Worker has signaled end of For Loop');
//       }
//     });
//   }

// }, 200);

//----------DEMO 1-----------------------

// const imgSrcArr = [
//   'https://imgur.com/RoPz1Bw',
//   'https://imgur.com/2cGEUHD',
//   'https://imgur.com/PuQWroz',
//   'https://imgur.com/tJoGKN3',
//   'https://imgur.com/xLFMTC3',
//   'https://imgur.com/VkYuDUY',
// ];

const imgSrcArr = [
  './cat.png',
  './dog.jpeg',
  './frog.jpg',
  './elephant.jpg',
  './giraffe.jpg',
  './turtle.jpg'
];

let counter = 0;

const myCanvas = document.querySelector('#canvas') as HTMLCanvasElement;
myCanvas.width = 500;
myCanvas.height = 500;
const myCanvasCtx = myCanvas.getContext('2d');

const img = new Image();
img.onload = () => {
  myCanvasCtx?.clearRect(0, 0, myCanvas.width, myCanvas.height);
  myCanvasCtx?.drawImage(img, 200, 200);
}


// setInterval(() => {
//   let idx = ++counter % 6;
//   img.src = imgSrcArr[idx];

//   if (counter == 10) {
//     console.log('[Main Thread] Start For-Loop');
//     for (let i = 0; i < 9999999999; i++) {}
//     console.log('[Main Thread] End For-Loop');
//   }
// }, 500);

myCanvas.addEventListener('click', ev => {
  img.src = imgSrcArr[++counter % 6];
  if (counter % 10 == 0) {
    console.log('[Main Thread] Start For-Loop');
    for (let i = 0; i < 9999999999; i++) {}
    console.log('[Main Thread] End For-Loop');
  }
});


