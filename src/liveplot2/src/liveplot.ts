import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css'
import { Utils } from './utils';
import { Charts } from './charts';
import { FileType, LiveplotDataType } from './types';

const storage = firebase.storage();
const storageRef = storage.ref();

const DATA_PATH = 'mkturkfiles/datafiles/'
const DATA_REF = storageRef.child(DATA_PATH);
const PARAM_PATH = 'mkturkfiles/parameterfiles/subjects/';
const PARAM_REF = storageRef.child(PARAM_PATH);
const utils = new Utils;

export class Liveplot {
  public file: FileType;

  public editor: JSONEditor;
  public charts: Charts;

  constructor(elemObj: any) {

    this.file = {
      path: DATA_PATH,
      list: [],
      name: '',
      ver: null,
      date: null,
      dataChanged: false,
      fileChanged: false,
    };

    this.charts = new Charts(elemObj);
  }

  public fileSelectionChangedListener(elem: HTMLSelectElement) {
    elem.addEventListener('input', (evt: Event) => {
      evt.stopPropagation();
      evt.preventDefault();
      this.file.name = this.file.list[parseInt(elem.value)].fullpath;
      this.file.fileChanged = true;
      // console.log('file changed', this.file.fileChanged);
      // console.log('file name:', this.file.name);
      // console.log('file path:', this.file.path);
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

      this.file.list = fileList;

      for (let i = 0; i < fileList.length; i++) {
        let opt = document.createElement('option');
        opt.value = i.toString();
        opt.innerHTML = fileList[i].name;
        elem.appendChild(opt);
      }

      this.file.name = this.file.list[0].fullpath;
      this.file.fileChanged = true;
      let rawStorageFile = await utils.getStorageFile(this.file.name);
      
      this.processData(rawStorageFile);

    } catch (error) {
      console.error('ERROR #file-list:', error);
    }


  }

  private flattenData(data: any) {

    let tmp: any = {};

    for (let outerKey in data) {
      if (data.hasOwnProperty(outerKey)) {
        for (let innerKey in data[outerKey]) {
          if (data[outerKey].hasOwnProperty(innerKey)) {
            tmp[innerKey] = data[outerKey][innerKey];
          }
        }
      }
    }

    return tmp;
  }

  private async processData(data: any) {

    this.file.data = this.flattenData(data);
    this.loadDataToEditor(this.file.data);
    console.log(this.file.data);

    let metadata = await utils.getStorageFileMetadata(this.file.name);
    console.log('Success! Loaded File Size:', metadata.size / 1000, 'KB');
    this.file.ver = metadata.generation;
    this.file.dateSaved = new Date(metadata.updated);

    // this.file.data.CurrentDate = (
    //   new Date(this.file.data.CurrentDate).valueOf()
    // );

    if (this.file.fileChanged) {
      this.charts.initializeChartData(this.file);
      this.checkFileStatus();
      this.file.fileChanged = false;
      this.file.dataChanged = false;
    } else if (this.file.dataChanged) {
      this.charts.updatePlots(this.file);
      this.file.dataChanged = false;
      this.checkFileStatus();
    }
  }

  public setupEditor(elem: HTMLDivElement) {
    this.editor = new JSONEditor(elem);
  }

  private loadDataToEditor(data: any) {
    if (this.file.fileChanged) {
      this.editor.set(data);
    } else {
      this.editor.update(data);
    }
  }

  private async checkFileStatus() {
    try {
      let metadata = await utils.getStorageFileMetadata(this.file.name);

      if (this.file.ver != metadata.generation) {
        this.file.ver = metadata.generation;
        this.file.dateSaved = new Date(metadata.updated);
        this.file.dataChanged = true;
        console.log('File was updated ver=' + this.file.ver)
      } else {
        this.file.dataChanged = false;
      }

      if (this.file.fileChanged == true || this.file.dataChanged == true) {
        let rawStorageFile = await utils.getStorageFile(this.file.name);
        this.processData(rawStorageFile);
      } else {
        setTimeout(() => {
          this.checkFileStatus()
        }, 1000);
      }
    } catch (error) {
      console.error('checkFileStatus Error:', error);
    }
  
    return false; // why needed
  
  } 

}
