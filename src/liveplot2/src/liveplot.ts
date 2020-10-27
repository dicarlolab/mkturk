import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css'
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
  public editor: JSONEditor;
  private perfDataTable: google.visualization.DataTable;
  // private hello: google.visualization.lineop

  constructor() {
    google.charts.load('current', { packages: ['corechart', 'controls'] });

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
      }

      this.file.name = this.file.fileList[0].fullpath;
      this.file.fileChanged = true;
      this.file.data = (
        this.flattenData(await utils.getStorageFile(this.file.name))
      );

      this.loadDataToEditor(this.file.data);

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

  public setupEditor(elem: HTMLDivElement) {
    this.editor = new JSONEditor(elem);
  }

  private loadDataToEditor(data: any) {
    this.editor.set(data);
  }

  private setupCharts() {
    let lineOptions = {
      width: 900,
      height: 400,
      hAxis: {
        title: 'Trial#'
      },
      vAxis: {
        title: 'Correct (%)',
        viewWindow: {
          min: 0,
          max: 1.0
        }
      },
      title: 'Subject 1',
      animation: {
        duration: 500,
        easing: 'linear',
        startup: true
      },
      series: {
        0: { color: '#43459d' },
        1: { color: '#e2431e' }
      }
    };
  }

}
