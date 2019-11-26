import "tabulator-tables";
Tabulator.prototype.extendModule("keybindings", "actions", {
  "selectNextRow": function(e: Event) {
    e.preventDefault();
    let rows = this.table.getSelectedRows();
    let lastRow = rows[rows.length - 1].getIndex();
    let nextRow = rows[rows.length = 1].getNextRow();

    if (nextRow) {
      this.table.scrollToRow(nextRow, "middle", false);
      this.table.deselectRow(lastRow);
      this.table.selectRow(nextRow);
    }

    rows = "";
    lastRow = "";
    nextRow = "";
  },
  "selectPrevRow": function(e: Event) {
    e.preventDefault();
    let rows = this.table.getSelectedRows();
    let firstRow = rows[rows.length - 1].getIndex();
    let prevRow = rows[rows.length -1].getPrevRow();

    if (prevRow) {
      this.table.scrollToRow(prevRow, "middle", false);
      this.table.deselectRow(firstRow);
      this.table.selectRow(prevRow);
    }

    rows = "";
    firstRow = "";
    prevRow = "";
  }
})

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