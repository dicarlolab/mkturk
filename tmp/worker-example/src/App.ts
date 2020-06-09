import Worker from "worker-loader?name=[name].js!./worker";

const worker = new Worker()

let hiBtn = document.querySelector('#hi-btn') as HTMLButtonElement;
let byeBtn = document.querySelector('#bye-btn') as HTMLButtonElement;

hiBtn.addEventListener('click', ev => {
  worker.postMessage('[Main Thread] Hi');
});

byeBtn.addEventListener('click', ev => {
  worker.postMessage('[Main Thread] Bye');
});