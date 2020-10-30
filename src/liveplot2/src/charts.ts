import _, { sample } from 'lodash';
import { FileType, LiveplotDataType } from './types';
import { Utils } from './utils';

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

const utils = new Utils();


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

  private vitals: any;


  constructor(elemObj: any) {
    this.elemObject = elemObj;
    this.setupCharts();

    this.vitals = {
      subject: null,
      pctCorrect: 0,
      trials: 0,
      time: 0,
      batteryLeft: 0,
      batteryUsed: 0,
      rewardEstimate: 0,
      automator: '',
      automatorStage: 0,
      automatorStageName: '',
      numReward: 0,
      rfidTag: '',
      rfidTime: 0,
      tagCount: {}
    }
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

  public initializeChartData(file: FileType) {
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

    if (file.data!.SameDifferent <= 0) {
      for (let i = 0; i < file.data!.TestGridIndex.length; i++) {
        this.xyPosDataTable.addColumn('number', 'Test' + (i + 1));
      }
    } else if (file.data!.SameDifferent > 0) {
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
    this.updatePlots(file);

  }

  public updatePlots(file: FileType) {
    console.log('plot updated');
    this.loadVitals(file);
    this.loadVitalsText(file);
    console.log('vitals', this.vitals);
    this.loadPerformanceData(file);

  }

  private loadVitals(file: FileType) {
    let data;
    if (!_.isUndefined(file.data)) {
      data = file.data;
    } else {
      throw 'file.data is Undefined';
    }

    this.vitals.subject = data.Subject;
    this.vitals.trials = data.Response.length;
    
    // Convert milliseconds to minutes
    let startTime = data.StartTime;
    this.vitals.time = (
      _.round(_.round(_.toNumber(_.last(startTime)) - startTime[0]) / 60000)
    );

    /**
     * RFID Processing
     * Only supports current data format
     * file.data.RFIDTag = {
     *   0: [0, 2020-10-27T19:19:19.999Z, 00782A7E88A4],
     *   1: [],
     *   ...
     * };
     */
    let rfidTag = data.RFIDTag;
    if (!_.isUndefined(rfidTag) && _.size(rfidTag) > 0) {
      this.vitals.rfidTag = rfidTag[_.size(rfidTag) - 1][2];
      this.vitals.rfidTime = (
        new Date(rfidTag[_.size(rfidTag) - 1][1]).toLocaleTimeString('en-US')
      );
    } else {
      this.vitals.rfidTag = null;
      this.vitals.rfidTime = null;
    }

    // Automator, AutomatorStage, AutomatorStageName
    if (_.isUndefined(data.Automator)) {
      this.vitals.automator = null;
    } else {
      this.vitals.automator = file.data.Automator;
    }

    if (_.isUndefined(data.CurrentAutomatorStage)) {
      this.vitals.automatorStage = null;
    } else {
      this.vitals.automatorStage = data.CurrentAutomatorStage;
    }

    if (_.isUndefined(data.CurrentAutomatorStageName)) {
      this.vitals.automatorStageName = null;
    } else {
      this.vitals.automatorStageName = data.CurrentAutomatorStageName;
    }

    // Battery, only supports current data format
    let battery = data.Battery;
    if (!_.isUndefined(battery) && _.size(battery) > 0) {
      this.vitals.batteryLeft = _.round(battery[_.size(battery) - 1][2] * 100);
      this.vitals.batteryUsed = (
        _.round(battery[0][2] * 100 - this.vitals.batteryLeft)
      );
    } else {
      this.vitals.batteryLeft = null;
      this.vitals.batteryUsed = null;
    }

    // Performance
    let numCorrect = 0;
    for (let i = 0; i < _.size(data.CorrectItem); i++) {
      if (data.CorrectItem[i] == data.Response[i]) {
        numCorrect++;
      }
    }
    
    this.vitals.numCorrect = numCorrect;
    this.vitals.pctCorrect = (
      _.round(100 * numCorrect / data.Response.length)
    );

    if (!_.isUndefined(data.NReward)) {
      this.vitals.numReward = (
        data.NReward.reduce((a: number, b: number) => { 
          return a + b;
        }, 0)
      );
    }

    this.vitals.rewardEstimate = 0;
    if (!_.isUndefined(data.RewardPer1000Trials)) {
      this.vitals.rewardEstimate = (
        _.round(data.RewardPer1000Trials * this.vitals.numReward / 1000)
      );
    }

  }

  private loadVitalsText(file: FileType) {
    this.elemObject.perfVitals.innerHTML = (
      `${this.vitals.subject}: ${this.vitals.pctCorrect}% (n = ${this.vitals.numCorrect} out of ${this.vitals.trials}, r=${this.vitals.numReward}=${this.vitals.rewardEstimate}mL, ${this.vitals.time} mins)` 
    );

    // TODO: add this.vitals.tagCount data
    this.elemObject.rfidVitals.innerHTML = (
      `RFID: ${this.vitals.rfidTag} (${this.vitals.rfidTime})`
    );
    console.log(this.vitals.rfidTag, this.vitals.rfidTime);

    this.elemObject.batteryVitals.innerHTML = (
      `Battery: ${this.vitals.batteryLeft}% (-${this.vitals.batteryUsed}%)`
    );

    this.elemObject.trialVitals.innerHTML = (
      `Last Trial: ${file.dateSaved!.toLocaleTimeString('en-US')}`
    );
  }

  private loadPerformanceData(file: FileType) {
    // Typechecking file.data
    let data;
    if (!_.isUndefined(file.data)) {
      data = file.data;
    } else {
      throw 'file.data is Undefined';
    }

    this.perfDataTable.removeRows(
      0, this.perfDataTable.getNumberOfRows()
    );
    this.cumulDataTable
      .removeRows(0, this.cumulDataTable.getNumberOfRows());
    this.rxnTimeDataTable
      .removeRows(0, this.rxnTimeDataTable.getNumberOfRows());
    this.xyPosDataTable
      .removeRows(0, this.xyPosDataTable.getNumberOfRows());

    // Create Data Table
    let xData = [];
    let yData: number[] = [];
    let yDataSmall = []; // keeps 5 recent
    let yDataLarge = []; // keeps 100 recent
    let numTotal = [];
    let numCorrect: number[] = [];
    let tCurrent = [];
    let numRFID = [];
    let xPos: number;
    let yPos: number;
    let touchevent: number[][] = [];
    let rt = [];

    // performance
    for (let i = 0; i < data.CorrectItem.length; i++) {
      if (data.CorrectItem[i] == data.Response[i]) {
        yData[i] = 1; // correct
      } else {
        yData[i] = 0; // incorrect
      }

      xData[i] = i;

      // Cumulative trials & correct trials
      numTotal[i] = xData.length;
      if (i > 0) {
        numCorrect[i] = numCorrect[i - 1] + yData[i];
      } else if (i == 0) {
        numCorrect[i] == yData[i];
      }
    }

    for (let i = 0; i < data.NReward.length; i++) {
      if (data.RewardStage == 0) {
        rt[i] = data.FixationXYT[2][i] - data.StartTime[i];
        this.rxnTimeDataTable.addRows(
          [[file.data.FixationTouchEvent[i], rt[i]]]
        );
      } else if (data.NRSVP > 0) {
        rt[i] = data.SampleFixationXYT[2][i] - data.SampleStartTime[i];
        this.rxnTimeDataTable.addRows(
          [[data.SampleFixationTouchEvent[i], rt[i]]]
        );
      } else {
        rt[i] = data.ResponseXYT[2][i] - data.SampleStartTime[i];
        if (data.Response[i] == -1) {
          this.rxnTimeDataTable.addRows(
            [['timeout', data.ChoiceTimeOut]]
          );
        } else if (data.CorrectItem[i] == data.Response[i]) {
          this.rxnTimeDataTable.addRows(
            [['correct', rt[i]]]
          );
        } else {
          this.rxnTimeDataTable.addRows(
            [['wrong', rt[i]]]
          );
        }
      }
    }

    console.log(rt);

    /**
     * Touch XY
     * Store fixation in odd indices and choice in even
     * All touchevents. touchevent has a length that is twice the length
     * of file.data.FixationXYT or file.data.ResponseXYT
     */
    if (
      !_.isUndefined(data.ResponseXYT) 
      && _.size(data.ResponseXYT) > 0
      && _.size(file.data.ResponseXYT[0]) > 0
    ) {
      for (let i = 0; i < _.size(data.ResponseXYT[0]) * 2; i += 2) {
        touchevent[i] = [];
        touchevent[i + 1] = [];
        touchevent[i][0] = file.data.FixationXYT[0][i / 2];
        touchevent[i + 1][0] = file.data.ResponseXYT[0][i / 2];
        touchevent[i][1] = file.data.FixationXYT[1][i / 2];
        touchevent[i + 1][1] = file.data.ResponseXYT[1][i / 2];
      }
    } else {
      for (let i = 0; i < _.size(data.ResponseXYT[0]) * 2; i += 2) {
        touchevent[i] = [];
        touchevent[i + 1] = [];
        touchevent[i][0] = file.data.FixationXYT[0][i / 2];
        touchevent[i + 1][0] = file.data.FixationXYT[0][i / 2];
        touchevent[i][1] = file.data.FixationXYT[1][i / 2];
        touchevent[i + 1][1] = file.data.FixationXYT[1][i / 2];
      }
    }

    // Sample & Test Boxes -- Draw them as a bounding box in the touch plot
    let numColumnXYPos = this.xyPosDataTable.getNumberOfColumns();
    let sampleWidth = this.getSampleWidth(file.data);
    let sampleHeight = sampleWidth;
    let testWidth = this.getTestWidth(file.data);
    let testHeight = testWidth;

    // Fixation & Choice Boxes
    let fixationWidth = this.getFixationWidth(file.data, sampleWidth);
    let fixationHeight = fixationWidth;
    let choiceWidth = this.getChoiceWidth(file.data);
    let choiceHeight = choiceWidth;

    /** 
     * NOTE for positioning elements:
     * grid x, y is offset || fixation & response x, y is not
    */

    // FIXATION
    let numDisplayElems = 1;
    let xyPosArray = [];
    let fixX: number;
    let fixY: number;
    let maxFixationGridIndex = _.max(file.data.FixationGridIndex);
    if (_.isNumber(maxFixationGridIndex)) {
      fixX = file.data.XGridCenter[maxFixationGridIndex];
      fixY = (
        file.data.ViewportPixels[1] 
        - (file.data.YGridCenter[maxFixationGridIndex] + file.data.offsettop)
      );
    } else {
      throw 'data.FixationGridIndex is not of type number[]';
    }

    this.generateAndAddRowData(
      this.xyPosDataTable,
      numColumnXYPos,
      { 0: fixX - fixationWidth / 2, 1: fixY - fixationHeight / 2 }
    );
    this.generateAndAddRowData(
      this.xyPosDataTable,
      numColumnXYPos,
      { 0: fixX + fixationWidth / 2, 1: fixY - fixationHeight / 2}
    );
    this.generateAndAddRowData(
      this.xyPosDataTable,
      numColumnXYPos,
      { 0: fixX + fixationWidth / 2, 1: fixY + fixationHeight / 2}
    );
    this.generateAndAddRowData(
      this.xyPosDataTable,
      numColumnXYPos,
      { 0: fixX - fixationWidth / 2, 1: fixY + fixationHeight / 2}
    );
    this.generateAndAddRowData(
      this.xyPosDataTable,
      numColumnXYPos,
      { 0: fixX - fixationWidth / 2, 1: fixY - fixationHeight / 2}
    );

    // SAMPLE
    numDisplayElems = 2;
    let sampleX: number;
    let sampleY: number;
    let maxSampleGridIndex = _.max(data.SampleGridIndex);

    if (data.RewardStage > 0) {
      if (_.isNumber(maxSampleGridIndex)) {
        sampleX = data.XGridCenter[maxSampleGridIndex];
        sampleY = (
          data.ViewportPixels[1]
          - (data.YGridCenter[maxSampleGridIndex] + data.offsettop)
        );
      } else {
        throw 'data.SampleGridIndex is not of type number[]';
      }
    } else {
      sampleX = fixX;
      sampleY = fixY;
    }

    this.generateAndAddRowData(
      this.xyPosDataTable,
      numColumnXYPos,
      { 0: sampleX - sampleWidth, 2: sampleY - sampleHeight }
    );
    this.generateAndAddRowData(
      this.xyPosDataTable,
      numColumnXYPos,
      { 0: sampleX + sampleWidth, 2: sampleY - sampleHeight }
    );
    this.generateAndAddRowData(
      this.xyPosDataTable,
      numColumnXYPos,
      { 0: sampleX + sampleWidth, 2: sampleY + sampleHeight }
    );
    this.generateAndAddRowData(
      this.xyPosDataTable,
      numColumnXYPos,
      { 0: sampleX - sampleWidth, 2: sampleY + sampleHeight }
    );
    this.generateAndAddRowData(
      this.xyPosDataTable,
      numColumnXYPos,
      { 0: sampleX - sampleWidth, 2: sampleY - sampleHeight }
    );

    // TEST:
    let testX: number[] = [];
    let testY: number[] = [];

    if (data.RewardStage != 0) {
      for (let i = 0; i <= _.size(data.TestGridIndex); i++) {
        // If Same-Different, only show the first test
        if (data.SameDifferent > 0 || data.NRSVP > 0) {
          break;
        }

        numDisplayElems++;
        if (data.NRSVP > 0) {
          testX.push(data.XGridCenter[maxSampleGridIndex!]);
          testY.push(
            data.ViewportPixels[1]
            - (data.YGridCenter[maxSampleGridIndex!] + data.offsettop)
          );
        } else {
          testX.push(data.XGridCenter[data.TestGridIndex[i]]);
          testY.push(
            data.ViewportPixels[1]
            - (data.YGridCenter[data.TestGridIndex[i]] + data.offsettop)
          );
        }

        this.generateAndAddRowData(
          this.xyPosDataTable,
          numColumnXYPos,
          { 
            0: testX[i] - testWidth / 2,
            [numDisplayElems]: testY[i] - testHeight / 2
          }
        );
        this.generateAndAddRowData(
          this.xyPosDataTable,
          numColumnXYPos,
          { 
            0: testX[i] + testWidth / 2,
            [numDisplayElems]: testY[i] - testHeight / 2
          }
        );
        this.generateAndAddRowData(
          this.xyPosDataTable,
          numColumnXYPos,
          { 
            0: testX[i] + testWidth / 2,
            [numDisplayElems]: testY[i] + testHeight / 2
          }
        );
        this.generateAndAddRowData(
          this.xyPosDataTable,
          numColumnXYPos,
          { 
            0: testX[i] - testWidth / 2,
            [numDisplayElems]: testY[i] + testHeight / 2
          }
        );
        this.generateAndAddRowData(
          this.xyPosDataTable,
          numColumnXYPos,
          { 
            0: testX[i] - testWidth / 2,
            [numDisplayElems]: testY[i] - testHeight / 2
          }
        );
      } 
    }

    // CHOICE:
    let choiceX: number[] = [];
    let choiceY: number[] = [];

    if (data.RewardStage != 0 && data.SameDifferent > 0) {
      for (let i = 0; i < _.size(data.ChoiceGridIndex); i++) {
        numDisplayElems++;
        choiceX.push(data.XGridCenter[data.ChoiceGridIndex[i]]);
        choiceY.push(
          data.ViewportPixels[1]
          - (data.YGridCenter[data.ChoiceGridIndex[i]] + data.offsettop)
        );

        this.generateAndAddRowData(
          this.xyPosDataTable,
          numColumnXYPos,
          {
            0: choiceX[i] - choiceWidth / 2,
            [numDisplayElems]: choiceY[i] - choiceHeight / 2
          }
        );
        this.generateAndAddRowData(
          this.xyPosDataTable,
          numColumnXYPos,
          {
            0: choiceX[i] + choiceWidth / 2,
            [numDisplayElems]: choiceY[i] - choiceHeight / 2
          }
        );
        this.generateAndAddRowData(
          this.xyPosDataTable,
          numColumnXYPos,
          {
            0: choiceX[i] + choiceWidth / 2,
            [numDisplayElems]: choiceY[i] + choiceHeight / 2
          }
        );
        this.generateAndAddRowData(
          this.xyPosDataTable,
          numColumnXYPos,
          {
            0: choiceX[i] - choiceWidth / 2,
            [numDisplayElems]: choiceY[i] + choiceHeight / 2
          }
        );
        this.generateAndAddRowData(
          this.xyPosDataTable,
          numColumnXYPos,
          {
            0: choiceX[i] - choiceWidth / 2,
            [numDisplayElems]: choiceY[i] - choiceHeight / 2
          }
        );

      }
    }

    let fixXPos: number[] = [];
    let fixYPos: number[] = [];
    let testXPos: number[][] = [];
    let testYPos: number[][] = [];
    let numTarget = [0, 0];

    for (let i = 0; i < touchevent.length; i++) {
      xPos = touchevent[i][0];
      yPos = data.ViewportPixels[1] - touchevent[i][1];

      let yDataIndex: number;
      if (i % 2 == 0) {
        yDataIndex = i / 2;
      } else {
        yDataIndex = (i - 1) / 2;
      }

      if (xPos != -1) {
        let arr = new Array(numColumnXYPos);
        arr[0] = xPos;

        if (i % 2 == 0) {
          fixXPos.push(xPos);
          fixYPos.push(yPos);

          if (yData[yDataIndex] == 1) {
            arr[numDisplayElems + 1] = yPos;
            this.xyPosDataTable.addRows([arr]);
          } else {
            arr[numDisplayElems + 2] = yPos;
            this.xyPosDataTable.addRows([arr]);
          }
        } else {
          let testXPosArr: number[] = [];
          let testYPosArr: number[] = [];
          
          for (let j = 0; j < _.size(data.TestGridIndex); j++) {
            if (data.Response[yDataIndex] == j) {
              testXPosArr.push(xPos);
              testYPosArr.push(yPos);
              numTarget[j] += 1;
            } else {
              testXPosArr.push(0);
              testYPosArr.push(0);
            }

            testXPos.push(testXPosArr);
            testYPos.push(testYPosArr);

            if (yData[yDataIndex] == 1) {
              arr[numDisplayElems + 3] = yPos;
              this.xyPosDataTable.addRows([arr]);
            } else {
              arr[numDisplayElems + 4] = yPos;
              this.xyPosDataTable.addRows([arr]);
            }
          }
        }
      }

      let meanFixXPos = _.mean(fixXPos);
      let meanFixYPos = _.mean(fixYPos);

      
    }
  }

  private generateAndAddRowData(
    target: google.visualization.DataTable, 
    numColumns: number, 
    data: Record<number, number>
  ) {
    let arr = [];
    for (let i = 0; i < numColumns; i++) {
      if (_.has(data, i)) {
        arr.push(data[i]);
      } else {
        arr.push(null);
      }
    }
    target.addRows([arr]);
  }

  // TODO: deal with case where SampleScenes[0].OBJECTS[firstKey].sizeInches is an
  // Array of arrays -- i.e. scene movie
  private getSampleWidth(fileData: LiveplotDataType) {
    console.log('getSampleWidth');
    let sampleWidth = 0;
    if (_.size(fileData.SampleScenes[0].IMAGES.imageidx) > 0) {
      if (_.isArray(fileData.SampleScenes[0].IMAGES.sizeInches)) {
        let maxSizeInches = _.max(fileData.SampleScenes[0].IMAGES.sizeInches);
        if (_.isNumber(maxSizeInches)) {
          sampleWidth = maxSizeInches * fileData.ViewportPPI;
        }
      } else {
        console.error(
          'SampleScenes[0].IMAGES.sizeInches is not an array. Please fix!'
        );
        sampleWidth = (
          fileData.SampleScenes[0].IMAGES.sizeInches * fileData.ViewportPPI
        );
      }
    } else {
      let firstKey = _.findKey(fileData.SampleScenes[0].OBJECTS);
      if (_.isString(firstKey)) {
        let maxSizeInches = (
          _.max(fileData.SampleScenes[0].OBJECTS[firstKey].sizeInches)
        );
        if (_.isNumber(maxSizeInches)) {
          sampleWidth = maxSizeInches * fileData.ViewportPPI;
        } 
      } else {
        console.error(
          'firstKey of SampleScenes[0].OBJECTS is not of type string'
        );
      }  
    }
    return sampleWidth;
  }

  private getTestWidth(fileData: LiveplotDataType) {
    let testWidth = 0;

    if (fileData.TestScenes[0].IMAGES.imageidx.length > 0) {
      if (_.isArray(fileData.TestScenes[0].IMAGES.sizeInches)) {
        let maxSizeInches = _.max(fileData.TestScenes[0].IMAGES.sizeInches);
        if (_.isNumber(maxSizeInches)) {
          testWidth = maxSizeInches * fileData.ViewportPPI;
        } else {
          console.error(
            'TestScenes[0].IMAGES.sizeInches is not of type number'
          );
        }
      } else {
        console.error(
          'TestScenes[0].IMAGES.sizeInches is not an array. Please fix!'
        );
        testWidth = (
          fileData.TestScenes[0].IMAGES.sizeInches * fileData.ViewportPPI
        );
      }
    } else {
      let firstKey = _.findKey(fileData.TestScenes[0].OBJECTS);
      if (_.isString(firstKey)) {
        let maxSizeInches = (
          _.max(fileData.TestScenes[0].OBJECTS[firstKey].sizeInches)
        );
        if (_.isNumber(maxSizeInches)) {
          testWidth = maxSizeInches * fileData.ViewportPPI;
        } else {
          console.error(
            'firstKey of TestScenes[0].OBJECTS is not of type string'
          );
        }
      }
    }

    if (!_.isUndefined(fileData.NRSVP) && fileData.NRSVP > 0) {
      testWidth = fileData.SampleFixationSizeInches * fileData.ViewportPPI;
    }

    return testWidth;
  }

  private getFixationWidth(fileData: LiveplotDataType, sampleWidth: number) {
    let fixationWidth = 0;

    if (fileData.FixationUsesSample <= 0) {
      fixationWidth = fileData.FixationSizeInches * fileData.ViewportPPI;
    } else {
      fixationWidth = sampleWidth;
    }
    return fixationWidth;
  }

  private getChoiceWidth(fileData: LiveplotDataType) {
    let choiceWidth = 0;
    if (
      !_.isUndefined(fileData.SameDifferent)
      && fileData.SameDifferent > 0
    ) {
      choiceWidth = fileData.ChoiceSizeInches * fileData.ViewportPPI;
    }
    return choiceWidth;
  }

  private loadObjPerfData(data: LiveplotDataType) {
    this.objPerfDataTable.removeRows(
      0, this.objPerfDataTable.getNumberOfRows()
    );
  
    let lenSampleObj: number;
    if (data.RewardStage == 1) {
      let sampleObj = [];
      if (data.NTrialsPerBagBlock > 5000) {
        sampleObj.push(data.ImageBagsSample[0].split('/')[5]);
        this.objPerfDataTable.addRow([sampleObj[0], 0]);
        lenSampleObj = 1;
      } else {
        for (let i = 0; i < _.size(data.ImageBagsSample); i++) {
          sampleObj.push(data.ImageBagsSample[i].split('/')[5]);
          this.objPerfDataTable.addRow([sampleObj[i], 0]);
        }
        lenSampleObj = _.size(sampleObj);
      }

      let NDiffObjPerf = _.fill(Array(lenSampleObj), 0);
      let NDiffObj = _.fill(Array(lenSampleObj), 0);
      for (let i = 0; i < _.size(data.Sample[0]); i++) { // For i trials
        for (let j = 0; j < lenSampleObj; j++) {
          // If sample was that object
          if (data.SampleBagIdx[data.Sample[0][i]] == j) {
            NDiffObj[j] += 1;
            // If correct
            if (data.Response[i] == data.CorrectItem[i]) {
              NDiffObjPerf[j] += 1;
            }
          }
          this.objPerfDataTable.setValue(j, 1, NDiffObjPerf[j] / NDiffObj[j]);
        }
      }
    }
  }

  private loadChoiceData(data: LiveplotDataType) {
    this.choiceDataTable.removeRows(0, this.choiceDataTable.getNumberOfRows());
    
    if (data.RewardStage != 0) {
      let possibleResp = _.fill(Array(_.size(data.ObjectGridIndex)), 0);
      
      if (
        _.size(data.ObjectGridIndex) != 0
        && (_.isUndefined(data.NTrialsPerBagBlock) || data.NTrialsPerBagBlock < 1000)
      ) {
        
      }
    }
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