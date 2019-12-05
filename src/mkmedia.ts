import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import JSONEditor from "jsoneditor";
import Viewer from "viewerjs";

type Timestamp = firebase.firestore.Timestamp;

export class Mkeditor {
  private editorContainer: HTMLElement;
  private editor: JSONEditor;
  private updateBtn: HTMLElement;
  private activeDoc: { loc: string, id: string };

  constructor() {
    this.editorContainer = document.querySelector("#editor-container") as HTMLElement;
    this.editor = new JSONEditor(this.editorContainer);
    this.updateBtn = document.querySelector("#update-btn") as HTMLElement;
    this.activeDoc = { loc: "", id: "" };
  }

  public displayDoc(doc: Object) {
    try {
      this.editor.destroy();
      this.editor = new JSONEditor(this.editorContainer, {}, doc);
    } catch (error) {
      console.error("JSONEditor Error:", error);
    }
  }

  public updateBtnAction() {
    this.updateBtn.addEventListener("click", (ev: MouseEvent) => {
      ev.preventDefault();
      ev.stopPropagation();

      console.log("hi");
      console.log(this.editor.get());


    });
  }

//   private dateToTimestamp(data: any, database: string) {
//     function toTS(element: string, idx: number, arr: any[]) {
//       arr[idx] = firebase.firestore.Timestamp.fromDate(new Date(element));
//     }

//     if (database == "marmosets") {

//       for (let key of Object.keys(data)) {
//         if (key.includes("date")) {
//           try {
//             if (Array.isArray(data[key])) {
//               data[key].forEach(toTS);
//             }
//             else {
//               data[key] = firebase.firestore.Timestamp.fromDate(new Date(data[key]));
//             }
//           } catch (error) {
//             console.error("Date conversion error:", error);
//             console.error("key", key, "value", data[key]);
//           }
//         }
//       }
//     }

//     else if (database == "mkturkdata") {
//       for (let key of Object.keys(data)) {
//         if ((key.toLowerCase))
//       }
//     }
//   }
}