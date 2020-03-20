import * as firebase from 'firebase/app';
import 'firebase/firestore';

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
  }

  public populateTable(data: any[]) {
    this.marmosetData = this.processData(data);
    this.marmosetDataDic = {};

    this.marmosetData.forEach(agent => {
      try {
        this.marmosetDataDic[agent.name] = agent;
      } catch (e) {

      }
    });

    console.log('dic', this.marmosetDataDic);

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
    let agentData = this.marmosetDataDic[agentName];
    this.populateAgentBio(agentData);
    this.plotAgentWeight(agentData);
    this.processFluidData(agentName);
  }

  private plotAgentFluid(data: any) {

  }

  public processFluidData(agentName: string) {
    let endDate = new Date();
    let startDate = new Date(endDate).setMonth(endDate.getMonth() - 1);
    console.log('endDate', endDate);
    console.log('startDate', startDate);
    let query 
      = db.collection('mkturkdata')
      .where('Agent', '==', agentName)
      .where('Doctype', '==', 'task')
      .where('CurrentDate', '>=', new Date(startDate))
      .where('CurrentDate', '<=', new Date(endDate));
    
    let data = new Array();
    console.log('query', query);
    query.get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log('doc', doc.data());
      });
    }).catch(error => {
      console.log(error);
    });
  
  }

  private populateAgentBio(data: any) {

    this.agBioDiv.querySelectorAll('*').forEach(childNode => {
      childNode.remove();
    });

    let nameSpan = document.createElement('span');
    let nameVal = document.createElement('span');

    let dobSpan = document.createElement('span');
    let dobVal = document.createElement('span');

    let colonySpan = document.createElement('span');
    let colonyVal = document.createElement('span');

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

    let albuminDateSpan = document.createElement('span');
    let albuminDateVal = document.createElement('span');

    let albuminSpan = document.createElement('span');
    let albuminVal = document.createElement('span');
    
    let weightDateSpan = document.createElement('span');
    let weightDateVal = document.createElement('span');

    let weightSpan = document.createElement('span');
    let weightVal = document.createElement('span');

    nameSpan.textContent = 'Name:';
    nameSpan.style.textAlign = 'center';
    nameVal.textContent = data.name;

    dobSpan.textContent = 'DOB:';
    dobSpan.style.textAlign = 'center';
    dobVal.textContent = data.birthdate;

    colonySpan.textContent = 'Colony:';
    colonySpan.style.textAlign = 'center';
    colonyVal.textContent = data.colony;

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
    
    albuminDateSpan.textContent = 'Recent Albumin Date:';
    albuminDateSpan.style.textAlign = 'center';
    albuminDateVal.textContent = data.recent_albumin_date;

    albuminSpan.textContent = 'Recent Albumin Value:';
    albuminSpan.style.textAlign = 'center';
    albuminVal.textContent = data.recent_albumin_value;

    weightDateSpan.textContent = 'Recent Weight Date:';
    weightDateSpan.style.textAlign = 'center';
    weightDateVal.textContent = data.last_weight_date;

    weightSpan.textContent = 'Recent Weight Value:';
    weightSpan.style.textAlign = 'center';
    weightVal.textContent = data.last_weight_value + ' g';

    this.agBioDiv.appendChild(nameSpan);
    this.agBioDiv.appendChild(nameVal);
    this.agBioDiv.appendChild(fatherSpan);
    this.agBioDiv.appendChild(fatherVal);
    this.agBioDiv.appendChild(albuminDateSpan);
    this.agBioDiv.appendChild(albuminDateVal);
    this.agBioDiv.appendChild(dobSpan);
    this.agBioDiv.appendChild(dobVal);
    this.agBioDiv.appendChild(motherSpan);
    this.agBioDiv.appendChild(motherVal);
    this.agBioDiv.appendChild(albuminSpan);
    this.agBioDiv.appendChild(albuminVal);
    this.agBioDiv.appendChild(colonySpan);
    this.agBioDiv.appendChild(colonyVal);
    this.agBioDiv.appendChild(rfidSpan);
    this.agBioDiv.appendChild(rfidVal);
    this.agBioDiv.appendChild(weightDateSpan);
    this.agBioDiv.appendChild(weightDateVal);
    this.agBioDiv.appendChild(sexSpan);
    this.agBioDiv.appendChild(sexVal);
    this.agBioDiv.appendChild(breedingSpan);
    this.agBioDiv.appendChild(breedingVal);
    this.agBioDiv.appendChild(weightSpan);
    this.agBioDiv.appendChild(weightVal);
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

  private plotAgentWeight(data: any) {
    const agWtDt = new google.visualization.DataTable();
    let agWtDashboard = new google.visualization.Dashboard(this.agWtCard);
    agWtDt.addColumn('date', 'Date');
    agWtDt.addColumn('number', 'Weight');

    for (let i = 0; i < data.weight_dates.length; i++) {
      agWtDt.addRow([new Date(data.weight_dates[i]), data.weight_values[i]]);
    }

    console.log(agWtDt);

    let plot = document.querySelector('#agent-weight-plot') as div;
    let filter = document.querySelector('#agent-weight-filter') as div;

    plot.style.height = '80%';
    filter.style.height = '20%';



    const agWtPlotConfig = {
      'chartType': 'LineChart',
      'containerId': 'agent-weight-plot',
      'options': {
        interpolateNulls: true,
        title: 'Weight Plot',
        width: plot.clientWidth,
        height: plot.offsetHeight,
        legend: 'none' as 'none',
        pointSize: 5
      }
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
    console.log(this.marmosetData);
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