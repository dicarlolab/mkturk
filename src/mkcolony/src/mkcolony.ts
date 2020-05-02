import * as firebase from 'firebase/app';
import 'firebase/firestore';
import JSONEditor from 'jsoneditor';

type div = HTMLDivElement;
type Timestamp = firebase.firestore.Timestamp;
const db = firebase.firestore();

export class Mkcolony {

  public clTableDiv: div;
  public clWtCard: div;
  public clWtPlotDiv: div;
  public clWtDateFilterDiv: div;
  public clFlPlotDiv: div;
  public clFlDateFilterDiv: div;
  
  public agBioCard: div;
  public agBioDiv: div;
  public agWtCard: div;
  public agWtPlotDiv: div;
  public agFlCard: div;
  public agFlPlotDiv: div;
  private agJsonCard: div;
  private agJsonDiv: div;
  private agJson: JSONEditor;
  
  public marmosetData: any[];
  public marmosetDataDic: any;

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

    this.agBioCard = document.querySelector('#agent-bio-card') as div;
    this.agBioDiv = document.querySelector('#agent-bio') as div;
    this.agWtCard = document.querySelector('#agent-weight-card') as div;

    this.agJsonCard = document.querySelector('#agent-json-card') as div;
    this.agJsonDiv = document.querySelector('#agent-json') as div;
  }

  public deleteAll() {
    this.clTable.clearData();
  }

  public populateTable(data: any[]) {
    this.marmosetDataDic = {};
    this.marmosetData = this.processData(data);

    // console.log('data', this.marmosetData);

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
    grid.style.minHeight = String(colonyTab.clientHeight / 2) + 'px';

    clTableCard.style.maxHeight = String(colonyTab.clientHeight / 2) + 'px';
    clTableCard.style.minHeight = String(colonyTab.clientHeight / 2) + 'px';

    this.clTable = new Tabulator(this.clTableDiv, {
      data: this.marmosetData,
      index: 'name',
      layout: 'fitColumns',
      initialSort: [
        { column: 'name', dir: 'asc' }
      ],
      columns: [
        {title: 'Name', field: 'name'},
        {title: 'Age', field: 'ageStr'},
        {title: 'Sex', field: 'sex'},
        {title: 'DOB', field: 'birthdate'},
        {title: 'CWA', field: 'cwa'},
        {title: 'Breeding', field: 'breeding'},
        {title: 'Cage Mate', field: 'grouphoused_values'},
        {title: 'Last Weighed Date', field: 'last_weight_date', formatter:function(cell: any){
          let weighedDate = new Date(cell.getValue()).getTime();
          let today = new Date().getTime();
          let diff = Math.round((today-weighedDate) / (1000 * 60 * 60 * 24));

          if (cell.getData().cwa == 1) {
            if (diff >= 21) {
              cell.getElement().style.backgroundColor = 'Red';
            } else if (diff >= 7) {
              cell.getElement().style.backgroundColor = 'Yellow';
            }
          } else if (cell.getData().cwa == 0) {
            if (diff >= 21) {
              cell.getElement().style.backgroundColor = 'Red';
            } else if (diff >= 14) {
              cell.getElement().style.backgroundColor = 'Yellow';
            }
          }
          
          return cell.getValue();
        }},
        {title: 'Last Weight', field: 'last_weight_value'},
      ],
      rowDblClick: (ev: Event, row) => {
        ev.stopPropagation();
        agentTab.classList.add('is-active');
        colonyTab.classList.remove('is-active');
        agentTabBar.classList.add('is-active');
        colonyTabBar.classList.remove('is-active');
        this.populateAgentTab(row.getData().name)
      },
      rowDblTap: (ev: Event, row) => {
        ev.stopPropagation();
        agentTab.classList.add('is-active');
        colonyTab.classList.remove('is-active');
        agentTabBar.classList.add('is-active');
        colonyTabBar.classList.remove('is-active');
        this.populateAgentTab(row.getData().name)
      }
    })
  }

  private populateAgentTab(agentName: string) {
    console.log('marmoDataDic', this.marmosetDataDic);
    let agentData = this.marmosetDataDic[agentName];
    console.log(agentData);
    this.populateAgentBio(agentData);
    this.plotAgentWeight(agentData);
    let ret = this.loadAndProcessFlData(agentName);
    ret.then(docs => {
      this.plotAgentFluid(docs);
    });
  }

  private plotAgentFluid(data: {k: string, v: number}) {
    const agFlDt = new google.visualization.DataTable();
    let agFlDashboard = new google.visualization.Dashboard(this.agFlCard);
    agFlDt.addColumn('date', 'Date');
    agFlDt.addColumn('number', 'Fluid Intake');

    for (let [key, value] of Object.entries(data)) {
      let flLvl = Number(value) * 9.0 / 1000.0;
      agFlDt.addRow([new Date(key), flLvl]);
    }

    let dateFormatter = new google.visualization.DateFormat({timeZone: 0});
    dateFormatter.format(agFlDt, 0);
    let plot = document.querySelector('#agent-fluid-plot') as div;
    let filter = document.querySelector('#agent-fluid-filter') as div;

    plot.style.height = '80%';
    filter.style.height = '20%';

    const agFlPlotConfig = {
      'chartType': 'LineChart',
      'containerId': 'agent-fluid-plot',
      'options': {
        interpolateNulls: true,
        title: 'Fluid Plot',
        width: plot.clientWidth,
        height: plot.clientHeight,
        legend: 'none' as 'none',
        pointSize: 5,
        vAxis: {
          minValue: 0,
          maxValue: 50
        }
      }
    };

    const agFlFilterOptions = {
      filterColumnLabel: 'Date',
      ui: {
        chartType: 'LineChart',
        chartOptions: {
          interpolateNulls: true
        }
      }
    };

    let endDate = agFlDt.getColumnRange(0).max;
    let startDate = new Date(endDate);
    startDate.setMonth(startDate.getMonth() - 1);

    const agFlFilterConfig = {
      'controlType': 'ChartRangeFilter',
      'containerId': 'agent-fluid-filter',
      'options': agFlFilterOptions,
      'state': {
        'range': {
          'start': startDate,
          'end': endDate
        }
      }
    };

    let agFlPlot = new google.visualization.ChartWrapper(agFlPlotConfig);
    let agFlFilter = new google.visualization.ControlWrapper(agFlFilterConfig);

    agFlDashboard.bind(agFlFilter, agFlPlot);
    agFlDashboard.draw(agFlDt);
  }

  private async loadAndProcessFlData(agentName: string) {
    function _loadFlData(doc: any, data: any) {
      if (doc.data().hasOwnProperty('NReward')) {
        let totalReward
          = doc.data().NReward.reduce((a: number, b: number) => {
            if (isNaN(b)) {
              b = 0;
            }

            return a + b;
          }, 0);
        let curDate = doc.data().CurrentDate.toDate().toJSON().split('T')[0];
        if (data.hasOwnProperty(curDate)) {
          data[curDate] = data[curDate] + totalReward;
        } else {
          data[curDate] = totalReward;
        }
      }
    }
    
    let data: any = {};
    let endDate = new Date(); // hard-coded because of issues with firestore as of 03/23/2020
    let startDate = new Date(endDate).setMonth(endDate.getMonth() - 1);
    
    let query 
      = db.collection('mkturkdata')
      .where('Agent', '==', agentName)
      .where('Doctype', '==', 'task')
      .where('CurrentDate', '>=', new Date(startDate))
      .where('CurrentDate', '<=', new Date(endDate));

    await query.get().then(async snapshot => {
      if (!snapshot.empty) {
        let promises = snapshot.docs.map(doc => _loadFlData(doc, data));
        await Promise.all(promises);
      } else {
        console.error('Found no documents');
      }
    }).catch(e => {
      console.error('Error loading documents:', e);
    });

    return data;
  }

  private populateAgentBio(data: any) {

    this.agBioDiv.querySelectorAll('*').forEach(childNode => {
      childNode.remove();
    });

    let nameSpan = document.createElement('span');
    let nameVal = document.createElement('span');

    let dobSpan = document.createElement('span');
    let dobVal = document.createElement('span');

    let ageSpan = document.createElement('span');
    let ageVal = document.createElement('span');

    let sexSpan = document.createElement('span');
    let sexVal = document.createElement('span');

    let fatherSpan = document.createElement('span');
    let fatherVal = document.createElement('span');

    let motherSpan = document.createElement('span');
    let motherVal = document.createElement('span');

    let breedingSpan = document.createElement('span');
    let breedingVal = document.createElement('span');

    let rfidSpan = document.createElement('span');
    let rfidVal = document.createElement('span');

    let albuminSpan = document.createElement('span');
    let albuminVal = document.createElement('span');

    let weightSpan = document.createElement('span');
    let weightVal = document.createElement('span');

    let cwaSpan = document.createElement('span');
    let cwaVal = document.createElement('span');

    nameSpan.textContent = 'Name:';
    nameSpan.style.textAlign = 'center';
    nameVal.textContent = data.name;

    dobSpan.textContent = 'DOB:';
    dobSpan.style.textAlign = 'center';
    dobVal.textContent = data.birthdate;

    ageSpan.textContent = 'Age:';
    ageSpan.style.textAlign = 'center';
    ageVal.textContent = data.ageStr;

    sexSpan.textContent = 'Sex:';
    sexSpan.style.textAlign = 'center';
    sexVal.textContent = data.sex;

    fatherSpan.textContent = 'Father:';
    fatherSpan.style.textAlign = 'center';
    fatherVal.textContent = data.father;

    motherSpan.textContent = 'Mother:';
    motherSpan.style.textAlign = 'center';
    motherVal.textContent = data.mother;

    breedingSpan.textContent = 'Breeding:';
    breedingSpan.style.textAlign = 'center';
    breedingVal.textContent = data.breeding;

    rfidSpan.textContent = 'RFID:';
    rfidSpan.style.textAlign = 'center';
    rfidVal.textContent = data.rfid;
    
    albuminSpan.textContent = 'Recent Albumin';
    albuminSpan.style.textAlign = 'center';
    albuminVal.textContent
      = data.recent_albumin_value + ', ' + data.recent_albumin_date;

    weightSpan.textContent = 'Recent Weight:';
    weightSpan.style.textAlign = 'center';
    weightVal.textContent 
      = data.last_weight_value + ' g, ' + data.last_weight_date;

    cwaSpan.textContent = 'CWA:';
    cwaSpan.style.textAlign = 'center';
    cwaVal.textContent = data.cwa;

    this.agBioDiv.appendChild(nameSpan);
    this.agBioDiv.appendChild(nameVal);
    this.agBioDiv.appendChild(breedingSpan);
    this.agBioDiv.appendChild(breedingVal);
    this.agBioDiv.appendChild(cwaSpan);
    this.agBioDiv.appendChild(cwaVal);
    this.agBioDiv.appendChild(dobSpan);
    this.agBioDiv.appendChild(dobVal);
    this.agBioDiv.appendChild(fatherSpan);
    this.agBioDiv.appendChild(fatherVal);
    this.agBioDiv.appendChild(albuminSpan);
    this.agBioDiv.appendChild(albuminVal);
    this.agBioDiv.appendChild(ageSpan);
    this.agBioDiv.appendChild(ageVal);
    this.agBioDiv.appendChild(motherSpan);
    this.agBioDiv.appendChild(motherVal);
    this.agBioDiv.appendChild(weightSpan);
    this.agBioDiv.appendChild(weightVal);
    this.agBioDiv.appendChild(sexSpan);
    this.agBioDiv.appendChild(sexVal);
    this.agBioDiv.appendChild(rfidSpan);
    this.agBioDiv.appendChild(rfidVal);

    try {
      this.agJson.destroy();
      let options = {
        modes: ['code' as 'code', 'tree' as 'tree']
      }
      this.agJson = new JSONEditor(this.agJsonDiv, options, data);
    } catch {
      let options = {
        modes: ['code' as 'code', 'tree' as 'tree']
      }
      this.agJson = new JSONEditor(this.agJsonDiv, options, data);
    }

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

  public async loadWtData(query: firebase.firestore.Query) {
    function _loadWtData(doc: any, arr: any[]) {
      arr.push(doc.data());  
    }

    let data = new Array();
    await query.get().then(async querySnapshot => {
      if (!querySnapshot.empty) {
        let promises = querySnapshot.docs.map(doc => _loadWtData(doc, data));
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

    const _processData = (row: any, idx: number, arr: Array<any>) => {
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

      if ('dateofdeath' in row) {
        arr.splice(idx, 1);
        return;
      }

      try {
        
        let today = new Date();
        let dob = new Date(row.birthdate);
        let yearsDiff = today.getFullYear() - dob.getFullYear();

        if (yearsDiff > 2) {
          let ageStr = String(yearsDiff) + ' yo';
          row.age = yearsDiff;
          row.ageStr = ageStr;
        } else {
          let monthsDiff = (yearsDiff * 12) + (today.getMonth() - dob.getMonth());
          let ageStr = String(monthsDiff) + ' mo';
          row.age = monthsDiff;
          row.ageStr = ageStr;
        }

        this.marmosetDataDic[row.name] = row;

      } catch (e) {

      }
    }

    data.forEach(_processData);
    return data;
  }

  private plotAgentWeight(data: any) {
    const agWtDt = new google.visualization.DataTable();
    let agWtDashboard = new google.visualization.Dashboard(this.agWtCard);
    agWtDt.addColumn('date', 'Date');
    agWtDt.addColumn('number', 'Weight');

    for (let i = 0; i < data.weight_dates.length; i++) {
      agWtDt.addRow([new Date(data.weight_dates[i]), data.weight_values[i]]);
    }

    let plot = document.querySelector('#agent-weight-plot') as div;
    let filter = document.querySelector('#agent-weight-filter') as div;

    plot.style.height = '80%';
    filter.style.height = '20%';


    let plotOptions: any = {
      interpolateNulls: true,
      title: 'Weight Plot',
      width: plot.clientWidth,
      height: plot.offsetHeight,
      legend: 'none' as 'none',
      pointSize: 5,
    };

    if (data.ageStr.split(' ')[1] == 'mo' && data.ageStr.split(' ')[0] <= 15) {
      plotOptions.vAxis = {
        minValue: 0,
        maxValue: 350
      };

      plotOptions.vAxis.ticks = [
        0, 150, 250, 350
      ];

    } else {
      plotOptions.vAxis = {
        minValue: 250,
        maxValue: 500
      };

      plotOptions.vAxis.ticks = [
        250, 300, 400, 500 
      ];
    }


    const agWtPlotConfig = {
      'chartType': 'LineChart',
      'containerId': 'agent-weight-plot',
      'options': plotOptions
    };

    const agWtFilterOptions = {
      filterColumnLabel: 'Date',
      ui: {
        chartType: 'LineChart',
        chartOptions: {
          interpolateNulls: true,
        }
      },
    };


    let endDate = agWtDt.getColumnRange(0).max;
    let startDate = new Date(endDate);
    startDate.setMonth(startDate.getMonth() - 1);

    const agWtFilterConfig = {
      'controlType': 'ChartRangeFilter',
      'containerId': 'agent-weight-filter',
      'options': agWtFilterOptions,
      'state': {
        'range': {
          'start': startDate,
          'end': endDate
        }
      }
    };

    let agWtPlot = new google.visualization.ChartWrapper(agWtPlotConfig);
    let agWtFilter = new google.visualization.ControlWrapper(agWtFilterConfig);

    agWtDashboard.bind(agWtFilter, agWtPlot);
    agWtDashboard.draw(agWtDt);

  }

  private plotColonyWeight() {
    const clWtDataTable = this.clWtDataToDataTable(this.marmosetData);
    let clWtDashboard = new google.visualization.Dashboard(this.clWtCard);

    let plot = document.querySelector('#colony-weight-plot') as div;
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
        vAxis: {
          ridlines: {
            color: 'transparent'
          },
          baselineColor: 'transparent'
        },
        pointSize: 5
      }
    };

    const clWtFilterOptions = {
      filterColumnLabel: 'date',
      ui: {
        chartType: 'LineChart',
        chartOptions: {
          interpolateNulls: true,
        }
      },
      
    };
    
    let endRange = clWtDataTable.getColumnRange(0).max;
    let startRange = new Date(endRange);
    startRange.setMonth(startRange.getMonth() - 1);

    const clWtFilterConfig = {
      'controlType': 'ChartRangeFilter',
      'containerId': 'colony-weight-date-filter',
      'options': clWtFilterOptions,
      'state': {
        'range': {
          'start': startRange,
          'end': endRange
        }
      }
    };

    let clWtPlot = new google.visualization.ChartWrapper(clWtPlotConfig);
    let clWtFilter = new google.visualization.ControlWrapper(clWtFilterConfig);

    clWtDashboard.bind(clWtFilter, clWtPlot);
    clWtDashboard.draw(clWtDataTable);
  }

  public plotColonyData() {
    this.plotColonyWeight();
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

}