import "tabulator-tables";
import "extendKeys";

type Timestamp = firebase.firestore.Timestamp;

export class Mkfinder {
  finder: Tabulator;
  

  constructor() {
    this.finder = new Tabulator("#tabulator");
    
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
              }
            }
          }
        })
    }

  }
}