import * as firebase from "firebase/app";
import "firebase/firestore";
import JSONEditor from "jsoneditor";
type Timestamp = firebase.firestore.Timestamp;
import { Mkeditor } from "./mkmedia";

export class Mkfinder {
  finder: any;
  editor: Mkeditor;

  constructor() {
    this.finder = new Tabulator("#finder");
    this.editor = new Mkeditor();
    
  }

  public displayFirestoreTable(dataArr: any[], database: string) {
    
    dataArr = this.timestampToDate(dataArr);

    if (database == "marmosets") {
      this.finder.destroy();
      this.finder = new Tabulator("#finder", {
        data: dataArr,
        index: "name",
        layout: "fitColumns",
        initialSort: [
          {column: "name", dir: "asc"}
        ],
        columns: [
          {title: "<input id='select-all' type='checkbox'/>", width: 15, headerSort: false},
          {title: "Name", field: "name"},
          {title: "Sex", field: "sex"},
          {title: "DOB", field: "birthdate"},
          {title: "RFID", field: "rfid"},
        ],
        selectable: true,
        selectableRangeMode: "click",
        rowClick: (event, row) => {
          event.stopPropagation();
          this.editor.displayDoc(row.getData());
        },
        rowTap: (event, row) => {
          event.stopPropagation();
          this.editor.displayDoc(row.getData());
        },
        tableBuilt: () => {
          /* selectAllBox function */
          let selectAllBox 
            = document.querySelector("#select-all") as HTMLInputElement;
          selectAllBox.addEventListener("change", ev => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        }
      });
    }
    else if (database == "mkturkdata") {
      this.finder.destroy();
      this.finder = new Tabulator("#finder", {
        data: dataArr,
        index: "index",
        layout: "fitColumns",
        initialSort: [
          {column: "Agent", dir: "asc"}
        ],
        columns: [
          {title: "<input id='select-all' type='checkbox'/>", width: 15, headerSort: false},
          {title: "Agent", field: "Agent"},
          {title: "Doctype", field: "Doctype"},
          {title: "CurrentDate", field: "CurrentDate"},
          {title: "FirestoreDocRoot", field: "FirestoreDocRoot", visible: false},
        ],
        selectable: true,
        selectableRangeMode: "click",
        rowClick: (event, row) => {
          event.stopPropagation();
          this.editor.displayDoc(row.getData());
          
        },
        rowTap: (event, row) => {
          event.stopPropagation();
          this.editor.displayDoc(row.getData());
        },
        tableBuilt: () => {          
          /* selectAllBox function */
          let selectAllBox 
            = document.querySelector("#select-all") as HTMLInputElement;
          selectAllBox.addEventListener("change", ev => {
            if (selectAllBox.checked == true) {
              this.finder.selectRow();
            } else {
              this.finder.deselectRow();
            }
          });
        }
      });
    }
    else {
      console.error("Wrong or Invalid database trying to be tabularized");
    }
  }
  

  private timestampToDate(dataArr: any[]) {
    function _timestampToDate(element: Timestamp, idx: number, arr: any[]) {
      try {
        arr[idx] = element.toDate().toJSON();
      } catch {

      }
    }

    dataArr.forEach(data => {
      for (let key of Object.keys(data)) {
        if (Array.isArray(data[key])) {
          console.log("ARRAY KEY:", key);
          data[key].forEach(_timestampToDate);
        }
  
        else if (this.isDict(data[key])) {
          console.log("DICTIONARY KEY:", key);
          try {
            data[key] = data[key].toDate().toJSON();
            console.log("TRIED KEY", key);
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
    });

    return dataArr;
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

  private updateSelectAll() {
    let selectAllBox = document.querySelector("#select-all") as HTMLInputElement;
    if (selectAllBox.checked == true) {
      this.finder.selectRow();
    } else {
      this.finder.deselectRow();
    }
  }

  private isDict(val: any) {
    return val && typeof val === "object" && val.constructor === Object;
  }

  private isString(val: any) {
    return typeof val === "string" || val.constructor === String;
  }

  private isNumber(val: any) {
    return typeof val === "number" && isFinite(val);
  }
}