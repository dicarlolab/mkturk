import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

const storage = firebase.storage();
const storageRef = storage.ref();

export class Utils {
  constructor() {}

  public async getFileList(path: string, ext?: string) {
    let fileList = await storageRef.child(path).listAll();
    /* only keep files within the last 2 years*/
    let year = new Date().getFullYear();
    let files: any = [];

    for (let item of fileList.prefixes) {
      let subFileList = (
        await this.getFileList(path + item.name + '/', ext)
      );
      files = [...files, ...subFileList];
    }

    for (let i = 0; i < fileList.items.length - 1; i++) {
      if (typeof(ext) == 'string') {
        if (fileList.items[i].name.endsWith(ext)) { // if file extension is correct
          files.push({
            fullpath: fileList.items[i].fullPath,
            name: fileList.items[i].name
          });
        }
      } else if (parseInt(fileList.items[i].name.slice(0, 4)) >= year - 1) {
        files.push({
          fullpath: fileList.items[i].fullPath,
          name: fileList.items[i].name
        });
      }
    }

    return files;
  }

  public async getStorageFile(path: string) {
    let fileRef = storageRef.child(path);
    let url = await fileRef.getDownloadURL().catch(e => {
      console.error('Error Getting URL');
    });
    let response = await fetch(url);
    let file = await response.json();
    return file;
  }

  public smooth(data: any[], n: number) {
    let smoothedData = [];
    for (let i = 0; i < data.length; i++) {
      if (i < n - 1) {
        let tmp = data.slice(0, i + 1);
        smoothedData[i] = tmp.reduce((a: any, b: any) => {
          return a + b;
        });
        smoothedData[i] /= (i + 1);
      } else {
        let tmp = data.slice(i - n + 1, i + 1);
        smoothedData[i] = tmp.reduce((a: number, b: number) => {
          return a + b;
        });
        smoothedData[i] /= n;
      }
    }
  }
}