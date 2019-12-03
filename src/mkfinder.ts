import * as firebase from "firebase/app";
import "firebase/firestore";
import "tabulator-tables";
import "extendKeys";

type Timestamp = firebase.firestore.Timestamp;

export function keys<O extends object>(obj: O): Array<keyof O> {
  return Object.keys(obj) as Array<keyof O>;
}

export class Mkfinder {
  finder: Tabulator;
  

  constructor() {
    this.finder = new Tabulator("#tabulator");
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
        }
      })
    }
    else if (database == "mkturkdata") {

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
          for (let key of Object.keys(data)) {
            if ((key.toLowerCase().includes("date") || key.includes("_dates")) && key != "CurrentDateValue") {
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