import firebase from 'firebase/app';
import { matrix, subtract, filter, dotDivide, dotMultiply, round } from 'mathjs';
import Tabulator from 'tabulator-tables';
import * as d3 from 'd3';


const db = firebase.firestore();

export class Fireplace {
  public queryStartDateValue: number;
  public queryEndDateValue: number;
  public tLastQuery: number;
  public tQueryInterval: number;
  private tableElem: HTMLDivElement;
  private editorElem: HTMLDivElement;
  private performancePlotElem: HTMLDivElement;
  private table: Tabulator;

  constructor() {
    this.queryEndDateValue = new Date(new Date().toLocaleDateString()).valueOf() 
      + (24 * 3600 * 1000);
    this.queryStartDateValue = this.queryEndDateValue - (7 * 24 * 3600 * 1000);
    this.tQueryInterval = 20 * 1000;
    this.tLastQuery = 0;
  }

  public async getAgentList() {
    
    let stuff = await db.collection('marmosets').get().then(snapshot => {
      return snapshot.docs.map(x => x.data());
    });

    return stuff;

  }

  public async queryCallback(snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) {
    if (this.tLastQuery === 0 || Date.now() - this.tLastQuery > this.tQueryInterval) {
      this.processData(snapshot);
    }
  }

  private processData(snapshot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) {
    // this.tLastQuery = Date.now();
    console.log('snapshot', snapshot);
    let data: any[] = [];
    let agentList: string[] = [];
    snapshot.forEach(doc => {
      let d = doc.data();
      let agentIdx = agentList.indexOf(d.Agent);
      let dateString = new Date(d.CurrentDateValue).toLocaleDateString();
      let r: math.Matrix;
      let c: math.Matrix;
      let numCorrect: number;
      let numTrials: number;
      let tLastTrial: number;

      if (Array.isArray(d.Response)) {
        r = matrix(d.Response);
        c = matrix(d.CorrectItem);
        numCorrect = (<math.Matrix>filter(subtract(r, c) as math.Matrix, el => el == 0)).size()[0];
        numTrials = d.Response.length;
        tLastTrial = d.CurrentDateValue + d.StartTime[d.StartTime.length - 1];
      } else {
        return; // skip to next iteration since d.Response is undefined
      }

      if (agentIdx > -1) {
        let dateIdx = data[agentIdx]['dates'].indexOf(dateString);
        if (dateIdx > -1) {
          data[agentIdx]['numTrials'][dateIdx] += numTrials;
          data[agentIdx]['numCorrect'][dateIdx] += numCorrect;
          data[agentIdx]['tLastTrial'] = tLastTrial;
        } else {
          data[agentIdx]['dates'].push(dateString);
          data[agentIdx]['numTrials'].push(numTrials);
          data[agentIdx]['numCorrect'].push(numCorrect);
          data[agentIdx]['tLastTrial'] = tLastTrial;
        }
        
      } else {
        agentList.push(d.Agent);
        data.push({
          agent: d.Agent,
          dates: [dateString],
          numTrials: [numTrials],
          numCorrect: [numCorrect],
          tLastTrial: tLastTrial
        });
      }
    });

    if (this.tLastQuery == 0) {
      console.log(this.table);
      this.constructTable(data);
      this.tLastQuery = Date.now();
    } else {
      this.updateTable(data);
      this.tLastQuery = Date.now();
    }
    
  }

  private constructTable(data: any[]) {
    let timeNow = Date.now();

    let buildStuff = (d: any) => {
      this.buildPlots(d);
    }

    function numTrialMutator(value: any, data: any, type: any, params: any, component: any) {
      if (params.range == 24) {
        let dateStringToday = new Date().toLocaleDateString();
        let idx = data['dates'].indexOf(dateStringToday);
        if (idx > -1) {
          return data['numTrials'][idx];
        } else {
          return 0;
        }
      } else if (params.range == 48) {
        if (data['numTrials'].slice(1).slice(-2).length < 2) {
          return NaN;
        } else {
          let numTrialsSum = (
            data['numTrials'].slice(1).slice(-2).reduce((a: number, b: number) => a + b, 0)
          );
          return numTrialsSum / 2;
        }
      }
    }

    function pctCorrectMutator(value: any, data: any, type: any, params: any, component: any) {
      if (params.range == 24) {
        let dateStringToday = new Date().toLocaleDateString();
        let idx = data['dates'].indexOf(dateStringToday);
        if (idx > -1) {
          return Math.round(data['numCorrect'][idx] / data['numTrials'][idx] * 100);
        } else {
          return 0;
        }
      } else if (params.range == 48) {
        if (data['numCorrect'].slice(1).slice(-2).length < 2) {
          return NaN;
        } else {
          let numCorrectSum = (
            data['numCorrect'].slice(1).slice(-2).reduce((a: number, b: number) => a + b, 0)
          );
          let numTrialsSum = (
            data['numTrials'].slice(1).slice(-2).reduce((a: number, b: number) => a + b, 0)
          );
          return Math.round(numCorrectSum / numTrialsSum * 100);
        }
      }
    }

    function tSinceLastTrial(value: any, data: any, type: any, params: any, component: any) {
      let dtt = Date.now();
      console.log(dtt);
      return Math.round((dtt - data.tLastTrial) / 1000 / 60);
    }

    function tLastTrialFormat(cell: Tabulator.CellComponent) {
      if (cell.getValue() <= 5) {
        cell.getElement().style.background = '#198754';
        cell.getElement().style.color = 'white';
      } else if (cell.getValue() > 5 && cell.getValue() < 60) {
        cell.getElement().style.background = '#dc3545';
        cell.getElement().style.color = 'white';
      }
      return cell.getValue();
    }

    

    this.table = new Tabulator(this.tableElem, {
      data: data,
      cellVertAlign: 'middle',
      layout: 'fitData',
      columns: [
        {
          title: 'Agent',
          field: 'agent'
        },
        {
          title: '% (today)',
          field: 'pctCorrectToday',
          mutator: pctCorrectMutator,
          mutatorParams: { range: 24 }
        },
        {
          title: 'n (today)',
          field: 'numTrialsToday',
          mutator: numTrialMutator,
          mutatorParams: { range: 24 }
        },
        {
          title: '% (-2d)',
          field: 'pctCorrectAvg',
          mutator: pctCorrectMutator,
          mutatorParams: { range: 48 }
        },
        {
          title: 'n (-2d)',
          field: 'numTrialsAvg',
          mutator: numTrialMutator,
          mutatorParams: { range: 48 }
        },
        {
          title: 'tLast',
          field: 'tSinceLastTrial',
          mutator: tSinceLastTrial,
          formatter: tLastTrialFormat
        }
        
        
      ],
      tooltips: true,
      dataLoaded: function(data) {
        // data.forEach((row: any) => {
        //   row['performance'] = ;
        //   row['_numTrials'] = [];
        //   row['dates'] = row['dates'].map(d3.timeParse('%m/%d/%Y'));
        // });
        // console.log(data);
        buildStuff(data);
      },
    });
  }

  private updateTable(data: any[]) {
    this.table.replaceData(data);
  }

  public registerDomElement(type: string, elem: HTMLDivElement) {
    if (type === 'table') {
      console.log(elem);
      this.tableElem = elem;
    } else if (type === 'editor') {
      this.editorElem = elem;
    } else if (type === 'perf-plot') {
      this.performancePlotElem = elem;
    }
  }

  private buildPlots(data: any[]) {

    // each row holds one agent's data
    let queryDateRangeArrayStr = this.getDateArray(this.queryStartDateValue, this.queryEndDateValue);
    data.forEach(row => {
      row['performance'] = (
        round(dotMultiply(100, dotDivide(row['numCorrect'], row['numTrials'])) as math.MathArray)
      );
      row['_performance'] = queryDateRangeArrayStr.map((date: string) => {
        if (row['dates'].includes(date)) {
          return row['performance'].shift();
        } else {
          return 0;
        }
      });
      row['_numTrials'] = queryDateRangeArrayStr.map((date: string) => {
        if (row['dates'].includes(date)) {
          return row['numTrials'].shift();
        } else {
          return 0;
        }
      });
    });
    
    let queryDateRangeArray = queryDateRangeArrayStr.map(d3.timeParse('%m/%d/%Y'));
    console.log(queryDateRangeArray);

    console.log('buildPlots data:', data);
    
    
    let svg = d3.select('#performance-plot')
      .append('svg')
      .attr('style', 'width: 100%; height: 100%');
    let width = (<HTMLElement>d3.select('#performance-plot').node()).clientWidth;
    let height = (<HTMLElement>d3.select('#performance-plot').node()).clientHeight;
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    let margin = { top: 5, bottom: 5, right: 5, left: 5 };

    let x = d3.scaleTime()
      .domain(<[Date, Date]>d3.extent(queryDateRangeArray, function (d) { return d }))
      .range([margin.left, width - margin.right]);

    let yPerformance = d3.scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);
    
    let yNumTrials = d3.scaleLinear()
      .domain([0, <any>d3.max(data, d => d3.max(d['_numTrials']))])
      .range([height - margin.bottom, margin.top]);

    let xAxis = (g: any) => g
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

    let yAxisNumTrials = (g: any) => g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yNumTrials))
      .call((g: any) => g.select(".domain").remove())
      .call((g: any) => g.select(".tick:last-of-type text").clone()
          .attr("x", 3)
          .attr("text-anchor", "start")
          .attr("font-weight", "bold")
          .text('NumTrials'));

    let linesNumTrials = d3.line()
      .defined((d, i) => !isNaN(d[i]))
      .x((d, i) => x(queryDateRangeArray[i] as Date))
      .y((d, i) => yNumTrials(d[i]));
    
    
    
    // console.log(svg);
  }

  private getDateArray(start: number, end: number) {
    let arr = [];
    let dt = new Date(start);
    while (dt.valueOf() <= end) {
      arr.push(dt.toLocaleDateString());
      dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }



  
}