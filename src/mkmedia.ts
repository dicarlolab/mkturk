import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import JSONEditor from "jsoneditor";
import Viewer from "viewerjs";

type FileRef = firebase.storage.Reference;
const db = firebase.firestore();
const storage = firebase.storage();
const storageRef = storage.ref();

export class Mkeditor {
  public editorDivElement: HTMLDivElement;
  private editorElement: HTMLDivElement;
  private editor: JSONEditor;
  private updateBtn: HTMLButtonElement;
  private activeFile: 
    { loc: string, id: string | FileRef };

  constructor() {
    this.editorDivElement 
      = document.querySelector("#editor-div") as HTMLDivElement;
    this.editorElement = document.querySelector("#editor") as HTMLDivElement;
    this.editor = new JSONEditor(this.editorElement);
    this.updateBtn = document.querySelector("#update-btn") as HTMLButtonElement;
    this.activeFile = { loc: "", id: "" };
    this.updateBtnAction();
  }

  public displayFirebaseTextFile(file: Object, loc: string) {
    try {
      this.editor.destroy();
      this.editor = new JSONEditor(this.editorElement, {}, file);
      this.trackFirebaseActiveFile(loc, file);
    } catch (error) {
      console.error("JSONEditor Error:", error);
    }
  }

  private trackFirebaseActiveFile(loc: string, file: any) {
    if (loc === "marmosets") {
      this.activeFile = { loc: loc, id: file.name };
    }

    else if (loc === "mkturkdata") {
      if (file.Doctype === "task") {
        this.activeFile = { loc: loc, id: file.Taskdoc };
      } else if (file.Doctype === "images") {
        this.activeFile = { loc: loc, id: file.Imagesdoc};
      }
    }

    console.log("activeFile", this.activeFile);
  }

  public async displayStorageTextFile(fileRef: FileRef) {
    let fileUrl = await fileRef.getDownloadURL().catch(e => {
      console.error("Error getting download URL", e);
    });

    let response = await fetch(fileUrl);
    let file = await response.json();

    this.editor.destroy();
    this.editor = new JSONEditor(this.editorElement, {}, file);
    this.activeFile = { loc: "mkturkfiles", id: fileRef };
    console.log("activeFile", this.activeFile);
  }

  private updateBtnAction() {
    this.updateBtn.addEventListener("click" || "pointerup", (ev: Event) => {
      ev.preventDefault();
      ev.stopPropagation();
      let loc = this.activeFile.loc;      

      if (loc === "marmosets" || loc === "mkturkdata") {
        // handle marmosets && mkturkdata
        let id = this.activeFile.id as string;
        db.collection(loc).doc(id).set(
          this.dateToTimestamp(this.editor.get())
        ).then(() => {
          console.log("[DOCUMENT UPDATED]:", id);
          alert("Document Updated");
        }).catch(e => {
          console.error("[DOCUMENT UPDATE FAILED]", "FILE:", id, "ERROR:", e);
          alert("Document Update Failed");
        });
      }

      else if (this.activeFile.loc === "mkturkfiles") {
        // handle mkturkfiles
        let id = this.activeFile.id as FileRef;
        let updatedFile = new Blob([ JSON.stringify(this.editor.get(), null, 1) ]);
        let metadata = {
          contentType: "application/json"
        };
        id.put(updatedFile, metadata).then(snapshot => {
          console.log("[DOCUMENT UPDATED]:", snapshot.metadata.name);
          alert("Document Updated")
        }).catch(e => {
          console.error("[DOCUMENT UPDATE FAILED]", "FILE:", id, "ERROR:", e);
          alert("Document Update Failed");
        });
      }

      else {
        console.error("[DOCUMENT UPDATE FAILED] ERROR: Location Error");
      }
    });
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