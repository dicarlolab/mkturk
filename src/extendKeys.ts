Tabulator.prototype.extendModule("keybindings", "actions", {
  "selectNextRow": function(e: any, ) {
    e.preventDefault();
    let rows: any = Tabulator.prototype.getSelectedRows();
    let lastRow: any = rows[rows.length - 1].getIndex();
    let nextRow: any = rows[rows.length = 1].getNextRow();

    if (nextRow) {
      Tabulator.prototype.scrollToRow(nextRow, "center", false);
      Tabulator.prototype.deselectRow(lastRow);
      Tabulator.prototype.selectRow(nextRow);
    }

    rows = "";
    lastRow = "";
    nextRow = "";
  },
  "selectPrevRow": function(e: any) {
    e.preventDefault();
    let rows: any = Tabulator.prototype.getSelectedRows();
    let firstRow = rows[rows.length - 1].getIndex();
    let prevRow = rows[rows.length -1].getPrevRow();

    if (prevRow) {
      Tabulator.prototype.scrollToRow(prevRow, "center", false);
      Tabulator.prototype.deselectRow(firstRow);
      Tabulator.prototype.selectRow(prevRow);
    }

    rows = "";
    firstRow = "";
    prevRow = "";
  }
})