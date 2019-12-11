import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import JSONEditor from "jsoneditor";
import Viewer from "viewerjs";


type Timestamp = firebase.firestore.Timestamp;
type FileRef = firebase.storage.Reference;

export class Mkeditor {
  private editorContainer: HTMLElement;
  private editor: JSONEditor;
  private updateBtn: HTMLElement;
  private activeFile: 
    { loc: string, id: string | FileRef };

  constructor() {
    console.log("mkeditor");
    this.editorContainer = document.querySelector("#editor") as HTMLElement;
    this.editor = new JSONEditor(this.editorContainer);
    this.updateBtn = document.querySelector("#update-btn") as HTMLButtonElement;
    this.activeFile = { loc: "", id: "" };
    // this.updateBtnAction();
  }

  public displayFirebaseTextFile(file: Object, loc: string) {
    try {
      this.editor.destroy();
      this.editor = new JSONEditor(this.editorContainer, {}, file);
      this.trackFirebaseActiveFile(loc, file);
    } catch (error) {
      console.error("JSONEditor Error:", error);
    }
  }

  private trackFirebaseActiveFile(loc: string, file: any) {
    if (loc === "marmosets") {
      this.activeFile = { loc: loc, id: file.Agent };
    }

    else if (loc === "mkturkdata") {
      if (file.Doctype === "task") {
        this.activeFile = { loc: loc, id: file.Taskdoc };
      } else if (file.Doctype === "images") {
        this.activeFile = { loc: loc, id: file.Imagesdoc};
      }
    }
  }

  public async displayStorageTextFile(fileRef: FileRef) {
    let fileUrl = await fileRef.getDownloadURL().catch(e => {
      console.error("Error getting download URL", e);
    });

    let response = await fetch(fileUrl);
    let file = await response.json();

    this.editor.destroy();
    this.editor = new JSONEditor(this.editorContainer, {}, file);
    this.activeFile = { loc: "mkturkfiles", id: fileRef };
  }

  // public updateBtnAction() {
  //   this.updateBtn.addEventListener("click", (ev: MouseEvent) => {
  //     ev.preventDefault();
  //     ev.stopPropagation();

  //     console.log("hi");
  //     console.log(this.editor.get());
  //     console.log("after conversion", this.bar(this.editor.get()));

  //     let converted = this.bar(this.editor.get());
  //     // db.collection("marmosets").doc("West").set(converted).then(() => {
  //     //   console.log("Doc successfully updated:", "West")
  //     // }).catch(e => {
  //     //   console.error("Error updating doc:", e);
  //     // });
  //   });
  // }

  public updateBtnAction(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();


  }

  private dateToTimestamp(data: any) {
    function _dateToTimestamp(element: string, idx: number, arr: any[]) {
      let dt = new Date(element);
      if (!isNaN(Number(dt)) && dt instanceof Date && typeof element === "string") {
        arr[idx] = firebase.firestore.Timestamp.fromDate(dt);
      }
    }

    for (let key of Object.keys(data)) {
      if (Array.isArray(data[key])) {
        console.log("ARRAY " + "data[" + key + "]" + "=" + data[key]);
        data[key].forEach(_dateToTimestamp);
      }

      else if (this.isDict(data[key])) {
        for (let key2 of Object.keys(data[key])) {
          let dt = new Date(data[key][key2]);
          if (!isNaN(Number(dt)) && dt instanceof Date && this.isString(data[key][key2])) {
            console.log("Dictionary " + "data[" + key + "]" + "=" + data[key]);
            data[key][key2] = firebase.firestore.Timestamp.fromDate(dt);
          }
        }
      }

      else if (this.isString(data[key])) {
        let dt = new Date(data[key]);
        if (!isNaN(Number(dt)) && dt instanceof Date) {
          data[key] = firebase.firestore.Timestamp.fromDate(dt);
        }
      }
    }
    return data;
  }

  private isDict(val: any) {
    return val && typeof val === "object" && val.constructor === Object;
  }

  private isString(val: any) {
    return typeof val === "string" || val.constructor === String;
  }
  
}