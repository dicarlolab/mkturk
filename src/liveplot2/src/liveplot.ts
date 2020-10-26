import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import { Utils } from './utils';

const storage = firebase.storage();
const stroageRef = storage.ref();

const DATA_PATH = 'mkturkfiles/datafiles/'
const DATA_REF = stroageRef.child(DATA_PATH);
const PARAM_PATH = 'mkturkfiles/parameterfiles/subjects/';
const PARAM_REF = stroageRef.child(PARAM_PATH);
const utils = new Utils;

export class Liveplot {
  public file: any;

  constructor() {
    this.file = {
      path: DATA_PATH,
      list: [],
      name: '',
      data: null,
      ver: null,
      date: null,
      dateChanged: false,
      fileChanged: false
    };


  }

  // public fileSelectionChanged(evt: Event) {
  //   evt.preventDefault();
  //   evt.stopPropagation;
  //   console.log('New File!');
  //   this.file.name = this.fileList[parseInt()]

  // }

  public fileSelectionChangedListener(elem: HTMLSelectElement) {
    elem.addEventListener('input', (evt: Event) => {
      evt.stopPropagation();
      evt.preventDefault();
      this.file.name = this.file.fileList[parseInt(elem.value)].fullpath;
      this.file.fileChanged = true;
      console.log('file name:', this.file.name);
      console.log('file path:', this.file.path);
    });
  }

  public async populateFileList(elem: HTMLSelectElement) {
    try {
      let fileList = await utils.getFileList(this.file.path);

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

      this.file.fileList = fileList;

      for (let i = 0; i < fileList.length; i++) {
        let opt = document.createElement('option');
        opt.value = i.toString();
        opt.innerHTML = fileList[i].name;
        elem.appendChild(opt);
        elem.dispatchEvent(new Event('input'));
      }

      this.file.name = this.file.fileList[0].fullpath;
      this.file.fileChanged = true;
    
    } catch (error) {
      console.error('ERROR #file-list:', error);
    }


  }

}
