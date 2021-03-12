import 'bootstrap/dist/css/bootstrap.min.css';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.min.css';
import { MkScenes } from './mkscenes';

const playground = document.querySelector('#playground') as HTMLCanvasElement;
const prevBtn = document.querySelector('#previous-btn') as HTMLButtonElement;
const nextBtn = document.querySelector('#next-btn') as HTMLButtonElement;
const captureBtn = document.querySelector('#capture-btn') as HTMLButtonElement;

const templateEditorDiv = document.querySelector('#editor-template') as HTMLDivElement;
const fixBtn = document.querySelector('#fix-btn') as HTMLButtonElement;
const factorizeBtn = document.querySelector('#factorize-btn') as HTMLButtonElement;

const previewEditorDiv = document.querySelector('#editor-preview') as HTMLDivElement;
const saveBtn = document.querySelector('#save-btn') as HTMLButtonElement;

let mks = new MkScenes(playground);
// mks.bindCanvas(playground);
let sceneIdx = 0;

prevBtn.addEventListener('click', (evt: Event) => {
  sceneIdx--;
  prevBtn.disabled = (sceneIdx > 0) ? false : true;
  mks.renderScene(sceneIdx);
});

nextBtn.addEventListener('click', (evt: Event) => {
  sceneIdx++;
  prevBtn.disabled = (sceneIdx > 0) ? false : true;
  mks.renderScene(sceneIdx);
});

captureBtn.addEventListener('click', (evt: Event) => {
  console.log('capturing scene');
});

console.log(fixBtn.innerText);

let templateEditor = new JSONEditor(templateEditorDiv);
fixBtn.addEventListener('click', (evt: Event) => {
  fixBtn.innerText = (fixBtn.innerText === 'FIX') ? 'UNDO FIX' : 'FIX';
});
factorizeBtn.addEventListener('click', (evt: Event) => {
  factorizeBtn.innerText = (factorizeBtn.innerText === 'FACTORIZE') ? 'UNDO FACTORIZE' : 'FACTORIZE';
});


let previewEditor = new JSONEditor(previewEditorDiv);
saveBtn.addEventListener('click', (evt: Event) => {
  // TODO: Saving logic
  console.log('Save scene file');
});