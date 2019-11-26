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