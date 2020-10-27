export class Charts {

  public elemObject: any;
  public perfDataTable: google.visualization.DataTable;
  public cumulDataTable: google.visualization.DataTable;
  public xyPosDataTable: google.visualization.DataTable;
  public rxnTimeDataTable: google.visualization.DataTable;
  public rewardDataTable: google.visualization.DataTable;
  public choiceBiasDataTable: google.visualization.DataTable;
  public objPerfDataTable: google.visualization.DataTable;


  constructor(elemObj: any) {
    google.charts.load('current', { packages: ['corechart', 'controls'] });
    this.elemObject = elemObj;


    // this.perfDataTable = new google.visualization.DataTable();

  }

  public setupDataTables() {
    this.perfDataTable = new google.visualization.DataTable();
    this.cumulDataTable = new google.visualization.DataTable();
    this.xyPosDataTable = new google.visualization.DataTable();
    this.rxnTimeDataTable = new google.visualization.DataTable();
    this.rewardDataTable = new google.visualization.DataTable();
    this.choiceBiasDataTable = new google.visualization.DataTable();
    this.objPerfDataTable = new google.visualization.DataTable();

    let formatter = new google.visualization.NumberFormat({
      fractionDigits: 2
    });

    
  }

  private formatDate(data: google.visualization.DataTable, colIdx: number): void {
    let formatter = new google.visualization.DateFormat({
      pattern: 'h aa'
    });
    formatter.format(data, colIdx);
  }

  private formatNumber(data: google.visualization.DataTable, colIdx: number) {
    let formatter = new google.visualization.NumberFormat({
      fractionDigits: 2
    });
    formatter.format(data, colIdx);
  }

  private formatColor(data: google.visualization.DataTable, colIdx: number) {
    let formatter = new google.visualization.ColorFormat();
    formatter.addRange()
  }


}