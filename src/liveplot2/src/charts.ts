const colorMapJet = [
  '#00008F','#00009F','#0000AF','#0000BF',
  '#0000CF','#0000DF','#0000EF','#0000FF',
  '#0010FF','#0020FF','#0030FF','#0040FF',
  '#0050FF','#0060FF','#0070FF','#0080FF',
  '#008FFF','#009FFF','#00AFFF','#00BFFF',
  '#00CFFF','#00DFFF','#00EFFF','#00FFFF',
  '#10FFEF','#20FFDF','#30FFCF','#40FFBF',
  '#50FFAF','#60FF9F','#70FF8F','#80FF80',
  '#8FFF70','#9FFF60','#AFFF50','#BFFF40',
  '#CFFF30','#DFFF20','#EFFF10','#FFFF00',
  '#FFEF00','#FFDF00','#FFCF00','#FFBF00',
  '#FFAF00','#FF9F00','#FF8F00','#FF8000',
  '#FF7000','#FF6000','#FF5000','#FF4000',
  '#FF3000','#FF2000','#FF1000','#FF0000',
  '#EF0000','#DF0000','#CF0000','#BF0000',
  '#AF0000','#9F0000','#8F0000','#800000'
];



export class Charts {

  public elemObject: any;
  public perfDataTable: google.visualization.DataTable;
  public cumulDataTable: google.visualization.DataTable;
  public xyPosDataTable: google.visualization.DataTable;
  public rxnTimeDataTable: google.visualization.DataTable;
  public rewardDataTable: google.visualization.DataTable;
  public choiceDataTable: google.visualization.DataTable;
  public objPerfDataTable: google.visualization.DataTable;

  public perfDashboard: google.visualization.Dashboard;
  public trialDashboard: google.visualization.Dashboard;

  public perfPlot: google.visualization.ChartWrapper;
  public perfPlotConfig: google.visualization.ChartSpecs;
  public perfPlotOptions: google.visualization.LineChartOptions;
  public perfFilter: google.visualization.ControlWrapper;
  public perfFilterConfig: google.visualization.ControlWrapperOptions;
  public perfFilterOptions: Object;

  public trialPlot: google.visualization.ChartWrapper;
  public trialPlotConfig: google.visualization.ChartSpecs;
  public trialPlotOptions: google.visualization.AreaChartOptions;
  public trialFilter: google.visualization.ControlWrapper;
  public trialFilterConfig: google.visualization.ControlWrapperOptions;
  public trialFilterOptions: Object;

  public screenPlot: google.visualization.ComboChart;
  public screenPlotOptions: google.visualization.ComboChartOptions;

  public rxnPlot: google.visualization.Histogram;
  public rxnPlotOptions: google.visualization.HistogramOptions;

  public rewardPlot: google.visualization.ColumnChart;
  public rewardPlotOptions: google.visualization.ColumnChartOptions;

  public choicePlot: google.visualization.ColumnChart;
  public choicePlotOptions: google.visualization.ColumnChartOptions;

  public objPerfPlot: google.visualization.ColumnChart;
  public objPerfPlotOptions: google.visualization.ColumnChartOptions;


  constructor(elemObj: any) {
    this.elemObject = elemObj;
    this.setupCharts();
    
    
    console.log(elemObj);

  }

  public setupDataTables() {
    this.perfDataTable = new google.visualization.DataTable();
    this.cumulDataTable = new google.visualization.DataTable();
    this.xyPosDataTable = new google.visualization.DataTable();
    this.rxnTimeDataTable = new google.visualization.DataTable();
    this.rewardDataTable = new google.visualization.DataTable();
    this.choiceDataTable = new google.visualization.DataTable();
    this.objPerfDataTable = new google.visualization.DataTable();

  }

  public async setupCharts() {
    await google.charts.load('current', { packages: ['corechart', 'controls'] });
    this.setupChartOptions();
    this.setupDataTables();

    this.perfDashboard = (
      new google.visualization.Dashboard(this.elemObject.perfDiv)
    );
    this.perfPlot = (
      new google.visualization.ChartWrapper(this.perfPlotConfig)
    );
    this.perfFilter = (
      new google.visualization.ControlWrapper(this.perfFilterConfig)
    );

    this.trialDashboard = (
      new google.visualization.Dashboard(this.elemObject.trialDiv)
    );
    this.trialPlot = (
      new google.visualization.ChartWrapper(this.trialPlotConfig)
    );
    this.trialFilter = (
      new google.visualization.ControlWrapper(this.trialFilterConfig)
    );

    this.perfDashboard.bind(this.perfFilter, this.perfPlot);
    this.trialDashboard.bind(this.trialFilter, this.trialPlot);

    this.screenPlot = (
      new google.visualization.ComboChart(this.elemObject.screenPlot)
    );
    this.rxnPlot = (
      new google.visualization.Histogram(this.elemObject.rxnPlot)
    );
    this.rewardPlot = (
      new google.visualization.ColumnChart(this.elemObject.rewardPlot)
    );
    this.choicePlot = (
      new google.visualization.ColumnChart(this.elemObject.choicePlot)
    );
    this.objPerfPlot = (
      new google.visualization.ColumnChart(this.elemObject.objPerfPlot)
    );

  }

  public setupChartOptions() {
    
    this.perfPlotOptions = {
      width: this.elemObject.perfPlot.clientWidth,
      height: this.elemObject.perfPlot.clientHeight,
      hAxis: { title: 'Trial#' },
      vAxis: { title: 'Correct (%)', viewWindow: { min: 0, max: 1.0 } },
      title: 'Subject 1',
      animation: {
        duration: 500,
        easing: 'linear',
        startup: true
      },
      series: {
        0: { color: '#43459d' },
        1: { color: '#e2431e' }
      }
    };
    this.perfPlotConfig = {
      chartType: 'LineChart',
      containerId: 'performance-plot',
      options: this.perfPlotOptions
    };
    this.perfFilterOptions = {
      filterColumnLabel: 'currentTrial',
      ui: {
        chartType: 'LineChart',
        chartOptions: {
          smooth: 20,
          hAxis: { baselineColor: 'none', title: 'Trial#' },
          vAxis: { title: '%', viewWindow: { min: 0, max: 1.0 } },
          width: this.elemObject.perfFilter.clientWidth,
          height: this.elemObject.perfFilter.clientHeight,
          animation: { duration: 1000, easing: 'out' }
        },
        chartView: {
          columns: [0, 1]
        },
        minRangeSize: 2
      }
    };
    this.perfFilterConfig = {
      controlType: 'ChartRangeFilter',
      containerId: 'performance-filter',
      state: { range: { start: 0, end: 100 } },
      options: this.perfFilterOptions 
    };


    this.trialPlotOptions = {
      width: this.elemObject.trialPlot.clientWidth,
      height: this.elemObject.trialPlot.clientHeight,
      areaOpacity: 0.5,
      hAxis: { title: 'Time (h) '},
      vAxes: {
        0: { title: 'Trial count' },
        1: { title: 'RFID'}
      },
      animation: {
        duration: 500,
        easing: 'linear',
        startup: true
      },
      series: {
        0: { targetAxisIndex: 0 },
        1: { targetAxisIndex: 0 },
        2: { targetAxisIndex: 1 }
      }
    };
    this.trialPlotConfig = {
      chartType: 'AreaChart',
      containerId: 'trial-plot',
      options: this.trialPlotOptions
    };
    this.trialFilterOptions = {
      filterColumnLabel: 'time',
      ui: {
        chartType: 'LineChart',
        chartOptions: {
          hAxis: { baselineColor: 'none', title: 'Time' },
          vAxis: { title: '#' },
          width: this.elemObject.trialFilter.clientWidth,
          height: this.elemObject.trialFilter.clientHeight,
          animation: { duration: 1000, easing: 'out' }
        }
      },
      chartView: {
        columns: [0, 1]
      }
    };
    this.trialFilterConfig = {
      controlType: 'ChartRangeFilter',
      containerId: 'trial-filter',
      state: { range: { start: 0, end: 100 } },
      options: this.trialFilterOptions
    };


    this.screenPlotOptions = {
      seriesType: 'scatter',
      pointSize: 1
    };
    this.rxnPlotOptions = {
      width: this.elemObject.rxnPlot.clientWidth,
      height: this.elemObject.rxnPlot.clientHeight,
      title: 'Reaction Time (ms)',
      animation: {
        duration: 500,
        easing: 'linear',
        startup: true
      },
      legend: { position: 'none' }
    };
    this.rewardPlotOptions = {
      width: this.elemObject.rewardPlot.clientWidth,
      height: this.elemObject.rewardPlot.clientHeight,
      title: 'Amount of Reward',
      hAxis: { title: 'reward amount' },
      vAxis: { title: 'counts', minValue: 0, maxValue: 1 },
      legend: { position: 'none' }
    };
    this.choicePlotOptions = {
      width: this.elemObject.choicePlot.clientWidth,
      height: this.elemObject.choicePlot.clientHeight,
      hAxis: { title: 'Choice', },
      vAxis: { title: 'counts', minValue: 0, maxValue: 1 },
      legend: { position: 'none' }
    };
    this.objPerfPlotOptions = {
      width: this.elemObject.objPerfPlot.clientWidth,
      height: this.elemObject.objPerfPlot.clientHeight,
      hAxis: { title: 'Objects' },
      vAxis: { title: 'counts', minValue: 0, maxValue: 1 },
      title: 'Object Performance',
      legend: { position: 'none' }
    };

  }

  public initializeChartData(file: any) {
    // Remove rows and columns
    // console.log(this.perfDataTable);
    this.perfDataTable
      .removeRows(0, this.perfDataTable.getNumberOfRows());
    this.perfDataTable
      .removeColumns(0, this.perfDataTable.getNumberOfColumns());

    this.cumulDataTable
      .removeRows(0, this.cumulDataTable.getNumberOfRows());
    this.cumulDataTable
      .removeColumns(0, this.cumulDataTable.getNumberOfColumns());

    this.xyPosDataTable
      .removeRows(0, this.xyPosDataTable.getNumberOfRows());
    this.xyPosDataTable
      .removeColumns(0, this.xyPosDataTable.getNumberOfColumns());

    this.rxnTimeDataTable
      .removeRows(0, this.rxnTimeDataTable.getNumberOfRows());
    this.rxnTimeDataTable
      .removeColumns(0, this.rxnTimeDataTable.getNumberOfColumns());

    this.rewardDataTable
      .removeRows(0, this.rewardDataTable.getNumberOfRows());
    this.rewardDataTable
      .removeColumns(0, this.rewardDataTable.getNumberOfColumns());

    this.choiceDataTable
      .removeRows(0, this.choiceDataTable.getNumberOfRows());
    this.choiceDataTable
      .removeColumns(0, this.choiceDataTable.getNumberOfColumns());

    this.objPerfDataTable
      .removeRows(0, this.objPerfDataTable.getNumberOfRows());
    this.objPerfDataTable
      .removeColumns(0, this.objPerfDataTable.getNumberOfColumns());

    // Add columns
    this.perfDataTable.addColumn('number', 'currentTrial');
    this.perfDataTable.addColumn('number', 'current');
    this.perfDataTable.addColumn('number', '100trialsAvg');

    this.cumulDataTable.addColumn('datetime', 'time');
    this.cumulDataTable.addColumn('number', 'Trials');
    this.cumulDataTable.addColumn('number', 'Performance');
    this.cumulDataTable.addColumn('number', 'RFID');
    // this.cumulDataTable.addColumn('number', 'Weight');

    this.rxnTimeDataTable.addColumn('string', 'success');
    this.rxnTimeDataTable.addColumn('number', 'durationMS');

    /** 
     * xyPosDataTable Guide
     * 0: x
     * 1: y fix (box)
     * 2: y sample (box)
     * 3: y test1 (box) | y same (box)
     * 4: y test2 (box) | y different (box)
     * 5: y Fix_reward (dots)
     * 6: y Fix_punish (dots)
     * 7: y Target_reward (dots)
     * 8: y Target_punish (dots)
     */
    this.xyPosDataTable.addColumn('number', 'xpos');
    this.xyPosDataTable.addColumn('number', 'Fixation');
    this.xyPosDataTable.addColumn('number', 'Sample');

    if (file.data.SameDifferent <= 0) {
      for (let i = 0; i < file.data.TestGridIndex.length; i++) {
        this.xyPosDataTable.addColumn('number', 'Test' + (i + 1));
      }
    } else if (file.data.SameDiffernt > 0) {
      this.xyPosDataTable.addColumn('number', 'Same');
      this.xyPosDataTable.addColumn('number', 'Different');
    }

    this.xyPosDataTable.addColumn('number', 'Fix_Reward');
    this.xyPosDataTable.addColumn('number', 'Fix_Punish');
    this.xyPosDataTable.addColumn('number', 'Target_Reward');
    this.xyPosDataTable.addColumn('number', 'Target_Punish');
    
    this.rewardDataTable.addColumn('string', 'reard size');
    this.rewardDataTable.addColumn('number', 'nrewards');

    this.choiceDataTable.addColumn('string', 'choice');
    this.choiceDataTable.addColumn('number', '# of responses');

    this.objPerfDataTable.addColumn('string', 'object');
    this.objPerfDataTable.addColumn('number', 'performance');
    this.updatePlots();

  }

  public updatePlots() {

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
    let dx = 1 / (colorMapJet.length - 1);
    for (let i = 0; i < colorMapJet.length; i++) {
      formatter.addRange(i * dx, (i + 1) * dx, 'gray', colorMapJet[i]);
    }
    formatter.format(data, colIdx);
  }


}