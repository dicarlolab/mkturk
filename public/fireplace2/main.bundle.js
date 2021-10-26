/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/fireplace.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/fireplace.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tabulator-row .tabulator-cell{\n  max-height: 22px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-right: 16px;\n}\n\n.tick > line {\n  stroke: #ddd;\n}", "",{"version":3,"sources":["webpack://./src/fireplace.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd","sourcesContent":[".tabulator-row .tabulator-cell{\n  max-height: 22px;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  padding-right: 16px;\n}\n\n.tick > line {\n  stroke: #ddd;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/fireplace.css":
/*!***************************!*\
  !*** ./src/fireplace.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fireplace_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./fireplace.css */ "./node_modules/css-loader/dist/cjs.js!./src/fireplace.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_fireplace_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_fireplace_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/fireplace.ts":
/*!**************************!*\
  !*** ./src/fireplace.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fireplace": () => (/* binding */ Fireplace)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js");
/* harmony import */ var tabulator_tables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabulator-tables */ "./node_modules/tabulator-tables/dist/js/tabulator.es2015.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var jsoneditor_dist_jsoneditor_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsoneditor/dist/jsoneditor.min.css */ "./node_modules/jsoneditor/dist/jsoneditor.min.css");
/* harmony import */ var jsoneditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsoneditor */ "./node_modules/jsoneditor/dist/jsoneditor.min.js");
/* harmony import */ var jsoneditor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsoneditor__WEBPACK_IMPORTED_MODULE_4__);






const db = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.firestore();
class Fireplace {
    constructor() {
        this.queryEndDateValue = new Date(new Date().toLocaleDateString()).valueOf()
            + (24 * 3600 * 1000);
        this.queryStartDateValue = this.queryEndDateValue - (7 * 24 * 3600 * 1000);
        this.tQueryInterval = 20 * 1000;
        this.tLastQuery = 0;
        this.taskDocs = {
            dates: this.getDateArray(this.queryStartDateValue, this.queryEndDateValue)
        };
    }
    async getAgentList() {
        let stuff = await db.collection('marmosets').get().then(snapshot => {
            return snapshot.docs.map(x => x.data());
        });
        return stuff;
    }
    async queryCallback(snapshot) {
        if (this.tLastQuery === 0 || Date.now() - this.tLastQuery > this.tQueryInterval) {
            this.processData(snapshot);
        }
    }
    processData(snapshot) {
        console.log('snapshot', snapshot);
        let data = [];
        let agentList = [];
        snapshot.forEach(doc => {
            let d = doc.data();
            let agentIdx = agentList.indexOf(d.Agent);
            let dateString = new Date(d.CurrentDateValue).toLocaleDateString();
            let r;
            let c;
            let numCorrect;
            let numTrials;
            let tLastTrial;
            if (Array.isArray(d.Response)) {
                r = (0,mathjs__WEBPACK_IMPORTED_MODULE_5__.matrix)(d.Response);
                c = (0,mathjs__WEBPACK_IMPORTED_MODULE_5__.matrix)(d.CorrectItem);
                numCorrect = (0,mathjs__WEBPACK_IMPORTED_MODULE_5__.filter)((0,mathjs__WEBPACK_IMPORTED_MODULE_5__.subtract)(r, c), el => el == 0).size()[0];
                numTrials = d.Response.length;
                tLastTrial = d.CurrentDateValue + d.StartTime[d.StartTime.length - 1];
            }
            else {
                return; // skip to next iteration since d.Response is undefined
            }
            if (agentIdx > -1) {
                let dateIdx = data[agentIdx]['dates'].indexOf(dateString);
                if (dateIdx > -1) {
                    data[agentIdx]['numTrials'][dateIdx] += numTrials;
                    data[agentIdx]['numCorrect'][dateIdx] += numCorrect;
                    data[agentIdx]['tLastTrial'] = tLastTrial;
                    this.taskDocs[d.Agent][dateString].push(d);
                    // console.log('case 1:', d.Agent, dateString);
                }
                else {
                    data[agentIdx]['dates'].push(dateString);
                    data[agentIdx]['numTrials'].push(numTrials);
                    data[agentIdx]['numCorrect'].push(numCorrect);
                    data[agentIdx]['tLastTrial'] = tLastTrial;
                    this.taskDocs[d.Agent][dateString] = [d];
                    // console.log('case 2:', d.Agent, dateString);
                }
            }
            else {
                agentList.push(d.Agent);
                data.push({
                    agent: d.Agent,
                    dates: [dateString],
                    numTrials: [numTrials],
                    numCorrect: [numCorrect],
                    tLastTrial: tLastTrial
                });
                console.log(this.taskDocs);
                this.taskDocs[d.Agent] = {};
                this.taskDocs[d.Agent][dateString] = [d];
                // console.log('case 3:', d.Agent, dateString);
            }
        });
        if (this.tLastQuery == 0) {
            console.log(this.table);
            this.constructTable(data);
            this.tLastQuery = Date.now();
        }
        else {
            this.updateTable(data);
            this.tLastQuery = Date.now();
        }
    }
    constructTable(data) {
        let buildStuff = (d) => {
            this.buildPlots(d);
        };
        let returnTaskDocs = () => {
            return this.taskDocs;
        };
        let viewer = this.viewer;
        function numTrialMutator(value, data, type, params, component) {
            if (params.range == 24) {
                let dateStringToday = new Date().toLocaleDateString();
                let idx = data['dates'].indexOf(dateStringToday);
                if (idx > -1) {
                    return data['numTrials'][idx];
                }
                else {
                    return 0;
                }
            }
            else if (params.range == 48) {
                if (data['numTrials'].slice(1).slice(-2).length < 2) {
                    return NaN;
                }
                else {
                    let numTrialsSum = (data['numTrials'].slice(1).slice(-2).reduce((a, b) => a + b, 0));
                    return numTrialsSum / 2;
                }
            }
        }
        function pctCorrectMutator(value, data, type, params, component) {
            if (params.range == 24) {
                let dateStringToday = new Date().toLocaleDateString();
                let idx = data['dates'].indexOf(dateStringToday);
                if (idx > -1) {
                    return Math.round(data['numCorrect'][idx] / data['numTrials'][idx] * 100);
                }
                else {
                    return 0;
                }
            }
            else if (params.range == 48) {
                if (data['numCorrect'].slice(1).slice(-2).length < 2) {
                    return NaN;
                }
                else {
                    let numCorrectSum = (data['numCorrect'].slice(1).slice(-2).reduce((a, b) => a + b, 0));
                    let numTrialsSum = (data['numTrials'].slice(1).slice(-2).reduce((a, b) => a + b, 0));
                    return Math.round(numCorrectSum / numTrialsSum * 100);
                }
            }
        }
        function tSinceLastTrial(value, data, type, params, component) {
            let dtt = Date.now();
            console.log(dtt);
            return Math.round((dtt - data.tLastTrial) / 1000 / 60);
        }
        function tLastTrialFormat(cell) {
            if (cell.getValue() <= 5) {
                cell.getElement().style.background = '#198754';
                cell.getElement().style.color = 'white';
            }
            else if (cell.getValue() > 5 && cell.getValue() < 60) {
                cell.getElement().style.background = '#dc3545';
                cell.getElement().style.color = 'white';
            }
            return cell.getValue();
        }
        let viewerElem = document.querySelector('#taskdoc-viewer');
        this.table = new tabulator_tables__WEBPACK_IMPORTED_MODULE_1__.default(this.tableElem, {
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
                    mutatorParams: { range: 24 },
                    hozAlign: 'right'
                },
                {
                    title: 'n (today)',
                    field: 'numTrialsToday',
                    mutator: numTrialMutator,
                    mutatorParams: { range: 24 },
                    hozAlign: 'right'
                },
                {
                    title: '% (-2d)',
                    field: 'pctCorrectAvg',
                    mutator: pctCorrectMutator,
                    mutatorParams: { range: 48 },
                    hozAlign: 'right'
                },
                {
                    title: 'n (-2d)',
                    field: 'numTrialsAvg',
                    mutator: numTrialMutator,
                    mutatorParams: { range: 48 },
                    hozAlign: 'right'
                },
                {
                    title: 'tLast',
                    field: 'tSinceLastTrial',
                    mutator: tSinceLastTrial,
                    formatter: tLastTrialFormat,
                    hozAlign: 'right'
                }
            ],
            tooltips: true,
            dataLoaded: function (data) {
                buildStuff(data);
                // let tmp = returnTaskDocs();
            },
            rowClick(evt, row) {
                let taskDocs = returnTaskDocs();
                console.log('taskDocs:', taskDocs);
                console.log('row clicked:', taskDocs[row.getData().agent]);
                let taskDocsKeys = Object.keys(taskDocs[row.getData().agent]);
                let mostRecentDate = taskDocsKeys[taskDocsKeys.length - 1];
                console.log(mostRecentDate);
                let recentTaskDocs = taskDocs[row.getData().agent][mostRecentDate];
                console.log(recentTaskDocs);
                // Need this try-catch block because JSONEditor.get() throws an error if no data is loaded
                try {
                    viewer.get();
                    viewer.update(recentTaskDocs[recentTaskDocs.length - 1]);
                }
                catch {
                    let options = {
                        modes: ['tree', 'code'],
                        sortObjectKeys: true
                    };
                    viewer = new (jsoneditor__WEBPACK_IMPORTED_MODULE_4___default())(viewerElem, options, recentTaskDocs[recentTaskDocs.length - 1]);
                }
            }
        });
    }
    updateTable(data) {
        this.table.replaceData(data);
    }
    registerDomElement(type, elem) {
        if (type === 'table') {
            console.log(elem);
            this.tableElem = elem;
        }
        else if (type === 'editor') {
            this.editorElem = elem;
        }
        else if (type === 'perf-plot') {
            this.performancePlotElem = elem;
        }
    }
    buildPlots(data) {
        // each row holds one agent's data
        let queryDateRangeArrayStr = this.getDateArray(this.queryStartDateValue, this.queryEndDateValue);
        console.log(queryDateRangeArrayStr);
        data.forEach(row => {
            row['performance'] = ((0,mathjs__WEBPACK_IMPORTED_MODULE_5__.round)((0,mathjs__WEBPACK_IMPORTED_MODULE_5__.dotMultiply)(100, (0,mathjs__WEBPACK_IMPORTED_MODULE_5__.dotDivide)(row['numCorrect'], row['numTrials']))));
            row['_performance'] = queryDateRangeArrayStr.map((date) => {
                if (row['dates'].includes(date)) {
                    return row['performance'].shift();
                }
                else {
                    return 0;
                }
            });
            console.log(row['_performance']);
            row['_numTrials'] = queryDateRangeArrayStr.map((date) => {
                if (row['dates'].includes(date)) {
                    return row['numTrials'].shift();
                }
                else {
                    return 0;
                }
            });
        });
        let queryDateRangeArray = queryDateRangeArrayStr.map(d3__WEBPACK_IMPORTED_MODULE_2__.timeParse('%m/%d/%Y'));
        let d3Data = {
            y: 'Number of Trials',
            series: data,
            dates: queryDateRangeArray
        };
        let svgNumTrials;
        let svgPerformance;
        let width = d3__WEBPACK_IMPORTED_MODULE_2__.select('#num-trials-plot').node().clientWidth;
        let height = d3__WEBPACK_IMPORTED_MODULE_2__.select('#num-trials-plot').node().clientHeight;
        let margin = { top: 20, bottom: 30, right: 150, left: 50, legendOffset: 30 };
        let x = d3__WEBPACK_IMPORTED_MODULE_2__.scaleTime()
            .domain(d3__WEBPACK_IMPORTED_MODULE_2__.extent(d3Data.dates, function (d) { return d; }))
            .range([margin.left, width - margin.right]);
        let yNumTrials = d3__WEBPACK_IMPORTED_MODULE_2__.scaleLinear()
            .domain([0, d3__WEBPACK_IMPORTED_MODULE_2__.max(d3Data.series, d => d3__WEBPACK_IMPORTED_MODULE_2__.max(d['_numTrials']))])
            .range([height - margin.bottom, margin.top]);
        let yPerformance = d3__WEBPACK_IMPORTED_MODULE_2__.scaleLinear()
            .domain([0, 100])
            .range([height - margin.bottom, margin.top]);
        if (d3__WEBPACK_IMPORTED_MODULE_2__.select('svg').size() == 0) {
            svgNumTrials = (d3__WEBPACK_IMPORTED_MODULE_2__.select('#num-trials-plot')
                .append('svg')
                .attr('id', 'num-trials-svg')
                .attr('style', 'width: 100%; height: 100%'));
            svgNumTrials
                .attr('viewBox', `0 0 ${width} ${height}`)
                .style("overflow", "visible");
            svgPerformance = (d3__WEBPACK_IMPORTED_MODULE_2__.select('#performance-plot')
                .append('svg')
                .attr('id', 'performance-svg')
                .attr('style', 'width: 100%; height: 100%')
                .attr('viewBox', `0 0 ${width} ${height}`)
                .style("overflow", "visible"));
            let xAxis = (g) => g
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .style('font-size', '15px')
                .call(d3__WEBPACK_IMPORTED_MODULE_2__.axisBottom(x).ticks(7).tickSizeOuter(0).tickFormat(d3__WEBPACK_IMPORTED_MODULE_2__.timeFormat('%a')));
            let yAxisNumTrials = (g) => g
                .attr("transform", `translate(${margin.left}, 0)`)
                .style('font-size', 14)
                .call(d3__WEBPACK_IMPORTED_MODULE_2__.axisLeft(yNumTrials).tickFormat(d3__WEBPACK_IMPORTED_MODULE_2__.format('')).tickSize(-(width - margin.left - margin.right)))
                .call((g) => g.select(".domain").remove());
            // .call((g: any) => g.select(".tick:last-of-type text").clone()
            //     .attr("x", 3)
            //     .attr("text-anchor", "start")
            //     .attr("font-weight", "bold")
            //     .text(d3Data.y));
            let yAxisPerformance = (g) => g
                .attr('transform', `translate(${margin.left}, 0)`)
                .style('font-size', 14)
                .call(d3__WEBPACK_IMPORTED_MODULE_2__.axisLeft(yPerformance).ticks(5).tickFormat(d3__WEBPACK_IMPORTED_MODULE_2__.format('')).tickSize(-(width - margin.left - margin.right)))
                .call((g) => g.select('.domain').remove());
            // .call((g: any) => g.select(".tick:last-of-type text").clone()
            // .attr("x", 3)
            //     .attr("text-anchor", "start")
            //     .attr("font-weight", "bold")
            //     .text('Performance'));
            svgNumTrials.append('g')
                .call(xAxis);
            svgNumTrials.append('g')
                .call(yAxisNumTrials);
            svgPerformance.append('g')
                .call(xAxis);
            svgPerformance.append('g')
                .call(yAxisPerformance);
        }
        else {
            svgNumTrials = d3__WEBPACK_IMPORTED_MODULE_2__.select('#num-trials-svg');
            svgPerformance = d3__WEBPACK_IMPORTED_MODULE_2__.select('#performance-svg');
            // d3.selectAll('path.line').remove();
            d3__WEBPACK_IMPORTED_MODULE_2__.selectAll('path').remove();
            d3__WEBPACK_IMPORTED_MODULE_2__.selectAll('g.dot').remove();
        }
        let linesNumTrials = d3__WEBPACK_IMPORTED_MODULE_2__.line()
            .defined(d => !isNaN(d))
            .x((d, i) => x(d3Data.dates[i]))
            .y((d, i) => yNumTrials(d));
        let linesPerformance = d3__WEBPACK_IMPORTED_MODULE_2__.line()
            .defined(d => !isNaN(d))
            .x((d, i) => x(d3Data.dates[i]))
            .y((d, i) => yPerformance(d));
        console.log(d3Data);
        let color = d3__WEBPACK_IMPORTED_MODULE_2__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_2__.schemeTableau10);
        let numTrialsPath = (svgNumTrials.append('g')
            .attr("fill", "none")
            .attr("stroke-width", 2)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .selectAll("path")
            .data(d3Data.series)
            .join('path')
            .style('mix-blend-mode', 'multiply')
            .attr('d', d => linesNumTrials(d['_numTrials']))
            .attr('stroke', (d, i) => color(d.agent))
            .attr('id', (d, i) => d.agent));
        let performancePath = (svgPerformance.append('g')
            .attr('fill', 'none')
            .attr('stroke-width', 2)
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .selectAll('path')
            .data(d3Data.series)
            .join('path')
            // .style('mix-blend-mode', 'multiply')
            .attr('d', d => linesPerformance(d['_performance']))
            .attr('stroke', (d, i) => color(d.agent))
            .attr('id', (d, i) => d.agent));
        d3Data.series.forEach((d, i) => {
            svgPerformance.append('g')
                .attr('class', 'legend')
                .append('circle')
                .attr('cx', width - margin.right + margin.legendOffset)
                .attr('cy', () => { return margin.top + i * 25; })
                .attr('r', 7)
                .style('fill', () => { return color(d.agent); });
            // svgPerformance
            //   .append('circle')
            //     .attr('cx', width - margin.right + margin.legendOffset)
            //     .attr('cy', () => { return margin.top + i * 25})
            //     .attr('r', 7)
            //     .style('fill', () => { return color(d.agent); });
            svgPerformance.select('g.legend')
                .append('text')
                .attr('x', width - margin.right + margin.legendOffset + 20)
                .attr('y', () => { return margin.top + i * 25; })
                .style('fill', () => { return color(d.agent); })
                .text(() => { return d.agent; })
                .attr('text-anchor', 'left')
                .attr('alignment-baseline', 'middle');
            // svgPerformance
            //   .append('text')
            //     .attr('x', width - margin.right + margin.legendOffset + 20)
            //     .attr('y', () => { return margin.top + i * 25; })
            //     .style('fill', () => { return color(d.agent); })
            //     .text(() => { return d.agent; })
            //     .attr('text-anchor', 'left')
            //     .attr('alignment-baseline', 'middle');
            svgNumTrials
                .append('circle')
                .attr('cx', width - margin.right + margin.legendOffset)
                .attr('cy', () => { return margin.top + i * 25; })
                .attr('r', 7)
                .style('fill', () => { return color(d.agent); });
            svgNumTrials
                .append('text')
                .attr('x', width - margin.right + margin.legendOffset + 20)
                .attr('y', () => { return margin.top + i * 25; })
                .style('fill', () => { return color(d.agent); })
                .text(() => { return d.agent; })
                .attr('text-anchor', 'left')
                .attr('alignment-baseline', 'middle');
        });
        const numTrialsAction = (svg, path) => {
            let pathClicked = false;
            let dotClicked = false;
            let clickedDot;
            svg
                .on('mousemove', (e) => {
                let target = d3__WEBPACK_IMPORTED_MODULE_2__.select(e.target).node();
                if (!pathClicked) {
                    if (target.nodeName == 'path') {
                        path.attr('stroke-width', d => {
                            return d.agent === target.id ? 4 : 2;
                        });
                    }
                    else {
                        path.attr('stroke-width', 2);
                    }
                }
                else {
                    if (target.nodeName == 'circle' && dotClicked == true) {
                        if (target != clickedDot) {
                            console.log('target:', target, 'clickedDot:', clickedDot);
                            d3__WEBPACK_IMPORTED_MODULE_2__.select(target)
                                .attr('r', 4.5)
                                .attr('fill', 'black');
                        }
                    }
                    else if (target.nodeName == 'circle' && dotClicked == false) {
                        d3__WEBPACK_IMPORTED_MODULE_2__.select(target)
                            .attr('r', 4.5);
                        // svg.selectAll('g.dot circle').attr('r', 4.5);
                    }
                    else if (target.nodeName != 'circle' && dotClicked == false) {
                        d3__WEBPACK_IMPORTED_MODULE_2__.selectAll('g.dot circle').attr('r', 2.5);
                    }
                    else if (target.nodeName != 'circle' && dotClicked == true) {
                        d3__WEBPACK_IMPORTED_MODULE_2__.selectAll('g.dot circle').attr('r', 2.5);
                        d3__WEBPACK_IMPORTED_MODULE_2__.select(clickedDot)
                            .attr('r', 4.5)
                            .attr('fill', 'red');
                    }
                }
            })
                .on('click', (e) => {
                var _a, _b, _c, _d, _e, _f;
                let target = d3__WEBPACK_IMPORTED_MODULE_2__.select(e.target).node();
                if (!pathClicked) {
                    if (target.nodeName == 'path') {
                        path.attr('stroke', d => {
                            return d.agent === target.id ? color(d.agent) : '#ddd';
                        }).filter(d => d.agent === target.id).raise();
                        path.attr('stroke-width', d => {
                            return d.agent === target.id ? 4 : 2;
                        });
                        let row = d3Data.series.map((row) => {
                            if (row.agent == target.id) {
                                return row;
                            }
                        }).filter(row => row)[0];
                        row['_numTrials'].forEach((numTrials, idx) => {
                            console.log('numTrials:', numTrials, 'idx:', idx);
                            let dot = svg.append('g')
                                .attr('display', null)
                                .attr('class', 'dot');
                            dot.append('circle')
                                .attr('r', 2.5);
                            dot.append('text')
                                .attr('font-family', 'sans-serif')
                                .attr('font-size', 10)
                                .attr('text-anchor', 'middle')
                                .attr('y', -8);
                            dot.attr('transform', `translate(${x(d3Data.dates[idx])}, ${yNumTrials(numTrials)})`);
                            dot.select('text').text(`${row['agent']}, ${numTrials}`);
                        });
                        pathClicked = true;
                    }
                }
                else {
                    if (target.nodeName == 'circle' && dotClicked == false) {
                        let pointer = d3__WEBPACK_IMPORTED_MODULE_2__.pointer(e, svg);
                        let dateClicked = x.invert(pointer[0]);
                        let agent = (_c = (_b = (_a = path.node()) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.id;
                        let agentTaskDocs = this.taskDocs[agent][dateClicked.toLocaleDateString()];
                        let lastTaskDoc = agentTaskDocs[agentTaskDocs.length - 1];
                        d3__WEBPACK_IMPORTED_MODULE_2__.select(target)
                            .attr('r', 4.5)
                            .attr('fill', 'red');
                        dotClicked = true;
                        clickedDot = target;
                        try {
                            this.viewer.get();
                            this.viewer.update(lastTaskDoc);
                        }
                        catch {
                            let options = {
                                modes: ['tree', 'code'],
                                sortObjectKeys: true
                            };
                            let viewerElem = document.querySelector('#taskdoc-viewer');
                            this.viewer = new (jsoneditor__WEBPACK_IMPORTED_MODULE_4___default())(viewerElem, options, lastTaskDoc);
                        }
                    }
                    else if (target.nodeName == 'circle' && dotClicked == true) {
                        if (target == clickedDot) {
                            d3__WEBPACK_IMPORTED_MODULE_2__.select(target)
                                .attr('r', 2.5)
                                .attr('fill', 'black');
                            dotClicked = false;
                        }
                        else {
                            let pointer = d3__WEBPACK_IMPORTED_MODULE_2__.pointer(e, svg);
                            let dateClicked = x.invert(pointer[0]);
                            let agent = (_f = (_e = (_d = path.node()) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.lastElementChild) === null || _f === void 0 ? void 0 : _f.id;
                            let agentTaskDocs = this.taskDocs[agent][dateClicked.toLocaleDateString()];
                            let lastTaskDoc = agentTaskDocs[agentTaskDocs.length - 1];
                            d3__WEBPACK_IMPORTED_MODULE_2__.select(target)
                                .attr('r', 4.5)
                                .attr('fill', 'red');
                            d3__WEBPACK_IMPORTED_MODULE_2__.select(clickedDot)
                                .attr('r', 2.5)
                                .attr('fill', 'black');
                            clickedDot = target;
                            this.viewer.update(lastTaskDoc);
                        }
                    }
                    else {
                        path
                            .attr('stroke', d => color(d.agent))
                            .attr('stroke-width', 2);
                        svg.selectAll('g.dot').remove();
                        pathClicked = false;
                        dotClicked = false;
                    }
                }
            });
        };
        const performanceAction = (svg, path) => {
            let pathClicked = false;
            let dotClicked = false;
            let clickedDot;
            svg
                .on('mousemove', (e) => {
                let target = d3__WEBPACK_IMPORTED_MODULE_2__.select(e.target).node();
                if (!pathClicked) {
                    if (target.nodeName == 'path') {
                        path.attr('stroke-width', d => {
                            return d.agent === target.id ? 4 : 2;
                        });
                    }
                    else {
                        path.attr('stroke-width', 2);
                    }
                }
                else {
                    if (target.nodeName == 'circle' && dotClicked == true) {
                        if (target != clickedDot) {
                            console.log('target:', target, 'clickedDot:', clickedDot);
                            d3__WEBPACK_IMPORTED_MODULE_2__.select(target)
                                .attr('r', 4.5)
                                .attr('fill', 'black');
                        }
                    }
                    else if (target.nodeName == 'circle' && dotClicked == false) {
                        d3__WEBPACK_IMPORTED_MODULE_2__.select(target)
                            .attr('r', 4.5);
                        // svg.selectAll('g.dot circle').attr('r', 4.5);
                    }
                    else if (target.nodeName != 'circle' && dotClicked == false) {
                        d3__WEBPACK_IMPORTED_MODULE_2__.selectAll('g.dot circle').attr('r', 2.5);
                    }
                    else if (target.nodeName != 'circle' && dotClicked == true) {
                        d3__WEBPACK_IMPORTED_MODULE_2__.selectAll('g.dot circle').attr('r', 2.5);
                        d3__WEBPACK_IMPORTED_MODULE_2__.select(clickedDot)
                            .attr('r', 4.5)
                            .attr('fill', 'red');
                    }
                }
            })
                .on('click', (e) => {
                var _a, _b, _c, _d, _e, _f;
                let target = d3__WEBPACK_IMPORTED_MODULE_2__.select(e.target).node();
                if (!pathClicked) {
                    if (target.nodeName == 'path') {
                        path.attr('stroke', d => {
                            return d.agent === target.id ? color(d.agent) : '#ddd';
                        }).filter(d => d.agent === target.id).raise();
                        path.attr('stroke-width', d => {
                            return d.agent === target.id ? 4 : 2;
                        });
                        // path.style('mix-blend-mode', d => {
                        //   return d.agent === target.id ? 'overlay' : 'multiply'
                        // });
                        let row = d3Data.series.map((row) => {
                            if (row.agent == target.id) {
                                return row;
                            }
                        }).filter(row => row)[0];
                        row['_performance'].forEach((performance, idx) => {
                            let dot = svg.append('g')
                                .attr('display', null)
                                .attr('class', 'dot');
                            dot.append('circle')
                                .attr('r', 2.5);
                            dot.append('text')
                                .attr('font-family', 'sans-serif')
                                .attr('font-size', 10)
                                .attr('text-anchor', 'middle')
                                .attr('y', -8);
                            dot.attr('transform', `translate(${x(d3Data.dates[idx])}, ${yPerformance(performance)})`);
                            dot.select('text').text(`${row['agent']}, ${performance}%`);
                        });
                        pathClicked = true;
                    }
                }
                else {
                    if (target.nodeName == 'circle' && dotClicked == false) {
                        let pointer = d3__WEBPACK_IMPORTED_MODULE_2__.pointer(e, svg);
                        let dateClicked = x.invert(pointer[0]);
                        let agent = (_c = (_b = (_a = path.node()) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.lastElementChild) === null || _c === void 0 ? void 0 : _c.id;
                        let agentTaskDocs = this.taskDocs[agent][dateClicked.toLocaleDateString()];
                        let lastTaskDoc = agentTaskDocs[agentTaskDocs.length - 1];
                        d3__WEBPACK_IMPORTED_MODULE_2__.select(target)
                            .attr('r', 4.5)
                            .attr('fill', 'red');
                        dotClicked = true;
                        clickedDot = target;
                        try {
                            this.viewer.get();
                            this.viewer.update(lastTaskDoc);
                        }
                        catch {
                            let options = {
                                modes: ['tree', 'code'],
                                sortObjectKeys: true
                            };
                            let viewerElem = document.querySelector('#taskdoc-viewer');
                            this.viewer = new (jsoneditor__WEBPACK_IMPORTED_MODULE_4___default())(viewerElem, options, lastTaskDoc);
                        }
                    }
                    else if (target.nodeName == 'circle' && dotClicked == true) {
                        if (target == clickedDot) {
                            d3__WEBPACK_IMPORTED_MODULE_2__.select(target)
                                .attr('r', 2.5)
                                .attr('fill', 'black');
                            dotClicked = false;
                        }
                        else {
                            let pointer = d3__WEBPACK_IMPORTED_MODULE_2__.pointer(e, svg);
                            let dateClicked = x.invert(pointer[0]);
                            let agent = (_f = (_e = (_d = path.node()) === null || _d === void 0 ? void 0 : _d.parentNode) === null || _e === void 0 ? void 0 : _e.lastElementChild) === null || _f === void 0 ? void 0 : _f.id;
                            let agentTaskDocs = this.taskDocs[agent][dateClicked.toLocaleDateString()];
                            let lastTaskDoc = agentTaskDocs[agentTaskDocs.length - 1];
                            d3__WEBPACK_IMPORTED_MODULE_2__.select(target)
                                .attr('r', 4.5)
                                .attr('fill', 'red');
                            d3__WEBPACK_IMPORTED_MODULE_2__.select(clickedDot)
                                .attr('r', 2.5)
                                .attr('fill', 'black');
                            clickedDot = target;
                            this.viewer.update(lastTaskDoc);
                        }
                    }
                    else {
                        path
                            .attr('stroke', d => color(d.agent))
                            .attr('stroke-width', 2);
                        // .style('mix-blend-mode', 'multiply');
                        svg.selectAll('g.dot').remove();
                        pathClicked = false;
                        dotClicked = false;
                    }
                }
            });
            // path
            //   .on('click', pathClick);
            // const dot = svg.append('g')
            //   .attr('display', 'none');
            // dot.append('circle')
            //   .attr('r', 2.5);
            // dot.append("text")
            //   .attr("font-family", "sans-serif")
            //   .attr("font-size", 10)
            //   .attr("text-anchor", "middle")
            //   .attr("y", -8);
        };
        // svgNumTrials.call(hover);
        // svgNumTrials.call(hover, svgNumTrials.selectAll('path.line'));
        // if (d3.select('svg').size() == 0) {
        //   svgNumTrials.call(hover, path);
        // }
        svgNumTrials.call(numTrialsAction, numTrialsPath);
        svgPerformance.call(performanceAction, performancePath);
        // return svg.node();
        // console.log(svg);
    }
    getDateArray(start, end) {
        let arr = [];
        let dt = new Date(start);
        while (dt.valueOf() < end) {
            arr.push(dt.toLocaleDateString());
            dt.setDate(dt.getDate() + 1);
        }
        return arr;
    }
}


/***/ }),

/***/ "./src/init.ts":
/*!*********************!*\
  !*** ./src/init.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");



const firebaseConfig = {
    apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
    authDomain: "sandbox-ce2c5.firebaseapp.com",
    databaseURL: "https://sandbox-ce2c5.firebaseio.com",
    projectId: "sandbox-ce2c5",
    storageBucket: "sandbox-ce2c5.appspot.com",
    messagingSenderId: "1003719887944",
    clientId: "1003719887944-rlc06cjecqrp9fgvmvo56vqop1otm9ht.apps.googleusercontent.com"
};
firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp(firebaseConfig);


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var tabulator_tables_dist_css_bootstrap_tabulator_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tabulator-tables/dist/css/bootstrap/tabulator_bootstrap.min.css */ "./node_modules/tabulator-tables/dist/css/bootstrap/tabulator_bootstrap.min.css");
/* harmony import */ var _fireplace_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fireplace.css */ "./src/fireplace.css");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./src/init.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _fireplace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fireplace */ "./src/fireplace.ts");





const auth = firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.auth();
const db = firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.firestore();

let fp = new _fireplace__WEBPACK_IMPORTED_MODULE_5__.Fireplace();
auth.getRedirectResult().then(result => {
    if (!result.credential && !auth.currentUser) {
        let provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/plus.me');
        provider.addScope('https://www.googleapis.com/auth/user.emails.read');
        provider.addScope('https://www.googleapis.com/auth/userinfo.email');
        auth.signInWithRedirect(provider);
    }
    else {
        console.log('User Authenticated');
        console.log(auth.currentUser);
    }
}).catch(e => {
    console.error('Error with authentication:', e);
});
const tableElem = document.querySelector('#table');
const endDateInput = document.querySelector('#end-date');
endDateInput.value = new Date().toLocaleDateString('en-CA');
const performancePlotElem = document.querySelector('#performance-plot');
fp.registerDomElement('perf-plot', performancePlotElem);
const refreshBtn = document.querySelector('#refresh-btn');
refreshBtn.addEventListener('pointerup', (evt) => {
    console.log('hello');
    fp.tLastQuery = 0;
    let query = db.collection('mkturkdata')
        .where('Doctype', '==', 'task')
        .where('CurrentDateValue', '<', fp.queryEndDateValue)
        .where('CurrentDateValue', '>=', fp.queryStartDateValue)
        .onSnapshot(snapshot => fp.queryCallback(snapshot));
});
fp.registerDomElement('table', tableElem);
let query = db.collection('mkturkdata')
    .where('Doctype', '==', 'task')
    .where('CurrentDateValue', '<', fp.queryEndDateValue)
    .where('CurrentDateValue', '>=', fp.queryStartDateValue)
    .onSnapshot(snapshot => fp.queryCallback(snapshot));


/***/ }),

/***/ "?d4c0":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfireplace2"] = self["webpackChunkfireplace2"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_d3_index_js-node_modules_firebase_app_dist_index_esm_js-node_modules_fir-0b26d8"], () => (__webpack_require__("./src/main.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJlcGxhY2UyLy4vc3JjL2ZpcmVwbGFjZS5jc3MiLCJ3ZWJwYWNrOi8vZmlyZXBsYWNlMi8uL3NyYy9maXJlcGxhY2UuY3NzPzI0NzAiLCJ3ZWJwYWNrOi8vZmlyZXBsYWNlMi8uL3NyYy9maXJlcGxhY2UudHMiLCJ3ZWJwYWNrOi8vZmlyZXBsYWNlMi8uL3NyYy9pbml0LnRzIiwid2VicGFjazovL2ZpcmVwbGFjZTIvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9maXJlcGxhY2UyL2lnbm9yZWR8L1VzZXJzL2hlY3Rvci93b3JrL21rdHVyay9zcmMvZmlyZXBsYWNlMi9ub2RlX21vZHVsZXMvc2VlZHJhbmRvbXxjcnlwdG8iLCJ3ZWJwYWNrOi8vZmlyZXBsYWNlMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maXJlcGxhY2UyL3dlYnBhY2svcnVudGltZS9hbWQgZGVmaW5lIiwid2VicGFjazovL2ZpcmVwbGFjZTIvd2VicGFjay9ydW50aW1lL2FtZCBvcHRpb25zIiwid2VicGFjazovL2ZpcmVwbGFjZTIvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9maXJlcGxhY2UyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZpcmVwbGFjZTIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpcmVwbGFjZTIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9maXJlcGxhY2UyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlyZXBsYWNlMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZpcmVwbGFjZTIvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9maXJlcGxhY2UyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ZpcmVwbGFjZTIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZmlyZXBsYWNlMi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHlFQUF5RSxxQkFBcUIscUJBQXFCLHdCQUF3Qix3QkFBd0IsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsT0FBTyxvRkFBb0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSx3REFBd0QscUJBQXFCLHFCQUFxQix3QkFBd0Isd0JBQXdCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLG1CQUFtQjtBQUM5akI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BrRDtBQUN6RixZQUEyRjs7QUFFM0Y7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJeEIsaUVBQWUsOEZBQWMsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkM7QUFDNkM7QUFDeEM7QUFDaEI7QUFDbUI7QUFDZTtBQUkzRCxNQUFNLEVBQUUsR0FBRywyREFBa0IsRUFBRSxDQUFDO0FBRXpCLE1BQU0sU0FBUztJQVlwQjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7Y0FDeEUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMs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QTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDSkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1VDOUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50YWJ1bGF0b3Itcm93IC50YWJ1bGF0b3ItY2VsbHtcXG4gIG1heC1oZWlnaHQ6IDIycHg7XFxuICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcblxcbi50aWNrID4gbGluZSB7XFxuICBzdHJva2U6ICNkZGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9maXJlcGxhY2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50YWJ1bGF0b3Itcm93IC50YWJ1bGF0b3ItY2VsbHtcXG4gIG1heC1oZWlnaHQ6IDIycHg7XFxuICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcblxcbi50aWNrID4gbGluZSB7XFxuICBzdHJva2U6ICNkZGQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ZpcmVwbGFjZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IG1hdHJpeCwgc3VidHJhY3QsIGZpbHRlciwgZG90RGl2aWRlLCBkb3RNdWx0aXBseSwgcm91bmQgfSBmcm9tICdtYXRoanMnO1xuaW1wb3J0IFRhYnVsYXRvciBmcm9tICd0YWJ1bGF0b3ItdGFibGVzJztcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCAnanNvbmVkaXRvci9kaXN0L2pzb25lZGl0b3IubWluLmNzcyc7XG5pbXBvcnQgSlNPTkVkaXRvciwgeyBKU09ORWRpdG9yT3B0aW9ucyB9IGZyb20gJ2pzb25lZGl0b3InO1xuXG5cblxuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcblxuZXhwb3J0IGNsYXNzIEZpcmVwbGFjZSB7XG4gIHB1YmxpYyBxdWVyeVN0YXJ0RGF0ZVZhbHVlOiBudW1iZXI7XG4gIHB1YmxpYyBxdWVyeUVuZERhdGVWYWx1ZTogbnVtYmVyO1xuICBwdWJsaWMgdExhc3RRdWVyeTogbnVtYmVyO1xuICBwdWJsaWMgdFF1ZXJ5SW50ZXJ2YWw6IG51bWJlcjtcbiAgcHJpdmF0ZSB0YWJsZUVsZW06IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIGVkaXRvckVsZW06IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIHBlcmZvcm1hbmNlUGxvdEVsZW06IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIHRhYmxlOiBUYWJ1bGF0b3I7XG4gIHByaXZhdGUgdmlld2VyOiBKU09ORWRpdG9yO1xuICBwcml2YXRlIHRhc2tEb2NzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5xdWVyeUVuZERhdGVWYWx1ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpLnZhbHVlT2YoKSBcbiAgICAgICsgKDI0ICogMzYwMCAqIDEwMDApO1xuICAgIHRoaXMucXVlcnlTdGFydERhdGVWYWx1ZSA9IHRoaXMucXVlcnlFbmREYXRlVmFsdWUgLSAoNyAqIDI0ICogMzYwMCAqIDEwMDApO1xuICAgIHRoaXMudFF1ZXJ5SW50ZXJ2YWwgPSAyMCAqIDEwMDA7XG4gICAgdGhpcy50TGFzdFF1ZXJ5ID0gMDtcbiAgICB0aGlzLnRhc2tEb2NzID0ge1xuICAgICAgZGF0ZXM6IHRoaXMuZ2V0RGF0ZUFycmF5KHRoaXMucXVlcnlTdGFydERhdGVWYWx1ZSwgdGhpcy5xdWVyeUVuZERhdGVWYWx1ZSlcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEFnZW50TGlzdCgpIHtcbiAgICBcbiAgICBsZXQgc3R1ZmYgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdtYXJtb3NldHMnKS5nZXQoKS50aGVuKHNuYXBzaG90ID0+IHtcbiAgICAgIHJldHVybiBzbmFwc2hvdC5kb2NzLm1hcCh4ID0+IHguZGF0YSgpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdHVmZjtcblxuICB9XG5cbiAgcHVibGljIGFzeW5jIHF1ZXJ5Q2FsbGJhY2soc25hcHNob3Q6IGZpcmViYXNlLmZpcmVzdG9yZS5RdWVyeVNuYXBzaG90PGZpcmViYXNlLmZpcmVzdG9yZS5Eb2N1bWVudERhdGE+KSB7XG4gICAgaWYgKHRoaXMudExhc3RRdWVyeSA9PT0gMCB8fCBEYXRlLm5vdygpIC0gdGhpcy50TGFzdFF1ZXJ5ID4gdGhpcy50UXVlcnlJbnRlcnZhbCkge1xuICAgICAgdGhpcy5wcm9jZXNzRGF0YShzbmFwc2hvdCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzRGF0YShzbmFwc2hvdDogZmlyZWJhc2UuZmlyZXN0b3JlLlF1ZXJ5U25hcHNob3Q8ZmlyZWJhc2UuZmlyZXN0b3JlLkRvY3VtZW50RGF0YT4pIHtcbiAgICBcbiAgICBjb25zb2xlLmxvZygnc25hcHNob3QnLCBzbmFwc2hvdCk7XG4gICAgbGV0IGRhdGE6IGFueVtdID0gW107XG4gICAgbGV0IGFnZW50TGlzdDogc3RyaW5nW10gPSBbXTtcbiAgICBzbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICBsZXQgZCA9IGRvYy5kYXRhKCk7XG4gICAgICBsZXQgYWdlbnRJZHggPSBhZ2VudExpc3QuaW5kZXhPZihkLkFnZW50KTtcbiAgICAgIGxldCBkYXRlU3RyaW5nID0gbmV3IERhdGUoZC5DdXJyZW50RGF0ZVZhbHVlKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgIGxldCByOiBtYXRoLk1hdHJpeDtcbiAgICAgIGxldCBjOiBtYXRoLk1hdHJpeDtcbiAgICAgIGxldCBudW1Db3JyZWN0OiBudW1iZXI7XG4gICAgICBsZXQgbnVtVHJpYWxzOiBudW1iZXI7XG4gICAgICBsZXQgdExhc3RUcmlhbDogbnVtYmVyO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkLlJlc3BvbnNlKSkge1xuICAgICAgICByID0gbWF0cml4KGQuUmVzcG9uc2UpO1xuICAgICAgICBjID0gbWF0cml4KGQuQ29ycmVjdEl0ZW0pO1xuICAgICAgICBudW1Db3JyZWN0ID0gKDxtYXRoLk1hdHJpeD5maWx0ZXIoc3VidHJhY3QociwgYykgYXMgbWF0aC5NYXRyaXgsIGVsID0+IGVsID09IDApKS5zaXplKClbMF07XG4gICAgICAgIG51bVRyaWFscyA9IGQuUmVzcG9uc2UubGVuZ3RoO1xuICAgICAgICB0TGFzdFRyaWFsID0gZC5DdXJyZW50RGF0ZVZhbHVlICsgZC5TdGFydFRpbWVbZC5TdGFydFRpbWUubGVuZ3RoIC0gMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47IC8vIHNraXAgdG8gbmV4dCBpdGVyYXRpb24gc2luY2UgZC5SZXNwb25zZSBpcyB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGFnZW50SWR4ID4gLTEpIHtcbiAgICAgICAgbGV0IGRhdGVJZHggPSBkYXRhW2FnZW50SWR4XVsnZGF0ZXMnXS5pbmRleE9mKGRhdGVTdHJpbmcpO1xuICAgICAgICBpZiAoZGF0ZUlkeCA+IC0xKSB7XG4gICAgICAgICAgZGF0YVthZ2VudElkeF1bJ251bVRyaWFscyddW2RhdGVJZHhdICs9IG51bVRyaWFscztcbiAgICAgICAgICBkYXRhW2FnZW50SWR4XVsnbnVtQ29ycmVjdCddW2RhdGVJZHhdICs9IG51bUNvcnJlY3Q7XG4gICAgICAgICAgZGF0YVthZ2VudElkeF1bJ3RMYXN0VHJpYWwnXSA9IHRMYXN0VHJpYWw7XG4gICAgICAgICAgdGhpcy50YXNrRG9jc1tkLkFnZW50XVtkYXRlU3RyaW5nXS5wdXNoKGQpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXNlIDE6JywgZC5BZ2VudCwgZGF0ZVN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YVthZ2VudElkeF1bJ2RhdGVzJ10ucHVzaChkYXRlU3RyaW5nKTtcbiAgICAgICAgICBkYXRhW2FnZW50SWR4XVsnbnVtVHJpYWxzJ10ucHVzaChudW1UcmlhbHMpO1xuICAgICAgICAgIGRhdGFbYWdlbnRJZHhdWydudW1Db3JyZWN0J10ucHVzaChudW1Db3JyZWN0KTtcbiAgICAgICAgICBkYXRhW2FnZW50SWR4XVsndExhc3RUcmlhbCddID0gdExhc3RUcmlhbDtcbiAgICAgICAgICB0aGlzLnRhc2tEb2NzW2QuQWdlbnRdW2RhdGVTdHJpbmddID0gW2RdO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXNlIDI6JywgZC5BZ2VudCwgZGF0ZVN0cmluZyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFnZW50TGlzdC5wdXNoKGQuQWdlbnQpO1xuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgIGFnZW50OiBkLkFnZW50LFxuICAgICAgICAgIGRhdGVzOiBbZGF0ZVN0cmluZ10sXG4gICAgICAgICAgbnVtVHJpYWxzOiBbbnVtVHJpYWxzXSxcbiAgICAgICAgICBudW1Db3JyZWN0OiBbbnVtQ29ycmVjdF0sXG4gICAgICAgICAgdExhc3RUcmlhbDogdExhc3RUcmlhbFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50YXNrRG9jcyk7XG4gICAgICAgIHRoaXMudGFza0RvY3NbZC5BZ2VudF0gPSB7fTtcbiAgICAgICAgdGhpcy50YXNrRG9jc1tkLkFnZW50XVtkYXRlU3RyaW5nXSA9IFtkXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nhc2UgMzonLCBkLkFnZW50LCBkYXRlU3RyaW5nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnRMYXN0UXVlcnkgPT0gMCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy50YWJsZSk7XG4gICAgICB0aGlzLmNvbnN0cnVjdFRhYmxlKGRhdGEpO1xuICAgICAgdGhpcy50TGFzdFF1ZXJ5ID0gRGF0ZS5ub3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVUYWJsZShkYXRhKTtcbiAgICAgIHRoaXMudExhc3RRdWVyeSA9IERhdGUubm93KCk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RUYWJsZShkYXRhOiBhbnlbXSkge1xuXG4gICAgbGV0IGJ1aWxkU3R1ZmYgPSAoZDogYW55KSA9PiB7XG4gICAgICB0aGlzLmJ1aWxkUGxvdHMoZCk7XG4gICAgfVxuXG4gICAgbGV0IHJldHVyblRhc2tEb2NzID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudGFza0RvY3M7XG4gICAgfVxuXG4gICAgbGV0IHZpZXdlciA9IHRoaXMudmlld2VyO1xuXG4gICAgZnVuY3Rpb24gbnVtVHJpYWxNdXRhdG9yKHZhbHVlOiBhbnksIGRhdGE6IGFueSwgdHlwZTogYW55LCBwYXJhbXM6IGFueSwgY29tcG9uZW50OiBhbnkpIHtcbiAgICAgIGlmIChwYXJhbXMucmFuZ2UgPT0gMjQpIHtcbiAgICAgICAgbGV0IGRhdGVTdHJpbmdUb2RheSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIGxldCBpZHggPSBkYXRhWydkYXRlcyddLmluZGV4T2YoZGF0ZVN0cmluZ1RvZGF5KTtcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgcmV0dXJuIGRhdGFbJ251bVRyaWFscyddW2lkeF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyYW1zLnJhbmdlID09IDQ4KSB7XG4gICAgICAgIGlmIChkYXRhWydudW1UcmlhbHMnXS5zbGljZSgxKS5zbGljZSgtMikubGVuZ3RoIDwgMikge1xuICAgICAgICAgIHJldHVybiBOYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG51bVRyaWFsc1N1bSA9IChcbiAgICAgICAgICAgIGRhdGFbJ251bVRyaWFscyddLnNsaWNlKDEpLnNsaWNlKC0yKS5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiBhICsgYiwgMClcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBudW1UcmlhbHNTdW0gLyAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGN0Q29ycmVjdE11dGF0b3IodmFsdWU6IGFueSwgZGF0YTogYW55LCB0eXBlOiBhbnksIHBhcmFtczogYW55LCBjb21wb25lbnQ6IGFueSkge1xuICAgICAgaWYgKHBhcmFtcy5yYW5nZSA9PSAyNCkge1xuICAgICAgICBsZXQgZGF0ZVN0cmluZ1RvZGF5ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgbGV0IGlkeCA9IGRhdGFbJ2RhdGVzJ10uaW5kZXhPZihkYXRlU3RyaW5nVG9kYXkpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChkYXRhWydudW1Db3JyZWN0J11baWR4XSAvIGRhdGFbJ251bVRyaWFscyddW2lkeF0gKiAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5yYW5nZSA9PSA0OCkge1xuICAgICAgICBpZiAoZGF0YVsnbnVtQ29ycmVjdCddLnNsaWNlKDEpLnNsaWNlKC0yKS5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbnVtQ29ycmVjdFN1bSA9IChcbiAgICAgICAgICAgIGRhdGFbJ251bUNvcnJlY3QnXS5zbGljZSgxKS5zbGljZSgtMikucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4gYSArIGIsIDApXG4gICAgICAgICAgKTtcbiAgICAgICAgICBsZXQgbnVtVHJpYWxzU3VtID0gKFxuICAgICAgICAgICAgZGF0YVsnbnVtVHJpYWxzJ10uc2xpY2UoMSkuc2xpY2UoLTIpLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IGEgKyBiLCAwKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtQ29ycmVjdFN1bSAvIG51bVRyaWFsc1N1bSAqIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0U2luY2VMYXN0VHJpYWwodmFsdWU6IGFueSwgZGF0YTogYW55LCB0eXBlOiBhbnksIHBhcmFtczogYW55LCBjb21wb25lbnQ6IGFueSkge1xuICAgICAgbGV0IGR0dCA9IERhdGUubm93KCk7XG4gICAgICBjb25zb2xlLmxvZyhkdHQpO1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQoKGR0dCAtIGRhdGEudExhc3RUcmlhbCkgLyAxMDAwIC8gNjApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRMYXN0VHJpYWxGb3JtYXQoY2VsbDogVGFidWxhdG9yLkNlbGxDb21wb25lbnQpIHtcbiAgICAgIGlmIChjZWxsLmdldFZhbHVlKCkgPD0gNSkge1xuICAgICAgICBjZWxsLmdldEVsZW1lbnQoKS5zdHlsZS5iYWNrZ3JvdW5kID0gJyMxOTg3NTQnO1xuICAgICAgICBjZWxsLmdldEVsZW1lbnQoKS5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICB9IGVsc2UgaWYgKGNlbGwuZ2V0VmFsdWUoKSA+IDUgJiYgY2VsbC5nZXRWYWx1ZSgpIDwgNjApIHtcbiAgICAgICAgY2VsbC5nZXRFbGVtZW50KCkuc3R5bGUuYmFja2dyb3VuZCA9ICcjZGMzNTQ1JztcbiAgICAgICAgY2VsbC5nZXRFbGVtZW50KCkuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNlbGwuZ2V0VmFsdWUoKTtcbiAgICB9XG5cbiAgICBsZXQgdmlld2VyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrZG9jLXZpZXdlcicpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgdGhpcy50YWJsZSA9IG5ldyBUYWJ1bGF0b3IodGhpcy50YWJsZUVsZW0sIHtcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBjZWxsVmVydEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGxheW91dDogJ2ZpdERhdGEnLFxuICAgICAgY29sdW1uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdBZ2VudCcsXG4gICAgICAgICAgZmllbGQ6ICdhZ2VudCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnJSAodG9kYXkpJyxcbiAgICAgICAgICBmaWVsZDogJ3BjdENvcnJlY3RUb2RheScsXG4gICAgICAgICAgbXV0YXRvcjogcGN0Q29ycmVjdE11dGF0b3IsXG4gICAgICAgICAgbXV0YXRvclBhcmFtczogeyByYW5nZTogMjQgfSxcbiAgICAgICAgICBob3pBbGlnbjogJ3JpZ2h0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICduICh0b2RheSknLFxuICAgICAgICAgIGZpZWxkOiAnbnVtVHJpYWxzVG9kYXknLFxuICAgICAgICAgIG11dGF0b3I6IG51bVRyaWFsTXV0YXRvcixcbiAgICAgICAgICBtdXRhdG9yUGFyYW1zOiB7IHJhbmdlOiAyNCB9LFxuICAgICAgICAgIGhvekFsaWduOiAncmlnaHQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJyUgKC0yZCknLFxuICAgICAgICAgIGZpZWxkOiAncGN0Q29ycmVjdEF2ZycsXG4gICAgICAgICAgbXV0YXRvcjogcGN0Q29ycmVjdE11dGF0b3IsXG4gICAgICAgICAgbXV0YXRvclBhcmFtczogeyByYW5nZTogNDggfSxcbiAgICAgICAgICBob3pBbGlnbjogJ3JpZ2h0J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICduICgtMmQpJyxcbiAgICAgICAgICBmaWVsZDogJ251bVRyaWFsc0F2ZycsXG4gICAgICAgICAgbXV0YXRvcjogbnVtVHJpYWxNdXRhdG9yLFxuICAgICAgICAgIG11dGF0b3JQYXJhbXM6IHsgcmFuZ2U6IDQ4IH0sXG4gICAgICAgICAgaG96QWxpZ246ICdyaWdodCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAndExhc3QnLFxuICAgICAgICAgIGZpZWxkOiAndFNpbmNlTGFzdFRyaWFsJyxcbiAgICAgICAgICBtdXRhdG9yOiB0U2luY2VMYXN0VHJpYWwsXG4gICAgICAgICAgZm9ybWF0dGVyOiB0TGFzdFRyaWFsRm9ybWF0LFxuICAgICAgICAgIGhvekFsaWduOiAncmlnaHQnXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgXSxcbiAgICAgIHRvb2x0aXBzOiB0cnVlLFxuICAgICAgZGF0YUxvYWRlZDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBidWlsZFN0dWZmKGRhdGEpO1xuICAgICAgICAvLyBsZXQgdG1wID0gcmV0dXJuVGFza0RvY3MoKTtcbiAgICAgICAgXG4gICAgICB9LFxuICAgICAgcm93Q2xpY2soZXZ0LCByb3cpIHtcbiAgICAgICAgbGV0IHRhc2tEb2NzID0gcmV0dXJuVGFza0RvY3MoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Rhc2tEb2NzOicsIHRhc2tEb2NzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JvdyBjbGlja2VkOicsIHRhc2tEb2NzW3Jvdy5nZXREYXRhKCkuYWdlbnRdKTtcblxuICAgICAgICBsZXQgdGFza0RvY3NLZXlzID0gT2JqZWN0LmtleXModGFza0RvY3Nbcm93LmdldERhdGEoKS5hZ2VudF0pO1xuICAgICAgICBsZXQgbW9zdFJlY2VudERhdGUgPSB0YXNrRG9jc0tleXNbdGFza0RvY3NLZXlzLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zb2xlLmxvZyhtb3N0UmVjZW50RGF0ZSk7XG4gICAgICAgIGxldCByZWNlbnRUYXNrRG9jcyA9IHRhc2tEb2NzW3Jvdy5nZXREYXRhKCkuYWdlbnRdW21vc3RSZWNlbnREYXRlXTtcbiAgICAgICAgY29uc29sZS5sb2cocmVjZW50VGFza0RvY3MpO1xuICAgICAgICBcblxuICAgICAgICAvLyBOZWVkIHRoaXMgdHJ5LWNhdGNoIGJsb2NrIGJlY2F1c2UgSlNPTkVkaXRvci5nZXQoKSB0aHJvd3MgYW4gZXJyb3IgaWYgbm8gZGF0YSBpcyBsb2FkZWRcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2aWV3ZXIuZ2V0KCk7IFxuICAgICAgICAgIHZpZXdlci51cGRhdGUocmVjZW50VGFza0RvY3NbcmVjZW50VGFza0RvY3MubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICBsZXQgb3B0aW9uczogSlNPTkVkaXRvck9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtb2RlczogWyd0cmVlJyBhcyAndHJlZScsICdjb2RlJyBhcyAnY29kZSddLFxuICAgICAgICAgICAgc29ydE9iamVjdEtleXM6IHRydWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZpZXdlciA9IG5ldyBKU09ORWRpdG9yKHZpZXdlckVsZW0sIG9wdGlvbnMsIHJlY2VudFRhc2tEb2NzW3JlY2VudFRhc2tEb2NzLmxlbmd0aCAtIDFdKTsgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBcblxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUYWJsZShkYXRhOiBhbnlbXSkge1xuICAgIHRoaXMudGFibGUucmVwbGFjZURhdGEoZGF0YSk7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJEb21FbGVtZW50KHR5cGU6IHN0cmluZywgZWxlbTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3RhYmxlJykge1xuICAgICAgY29uc29sZS5sb2coZWxlbSk7XG4gICAgICB0aGlzLnRhYmxlRWxlbSA9IGVsZW07XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZWRpdG9yJykge1xuICAgICAgdGhpcy5lZGl0b3JFbGVtID0gZWxlbTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdwZXJmLXBsb3QnKSB7XG4gICAgICB0aGlzLnBlcmZvcm1hbmNlUGxvdEVsZW0gPSBlbGVtO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRQbG90cyhkYXRhOiBhbnlbXSkge1xuXG4gICAgLy8gZWFjaCByb3cgaG9sZHMgb25lIGFnZW50J3MgZGF0YVxuICAgIGxldCBxdWVyeURhdGVSYW5nZUFycmF5U3RyID0gdGhpcy5nZXREYXRlQXJyYXkodGhpcy5xdWVyeVN0YXJ0RGF0ZVZhbHVlLCB0aGlzLnF1ZXJ5RW5kRGF0ZVZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhxdWVyeURhdGVSYW5nZUFycmF5U3RyKTtcbiAgICBkYXRhLmZvckVhY2gocm93ID0+IHtcbiAgICAgIHJvd1sncGVyZm9ybWFuY2UnXSA9IChcbiAgICAgICAgcm91bmQoZG90TXVsdGlwbHkoMTAwLCBkb3REaXZpZGUocm93WydudW1Db3JyZWN0J10sIHJvd1snbnVtVHJpYWxzJ10pKSBhcyBtYXRoLk1hdGhBcnJheSlcbiAgICAgICk7XG4gICAgICByb3dbJ19wZXJmb3JtYW5jZSddID0gcXVlcnlEYXRlUmFuZ2VBcnJheVN0ci5tYXAoKGRhdGU6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAocm93WydkYXRlcyddLmluY2x1ZGVzKGRhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHJvd1sncGVyZm9ybWFuY2UnXS5zaGlmdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKHJvd1snX3BlcmZvcm1hbmNlJ10pO1xuICAgICAgcm93WydfbnVtVHJpYWxzJ10gPSBxdWVyeURhdGVSYW5nZUFycmF5U3RyLm1hcCgoZGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChyb3dbJ2RhdGVzJ10uaW5jbHVkZXMoZGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcm93WydudW1UcmlhbHMnXS5zaGlmdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBcbiAgICBsZXQgcXVlcnlEYXRlUmFuZ2VBcnJheSA9IHF1ZXJ5RGF0ZVJhbmdlQXJyYXlTdHIubWFwKGQzLnRpbWVQYXJzZSgnJW0vJWQvJVknKSk7XG5cbiAgICBsZXQgZDNEYXRhID0ge1xuICAgICAgeTogJ051bWJlciBvZiBUcmlhbHMnLFxuICAgICAgc2VyaWVzOiBkYXRhLFxuICAgICAgZGF0ZXM6IHF1ZXJ5RGF0ZVJhbmdlQXJyYXlcbiAgICB9XG4gICAgXG4gICAgbGV0IHN2Z051bVRyaWFsczogZDMuU2VsZWN0aW9uPFNWR1NWR0VsZW1lbnQsIHVua25vd24sIEhUTUxFbGVtZW50LCBhbnk+O1xuICAgIGxldCBzdmdQZXJmb3JtYW5jZTogZDMuU2VsZWN0aW9uPFNWR1NWR0VsZW1lbnQsIHVua25vd24sIEhUTUxFbGVtZW50LCBhbnk+O1xuICAgIGxldCB3aWR0aCA9ICg8SFRNTEVsZW1lbnQ+ZDMuc2VsZWN0KCcjbnVtLXRyaWFscy1wbG90Jykubm9kZSgpKS5jbGllbnRXaWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gKDxIVE1MRWxlbWVudD5kMy5zZWxlY3QoJyNudW0tdHJpYWxzLXBsb3QnKS5ub2RlKCkpLmNsaWVudEhlaWdodDtcbiAgICBsZXQgbWFyZ2luID0geyB0b3A6IDIwLCBib3R0b206IDMwLCByaWdodDogMTUwLCBsZWZ0OiA1MCwgbGVnZW5kT2Zmc2V0OiAzMCB9O1xuXG4gICAgbGV0IHggPSBkMy5zY2FsZVRpbWUoKVxuICAgICAgLmRvbWFpbig8W0RhdGUsIERhdGVdPmQzLmV4dGVudChkM0RhdGEuZGF0ZXMsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBkIH0pKVxuICAgICAgLnJhbmdlKFttYXJnaW4ubGVmdCwgd2lkdGggLSBtYXJnaW4ucmlnaHRdKTtcblxuICAgIGxldCB5TnVtVHJpYWxzID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgPGFueT5kMy5tYXgoZDNEYXRhLnNlcmllcywgZCA9PiBkMy5tYXgoZFsnX251bVRyaWFscyddKSldKVxuICAgICAgLnJhbmdlKFtoZWlnaHQgLSBtYXJnaW4uYm90dG9tLCBtYXJnaW4udG9wXSk7XG5cbiAgICBsZXQgeVBlcmZvcm1hbmNlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgMTAwXSlcbiAgICAgIC5yYW5nZShbaGVpZ2h0IC0gbWFyZ2luLmJvdHRvbSwgbWFyZ2luLnRvcF0pO1xuICAgIFxuICAgIGlmIChkMy5zZWxlY3QoJ3N2ZycpLnNpemUoKSA9PSAwKSB7XG4gICAgICBzdmdOdW1UcmlhbHMgPSAoXG4gICAgICAgIGQzLnNlbGVjdCgnI251bS10cmlhbHMtcGxvdCcpXG4gICAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgICAuYXR0cignaWQnLCAnbnVtLXRyaWFscy1zdmcnKVxuICAgICAgICAgIC5hdHRyKCdzdHlsZScsICd3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlJylcbiAgICAgICk7XG4gICAgICBzdmdOdW1UcmlhbHNcbiAgICAgICAgLmF0dHIoJ3ZpZXdCb3gnLCBgMCAwICR7d2lkdGh9ICR7aGVpZ2h0fWApXG4gICAgICAgIC5zdHlsZShcIm92ZXJmbG93XCIsIFwidmlzaWJsZVwiKTtcblxuICAgICAgc3ZnUGVyZm9ybWFuY2UgPSAoXG4gICAgICAgIGQzLnNlbGVjdCgnI3BlcmZvcm1hbmNlLXBsb3QnKVxuICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgLmF0dHIoJ2lkJywgJ3BlcmZvcm1hbmNlLXN2ZycpXG4gICAgICAgICAgLmF0dHIoJ3N0eWxlJywgJ3dpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCUnKVxuICAgICAgICAgIC5hdHRyKCd2aWV3Qm94JywgYDAgMCAke3dpZHRofSAke2hlaWdodH1gKVxuICAgICAgICAgIC5zdHlsZShcIm92ZXJmbG93XCIsIFwidmlzaWJsZVwiKVxuICAgICAgKTtcblxuICAgICAgbGV0IHhBeGlzID0gKGc6IGFueSkgPT4gZ1xuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHtoZWlnaHQgLSBtYXJnaW4uYm90dG9tfSlgKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxNXB4JylcbiAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbTxEYXRlPih4KS50aWNrcyg3KS50aWNrU2l6ZU91dGVyKDApLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdCgnJWEnKSkpO1xuXG4gICAgICBsZXQgeUF4aXNOdW1UcmlhbHMgPSAoZzogYW55KSA9PiBnXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHttYXJnaW4ubGVmdH0sIDApYClcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAxNClcbiAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeU51bVRyaWFscykudGlja0Zvcm1hdChkMy5mb3JtYXQoJycpKS50aWNrU2l6ZSgtKHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQpKSlcbiAgICAgICAgLmNhbGwoKGc6IGFueSkgPT4gZy5zZWxlY3QoXCIuZG9tYWluXCIpLnJlbW92ZSgpKTtcbiAgICAgICAgLy8gLmNhbGwoKGc6IGFueSkgPT4gZy5zZWxlY3QoXCIudGljazpsYXN0LW9mLXR5cGUgdGV4dFwiKS5jbG9uZSgpXG4gICAgICAgIC8vICAgICAuYXR0cihcInhcIiwgMylcbiAgICAgICAgLy8gICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJzdGFydFwiKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJmb250LXdlaWdodFwiLCBcImJvbGRcIilcbiAgICAgICAgLy8gICAgIC50ZXh0KGQzRGF0YS55KSk7XG5cbiAgICAgIGxldCB5QXhpc1BlcmZvcm1hbmNlID0gKGc6IGFueSkgPT4gZ1xuICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgMClgKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIDE0KVxuICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5UGVyZm9ybWFuY2UpLnRpY2tzKDUpLnRpY2tGb3JtYXQoZDMuZm9ybWF0KCcnKSkudGlja1NpemUoLSh3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0KSkpXG4gICAgICAgIC5jYWxsKChnOiBhbnkpID0+IGcuc2VsZWN0KCcuZG9tYWluJykucmVtb3ZlKCkpO1xuICAgICAgICAvLyAuY2FsbCgoZzogYW55KSA9PiBnLnNlbGVjdChcIi50aWNrOmxhc3Qtb2YtdHlwZSB0ZXh0XCIpLmNsb25lKClcbiAgICAgICAgLy8gLmF0dHIoXCJ4XCIsIDMpXG4gICAgICAgIC8vICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIilcbiAgICAgICAgLy8gICAgIC5hdHRyKFwiZm9udC13ZWlnaHRcIiwgXCJib2xkXCIpXG4gICAgICAgIC8vICAgICAudGV4dCgnUGVyZm9ybWFuY2UnKSk7XG5cbiAgICAgIHN2Z051bVRyaWFscy5hcHBlbmQoJ2cnKVxuICAgICAgICAuY2FsbCh4QXhpcyk7XG4gIFxuICAgICAgc3ZnTnVtVHJpYWxzLmFwcGVuZCgnZycpXG4gICAgICAgIC5jYWxsKHlBeGlzTnVtVHJpYWxzKTtcblxuICAgICAgc3ZnUGVyZm9ybWFuY2UuYXBwZW5kKCdnJylcbiAgICAgICAgLmNhbGwoeEF4aXMpO1xuXG4gICAgICBzdmdQZXJmb3JtYW5jZS5hcHBlbmQoJ2cnKVxuICAgICAgICAuY2FsbCh5QXhpc1BlcmZvcm1hbmNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnTnVtVHJpYWxzID0gZDMuc2VsZWN0KCcjbnVtLXRyaWFscy1zdmcnKTtcbiAgICAgIHN2Z1BlcmZvcm1hbmNlID0gZDMuc2VsZWN0KCcjcGVyZm9ybWFuY2Utc3ZnJyk7XG4gICAgICAvLyBkMy5zZWxlY3RBbGwoJ3BhdGgubGluZScpLnJlbW92ZSgpO1xuICAgICAgZDMuc2VsZWN0QWxsKCdwYXRoJykucmVtb3ZlKCk7XG4gICAgICBkMy5zZWxlY3RBbGwoJ2cuZG90JykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgbGV0IGxpbmVzTnVtVHJpYWxzID0gZDMubGluZTxhbnk+KClcbiAgICAgIC5kZWZpbmVkKGQgPT4gIWlzTmFOKGQpKVxuICAgICAgLngoKGQsIGkpID0+IHgoZDNEYXRhLmRhdGVzW2ldIGFzIERhdGUpKVxuICAgICAgLnkoKGQsIGkpID0+IHlOdW1UcmlhbHMoZCkpO1xuXG4gICAgbGV0IGxpbmVzUGVyZm9ybWFuY2UgPSBkMy5saW5lPGFueT4oKVxuICAgICAgLmRlZmluZWQoZCA9PiAhaXNOYU4oZCkpXG4gICAgICAueCgoZCwgaSkgPT4geChkM0RhdGEuZGF0ZXNbaV0gYXMgRGF0ZSkpXG4gICAgICAueSgoZCwgaSkgPT4geVBlcmZvcm1hbmNlKGQpKTtcblxuICAgIGNvbnNvbGUubG9nKGQzRGF0YSk7XG4gICAgXG5cbiAgICBsZXQgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lVGFibGVhdTEwKTtcblxuICAgIGxldCBudW1UcmlhbHNQYXRoID0gKFxuICAgICAgc3ZnTnVtVHJpYWxzLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMilcbiAgICAgICAgLmF0dHIoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIilcbiAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAuZGF0YShkM0RhdGEuc2VyaWVzKVxuICAgICAgLmpvaW4oJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ21peC1ibGVuZC1tb2RlJywgJ211bHRpcGx5JylcbiAgICAgICAgLmF0dHIoJ2QnLCBkID0+IGxpbmVzTnVtVHJpYWxzKGRbJ19udW1UcmlhbHMnXSkpXG4gICAgICAgIC5hdHRyKCdzdHJva2UnLCAoZCwgaSkgPT4gY29sb3IoZC5hZ2VudCkpXG4gICAgICAgIC5hdHRyKCdpZCcsIChkLCBpKSA9PiBkLmFnZW50KVxuICAgICk7XG5cbiAgICBsZXQgcGVyZm9ybWFuY2VQYXRoID0gKFxuICAgICAgc3ZnUGVyZm9ybWFuY2UuYXBwZW5kKCdnJylcbiAgICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKVxuICAgICAgICAuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLmRhdGEoZDNEYXRhLnNlcmllcylcbiAgICAgICAgLmpvaW4oJ3BhdGgnKVxuICAgICAgICAgIC8vIC5zdHlsZSgnbWl4LWJsZW5kLW1vZGUnLCAnbXVsdGlwbHknKVxuICAgICAgICAgIC5hdHRyKCdkJywgZCA9PiBsaW5lc1BlcmZvcm1hbmNlKGRbJ19wZXJmb3JtYW5jZSddKSlcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywgKGQsIGkpID0+IGNvbG9yKGQuYWdlbnQpKVxuICAgICAgICAgIC5hdHRyKCdpZCcsIChkLCBpKSA9PiBkLmFnZW50KVxuICAgICk7XG5cbiAgICBkM0RhdGEuc2VyaWVzLmZvckVhY2goKGQ6IGFueSwgaTogbnVtYmVyKSA9PiB7XG5cbiAgICAgIHN2Z1BlcmZvcm1hbmNlLmFwcGVuZCgnZycpXG4gICAgICAgIC5hdHRyKCdjbGFzcycsICdsZWdlbmQnKVxuICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgIC5hdHRyKCdjeCcsIHdpZHRoIC0gbWFyZ2luLnJpZ2h0ICsgbWFyZ2luLmxlZ2VuZE9mZnNldClcbiAgICAgICAgICAuYXR0cignY3knLCAoKSA9PiB7IHJldHVybiBtYXJnaW4udG9wICsgaSAqIDI1fSlcbiAgICAgICAgICAuYXR0cigncicsIDcpXG4gICAgICAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4geyByZXR1cm4gY29sb3IoZC5hZ2VudCk7IH0pO1xuICAgICAgLy8gc3ZnUGVyZm9ybWFuY2VcbiAgICAgIC8vICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgIC8vICAgICAuYXR0cignY3gnLCB3aWR0aCAtIG1hcmdpbi5yaWdodCArIG1hcmdpbi5sZWdlbmRPZmZzZXQpXG4gICAgICAvLyAgICAgLmF0dHIoJ2N5JywgKCkgPT4geyByZXR1cm4gbWFyZ2luLnRvcCArIGkgKiAyNX0pXG4gICAgICAvLyAgICAgLmF0dHIoJ3InLCA3KVxuICAgICAgLy8gICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IHsgcmV0dXJuIGNvbG9yKGQuYWdlbnQpOyB9KTtcbiAgICAgIHN2Z1BlcmZvcm1hbmNlLnNlbGVjdCgnZy5sZWdlbmQnKVxuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cigneCcsIHdpZHRoIC0gbWFyZ2luLnJpZ2h0ICsgbWFyZ2luLmxlZ2VuZE9mZnNldCArIDIwKVxuICAgICAgICAgIC5hdHRyKCd5JywgKCkgPT4geyByZXR1cm4gbWFyZ2luLnRvcCArIGkgKiAyNTsgfSlcbiAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiB7IHJldHVybiBjb2xvcihkLmFnZW50KTsgfSlcbiAgICAgICAgICAudGV4dCgoKSA9PiB7IHJldHVybiBkLmFnZW50OyB9KVxuICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdsZWZ0JylcbiAgICAgICAgICAuYXR0cignYWxpZ25tZW50LWJhc2VsaW5lJywgJ21pZGRsZScpO1xuICAgICAgLy8gc3ZnUGVyZm9ybWFuY2VcbiAgICAgIC8vICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAvLyAgICAgLmF0dHIoJ3gnLCB3aWR0aCAtIG1hcmdpbi5yaWdodCArIG1hcmdpbi5sZWdlbmRPZmZzZXQgKyAyMClcbiAgICAgIC8vICAgICAuYXR0cigneScsICgpID0+IHsgcmV0dXJuIG1hcmdpbi50b3AgKyBpICogMjU7IH0pXG4gICAgICAvLyAgICAgLnN0eWxlKCdmaWxsJywgKCkgPT4geyByZXR1cm4gY29sb3IoZC5hZ2VudCk7IH0pXG4gICAgICAvLyAgICAgLnRleHQoKCkgPT4geyByZXR1cm4gZC5hZ2VudDsgfSlcbiAgICAgIC8vICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnbGVmdCcpXG4gICAgICAvLyAgICAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKTtcblxuICAgICAgc3ZnTnVtVHJpYWxzXG4gICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgLmF0dHIoJ2N4Jywgd2lkdGggLSBtYXJnaW4ucmlnaHQgKyBtYXJnaW4ubGVnZW5kT2Zmc2V0KVxuICAgICAgICAgIC5hdHRyKCdjeScsICgpID0+IHsgcmV0dXJuIG1hcmdpbi50b3AgKyBpICogMjV9KVxuICAgICAgICAgIC5hdHRyKCdyJywgNylcbiAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAoKSA9PiB7IHJldHVybiBjb2xvcihkLmFnZW50KTsgfSk7XG5cbiAgICAgIHN2Z051bVRyaWFsc1xuICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAuYXR0cigneCcsIHdpZHRoIC0gbWFyZ2luLnJpZ2h0ICsgbWFyZ2luLmxlZ2VuZE9mZnNldCsgMjApXG4gICAgICAgICAgLmF0dHIoJ3knLCAoKSA9PiB7IHJldHVybiBtYXJnaW4udG9wICsgaSAqIDI1OyB9KVxuICAgICAgICAgIC5zdHlsZSgnZmlsbCcsICgpID0+IHsgcmV0dXJuIGNvbG9yKGQuYWdlbnQpOyB9KVxuICAgICAgICAgIC50ZXh0KCgpID0+IHsgcmV0dXJuIGQuYWdlbnQ7IH0pXG4gICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ2xlZnQnKVxuICAgICAgICAgIC5hdHRyKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCAnbWlkZGxlJyk7XG4gICAgfSk7XG4gICAgXG4gICAgXG4gICAgY29uc3QgbnVtVHJpYWxzQWN0aW9uID0gKHN2ZzogZDMuU2VsZWN0aW9uPFNWR1NWR0VsZW1lbnQsIHVua25vd24sIEhUTUxFbGVtZW50LCBhbnk+ICwgcGF0aDogZDMuU2VsZWN0aW9uPFNWR1BhdGhFbGVtZW50LCBhbnksIFNWR0VsZW1lbnQsIHVua25vd24+KSA9PiB7XG4gICAgICBcbiAgICAgIGxldCBwYXRoQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgbGV0IGRvdENsaWNrZWQgPSBmYWxzZTtcbiAgICAgIGxldCBjbGlja2VkRG90OiBhbnk7XG5cbiAgICAgIHN2Z1xuICAgICAgICAub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgbGV0IHRhcmdldCA9IGQzLnNlbGVjdChlLnRhcmdldCkubm9kZSgpO1xuICAgICAgICAgIGlmICghcGF0aENsaWNrZWQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgIHBhdGguYXR0cignc3Ryb2tlLXdpZHRoJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQuYWdlbnQgPT09IHRhcmdldC5pZCA/IDQgOiAyO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhdGguYXR0cignc3Ryb2tlLXdpZHRoJywgMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQubm9kZU5hbWUgPT0gJ2NpcmNsZScgJiYgZG90Q2xpY2tlZCA9PSB0cnVlKSB7ICAgICBcbiAgICAgICAgICAgICAgaWYgKHRhcmdldCAhPSBjbGlja2VkRG90KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RhcmdldDonLCB0YXJnZXQsICdjbGlja2VkRG90OicsIGNsaWNrZWREb3QpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3InLCA0LjUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQubm9kZU5hbWUgPT0gJ2NpcmNsZScgJiYgZG90Q2xpY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBkMy5zZWxlY3QodGFyZ2V0KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdyJywgNC41KTtcbiAgICAgICAgICAgICAgLy8gc3ZnLnNlbGVjdEFsbCgnZy5kb3QgY2lyY2xlJykuYXR0cigncicsIDQuNSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5ub2RlTmFtZSAhPSAnY2lyY2xlJyAmJiBkb3RDbGlja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGQzLnNlbGVjdEFsbCgnZy5kb3QgY2lyY2xlJykuYXR0cigncicsIDIuNSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5ub2RlTmFtZSAhPSAnY2lyY2xlJyAmJiBkb3RDbGlja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCdnLmRvdCBjaXJjbGUnKS5hdHRyKCdyJywgMi41KTtcbiAgICAgICAgICAgICAgZDMuc2VsZWN0KGNsaWNrZWREb3QpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3InLCA0LjUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAncmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICBsZXQgdGFyZ2V0ID0gZDMuc2VsZWN0KGUudGFyZ2V0KS5ub2RlKCk7XG4gICAgICAgICAgaWYgKCFwYXRoQ2xpY2tlZCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PSAncGF0aCcpIHtcbiAgICAgICAgICAgICAgcGF0aC5hdHRyKCdzdHJva2UnLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5hZ2VudCA9PT0gdGFyZ2V0LmlkID8gY29sb3IoZC5hZ2VudCkgOiAnI2RkZCc7XG4gICAgICAgICAgICAgIH0pLmZpbHRlcihkID0+IGQuYWdlbnQgPT09IHRhcmdldC5pZCkucmFpc2UoKTtcbiAgICAgICAgICAgICAgcGF0aC5hdHRyKCdzdHJva2Utd2lkdGgnLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5hZ2VudCA9PT0gdGFyZ2V0LmlkID8gNCA6IDI7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGxldCByb3cgPSBkM0RhdGEuc2VyaWVzLm1hcCgocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm93LmFnZW50ID09IHRhcmdldC5pZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLmZpbHRlcihyb3cgPT4gcm93KVswXTtcblxuICAgICAgICAgICAgICByb3dbJ19udW1UcmlhbHMnXS5mb3JFYWNoKChudW1UcmlhbHM6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbnVtVHJpYWxzOicsIG51bVRyaWFscywgJ2lkeDonLCBpZHgpO1xuICAgICAgICAgICAgICAgIGxldCBkb3QgPSBzdmcuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdkaXNwbGF5JywgbnVsbClcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdkb3QnKTtcblxuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdyJywgMi41KTtcblxuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1mYW1pbHknLCAnc2Fucy1zZXJpZicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmb250LXNpemUnLCAxMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5JywgLTgpO1xuICAgICAgICAgICAgICAgIGRvdC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7eChkM0RhdGEuZGF0ZXNbaWR4XSBhcyBEYXRlKX0sICR7eU51bVRyaWFscyhudW1UcmlhbHMpfSlgKTtcbiAgICAgICAgICAgICAgICBkb3Quc2VsZWN0KCd0ZXh0JykudGV4dChgJHtyb3dbJ2FnZW50J119LCAke251bVRyaWFsc31gKTtcblxuXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICBwYXRoQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09ICdjaXJjbGUnICYmIGRvdENsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgbGV0IHBvaW50ZXIgPSBkMy5wb2ludGVyKGUsIHN2Zyk7XG4gICAgICAgICAgICAgIGxldCBkYXRlQ2xpY2tlZCA9IHguaW52ZXJ0KHBvaW50ZXJbMF0pO1xuICAgICAgICAgICAgICBsZXQgYWdlbnQgPSBwYXRoLm5vZGUoKT8ucGFyZW50Tm9kZT8ubGFzdEVsZW1lbnRDaGlsZD8uaWQgYXMgc3RyaW5nO1xuICAgICAgICAgICAgICBsZXQgYWdlbnRUYXNrRG9jcyA9IHRoaXMudGFza0RvY3NbYWdlbnRdW2RhdGVDbGlja2VkLnRvTG9jYWxlRGF0ZVN0cmluZygpXTtcbiAgICAgICAgICAgICAgbGV0IGxhc3RUYXNrRG9jID0gYWdlbnRUYXNrRG9jc1thZ2VudFRhc2tEb2NzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICBkMy5zZWxlY3QodGFyZ2V0KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdyJywgNC41KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ3JlZCcpO1xuICAgICAgICAgICAgICBkb3RDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgY2xpY2tlZERvdCA9IHRhcmdldDtcblxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlld2VyLmdldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudmlld2VyLnVwZGF0ZShsYXN0VGFza0RvYyk7XG4gICAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zOiBKU09ORWRpdG9yT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgIG1vZGVzOiBbJ3RyZWUnIGFzICd0cmVlJywgJ2NvZGUnIGFzICdjb2RlJ10sXG4gICAgICAgICAgICAgICAgICBzb3J0T2JqZWN0S2V5czogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgbGV0IHZpZXdlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza2RvYy12aWV3ZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdlciA9IG5ldyBKU09ORWRpdG9yKHZpZXdlckVsZW0sIG9wdGlvbnMsIGxhc3RUYXNrRG9jKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQubm9kZU5hbWUgPT0gJ2NpcmNsZScgJiYgZG90Q2xpY2tlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gY2xpY2tlZERvdCkge1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgICAuYXR0cigncicsIDIuNSlcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJyk7XG4gICAgICAgICAgICAgICAgZG90Q2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBwb2ludGVyID0gZDMucG9pbnRlcihlLCBzdmcpO1xuICAgICAgICAgICAgICAgIGxldCBkYXRlQ2xpY2tlZCA9IHguaW52ZXJ0KHBvaW50ZXJbMF0pO1xuICAgICAgICAgICAgICAgIGxldCBhZ2VudCA9IHBhdGgubm9kZSgpPy5wYXJlbnROb2RlPy5sYXN0RWxlbWVudENoaWxkPy5pZCBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgbGV0IGFnZW50VGFza0RvY3MgPSB0aGlzLnRhc2tEb2NzW2FnZW50XVtkYXRlQ2xpY2tlZC50b0xvY2FsZURhdGVTdHJpbmcoKV07XG4gICAgICAgICAgICAgICAgbGV0IGxhc3RUYXNrRG9jID0gYWdlbnRUYXNrRG9jc1thZ2VudFRhc2tEb2NzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgICAuYXR0cigncicsIDQuNSlcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ3JlZCcpO1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdChjbGlja2VkRG90KVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ3InLCAyLjUpXG4gICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICdibGFjaycpO1xuICAgICAgICAgICAgICAgIGNsaWNrZWREb3QgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3ZXIudXBkYXRlKGxhc3RUYXNrRG9jKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgZCA9PiBjb2xvcihkLmFnZW50KSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpO1xuXG4gICAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoJ2cuZG90JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIHBhdGhDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGRvdENsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgcGVyZm9ybWFuY2VBY3Rpb24gPSAoc3ZnOiBkMy5TZWxlY3Rpb248U1ZHU1ZHRWxlbWVudCwgdW5rbm93biwgSFRNTEVsZW1lbnQsIGFueT4gLCBwYXRoOiBkMy5TZWxlY3Rpb248U1ZHUGF0aEVsZW1lbnQsIGFueSwgU1ZHRWxlbWVudCwgdW5rbm93bj4pID0+IHtcbiAgICAgIFxuICAgICAgbGV0IHBhdGhDbGlja2VkID0gZmFsc2U7XG4gICAgICBsZXQgZG90Q2xpY2tlZCA9IGZhbHNlO1xuICAgICAgbGV0IGNsaWNrZWREb3Q6IGFueTtcblxuICAgICAgc3ZnXG4gICAgICAgIC5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgICAgICBsZXQgdGFyZ2V0ID0gZDMuc2VsZWN0KGUudGFyZ2V0KS5ub2RlKCk7XG4gICAgICAgICAgaWYgKCFwYXRoQ2xpY2tlZCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PSAncGF0aCcpIHtcbiAgICAgICAgICAgICAgcGF0aC5hdHRyKCdzdHJva2Utd2lkdGgnLCBkID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZC5hZ2VudCA9PT0gdGFyZ2V0LmlkID8gNCA6IDI7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGF0aC5hdHRyKCdzdHJva2Utd2lkdGgnLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PSAnY2lyY2xlJyAmJiBkb3RDbGlja2VkID09IHRydWUpIHsgICAgIFxuICAgICAgICAgICAgICBpZiAodGFyZ2V0ICE9IGNsaWNrZWREb3QpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGFyZ2V0OicsIHRhcmdldCwgJ2NsaWNrZWREb3Q6JywgY2xpY2tlZERvdCk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRhcmdldClcbiAgICAgICAgICAgICAgICAuYXR0cigncicsIDQuNSlcbiAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICdibGFjaycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5ub2RlTmFtZSA9PSAnY2lyY2xlJyAmJiBkb3RDbGlja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGQzLnNlbGVjdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3InLCA0LjUpO1xuICAgICAgICAgICAgICAvLyBzdmcuc2VsZWN0QWxsKCdnLmRvdCBjaXJjbGUnKS5hdHRyKCdyJywgNC41KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0Lm5vZGVOYW1lICE9ICdjaXJjbGUnICYmIGRvdENsaWNrZWQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKCdnLmRvdCBjaXJjbGUnKS5hdHRyKCdyJywgMi41KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0Lm5vZGVOYW1lICE9ICdjaXJjbGUnICYmIGRvdENsaWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBkMy5zZWxlY3RBbGwoJ2cuZG90IGNpcmNsZScpLmF0dHIoJ3InLCAyLjUpO1xuICAgICAgICAgICAgICBkMy5zZWxlY3QoY2xpY2tlZERvdClcbiAgICAgICAgICAgICAgICAuYXR0cigncicsIDQuNSlcbiAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICdyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgIGxldCB0YXJnZXQgPSBkMy5zZWxlY3QoZS50YXJnZXQpLm5vZGUoKTtcbiAgICAgICAgICBpZiAoIXBhdGhDbGlja2VkKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lm5vZGVOYW1lID09ICdwYXRoJykge1xuICAgICAgICAgICAgICBwYXRoLmF0dHIoJ3N0cm9rZScsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLmFnZW50ID09PSB0YXJnZXQuaWQgPyBjb2xvcihkLmFnZW50KSA6ICcjZGRkJztcbiAgICAgICAgICAgICAgfSkuZmlsdGVyKGQgPT4gZC5hZ2VudCA9PT0gdGFyZ2V0LmlkKS5yYWlzZSgpO1xuICAgICAgICAgICAgICBwYXRoLmF0dHIoJ3N0cm9rZS13aWR0aCcsIGQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkLmFnZW50ID09PSB0YXJnZXQuaWQgPyA0IDogMjtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIC8vIHBhdGguc3R5bGUoJ21peC1ibGVuZC1tb2RlJywgZCA9PiB7XG4gICAgICAgICAgICAgIC8vICAgcmV0dXJuIGQuYWdlbnQgPT09IHRhcmdldC5pZCA/ICdvdmVybGF5JyA6ICdtdWx0aXBseSdcbiAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgICAgbGV0IHJvdyA9IGQzRGF0YS5zZXJpZXMubWFwKChyb3c6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyb3cuYWdlbnQgPT0gdGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkuZmlsdGVyKHJvdyA9PiByb3cpWzBdO1xuXG4gICAgICAgICAgICAgIHJvd1snX3BlcmZvcm1hbmNlJ10uZm9yRWFjaCgocGVyZm9ybWFuY2U6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZG90ID0gc3ZnLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgICAuYXR0cignZGlzcGxheScsIG51bGwpXG4gICAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnZG90Jyk7XG5cbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigncicsIDIuNSk7XG5cbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ3NhbnMtc2VyaWYnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgMTApXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneScsIC04KTtcbiAgICAgICAgICAgICAgICBkb3QuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3goZDNEYXRhLmRhdGVzW2lkeF0gYXMgRGF0ZSl9LCAke3lQZXJmb3JtYW5jZShwZXJmb3JtYW5jZSl9KWApO1xuICAgICAgICAgICAgICAgIGRvdC5zZWxlY3QoJ3RleHQnKS50ZXh0KGAke3Jvd1snYWdlbnQnXX0sICR7cGVyZm9ybWFuY2V9JWApO1xuXG5cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgIHBhdGhDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5ub2RlTmFtZSA9PSAnY2lyY2xlJyAmJiBkb3RDbGlja2VkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGxldCBwb2ludGVyID0gZDMucG9pbnRlcihlLCBzdmcpO1xuICAgICAgICAgICAgICBsZXQgZGF0ZUNsaWNrZWQgPSB4LmludmVydChwb2ludGVyWzBdKTtcbiAgICAgICAgICAgICAgbGV0IGFnZW50ID0gcGF0aC5ub2RlKCk/LnBhcmVudE5vZGU/Lmxhc3RFbGVtZW50Q2hpbGQ/LmlkIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgbGV0IGFnZW50VGFza0RvY3MgPSB0aGlzLnRhc2tEb2NzW2FnZW50XVtkYXRlQ2xpY2tlZC50b0xvY2FsZURhdGVTdHJpbmcoKV07XG4gICAgICAgICAgICAgIGxldCBsYXN0VGFza0RvYyA9IGFnZW50VGFza0RvY3NbYWdlbnRUYXNrRG9jcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgZDMuc2VsZWN0KHRhcmdldClcbiAgICAgICAgICAgICAgICAuYXR0cigncicsIDQuNSlcbiAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICdyZWQnKTtcbiAgICAgICAgICAgICAgZG90Q2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGNsaWNrZWREb3QgPSB0YXJnZXQ7XG5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdlci5nZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdlci51cGRhdGUobGFzdFRhc2tEb2MpO1xuICAgICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uczogSlNPTkVkaXRvck9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICBtb2RlczogWyd0cmVlJyBhcyAndHJlZScsICdjb2RlJyBhcyAnY29kZSddLFxuICAgICAgICAgICAgICAgICAgc29ydE9iamVjdEtleXM6IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGxldCB2aWV3ZXJFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tkb2Mtdmlld2VyJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3ZXIgPSBuZXcgSlNPTkVkaXRvcih2aWV3ZXJFbGVtLCBvcHRpb25zLCBsYXN0VGFza0RvYyk7XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5ub2RlTmFtZSA9PSAnY2lyY2xlJyAmJiBkb3RDbGlja2VkID09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBjbGlja2VkRG90KSB7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRhcmdldClcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdyJywgMi41KVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnYmxhY2snKTtcbiAgICAgICAgICAgICAgICBkb3RDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvaW50ZXIgPSBkMy5wb2ludGVyKGUsIHN2Zyk7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGVDbGlja2VkID0geC5pbnZlcnQocG9pbnRlclswXSk7XG4gICAgICAgICAgICAgICAgbGV0IGFnZW50ID0gcGF0aC5ub2RlKCk/LnBhcmVudE5vZGU/Lmxhc3RFbGVtZW50Q2hpbGQ/LmlkIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICBsZXQgYWdlbnRUYXNrRG9jcyA9IHRoaXMudGFza0RvY3NbYWdlbnRdW2RhdGVDbGlja2VkLnRvTG9jYWxlRGF0ZVN0cmluZygpXTtcbiAgICAgICAgICAgICAgICBsZXQgbGFzdFRhc2tEb2MgPSBhZ2VudFRhc2tEb2NzW2FnZW50VGFza0RvY3MubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRhcmdldClcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdyJywgNC41KVxuICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAncmVkJyk7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KGNsaWNrZWREb3QpXG4gICAgICAgICAgICAgICAgICAuYXR0cigncicsIDIuNSlcbiAgICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJ2JsYWNrJyk7XG4gICAgICAgICAgICAgICAgY2xpY2tlZERvdCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdlci51cGRhdGUobGFzdFRhc2tEb2MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgZCA9PiBjb2xvcihkLmFnZW50KSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsIDIpO1xuICAgICAgICAgICAgICAvLyAuc3R5bGUoJ21peC1ibGVuZC1tb2RlJywgJ211bHRpcGx5Jyk7XG5cbiAgICAgICAgICAgICAgc3ZnLnNlbGVjdEFsbCgnZy5kb3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgcGF0aENsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgZG90Q2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIHBhdGhcbiAgICAgIC8vICAgLm9uKCdjbGljaycsIHBhdGhDbGljayk7XG5cbiAgICAgIC8vIGNvbnN0IGRvdCA9IHN2Zy5hcHBlbmQoJ2cnKVxuICAgICAgLy8gICAuYXR0cignZGlzcGxheScsICdub25lJyk7XG5cbiAgICAgIC8vIGRvdC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAvLyAgIC5hdHRyKCdyJywgMi41KTtcblxuICAgICAgLy8gZG90LmFwcGVuZChcInRleHRcIilcbiAgICAgIC8vICAgLmF0dHIoXCJmb250LWZhbWlseVwiLCBcInNhbnMtc2VyaWZcIilcbiAgICAgIC8vICAgLmF0dHIoXCJmb250LXNpemVcIiwgMTApXG4gICAgICAvLyAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC8vICAgLmF0dHIoXCJ5XCIsIC04KTtcblxuICAgICAgXG4gICAgfVxuXG4gICAgLy8gc3ZnTnVtVHJpYWxzLmNhbGwoaG92ZXIpO1xuICAgIC8vIHN2Z051bVRyaWFscy5jYWxsKGhvdmVyLCBzdmdOdW1UcmlhbHMuc2VsZWN0QWxsKCdwYXRoLmxpbmUnKSk7XG4gICAgLy8gaWYgKGQzLnNlbGVjdCgnc3ZnJykuc2l6ZSgpID09IDApIHtcbiAgICAvLyAgIHN2Z051bVRyaWFscy5jYWxsKGhvdmVyLCBwYXRoKTtcbiAgICAvLyB9XG4gICAgc3ZnTnVtVHJpYWxzLmNhbGwobnVtVHJpYWxzQWN0aW9uLCBudW1UcmlhbHNQYXRoKTtcbiAgICBzdmdQZXJmb3JtYW5jZS5jYWxsKHBlcmZvcm1hbmNlQWN0aW9uLCBwZXJmb3JtYW5jZVBhdGgpO1xuICAgIFxuICAgIC8vIHJldHVybiBzdmcubm9kZSgpO1xuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKHN2Zyk7XG4gIH1cblxuICBwcml2YXRlIGdldERhdGVBcnJheShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgZHQgPSBuZXcgRGF0ZShzdGFydCk7XG4gICAgd2hpbGUgKGR0LnZhbHVlT2YoKSA8IGVuZCkge1xuICAgICAgYXJyLnB1c2goZHQudG9Mb2NhbGVEYXRlU3RyaW5nKCkpO1xuICAgICAgZHQuc2V0RGF0ZShkdC5nZXREYXRlKCkgKyAxKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG5cblxuICBcbn0iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCc7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QTBmYnYyVnFFLUFmRjZWX254U1NYQ0VxYVRsQmxablRJXCIsXG4gIGF1dGhEb21haW46IFwic2FuZGJveC1jZTJjNS5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9zYW5kYm94LWNlMmM1LmZpcmViYXNlaW8uY29tXCIsXG4gIHByb2plY3RJZDogXCJzYW5kYm94LWNlMmM1XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic2FuZGJveC1jZTJjNS5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIxMDAzNzE5ODg3OTQ0XCIsXG4gIGNsaWVudElkOiBcIjEwMDM3MTk4ODc5NDQtcmxjMDZjamVjcXJwOWZndm12bzU2dnFvcDFvdG05aHQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxufTtcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpOyIsImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAndGFidWxhdG9yLXRhYmxlcy9kaXN0L2Nzcy9ib290c3RyYXAvdGFidWxhdG9yX2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnLi9maXJlcGxhY2UuY3NzJztcblxuaW1wb3J0ICcuL2luaXQnO1xuXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcblxuY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcbmNvbnN0IGRiID0gZmlyZWJhc2UuZmlyZXN0b3JlKCk7XG5cbmltcG9ydCB7IEZpcmVwbGFjZSB9IGZyb20gJy4vZmlyZXBsYWNlJztcbmxldCBmcCA9IG5ldyBGaXJlcGxhY2UoKTtcblxuXG5hdXRoLmdldFJlZGlyZWN0UmVzdWx0KCkudGhlbihyZXN1bHQgPT4ge1xuICBpZiAoIXJlc3VsdC5jcmVkZW50aWFsICYmICFhdXRoLmN1cnJlbnRVc2VyKSB7XG4gICAgbGV0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgcHJvdmlkZXIuYWRkU2NvcGUoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvcGx1cy5tZScpO1xuICAgIHByb3ZpZGVyLmFkZFNjb3BlKCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXIuZW1haWxzLnJlYWQnKTtcbiAgICBwcm92aWRlci5hZGRTY29wZSgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5lbWFpbCcpO1xuICAgIGF1dGguc2lnbkluV2l0aFJlZGlyZWN0KHByb3ZpZGVyKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnVXNlciBBdXRoZW50aWNhdGVkJyk7XG4gICAgY29uc29sZS5sb2coYXV0aC5jdXJyZW50VXNlcik7XG4gIH1cbn0pLmNhdGNoKGUgPT4ge1xuICBjb25zb2xlLmVycm9yKCdFcnJvciB3aXRoIGF1dGhlbnRpY2F0aW9uOicsIGUpO1xufSk7XG5cblxuY29uc3QgdGFibGVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBlbmREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLWRhdGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuZW5kRGF0ZUlucHV0LnZhbHVlID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLUNBJyk7XG5jb25zdCBwZXJmb3JtYW5jZVBsb3RFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcmZvcm1hbmNlLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudDtcbmZwLnJlZ2lzdGVyRG9tRWxlbWVudCgncGVyZi1wbG90JywgcGVyZm9ybWFuY2VQbG90RWxlbSk7XG5cbmNvbnN0IHJlZnJlc2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVmcmVzaC1idG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbnJlZnJlc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgKGV2dDogRXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gIGZwLnRMYXN0UXVlcnkgPSAwO1xuICBsZXQgcXVlcnkgPSBkYi5jb2xsZWN0aW9uKCdta3R1cmtkYXRhJylcbiAgICAud2hlcmUoJ0RvY3R5cGUnLCAnPT0nLCAndGFzaycpXG4gICAgLndoZXJlKCdDdXJyZW50RGF0ZVZhbHVlJywgJzwnLCBmcC5xdWVyeUVuZERhdGVWYWx1ZSlcbiAgICAud2hlcmUoJ0N1cnJlbnREYXRlVmFsdWUnLCAnPj0nLCBmcC5xdWVyeVN0YXJ0RGF0ZVZhbHVlKVxuICAgIC5vblNuYXBzaG90KHNuYXBzaG90ID0+IGZwLnF1ZXJ5Q2FsbGJhY2soc25hcHNob3QpKTtcbn0pO1xuXG5mcC5yZWdpc3RlckRvbUVsZW1lbnQoJ3RhYmxlJywgdGFibGVFbGVtKTtcblxuXG5sZXQgcXVlcnkgPSBkYi5jb2xsZWN0aW9uKCdta3R1cmtkYXRhJylcbiAgLndoZXJlKCdEb2N0eXBlJywgJz09JywgJ3Rhc2snKVxuICAud2hlcmUoJ0N1cnJlbnREYXRlVmFsdWUnLCAnPCcsIGZwLnF1ZXJ5RW5kRGF0ZVZhbHVlKVxuICAud2hlcmUoJ0N1cnJlbnREYXRlVmFsdWUnLCAnPj0nLCBmcC5xdWVyeVN0YXJ0RGF0ZVZhbHVlKVxuICAub25TbmFwc2hvdChzbmFwc2hvdCA9PiBmcC5xdWVyeUNhbGxiYWNrKHNuYXBzaG90KSk7XG5cblxuXG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5hbWREID0gZnVuY3Rpb24gKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoJ2RlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdCcpO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmFtZE8gPSB7fTsiLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG5cdH1cblx0X193ZWJwYWNrX3JlcXVpcmVfXy5PKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZmlyZXBsYWNlMlwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtmaXJlcGxhY2UyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19kM19pbmRleF9qcy1ub2RlX21vZHVsZXNfZmlyZWJhc2VfYXBwX2Rpc3RfaW5kZXhfZXNtX2pzLW5vZGVfbW9kdWxlc19maXItMGIyNmQ4XCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=