import * as firebase from "firebase/app";
import "firebase/firestore";
import JSONEditor from "jsoneditor";
type Timestamp = firebase.firestore.Timestamp;

export class Mkfinder {
  finder: any;

  constructor() {
    this.finder = new Tabulator("#tabulator");

  }

  public async foo(fileRef: any) {
    let url = await fileRef.getDownloadURL().then((url: any) => {
      return url;
    });

    let response = await fetch(url);
    let doc = await response.json();
    return JSON.stringify(doc);
  }


  public displayFirestoreTable(dataArr: any[], database: string) {
    dataArr = this.timestampToDate(dataArr, database);
    if (database == "marmosets") {
      this.finder.destroy();
      this.finder = new Tabulator("#tabulator", {
        data: dataArr,
        index: "name",
        layout: "fitColumns",
        initialSort: [
          {column: "name", dir: "asc"}
        ],
        columns: [
          {title: "<input id='select-all' type='checkbox' onchange='updateSelectAll()'/>", width: 15, headerSort: false},
          {title: "Name", field: "name"},
          {title: "Sex", field: "sex"},
          {title: "DOB", field: "birthdate"},
          {title: "RFID", field: "rfid"},
        ],
        selectable: true,
        selectableRangeMode: "click",
        rowClick: function(event, row) {
          event.stopPropagation();
        },
        rowTap: function(event, row)  {
          event.stopPropagation();
        }
      })
    }
    else if (database == "mkturkdata") {
      this.finder.destroy();
      this.finder = new Tabulator("#tabulator", {
        data: dataArr,
        index: "index",
        layout: "fitColumns",
        initialSort: [
          {column: "Agent", dir: "asc"}
        ],
        columns: [
          {title: "<input id='select-all' type='checkbox' onchange='updateSelectAll()'/>", width: 15, headerSort: false},
          {title: "Agent", field: "Agent"},
          {title: "Doctype", field: "Doctype"},
          {title: "CurrentDate", field: "CurrentDate"},
          {title: "FirestoreDocRoot", field: "FirestoreDocRoot", visible: false},
        ],
        selectable: true,
        selectableRangeMode: "click",
        rowClick: function(event, row) {
          event.stopPropagation();
        },
        rowTap: function(event, row) {
          event.stopPropagation();
        }
      });
    }
    else {
      console.error("Wrong or Invalid database trying to be tabularized");
    }
  }
  private timestampToDate(dataArr: any[], database: string) {
    switch (database) {
      case "marmosets":
        function dateToJSON(element: Timestamp, idx: number, arr: any[]) {
          arr[idx] = element.toDate().toJSON();
        }

        dataArr.forEach(data => {
          for (let key of Object.keys(data)) {
            if (key.includes("data") || key.includes("_dates")) {
              try {
                if (Array.isArray(data[key])) {
                  data[key].forEach(dateToJSON);
                }
                else {
                  data[key] = data[key].toDate().toJSON();
                }
              }
              catch (error) {
                console.error("Date conversion error:", error);
                console.error("key:", key, "value:", data[key]);
              }
            }
          }
        });
        break;

      case "mkturkdata":
        dataArr.forEach(data => {
          data.index = data.Agent + data.Doctype + data.CurrentDateValue;
          for (let key of Object.keys(data)) {
            if ((key.toLowerCase().includes("date") || key.includes("_dates")) 
                && key != "CurrentDateValue" && key != "ParamFileDate") {
              try {
                data[key] = data[key].toDate().toJSON();
              }
              catch (error) {
                console.error("Date coversion error:", error);
                console.error("key:", key, "value:", data[key]);
              }
            }
          }
        });
        break;
    }
    return dataArr;
  }

  private dateToTimestamp(data: any, database: string) {
    switch (database) {
      case "marmosets":
        function JSONToTimestamp(element: string, idx: number, arr: any[]) {
          arr[idx] = firebase.firestore.Timestamp.fromDate(new Date(element));
        }

        for (let key of Object.keys(data)) {
          if (key.includes("date")) {
            try {
              if (Array.isArray(data[key])) {
                data[key].forEach(JSONToTimestamp);
              }
              else {
                data[key] = firebase.firestore.Timestamp.fromDate(new Date(data[key]));
              }
            }
            catch (error) {
              console.error("Date conversion error:", error);
              console.error("key", key, "value", data[key]);
            }
          }
        }
        break;

      case "mkturkdata":
        for (let key of Object.keys(data)) {
          if ((key.toLowerCase().includes("date") || key.includes("_dates")) && key != "CurrentDateValue") {
            try {
              data[key] = firebase.firestore.Timestamp.fromDate(new Date(data[key]));
            }
            catch (error) {
              console.error("Date conversion error:", error);
              console.error("key:", key, "value:", data[key]);
            }
          }
        }
        break;
    }
    return data;
  }
}