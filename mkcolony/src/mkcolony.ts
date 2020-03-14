import * as firebase from 'firebase/app';
import 'firebase/firestore';


type divElem = HTMLDivElement;
type Timestamp = firebase.firestore.Timestamp;
export class Mkcolony {
  public clTableDiv: divElem;
  public clWtPlotDiv: divElem;
  public clFlPlotDiv: divElem;
  public marmosetData: any[];
  private selectedAgentData: any;

  private clTable: Tabulator;

  constructor(tableDiv: divElem, weightDiv: divElem, fluidDiv: divElem) {
    google.charts.load('current', {packages: ['corechart']});

    this.clTableDiv = tableDiv;
    this.clWtPlotDiv = weightDiv;
    this.clFlPlotDiv = fluidDiv;
    this.clTable = new Tabulator(this.clTableDiv);
  }

  public populateTable(data: any[]) {
    data = this.timestampToDate(data);
    this.marmosetData = this.processData(data);

    this.clTable.destroy();
    let clTableCard 
      = document.querySelector('#colony-table-card') as HTMLDivElement;
    let colonyTab 
      = document.querySelector('#colony-tab') as HTMLElement;
    let agentTab
      = document.querySelector('#agent-tab') as HTMLElement;
    let colonyTabBar
      = document.querySelector('#colony-tab-bar') as HTMLElement;
    let agentTabBar
      = document.querySelector('#agent-tab-bar') as HTMLElement;
    
    clTableCard.style.maxHeight = String(colonyTab.clientHeight / 3) + 'px';
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

  public reorganizeData(data: any[]) {
    let chartData: any[][];
    let dt: google.visualization.DataTable[] = [];
    chartData = [];
    let i = 0;

    data.forEach(agentRow => {
      if (agentRow.hasOwnProperty('weight_dates')) {
        chartData[i] = [];
        chartData[i].push(['date', agentRow.name]);
        for (let j = 0; j < agentRow.weight_dates.length; j++) {
          chartData[i].push(
            [new Date(agentRow.weight_dates[j]), agentRow.weight_values[j]]
          );
        }
        i++;
      }
    });
    console.log(chartData);

    chartData.forEach(chartCol => {
      console.log(chartCol);
      let dtTemp = google.visualization.arrayToDataTable(chartCol, false);
      dt.push(dtTemp);
    });
    console.log(dt);

    let dt_final = dt[0];
    for (let i = 1; i < dt.length; i++) {
      dt_final = google.visualization.data.join(dt_final, dt[i], 'full', [[0, 0]], [1], [1]);
    }

    console.log(dt_final);
  }

}

// export class MkcolonyChart {
//   public clWtPlotDiv: divElem;
//   constructor() {
//     google.charts.load('current', {packages: ['corechart']});
//     this.clWtPlotDiv 
//       = document.querySelector('#colony-weight-plot') as HTMLDivElement;
    
//   }

//   public plotColonyWeights(data: any[]) {
//     let chartData = new google.visualization.DataTable();
//     chartData.addColumn('datetime', 'Date');
//     chartData.addColumn('number', 'Weight (g)')
//   }


// }