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
    this.updateBtnAction();
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
      console.log("after conversion", this.bar(this.editor.get()));


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

  private isDict(val: any) {
    return val && typeof val === "object" && val.constructor === Object;
  }

  private isString(val: any) {
    return typeof val === "string" || val.constructor === String;
  }

  private isNumber(val: any) {
    return typeof val === "number" && isFinite(val);
  }

  private isValidDate(val: any) {
    return !isNaN(val) && val instanceof Date;
  }

  public timestampToDate(dataArr: any[], database: string) {
    switch(database) {
      case "marmosets":
        function tsToDate(element: Timestamp, idx: number, arr: any[]) {
          try {
            arr[idx] = element.toDate().toJSON();
          } catch (e) {
            console.log("Not Timestamp Obj");
          }
        }

        dataArr.forEach(data => {
          for (let key of Object.keys(data)) {
            if (Array.isArray(data[key])) {
              data[key].forEach(tsToDate);
            }

            else if (this.isDict(data[key])) {
              try {
                data[key] = data[key].toDate().toJSON();
                continue;
              } catch (e) {
                console.log(e);
              }

              for (let key2 of Object.keys(data[key])) {
                try {
                  data[key][key2] = data[key][key2].toDate().toJSON();
                } catch {
                  console.log("Not Timestamp Object");
                }
              }
            }
          }
        });

      break;
    }
    return dataArr;
  }

  public foo(data: any) {
    function _foo(element: Timestamp, idx: number, arr: any[]) {
      try {
        arr[idx] = element.toDate().toJSON();
      } catch (e) {
        console.log("Not Timestamp Obj");
      }
    }

    for (let key of Object.keys(data)) {
      if (Array.isArray(data[key])) {
        console.log("ARRAY " + "data[" + key + "]" + "=" + data[key]);
        data[key].forEach(_foo);
      }

      else if (this.isDict(data[key])) {
        console.log("DICTIONARY " + "data[" + key + "]" + "=" + data[key]);
        try {
          data[key] = data[key].toDate().toJSON();
          console.log("tried key", key);
          continue;
        } catch (e) {
          console.log(e);
        }

        for (let key2 of Object.keys(data[key])) {
          try {
            data[key][key2] = data[key][key2].toDate().toJSON();
          } catch {
            console.log("Not Timestamp Object");
          }
        }
      }
      else if (!this.isString(data[key]) && !this.isNumber(data[key])) {
        try {
          data[key] = data[key].toDate().toJSON();
        } catch {
          console.log("Not Timestamp Object");
        }
      }
    }
    return data;
  }

  public bar(data: any) {
    function _bar(element: string, idx: number, arr: any[]) {
      let dt = new Date(element);
      if (!isNaN(Number(dt)) && dt instanceof Date) {
        arr[idx] = firebase.firestore.Timestamp.fromDate(dt);
      }
    }

    for (let key of Object.keys(data)) {
      if (Array.isArray(data[key])) {
        console.log("ARRAY " + "data[" + key + "]" + "=" + data[key]);
        data[key].forEach(_bar);
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
}