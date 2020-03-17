import * as firebase from 'firebase/app';
import 'firebase/firestore';


type div = HTMLDivElement;
type Timestamp = firebase.firestore.Timestamp;
export class Mkcolony {
  // public clTableDiv: divElem;
  // public clWtPlotDiv: divElem;
  // public clFlPlotDiv: divElem;
  // public marmosetData: any[];
  // private selectedAgentData: any;
  // private clWtCard: divElem;

  // private clTable: Tabulator;

  // constructor(tableDiv: divElem, weightDiv: divElem, fluidDiv: divElem) {
  //   google.charts.load('current', {packages: ['corechart']});

  //   this.clTableDiv = tableDiv;
  //   this.clWtPlotDiv = weightDiv;
  //   this.clFlPlotDiv = fluidDiv;
  //   this.clTable = new Tabulator(this.clTableDiv);
  //   this.clWtCard = document.querySelector('#colony-weight-card') as divElem;
  //   let colonyTab
  //     = document.querySelector('#colony-tab') as HTMLElement;
  //   this.clWtPlotDiv.style.height = String(colonyTab.clientHeight / 3) + 'px';

  // }

  public clTableDiv: div;
  public clWtCard: div;
  public clWtPlotDiv: div;
  public clWtDateFilterDiv: div;
  public clFlPlotDiv: div;
  public clFlDateFilterDiv: div;
  public marmosetData: any[];

  private clTable: Tabulator;

  constructor() {
    google.charts.load('current', {packages: ['corechart', 'controls']});

    this.clTableDiv = document.querySelector('#colony-table') as div;
    this.clWtCard = document.querySelector('#colony-weight-card') as div;
    this.clWtPlotDiv = document.querySelector('#colony-weight-plot') as div;
    this.clWtDateFilterDiv
      = document.querySelector('#colony-weight-date-filter') as div;
    this.clFlPlotDiv = document.querySelector('#colony-fluid-plot') as div;
    this.clFlDateFilterDiv
      = document.querySelector('#colony-fluid-date-filter') as div;
  }


  public populateTable(data: any[]) {
    this.marmosetData = this.processData(data);

    let clTableCard 
      = document.querySelector('#colony-table-card') as div;
    let colonyTab 
      = document.querySelector('#colony-tab') as HTMLElement;
    let agentTab
      = document.querySelector('#agent-tab') as HTMLElement;
    let colonyTabBar
      = document.querySelector('#colony-tab-bar') as HTMLElement;
    let agentTabBar
      = document.querySelector('#agent-tab-bar') as HTMLElement;

    let grid
      = document.querySelector('#colony-weight-grid') as div;
    grid.style.minHeight = String(colonyTab.clientHeight / 3) + 'px';

    clTableCard.style.maxHeight = String(colonyTab.clientHeight / 3) + 'px';
    clTableCard.style.height = '500 px';
    clTableCard.style.minHeight = String(colonyTab.clientHeight / 3) + 'px';
    console.log(clTableCard.clientHeight);

    this.clTable = new Tabulator(this.clTableDiv, {
      data: data,
      index: 'name',
      layout: 'fitColumns',
      initialSort: [
        { column: 'name', dir: 'asc' }
      ],
      columns: [
        {title: 'Name', field: 'name'},
        {title: 'Sex', field: 'sex'},
        {title: 'DOB', field: 'birthdate'},
        {title: 'Breeding', field: 'breeding'},
        {title: 'Cage Mate', field: 'grouphoused_values'},
        {title: 'Last Weighed Date', field: 'last_weight_date'},
        {title: 'Last Weight', field: 'last_weight_value'},
      ],
      rowDblClick: (ev: Event, row) => {
        ev.stopPropagation();
        agentTab.classList.add('is-active');
        colonyTab.classList.remove('is-active');
        agentTabBar.classList.add('is-active');
        colonyTabBar.classList.remove('is-active');
        //this.getSelectedAgentData(data, row.getData().name);
      }
    })
  }

  private timestampToDate(data: any[]) {
    function tsArrToDate(elem: Timestamp, idx: number, arr: any[]) {
      try {
        arr[idx] = elem.toDate().toJSON().split('T')[0];
      } catch {

      }
    }

    function isDict(val: any) {
      return val && typeof val === 'object' && val.constructor === Object; 
    }

    function isString(val: any) {
      return typeof val === 'string' || val.constructor === String;
    }

    function isNumber(val: any) {
      return typeof val === 'number' && isFinite(val);
    }

    data.forEach(row => {
      for (let key of Object.keys(row)) {
        if (Array.isArray(row[key])) {
          row[key].forEach(tsArrToDate);
        }

        else if (isDict(row[key])) {
          try {
            row[key] = row[key].toDate().toJSON().split('T')[0];
            continue;
          } catch {

          }

          for (let key2 of Object.keys(row[key])) {
            try {
              row[key][key2] = row[key][key2].toDate().toJSON().split('T')[0];
            } catch {
              // console.log('Not timestamp object');
            }
          }
        }

        else if (!isString(row[key]) && !isNumber(row[key])) {
          try {
            row[key] = row[key].toDate().toJSON().split('T')[0];
          } catch {
            // console.log('Not timestamp object');
          }
        }
      }
    });

    return data;
  }

  public async loadData(query: firebase.firestore.Query) {
    function _loadData(doc: any, arr: any[]) {
      arr.push(doc.data());  
    }

    let data = new Array();
    await query.get().then(async querySnapshot => {
      if (!querySnapshot.empty) {
        let promises = querySnapshot.docs.map(doc => _loadData(doc, data));
        await Promise.all(promises);
      } else {
        console.log('Found No Documents');
      }
    }).catch(e => {
      console.error('Error loading documents:', e);
    });

    return data;
  }

  public processData(data: any[]) {
    data = this.timestampToDate(data);
    data.forEach(row => {
      for (let key of Object.keys(row)) {
        if (key == 'albumin_dates') {
          row['recent_albumin_date'] = row['albumin_dates'].slice(-1)[0]; 
        } else if (key == 'albumin_values') {
          row['recent_albumin_value'] = row['albumin_values'].slice(-1)[0];
        } else if (key == 'weight_dates') {
          row['last_weight_date'] = row['weight_dates'].slice(-1)[0];
        } else if (key == 'weight_values') {
          row['last_weight_value'] = row['weight_values'].slice(-1)[0];
        }
      }
    });

    return data;
  }

  private getSelectedAgentData(data: any[], agent: string) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === agent) {
        return data[i];
      }
    }
  }

  private populateAgentTab(data: any[], agent: string) {
    let agentData = this.getSelectedAgentData(data, agent);
    
  }

  public plotColonyData(data: any[]) {
    console.log(this.marmosetData);
    const clWtDataTable = this.clWtDataToDataTable(this.marmosetData);
    console.log(clWtDataTable);
    let clWtDashboard = new google.visualization.Dashboard(this.clWtCard);

    let plot = document.querySelector('#colony-weight-plot') as div;

    console.log(clWtDataTable.getColumnRange(0));




    const clWtPlotConfig = {
      'chartType': 'LineChart',
      'containerId': 'colony-weight-plot',
      'options': {
        interpolateNulls: true,
        title: 'Colony Weight Plot',
        width: plot.clientWidth,
        height: plot.offsetHeight,
        chartArea: {
          width: '80%',
          height: '80%'
        },
        pointSize: 5
      }
    };

    const clWtFilterOptions = {
      filterColumnLabel: 'date',
      ui: {
        chartType: 'LineChart'
      },
      
    };

    const clWtFilterConfig = {
      'controlType': 'ChartRangeFilter',
      'containerId': 'colony-weight-date-filter',
      'options': clWtFilterOptions,
      'state': {
        'range': {
          'start': clWtDataTable.getColumnRange(0).min,
          'end': clWtDataTable.getColumnRange(0).max
        }
      }
    };

    let clWtPlot = new google.visualization.ChartWrapper(clWtPlotConfig);
    let clWtFilter = new google.visualization.ControlWrapper(clWtFilterConfig);

    clWtDashboard.bind(clWtFilter, clWtPlot);
    clWtDashboard.draw(clWtDataTable);
    
    // let clWtPlot = new google.visualization.ChartWrapper();
    // const clWtFilterOptions = {
    //   filterColumnLabel: 'date',
    //   ui: {
    //     chartType: 'LineChart',
    //     chartOptions: 
    //   }
    // }
    // const clWtFilterConfig = {
    //   'controlType': 'ChartRangeFilter',
    //   'containerId': 'colony-weight-date-filter',
    //   'options': 
    // };
    // let clWtFilter = new google.visualization.ControlWrapper
    


  }

  private clWtDataToDataTable(data: any[]) {
    let chartData: any[][] = [];
    let dtArr: google.visualization.DataTable[] = [];
    let i = 0;

    data.forEach(agentRow => {
      if (agentRow.hasOwnProperty('weight_dates')) {
        chartData[i] = [['date', agentRow.name]];
        for (let j = 0; j < agentRow.weight_dates.length; j++) {
          chartData[i].push(
            [new Date(agentRow.weight_dates[j]), agentRow.weight_values[j]]
          );
        }
        i++;
      }
    });

    chartData.forEach(chartCol => {
      let temp = google.visualization.arrayToDataTable(chartCol, false);
      dtArr.push(temp);
    });

    let dt = google.visualization.data.join(dtArr[0],dtArr[1], 'full', 
      [[0,0]], [1], [1]);
    for (let i = 2; i < dtArr.length; i++) {
      let colIdx = [...Array(i+1).keys()];
      colIdx.shift();
      dt = google.visualization.data.join(dt, dtArr[i], 'full', [[0, 0]],
        colIdx, [1]);
    }

    return dt;
  }

  // public reorganizeData(data: any[]) {
  //   let chartData: any[][];
  //   let dt: google.visualization.DataTable[] = [];
  //   chartData = [];
  //   let i = 0;

  //   data.forEach(agentRow => {
  //     if (agentRow.hasOwnProperty('weight_dates')) {
  //       chartData[i] = [];
  //       chartData[i].push(['date', agentRow.name]);
  //       for (let j = 0; j < agentRow.weight_dates.length; j++) {
  //         chartData[i].push(
  //           [new Date(agentRow.weight_dates[j]), agentRow.weight_values[j]]
  //         );
  //       }
  //       i++;
  //     }
  //   });

  //   chartData.forEach(chartCol => {
  //     console.log(chartCol);
  //     let dtTemp = google.visualization.arrayToDataTable(chartCol, false);
  //     dt.push(dtTemp);
  //   });

  //   let dt_final = google.visualization.data.join(dt[0], dt[1], 'full', [[0,0]], [1], [1]);
  //   for (let i=2; i < dt.length; i++) {
  //     let colArr = [...Array(i+1).keys()];
  //     colArr.shift();
  //     dt_final = google.visualization.data.join(dt_final, dt[i], 'full', [[0, 0]], colArr, [1]);
  //   }

  //   console.log(dt_final.toJSON());

  //   let chart = new google.visualization.LineChart(this.clWtPlotDiv);
  //   // let chart = new google.charts.Line(this.clWtPlotDiv);
  //   let options = {
  //     interpolateNulls: true,
  //     title: 'Weight Plot',
  //     width: this.clWtCard.clientWidth,
  //     height: this.clWtPlotDiv.clientHeight,
  //     chartArea: {
  //       width: '80%',
  //       height: '80%'
  //     },
  //     // legend: 'none' as 'none',
  //     pointSize: 5
  //   };

  //   chart.draw(dt_final, options);
  // }

}