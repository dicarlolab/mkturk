/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports
;

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nhtml, body {\n  font-family: 'Roboto', 'Helvetica', sans-serif;\n  margin: 0;\n  padding: 0;\n}\n.mdl-demo .mdl-layout__header-row {\n  padding-left: 40px;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__header-row h3 {\n  font-size: inherit;\n}\n.mdl-demo .mdl-layout__tab-bar-button {\n  display: none;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__tab-bar .mdl-button {\n  display: none;\n}\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar,\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar-container {\n  overflow: visible;\n}\n.mdl-demo .mdl-layout__tab-bar-container {\n  height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar {\n  padding: 0;\n  padding-left: 16px;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab {\n  height: 64px;\n  line-height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab.is-active::after {\n  background-color: white;\n  height: 4px;\n}\n.mdl-demo main > .mdl-layout__tab-panel {\n  padding: 8px;\n  padding-top: 24px;\n}\n.mdl-demo .mdl-card {\n  height: auto;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .mdl-card > * {\n  height: auto;\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text {\n  margin: 40px;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 0;\n  color: inherit;\n  width: calc(100% - 80px);\n}\n.mdl-demo.mdl-demo .mdl-card__supporting-text h4 {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.mdl-demo .mdl-card__actions {\n  margin: 0;\n  padding: 4px 40px;\n  color: inherit;\n}\n.mdl-demo .mdl-card__actions a {\n  color: #00BCD4;\n  margin: 0;\n}\n.mdl-demo .mdl-card__actions a:hover,\n.mdl-demo .mdl-card__actions a:active {\n  color: inherit;\n  background-color: transparent;\n}\n.mdl-demo .mdl-card__supporting-text + .mdl-card__actions {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mdl-demo #add {\n  position: absolute;\n  right: 40px;\n  top: 36px;\n  z-index: 999;\n}\n\n.mdl-demo .mdl-layout__content section:not(:last-of-type) {\n  position: relative;\n  margin-bottom: 24px;\n}\n.mdl-demo section.section--center {\n  max-width: 1290px;\n}\n.mdl-demo #features section.section--center {\n  max-width: 620px;\n}\n.mdl-demo section > header{\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mdl-demo section > .section__play-btn {\n  min-height: 200px;\n}\n.mdl-demo section > header > .material-icons {\n  font-size: 3rem;\n}\n.mdl-demo section > button {\n  position: absolute;\n  z-index: 99;\n  top: 8px;\n  right: 8px;\n}\n.mdl-demo section .section__circle {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-flex-shrink: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1;\n}\n.mdl-demo section .section__text {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  padding-top: 8px;\n}\n.mdl-demo section .section__text h5 {\n  font-size: inherit;\n  margin: 0;\n  margin-bottom: 0.5em;\n}\n.mdl-demo section .section__text a {\n  text-decoration: none;\n}\n.mdl-demo section .section__circle-container > .section__circle-container__circle {\n  width: 64px;\n  height: 64px;\n  border-radius: 32px;\n  margin: 8px 0;\n}\n.mdl-demo section.section--footer .section__circle--big {\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  margin: 8px 32px;\n}\n.mdl-demo .is-small-screen section.section--footer .section__circle--big {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  margin: 8px 16px;\n}\n.mdl-demo section.section--footer {\n  padding: 64px 0;\n  margin: 0 -8px -8px -8px;\n}\n.mdl-demo section.section--center .section__text:not(:last-child) {\n  border-bottom: 1px solid rgba(0,0,0,.13);\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text > h3:first-child {\n  margin-bottom: 24px;\n}\n.mdl-demo .mdl-layout__tab-panel:not(#overview) {\n  background-color: white;\n}\n.mdl-demo #features section {\n  margin-bottom: 72px;\n}\n.mdl-demo #features h4, #features h5 {\n  margin-bottom: 16px;\n}\n.mdl-demo .toc {\n  border-left: 4px solid #C1EEF4;\n  margin: 24px;\n  padding: 0;\n  padding-left: 8px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .toc h4 {\n  font-size: 0.9rem;\n  margin-top: 0;\n}\n.mdl-demo .toc a {\n  color: #4DD0E1;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 28px;\n  display: block;\n}\n.mdl-demo .mdl-menu__container {\n  z-index: 99;\n}\n\n.dashboard {\n  min-height: 500px;\n  height: 500px;\n}\n\n.dashboard-plot {\n  height: 80%;\n}\n\n.dashboard-filter {\n  height: 20%;\n}\n\n.bar-plot {\n  min-height: 300px;\n  height: 300px;\n}\n\n.vital-span {\n  display: block;\n  font-weight: bold;\n  font-size: 1.125rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;EAcE;;AAEF;EACE,8CAA8C;EAC9C,SAAS;EACT,UAAU;AACZ;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;;EAEE,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,8BAA8B;MAC1B,0BAA0B;UACtB,sBAAsB;AAChC;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,oBAAoB;MAChB,oBAAoB;UAChB,YAAY;EACpB,UAAU;EACV,cAAc;EACd,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,SAAS;EACT,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,cAAc;EACd,SAAS;AACX;AACA;;EAEE,cAAc;EACd,6BAA6B;AAC/B;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,2BAA2B;MACvB,sBAAsB;UAClB,mBAAmB;EAC3B,+BAA+B;MAC3B,qBAAqB;UACjB,uBAAuB;AACjC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,UAAU;AACZ;AACA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,2BAA2B;MACvB,sBAAsB;UAClB,mBAAmB;EAC3B,mCAAmC;MAC/B,oBAAoB;UAChB,2BAA2B;EACnC,oBAAoB;MAChB,oBAAoB;UAChB,YAAY;EACpB,sBAAsB;MAClB,oBAAoB;UAChB,cAAc;AACxB;AACA;EACE,oBAAoB;MAChB,oBAAoB;UAChB,YAAY;EACpB,sBAAsB;MAClB,oBAAoB;UAChB,cAAc;EACtB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,oBAAoB;AACtB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,wBAAwB;AAC1B;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,8BAA8B;MAC1B,0BAA0B;UACtB,sBAAsB;AAChC;AACA;EACE,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB","sourcesContent":["/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nhtml, body {\n  font-family: 'Roboto', 'Helvetica', sans-serif;\n  margin: 0;\n  padding: 0;\n}\n.mdl-demo .mdl-layout__header-row {\n  padding-left: 40px;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__header-row h3 {\n  font-size: inherit;\n}\n.mdl-demo .mdl-layout__tab-bar-button {\n  display: none;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__tab-bar .mdl-button {\n  display: none;\n}\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar,\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar-container {\n  overflow: visible;\n}\n.mdl-demo .mdl-layout__tab-bar-container {\n  height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar {\n  padding: 0;\n  padding-left: 16px;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab {\n  height: 64px;\n  line-height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab.is-active::after {\n  background-color: white;\n  height: 4px;\n}\n.mdl-demo main > .mdl-layout__tab-panel {\n  padding: 8px;\n  padding-top: 24px;\n}\n.mdl-demo .mdl-card {\n  height: auto;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .mdl-card > * {\n  height: auto;\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text {\n  margin: 40px;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 0;\n  color: inherit;\n  width: calc(100% - 80px);\n}\n.mdl-demo.mdl-demo .mdl-card__supporting-text h4 {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.mdl-demo .mdl-card__actions {\n  margin: 0;\n  padding: 4px 40px;\n  color: inherit;\n}\n.mdl-demo .mdl-card__actions a {\n  color: #00BCD4;\n  margin: 0;\n}\n.mdl-demo .mdl-card__actions a:hover,\n.mdl-demo .mdl-card__actions a:active {\n  color: inherit;\n  background-color: transparent;\n}\n.mdl-demo .mdl-card__supporting-text + .mdl-card__actions {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mdl-demo #add {\n  position: absolute;\n  right: 40px;\n  top: 36px;\n  z-index: 999;\n}\n\n.mdl-demo .mdl-layout__content section:not(:last-of-type) {\n  position: relative;\n  margin-bottom: 24px;\n}\n.mdl-demo section.section--center {\n  max-width: 1290px;\n}\n.mdl-demo #features section.section--center {\n  max-width: 620px;\n}\n.mdl-demo section > header{\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mdl-demo section > .section__play-btn {\n  min-height: 200px;\n}\n.mdl-demo section > header > .material-icons {\n  font-size: 3rem;\n}\n.mdl-demo section > button {\n  position: absolute;\n  z-index: 99;\n  top: 8px;\n  right: 8px;\n}\n.mdl-demo section .section__circle {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-flex-shrink: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1;\n}\n.mdl-demo section .section__text {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  padding-top: 8px;\n}\n.mdl-demo section .section__text h5 {\n  font-size: inherit;\n  margin: 0;\n  margin-bottom: 0.5em;\n}\n.mdl-demo section .section__text a {\n  text-decoration: none;\n}\n.mdl-demo section .section__circle-container > .section__circle-container__circle {\n  width: 64px;\n  height: 64px;\n  border-radius: 32px;\n  margin: 8px 0;\n}\n.mdl-demo section.section--footer .section__circle--big {\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  margin: 8px 32px;\n}\n.mdl-demo .is-small-screen section.section--footer .section__circle--big {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  margin: 8px 16px;\n}\n.mdl-demo section.section--footer {\n  padding: 64px 0;\n  margin: 0 -8px -8px -8px;\n}\n.mdl-demo section.section--center .section__text:not(:last-child) {\n  border-bottom: 1px solid rgba(0,0,0,.13);\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text > h3:first-child {\n  margin-bottom: 24px;\n}\n.mdl-demo .mdl-layout__tab-panel:not(#overview) {\n  background-color: white;\n}\n.mdl-demo #features section {\n  margin-bottom: 72px;\n}\n.mdl-demo #features h4, #features h5 {\n  margin-bottom: 16px;\n}\n.mdl-demo .toc {\n  border-left: 4px solid #C1EEF4;\n  margin: 24px;\n  padding: 0;\n  padding-left: 8px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .toc h4 {\n  font-size: 0.9rem;\n  margin-top: 0;\n}\n.mdl-demo .toc a {\n  color: #4DD0E1;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 28px;\n  display: block;\n}\n.mdl-demo .mdl-menu__container {\n  z-index: 99;\n}\n\n.dashboard {\n  min-height: 500px;\n  height: 500px;\n}\n\n.dashboard-plot {\n  height: 80%;\n}\n\n.dashboard-filter {\n  height: 20%;\n}\n\n.bar-plot {\n  min-height: 300px;\n  height: 300px;\n}\n\n.vital-span {\n  display: block;\n  font-weight: bold;\n  font-size: 1.125rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");
;
            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/charts.ts":
/*!***********************!*\
  !*** ./src/charts.ts ***!
  \***********************/
/*! flagged exports */
/*! export Charts [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Charts = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const colorMapJet = [
    '#00008F', '#00009F', '#0000AF', '#0000BF',
    '#0000CF', '#0000DF', '#0000EF', '#0000FF',
    '#0010FF', '#0020FF', '#0030FF', '#0040FF',
    '#0050FF', '#0060FF', '#0070FF', '#0080FF',
    '#008FFF', '#009FFF', '#00AFFF', '#00BFFF',
    '#00CFFF', '#00DFFF', '#00EFFF', '#00FFFF',
    '#10FFEF', '#20FFDF', '#30FFCF', '#40FFBF',
    '#50FFAF', '#60FF9F', '#70FF8F', '#80FF80',
    '#8FFF70', '#9FFF60', '#AFFF50', '#BFFF40',
    '#CFFF30', '#DFFF20', '#EFFF10', '#FFFF00',
    '#FFEF00', '#FFDF00', '#FFCF00', '#FFBF00',
    '#FFAF00', '#FF9F00', '#FF8F00', '#FF8000',
    '#FF7000', '#FF6000', '#FF5000', '#FF4000',
    '#FF3000', '#FF2000', '#FF1000', '#FF0000',
    '#EF0000', '#DF0000', '#CF0000', '#BF0000',
    '#AF0000', '#9F0000', '#8F0000', '#800000'
];
const utils = new utils_1.Utils();
class Charts {
    constructor(elemObj) {
        this.elemObject = elemObj;
        this.realtimePlotActive = false;
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
        };
    }
    setupDataTables() {
        this.perfDataTable = new google.visualization.DataTable();
        this.cumulDataTable = new google.visualization.DataTable();
        this.xyPosDataTable = new google.visualization.DataTable();
        this.rxnTimeDataTable = new google.visualization.DataTable();
        this.rewardDataTable = new google.visualization.DataTable();
        this.choiceDataTable = new google.visualization.DataTable();
        this.objPerfDataTable = new google.visualization.DataTable();
        this.realtimeDataTable = new google.visualization.DataTable();
        this.rtData = {};
    }
    async setupCharts() {
        await google.charts.load('current', { packages: ['corechart', 'controls'] });
        this.setupChartOptions();
        this.setupDataTables();
        this.perfDashboard = (new google.visualization.Dashboard(this.elemObject.perfDiv));
        this.perfPlot = (new google.visualization.ChartWrapper(this.perfPlotConfig));
        this.perfFilter = (new google.visualization.ControlWrapper(this.perfFilterConfig));
        this.trialDashboard = (new google.visualization.Dashboard(this.elemObject.trialDiv));
        this.trialPlot = (new google.visualization.ChartWrapper(this.trialPlotConfig));
        this.trialFilter = (new google.visualization.ControlWrapper(this.trialFilterConfig));
        this.perfDashboard.bind(this.perfFilter, this.perfPlot);
        this.trialDashboard.bind(this.trialFilter, this.trialPlot);
        this.screenPlot = (new google.visualization.ComboChart(this.elemObject.screenPlot));
        // this.realtimePlot = (
        //   new google.visualization.ChartWrapper(this.realtimePlotConfig)
        // );
        this.rxnPlot = (new google.visualization.Histogram(this.elemObject.rxnPlot));
        this.rewardPlot = (new google.visualization.ColumnChart(this.elemObject.rewardPlot));
        this.choicePlot = (new google.visualization.ColumnChart(this.elemObject.choicePlot));
        this.objPerfPlot = (new google.visualization.ColumnChart(this.elemObject.objPerfPlot));
    }
    setupChartOptions() {
        this.perfPlotOptions = {
            width: this.elemObject.perfPlot.clientWidth,
            height: this.elemObject.perfPlot.clientHeight,
            hAxis: { title: 'Trial#' },
            vAxis: { title: 'Correct (%)', viewWindow: { min: 0, max: 1.0 } },
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
            hAxis: { title: 'Time (h) ' },
            vAxes: {
                0: { title: 'Trial count' },
                1: { title: 'RFID' }
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
    initializeChartData(file, plotOptions) {
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
        this.realtimeDataTable
            .removeRows(0, this.realtimeDataTable.getNumberOfRows());
        this.realtimeDataTable
            .removeColumns(0, this.realtimeDataTable.getNumberOfColumns());
        this.realtimePlotActive = false;
        this.realtimeRowDataAdded = false;
        this.rtData['test'] = [];
        this.rtData['choice'] = [];
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
        this.realtimeDataTable.addColumn('number', 'globalX');
        this.realtimeDataTable.addColumn('number', 'fixY');
        this.realtimeDataTable.addColumn('number', 'sampleY');
        if (file.data.SameDifferent <= 0) {
            for (let i = 0; i < file.data.TestGridIndex.length; i++) {
                this.xyPosDataTable.addColumn('number', `Test${i + 1}`);
                this.realtimeDataTable.addColumn('number', `testY${i + 1}`);
            }
        }
        else if (file.data.SameDifferent > 0) {
            this.xyPosDataTable.addColumn('number', 'Same');
            this.xyPosDataTable.addColumn('number', 'Different');
            this.realtimeDataTable.addColumn('number', 'sameY');
            this.realtimeDataTable.addColumn('number', 'differentY');
        }
        this.xyPosDataTable.addColumn('number', 'Fix_Reward');
        this.xyPosDataTable.addColumn('number', 'Fix_Punish');
        this.xyPosDataTable.addColumn('number', 'Target_Reward');
        this.xyPosDataTable.addColumn('number', 'Target_Punish');
        this.realtimeDataTable.addColumn('number', 'curY');
        this.realtimeDataTable.addColumn({ 'type': 'string', 'role': 'style' });
        this.rewardDataTable.addColumn('string', 'reard size');
        this.rewardDataTable.addColumn('number', 'nrewards');
        this.choiceDataTable.addColumn('string', 'choice');
        this.choiceDataTable.addColumn('number', '# of responses');
        this.objPerfDataTable.addColumn('string', 'object');
        this.objPerfDataTable.addColumn('number', 'performance');
        this.updatePlots(file, plotOptions);
    }
    updatePlots(file, plotOptions) {
        let fileData;
        if (!lodash_1.default.isUndefined(file.data)) {
            fileData = file.data;
        }
        else {
            throw 'file.data is Undefined';
        }
        console.log('plot updated');
        this.loadVitals(file);
        this.loadVitalsText(file);
        // console.log('vitals', this.vitals);
        this.loadPerformanceData(file);
        this.loadObjPerfData(fileData);
        this.loadChoiceData(fileData);
        this.loadRewardData(fileData);
        this.drawPerformancePlot(file);
        this.drawTrialPlot(file);
        this.drawObjPerfPlot();
        this.drawRxnTimePlot();
        this.drawChoicePlot();
        this.drawRewardPlot();
        this.loadTouchSDText();
        let streamActive = plotOptions.streamActive;
        this.drawScreenPlot(fileData, streamActive);
        if (streamActive && !this.realtimePlotActive) {
            console.log('hello');
            this.drawRealtimePlot2(fileData);
            this.realtimePlotActive = true;
        }
    }
    loadVitals(file) {
        let data;
        if (!lodash_1.default.isUndefined(file.data)) {
            data = file.data;
        }
        else {
            throw 'file.data is Undefined';
        }
        this.vitals.subject = data.Subject;
        this.vitals.trials = data.Response.length;
        // Convert milliseconds to minutes
        let startTime = data.StartTime;
        this.vitals.time = (lodash_1.default.round(lodash_1.default.round(lodash_1.default.toNumber(lodash_1.default.last(startTime)) - startTime[0]) / 60000));
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
        if (!lodash_1.default.isUndefined(rfidTag) && lodash_1.default.size(rfidTag) > 0) {
            this.vitals.rfidTag = rfidTag[lodash_1.default.size(rfidTag) - 1][2];
            this.vitals.rfidTime = (new Date(rfidTag[lodash_1.default.size(rfidTag) - 1][1]).toLocaleTimeString('en-US'));
        }
        else {
            this.vitals.rfidTag = null;
            this.vitals.rfidTime = null;
        }
        // Automator, AutomatorStage, AutomatorStageName
        if (lodash_1.default.isUndefined(data.Automator)) {
            this.vitals.automator = null;
        }
        else {
            this.vitals.automator = file.data.Automator;
        }
        if (lodash_1.default.isUndefined(data.CurrentAutomatorStage)) {
            this.vitals.automatorStage = null;
        }
        else {
            this.vitals.automatorStage = data.CurrentAutomatorStage;
        }
        if (lodash_1.default.isUndefined(data.CurrentAutomatorStageName)) {
            this.vitals.automatorStageName = null;
        }
        else {
            this.vitals.automatorStageName = data.CurrentAutomatorStageName;
        }
        // Battery, only supports current data format
        let battery = data.Battery;
        if (!lodash_1.default.isUndefined(battery) && lodash_1.default.size(battery) > 0) {
            this.vitals.batteryLeft = lodash_1.default.round(battery[lodash_1.default.size(battery) - 1][2] * 100);
            this.vitals.batteryUsed = (lodash_1.default.round(battery[0][2] * 100 - this.vitals.batteryLeft));
        }
        else {
            this.vitals.batteryLeft = null;
            this.vitals.batteryUsed = null;
        }
        // Performance
        let numCorrect = 0;
        for (let i = 0; i < lodash_1.default.size(data.CorrectItem); i++) {
            if (data.CorrectItem[i] == data.Response[i]) {
                numCorrect++;
            }
        }
        this.vitals.numCorrect = numCorrect;
        this.vitals.pctCorrect = (lodash_1.default.round(100 * numCorrect / data.Response.length));
        if (!lodash_1.default.isUndefined(data.NReward)) {
            this.vitals.numReward = (data.NReward.reduce((a, b) => {
                return a + b;
            }, 0));
        }
        this.vitals.rewardEstimate = 0;
        if (!lodash_1.default.isUndefined(data.RewardPer1000Trials)) {
            this.vitals.rewardEstimate = (lodash_1.default.round(data.RewardPer1000Trials * this.vitals.numReward / 1000));
        }
    }
    loadVitalsText(file) {
        this.elemObject.perfVitals.innerHTML = (`${this.vitals.subject}: ${this.vitals.pctCorrect}% (n = ${this.vitals.numCorrect} out of ${this.vitals.trials}, r=${this.vitals.numReward}=${this.vitals.rewardEstimate}mL, ${this.vitals.time} mins)`);
        // TODO: add this.vitals.tagCount data
        this.elemObject.rfidVitals.innerHTML = (`RFID: ${this.vitals.rfidTag} (${this.vitals.rfidTime})`);
        this.elemObject.batteryVitals.innerHTML = (`Battery: ${this.vitals.batteryLeft}% (-${this.vitals.batteryUsed}%)`);
        this.elemObject.trialVitals.innerHTML = (`Last Trial: ${file.dateSaved.toLocaleTimeString('en-US')}`);
    }
    loadTouchSDText() {
        try {
            this.screenPlotOptions.title = `Touch Locations -- standard dev: \n Fixation: ${Math.round(this.vitals.stdevFix * 10) / 10} pixels`;
            for (let i = 0; i < this.vitals.stdevTest.length; i++) {
                this.screenPlotOptions.title = this.screenPlotOptions.title + `\n Target ${i}: ${Math.round(this.vitals.stdevTest[i] * 10) / 10}`;
            }
        }
        catch (err) {
            console.error('Error loading touch SD text', err);
        }
    }
    loadPerformanceData(file) {
        // Typechecking file.data
        let data;
        if (!lodash_1.default.isUndefined(file.data)) {
            data = file.data;
        }
        else {
            throw 'file.data is Undefined';
        }
        console.log('HELLO');
        this.perfDataTable.removeRows(0, this.perfDataTable.getNumberOfRows());
        this.cumulDataTable
            .removeRows(0, this.cumulDataTable.getNumberOfRows());
        this.rxnTimeDataTable
            .removeRows(0, this.rxnTimeDataTable.getNumberOfRows());
        this.xyPosDataTable
            .removeRows(0, this.xyPosDataTable.getNumberOfRows());
        // Create Data Table
        let xData = [];
        let yData = [];
        let yDataSmall = []; // keeps 5 recent
        let yDataLarge = []; // keeps 100 recent
        let numTotal = [];
        let numCorrect = [];
        let tCurrent = [];
        let numRFID = [];
        let xPos;
        let yPos;
        let touchevent = [];
        let rt = [];
        // performance
        for (let i = 0; i < data.CorrectItem.length; i++) {
            if (data.CorrectItem[i] == data.Response[i]) {
                yData[i] = 1; // correct
            }
            else {
                yData[i] = 0; // incorrect
            }
            xData[i] = i;
            // Cumulative trials & correct trials
            numTotal[i] = xData.length;
            if (i > 0) {
                numCorrect[i] = numCorrect[i - 1] + yData[i];
            }
            else if (i == 0) {
                numCorrect[i] = yData[i];
            }
        }
        for (let i = 0; i < data.NReward.length; i++) {
            if (data.RewardStage == 0) {
                rt[i] = data.FixationXYT[2][i] - data.StartTime[i];
                this.rxnTimeDataTable.addRows([[file.data.FixationTouchEvent[i], rt[i]]]);
            }
            else if (data.NRSVP > 0) {
                rt[i] = data.SampleFixationXYT[2][i] - data.SampleStartTime[i];
                this.rxnTimeDataTable.addRows([[data.SampleFixationTouchEvent[i], rt[i]]]);
            }
            else {
                rt[i] = data.ResponseXYT[2][i] - data.SampleStartTime[i];
                if (data.Response[i] == -1) {
                    this.rxnTimeDataTable.addRows([['timeout', data.ChoiceTimeOut]]);
                }
                else if (data.CorrectItem[i] == data.Response[i]) {
                    this.rxnTimeDataTable.addRows([['correct', rt[i]]]);
                }
                else {
                    this.rxnTimeDataTable.addRows([['wrong', rt[i]]]);
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
        if (!lodash_1.default.isUndefined(data.ResponseXYT)
            && lodash_1.default.size(data.ResponseXYT) > 0
            && lodash_1.default.size(file.data.ResponseXYT[0]) > 0) {
            for (let i = 0; i < lodash_1.default.size(data.FixationXYT[0]) * 2; i += 2) {
                touchevent[i] = [];
                touchevent[i + 1] = [];
                touchevent[i][0] = file.data.FixationXYT[0][i / 2];
                touchevent[i + 1][0] = file.data.ResponseXYT[0][i / 2];
                touchevent[i][1] = file.data.FixationXYT[1][i / 2];
                touchevent[i + 1][1] = file.data.ResponseXYT[1][i / 2];
            }
        }
        else {
            for (let i = 0; i < lodash_1.default.size(data.FixationXYT[0]) * 2; i += 2) {
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
        let numColRealtime = this.realtimeDataTable.getNumberOfColumns();
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
        // let xyPosArray = [];
        let fixX;
        let fixY;
        let maxFixationGridIndex = lodash_1.default.max(file.data.FixationGridIndex);
        if (lodash_1.default.isNumber(maxFixationGridIndex)) {
            fixX = file.data.XGridCenter[maxFixationGridIndex];
            fixY = (file.data.ViewportPixels[1]
                - (file.data.YGridCenter[maxFixationGridIndex] + file.data.offsettop));
            // console.log('fixY', fixY);
        }
        else {
            throw 'data.FixationGridIndex is not of type number[]';
        }
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, { 0: fixX - fixationWidth / 2, 1: fixY - fixationHeight / 2 });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, { 0: fixX + fixationWidth / 2, 1: fixY - fixationHeight / 2 });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, { 0: fixX + fixationWidth / 2, 1: fixY + fixationHeight / 2 });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, { 0: fixX - fixationWidth / 2, 1: fixY + fixationHeight / 2 });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, { 0: fixX - fixationWidth / 2, 1: fixY - fixationHeight / 2 });
        if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
            console.log('realtime not active');
            this.rtData['fixation'] = {
                x: fixX,
                y: fixY,
                width: fixationWidth,
                height: fixationHeight
            };
        }
        // SAMPLE
        numDisplayElems = 2;
        let sampleX;
        let sampleY;
        let maxSampleGridIndex = lodash_1.default.max(data.SampleGridIndex);
        if (data.RewardStage > 0) {
            if (lodash_1.default.isNumber(maxSampleGridIndex)) {
                sampleX = data.XGridCenter[maxSampleGridIndex];
                sampleY = (data.ViewportPixels[1]
                    - (data.YGridCenter[maxSampleGridIndex] + data.offsettop));
            }
            else {
                throw 'data.SampleGridIndex is not of type number[]';
            }
        }
        else {
            sampleX = fixX;
            sampleY = fixY;
        }
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, { 0: sampleX - sampleWidth / 2, 2: sampleY - sampleHeight / 2 });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, { 0: sampleX + sampleWidth / 2, 2: sampleY - sampleHeight / 2 });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, { 0: sampleX + sampleWidth / 2, 2: sampleY + sampleHeight / 2 });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, { 0: sampleX - sampleWidth / 2, 2: sampleY + sampleHeight / 2 });
        this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, { 0: sampleX - sampleWidth / 2, 2: sampleY - sampleHeight / 2 });
        if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
            this.rtData['sample'] = {
                x: sampleX,
                y: sampleY,
                width: sampleWidth,
                height: sampleHeight
            };
        }
        // TEST:
        let testX = [];
        let testY = [];
        if (data.RewardStage != 0) {
            for (let i = 0; i < lodash_1.default.size(data.TestGridIndex); i++) {
                // If Same-Different, only show the first test
                if (data.SameDifferent > 0 || data.NRSVP > 0) {
                    break;
                }
                numDisplayElems++;
                if (data.NRSVP > 0) {
                    testX.push(data.XGridCenter[maxSampleGridIndex]);
                    testY.push(data.ViewportPixels[1]
                        - (data.YGridCenter[maxSampleGridIndex] + data.offsettop));
                }
                else {
                    testX.push(data.XGridCenter[data.TestGridIndex[i]]);
                    testY.push(data.ViewportPixels[1]
                        - (data.YGridCenter[data.TestGridIndex[i]] + data.offsettop));
                }
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: testX[i] - testWidth / 2,
                    [numDisplayElems]: testY[i] - testHeight / 2
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: testX[i] + testWidth / 2,
                    [numDisplayElems]: testY[i] - testHeight / 2
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: testX[i] + testWidth / 2,
                    [numDisplayElems]: testY[i] + testHeight / 2
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: testX[i] - testWidth / 2,
                    [numDisplayElems]: testY[i] + testHeight / 2
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: testX[i] - testWidth / 2,
                    [numDisplayElems]: testY[i] - testHeight / 2
                });
                if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
                    let tmp = {
                        x: testX[i],
                        y: testY[i],
                        width: testWidth,
                        height: testHeight
                    };
                    this.rtData['test'].push(tmp);
                }
            }
        }
        // CHOICE:
        let choiceX = [];
        let choiceY = [];
        if (data.RewardStage != 0 && data.SameDifferent > 0) {
            for (let i = 0; i < lodash_1.default.size(data.ChoiceGridIndex); i++) {
                numDisplayElems++;
                choiceX.push(data.XGridCenter[data.ChoiceGridIndex[i]]);
                choiceY.push(data.ViewportPixels[1]
                    - (data.YGridCenter[data.ChoiceGridIndex[i]] + data.offsettop));
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: choiceX[i] - choiceWidth / 2,
                    [numDisplayElems]: choiceY[i] - choiceHeight / 2
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: choiceX[i] + choiceWidth / 2,
                    [numDisplayElems]: choiceY[i] - choiceHeight / 2
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: choiceX[i] + choiceWidth / 2,
                    [numDisplayElems]: choiceY[i] + choiceHeight / 2
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: choiceX[i] - choiceWidth / 2,
                    [numDisplayElems]: choiceY[i] + choiceHeight / 2
                });
                this.generateAndAddRowData(this.xyPosDataTable, numColumnXYPos, {
                    0: choiceX[i] - choiceWidth / 2,
                    [numDisplayElems]: choiceY[i] - choiceHeight / 2
                });
                // realtime not active
                if (!this.realtimeRowDataAdded && !this.realtimePlotActive) {
                    this.rtData['choice'].push({
                        x: choiceX[i],
                        y: choiceY[i],
                        width: choiceWidth,
                        height: choiceHeight
                    });
                }
            }
        }
        this.realtimeRowDataAdded = true;
        let fixXPos = [];
        let fixYPos = [];
        let testXPos = [];
        let testYPos = [];
        let numTarget = [0, 0];
        for (let i = 0; i < touchevent.length; i++) {
            xPos = touchevent[i][0];
            yPos = data.ViewportPixels[1] - touchevent[i][1];
            let yDataIndex;
            if (i % 2 == 0) {
                yDataIndex = i / 2;
            }
            else {
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
                    }
                    else {
                        arr[numDisplayElems + 2] = yPos;
                        this.xyPosDataTable.addRows([arr]);
                    }
                }
                else {
                    let testXPosArr = [];
                    let testYPosArr = [];
                    for (let j = 0; j < lodash_1.default.size(data.TestGridIndex); j++) {
                        if (data.Response[yDataIndex] == j) {
                            testXPosArr.push(xPos);
                            testYPosArr.push(yPos);
                            numTarget[j] += 1;
                        }
                        else {
                            testXPosArr.push(0);
                            testYPosArr.push(0);
                        }
                        testXPos.push(testXPosArr);
                        testYPos.push(testYPosArr);
                    }
                    if (yData[yDataIndex] == 1) {
                        arr[numDisplayElems + 3] = yPos;
                        this.xyPosDataTable.addRows([arr]);
                    }
                    else {
                        arr[numDisplayElems + 4] = yPos;
                        this.xyPosDataTable.addRows([arr]);
                    }
                }
            }
            let meanFixXPos = lodash_1.default.mean(fixXPos);
            let meanFixYPos = lodash_1.default.mean(fixYPos);
            let distFixXPos = fixXPos.map((a) => {
                return Math.pow(Math.abs(a - meanFixXPos), 2);
            });
            let distFixYPos = fixYPos.map((a) => {
                return Math.pow(Math.abs(a - meanFixYPos), 2);
            });
            let stdevFix = distFixXPos.map((a, idx) => {
                return Math.sqrt(a + distFixYPos[idx]);
            }).reduce((a, b) => {
                return a + b;
            }, 0) / lodash_1.default.size(distFixXPos);
            this.vitals.stdevFix = stdevFix;
            let stdevTest = [];
            for (let j = 0; j < lodash_1.default.size(data.TestGridIndex); j++) {
                let allTestXPos = testXPos.map((a) => {
                    return a[j];
                }).filter((a) => {
                    return a != 0;
                });
                let meanTestXPos = allTestXPos.reduce((a, b) => {
                    return a + b;
                }, 0) / lodash_1.default.size(allTestXPos);
                let distTestXPos = allTestXPos.map((a) => {
                    return Math.pow(Math.abs(a - meanTestXPos), 2);
                });
                let allTestYPos = testYPos.map((a) => {
                    return a[j];
                }).filter((a) => {
                    return a != 0;
                });
                let meanTestYPos = allTestYPos.reduce((a, b) => {
                    return a + b;
                }, 0) / lodash_1.default.size(allTestYPos);
                let distTestYPos = allTestYPos.map((a) => {
                    return Math.pow(Math.abs(a - meanTestYPos), 2);
                });
                stdevTest.push(distTestXPos.map((a, i) => {
                    return Math.sqrt(a + distTestYPos[i]);
                }).reduce((a, b) => {
                    return a + b;
                }, 0) / lodash_1.default.size(allTestXPos));
            }
            this.vitals.stdevTest = stdevTest;
        }
        yDataSmall = utils.smooth(yData, 5);
        yDataLarge = utils.smooth(yData, 100);
        // Calculate timeEnd
        let timeEnd;
        if (lodash_1.default.isUndefined(data.ResponseXYT)
            || lodash_1.default.size(data.ResponseXYT) < 1
            || lodash_1.default.isUndefined(data.ResponseXYT[2][lodash_1.default.size(data.ResponseXYT[2]) - 1])) {
            timeEnd = data.FixationXYT[2][lodash_1.default.size(data.FixationXYT[2]) - 1];
        }
        else {
            timeEnd = data.ResponseXYT[2][lodash_1.default.size(data.ResponseXYT[2]) - 1];
        }
        // RFID
        let numTrials = lodash_1.default.size(yData);
        let numReads = lodash_1.default.size(data.RFIDTag);
        numRFID = lodash_1.default.fill(Array(numTrials), 0);
        this.vitals.tagCount = {};
        for (let i = 0; i < numReads; i++) {
            if (lodash_1.default.isUndefined(this.vitals.tagCount[data.RFIDTag[i][2]])) {
                this.vitals.tagCount[data.RFIDTag[i][2]] = 0;
            }
            this.vitals.tagCount[data.RFIDTag[i][2]] += 1;
            numRFID[data.RFIDTag[i][0]] += 1;
        }
        for (let i = 1; i < lodash_1.default.size(numRFID); i++) {
            numRFID[i] = numRFID[i] + numRFID[i - 1];
        }
        // Adding rest of the data
        for (let i = 0; i < lodash_1.default.size(yData); i++) {
            let timeFix = data.FixationXYT[2][i]; // in milliseconds
            if (timeFix < 0) {
                continue;
            }
            let t = new Date(file.dateSaved);
            t.setTime(t.getTime() - (timeEnd - timeFix));
            this.perfDataTable.addRows([[xData[i], yDataSmall[i], yDataLarge[i]]]);
            this.cumulDataTable.addRows([[t, numTotal[i], numCorrect[i], numRFID[i]]]);
        }
        this.formatDate(this.cumulDataTable, 0);
    }
    generateAndAddRowData(target, numColumns, data) {
        // console.log('data', data);
        let arr = [];
        for (let i = 0; i < numColumns; i++) {
            if (lodash_1.default.has(data, i)) {
                arr.push(data[i]);
            }
            else {
                arr.push(null);
            }
        }
        // console.log('arr:', arr);
        target.addRows([arr]);
    }
    // TODO: deal with case where SampleScenes[0].OBJECTS[firstKey].sizeInches is an
    // Array of arrays -- i.e. scene movie
    getSampleWidth(fileData) {
        let sampleWidth = 0;
        if (lodash_1.default.size(fileData.SampleScenes[0].IMAGES.imageidx) > 0) {
            if (lodash_1.default.isArray(fileData.SampleScenes[0].IMAGES.sizeInches)) {
                let maxSizeInches = lodash_1.default.max(fileData.SampleScenes[0].IMAGES.sizeInches);
                if (lodash_1.default.isNumber(maxSizeInches)) {
                    sampleWidth = maxSizeInches * fileData.ViewportPPI;
                }
            }
            else {
                console.error('SampleScenes[0].IMAGES.sizeInches is not an array. Please fix!');
                sampleWidth = (fileData.SampleScenes[0].IMAGES.sizeInches * fileData.ViewportPPI);
            }
        }
        else {
            let firstKey = lodash_1.default.findKey(fileData.SampleScenes[0].OBJECTS);
            if (lodash_1.default.isString(firstKey)) {
                let maxSizeInches = (lodash_1.default.max(fileData.SampleScenes[0].OBJECTS[firstKey].sizeInches));
                if (lodash_1.default.isNumber(maxSizeInches)) {
                    sampleWidth = maxSizeInches * fileData.ViewportPPI;
                }
            }
            else {
                console.error('firstKey of SampleScenes[0].OBJECTS is not of type string');
            }
        }
        return sampleWidth;
    }
    getTestWidth(fileData) {
        let testWidth = 0;
        if (fileData.TestScenes[0].IMAGES.imageidx.length > 0) {
            if (lodash_1.default.isArray(fileData.TestScenes[0].IMAGES.sizeInches)) {
                let maxSizeInches = lodash_1.default.max(fileData.TestScenes[0].IMAGES.sizeInches);
                if (lodash_1.default.isNumber(maxSizeInches)) {
                    testWidth = maxSizeInches * fileData.ViewportPPI;
                }
                else {
                    console.error('TestScenes[0].IMAGES.sizeInches is not of type number');
                }
            }
            else {
                console.error('TestScenes[0].IMAGES.sizeInches is not an array. Please fix!');
                testWidth = (fileData.TestScenes[0].IMAGES.sizeInches * fileData.ViewportPPI);
            }
        }
        else {
            let firstKey = lodash_1.default.findKey(fileData.TestScenes[0].OBJECTS);
            if (lodash_1.default.isString(firstKey)) {
                let maxSizeInches = (lodash_1.default.max(fileData.TestScenes[0].OBJECTS[firstKey].sizeInches));
                if (lodash_1.default.isNumber(maxSizeInches)) {
                    testWidth = maxSizeInches * fileData.ViewportPPI;
                }
                else {
                    console.error('firstKey of TestScenes[0].OBJECTS is not of type string');
                }
            }
        }
        if (!lodash_1.default.isUndefined(fileData.NRSVP) && fileData.NRSVP > 0) {
            testWidth = fileData.SampleFixationSizeInches * fileData.ViewportPPI;
        }
        return testWidth;
    }
    getFixationWidth(fileData, sampleWidth) {
        let fixationWidth = 0;
        if (fileData.FixationUsesSample <= 0) {
            fixationWidth = fileData.FixationSizeInches * fileData.ViewportPPI;
        }
        else {
            fixationWidth = sampleWidth;
        }
        return fixationWidth;
    }
    getChoiceWidth(fileData) {
        let choiceWidth = 0;
        if (!lodash_1.default.isUndefined(fileData.SameDifferent)
            && fileData.SameDifferent > 0) {
            choiceWidth = fileData.ChoiceSizeInches * fileData.ViewportPPI;
        }
        return choiceWidth;
    }
    loadObjPerfData(data) {
        this.objPerfDataTable.removeRows(0, this.objPerfDataTable.getNumberOfRows());
        let lenSampleObj;
        if (data.RewardStage == 1) {
            let sampleObj = [];
            if (data.NTrialsPerBagBlock > 5000) {
                sampleObj.push(data.ImageBagsSample[0].split('/')[5]);
                this.objPerfDataTable.addRow([sampleObj[0], 0]);
                lenSampleObj = 1;
            }
            else {
                for (let i = 0; i < lodash_1.default.size(data.ImageBagsSample); i++) {
                    sampleObj.push(data.ImageBagsSample[i].split('/')[5]);
                    this.objPerfDataTable.addRow([sampleObj[i], 0]);
                }
                lenSampleObj = lodash_1.default.size(sampleObj);
            }
            let NDiffObjPerf = lodash_1.default.fill(Array(lenSampleObj), 0);
            let NDiffObj = lodash_1.default.fill(Array(lenSampleObj), 0);
            for (let i = 0; i < lodash_1.default.size(data.Sample[0]); i++) { // For i trials
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
    loadChoiceData(data) {
        this.choiceDataTable.removeRows(0, this.choiceDataTable.getNumberOfRows());
        if (data.RewardStage != 0) {
            // let possibleResp = _.fill(Array(_.size(data.ObjectGridIndex)), 0);
            let possibleResp = [];
            if (lodash_1.default.size(data.ObjectGridIndex) != 0
                && (lodash_1.default.isUndefined(data.NTrialsPerBagBlock)
                    || data.NTrialsPerBagBlock < 1000)) {
                let objGridIndex = lodash_1.default.cloneDeep(data.ObjectGridIndex);
                objGridIndex.sort((a, b) => {
                    return a - b;
                });
                let allind = [];
                for (let i = 0; i < lodash_1.default.size(objGridIndex); i++) {
                    // allind.push(_.findIndex(data.ObjectGridIndex, objGridIndex[i]));
                    allind.push(data.ObjectGridIndex.indexOf(objGridIndex[i]));
                    this.choiceDataTable.addRow([data.ImageBagsSample[allind[i]].split('/')[5], 0]);
                    possibleResp.push(i);
                }
            }
            else {
                for (let i = 0; i < lodash_1.default.size(data.TestGridIndex); i++) {
                    this.choiceDataTable.addRow(['choice' + (i + 1), 0]);
                    possibleResp.push(i);
                }
            }
            let NDiffChoice = lodash_1.default.fill(Array(lodash_1.default.size(possibleResp)), 0);
            let NAllChoice = 0;
            for (let i = 0; i < lodash_1.default.size(data.Response); i++) {
                if (data.Response[i] != -1) {
                    NAllChoice++;
                }
                for (let j = 0; j < lodash_1.default.size(possibleResp); j++) {
                    if (data.Response[i] == possibleResp[j] && data.Response[i] != -1) {
                        NDiffChoice[j]++;
                    }
                    this.choiceDataTable.setValue(j, 1, NDiffChoice[j] / NAllChoice);
                }
            }
        }
        else {
            this.choiceDataTable.addRow(['outside Fix', 0]);
            this.choiceDataTable.addRow(['inside Fix', 0]);
            let NDiffChoice = lodash_1.default.fill(Array(2), 0);
            let NAllChoice = 0;
            let yData = [];
            for (let i = 0; i < lodash_1.default.size(data.CorrectItem); i++) {
                if (data.CorrectItem[i] == data.Response[i]) {
                    yData.push(1);
                }
                else {
                    yData.push(0);
                }
            }
            for (let i = 0; i < lodash_1.default.size(yData); i++) {
                NAllChoice++;
                for (let j = 0; j < 2; j++) {
                    if (yData[i] == j) {
                        NDiffChoice[j] += 1;
                    }
                    this.choiceDataTable.setValue(j, 1, NDiffChoice[j] / NAllChoice);
                }
            }
        }
    }
    loadRewardData(data) {
        this.rewardDataTable.removeRows(0, this.rewardDataTable.getNumberOfRows());
        let NRewardMax = [];
        for (let i = 0; i < data.NRewardMax; i++) {
            NRewardMax.push(i.toString());
        }
        // NRewardMax.unshift('-1');
        for (let i = 0; i < lodash_1.default.size(NRewardMax); i++) {
            this.rewardDataTable.addRow([NRewardMax[i], 0]);
        }
        let NDiffReward = lodash_1.default.fill(Array(lodash_1.default.size(NRewardMax)), 0);
        for (let i = 0; i < lodash_1.default.size(data.NReward); i++) {
            if (data.Response[i] == -1) {
                NDiffReward[0]++;
                this.rewardDataTable.setValue(0, 1, NDiffReward[0] / lodash_1.default.size(data.NReward));
            }
            else {
                for (let j = 1; j < lodash_1.default.size(NRewardMax); j++) {
                    if (data.NReward[i].toString() == NRewardMax[j]) {
                        NDiffReward[j]++;
                    }
                    this.rewardDataTable.setValue(j, 1, NDiffReward[j] / lodash_1.default.size(data.NReward));
                }
            }
        }
    }
    drawPerformancePlot(file) {
        var _a;
        let numRows = this.perfDataTable.getNumberOfRows();
        this.nTrials = numRows;
        let perfFilterState = this.perfFilter.getState();
        // updating perfFilter
        if (file.dataChanged && !file.fileChanged) {
            if (numRows <= 100) {
                // expand window size automatically up to 100
                perfFilterState.range.start = 0;
                perfFilterState.range.end = numRows;
            }
            else {
                let dTrials = numRows - lodash_1.default.size((_a = file.data) === null || _a === void 0 ? void 0 : _a.FixationGridIndex);
                console.log('dtrials', dTrials);
                perfFilterState.range.start = numRows - 100;
                perfFilterState.range.end = numRows;
            }
        }
        else if (file.fileChanged) {
            let dSlider = 100;
            perfFilterState.range.start = numRows - dSlider;
            perfFilterState.range.end = numRows;
            if (perfFilterState.range.start < 0) {
                perfFilterState.range.start = 0;
            }
        }
        this.perfPlot.setOptions(this.perfPlotOptions);
        this.perfFilter.setState({
            range: {
                start: perfFilterState.range.start,
                end: perfFilterState.range.end
            }
        });
        this.perfDashboard.draw(this.perfDataTable);
    }
    drawTrialPlot(file) {
        let trialFilterState = this.trialFilter.getState();
        let tmin = new Date(this.cumulDataTable.getColumnRange(0).min);
        let tmax = new Date(this.cumulDataTable.getColumnRange(0).max);
        if (file.dataChanged || file.fileChanged) {
            trialFilterState.range.start = tmin;
            trialFilterState.range.end = tmax;
        }
        this.trialFilter.setState({
            range: {
                start: trialFilterState.range.start,
                end: trialFilterState.range.end
            }
        });
        this.trialPlot.setOptions(this.trialPlotOptions);
        this.trialDashboard.draw(this.cumulDataTable);
    }
    drawObjPerfPlot() {
        this.objPerfPlot.draw(this.objPerfDataTable, this.objPerfPlotOptions);
    }
    drawRxnTimePlot() {
        this.rxnPlot.draw(this.rxnTimeDataTable, this.rxnPlotOptions);
    }
    drawChoicePlot() {
        this.choicePlot.draw(this.choiceDataTable, this.choicePlotOptions);
    }
    drawRewardPlot() {
        this.rewardPlot.draw(this.rewardDataTable, this.rewardPlotOptions);
    }
    drawRealtimePlot(data) {
        let idx = 0;
        this.realtimePlotOptions = {
            seriesType: 'scatter',
            width: data.workspace[2] * data.CanvasRatio,
            height: data.ViewportPixels[1] - data.offsettop,
            legend: {
                position: 'top'
            },
            hAxis: {
                title: 'X position (px)',
                viewWindow: {
                    min: 0,
                    max: data.workspace[2] * data.CanvasRatio
                }
            },
            vAxis: {
                title: 'Y position (px)',
                viewWindow: {
                    min: 0,
                    max: data.ViewportPixels[1] - data.offsettop
                }
            }
        };
        this.realtimePlotOptions.hAxis = {
            title: 'X position (px)',
            viewWindow: {
                min: 0,
                max: data.workspace[2] * data.CanvasRatio
            }
        };
        this.realtimePlotOptions.vAxis = {
            title: 'Y position (px)',
            viewWindow: {
                min: 0,
                max: data.ViewportPixels[1] - data.offsettop
            }
        };
        let numCol = this.realtimeDataTable.getNumberOfColumns();
        this.generateAndAddRowData(this.realtimeDataTable, numCol, { 0: 0, [numCol - 2]: 0 });
        let numRows = this.realtimeDataTable.getNumberOfRows();
        this.realtimePlotConfig = {
            chartType: 'ComboChart',
            containerId: 'realtime-plot',
            options: this.realtimePlotOptions
        };
        this.realtimePlot = (new google.visualization.ChartWrapper(this.realtimePlotConfig));
        this.realtimePlot.setDataTable(this.realtimeDataTable);
        window.addEventListener('data_arrived', (evt) => {
            if (idx % 2 == 0) {
                this.realtimeDataTable.setValue(numRows - 1, 0, Math.floor(evt.detail.x));
                this.realtimeDataTable.setValue(numRows - 1, numCol - 2, Math.floor(evt.detail.y));
                this.realtimePlot.draw();
            }
        });
    }
    drawStaticElements(cvs, ctx, data) {
        if (ctx) {
            ctx.fillStyle = 'gray';
            ctx.fillRect(0, 0, data.workspace[2] * data.CanvasRatio, data.ViewportPixels[1] - data.offsettop);
            // Fixation
            if (data.FixationUsesSample < 1) {
                ctx.strokeStyle = '#0000FF';
                ctx.beginPath();
                ctx.arc(this.rtData.fixation.x, cvs.height - this.rtData.fixation.y, this.rtData.fixation.width / 2, 0, Math.PI * 2, true);
                ctx.stroke();
            }
            // Sample
            ctx.strokeStyle = '#000000'; // black
            ctx.beginPath();
            ctx.rect(this.rtData.sample.x - this.rtData.sample.width / 2, cvs.height - (this.rtData.sample.y + this.rtData.sample.height / 2), this.rtData.sample.width, this.rtData.sample.height);
            ctx.stroke();
            // Test
            for (let i = 0; i < lodash_1.default.size(this.rtData['test']); i++) {
                console.log('test');
                ctx.beginPath();
                ctx.rect(this.rtData['test'][i].x - this.rtData['test'][i].width / 2, cvs.height - (this.rtData['test'][i].y + this.rtData['test'][i].height / 2), this.rtData['test'][i].width, this.rtData['test'][i].height);
                ctx.stroke();
            }
            // Choice
            for (let i = 0; i < lodash_1.default.size(this.rtData['choice']); i++) {
                ctx.beginPath();
                ctx.rect(this.rtData['choice'][i].x - this.rtData['choice'][i].width / 2, cvs.height - (this.rtData['choice'][i].y + this.rtData['choice'][i].height / 2), this.rtData['choice'][i].width, this.rtData['choice'][i].height);
                ctx.stroke();
            }
            let fixWinSz = data.FixationWindowSizeInches;
            if (lodash_1.default.isNumber(fixWinSz) && fixWinSz > 0) {
                ctx.strokeStyle = '#FFFF00'; // yellow
                ctx.strokeRect(this.rtData.fixation.x - lodash_1.default.floor(fixWinSz / 2 * data.ViewportPPI), cvs.height
                    - (this.rtData.fixation.y + lodash_1.default.floor(fixWinSz / 2 * data.ViewportPPI)), lodash_1.default.floor(fixWinSz * data.ViewportPPI), lodash_1.default.floor(fixWinSz * data.ViewportPPI));
            }
        }
    }
    drawRealtimePlot2(data) {
        let cvs = document.querySelector('#realtime-canvas');
        cvs.width = data.workspace[2] * data.CanvasRatio;
        cvs.height = data.ViewportPixels[1] - data.offsettop;
        let ctx = cvs.getContext('2d');
        this.drawStaticElements(cvs, ctx, data);
        window.addEventListener('data_arrived', (evt) => {
            if (evt.detail.meta == 2) {
                this.drawStaticElements(cvs, ctx, data);
            }
            if (evt.detail.meta == 1) {
                ctx.fillStyle = 'green';
            }
            else if (evt.detail.meta == 0) {
                ctx.fillStyle = 'red';
            }
            ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
            let x = lodash_1.default.floor(evt.detail.x);
            let y = lodash_1.default.floor(cvs.height - evt.detail.y);
            ctx === null || ctx === void 0 ? void 0 : ctx.arc(x, y, 2, 0, Math.PI * 2, true);
            ctx === null || ctx === void 0 ? void 0 : ctx.fill();
        });
    }
    drawScreenPlot(data, screenActive) {
        this.screenPlotOptions.series = [];
        for (let i = 0; i < this.xyPosDataTable.getNumberOfColumns(); i++) {
            if (this.xyPosDataTable.getColumnLabel(i) == 'Fixation') {
                this.screenPlotOptions.series[i - 1] = { type: 'line', color: 'gray' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Sample') {
                this.screenPlotOptions.series[i - 1] = ({ type: 'line', color: 'black' });
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Same') {
                this.screenPlotOptions.series[i - 1] = ({ type: 'line', color: 'green' });
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Different') {
                this.screenPlotOptions.series[i - 1] = ({ type: 'line', color: 'red' });
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Fix_Reward') {
                this.screenPlotOptions.series[i - 1] = { color: 'blue' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Fix_Punish') {
                this.screenPlotOptions.series[i - 1] = { color: 'red' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Target_Reward') {
                this.screenPlotOptions.series[i - 1] = { color: 'green' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i) == 'Target_Punish') {
                this.screenPlotOptions.series[i - 1] = { color: 'black' };
            }
            else if (this.xyPosDataTable.getColumnLabel(i).includes('Test')) {
                this.screenPlotOptions.series[i - 1] = ({ type: 'line', color: 'black' });
            }
        }
        this.screenPlotOptions.height = data.ViewportPixels[1];
        this.screenPlotOptions.width = data.ViewportPixels[0];
        this.screenPlotOptions.hAxis = {
            title: 'X position (px)',
            viewWindow: {
                min: 0,
                max: data.ViewportPixels[0]
            }
        };
        this.screenPlotOptions.vAxis = {
            title: 'Y position (px)',
            viewWindow: {
                min: 0,
                max: data.ViewportPixels[1]
            }
        };
        if (!this.realtimePlotActive) {
            this.screenPlot.draw(this.xyPosDataTable, this.screenPlotOptions);
        }
    }
    formatDate(data, colIdx) {
        let formatter = new google.visualization.DateFormat({
            pattern: 'h aa'
        });
        formatter.format(data, colIdx);
    }
    formatNumber(data, colIdx) {
        let formatter = new google.visualization.NumberFormat({
            fractionDigits: 2
        });
        formatter.format(data, colIdx);
    }
    formatColor(data, colIdx) {
        let formatter = new google.visualization.ColorFormat();
        let dx = 1 / (colorMapJet.length - 1);
        for (let i = 0; i < colorMapJet.length; i++) {
            formatter.addRange(i * dx, (i + 1) * dx, 'gray', colorMapJet[i]);
        }
        formatter.format(data, colIdx);
    }
}
exports.Charts = Charts;


/***/ }),

/***/ "./src/liveplot.ts":
/*!*************************!*\
  !*** ./src/liveplot.ts ***!
  \*************************/
/*! flagged exports */
/*! export Liveplot [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Liveplot = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const app_1 = tslib_1.__importDefault(__webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js"));
__webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
__webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
__webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
const jsoneditor_1 = tslib_1.__importDefault(__webpack_require__(/*! jsoneditor */ "./node_modules/jsoneditor/dist/jsoneditor.min.js"));
const lodash_1 = tslib_1.__importDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));
// import 'jsoneditor/dist/jsoneditor.css'
// import './jsoneditor.css';
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const charts_1 = __webpack_require__(/*! ./charts */ "./src/charts.ts");
const storage = app_1.default.storage();
const storageRef = storage.ref();
const rtdb = app_1.default.database();
const DATA_PATH = 'mkturkfiles/datafiles/';
const DATA_REF = storageRef.child(DATA_PATH);
const PARAM_PATH = 'mkturkfiles/parameterfiles/subjects/';
const PARAM_REF = storageRef.child(PARAM_PATH);
const AGENTS_REF = rtdb.ref('agents/');
const utils = new utils_1.Utils;
class Liveplot {
    constructor(elemObj) {
        this.elemObjs = elemObj;
        this.file = {
            path: DATA_PATH,
            list: [],
            name: '',
            ver: null,
            date: null,
            dataChanged: false,
            fileChanged: false,
        };
        this.charts = new charts_1.Charts(elemObj);
        this.streamActive = false;
        this.requestRealtimeBtnAction();
        this.onDisconnectAction();
    }
    fileSelectionChangedListener(elem) {
        elem.addEventListener('input', (evt) => {
            var _a;
            evt.stopPropagation();
            evt.preventDefault();
            if (this.streamActive) {
                let agent = (_a = this.file.data) === null || _a === void 0 ? void 0 : _a.Agent;
                rtdb.ref(`data/${agent}`).off();
                this.agentClientRef.remove(err => {
                    if (err) {
                        console.error(`Error Removing agentClientRef: ${err}`);
                    }
                });
                this.streamActive = false;
            }
            this.file.name = this.file.list[parseInt(elem.value)].fullpath;
            this.file.fileChanged = true;
        });
    }
    onDisconnectAction() {
        window.addEventListener('unload', (evt) => {
            this.agentClientRef.onDisconnect().remove();
        });
    }
    requestRealtimeBtnAction() {
        let realtimeBtn = this.elemObjs.realtimeBtn;
        realtimeBtn.addEventListener('click', async (evt) => {
            var _a;
            evt.stopPropagation();
            evt.preventDefault();
            let agent = (_a = this.file.data) === null || _a === void 0 ? void 0 : _a.Agent;
            if (this.streamActive) {
                realtimeBtn.innerHTML = 'Request Realtime Stream';
                rtdb.ref(`data/${agent}`).off();
                this.agentClientRef.remove(err => {
                    if (err) {
                        console.error(`Error Removing agentClientRef: ${err}`);
                    }
                });
                rtdb.ref(`data/${agent}`).off();
                this.streamActive = false;
            }
            else {
                realtimeBtn.innerHTML = 'Deactivate Realtime Stream';
                let agentClientKey = rtdb.ref(`agents/${agent}`).push().key;
                this.agentClientRef = rtdb.ref(`agents/${agent}/${agentClientKey}`);
                if (lodash_1.default.isString(agentClientKey)) {
                    rtdb.ref(`agents/${agent}`).update({
                        [agentClientKey]: true
                    });
                }
                rtdb.ref(`data/${agent}`).on('value', snap => {
                    let event = (new CustomEvent('data_arrived', { detail: snap.val() }));
                    window.dispatchEvent(event);
                });
                this.streamActive = true;
            }
        });
    }
    async populateFileList(elem) {
        try {
            let fileList = await utils.getFileList(this.file.path);
            fileList.sort((a, b) => {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
            this.file.list = fileList;
            for (let i = 0; i < fileList.length; i++) {
                let opt = document.createElement('option');
                opt.value = i.toString();
                opt.innerHTML = fileList[i].name;
                elem.appendChild(opt);
            }
            this.file.name = this.file.list[0].fullpath;
            this.file.fileChanged = true;
            let rawStorageFile = await utils.getStorageFile(this.file.name);
            console.log('rawFile', rawStorageFile);
            this.processData(rawStorageFile);
        }
        catch (error) {
            console.error('ERROR #file-list:', error);
        }
    }
    flattenData(data) {
        let tmp = {};
        for (let outerKey in data) {
            if (data.hasOwnProperty(outerKey)) {
                for (let innerKey in data[outerKey]) {
                    if (data[outerKey].hasOwnProperty(innerKey)) {
                        tmp[innerKey] = data[outerKey][innerKey];
                    }
                }
            }
        }
        return tmp;
    }
    async processData(data) {
        this.file.data = this.flattenData(data);
        this.loadDataToEditor(this.file.data);
        // console.log(this.file.data);
        let metadata = await utils.getStorageFileMetadata(this.file.name);
        console.log('Success! Loaded File Size:', metadata.size / 1000, 'KB');
        this.file.ver = metadata.generation;
        this.file.dateSaved = new Date(metadata.updated);
        console.log(this.file.dateSaved);
        // this.file.data.CurrentDate = (
        //   new Date(this.file.data.CurrentDate).valueOf()
        // );
        if (this.file.fileChanged) {
            this.charts.initializeChartData(this.file, { streamActive: this.streamActive });
            this.checkFileStatus();
            this.file.fileChanged = false;
            this.file.dataChanged = false;
        }
        else if (this.file.dataChanged) {
            this.charts.updatePlots(this.file, { streamActive: this.streamActive });
            this.file.dataChanged = false;
            this.checkFileStatus();
        }
    }
    setupEditor(elem) {
        this.editor = new jsoneditor_1.default(elem);
    }
    loadDataToEditor(data) {
        if (this.file.fileChanged) {
            this.editor.set(data);
        }
        else {
            this.editor.update(data);
        }
    }
    async checkFileStatus() {
        try {
            let metadata = await utils.getStorageFileMetadata(this.file.name);
            if (this.file.ver != metadata.generation) {
                this.file.ver = metadata.generation;
                this.file.dateSaved = new Date(metadata.updated);
                console.log(this.file.dateSaved);
                this.file.dataChanged = true;
                console.log('File was updated ver=' + this.file.ver);
            }
            else {
                this.file.dataChanged = false;
            }
            if (this.file.fileChanged == true || this.file.dataChanged == true) {
                let rawStorageFile = await utils.getStorageFile(this.file.name);
                // console.log('rawFile', rawStorageFile);
                this.processData(rawStorageFile);
            }
            else {
                setTimeout(() => {
                    this.checkFileStatus();
                }, 1000);
            }
        }
        catch (error) {
            console.error('checkFileStatus Error:', error);
        }
        return false; // why needed
    }
}
exports.Liveplot = Liveplot;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
__webpack_require__(/*! ./styles.css */ "./src/styles.css");
const app_1 = tslib_1.__importDefault(__webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js"));
__webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
const firebaseConfig = {
    apiKey: "AIzaSyA0fbv2VqE-AfF6V_nxSSXCEqaTlBlZnTI",
    authDomain: "sandbox-ce2c5.firebaseapp.com",
    databaseURL: "https://sandbox-ce2c5.firebaseio.com",
    projectId: "sandbox-ce2c5",
    storageBucket: "sandbox-ce2c5.appspot.com",
    messagingSenderId: "1003719887944",
    clientId: "1003719887944-rlc06cjecqrp9fgvmvo56vqop1otm9ht.apps.googleusercontent.com"
};
app_1.default.initializeApp(firebaseConfig);
const liveplot_1 = __webpack_require__(/*! ./liveplot */ "./src/liveplot.ts");
let fileListSelector = document.querySelector('#file-list');
let editorDiv = document.querySelector('#editor');
let elemObj = {
    perfDiv: document.querySelector('#performance-dashboard'),
    perfPlot: document.querySelector('#performance-plot'),
    perfFilter: document.querySelector('#performance-filter'),
    trialDiv: document.querySelector('#trial-dashboard'),
    trialPlot: document.querySelector('#trial-plot'),
    trialFilter: document.querySelector('#trial-filter'),
    screenPlot: document.querySelector('#screen-plot'),
    // realtimePlot: document.querySelector('#realtime-plot') as HTMLDivElement,
    rxnPlot: document.querySelector('#reaction-plot'),
    choicePlot: document.querySelector('#choice-plot'),
    objPerfPlot: document.querySelector('#obj-perf-plot'),
    rewardPlot: document.querySelector('#reward-plot'),
    perfVitals: document.querySelector('#performance-vitals'),
    rfidVitals: document.querySelector('#rfid-vitals'),
    batteryVitals: document.querySelector('#battery-vitals'),
    trialVitals: document.querySelector('#trial-vitals'),
    fixStdev: document.querySelector('#fixation-stdev'),
    tarZeroStdev: document.querySelector('#target0-stdev'),
    tarOneStdev: document.querySelector('#target1-stdev'),
    sdTextDiv: document.querySelector('#touch-sd-text'),
    realtimeBtn: document.querySelector('#request-realtime'),
};
const lp = new liveplot_1.Liveplot(elemObj);
lp.setupEditor(editorDiv);
lp.fileSelectionChangedListener(fileListSelector);
lp.populateFileList(fileListSelector);
// fileListSelector.addEventListener('change', evt => {
//   evt.preventDefault();
//   evt.stopPropagation();
//   console.log('New File!');
//   file.name = file.fileList[parseInt(fileListSelector.value)].fullpath;
//   file.fileChanged = true;
//   console.log('file name:', file.name);
//   console.log('file path', file.path);
// });
// let file: any = {
//   path: DATA_PATH,
//   list: [],
//   fileList: [],
//   name: '',
//   data: null,
//   ver: null,
//   date: null,
//   dateChanged: false,
//   fileChanged: false
// };
// console.log('hello hector');
// async function populateDropdownMenu() {
//   try {
//     let fileList = await utils.getFileList(file.path);
//     fileList.sort((a: any, b: any) => {
//       let nameA = a.name.toUpperCase();
//       let nameB = b.name.toUpperCase();
//       if (nameA > nameB) {
//         return -1;
//       }
//       if (nameA < nameB) {
//         return 1;
//       }
//       return 0;
//     });
//     file.fileList = fileList;
//     for (let i = 0; i < fileList.length; i++) {
//       let opt = document.createElement('option');
//       opt.value = i.toString();
//       opt.innerHTML = fileList[i].name;
//       fileListSelector.appendChild(opt);
//     }
//     file.name = file.fileList[0].fullpath;
//     file.fileChanged = true;
//   } catch (error) {
//     console.error('ERROR #file-list:', error);
//   }
// }
// populateDropdownMenu();
// async function loadAndRenderEditor(filePath: string) {
//   let dataFile = utils.getStorageFile(filePath);
// }
let provider = new app_1.default.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
app_1.default.auth().getRedirectResult().then(function (result) {
    if (result.user) {
        // User just signed in. you can get the result.credential.
        console.log('Sign-In Redirect Result, USER ' + result.user.email + ' is signed in');
    }
    else if (app_1.default.auth().currentUser) {
        // User already signed in.
        console.log('Sign-In Redirect Result, USER is signed in');
    }
    else {
        // No user signed in, update your UI, show the redirect sign-in screen.
        app_1.default.auth().signInWithRedirect(provider);
    }
});


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! flagged exports */
/*! export Utils [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utils = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
const app_1 = tslib_1.__importDefault(__webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js"));
__webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
__webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
const storage = app_1.default.storage();
const storageRef = storage.ref();
class Utils {
    constructor() { }
    async getFileList(path, ext) {
        let fileList = await storageRef.child(path).listAll();
        /* only keep files within the last 2 years*/
        let year = new Date().getFullYear();
        let files = [];
        for (let item of fileList.prefixes) {
            let subFileList = (await this.getFileList(path + item.name + '/', ext));
            files = [...files, ...subFileList];
        }
        for (let i = 0; i < fileList.items.length; i++) {
            if (typeof (ext) == 'string') {
                if (fileList.items[i].name.endsWith(ext)) { // if file extension is correct
                    files.push({
                        fullpath: fileList.items[i].fullPath,
                        name: fileList.items[i].name
                    });
                }
            }
            else if (parseInt(fileList.items[i].name.slice(0, 4)) >= year - 1) {
                files.push({
                    fullpath: fileList.items[i].fullPath,
                    name: fileList.items[i].name
                });
            }
        }
        return files;
    }
    async getStorageFile(path) {
        let fileRef = storageRef.child(path);
        console.log('fileRef:', fileRef);
        let file = await storageRef.child(path).getDownloadURL().then(async (url) => {
            let response = await fetch(url);
            return response.json();
        }).catch(e => {
            console.error('Error Getting URL:', e);
        });
        console.log('file:', file);
        return file;
    }
    async getStorageFileMetadata(path) {
        let fileRef = storageRef.child(path);
        let metadata = await fileRef.getMetadata();
        return metadata;
    }
    smooth(data, n) {
        let smoothedData = [];
        for (let i = 0; i < data.length; i++) {
            if (i < n - 1) {
                let tmp = data.slice(0, i + 1);
                smoothedData[i] = tmp.reduce((a, b) => {
                    return a + b;
                });
                smoothedData[i] /= (i + 1);
            }
            else {
                let tmp = data.slice(i - n + 1, i + 1);
                smoothedData[i] = tmp.reduce((a, b) => {
                    return a + b;
                });
                smoothedData[i] /= n;
            }
        }
        return smoothedData;
    }
    calcDistance(a, b) {
        return Math.pow(Math.abs(a - b), 2);
    }
}
exports.Utils = Utils;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/main.ts","vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-4324b1"],
/******/ 			["./src/utils.ts","vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-4324b1"]
/******/ 		];
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
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkliveplot2"] = self["webpackChunkliveplot2"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlcGxvdDIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9saXZlcGxvdDIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2xpdmVwbG90Mi8uL3NyYy9jaGFydHMudHMiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyLy4vc3JjL2xpdmVwbG90LnRzIiwid2VicGFjazovL2xpdmVwbG90Mi8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL2xpdmVwbG90Mi8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9saXZlcGxvdDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpdmVwbG90Mi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2xpdmVwbG90Mi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsQ0FBc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixD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TSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSwySkFBMkosMGdCQUEwZ0IsbURBQW1ELGNBQWMsZUFBZSxHQUFHLHFDQUFxQyx1QkFBdUIsR0FBRyxvRUFBb0UsdUJBQXVCLEdBQUcseUNBQXlDLGtCQUFrQixHQUFHLDBFQUEwRSxrQkFBa0IsR0FBRyxpSkFBaUosc0JBQXNCLEdBQUcsNENBQTRDLGlCQUFpQixHQUFHLGtDQUFrQyxlQUFlLHVCQUF1QiwyQkFBMkIsaUJBQWlCLGdCQUFnQixHQUFHLG1EQUFtRCxpQkFBaUIsc0JBQXNCLEdBQUcsb0VBQW9FLDRCQUE0QixnQkFBZ0IsR0FBRywyQ0FBMkMsaUJBQWlCLHNCQUFzQixHQUFHLHVCQUF1QixpQkFBaUIsMEJBQTBCLHlCQUF5QixrQkFBa0IsbUNBQW1DLG1DQUFtQyxtQ0FBbUMsR0FBRywyQkFBMkIsaUJBQWlCLEdBQUcsa0RBQWtELGlCQUFpQix5QkFBeUIsNkJBQTZCLHlCQUF5QixlQUFlLG1CQUFtQiw2QkFBNkIsR0FBRyxvREFBb0Qsa0JBQWtCLHdCQUF3QixHQUFHLGdDQUFnQyxjQUFjLHNCQUFzQixtQkFBbUIsR0FBRyxrQ0FBa0MsbUJBQW1CLGNBQWMsR0FBRyxnRkFBZ0YsbUJBQW1CLGtDQUFrQyxHQUFHLDZEQUE2RCw4Q0FBOEMsR0FBRyxrQkFBa0IsdUJBQXVCLGdCQUFnQixjQUFjLGlCQUFpQixHQUFHLCtEQUErRCx1QkFBdUIsd0JBQXdCLEdBQUcscUNBQXFDLHNCQUFzQixHQUFHLCtDQUErQyxxQkFBcUIsR0FBRyw2QkFBNkIsMEJBQTBCLHlCQUF5QixrQkFBa0IsZ0NBQWdDLCtCQUErQixnQ0FBZ0Msb0NBQW9DLDhCQUE4QixvQ0FBb0MsR0FBRywwQ0FBMEMsc0JBQXNCLEdBQUcsZ0RBQWdELG9CQUFvQixHQUFHLDhCQUE4Qix1QkFBdUIsZ0JBQWdCLGFBQWEsZUFBZSxHQUFHLHNDQUFzQywwQkFBMEIseUJBQXlCLGtCQUFrQixnQ0FBZ0MsK0JBQStCLGdDQUFnQyx3Q0FBd0MsNkJBQTZCLHdDQUF3Qyx5QkFBeUIsNkJBQTZCLHlCQUF5QiwyQkFBMkIsNkJBQTZCLDJCQUEyQixHQUFHLG9DQUFvQyx5QkFBeUIsNkJBQTZCLHlCQUF5QiwyQkFBMkIsNkJBQTZCLDJCQUEyQixxQkFBcUIsR0FBRyx1Q0FBdUMsdUJBQXVCLGNBQWMseUJBQXlCLEdBQUcsc0NBQXNDLDBCQUEwQixHQUFHLHFGQUFxRixnQkFBZ0IsaUJBQWlCLHdCQUF3QixrQkFBa0IsR0FBRywyREFBMkQsaUJBQWlCLGtCQUFrQix3QkFBd0IscUJBQXFCLEdBQUcsNEVBQTRFLGdCQUFnQixpQkFBaUIsd0JBQXdCLHFCQUFxQixHQUFHLHFDQUFxQyxvQkFBb0IsNkJBQTZCLEdBQUcscUVBQXFFLDZDQUE2QyxHQUFHLG1FQUFtRSx3QkFBd0IsR0FBRyxtREFBbUQsNEJBQTRCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHdDQUF3Qyx3QkFBd0IsR0FBRyxrQkFBa0IsbUNBQW1DLGlCQUFpQixlQUFlLHNCQUFzQiwwQkFBMEIseUJBQXlCLGtCQUFrQixtQ0FBbUMsbUNBQW1DLG1DQUFtQyxHQUFHLHFCQUFxQixzQkFBc0Isa0JBQWtCLEdBQUcsb0JBQW9CLG1CQUFtQiwwQkFBMEIsb0JBQW9CLHNCQUFzQixtQkFBbUIsR0FBRyxrQ0FBa0MsZ0JBQWdCLEdBQUcsZ0JBQWdCLHNCQUFzQixrQkFBa0IsR0FBRyxxQkFBcUIsZ0JBQWdCLEdBQUcsdUJBQXVCLGdCQUFnQixHQUFHLGVBQWUsc0JBQXNCLGtCQUFrQixHQUFHLGlCQUFpQixtQkFBbUIsc0JBQXNCLHdCQUF3QixHQUFHLHFCQUFxQjtBQUNqN2M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QyxDQUF5RjtBQUN6RixZQUF3Rjs7QUFFeEY7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsb0ZBQU87Ozs7QUFJeEIsaUVBQWUsMkZBQWMsTUFBTSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWm5DLCtHQUF1QjtBQUV2QixxRUFBZ0M7QUFFaEMsTUFBTSxXQUFXLEdBQUc7SUFDbEIsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUztJQUN2QyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTO0lBQ3ZDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVM7SUFDdkMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUztJQUN2QyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTO0lBQ3ZDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVM7SUFDdkMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUztJQUN2QyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTO0lBQ3ZDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVM7SUFDdkMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUztJQUN2QyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTO0lBQ3ZDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVM7SUFDdkMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUztJQUN2QyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTO0lBQ3ZDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLFNBQVM7SUFDdkMsU0FBUyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUztDQUN4QyxDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztBQUcxQixNQUFhLE1BQU07SUF1RGpCLFlBQVksT0FBWTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osT0FBTyxFQUFFLElBQUk7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLE1BQU0sRUFBRSxDQUFDO1lBQ1QsSUFBSSxFQUFFLENBQUM7WUFDUCxXQUFXLEVBQUUsQ0FBQztZQUNkLFdBQVcsRUFBRSxDQUFDO1lBQ2QsY0FBYyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLEVBQUU7WUFDYixjQUFjLEVBQUUsQ0FBQztZQUNqQixrQkFBa0IsRUFBRSxFQUFFO1lBQ3RCLFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxFQUFFLEVBQUU7WUFDWCxRQUFRLEVBQUUsQ0FBQztZQUNYLFFBQVEsRUFBRSxFQUFFO1NBQ2I7SUFDSCxDQUFDO0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUVuQixDQUFDO0lBRU0sS0FBSyxDQUFDLFdBQVc7UUFDdEIsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQ25CLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FDNUQsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FDZCxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FDM0QsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FDaEIsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FDL0QsQ0FBQztRQUVGLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FDcEIsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUM3RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUNmLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUM1RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUNqQixJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUNoRSxDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUNoQixJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQ2hFLENBQUM7UUFDRix3QkFBd0I7UUFDeEIsbUVBQW1FO1FBQ25FLEtBQUs7UUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQ2IsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUM1RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUNoQixJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQ2pFLENBQUM7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLENBQ2hCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FDakUsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FDakIsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUNsRSxDQUFDO0lBRUosQ0FBQztJQUVNLGlCQUFpQjtRQUV0QixJQUFJLENBQUMsZUFBZSxHQUFHO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxXQUFXO1lBQzNDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZO1lBQzdDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7WUFDMUIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNqRSxTQUFTLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtnQkFDdkIsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTthQUN4QjtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxHQUFHO1lBQ3BCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlO1NBQzlCLENBQUM7UUFDRixJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkIsaUJBQWlCLEVBQUUsY0FBYztZQUNqQyxFQUFFLEVBQUU7Z0JBQ0YsU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLFlBQVksRUFBRTtvQkFDWixNQUFNLEVBQUUsRUFBRTtvQkFDVixLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7b0JBQ2pELEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7b0JBQ3ZELEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXO29CQUM3QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsWUFBWTtvQkFDL0MsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2lCQUM3QztnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDaEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUM7YUFDaEI7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3RCLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUN4QyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUNoQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxXQUFXO1lBQzVDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZO1lBQzlDLFdBQVcsRUFBRSxHQUFHO1lBQ2hCLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUM7WUFDNUIsS0FBSyxFQUFFO2dCQUNMLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7Z0JBQzNCLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7YUFDcEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRTtnQkFDekIsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRTtnQkFDekIsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRTthQUMxQjtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxHQUFHO1lBQ3JCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQy9CLENBQUM7UUFDRixJQUFJLENBQUMsa0JBQWtCLEdBQUc7WUFDeEIsaUJBQWlCLEVBQUUsTUFBTTtZQUN6QixFQUFFLEVBQUU7Z0JBQ0YsU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLFlBQVksRUFBRTtvQkFDWixLQUFLLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7b0JBQy9DLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7b0JBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXO29CQUM5QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWTtvQkFDaEQsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2lCQUM3QzthQUNGO1lBQ0QsU0FBUyxFQUFFO2dCQUNULE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDaEI7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBQ3ZCLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsV0FBVyxFQUFFLGNBQWM7WUFDM0IsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDeEMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0I7U0FDakMsQ0FBQztRQUdGLElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUN2QixVQUFVLEVBQUUsU0FBUztZQUNyQixTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxHQUFHO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQzFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxZQUFZO1lBQzVDLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsU0FBUyxFQUFFO2dCQUNULFFBQVEsRUFBRSxHQUFHO2dCQUNiLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUUsSUFBSTthQUNkO1lBQ0QsTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtTQUM3QixDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxXQUFXO1lBQzdDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZO1lBQy9DLEtBQUssRUFBRSxrQkFBa0I7WUFDekIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRTtZQUNqQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUNwRCxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO1NBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFdBQVc7WUFDN0MsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFlBQVk7WUFDL0MsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsR0FBRztZQUMzQixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUNwRCxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO1NBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsa0JBQWtCLEdBQUc7WUFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVc7WUFDOUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVk7WUFDaEQsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUMzQixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRTtZQUNwRCxLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7U0FDN0IsQ0FBQztJQUVKLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxJQUFjLEVBQUUsV0FBZ0I7UUFDekQsMEJBQTBCO1FBQzFCLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsYUFBYTthQUNmLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxhQUFhO2FBQ2YsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsY0FBYzthQUNoQixVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsY0FBYzthQUNoQixhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxjQUFjO2FBQ2hCLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjO2FBQ2hCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLGlCQUFpQjthQUNuQixVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxpQkFBaUI7YUFDbkIsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsZ0JBQWdCO2FBQ2xCLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGdCQUFnQjthQUNsQixhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLGVBQWU7YUFDakIsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGVBQWU7YUFDakIsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsZUFBZTthQUNqQixVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZUFBZTthQUNqQixhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxnQkFBZ0I7YUFDbEIsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsZ0JBQWdCO2FBQ2xCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUVoRSxjQUFjO1FBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELHFEQUFxRDtRQUVyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV4RDs7Ozs7Ozs7Ozs7V0FXRztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXRELElBQUksSUFBSSxDQUFDLElBQUssQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO1lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzdEO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzFEO1FBR0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBRXRFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFFTSxXQUFXLENBQUMsSUFBYyxFQUFFLFdBQWdCO1FBQ2pELElBQUksUUFBMEIsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxNQUFNLHdCQUF3QjtTQUMvQjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzVDLElBQUksWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7SUFFSCxDQUFDO0lBRU8sVUFBVSxDQUFDLElBQWM7UUFDL0IsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLENBQUMsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO2FBQU07WUFDTCxNQUFNLHdCQUF3QixDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUUxQyxrQ0FBa0M7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUNqQixnQkFBQyxDQUFDLEtBQUssQ0FBQyxnQkFBQyxDQUFDLEtBQUssQ0FBQyxnQkFBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUN2RSxDQUFDO1FBRUY7Ozs7Ozs7O1dBUUc7UUFDSCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGdCQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQ3JCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUN0RSxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDN0I7UUFFRCxnREFBZ0Q7UUFDaEQsSUFBSSxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM3QztRQUVELElBQUksZ0JBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQ25DO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7U0FDekQ7UUFFRCxJQUFJLGdCQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztTQUNqRTtRQUVELDZDQUE2QztRQUM3QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxnQkFBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsZ0JBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLENBQ3hCLGdCQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDdkQsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO1FBRUQsY0FBYztRQUNkLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMzQyxVQUFVLEVBQUUsQ0FBQzthQUNkO1NBQ0Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FDdkIsZ0JBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUNqRCxDQUFDO1FBRUYsSUFBSSxDQUFDLGdCQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNOLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsQ0FDM0IsZ0JBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUNqRSxDQUFDO1NBQ0g7SUFFSCxDQUFDO0lBRU8sY0FBYyxDQUFDLElBQWM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQ3JDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLFVBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FDeE0sQ0FBQztRQUVGLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FDckMsU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUN6RCxDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLENBQ3hDLFlBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FDdEUsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUN0QyxlQUFlLElBQUksQ0FBQyxTQUFVLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDN0QsQ0FBQztJQUNKLENBQUM7SUFFTyxlQUFlO1FBQ3JCLElBQUk7WUFDRixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLGlEQUFpRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDO1lBQ3BJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO2FBQ25JO1NBQ0Y7UUFBQyxPQUFNLEdBQUcsRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRU8sbUJBQW1CLENBQUMsSUFBYztRQUN4Qyx5QkFBeUI7UUFDekIsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLENBQUMsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCO2FBQU07WUFDTCxNQUFNLHdCQUF3QixDQUFDO1NBQ2hDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLENBQ3hDLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYzthQUNoQixVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsZ0JBQWdCO2FBQ2xCLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGNBQWM7YUFDaEIsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFeEQsb0JBQW9CO1FBQ3BCLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztRQUN6QixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxpQkFBaUI7UUFDdEMsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsbUJBQW1CO1FBQ3hDLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLFVBQVUsR0FBYSxFQUFFLENBQUM7UUFDOUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQVksQ0FBQztRQUNqQixJQUFJLElBQVksQ0FBQztRQUNqQixJQUFJLFVBQVUsR0FBZSxFQUFFLENBQUM7UUFDaEMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRVosY0FBYztRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0MsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVU7YUFDekI7aUJBQU07Z0JBQ0wsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVk7YUFDM0I7WUFFRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWIscUNBQXFDO1lBQ3JDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDVCxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUM7aUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQixVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFCO1NBQ0Y7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtnQkFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0MsQ0FBQzthQUNIO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUM1QyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUMzQixDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUNsQyxDQUFDO2lCQUNIO3FCQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNsRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUMzQixDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FDM0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNuQixDQUFDO2lCQUNIO2FBQ0Y7U0FDRjtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFaEI7Ozs7O1dBS0c7UUFDSCxJQUNFLENBQUMsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztlQUM3QixnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztlQUM1QixnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDdkM7WUFDQSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMzRCxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNuQixVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3hEO1NBQ0Y7YUFBTTtZQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzNELFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEQ7U0FDRjtRQUVELHVFQUF1RTtRQUN2RSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDOUQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDakUsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUUzQiwwQkFBMEI7UUFDMUIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEUsSUFBSSxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUUvQjs7O1VBR0U7UUFFRixXQUFXO1FBQ1gsSUFBSSxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHVCQUF1QjtRQUN2QixJQUFJLElBQVksQ0FBQztRQUNqQixJQUFJLElBQVksQ0FBQztRQUNqQixJQUFJLG9CQUFvQixHQUFHLGdCQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RCxJQUFJLGdCQUFDLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEVBQUU7WUFDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbkQsSUFBSSxHQUFHLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2tCQUN6QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDdEUsQ0FBQztZQUNGLDZCQUE2QjtTQUM5QjthQUFNO1lBQ0wsTUFBTSxnREFBZ0QsQ0FBQztTQUN4RDtRQUVELElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsY0FBYyxFQUNkLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxhQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsY0FBYyxHQUFHLENBQUMsRUFBRSxDQUM5RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsY0FBYyxFQUNuQixjQUFjLEVBQ2QsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLGFBQWEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUFDLENBQzdELENBQUM7UUFDRixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQ25CLGNBQWMsRUFDZCxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsYUFBYSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLGNBQWMsR0FBRyxDQUFDLEVBQUMsQ0FDN0QsQ0FBQztRQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsY0FBYyxFQUNkLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxhQUFhLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEdBQUcsY0FBYyxHQUFHLENBQUMsRUFBQyxDQUM3RCxDQUFDO1FBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsY0FBYyxFQUNuQixjQUFjLEVBQ2QsRUFBRSxDQUFDLEVBQUUsSUFBSSxHQUFHLGFBQWEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUFDLENBQzdELENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHO2dCQUN4QixDQUFDLEVBQUUsSUFBSTtnQkFDUCxDQUFDLEVBQUUsSUFBSTtnQkFDUCxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsTUFBTSxFQUFFLGNBQWM7YUFDdkIsQ0FBQztTQUNIO1FBRUQsU0FBUztRQUNULGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxPQUFlLENBQUM7UUFDcEIsSUFBSSxPQUFlLENBQUM7UUFDcEIsSUFBSSxrQkFBa0IsR0FBRyxnQkFBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFckQsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLGdCQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQy9DLE9BQU8sR0FBRyxDQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3NCQUNwQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQzFELENBQUM7YUFDSDtpQkFBTTtnQkFDTCxNQUFNLDhDQUE4QyxDQUFDO2FBQ3REO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsY0FBYyxFQUNuQixjQUFjLEVBQ2QsRUFBRSxDQUFDLEVBQUUsT0FBTyxHQUFHLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sR0FBRyxZQUFZLEdBQUcsQ0FBQyxFQUFFLENBQ2hFLENBQUM7UUFDRixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQ25CLGNBQWMsRUFDZCxFQUFFLENBQUMsRUFBRSxPQUFPLEdBQUcsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxHQUFHLFlBQVksR0FBRSxDQUFDLEVBQUUsQ0FDL0QsQ0FBQztRQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsY0FBYyxFQUNkLEVBQUUsQ0FBQyxFQUFFLE9BQU8sR0FBRyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEdBQUcsWUFBWSxHQUFHLENBQUMsRUFBRSxDQUNoRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsY0FBYyxFQUNuQixjQUFjLEVBQ2QsRUFBRSxDQUFDLEVBQUUsT0FBTyxHQUFHLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sR0FBRyxZQUFZLEdBQUUsQ0FBQyxFQUFFLENBQy9ELENBQUM7UUFDRixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQ25CLGNBQWMsRUFDZCxFQUFFLENBQUMsRUFBRSxPQUFPLEdBQUcsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxHQUFHLFlBQVksR0FBRyxDQUFDLEVBQUUsQ0FDaEUsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRztnQkFDdEIsQ0FBQyxFQUFFLE9BQU87Z0JBQ1YsQ0FBQyxFQUFFLE9BQU87Z0JBQ1YsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLE1BQU0sRUFBRSxZQUFZO2FBQ3JCLENBQUM7U0FDSDtRQUVELFFBQVE7UUFDUixJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7UUFDekIsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkQsOENBQThDO2dCQUM5QyxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO29CQUM1QyxNQUFNO2lCQUNQO2dCQUVELGVBQWUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO29CQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQTRCLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxLQUFLLENBQUMsSUFBSSxDQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzBCQUNwQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQTRCLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQ3BFLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwRCxLQUFLLENBQUMsSUFBSSxDQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzBCQUNwQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDN0QsQ0FBQztpQkFDSDtnQkFFRCxJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQ25CLGNBQWMsRUFDZDtvQkFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDO29CQUMzQixDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQztpQkFDN0MsQ0FDRixDQUFDO2dCQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsY0FBYyxFQUNkO29CQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUM7b0JBQzNCLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDO2lCQUM3QyxDQUNGLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsY0FBYyxFQUNuQixjQUFjLEVBQ2Q7b0JBQ0UsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQztvQkFDM0IsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUM7aUJBQzdDLENBQ0YsQ0FBQztnQkFDRixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQ25CLGNBQWMsRUFDZDtvQkFDRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDO29CQUMzQixDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLEdBQUcsQ0FBQztpQkFDN0MsQ0FDRixDQUFDO2dCQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsY0FBYyxFQUNkO29CQUNFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUM7b0JBQzNCLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxDQUFDO2lCQUM3QyxDQUNGLENBQUM7Z0JBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtvQkFDMUQsSUFBSSxHQUFHLEdBQUc7d0JBQ04sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1gsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ1gsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE1BQU0sRUFBRSxVQUFVO3FCQUNyQjtvQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDL0I7YUFDRjtTQUNGO1FBRUQsVUFBVTtRQUNWLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQztRQUMzQixJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFFM0IsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtZQUNuRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNyRCxlQUFlLEVBQUUsQ0FBQztnQkFDbEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLENBQUMsSUFBSSxDQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO3NCQUNwQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDL0QsQ0FBQztnQkFFRixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQ25CLGNBQWMsRUFDZDtvQkFDRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDO29CQUMvQixDQUFDLGVBQWUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLEdBQUcsQ0FBQztpQkFDakQsQ0FDRixDQUFDO2dCQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsY0FBYyxFQUNkO29CQUNFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxHQUFHLENBQUM7b0JBQy9CLENBQUMsZUFBZSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDO2lCQUNqRCxDQUNGLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsY0FBYyxFQUNuQixjQUFjLEVBQ2Q7b0JBQ0UsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLEdBQUcsQ0FBQztvQkFDL0IsQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUM7aUJBQ2pELENBQ0YsQ0FBQztnQkFDRixJQUFJLENBQUMscUJBQXFCLENBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQ25CLGNBQWMsRUFDZDtvQkFDRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsR0FBRyxDQUFDO29CQUMvQixDQUFDLGVBQWUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLEdBQUcsQ0FBQztpQkFDakQsQ0FDRixDQUFDO2dCQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsY0FBYyxFQUNkO29CQUNFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxHQUFHLENBQUM7b0JBQy9CLENBQUMsZUFBZSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksR0FBRyxDQUFDO2lCQUNqRCxDQUNGLENBQUM7Z0JBRUYsc0JBQXNCO2dCQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO29CQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDeEI7d0JBQ0UsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2IsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2IsS0FBSyxFQUFFLFdBQVc7d0JBQ2xCLE1BQU0sRUFBRSxZQUFZO3FCQUNyQixDQUNGLENBQUM7aUJBQ0g7YUFFRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFDM0IsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO1FBQzNCLElBQUksUUFBUSxHQUFlLEVBQUUsQ0FBQztRQUM5QixJQUFJLFFBQVEsR0FBZSxFQUFFLENBQUM7UUFDOUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFakQsSUFBSSxVQUFrQixDQUFDO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7aUJBQU07Z0JBQ0wsVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMxQjtZQUVELElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNkLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNwQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUVkLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbkIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFFbkIsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUMxQixHQUFHLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNwQzt5QkFBTTt3QkFDTCxHQUFHLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNwQztpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUM7b0JBQy9CLElBQUksV0FBVyxHQUFhLEVBQUUsQ0FBQztvQkFFL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDbkQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDbEMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDdkIsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDbkI7NkJBQU07NEJBQ0wsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDcEIsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDckI7d0JBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFDNUI7b0JBRUQsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUMxQixHQUFHLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNwQzt5QkFBTTt3QkFDTCxHQUFHLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUNwQztpQkFDRjthQUNGO1lBRUQsSUFBSSxXQUFXLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsSUFBSSxXQUFXLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO2dCQUMxQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBUyxFQUFFLEVBQUU7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFTLEVBQUUsR0FBVyxFQUFFLEVBQUU7Z0JBQ3hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBRWhDLElBQUksU0FBUyxHQUFhLEVBQUUsQ0FBQztZQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuRCxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBVyxFQUFFLEVBQUU7b0JBQzdDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO29CQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUU7b0JBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRTVCLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRTtvQkFDL0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBVyxFQUFFLEVBQUU7b0JBQzdDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVMsRUFBRSxFQUFFO29CQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUU7b0JBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRTVCLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFTLEVBQUUsRUFBRTtvQkFDL0MsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQztnQkFFSCxTQUFTLENBQUMsSUFBSSxDQUNaLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLEVBQUU7b0JBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsRUFBRTtvQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDNUIsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQ25DO1FBRUQsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUV0QyxvQkFBb0I7UUFDcEIsSUFBSSxPQUFlLENBQUM7UUFDcEIsSUFDRSxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2VBQzVCLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO2VBQzVCLGdCQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3JFO1lBQ0EsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO2FBQU07WUFDTCxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFFRCxPQUFPO1FBQ1AsSUFBSSxTQUFTLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxRQUFRLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5QztZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsMEJBQTBCO1FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLGtCQUFrQjtZQUN2RCxJQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsU0FBUzthQUNWO1lBRUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVUsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUU7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLHFCQUFxQixDQUMzQixNQUFzQyxFQUN0QyxVQUFrQixFQUNsQixJQUFxQztRQUVyQyw2QkFBNkI7UUFDN0IsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFJLGdCQUFDLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtnQkFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hCO1NBQ0Y7UUFDRCw0QkFBNEI7UUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELGdGQUFnRjtJQUNoRixzQ0FBc0M7SUFDOUIsY0FBYyxDQUFDLFFBQTBCO1FBQy9DLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLGdCQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4RCxJQUFJLGdCQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN6RCxJQUFJLGFBQWEsR0FBRyxnQkFBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxnQkFBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtvQkFDN0IsV0FBVyxHQUFHLGFBQWEsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO2lCQUNwRDthQUNGO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQ1gsZ0VBQWdFLENBQ2pFLENBQUM7Z0JBQ0YsV0FBVyxHQUFHLENBQ1osUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQ2xFLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxJQUFJLFFBQVEsR0FBRyxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNELElBQUksZ0JBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksYUFBYSxHQUFHLENBQ2xCLGdCQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUM3RCxDQUFDO2dCQUNGLElBQUksZ0JBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzdCLFdBQVcsR0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztpQkFDcEQ7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUNYLDJEQUEyRCxDQUM1RCxDQUFDO2FBQ0g7U0FDRjtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFTyxZQUFZLENBQUMsUUFBMEI7UUFDN0MsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckQsSUFBSSxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkQsSUFBSSxhQUFhLEdBQUcsZ0JBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BFLElBQUksZ0JBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzdCLFNBQVMsR0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FDWCx1REFBdUQsQ0FDeEQsQ0FBQztpQkFDSDthQUNGO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQ1gsOERBQThELENBQy9ELENBQUM7Z0JBQ0YsU0FBUyxHQUFHLENBQ1YsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQ2hFLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxJQUFJLFFBQVEsR0FBRyxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pELElBQUksZ0JBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksYUFBYSxHQUFHLENBQ2xCLGdCQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUMzRCxDQUFDO2dCQUNGLElBQUksZ0JBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzdCLFNBQVMsR0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FDWCx5REFBeUQsQ0FDMUQsQ0FBQztpQkFDSDthQUNGO1NBQ0Y7UUFFRCxJQUFJLENBQUMsZ0JBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3hELFNBQVMsR0FBRyxRQUFRLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUN0RTtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxRQUEwQixFQUFFLFdBQW1CO1FBQ3RFLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztRQUV0QixJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLEVBQUU7WUFDcEMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1NBQ3BFO2FBQU07WUFDTCxhQUFhLEdBQUcsV0FBVyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVPLGNBQWMsQ0FBQyxRQUEwQjtRQUMvQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFDRSxDQUFDLGdCQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7ZUFDbkMsUUFBUSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQzdCO1lBQ0EsV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1NBQ2hFO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVPLGVBQWUsQ0FBQyxJQUFzQjtRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUMzQyxDQUFDO1FBRUYsSUFBSSxZQUFvQixDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDekIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksRUFBRTtnQkFDbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELFlBQVksR0FBRyxDQUFDLENBQUM7YUFDbEI7aUJBQU07Z0JBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDckQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pEO2dCQUNELFlBQVksR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsQztZQUVELElBQUksWUFBWSxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLFFBQVEsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLGVBQWU7Z0JBQ2hFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3JDLDRCQUE0QjtvQkFDNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQzdDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2pCLGFBQWE7d0JBQ2IsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQzNDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3RCO3FCQUNGO29CQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JFO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFTyxjQUFjLENBQUMsSUFBc0I7UUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUUzRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxFQUFFO1lBQ3pCLHFFQUFxRTtZQUNyRSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7WUFFdEIsSUFDRSxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQzttQkFDOUIsQ0FBQyxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7dUJBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsRUFDbEM7Z0JBQ0EsSUFBSSxZQUFZLEdBQUcsZ0JBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUNyRCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFO29CQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzdDLG1FQUFtRTtvQkFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDekIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbkQsQ0FBQztvQkFDRixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN0QjthQUNGO2lCQUFNO2dCQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ25ELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JELFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3RCO2FBQ0Y7WUFFRCxJQUFJLFdBQVcsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFFbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO29CQUMxQixVQUFVLEVBQUUsQ0FBQztpQkFDZDtnQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzdDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTt3QkFDakUsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7cUJBQ2xCO29CQUNELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO2lCQUNsRTthQUNGO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvQyxJQUFJLFdBQVcsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUVmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMzQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2Y7YUFDRjtZQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEMsVUFBVSxFQUFFLENBQUM7Z0JBRWIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDMUIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNqQixXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNyQjtvQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztpQkFDbEU7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVPLGNBQWMsQ0FBQyxJQUFzQjtRQUMzQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsNEJBQTRCO1FBRTVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxXQUFXLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FDM0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUM1QyxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMzQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUMvQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztxQkFDbEI7b0JBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQzNCLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FDNUMsQ0FBQztpQkFDSDthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sbUJBQW1CLENBQUMsSUFBYzs7UUFDeEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLGVBQWUsR0FBUSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXRELHNCQUFzQjtRQUN0QixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3pDLElBQUksT0FBTyxJQUFJLEdBQUcsRUFBRTtnQkFDbEIsNkNBQTZDO2dCQUM3QyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxJQUFJLE9BQU8sR0FBRyxPQUFPLEdBQUcsZ0JBQUMsQ0FBQyxJQUFJLE9BQUMsSUFBSSxDQUFDLElBQUksMENBQUUsaUJBQWlCLENBQUMsQ0FBQztnQkFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQzVDLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQzthQUNyQztTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQzNCLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNsQixlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ2hELGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUNwQyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDbkMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdkIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBQ2xDLEdBQUcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUc7YUFDL0I7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLGFBQWEsQ0FBQyxJQUFjO1FBQ2xDLElBQUksZ0JBQWdCLEdBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4RCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvRCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNwQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNuQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ3hCLEtBQUssRUFBRTtnQkFDTCxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBQ25DLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRzthQUNoQztTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLGdCQUFnQixDQUFDLElBQXNCO1FBQzdDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxtQkFBbUIsR0FBRztZQUN6QixVQUFVLEVBQUUsU0FBUztZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVztZQUMzQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUztZQUMvQyxNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLEtBQUs7YUFDaEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0wsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsVUFBVSxFQUFFO29CQUNWLEdBQUcsRUFBRSxDQUFDO29CQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXO2lCQUMxQzthQUNGO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLFVBQVUsRUFBRTtvQkFDVixHQUFHLEVBQUUsQ0FBQztvQkFDTixHQUFHLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUztpQkFDN0M7YUFDRjtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxHQUFHO1lBQy9CLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsVUFBVSxFQUFFO2dCQUNWLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzFDO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEdBQUc7WUFDL0IsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixVQUFVLEVBQUU7Z0JBQ1YsR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVM7YUFDN0M7U0FDRixDQUFDO1FBQ0YsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQ3RCLE1BQU0sRUFDTixFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQ3hCLENBQUM7UUFDRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHO1lBQ3hCLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFdBQVcsRUFBRSxlQUFlO1lBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsbUJBQW1CO1NBQ2xDLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLENBQ2xCLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQy9ELENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBb0IsRUFBRSxFQUFFO1lBQy9ELElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sa0JBQWtCLENBQUMsR0FBc0IsRUFBRSxHQUFvQyxFQUFFLElBQXNCO1FBQzdHLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDdkIsR0FBRyxDQUFDLFFBQVEsQ0FDVixDQUFDLEVBQ0QsQ0FBQyxFQUNELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUN4QyxDQUFDO1lBRUYsV0FBVztZQUNYLElBQUksSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsRUFBRTtnQkFDL0IsR0FBRyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7Z0JBQzVCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ3RCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUM5QixDQUFDLEVBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQ1gsSUFBSSxDQUNMLENBQUM7Z0JBQ0YsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Q7WUFFRCxTQUFTO1lBQ1QsR0FBRyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQyxRQUFRO1lBQ3JDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNoQixHQUFHLENBQUMsSUFBSSxDQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUNuRCxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQzFCLENBQUM7WUFDRixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFYixPQUFPO1lBQ1AsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNoQixHQUFHLENBQUMsSUFBSSxDQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDM0QsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUMzRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQzlCLENBQUM7Z0JBQ0YsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Q7WUFFRCxTQUFTO1lBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDdEQsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNoQixHQUFHLENBQUMsSUFBSSxDQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGVBQWUsK0JBQStCO1dBQzlDO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxvQkFBb0I7V0FDMUI7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLCtDOzs7O1VDM0ZBO1VBQ0EiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxuICpcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXFxcIkxpY2Vuc2VcXFwiKTtcXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXFxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XFxuICpcXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcbiAqXFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFxcXCJBUyBJU1xcXCIgQkFTSVMsXFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXFxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxcbiAqL1xcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9faGVhZGVyLXJvdyB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dC5pcy1zbWFsbC1zY3JlZW4gLm1kbC1sYXlvdXRfX2hlYWRlci1yb3cgaDMge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXItYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dC5pcy1zbWFsbC1zY3JlZW4gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0Om5vdCguaXMtc21hbGwtc2NyZWVuKSAubWRsLWxheW91dF9fdGFiLWJhcixcXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQ6bm90KC5pcy1zbWFsbC1zY3JlZW4pIC5tZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDY0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1sYXlvdXRfX3RhYiB7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBsaW5lLWhlaWdodDogNjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyIC5tZGwtbGF5b3V0X190YWIuaXMtYWN0aXZlOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNHB4O1xcbn1cXG4ubWRsLWRlbW8gbWFpbiA+IC5tZGwtbGF5b3V0X190YWItcGFuZWwge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcGFkZGluZy10b3A6IDI0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkID4gKiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQgLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQge1xcbiAgbWFyZ2luOiA0MHB4O1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcXG59XFxuLm1kbC1kZW1vLm1kbC1kZW1vIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IGg0IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCA0MHB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYSB7XFxuICBjb2xvcjogIzAwQkNENDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyBhOmhvdmVyLFxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYTphY3RpdmUge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0ICsgLm1kbC1jYXJkX19hY3Rpb25zIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWRsLWRlbW8gI2FkZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNDBweDtcXG4gIHRvcDogMzZweDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X19jb250ZW50IHNlY3Rpb246bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciB7XFxuICBtYXgtd2lkdGg6IDEyOTBweDtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciB7XFxuICBtYXgtd2lkdGg6IDYyMHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGhlYWRlcntcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IC5zZWN0aW9uX19wbGF5LWJ0biB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gPiBoZWFkZXIgPiAubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogOHB4O1xcbiAgcmlnaHQ6IDhweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX2NpcmNsZSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAtd2Via2l0LWZsZXgtZ3JvdzogMDtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMDtcXG4gICAgICAgICAgZmxleC1ncm93OiAwO1xcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMTtcXG4gICAgICAtbXMtZmxleC1uZWdhdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1zaHJpbms6IDE7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IHtcXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAwO1xcbiAgICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IGg1IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fdGV4dCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgPiAuc2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIHtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciAuc2VjdGlvbl9fY2lyY2xlLS1iaWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBtYXJnaW46IDhweCAzMnB4O1xcbn1cXG4ubWRsLWRlbW8gLmlzLXNtYWxsLXNjcmVlbiBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciAuc2VjdGlvbl9fY2lyY2xlLS1iaWcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgbWFyZ2luOiA4cHggMTZweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDY0cHggMDtcXG4gIG1hcmdpbjogMCAtOHB4IC04cHggLThweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tY2VudGVyIC5zZWN0aW9uX190ZXh0Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEzKTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCA+IGgzOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLXBhbmVsOm5vdCgjb3ZlcnZpZXcpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ubWRsLWRlbW8gI2ZlYXR1cmVzIHNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogNzJweDtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBoNCwgI2ZlYXR1cmVzIGg1IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi5tZGwtZGVtbyAudG9jIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI0MxRUVGNDtcXG4gIG1hcmdpbjogMjRweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kbC1kZW1vIC50b2MgaDQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ubWRsLWRlbW8gLnRvYyBhIHtcXG4gIGNvbG9yOiAjNEREMEUxO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1kbC1kZW1vIC5tZGwtbWVudV9fY29udGFpbmVyIHtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cXG4uZGFzaGJvYXJkIHtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLmRhc2hib2FyZC1wbG90IHtcXG4gIGhlaWdodDogODAlO1xcbn1cXG5cXG4uZGFzaGJvYXJkLWZpbHRlciB7XFxuICBoZWlnaHQ6IDIwJTtcXG59XFxuXFxuLmJhci1wbG90IHtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLnZpdGFsLXNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wi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Q3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYiw4QkFBOEI7TUFDMUIsMEJBQTBCO1VBQ3RCLHNCQUFzQjtBQUNoQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cXG4gKlxcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpO1xcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4gKlxcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXFxuICpcXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXFxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXFxcIkFTIElTXFxcIiBCQVNJUyxcXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXFxuICovXFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2EnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X19oZWFkZXItcm93IHtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0LmlzLXNtYWxsLXNjcmVlbiAubWRsLWxheW91dF9faGVhZGVyLXJvdyBoMyB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhci1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0LmlzLXNtYWxsLXNjcmVlbiAubWRsLWxheW91dF9fdGFiLWJhciAubWRsLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQ6bm90KC5pcy1zbWFsbC1zY3JlZW4pIC5tZGwtbGF5b3V0X190YWItYmFyLFxcbi5tZGwtZGVtbyAubWRsLWxheW91dDpub3QoLmlzLXNtYWxsLXNjcmVlbikgLm1kbC1sYXlvdXRfX3RhYi1iYXItY29udGFpbmVyIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXItY29udGFpbmVyIHtcXG4gIGhlaWdodDogNjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhciAubWRsLWxheW91dF9fdGFiIHtcXG4gIGhlaWdodDogNjRweDtcXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1sYXlvdXRfX3RhYi5pcy1hY3RpdmU6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA0cHg7XFxufVxcbi5tZGwtZGVtbyBtYWluID4gLm1kbC1sYXlvdXRfX3RhYi1wYW5lbCB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBwYWRkaW5nLXRvcDogMjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQgPiAqIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCB7XFxuICBtYXJnaW46IDQwcHg7XFxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xcbn1cXG4ubWRsLWRlbW8ubWRsLWRlbW8gLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgaDQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDQwcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyBhIHtcXG4gIGNvbG9yOiAjMDBCQ0Q0O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIGE6aG92ZXIsXFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyBhOmFjdGl2ZSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgKyAubWRsLWNhcmRfX2FjdGlvbnMge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZGwtZGVtbyAjYWRkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgdG9wOiAzNnB4O1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX2NvbnRlbnQgc2VjdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tY2VudGVyIHtcXG4gIG1heC13aWR0aDogMTI5MHB4O1xcbn1cXG4ubWRsLWRlbW8gI2ZlYXR1cmVzIHNlY3Rpb24uc2VjdGlvbi0tY2VudGVyIHtcXG4gIG1heC13aWR0aDogNjIwcHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uID4gaGVhZGVye1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uID4gLnNlY3Rpb25fX3BsYXktYnRuIHtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGhlYWRlciA+IC5tYXRlcmlhbC1pY29ucyB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uID4gYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5O1xcbiAgdG9wOiA4cHg7XFxuICByaWdodDogOHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fY2lyY2xlIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIC13ZWJraXQtZmxleC1ncm93OiAwO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAwO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAxO1xcbiAgICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LXNocmluazogMTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX3RleHQge1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDA7XFxuICAgICAgLW1zLWZsZXgtbmVnYXRpdmU6IDA7XFxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX3RleHQgaDUge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lciA+IC5zZWN0aW9uX19jaXJjbGUtY29udGFpbmVyX19jaXJjbGUge1xcbiAgd2lkdGg6IDY0cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgbWFyZ2luOiA4cHggMDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tZm9vdGVyIC5zZWN0aW9uX19jaXJjbGUtLWJpZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIG1hcmdpbjogOHB4IDMycHg7XFxufVxcbi5tZGwtZGVtbyAuaXMtc21hbGwtc2NyZWVuIHNlY3Rpb24uc2VjdGlvbi0tZm9vdGVyIC5zZWN0aW9uX19jaXJjbGUtLWJpZyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBtYXJnaW46IDhweCAxNnB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbi5zZWN0aW9uLS1mb290ZXIge1xcbiAgcGFkZGluZzogNjRweCAwO1xcbiAgbWFyZ2luOiAwIC04cHggLThweCAtOHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbi5zZWN0aW9uLS1jZW50ZXIgLnNlY3Rpb25fX3RleHQ6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTMpO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0ID4gaDM6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItcGFuZWw6bm90KCNvdmVydmlldykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5tZGwtZGVtbyAjZmVhdHVyZXMgc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA3MnB4O1xcbn1cXG4ubWRsLWRlbW8gI2ZlYXR1cmVzIGg0LCAjZmVhdHVyZXMgaDUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLm1kbC1kZW1vIC50b2Mge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjQzFFRUY0O1xcbiAgbWFyZ2luOiAyNHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWRsLWRlbW8gLnRvYyBoNCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5tZGwtZGVtbyAudG9jIGEge1xcbiAgY29sb3I6ICM0REQwRTE7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1tZW51X19jb250YWluZXIge1xcbiAgei1pbmRleDogOTk7XFxufVxcblxcbi5kYXNoYm9hcmQge1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4uZGFzaGJvYXJkLXBsb3Qge1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5kYXNoYm9hcmQtZmlsdGVyIHtcXG4gIGhlaWdodDogMjAlO1xcbn1cXG5cXG4uYmFyLXBsb3Qge1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4udml0YWwtc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBGaWxlVHlwZSwgTGl2ZXBsb3REYXRhVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgY29sb3JNYXBKZXQgPSBbXG4gICcjMDAwMDhGJywnIzAwMDA5RicsJyMwMDAwQUYnLCcjMDAwMEJGJyxcbiAgJyMwMDAwQ0YnLCcjMDAwMERGJywnIzAwMDBFRicsJyMwMDAwRkYnLFxuICAnIzAwMTBGRicsJyMwMDIwRkYnLCcjMDAzMEZGJywnIzAwNDBGRicsXG4gICcjMDA1MEZGJywnIzAwNjBGRicsJyMwMDcwRkYnLCcjMDA4MEZGJyxcbiAgJyMwMDhGRkYnLCcjMDA5RkZGJywnIzAwQUZGRicsJyMwMEJGRkYnLFxuICAnIzAwQ0ZGRicsJyMwMERGRkYnLCcjMDBFRkZGJywnIzAwRkZGRicsXG4gICcjMTBGRkVGJywnIzIwRkZERicsJyMzMEZGQ0YnLCcjNDBGRkJGJyxcbiAgJyM1MEZGQUYnLCcjNjBGRjlGJywnIzcwRkY4RicsJyM4MEZGODAnLFxuICAnIzhGRkY3MCcsJyM5RkZGNjAnLCcjQUZGRjUwJywnI0JGRkY0MCcsXG4gICcjQ0ZGRjMwJywnI0RGRkYyMCcsJyNFRkZGMTAnLCcjRkZGRjAwJyxcbiAgJyNGRkVGMDAnLCcjRkZERjAwJywnI0ZGQ0YwMCcsJyNGRkJGMDAnLFxuICAnI0ZGQUYwMCcsJyNGRjlGMDAnLCcjRkY4RjAwJywnI0ZGODAwMCcsXG4gICcjRkY3MDAwJywnI0ZGNjAwMCcsJyNGRjUwMDAnLCcjRkY0MDAwJyxcbiAgJyNGRjMwMDAnLCcjRkYyMDAwJywnI0ZGMTAwMCcsJyNGRjAwMDAnLFxuICAnI0VGMDAwMCcsJyNERjAwMDAnLCcjQ0YwMDAwJywnI0JGMDAwMCcsXG4gICcjQUYwMDAwJywnIzlGMDAwMCcsJyM4RjAwMDAnLCcjODAwMDAwJ1xuXTtcblxuY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuXG5leHBvcnQgY2xhc3MgQ2hhcnRzIHtcblxuICBwdWJsaWMgZWxlbU9iamVjdDogYW55O1xuICBwdWJsaWMgcGVyZkRhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuICBwdWJsaWMgY3VtdWxEYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcbiAgcHVibGljIHh5UG9zRGF0YVRhYmxlOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGU7XG4gIHB1YmxpYyByeG5UaW1lRGF0YVRhYmxlOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGU7XG4gIHB1YmxpYyByZXdhcmREYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcbiAgcHVibGljIGNob2ljZURhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuICBwdWJsaWMgb2JqUGVyZkRhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuICBwdWJsaWMgcmVhbHRpbWVEYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcblxuICBwdWJsaWMgcGVyZkRhc2hib2FyZDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGFzaGJvYXJkO1xuICBwdWJsaWMgdHJpYWxEYXNoYm9hcmQ6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhc2hib2FyZDtcblxuICBwdWJsaWMgcGVyZlBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0V3JhcHBlcjtcbiAgcHVibGljIHBlcmZQbG90Q29uZmlnOiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFNwZWNzO1xuICBwdWJsaWMgcGVyZlBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5MaW5lQ2hhcnRPcHRpb25zO1xuICBwdWJsaWMgcGVyZkZpbHRlcjogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29udHJvbFdyYXBwZXI7XG4gIHB1YmxpYyBwZXJmRmlsdGVyQ29uZmlnOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlck9wdGlvbnM7XG4gIHB1YmxpYyBwZXJmRmlsdGVyT3B0aW9uczogT2JqZWN0O1xuXG4gIHB1YmxpYyB0cmlhbFBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0V3JhcHBlcjtcbiAgcHVibGljIHRyaWFsUGxvdENvbmZpZzogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRTcGVjcztcbiAgcHVibGljIHRyaWFsUGxvdE9wdGlvbnM6IGdvb2dsZS52aXN1YWxpemF0aW9uLkFyZWFDaGFydE9wdGlvbnM7XG4gIHB1YmxpYyB0cmlhbEZpbHRlcjogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29udHJvbFdyYXBwZXI7XG4gIHB1YmxpYyB0cmlhbEZpbHRlckNvbmZpZzogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29udHJvbFdyYXBwZXJPcHRpb25zO1xuICBwdWJsaWMgdHJpYWxGaWx0ZXJPcHRpb25zOiBPYmplY3Q7XG5cbiAgcHVibGljIHNjcmVlblBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbWJvQ2hhcnQ7XG4gIHB1YmxpYyBzY3JlZW5QbG90T3B0aW9uczogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29tYm9DaGFydE9wdGlvbnM7XG5cbiAgcHVibGljIHJlYWx0aW1lUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyO1xuICBwdWJsaWMgcmVhbHRpbWVQbG90Q29uZmlnOiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFNwZWNzO1xuICBwdWJsaWMgcmVhbHRpbWVQbG90T3B0aW9uczogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29tYm9DaGFydE9wdGlvbnM7XG4gIHB1YmxpYyByZWFsdGltZVBsb3RBY3RpdmU6IGJvb2xlYW47XG4gIHB1YmxpYyByZWFsdGltZVJvd0RhdGFBZGRlZDogYm9vbGVhbjtcbiAgcHVibGljIHJ0RGF0YTogYW55O1xuXG4gIHB1YmxpYyByeG5QbG90OiBnb29nbGUudmlzdWFsaXphdGlvbi5IaXN0b2dyYW07XG4gIHB1YmxpYyByeG5QbG90T3B0aW9uczogZ29vZ2xlLnZpc3VhbGl6YXRpb24uSGlzdG9ncmFtT3B0aW9ucztcblxuICBwdWJsaWMgcmV3YXJkUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sdW1uQ2hhcnQ7XG4gIHB1YmxpYyByZXdhcmRQbG90T3B0aW9uczogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sdW1uQ2hhcnRPcHRpb25zO1xuXG4gIHB1YmxpYyBjaG9pY2VQbG90OiBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydDtcbiAgcHVibGljIGNob2ljZVBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydE9wdGlvbnM7XG5cbiAgcHVibGljIG9ialBlcmZQbG90OiBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydDtcbiAgcHVibGljIG9ialBlcmZQbG90T3B0aW9uczogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sdW1uQ2hhcnRPcHRpb25zO1xuXG4gIHByaXZhdGUgdml0YWxzOiBhbnk7XG4gIHByaXZhdGUgblRyaWFsczogbnVtYmVyO1xuXG5cbiAgY29uc3RydWN0b3IoZWxlbU9iajogYW55KSB7XG4gICAgdGhpcy5lbGVtT2JqZWN0ID0gZWxlbU9iajtcbiAgICB0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2V0dXBDaGFydHMoKTtcblxuICAgIHRoaXMudml0YWxzID0ge1xuICAgICAgc3ViamVjdDogbnVsbCxcbiAgICAgIHBjdENvcnJlY3Q6IDAsXG4gICAgICB0cmlhbHM6IDAsXG4gICAgICB0aW1lOiAwLFxuICAgICAgYmF0dGVyeUxlZnQ6IDAsXG4gICAgICBiYXR0ZXJ5VXNlZDogMCxcbiAgICAgIHJld2FyZEVzdGltYXRlOiAwLFxuICAgICAgYXV0b21hdG9yOiAnJyxcbiAgICAgIGF1dG9tYXRvclN0YWdlOiAwLFxuICAgICAgYXV0b21hdG9yU3RhZ2VOYW1lOiAnJyxcbiAgICAgIG51bVJld2FyZDogMCxcbiAgICAgIHJmaWRUYWc6ICcnLFxuICAgICAgcmZpZFRpbWU6IDAsXG4gICAgICB0YWdDb3VudDoge31cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0dXBEYXRhVGFibGVzKCkge1xuICAgIHRoaXMucGVyZkRhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICB0aGlzLmN1bXVsRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMueHlQb3NEYXRhVGFibGUgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMucmV3YXJkRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMucnREYXRhID0ge307XG5cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBzZXR1cENoYXJ0cygpIHtcbiAgICBhd2FpdCBnb29nbGUuY2hhcnRzLmxvYWQoJ2N1cnJlbnQnLCB7IHBhY2thZ2VzOiBbJ2NvcmVjaGFydCcsICdjb250cm9scyddIH0pO1xuICAgIHRoaXMuc2V0dXBDaGFydE9wdGlvbnMoKTtcbiAgICB0aGlzLnNldHVwRGF0YVRhYmxlcygpO1xuXG4gICAgdGhpcy5wZXJmRGFzaGJvYXJkID0gKFxuICAgICAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhc2hib2FyZCh0aGlzLmVsZW1PYmplY3QucGVyZkRpdilcbiAgICApO1xuICAgIHRoaXMucGVyZlBsb3QgPSAoXG4gICAgICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKHRoaXMucGVyZlBsb3RDb25maWcpXG4gICAgKTtcbiAgICB0aGlzLnBlcmZGaWx0ZXIgPSAoXG4gICAgICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29udHJvbFdyYXBwZXIodGhpcy5wZXJmRmlsdGVyQ29uZmlnKVxuICAgICk7XG5cbiAgICB0aGlzLnRyaWFsRGFzaGJvYXJkID0gKFxuICAgICAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhc2hib2FyZCh0aGlzLmVsZW1PYmplY3QudHJpYWxEaXYpXG4gICAgKTtcbiAgICB0aGlzLnRyaWFsUGxvdCA9IChcbiAgICAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIodGhpcy50cmlhbFBsb3RDb25maWcpXG4gICAgKTtcbiAgICB0aGlzLnRyaWFsRmlsdGVyID0gKFxuICAgICAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbnRyb2xXcmFwcGVyKHRoaXMudHJpYWxGaWx0ZXJDb25maWcpXG4gICAgKTtcblxuICAgIHRoaXMucGVyZkRhc2hib2FyZC5iaW5kKHRoaXMucGVyZkZpbHRlciwgdGhpcy5wZXJmUGxvdCk7XG4gICAgdGhpcy50cmlhbERhc2hib2FyZC5iaW5kKHRoaXMudHJpYWxGaWx0ZXIsIHRoaXMudHJpYWxQbG90KTtcblxuICAgIHRoaXMuc2NyZWVuUGxvdCA9IChcbiAgICAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db21ib0NoYXJ0KHRoaXMuZWxlbU9iamVjdC5zY3JlZW5QbG90KVxuICAgICk7XG4gICAgLy8gdGhpcy5yZWFsdGltZVBsb3QgPSAoXG4gICAgLy8gICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKHRoaXMucmVhbHRpbWVQbG90Q29uZmlnKVxuICAgIC8vICk7XG4gICAgdGhpcy5yeG5QbG90ID0gKFxuICAgICAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkhpc3RvZ3JhbSh0aGlzLmVsZW1PYmplY3QucnhuUGxvdClcbiAgICApO1xuICAgIHRoaXMucmV3YXJkUGxvdCA9IChcbiAgICAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydCh0aGlzLmVsZW1PYmplY3QucmV3YXJkUGxvdClcbiAgICApO1xuICAgIHRoaXMuY2hvaWNlUGxvdCA9IChcbiAgICAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydCh0aGlzLmVsZW1PYmplY3QuY2hvaWNlUGxvdClcbiAgICApO1xuICAgIHRoaXMub2JqUGVyZlBsb3QgPSAoXG4gICAgICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29sdW1uQ2hhcnQodGhpcy5lbGVtT2JqZWN0Lm9ialBlcmZQbG90KVxuICAgICk7XG5cbiAgfVxuXG4gIHB1YmxpYyBzZXR1cENoYXJ0T3B0aW9ucygpIHtcbiAgICBcbiAgICB0aGlzLnBlcmZQbG90T3B0aW9ucyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QucGVyZlBsb3QuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC5wZXJmUGxvdC5jbGllbnRIZWlnaHQsXG4gICAgICBoQXhpczogeyB0aXRsZTogJ1RyaWFsIycgfSxcbiAgICAgIHZBeGlzOiB7IHRpdGxlOiAnQ29ycmVjdCAoJSknLCB2aWV3V2luZG93OiB7IG1pbjogMCwgbWF4OiAxLjAgfSB9LFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgIHN0YXJ0dXA6IHRydWVcbiAgICAgIH0sXG4gICAgICBzZXJpZXM6IHtcbiAgICAgICAgMDogeyBjb2xvcjogJyM0MzQ1OWQnIH0sXG4gICAgICAgIDE6IHsgY29sb3I6ICcjZTI0MzFlJyB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnBlcmZQbG90Q29uZmlnID0ge1xuICAgICAgY2hhcnRUeXBlOiAnTGluZUNoYXJ0JyxcbiAgICAgIGNvbnRhaW5lcklkOiAncGVyZm9ybWFuY2UtcGxvdCcsXG4gICAgICBvcHRpb25zOiB0aGlzLnBlcmZQbG90T3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy5wZXJmRmlsdGVyT3B0aW9ucyA9IHtcbiAgICAgIGZpbHRlckNvbHVtbkxhYmVsOiAnY3VycmVudFRyaWFsJyxcbiAgICAgIHVpOiB7XG4gICAgICAgIGNoYXJ0VHlwZTogJ0xpbmVDaGFydCcsXG4gICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgIHNtb290aDogMjAsXG4gICAgICAgICAgaEF4aXM6IHsgYmFzZWxpbmVDb2xvcjogJ25vbmUnLCB0aXRsZTogJ1RyaWFsIycgfSxcbiAgICAgICAgICB2QXhpczogeyB0aXRsZTogJyUnLCB2aWV3V2luZG93OiB7IG1pbjogMCwgbWF4OiAxLjAgfSB9LFxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QucGVyZkZpbHRlci5jbGllbnRXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC5wZXJmRmlsdGVyLmNsaWVudEhlaWdodCxcbiAgICAgICAgICBhbmltYXRpb246IHsgZHVyYXRpb246IDEwMDAsIGVhc2luZzogJ291dCcgfVxuICAgICAgICB9LFxuICAgICAgICBjaGFydFZpZXc6IHtcbiAgICAgICAgICBjb2x1bW5zOiBbMCwgMV1cbiAgICAgICAgfSxcbiAgICAgICAgbWluUmFuZ2VTaXplOiAyXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnBlcmZGaWx0ZXJDb25maWcgPSB7XG4gICAgICBjb250cm9sVHlwZTogJ0NoYXJ0UmFuZ2VGaWx0ZXInLFxuICAgICAgY29udGFpbmVySWQ6ICdwZXJmb3JtYW5jZS1maWx0ZXInLFxuICAgICAgc3RhdGU6IHsgcmFuZ2U6IHsgc3RhcnQ6IDAsIGVuZDogMTAwIH0gfSxcbiAgICAgIG9wdGlvbnM6IHRoaXMucGVyZkZpbHRlck9wdGlvbnMgXG4gICAgfTtcbiAgICB0aGlzLnRyaWFsUGxvdE9wdGlvbnMgPSB7XG4gICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LnRyaWFsUGxvdC5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5lbGVtT2JqZWN0LnRyaWFsUGxvdC5jbGllbnRIZWlnaHQsXG4gICAgICBhcmVhT3BhY2l0eTogMC41LFxuICAgICAgaEF4aXM6IHsgdGl0bGU6ICdUaW1lIChoKSAnfSxcbiAgICAgIHZBeGVzOiB7XG4gICAgICAgIDA6IHsgdGl0bGU6ICdUcmlhbCBjb3VudCcgfSxcbiAgICAgICAgMTogeyB0aXRsZTogJ1JGSUQnfVxuICAgICAgfSxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICBzdGFydHVwOiB0cnVlXG4gICAgICB9LFxuICAgICAgc2VyaWVzOiB7XG4gICAgICAgIDA6IHsgdGFyZ2V0QXhpc0luZGV4OiAwIH0sXG4gICAgICAgIDE6IHsgdGFyZ2V0QXhpc0luZGV4OiAwIH0sXG4gICAgICAgIDI6IHsgdGFyZ2V0QXhpc0luZGV4OiAxIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMudHJpYWxQbG90Q29uZmlnID0ge1xuICAgICAgY2hhcnRUeXBlOiAnQXJlYUNoYXJ0JyxcbiAgICAgIGNvbnRhaW5lcklkOiAndHJpYWwtcGxvdCcsXG4gICAgICBvcHRpb25zOiB0aGlzLnRyaWFsUGxvdE9wdGlvbnNcbiAgICB9O1xuICAgIHRoaXMudHJpYWxGaWx0ZXJPcHRpb25zID0ge1xuICAgICAgZmlsdGVyQ29sdW1uTGFiZWw6ICd0aW1lJyxcbiAgICAgIHVpOiB7XG4gICAgICAgIGNoYXJ0VHlwZTogJ0xpbmVDaGFydCcsXG4gICAgICAgIGNoYXJ0T3B0aW9uczoge1xuICAgICAgICAgIGhBeGlzOiB7IGJhc2VsaW5lQ29sb3I6ICdub25lJywgdGl0bGU6ICdUaW1lJyB9LFxuICAgICAgICAgIHZBeGlzOiB7IHRpdGxlOiAnIycgfSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LnRyaWFsRmlsdGVyLmNsaWVudFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtT2JqZWN0LnRyaWFsRmlsdGVyLmNsaWVudEhlaWdodCxcbiAgICAgICAgICBhbmltYXRpb246IHsgZHVyYXRpb246IDEwMDAsIGVhc2luZzogJ291dCcgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hhcnRWaWV3OiB7XG4gICAgICAgIGNvbHVtbnM6IFswLCAxXVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy50cmlhbEZpbHRlckNvbmZpZyA9IHtcbiAgICAgIGNvbnRyb2xUeXBlOiAnQ2hhcnRSYW5nZUZpbHRlcicsXG4gICAgICBjb250YWluZXJJZDogJ3RyaWFsLWZpbHRlcicsXG4gICAgICBzdGF0ZTogeyByYW5nZTogeyBzdGFydDogMCwgZW5kOiAxMDAgfSB9LFxuICAgICAgb3B0aW9uczogdGhpcy50cmlhbEZpbHRlck9wdGlvbnNcbiAgICB9O1xuXG5cbiAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zID0ge1xuICAgICAgc2VyaWVzVHlwZTogJ3NjYXR0ZXInLFxuICAgICAgcG9pbnRTaXplOiAxXG4gICAgfTtcbiAgICB0aGlzLnJ4blBsb3RPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5yeG5QbG90LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QucnhuUGxvdC5jbGllbnRIZWlnaHQsXG4gICAgICB0aXRsZTogJ1JlYWN0aW9uIFRpbWUgKG1zKScsXG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgc3RhcnR1cDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDogeyBwb3NpdGlvbjogJ25vbmUnIH1cbiAgICB9O1xuICAgIHRoaXMucmV3YXJkUGxvdE9wdGlvbnMgPSB7XG4gICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LnJld2FyZFBsb3QuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC5yZXdhcmRQbG90LmNsaWVudEhlaWdodCxcbiAgICAgIHRpdGxlOiAnQW1vdW50IG9mIFJld2FyZCcsXG4gICAgICBoQXhpczogeyB0aXRsZTogJ3Jld2FyZCBhbW91bnQnIH0sXG4gICAgICB2QXhpczogeyB0aXRsZTogJ2NvdW50cycsIG1pblZhbHVlOiAwLCBtYXhWYWx1ZTogMSB9LFxuICAgICAgbGVnZW5kOiB7IHBvc2l0aW9uOiAnbm9uZScgfVxuICAgIH07XG4gICAgdGhpcy5jaG9pY2VQbG90T3B0aW9ucyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QuY2hvaWNlUGxvdC5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5lbGVtT2JqZWN0LmNob2ljZVBsb3QuY2xpZW50SGVpZ2h0LFxuICAgICAgaEF4aXM6IHsgdGl0bGU6ICdDaG9pY2UnLCB9LFxuICAgICAgdkF4aXM6IHsgdGl0bGU6ICdjb3VudHMnLCBtaW5WYWx1ZTogMCwgbWF4VmFsdWU6IDEgfSxcbiAgICAgIGxlZ2VuZDogeyBwb3NpdGlvbjogJ25vbmUnIH1cbiAgICB9O1xuICAgIHRoaXMub2JqUGVyZlBsb3RPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5vYmpQZXJmUGxvdC5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5lbGVtT2JqZWN0Lm9ialBlcmZQbG90LmNsaWVudEhlaWdodCxcbiAgICAgIGhBeGlzOiB7IHRpdGxlOiAnT2JqZWN0cycgfSxcbiAgICAgIHZBeGlzOiB7IHRpdGxlOiAnY291bnRzJywgbWluVmFsdWU6IDAsIG1heFZhbHVlOiAxIH0sXG4gICAgICB0aXRsZTogJ09iamVjdCBQZXJmb3JtYW5jZScsXG4gICAgICBsZWdlbmQ6IHsgcG9zaXRpb246ICdub25lJyB9XG4gICAgfTtcblxuICB9XG5cbiAgcHVibGljIGluaXRpYWxpemVDaGFydERhdGEoZmlsZTogRmlsZVR5cGUsIHBsb3RPcHRpb25zOiBhbnkpIHtcbiAgICAvLyBSZW1vdmUgcm93cyBhbmQgY29sdW1uc1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGVyZkRhdGFUYWJsZSk7XG4gICAgdGhpcy5wZXJmRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlUm93cygwLCB0aGlzLnBlcmZEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMucGVyZkRhdGFUYWJsZVxuICAgICAgLnJlbW92ZUNvbHVtbnMoMCwgdGhpcy5wZXJmRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpKTtcblxuICAgIHRoaXMuY3VtdWxEYXRhVGFibGVcbiAgICAgIC5yZW1vdmVSb3dzKDAsIHRoaXMuY3VtdWxEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMuY3VtdWxEYXRhVGFibGVcbiAgICAgIC5yZW1vdmVDb2x1bW5zKDAsIHRoaXMuY3VtdWxEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCkpO1xuXG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZVxuICAgICAgLnJlbW92ZVJvd3MoMCwgdGhpcy54eVBvc0RhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZVxuICAgICAgLnJlbW92ZUNvbHVtbnMoMCwgdGhpcy54eVBvc0RhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKSk7XG5cbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlUm93cygwLCB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlQ29sdW1ucygwLCB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpKTtcbiAgICB0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVhbHRpbWVSb3dEYXRhQWRkZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJ0RGF0YVsndGVzdCddID0gW107XG4gICAgdGhpcy5ydERhdGFbJ2Nob2ljZSddID0gW107XG5cbiAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGVcbiAgICAgIC5yZW1vdmVSb3dzKDAsIHRoaXMucnhuVGltZURhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlQ29sdW1ucygwLCB0aGlzLnJ4blRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCkpO1xuXG4gICAgdGhpcy5yZXdhcmREYXRhVGFibGVcbiAgICAgIC5yZW1vdmVSb3dzKDAsIHRoaXMucmV3YXJkRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICB0aGlzLnJld2FyZERhdGFUYWJsZVxuICAgICAgLnJlbW92ZUNvbHVtbnMoMCwgdGhpcy5yZXdhcmREYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCkpO1xuXG4gICAgdGhpcy5jaG9pY2VEYXRhVGFibGVcbiAgICAgIC5yZW1vdmVSb3dzKDAsIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZVxuICAgICAgLnJlbW92ZUNvbHVtbnMoMCwgdGhpcy5jaG9pY2VEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCkpO1xuXG4gICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlUm93cygwLCB0aGlzLm9ialBlcmZEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZVxuICAgICAgLnJlbW92ZUNvbHVtbnMoMCwgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpKTtcblxuICAgIC8vIEFkZCBjb2x1bW5zXG4gICAgdGhpcy5wZXJmRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ2N1cnJlbnRUcmlhbCcpO1xuICAgIHRoaXMucGVyZkRhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdjdXJyZW50Jyk7XG4gICAgdGhpcy5wZXJmRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJzEwMHRyaWFsc0F2ZycpO1xuXG4gICAgdGhpcy5jdW11bERhdGFUYWJsZS5hZGRDb2x1bW4oJ2RhdGV0aW1lJywgJ3RpbWUnKTtcbiAgICB0aGlzLmN1bXVsRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1RyaWFscycpO1xuICAgIHRoaXMuY3VtdWxEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnUGVyZm9ybWFuY2UnKTtcbiAgICB0aGlzLmN1bXVsRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1JGSUQnKTtcbiAgICAvLyB0aGlzLmN1bXVsRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1dlaWdodCcpO1xuXG4gICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLmFkZENvbHVtbignc3RyaW5nJywgJ3N1Y2Nlc3MnKTtcbiAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnZHVyYXRpb25NUycpO1xuXG4gICAgLyoqIFxuICAgICAqIHh5UG9zRGF0YVRhYmxlIEd1aWRlXG4gICAgICogMDogeFxuICAgICAqIDE6IHkgZml4IChib3gpXG4gICAgICogMjogeSBzYW1wbGUgKGJveClcbiAgICAgKiAzOiB5IHRlc3QxIChib3gpIHwgeSBzYW1lIChib3gpXG4gICAgICogNDogeSB0ZXN0MiAoYm94KSB8IHkgZGlmZmVyZW50IChib3gpXG4gICAgICogNTogeSBGaXhfcmV3YXJkIChkb3RzKVxuICAgICAqIDY6IHkgRml4X3B1bmlzaCAoZG90cylcbiAgICAgKiA3OiB5IFRhcmdldF9yZXdhcmQgKGRvdHMpXG4gICAgICogODogeSBUYXJnZXRfcHVuaXNoIChkb3RzKVxuICAgICAqL1xuICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAneHBvcycpO1xuICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnRml4YXRpb24nKTtcbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1NhbXBsZScpO1xuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnZ2xvYmFsWCcpO1xuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnZml4WScpO1xuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnc2FtcGxlWScpO1xuXG4gICAgaWYgKGZpbGUuZGF0YSEuU2FtZURpZmZlcmVudCA8PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGUuZGF0YSEuVGVzdEdyaWRJbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgYFRlc3Qke2kgKyAxfWApO1xuICAgICAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgYHRlc3RZJHtpICsgMX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpbGUuZGF0YSEuU2FtZURpZmZlcmVudCA+IDApIHtcbiAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnU2FtZScpO1xuICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdEaWZmZXJlbnQnKTtcbiAgICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnc2FtZVknKTtcbiAgICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnZGlmZmVyZW50WScpO1xuICAgIH1cblxuXG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdGaXhfUmV3YXJkJyk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdGaXhfUHVuaXNoJyk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdUYXJnZXRfUmV3YXJkJyk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdUYXJnZXRfUHVuaXNoJyk7XG5cbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ2N1clknKTtcbiAgICB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmFkZENvbHVtbih7J3R5cGUnOiAnc3RyaW5nJywgJ3JvbGUnOiAnc3R5bGUnfSk7XG4gICAgXG4gICAgdGhpcy5yZXdhcmREYXRhVGFibGUuYWRkQ29sdW1uKCdzdHJpbmcnLCAncmVhcmQgc2l6ZScpO1xuICAgIHRoaXMucmV3YXJkRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ25yZXdhcmRzJyk7XG5cbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5hZGRDb2x1bW4oJ3N0cmluZycsICdjaG9pY2UnKTtcbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICcjIG9mIHJlc3BvbnNlcycpO1xuXG4gICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLmFkZENvbHVtbignc3RyaW5nJywgJ29iamVjdCcpO1xuICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdwZXJmb3JtYW5jZScpO1xuICAgIHRoaXMudXBkYXRlUGxvdHMoZmlsZSwgcGxvdE9wdGlvbnMpO1xuXG4gIH1cblxuICBwdWJsaWMgdXBkYXRlUGxvdHMoZmlsZTogRmlsZVR5cGUsIHBsb3RPcHRpb25zOiBhbnkpIHtcbiAgICBsZXQgZmlsZURhdGE6IExpdmVwbG90RGF0YVR5cGU7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGZpbGUuZGF0YSkpIHtcbiAgICAgIGZpbGVEYXRhID0gZmlsZS5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAnZmlsZS5kYXRhIGlzIFVuZGVmaW5lZCdcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3Bsb3QgdXBkYXRlZCcpO1xuICAgIHRoaXMubG9hZFZpdGFscyhmaWxlKTtcbiAgICB0aGlzLmxvYWRWaXRhbHNUZXh0KGZpbGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aXRhbHMnLCB0aGlzLnZpdGFscyk7XG4gICAgdGhpcy5sb2FkUGVyZm9ybWFuY2VEYXRhKGZpbGUpO1xuICAgIHRoaXMubG9hZE9ialBlcmZEYXRhKGZpbGVEYXRhKTtcbiAgICB0aGlzLmxvYWRDaG9pY2VEYXRhKGZpbGVEYXRhKTtcbiAgICB0aGlzLmxvYWRSZXdhcmREYXRhKGZpbGVEYXRhKTtcbiAgICB0aGlzLmRyYXdQZXJmb3JtYW5jZVBsb3QoZmlsZSk7XG4gICAgdGhpcy5kcmF3VHJpYWxQbG90KGZpbGUpO1xuICAgIHRoaXMuZHJhd09ialBlcmZQbG90KCk7XG4gICAgdGhpcy5kcmF3UnhuVGltZVBsb3QoKTtcbiAgICB0aGlzLmRyYXdDaG9pY2VQbG90KCk7XG4gICAgdGhpcy5kcmF3UmV3YXJkUGxvdCgpO1xuICAgIHRoaXMubG9hZFRvdWNoU0RUZXh0KCk7XG4gICAgbGV0IHN0cmVhbUFjdGl2ZSA9IHBsb3RPcHRpb25zLnN0cmVhbUFjdGl2ZTtcbiAgICB0aGlzLmRyYXdTY3JlZW5QbG90KGZpbGVEYXRhLCBzdHJlYW1BY3RpdmUpO1xuICAgIGlmIChzdHJlYW1BY3RpdmUgJiYgIXRoaXMucmVhbHRpbWVQbG90QWN0aXZlKSB7XG4gICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgICAgIHRoaXMuZHJhd1JlYWx0aW1lUGxvdDIoZmlsZURhdGEpO1xuICAgICAgdGhpcy5yZWFsdGltZVBsb3RBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVml0YWxzKGZpbGU6IEZpbGVUeXBlKSB7XG4gICAgbGV0IGRhdGE7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGZpbGUuZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBmaWxlLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93ICdmaWxlLmRhdGEgaXMgVW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICB0aGlzLnZpdGFscy5zdWJqZWN0ID0gZGF0YS5TdWJqZWN0O1xuICAgIHRoaXMudml0YWxzLnRyaWFscyA9IGRhdGEuUmVzcG9uc2UubGVuZ3RoO1xuICAgIFxuICAgIC8vIENvbnZlcnQgbWlsbGlzZWNvbmRzIHRvIG1pbnV0ZXNcbiAgICBsZXQgc3RhcnRUaW1lID0gZGF0YS5TdGFydFRpbWU7XG4gICAgdGhpcy52aXRhbHMudGltZSA9IChcbiAgICAgIF8ucm91bmQoXy5yb3VuZChfLnRvTnVtYmVyKF8ubGFzdChzdGFydFRpbWUpKSAtIHN0YXJ0VGltZVswXSkgLyA2MDAwMClcbiAgICApO1xuXG4gICAgLyoqXG4gICAgICogUkZJRCBQcm9jZXNzaW5nXG4gICAgICogT25seSBzdXBwb3J0cyBjdXJyZW50IGRhdGEgZm9ybWF0XG4gICAgICogZmlsZS5kYXRhLlJGSURUYWcgPSB7XG4gICAgICogICAwOiBbMCwgMjAyMC0xMC0yN1QxOToxOToxOS45OTlaLCAwMDc4MkE3RTg4QTRdLFxuICAgICAqICAgMTogW10sXG4gICAgICogICAuLi5cbiAgICAgKiB9O1xuICAgICAqL1xuICAgIGxldCByZmlkVGFnID0gZGF0YS5SRklEVGFnO1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChyZmlkVGFnKSAmJiBfLnNpemUocmZpZFRhZykgPiAwKSB7XG4gICAgICB0aGlzLnZpdGFscy5yZmlkVGFnID0gcmZpZFRhZ1tfLnNpemUocmZpZFRhZykgLSAxXVsyXTtcbiAgICAgIHRoaXMudml0YWxzLnJmaWRUaW1lID0gKFxuICAgICAgICBuZXcgRGF0ZShyZmlkVGFnW18uc2l6ZShyZmlkVGFnKSAtIDFdWzFdKS50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJylcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudml0YWxzLnJmaWRUYWcgPSBudWxsO1xuICAgICAgdGhpcy52aXRhbHMucmZpZFRpbWUgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEF1dG9tYXRvciwgQXV0b21hdG9yU3RhZ2UsIEF1dG9tYXRvclN0YWdlTmFtZVxuICAgIGlmIChfLmlzVW5kZWZpbmVkKGRhdGEuQXV0b21hdG9yKSkge1xuICAgICAgdGhpcy52aXRhbHMuYXV0b21hdG9yID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXRhbHMuYXV0b21hdG9yID0gZmlsZS5kYXRhLkF1dG9tYXRvcjtcbiAgICB9XG5cbiAgICBpZiAoXy5pc1VuZGVmaW5lZChkYXRhLkN1cnJlbnRBdXRvbWF0b3JTdGFnZSkpIHtcbiAgICAgIHRoaXMudml0YWxzLmF1dG9tYXRvclN0YWdlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXRhbHMuYXV0b21hdG9yU3RhZ2UgPSBkYXRhLkN1cnJlbnRBdXRvbWF0b3JTdGFnZTtcbiAgICB9XG5cbiAgICBpZiAoXy5pc1VuZGVmaW5lZChkYXRhLkN1cnJlbnRBdXRvbWF0b3JTdGFnZU5hbWUpKSB7XG4gICAgICB0aGlzLnZpdGFscy5hdXRvbWF0b3JTdGFnZU5hbWUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpdGFscy5hdXRvbWF0b3JTdGFnZU5hbWUgPSBkYXRhLkN1cnJlbnRBdXRvbWF0b3JTdGFnZU5hbWU7XG4gICAgfVxuXG4gICAgLy8gQmF0dGVyeSwgb25seSBzdXBwb3J0cyBjdXJyZW50IGRhdGEgZm9ybWF0XG4gICAgbGV0IGJhdHRlcnkgPSBkYXRhLkJhdHRlcnk7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGJhdHRlcnkpICYmIF8uc2l6ZShiYXR0ZXJ5KSA+IDApIHtcbiAgICAgIHRoaXMudml0YWxzLmJhdHRlcnlMZWZ0ID0gXy5yb3VuZChiYXR0ZXJ5W18uc2l6ZShiYXR0ZXJ5KSAtIDFdWzJdICogMTAwKTtcbiAgICAgIHRoaXMudml0YWxzLmJhdHRlcnlVc2VkID0gKFxuICAgICAgICBfLnJvdW5kKGJhdHRlcnlbMF1bMl0gKiAxMDAgLSB0aGlzLnZpdGFscy5iYXR0ZXJ5TGVmdClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudml0YWxzLmJhdHRlcnlMZWZ0ID0gbnVsbDtcbiAgICAgIHRoaXMudml0YWxzLmJhdHRlcnlVc2VkID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtYW5jZVxuICAgIGxldCBudW1Db3JyZWN0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLkNvcnJlY3RJdGVtKTsgaSsrKSB7XG4gICAgICBpZiAoZGF0YS5Db3JyZWN0SXRlbVtpXSA9PSBkYXRhLlJlc3BvbnNlW2ldKSB7XG4gICAgICAgIG51bUNvcnJlY3QrKztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy52aXRhbHMubnVtQ29ycmVjdCA9IG51bUNvcnJlY3Q7XG4gICAgdGhpcy52aXRhbHMucGN0Q29ycmVjdCA9IChcbiAgICAgIF8ucm91bmQoMTAwICogbnVtQ29ycmVjdCAvIGRhdGEuUmVzcG9uc2UubGVuZ3RoKVxuICAgICk7XG5cbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoZGF0YS5OUmV3YXJkKSkge1xuICAgICAgdGhpcy52aXRhbHMubnVtUmV3YXJkID0gKFxuICAgICAgICBkYXRhLk5SZXdhcmQucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4geyBcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0sIDApXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMudml0YWxzLnJld2FyZEVzdGltYXRlID0gMDtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoZGF0YS5SZXdhcmRQZXIxMDAwVHJpYWxzKSkge1xuICAgICAgdGhpcy52aXRhbHMucmV3YXJkRXN0aW1hdGUgPSAoXG4gICAgICAgIF8ucm91bmQoZGF0YS5SZXdhcmRQZXIxMDAwVHJpYWxzICogdGhpcy52aXRhbHMubnVtUmV3YXJkIC8gMTAwMClcbiAgICAgICk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIGxvYWRWaXRhbHNUZXh0KGZpbGU6IEZpbGVUeXBlKSB7XG4gICAgdGhpcy5lbGVtT2JqZWN0LnBlcmZWaXRhbHMuaW5uZXJIVE1MID0gKFxuICAgICAgYCR7dGhpcy52aXRhbHMuc3ViamVjdH06ICR7dGhpcy52aXRhbHMucGN0Q29ycmVjdH0lIChuID0gJHt0aGlzLnZpdGFscy5udW1Db3JyZWN0fSBvdXQgb2YgJHt0aGlzLnZpdGFscy50cmlhbHN9LCByPSR7dGhpcy52aXRhbHMubnVtUmV3YXJkfT0ke3RoaXMudml0YWxzLnJld2FyZEVzdGltYXRlfW1MLCAke3RoaXMudml0YWxzLnRpbWV9IG1pbnMpYCBcbiAgICApO1xuXG4gICAgLy8gVE9ETzogYWRkIHRoaXMudml0YWxzLnRhZ0NvdW50IGRhdGFcbiAgICB0aGlzLmVsZW1PYmplY3QucmZpZFZpdGFscy5pbm5lckhUTUwgPSAoXG4gICAgICBgUkZJRDogJHt0aGlzLnZpdGFscy5yZmlkVGFnfSAoJHt0aGlzLnZpdGFscy5yZmlkVGltZX0pYFxuICAgICk7XG5cbiAgICB0aGlzLmVsZW1PYmplY3QuYmF0dGVyeVZpdGFscy5pbm5lckhUTUwgPSAoXG4gICAgICBgQmF0dGVyeTogJHt0aGlzLnZpdGFscy5iYXR0ZXJ5TGVmdH0lICgtJHt0aGlzLnZpdGFscy5iYXR0ZXJ5VXNlZH0lKWBcbiAgICApO1xuXG4gICAgdGhpcy5lbGVtT2JqZWN0LnRyaWFsVml0YWxzLmlubmVySFRNTCA9IChcbiAgICAgIGBMYXN0IFRyaWFsOiAke2ZpbGUuZGF0ZVNhdmVkIS50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJyl9YFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRUb3VjaFNEVGV4dCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy50aXRsZSA9IGBUb3VjaCBMb2NhdGlvbnMgLS0gc3RhbmRhcmQgZGV2OiBcXG4gRml4YXRpb246ICR7TWF0aC5yb3VuZCh0aGlzLnZpdGFscy5zdGRldkZpeCAqIDEwKSAvIDEwfSBwaXhlbHNgO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZpdGFscy5zdGRldlRlc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy50aXRsZSA9IHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMudGl0bGUgKyBgXFxuIFRhcmdldCAke2l9OiAke01hdGgucm91bmQodGhpcy52aXRhbHMuc3RkZXZUZXN0W2ldICogMTApIC8gMTB9YDsgXG4gICAgICB9XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgdG91Y2ggU0QgdGV4dCcsIGVycik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkUGVyZm9ybWFuY2VEYXRhKGZpbGU6IEZpbGVUeXBlKSB7XG4gICAgLy8gVHlwZWNoZWNraW5nIGZpbGUuZGF0YVxuICAgIGxldCBkYXRhO1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChmaWxlLmRhdGEpKSB7XG4gICAgICBkYXRhID0gZmlsZS5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAnZmlsZS5kYXRhIGlzIFVuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ0hFTExPJyk7XG5cbiAgICB0aGlzLnBlcmZEYXRhVGFibGUucmVtb3ZlUm93cyhcbiAgICAgIDAsIHRoaXMucGVyZkRhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKVxuICAgICk7XG4gICAgdGhpcy5jdW11bERhdGFUYWJsZVxuICAgICAgLnJlbW92ZVJvd3MoMCwgdGhpcy5jdW11bERhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlUm93cygwLCB0aGlzLnJ4blRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMueHlQb3NEYXRhVGFibGVcbiAgICAgIC5yZW1vdmVSb3dzKDAsIHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuXG4gICAgLy8gQ3JlYXRlIERhdGEgVGFibGVcbiAgICBsZXQgeERhdGEgPSBbXTtcbiAgICBsZXQgeURhdGE6IG51bWJlcltdID0gW107XG4gICAgbGV0IHlEYXRhU21hbGwgPSBbXTsgLy8ga2VlcHMgNSByZWNlbnRcbiAgICBsZXQgeURhdGFMYXJnZSA9IFtdOyAvLyBrZWVwcyAxMDAgcmVjZW50XG4gICAgbGV0IG51bVRvdGFsID0gW107XG4gICAgbGV0IG51bUNvcnJlY3Q6IG51bWJlcltdID0gW107XG4gICAgbGV0IHRDdXJyZW50ID0gW107XG4gICAgbGV0IG51bVJGSUQgPSBbXTtcbiAgICBsZXQgeFBvczogbnVtYmVyO1xuICAgIGxldCB5UG9zOiBudW1iZXI7XG4gICAgbGV0IHRvdWNoZXZlbnQ6IG51bWJlcltdW10gPSBbXTtcbiAgICBsZXQgcnQgPSBbXTtcblxuICAgIC8vIHBlcmZvcm1hbmNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLkNvcnJlY3RJdGVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGF0YS5Db3JyZWN0SXRlbVtpXSA9PSBkYXRhLlJlc3BvbnNlW2ldKSB7XG4gICAgICAgIHlEYXRhW2ldID0gMTsgLy8gY29ycmVjdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeURhdGFbaV0gPSAwOyAvLyBpbmNvcnJlY3RcbiAgICAgIH1cblxuICAgICAgeERhdGFbaV0gPSBpO1xuXG4gICAgICAvLyBDdW11bGF0aXZlIHRyaWFscyAmIGNvcnJlY3QgdHJpYWxzXG4gICAgICBudW1Ub3RhbFtpXSA9IHhEYXRhLmxlbmd0aDtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBudW1Db3JyZWN0W2ldID0gbnVtQ29ycmVjdFtpIC0gMV0gKyB5RGF0YVtpXTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PSAwKSB7XG4gICAgICAgIG51bUNvcnJlY3RbaV0gPSB5RGF0YVtpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuTlJld2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRhdGEuUmV3YXJkU3RhZ2UgPT0gMCkge1xuICAgICAgICBydFtpXSA9IGRhdGEuRml4YXRpb25YWVRbMl1baV0gLSBkYXRhLlN0YXJ0VGltZVtpXTtcbiAgICAgICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLmFkZFJvd3MoXG4gICAgICAgICAgW1tmaWxlLmRhdGEuRml4YXRpb25Ub3VjaEV2ZW50W2ldLCBydFtpXV1dXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuTlJTVlAgPiAwKSB7XG4gICAgICAgIHJ0W2ldID0gZGF0YS5TYW1wbGVGaXhhdGlvblhZVFsyXVtpXSAtIGRhdGEuU2FtcGxlU3RhcnRUaW1lW2ldO1xuICAgICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkUm93cyhcbiAgICAgICAgICBbW2RhdGEuU2FtcGxlRml4YXRpb25Ub3VjaEV2ZW50W2ldLCBydFtpXV1dXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBydFtpXSA9IGRhdGEuUmVzcG9uc2VYWVRbMl1baV0gLSBkYXRhLlNhbXBsZVN0YXJ0VGltZVtpXTtcbiAgICAgICAgaWYgKGRhdGEuUmVzcG9uc2VbaV0gPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkUm93cyhcbiAgICAgICAgICAgIFtbJ3RpbWVvdXQnLCBkYXRhLkNob2ljZVRpbWVPdXRdXVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YS5Db3JyZWN0SXRlbVtpXSA9PSBkYXRhLlJlc3BvbnNlW2ldKSB7XG4gICAgICAgICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLmFkZFJvd3MoXG4gICAgICAgICAgICBbWydjb3JyZWN0JywgcnRbaV1dXVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLmFkZFJvd3MoXG4gICAgICAgICAgICBbWyd3cm9uZycsIHJ0W2ldXV1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cocnQpO1xuXG4gICAgLyoqXG4gICAgICogVG91Y2ggWFlcbiAgICAgKiBTdG9yZSBmaXhhdGlvbiBpbiBvZGQgaW5kaWNlcyBhbmQgY2hvaWNlIGluIGV2ZW5cbiAgICAgKiBBbGwgdG91Y2hldmVudHMuIHRvdWNoZXZlbnQgaGFzIGEgbGVuZ3RoIHRoYXQgaXMgdHdpY2UgdGhlIGxlbmd0aFxuICAgICAqIG9mIGZpbGUuZGF0YS5GaXhhdGlvblhZVCBvciBmaWxlLmRhdGEuUmVzcG9uc2VYWVRcbiAgICAgKi9cbiAgICBpZiAoXG4gICAgICAhXy5pc1VuZGVmaW5lZChkYXRhLlJlc3BvbnNlWFlUKSBcbiAgICAgICYmIF8uc2l6ZShkYXRhLlJlc3BvbnNlWFlUKSA+IDBcbiAgICAgICYmIF8uc2l6ZShmaWxlLmRhdGEuUmVzcG9uc2VYWVRbMF0pID4gMFxuICAgICkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5GaXhhdGlvblhZVFswXSkgKiAyOyBpICs9IDIpIHtcbiAgICAgICAgdG91Y2hldmVudFtpXSA9IFtdO1xuICAgICAgICB0b3VjaGV2ZW50W2kgKyAxXSA9IFtdO1xuICAgICAgICB0b3VjaGV2ZW50W2ldWzBdID0gZmlsZS5kYXRhLkZpeGF0aW9uWFlUWzBdW2kgLyAyXTtcbiAgICAgICAgdG91Y2hldmVudFtpICsgMV1bMF0gPSBmaWxlLmRhdGEuUmVzcG9uc2VYWVRbMF1baSAvIDJdO1xuICAgICAgICB0b3VjaGV2ZW50W2ldWzFdID0gZmlsZS5kYXRhLkZpeGF0aW9uWFlUWzFdW2kgLyAyXTtcbiAgICAgICAgdG91Y2hldmVudFtpICsgMV1bMV0gPSBmaWxlLmRhdGEuUmVzcG9uc2VYWVRbMV1baSAvIDJdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLkZpeGF0aW9uWFlUWzBdKSAqIDI7IGkgKz0gMikge1xuICAgICAgICB0b3VjaGV2ZW50W2ldID0gW107XG4gICAgICAgIHRvdWNoZXZlbnRbaSArIDFdID0gW107XG4gICAgICAgIHRvdWNoZXZlbnRbaV1bMF0gPSBmaWxlLmRhdGEuRml4YXRpb25YWVRbMF1baSAvIDJdO1xuICAgICAgICB0b3VjaGV2ZW50W2kgKyAxXVswXSA9IGZpbGUuZGF0YS5GaXhhdGlvblhZVFswXVtpIC8gMl07XG4gICAgICAgIHRvdWNoZXZlbnRbaV1bMV0gPSBmaWxlLmRhdGEuRml4YXRpb25YWVRbMV1baSAvIDJdO1xuICAgICAgICB0b3VjaGV2ZW50W2kgKyAxXVsxXSA9IGZpbGUuZGF0YS5GaXhhdGlvblhZVFsxXVtpIC8gMl07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2FtcGxlICYgVGVzdCBCb3hlcyAtLSBEcmF3IHRoZW0gYXMgYSBib3VuZGluZyBib3ggaW4gdGhlIHRvdWNoIHBsb3RcbiAgICBsZXQgbnVtQ29sdW1uWFlQb3MgPSB0aGlzLnh5UG9zRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpO1xuICAgIGxldCBudW1Db2xSZWFsdGltZSA9IHRoaXMucmVhbHRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCk7XG4gICAgbGV0IHNhbXBsZVdpZHRoID0gdGhpcy5nZXRTYW1wbGVXaWR0aChmaWxlLmRhdGEpO1xuICAgIGxldCBzYW1wbGVIZWlnaHQgPSBzYW1wbGVXaWR0aDtcbiAgICBsZXQgdGVzdFdpZHRoID0gdGhpcy5nZXRUZXN0V2lkdGgoZmlsZS5kYXRhKTtcbiAgICBsZXQgdGVzdEhlaWdodCA9IHRlc3RXaWR0aDtcblxuICAgIC8vIEZpeGF0aW9uICYgQ2hvaWNlIEJveGVzXG4gICAgbGV0IGZpeGF0aW9uV2lkdGggPSB0aGlzLmdldEZpeGF0aW9uV2lkdGgoZmlsZS5kYXRhLCBzYW1wbGVXaWR0aCk7XG4gICAgbGV0IGZpeGF0aW9uSGVpZ2h0ID0gZml4YXRpb25XaWR0aDtcbiAgICBsZXQgY2hvaWNlV2lkdGggPSB0aGlzLmdldENob2ljZVdpZHRoKGZpbGUuZGF0YSk7XG4gICAgbGV0IGNob2ljZUhlaWdodCA9IGNob2ljZVdpZHRoO1xuXG4gICAgLyoqIFxuICAgICAqIE5PVEUgZm9yIHBvc2l0aW9uaW5nIGVsZW1lbnRzOlxuICAgICAqIGdyaWQgeCwgeSBpcyBvZmZzZXQgfHwgZml4YXRpb24gJiByZXNwb25zZSB4LCB5IGlzIG5vdFxuICAgICovXG5cbiAgICAvLyBGSVhBVElPTlxuICAgIGxldCBudW1EaXNwbGF5RWxlbXMgPSAxO1xuICAgIC8vIGxldCB4eVBvc0FycmF5ID0gW107XG4gICAgbGV0IGZpeFg6IG51bWJlcjtcbiAgICBsZXQgZml4WTogbnVtYmVyO1xuICAgIGxldCBtYXhGaXhhdGlvbkdyaWRJbmRleCA9IF8ubWF4KGZpbGUuZGF0YS5GaXhhdGlvbkdyaWRJbmRleCk7XG4gICAgaWYgKF8uaXNOdW1iZXIobWF4Rml4YXRpb25HcmlkSW5kZXgpKSB7XG4gICAgICBmaXhYID0gZmlsZS5kYXRhLlhHcmlkQ2VudGVyW21heEZpeGF0aW9uR3JpZEluZGV4XTtcbiAgICAgIGZpeFkgPSAoXG4gICAgICAgIGZpbGUuZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSBcbiAgICAgICAgLSAoZmlsZS5kYXRhLllHcmlkQ2VudGVyW21heEZpeGF0aW9uR3JpZEluZGV4XSArIGZpbGUuZGF0YS5vZmZzZXR0b3ApXG4gICAgICApO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2ZpeFknLCBmaXhZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgJ2RhdGEuRml4YXRpb25HcmlkSW5kZXggaXMgbm90IG9mIHR5cGUgbnVtYmVyW10nO1xuICAgIH1cblxuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgeyAwOiBmaXhYIC0gZml4YXRpb25XaWR0aCAvIDIsIDE6IGZpeFkgLSBmaXhhdGlvbkhlaWdodCAvIDIgfVxuICAgICk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICB7IDA6IGZpeFggKyBmaXhhdGlvbldpZHRoIC8gMiwgMTogZml4WSAtIGZpeGF0aW9uSGVpZ2h0IC8gMn1cbiAgICApO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgeyAwOiBmaXhYICsgZml4YXRpb25XaWR0aCAvIDIsIDE6IGZpeFkgKyBmaXhhdGlvbkhlaWdodCAvIDJ9XG4gICAgKTtcbiAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgIHsgMDogZml4WCAtIGZpeGF0aW9uV2lkdGggLyAyLCAxOiBmaXhZICsgZml4YXRpb25IZWlnaHQgLyAyfVxuICAgICk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICB7IDA6IGZpeFggLSBmaXhhdGlvbldpZHRoIC8gMiwgMTogZml4WSAtIGZpeGF0aW9uSGVpZ2h0IC8gMn1cbiAgICApO1xuXG4gICAgaWYgKCF0aGlzLnJlYWx0aW1lUm93RGF0YUFkZGVkICYmICF0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSkge1xuICAgICAgY29uc29sZS5sb2coJ3JlYWx0aW1lIG5vdCBhY3RpdmUnKTtcbiAgICAgIHRoaXMucnREYXRhWydmaXhhdGlvbiddID0ge1xuICAgICAgICB4OiBmaXhYLFxuICAgICAgICB5OiBmaXhZLFxuICAgICAgICB3aWR0aDogZml4YXRpb25XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBmaXhhdGlvbkhlaWdodFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBTQU1QTEVcbiAgICBudW1EaXNwbGF5RWxlbXMgPSAyO1xuICAgIGxldCBzYW1wbGVYOiBudW1iZXI7XG4gICAgbGV0IHNhbXBsZVk6IG51bWJlcjtcbiAgICBsZXQgbWF4U2FtcGxlR3JpZEluZGV4ID0gXy5tYXgoZGF0YS5TYW1wbGVHcmlkSW5kZXgpO1xuXG4gICAgaWYgKGRhdGEuUmV3YXJkU3RhZ2UgPiAwKSB7XG4gICAgICBpZiAoXy5pc051bWJlcihtYXhTYW1wbGVHcmlkSW5kZXgpKSB7XG4gICAgICAgIHNhbXBsZVggPSBkYXRhLlhHcmlkQ2VudGVyW21heFNhbXBsZUdyaWRJbmRleF07XG4gICAgICAgIHNhbXBsZVkgPSAoXG4gICAgICAgICAgZGF0YS5WaWV3cG9ydFBpeGVsc1sxXVxuICAgICAgICAgIC0gKGRhdGEuWUdyaWRDZW50ZXJbbWF4U2FtcGxlR3JpZEluZGV4XSArIGRhdGEub2Zmc2V0dG9wKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgJ2RhdGEuU2FtcGxlR3JpZEluZGV4IGlzIG5vdCBvZiB0eXBlIG51bWJlcltdJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2FtcGxlWCA9IGZpeFg7XG4gICAgICBzYW1wbGVZID0gZml4WTtcbiAgICB9XG5cbiAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgIHsgMDogc2FtcGxlWCAtIHNhbXBsZVdpZHRoIC8gMiwgMjogc2FtcGxlWSAtIHNhbXBsZUhlaWdodCAvIDIgfVxuICAgICk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICB7IDA6IHNhbXBsZVggKyBzYW1wbGVXaWR0aCAvIDIsIDI6IHNhbXBsZVkgLSBzYW1wbGVIZWlnaHQvIDIgfVxuICAgICk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICB7IDA6IHNhbXBsZVggKyBzYW1wbGVXaWR0aCAvIDIsIDI6IHNhbXBsZVkgKyBzYW1wbGVIZWlnaHQgLyAyIH1cbiAgICApO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgeyAwOiBzYW1wbGVYIC0gc2FtcGxlV2lkdGggLyAyLCAyOiBzYW1wbGVZICsgc2FtcGxlSGVpZ2h0LyAyIH1cbiAgICApO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgeyAwOiBzYW1wbGVYIC0gc2FtcGxlV2lkdGggLyAyLCAyOiBzYW1wbGVZIC0gc2FtcGxlSGVpZ2h0IC8gMiB9XG4gICAgKTtcblxuICAgIGlmICghdGhpcy5yZWFsdGltZVJvd0RhdGFBZGRlZCAmJiAhdGhpcy5yZWFsdGltZVBsb3RBY3RpdmUpIHtcbiAgICAgIHRoaXMucnREYXRhWydzYW1wbGUnXSA9IHtcbiAgICAgICAgeDogc2FtcGxlWCxcbiAgICAgICAgeTogc2FtcGxlWSxcbiAgICAgICAgd2lkdGg6IHNhbXBsZVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHNhbXBsZUhlaWdodFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBURVNUOlxuICAgIGxldCB0ZXN0WDogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgdGVzdFk6IG51bWJlcltdID0gW107XG5cbiAgICBpZiAoZGF0YS5SZXdhcmRTdGFnZSAhPSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLlRlc3RHcmlkSW5kZXgpOyBpKyspIHtcbiAgICAgICAgLy8gSWYgU2FtZS1EaWZmZXJlbnQsIG9ubHkgc2hvdyB0aGUgZmlyc3QgdGVzdFxuICAgICAgICBpZiAoZGF0YS5TYW1lRGlmZmVyZW50ID4gMCB8fCBkYXRhLk5SU1ZQID4gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbnVtRGlzcGxheUVsZW1zKys7XG4gICAgICAgIGlmIChkYXRhLk5SU1ZQID4gMCkge1xuICAgICAgICAgIHRlc3RYLnB1c2goZGF0YS5YR3JpZENlbnRlclttYXhTYW1wbGVHcmlkSW5kZXggYXMgbnVtYmVyXSk7XG4gICAgICAgICAgdGVzdFkucHVzaChcbiAgICAgICAgICAgIGRhdGEuVmlld3BvcnRQaXhlbHNbMV1cbiAgICAgICAgICAgIC0gKGRhdGEuWUdyaWRDZW50ZXJbbWF4U2FtcGxlR3JpZEluZGV4IGFzIG51bWJlcl0gKyBkYXRhLm9mZnNldHRvcClcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlc3RYLnB1c2goZGF0YS5YR3JpZENlbnRlcltkYXRhLlRlc3RHcmlkSW5kZXhbaV1dKTtcbiAgICAgICAgICB0ZXN0WS5wdXNoKFxuICAgICAgICAgICAgZGF0YS5WaWV3cG9ydFBpeGVsc1sxXVxuICAgICAgICAgICAgLSAoZGF0YS5ZR3JpZENlbnRlcltkYXRhLlRlc3RHcmlkSW5kZXhbaV1dICsgZGF0YS5vZmZzZXR0b3ApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICAgICAgeyBcbiAgICAgICAgICAgIDA6IHRlc3RYW2ldIC0gdGVzdFdpZHRoIC8gMixcbiAgICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiB0ZXN0WVtpXSAtIHRlc3RIZWlnaHQgLyAyXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgICAgIHsgXG4gICAgICAgICAgICAwOiB0ZXN0WFtpXSArIHRlc3RXaWR0aCAvIDIsXG4gICAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogdGVzdFlbaV0gLSB0ZXN0SGVpZ2h0IC8gMlxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgICAgICB7IFxuICAgICAgICAgICAgMDogdGVzdFhbaV0gKyB0ZXN0V2lkdGggLyAyLFxuICAgICAgICAgICAgW251bURpc3BsYXlFbGVtc106IHRlc3RZW2ldICsgdGVzdEhlaWdodCAvIDJcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICAgICAgeyBcbiAgICAgICAgICAgIDA6IHRlc3RYW2ldIC0gdGVzdFdpZHRoIC8gMixcbiAgICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiB0ZXN0WVtpXSArIHRlc3RIZWlnaHQgLyAyXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgICAgIHsgXG4gICAgICAgICAgICAwOiB0ZXN0WFtpXSAtIHRlc3RXaWR0aCAvIDIsXG4gICAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogdGVzdFlbaV0gLSB0ZXN0SGVpZ2h0IC8gMlxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIXRoaXMucmVhbHRpbWVSb3dEYXRhQWRkZWQgJiYgIXRoaXMucmVhbHRpbWVQbG90QWN0aXZlKSB7XG4gICAgICAgICAgbGV0IHRtcCA9IHtcbiAgICAgICAgICAgICAgeDogdGVzdFhbaV0sXG4gICAgICAgICAgICAgIHk6IHRlc3RZW2ldLFxuICAgICAgICAgICAgICB3aWR0aDogdGVzdFdpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IHRlc3RIZWlnaHRcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5ydERhdGFbJ3Rlc3QnXS5wdXNoKHRtcCk7XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgfVxuXG4gICAgLy8gQ0hPSUNFOlxuICAgIGxldCBjaG9pY2VYOiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCBjaG9pY2VZOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgaWYgKGRhdGEuUmV3YXJkU3RhZ2UgIT0gMCAmJiBkYXRhLlNhbWVEaWZmZXJlbnQgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLkNob2ljZUdyaWRJbmRleCk7IGkrKykge1xuICAgICAgICBudW1EaXNwbGF5RWxlbXMrKztcbiAgICAgICAgY2hvaWNlWC5wdXNoKGRhdGEuWEdyaWRDZW50ZXJbZGF0YS5DaG9pY2VHcmlkSW5kZXhbaV1dKTtcbiAgICAgICAgY2hvaWNlWS5wdXNoKFxuICAgICAgICAgIGRhdGEuVmlld3BvcnRQaXhlbHNbMV1cbiAgICAgICAgICAtIChkYXRhLllHcmlkQ2VudGVyW2RhdGEuQ2hvaWNlR3JpZEluZGV4W2ldXSArIGRhdGEub2Zmc2V0dG9wKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICAgICAge1xuICAgICAgICAgICAgMDogY2hvaWNlWFtpXSAtIGNob2ljZVdpZHRoIC8gMixcbiAgICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiBjaG9pY2VZW2ldIC0gY2hvaWNlSGVpZ2h0IC8gMlxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAwOiBjaG9pY2VYW2ldICsgY2hvaWNlV2lkdGggLyAyLFxuICAgICAgICAgICAgW251bURpc3BsYXlFbGVtc106IGNob2ljZVlbaV0gLSBjaG9pY2VIZWlnaHQgLyAyXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDA6IGNob2ljZVhbaV0gKyBjaG9pY2VXaWR0aCAvIDIsXG4gICAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogY2hvaWNlWVtpXSArIGNob2ljZUhlaWdodCAvIDJcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICAgICAge1xuICAgICAgICAgICAgMDogY2hvaWNlWFtpXSAtIGNob2ljZVdpZHRoIC8gMixcbiAgICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiBjaG9pY2VZW2ldICsgY2hvaWNlSGVpZ2h0IC8gMlxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAwOiBjaG9pY2VYW2ldIC0gY2hvaWNlV2lkdGggLyAyLFxuICAgICAgICAgICAgW251bURpc3BsYXlFbGVtc106IGNob2ljZVlbaV0gLSBjaG9pY2VIZWlnaHQgLyAyXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBcbiAgICAgICAgLy8gcmVhbHRpbWUgbm90IGFjdGl2ZVxuICAgICAgICBpZiAoIXRoaXMucmVhbHRpbWVSb3dEYXRhQWRkZWQgJiYgIXRoaXMucmVhbHRpbWVQbG90QWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5ydERhdGFbJ2Nob2ljZSddLnB1c2goXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHg6IGNob2ljZVhbaV0sXG4gICAgICAgICAgICAgIHk6IGNob2ljZVlbaV0sXG4gICAgICAgICAgICAgIHdpZHRoOiBjaG9pY2VXaWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBjaG9pY2VIZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlYWx0aW1lUm93RGF0YUFkZGVkID0gdHJ1ZTtcblxuICAgIGxldCBmaXhYUG9zOiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCBmaXhZUG9zOiBudW1iZXJbXSA9IFtdO1xuICAgIGxldCB0ZXN0WFBvczogbnVtYmVyW11bXSA9IFtdO1xuICAgIGxldCB0ZXN0WVBvczogbnVtYmVyW11bXSA9IFtdO1xuICAgIGxldCBudW1UYXJnZXQgPSBbMCwgMF07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdWNoZXZlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIHhQb3MgPSB0b3VjaGV2ZW50W2ldWzBdO1xuICAgICAgeVBvcyA9IGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLSB0b3VjaGV2ZW50W2ldWzFdO1xuXG4gICAgICBsZXQgeURhdGFJbmRleDogbnVtYmVyO1xuICAgICAgaWYgKGkgJSAyID09IDApIHtcbiAgICAgICAgeURhdGFJbmRleCA9IGkgLyAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgeURhdGFJbmRleCA9IChpIC0gMSkgLyAyO1xuICAgICAgfVxuXG4gICAgICBpZiAoeFBvcyAhPSAtMSkge1xuICAgICAgICBsZXQgYXJyID0gbmV3IEFycmF5KG51bUNvbHVtblhZUG9zKTtcbiAgICAgICAgYXJyWzBdID0geFBvcztcblxuICAgICAgICBpZiAoaSAlIDIgPT0gMCkge1xuICAgICAgICAgIGZpeFhQb3MucHVzaCh4UG9zKTtcbiAgICAgICAgICBmaXhZUG9zLnB1c2goeVBvcyk7XG5cbiAgICAgICAgICBpZiAoeURhdGFbeURhdGFJbmRleF0gPT0gMSkge1xuICAgICAgICAgICAgYXJyW251bURpc3BsYXlFbGVtcyArIDFdID0geVBvcztcbiAgICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkUm93cyhbYXJyXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycltudW1EaXNwbGF5RWxlbXMgKyAyXSA9IHlQb3M7XG4gICAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZFJvd3MoW2Fycl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgdGVzdFhQb3NBcnI6IG51bWJlcltdID0gW107XG4gICAgICAgICAgbGV0IHRlc3RZUG9zQXJyOiBudW1iZXJbXSA9IFtdO1xuICAgICAgICAgIFxuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgXy5zaXplKGRhdGEuVGVzdEdyaWRJbmRleCk7IGorKykge1xuICAgICAgICAgICAgaWYgKGRhdGEuUmVzcG9uc2VbeURhdGFJbmRleF0gPT0gaikge1xuICAgICAgICAgICAgICB0ZXN0WFBvc0Fyci5wdXNoKHhQb3MpO1xuICAgICAgICAgICAgICB0ZXN0WVBvc0Fyci5wdXNoKHlQb3MpO1xuICAgICAgICAgICAgICBudW1UYXJnZXRbal0gKz0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlc3RYUG9zQXJyLnB1c2goMCk7XG4gICAgICAgICAgICAgIHRlc3RZUG9zQXJyLnB1c2goMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRlc3RYUG9zLnB1c2godGVzdFhQb3NBcnIpO1xuICAgICAgICAgICAgdGVzdFlQb3MucHVzaCh0ZXN0WVBvc0Fycik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHlEYXRhW3lEYXRhSW5kZXhdID09IDEpIHtcbiAgICAgICAgICAgIGFycltudW1EaXNwbGF5RWxlbXMgKyAzXSA9IHlQb3M7XG4gICAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZFJvd3MoW2Fycl0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnJbbnVtRGlzcGxheUVsZW1zICsgNF0gPSB5UG9zO1xuICAgICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRSb3dzKFthcnJdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IG1lYW5GaXhYUG9zID0gXy5tZWFuKGZpeFhQb3MpO1xuICAgICAgbGV0IG1lYW5GaXhZUG9zID0gXy5tZWFuKGZpeFlQb3MpO1xuICAgICAgbGV0IGRpc3RGaXhYUG9zID0gZml4WFBvcy5tYXAoKGE6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3coTWF0aC5hYnMoYSAtIG1lYW5GaXhYUG9zKSwgMik7XG4gICAgICB9KTtcbiAgICAgIGxldCBkaXN0Rml4WVBvcyA9IGZpeFlQb3MubWFwKChhOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KE1hdGguYWJzKGEgLSBtZWFuRml4WVBvcyksIDIpO1xuICAgICAgfSk7XG4gICAgICBsZXQgc3RkZXZGaXggPSBkaXN0Rml4WFBvcy5tYXAoKGE6IG51bWJlciwgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChhICsgZGlzdEZpeFlQb3NbaWR4XSk7XG4gICAgICB9KS5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgIH0sIDApIC8gXy5zaXplKGRpc3RGaXhYUG9zKTtcbiAgICAgIHRoaXMudml0YWxzLnN0ZGV2Rml4ID0gc3RkZXZGaXg7XG5cbiAgICAgIGxldCBzdGRldlRlc3Q6IG51bWJlcltdID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF8uc2l6ZShkYXRhLlRlc3RHcmlkSW5kZXgpOyBqKyspIHtcbiAgICAgICAgbGV0IGFsbFRlc3RYUG9zID0gdGVzdFhQb3MubWFwKChhOiBudW1iZXJbXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBhW2pdO1xuICAgICAgICB9KS5maWx0ZXIoKGE6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBhICE9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZWFuVGVzdFhQb3MgPSBhbGxUZXN0WFBvcy5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9LCAwKSAvIF8uc2l6ZShhbGxUZXN0WFBvcyk7XG5cbiAgICAgICAgbGV0IGRpc3RUZXN0WFBvcyA9IGFsbFRlc3RYUG9zLm1hcCgoYTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgucG93KE1hdGguYWJzKGEgLSBtZWFuVGVzdFhQb3MpLCAyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFsbFRlc3RZUG9zID0gdGVzdFlQb3MubWFwKChhOiBudW1iZXJbXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBhW2pdO1xuICAgICAgICB9KS5maWx0ZXIoKGE6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBhICE9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZWFuVGVzdFlQb3MgPSBhbGxUZXN0WVBvcy5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9LCAwKSAvIF8uc2l6ZShhbGxUZXN0WVBvcyk7XG5cbiAgICAgICAgbGV0IGRpc3RUZXN0WVBvcyA9IGFsbFRlc3RZUG9zLm1hcCgoYTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgucG93KE1hdGguYWJzKGEgLSBtZWFuVGVzdFlQb3MpLCAyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RkZXZUZXN0LnB1c2goXG4gICAgICAgICAgZGlzdFRlc3RYUG9zLm1hcCgoYTogbnVtYmVyLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoYSArIGRpc3RUZXN0WVBvc1tpXSk7XG4gICAgICAgICAgfSkucmVkdWNlKChhOiBudW1iZXIsIGI6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICAgIH0sIDApIC8gXy5zaXplKGFsbFRlc3RYUG9zKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy52aXRhbHMuc3RkZXZUZXN0ID0gc3RkZXZUZXN0O1xuICAgIH1cblxuICAgIHlEYXRhU21hbGwgPSB1dGlscy5zbW9vdGgoeURhdGEsIDUpO1xuICAgIHlEYXRhTGFyZ2UgPSB1dGlscy5zbW9vdGgoeURhdGEsIDEwMCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGltZUVuZFxuICAgIGxldCB0aW1lRW5kOiBudW1iZXI7XG4gICAgaWYgKFxuICAgICAgXy5pc1VuZGVmaW5lZChkYXRhLlJlc3BvbnNlWFlUKVxuICAgICAgfHwgXy5zaXplKGRhdGEuUmVzcG9uc2VYWVQpIDwgMVxuICAgICAgfHwgXy5pc1VuZGVmaW5lZChkYXRhLlJlc3BvbnNlWFlUWzJdW18uc2l6ZShkYXRhLlJlc3BvbnNlWFlUWzJdKSAtMV0pXG4gICAgKSB7XG4gICAgICB0aW1lRW5kID0gZGF0YS5GaXhhdGlvblhZVFsyXVtfLnNpemUoZGF0YS5GaXhhdGlvblhZVFsyXSkgLSAxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZUVuZCA9IGRhdGEuUmVzcG9uc2VYWVRbMl1bXy5zaXplKGRhdGEuUmVzcG9uc2VYWVRbMl0pIC0gMV07XG4gICAgfVxuXG4gICAgLy8gUkZJRFxuICAgIGxldCBudW1UcmlhbHMgPSBfLnNpemUoeURhdGEpO1xuICAgIGxldCBudW1SZWFkcyA9IF8uc2l6ZShkYXRhLlJGSURUYWcpO1xuICAgIG51bVJGSUQgPSBfLmZpbGwoQXJyYXkobnVtVHJpYWxzKSwgMCk7XG4gICAgdGhpcy52aXRhbHMudGFnQ291bnQgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUmVhZHM7IGkrKykge1xuICAgICAgaWYgKF8uaXNVbmRlZmluZWQodGhpcy52aXRhbHMudGFnQ291bnRbZGF0YS5SRklEVGFnW2ldWzJdXSkpIHtcbiAgICAgICAgdGhpcy52aXRhbHMudGFnQ291bnRbZGF0YS5SRklEVGFnW2ldWzJdXSA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnZpdGFscy50YWdDb3VudFtkYXRhLlJGSURUYWdbaV1bMl1dICs9IDE7XG4gICAgICBudW1SRklEW2RhdGEuUkZJRFRhZ1tpXVswXV0gKz0gMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IF8uc2l6ZShudW1SRklEKTsgaSsrKSB7XG4gICAgICBudW1SRklEW2ldID0gbnVtUkZJRFtpXSArIG51bVJGSURbaSAtIDFdO1xuICAgIH1cblxuICAgIC8vIEFkZGluZyByZXN0IG9mIHRoZSBkYXRhXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoeURhdGEpOyBpKyspIHtcbiAgICAgIGxldCB0aW1lRml4ID0gZGF0YS5GaXhhdGlvblhZVFsyXVtpXSAvLyBpbiBtaWxsaXNlY29uZHNcbiAgICAgIGlmICh0aW1lRml4IDwgMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHQgPSBuZXcgRGF0ZShmaWxlLmRhdGVTYXZlZCEpO1xuICAgICAgdC5zZXRUaW1lKHQuZ2V0VGltZSgpIC0gKHRpbWVFbmQgLSB0aW1lRml4KSk7XG5cbiAgICAgIHRoaXMucGVyZkRhdGFUYWJsZS5hZGRSb3dzKFtbeERhdGFbaV0sIHlEYXRhU21hbGxbaV0sIHlEYXRhTGFyZ2VbaV1dXSk7XG4gICAgICB0aGlzLmN1bXVsRGF0YVRhYmxlLmFkZFJvd3MoW1t0LCBudW1Ub3RhbFtpXSwgbnVtQ29ycmVjdFtpXSwgbnVtUkZJRFtpXV1dKTtcbiAgICB9XG4gICAgdGhpcy5mb3JtYXREYXRlKHRoaXMuY3VtdWxEYXRhVGFibGUsIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgdGFyZ2V0OiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUsIFxuICAgIG51bUNvbHVtbnM6IG51bWJlciwgXG4gICAgZGF0YTogUmVjb3JkPG51bWJlciwgbnVtYmVyIHwgc3RyaW5nPlxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbHVtbnM7IGkrKykge1xuICAgICAgaWYgKF8uaGFzKGRhdGEsIGkpKSB7XG4gICAgICAgIGFyci5wdXNoKGRhdGFbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdhcnI6JywgYXJyKTtcbiAgICB0YXJnZXQuYWRkUm93cyhbYXJyXSk7XG4gIH1cblxuICAvLyBUT0RPOiBkZWFsIHdpdGggY2FzZSB3aGVyZSBTYW1wbGVTY2VuZXNbMF0uT0JKRUNUU1tmaXJzdEtleV0uc2l6ZUluY2hlcyBpcyBhblxuICAvLyBBcnJheSBvZiBhcnJheXMgLS0gaS5lLiBzY2VuZSBtb3ZpZVxuICBwcml2YXRlIGdldFNhbXBsZVdpZHRoKGZpbGVEYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgbGV0IHNhbXBsZVdpZHRoID0gMDtcbiAgICBpZiAoXy5zaXplKGZpbGVEYXRhLlNhbXBsZVNjZW5lc1swXS5JTUFHRVMuaW1hZ2VpZHgpID4gMCkge1xuICAgICAgaWYgKF8uaXNBcnJheShmaWxlRGF0YS5TYW1wbGVTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMpKSB7XG4gICAgICAgIGxldCBtYXhTaXplSW5jaGVzID0gXy5tYXgoZmlsZURhdGEuU2FtcGxlU2NlbmVzWzBdLklNQUdFUy5zaXplSW5jaGVzKTtcbiAgICAgICAgaWYgKF8uaXNOdW1iZXIobWF4U2l6ZUluY2hlcykpIHtcbiAgICAgICAgICBzYW1wbGVXaWR0aCA9IG1heFNpemVJbmNoZXMgKiBmaWxlRGF0YS5WaWV3cG9ydFBQSTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnU2FtcGxlU2NlbmVzWzBdLklNQUdFUy5zaXplSW5jaGVzIGlzIG5vdCBhbiBhcnJheS4gUGxlYXNlIGZpeCEnXG4gICAgICAgICk7XG4gICAgICAgIHNhbXBsZVdpZHRoID0gKFxuICAgICAgICAgIGZpbGVEYXRhLlNhbXBsZVNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdEtleSA9IF8uZmluZEtleShmaWxlRGF0YS5TYW1wbGVTY2VuZXNbMF0uT0JKRUNUUyk7XG4gICAgICBpZiAoXy5pc1N0cmluZyhmaXJzdEtleSkpIHtcbiAgICAgICAgbGV0IG1heFNpemVJbmNoZXMgPSAoXG4gICAgICAgICAgXy5tYXgoZmlsZURhdGEuU2FtcGxlU2NlbmVzWzBdLk9CSkVDVFNbZmlyc3RLZXldLnNpemVJbmNoZXMpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChfLmlzTnVtYmVyKG1heFNpemVJbmNoZXMpKSB7XG4gICAgICAgICAgc2FtcGxlV2lkdGggPSBtYXhTaXplSW5jaGVzICogZmlsZURhdGEuVmlld3BvcnRQUEk7XG4gICAgICAgIH0gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdmaXJzdEtleSBvZiBTYW1wbGVTY2VuZXNbMF0uT0JKRUNUUyBpcyBub3Qgb2YgdHlwZSBzdHJpbmcnXG4gICAgICAgICk7XG4gICAgICB9ICBcbiAgICB9XG4gICAgcmV0dXJuIHNhbXBsZVdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUZXN0V2lkdGgoZmlsZURhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICBsZXQgdGVzdFdpZHRoID0gMDtcblxuICAgIGlmIChmaWxlRGF0YS5UZXN0U2NlbmVzWzBdLklNQUdFUy5pbWFnZWlkeC5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KGZpbGVEYXRhLlRlc3RTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMpKSB7XG4gICAgICAgIGxldCBtYXhTaXplSW5jaGVzID0gXy5tYXgoZmlsZURhdGEuVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyk7XG4gICAgICAgIGlmIChfLmlzTnVtYmVyKG1heFNpemVJbmNoZXMpKSB7XG4gICAgICAgICAgdGVzdFdpZHRoID0gbWF4U2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyBpcyBub3Qgb2YgdHlwZSBudW1iZXInXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyBpcyBub3QgYW4gYXJyYXkuIFBsZWFzZSBmaXghJ1xuICAgICAgICApO1xuICAgICAgICB0ZXN0V2lkdGggPSAoXG4gICAgICAgICAgZmlsZURhdGEuVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdEtleSA9IF8uZmluZEtleShmaWxlRGF0YS5UZXN0U2NlbmVzWzBdLk9CSkVDVFMpO1xuICAgICAgaWYgKF8uaXNTdHJpbmcoZmlyc3RLZXkpKSB7XG4gICAgICAgIGxldCBtYXhTaXplSW5jaGVzID0gKFxuICAgICAgICAgIF8ubWF4KGZpbGVEYXRhLlRlc3RTY2VuZXNbMF0uT0JKRUNUU1tmaXJzdEtleV0uc2l6ZUluY2hlcylcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKF8uaXNOdW1iZXIobWF4U2l6ZUluY2hlcykpIHtcbiAgICAgICAgICB0ZXN0V2lkdGggPSBtYXhTaXplSW5jaGVzICogZmlsZURhdGEuVmlld3BvcnRQUEk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdmaXJzdEtleSBvZiBUZXN0U2NlbmVzWzBdLk9CSkVDVFMgaXMgbm90IG9mIHR5cGUgc3RyaW5nJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoZmlsZURhdGEuTlJTVlApICYmIGZpbGVEYXRhLk5SU1ZQID4gMCkge1xuICAgICAgdGVzdFdpZHRoID0gZmlsZURhdGEuU2FtcGxlRml4YXRpb25TaXplSW5jaGVzICogZmlsZURhdGEuVmlld3BvcnRQUEk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlc3RXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rml4YXRpb25XaWR0aChmaWxlRGF0YTogTGl2ZXBsb3REYXRhVHlwZSwgc2FtcGxlV2lkdGg6IG51bWJlcikge1xuICAgIGxldCBmaXhhdGlvbldpZHRoID0gMDtcblxuICAgIGlmIChmaWxlRGF0YS5GaXhhdGlvblVzZXNTYW1wbGUgPD0gMCkge1xuICAgICAgZml4YXRpb25XaWR0aCA9IGZpbGVEYXRhLkZpeGF0aW9uU2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXhhdGlvbldpZHRoID0gc2FtcGxlV2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBmaXhhdGlvbldpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaG9pY2VXaWR0aChmaWxlRGF0YTogTGl2ZXBsb3REYXRhVHlwZSkge1xuICAgIGxldCBjaG9pY2VXaWR0aCA9IDA7XG4gICAgaWYgKFxuICAgICAgIV8uaXNVbmRlZmluZWQoZmlsZURhdGEuU2FtZURpZmZlcmVudClcbiAgICAgICYmIGZpbGVEYXRhLlNhbWVEaWZmZXJlbnQgPiAwXG4gICAgKSB7XG4gICAgICBjaG9pY2VXaWR0aCA9IGZpbGVEYXRhLkNob2ljZVNpemVJbmNoZXMgKiBmaWxlRGF0YS5WaWV3cG9ydFBQSTtcbiAgICB9XG4gICAgcmV0dXJuIGNob2ljZVdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkT2JqUGVyZkRhdGEoZGF0YTogTGl2ZXBsb3REYXRhVHlwZSkge1xuICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5yZW1vdmVSb3dzKFxuICAgICAgMCwgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpXG4gICAgKTtcbiAgXG4gICAgbGV0IGxlblNhbXBsZU9iajogbnVtYmVyO1xuICAgIGlmIChkYXRhLlJld2FyZFN0YWdlID09IDEpIHtcbiAgICAgIGxldCBzYW1wbGVPYmogPSBbXTtcbiAgICAgIGlmIChkYXRhLk5UcmlhbHNQZXJCYWdCbG9jayA+IDUwMDApIHtcbiAgICAgICAgc2FtcGxlT2JqLnB1c2goZGF0YS5JbWFnZUJhZ3NTYW1wbGVbMF0uc3BsaXQoJy8nKVs1XSk7XG4gICAgICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5hZGRSb3coW3NhbXBsZU9ialswXSwgMF0pO1xuICAgICAgICBsZW5TYW1wbGVPYmogPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5JbWFnZUJhZ3NTYW1wbGUpOyBpKyspIHtcbiAgICAgICAgICBzYW1wbGVPYmoucHVzaChkYXRhLkltYWdlQmFnc1NhbXBsZVtpXS5zcGxpdCgnLycpWzVdKTtcbiAgICAgICAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUuYWRkUm93KFtzYW1wbGVPYmpbaV0sIDBdKTtcbiAgICAgICAgfVxuICAgICAgICBsZW5TYW1wbGVPYmogPSBfLnNpemUoc2FtcGxlT2JqKTtcbiAgICAgIH1cblxuICAgICAgbGV0IE5EaWZmT2JqUGVyZiA9IF8uZmlsbChBcnJheShsZW5TYW1wbGVPYmopLCAwKTtcbiAgICAgIGxldCBORGlmZk9iaiA9IF8uZmlsbChBcnJheShsZW5TYW1wbGVPYmopLCAwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuU2FtcGxlWzBdKTsgaSsrKSB7IC8vIEZvciBpIHRyaWFsc1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlblNhbXBsZU9iajsgaisrKSB7XG4gICAgICAgICAgLy8gSWYgc2FtcGxlIHdhcyB0aGF0IG9iamVjdFxuICAgICAgICAgIGlmIChkYXRhLlNhbXBsZUJhZ0lkeFtkYXRhLlNhbXBsZVswXVtpXV0gPT0gaikge1xuICAgICAgICAgICAgTkRpZmZPYmpbal0gKz0gMTtcbiAgICAgICAgICAgIC8vIElmIGNvcnJlY3RcbiAgICAgICAgICAgIGlmIChkYXRhLlJlc3BvbnNlW2ldID09IGRhdGEuQ29ycmVjdEl0ZW1baV0pIHtcbiAgICAgICAgICAgICAgTkRpZmZPYmpQZXJmW2pdICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5zZXRWYWx1ZShqLCAxLCBORGlmZk9ialBlcmZbal0gLyBORGlmZk9ialtqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRDaG9pY2VEYXRhKGRhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5yZW1vdmVSb3dzKDAsIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICBcbiAgICBpZiAoZGF0YS5SZXdhcmRTdGFnZSAhPSAwKSB7XG4gICAgICAvLyBsZXQgcG9zc2libGVSZXNwID0gXy5maWxsKEFycmF5KF8uc2l6ZShkYXRhLk9iamVjdEdyaWRJbmRleCkpLCAwKTtcbiAgICAgIGxldCBwb3NzaWJsZVJlc3AgPSBbXTtcbiAgICAgIFxuICAgICAgaWYgKFxuICAgICAgICBfLnNpemUoZGF0YS5PYmplY3RHcmlkSW5kZXgpICE9IDBcbiAgICAgICAgJiYgKF8uaXNVbmRlZmluZWQoZGF0YS5OVHJpYWxzUGVyQmFnQmxvY2spIFxuICAgICAgICB8fCBkYXRhLk5UcmlhbHNQZXJCYWdCbG9jayA8IDEwMDApXG4gICAgICApIHtcbiAgICAgICAgbGV0IG9iakdyaWRJbmRleCA9IF8uY2xvbmVEZWVwKGRhdGEuT2JqZWN0R3JpZEluZGV4KTtcbiAgICAgICAgb2JqR3JpZEluZGV4LnNvcnQoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGFsbGluZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShvYmpHcmlkSW5kZXgpOyBpKyspIHtcbiAgICAgICAgICAvLyBhbGxpbmQucHVzaChfLmZpbmRJbmRleChkYXRhLk9iamVjdEdyaWRJbmRleCwgb2JqR3JpZEluZGV4W2ldKSk7XG4gICAgICAgICAgYWxsaW5kLnB1c2goZGF0YS5PYmplY3RHcmlkSW5kZXguaW5kZXhPZihvYmpHcmlkSW5kZXhbaV0pKTtcbiAgICAgICAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5hZGRSb3coXG4gICAgICAgICAgICBbZGF0YS5JbWFnZUJhZ3NTYW1wbGVbYWxsaW5kW2ldXS5zcGxpdCgnLycpWzVdLCAwXVxuICAgICAgICAgICk7XG4gICAgICAgICAgcG9zc2libGVSZXNwLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuVGVzdEdyaWRJbmRleCk7IGkrKykge1xuICAgICAgICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmFkZFJvdyhbJ2Nob2ljZScgKyAoaSArIDEpLCAwXSk7XG4gICAgICAgICAgcG9zc2libGVSZXNwLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IE5EaWZmQ2hvaWNlID0gXy5maWxsKEFycmF5KF8uc2l6ZShwb3NzaWJsZVJlc3ApKSwgMCk7XG4gICAgICBsZXQgTkFsbENob2ljZSA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuUmVzcG9uc2UpOyBpKyspIHtcbiAgICAgICAgaWYgKGRhdGEuUmVzcG9uc2VbaV0gIT0gLTEpIHtcbiAgICAgICAgICBOQWxsQ2hvaWNlKys7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF8uc2l6ZShwb3NzaWJsZVJlc3ApOyBqKyspIHtcbiAgICAgICAgICBpZiAoZGF0YS5SZXNwb25zZVtpXSA9PSBwb3NzaWJsZVJlc3Bbal0gJiYgZGF0YS5SZXNwb25zZVtpXSAhPSAtMSkge1xuICAgICAgICAgICAgTkRpZmZDaG9pY2Vbal0rKztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jaG9pY2VEYXRhVGFibGUuc2V0VmFsdWUoaiwgMSwgTkRpZmZDaG9pY2Vbal0gLyBOQWxsQ2hvaWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5hZGRSb3coWydvdXRzaWRlIEZpeCcsIDBdKTtcbiAgICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmFkZFJvdyhbJ2luc2lkZSBGaXgnLCAwXSk7XG5cbiAgICAgIGxldCBORGlmZkNob2ljZSA9IF8uZmlsbChBcnJheSgyKSwgMCk7XG4gICAgICBsZXQgTkFsbENob2ljZSA9IDA7XG4gICAgICBsZXQgeURhdGEgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5Db3JyZWN0SXRlbSk7IGkrKykge1xuICAgICAgICBpZiAoZGF0YS5Db3JyZWN0SXRlbVtpXSA9PSBkYXRhLlJlc3BvbnNlW2ldKSB7XG4gICAgICAgICAgeURhdGEucHVzaCgxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5RGF0YS5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKHlEYXRhKTsgaSsrKSB7XG4gICAgICAgIE5BbGxDaG9pY2UrKztcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgICAgIGlmICh5RGF0YVtpXSA9PSBqKSB7XG4gICAgICAgICAgICBORGlmZkNob2ljZVtqXSArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5zZXRWYWx1ZShqLCAxLCBORGlmZkNob2ljZVtqXSAvIE5BbGxDaG9pY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkUmV3YXJkRGF0YShkYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgdGhpcy5yZXdhcmREYXRhVGFibGUucmVtb3ZlUm93cygwLCB0aGlzLnJld2FyZERhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgbGV0IE5SZXdhcmRNYXggPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuTlJld2FyZE1heDsgaSsrKSB7XG4gICAgICBOUmV3YXJkTWF4LnB1c2goaS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgLy8gTlJld2FyZE1heC51bnNoaWZ0KCctMScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoTlJld2FyZE1heCk7IGkrKykge1xuICAgICAgdGhpcy5yZXdhcmREYXRhVGFibGUuYWRkUm93KFtOUmV3YXJkTWF4W2ldLCAwXSk7XG4gICAgfVxuXG4gICAgbGV0IE5EaWZmUmV3YXJkID0gXy5maWxsKEFycmF5KF8uc2l6ZShOUmV3YXJkTWF4KSksIDApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5OUmV3YXJkKTsgaSsrKSB7XG4gICAgICBpZiAoZGF0YS5SZXNwb25zZVtpXSA9PSAtMSkge1xuICAgICAgICBORGlmZlJld2FyZFswXSsrO1xuICAgICAgICB0aGlzLnJld2FyZERhdGFUYWJsZS5zZXRWYWx1ZShcbiAgICAgICAgICAwLCAxLCBORGlmZlJld2FyZFswXSAvIF8uc2l6ZShkYXRhLk5SZXdhcmQpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IF8uc2l6ZShOUmV3YXJkTWF4KTsgaisrKSB7XG4gICAgICAgICAgaWYgKGRhdGEuTlJld2FyZFtpXS50b1N0cmluZygpID09IE5SZXdhcmRNYXhbal0pIHtcbiAgICAgICAgICAgIE5EaWZmUmV3YXJkW2pdKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmV3YXJkRGF0YVRhYmxlLnNldFZhbHVlKFxuICAgICAgICAgICAgaiwgMSwgTkRpZmZSZXdhcmRbal0gLyBfLnNpemUoZGF0YS5OUmV3YXJkKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRyYXdQZXJmb3JtYW5jZVBsb3QoZmlsZTogRmlsZVR5cGUpIHtcbiAgICBsZXQgbnVtUm93cyA9IHRoaXMucGVyZkRhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKTtcbiAgICB0aGlzLm5UcmlhbHMgPSBudW1Sb3dzO1xuICAgIGxldCBwZXJmRmlsdGVyU3RhdGU6IGFueSA9IHRoaXMucGVyZkZpbHRlci5nZXRTdGF0ZSgpO1xuXG4gICAgLy8gdXBkYXRpbmcgcGVyZkZpbHRlclxuICAgIGlmIChmaWxlLmRhdGFDaGFuZ2VkICYmICFmaWxlLmZpbGVDaGFuZ2VkKSB7XG4gICAgICBpZiAobnVtUm93cyA8PSAxMDApIHtcbiAgICAgICAgLy8gZXhwYW5kIHdpbmRvdyBzaXplIGF1dG9tYXRpY2FsbHkgdXAgdG8gMTAwXG4gICAgICAgIHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA9IDA7XG4gICAgICAgIHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5lbmQgPSBudW1Sb3dzOyAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRUcmlhbHMgPSBudW1Sb3dzIC0gXy5zaXplKGZpbGUuZGF0YT8uRml4YXRpb25HcmlkSW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZygnZHRyaWFscycsIGRUcmlhbHMpO1xuICAgICAgICBwZXJmRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQgPSBudW1Sb3dzIC0gMTAwO1xuICAgICAgICBwZXJmRmlsdGVyU3RhdGUucmFuZ2UuZW5kID0gbnVtUm93cztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZUNoYW5nZWQpIHtcbiAgICAgIGxldCBkU2xpZGVyID0gMTAwO1xuICAgICAgcGVyZkZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0ID0gbnVtUm93cyAtIGRTbGlkZXI7XG4gICAgICBwZXJmRmlsdGVyU3RhdGUucmFuZ2UuZW5kID0gbnVtUm93cztcbiAgICAgIGlmIChwZXJmRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQgPCAwKSB7XG4gICAgICAgIHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wZXJmUGxvdC5zZXRPcHRpb25zKHRoaXMucGVyZlBsb3RPcHRpb25zKTtcbiAgICB0aGlzLnBlcmZGaWx0ZXIuc2V0U3RhdGUoe1xuICAgICAgcmFuZ2U6IHtcbiAgICAgICAgc3RhcnQ6IHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCxcbiAgICAgICAgZW5kOiBwZXJmRmlsdGVyU3RhdGUucmFuZ2UuZW5kXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5wZXJmRGFzaGJvYXJkLmRyYXcodGhpcy5wZXJmRGF0YVRhYmxlKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1RyaWFsUGxvdChmaWxlOiBGaWxlVHlwZSkge1xuICAgIGxldCB0cmlhbEZpbHRlclN0YXRlOiBhbnkgPSB0aGlzLnRyaWFsRmlsdGVyLmdldFN0YXRlKCk7XG4gICAgbGV0IHRtaW4gPSBuZXcgRGF0ZSh0aGlzLmN1bXVsRGF0YVRhYmxlLmdldENvbHVtblJhbmdlKDApLm1pbik7XG4gICAgbGV0IHRtYXggPSBuZXcgRGF0ZSh0aGlzLmN1bXVsRGF0YVRhYmxlLmdldENvbHVtblJhbmdlKDApLm1heCk7XG5cbiAgICBpZiAoZmlsZS5kYXRhQ2hhbmdlZCB8fCBmaWxlLmZpbGVDaGFuZ2VkKSB7XG4gICAgICB0cmlhbEZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0ID0gdG1pbjtcbiAgICAgIHRyaWFsRmlsdGVyU3RhdGUucmFuZ2UuZW5kID0gdG1heDtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWFsRmlsdGVyLnNldFN0YXRlKHtcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgIHN0YXJ0OiB0cmlhbEZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0LFxuICAgICAgICBlbmQ6IHRyaWFsRmlsdGVyU3RhdGUucmFuZ2UuZW5kXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50cmlhbFBsb3Quc2V0T3B0aW9ucyh0aGlzLnRyaWFsUGxvdE9wdGlvbnMpO1xuICAgIHRoaXMudHJpYWxEYXNoYm9hcmQuZHJhdyh0aGlzLmN1bXVsRGF0YVRhYmxlKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd09ialBlcmZQbG90KCkge1xuICAgIHRoaXMub2JqUGVyZlBsb3QuZHJhdyh0aGlzLm9ialBlcmZEYXRhVGFibGUsIHRoaXMub2JqUGVyZlBsb3RPcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1J4blRpbWVQbG90KCkge1xuICAgIHRoaXMucnhuUGxvdC5kcmF3KHRoaXMucnhuVGltZURhdGFUYWJsZSwgdGhpcy5yeG5QbG90T3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdDaG9pY2VQbG90KCkge1xuICAgIHRoaXMuY2hvaWNlUGxvdC5kcmF3KHRoaXMuY2hvaWNlRGF0YVRhYmxlLCB0aGlzLmNob2ljZVBsb3RPcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1Jld2FyZFBsb3QoKSB7XG4gICAgdGhpcy5yZXdhcmRQbG90LmRyYXcodGhpcy5yZXdhcmREYXRhVGFibGUsIHRoaXMucmV3YXJkUGxvdE9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3UmVhbHRpbWVQbG90KGRhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICBsZXQgaWR4ID0gMDtcbiAgICB0aGlzLnJlYWx0aW1lUGxvdE9wdGlvbnMgPSB7XG4gICAgICBzZXJpZXNUeXBlOiAnc2NhdHRlcicsXG4gICAgICB3aWR0aDogZGF0YS53b3Jrc3BhY2VbMl0gKiBkYXRhLkNhbnZhc1JhdGlvLFxuICAgICAgaGVpZ2h0OiBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC0gZGF0YS5vZmZzZXR0b3AsXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AnXG4gICAgICB9LFxuICAgICAgaEF4aXM6IHtcbiAgICAgICAgdGl0bGU6ICdYIHBvc2l0aW9uIChweCknLFxuICAgICAgICB2aWV3V2luZG93OiB7XG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogZGF0YS53b3Jrc3BhY2VbMl0gKiBkYXRhLkNhbnZhc1JhdGlvXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB2QXhpczoge1xuICAgICAgICB0aXRsZTogJ1kgcG9zaXRpb24gKHB4KScsXG4gICAgICAgIHZpZXdXaW5kb3c6IHtcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC0gZGF0YS5vZmZzZXR0b3BcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZWFsdGltZVBsb3RPcHRpb25zLmhBeGlzID0ge1xuICAgICAgdGl0bGU6ICdYIHBvc2l0aW9uIChweCknLFxuICAgICAgdmlld1dpbmRvdzoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogZGF0YS53b3Jrc3BhY2VbMl0gKiBkYXRhLkNhbnZhc1JhdGlvXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnJlYWx0aW1lUGxvdE9wdGlvbnMudkF4aXMgPSB7XG4gICAgICB0aXRsZTogJ1kgcG9zaXRpb24gKHB4KScsXG4gICAgICB2aWV3V2luZG93OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC0gZGF0YS5vZmZzZXR0b3BcbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBudW1Db2wgPSB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZSxcbiAgICAgIG51bUNvbCxcbiAgICAgIHswOiAwLCBbbnVtQ29sIC0gMl06IDB9XG4gICAgKTtcbiAgICBsZXQgbnVtUm93cyA9IHRoaXMucmVhbHRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCk7XG5cbiAgICB0aGlzLnJlYWx0aW1lUGxvdENvbmZpZyA9IHtcbiAgICAgIGNoYXJ0VHlwZTogJ0NvbWJvQ2hhcnQnLFxuICAgICAgY29udGFpbmVySWQ6ICdyZWFsdGltZS1wbG90JyxcbiAgICAgIG9wdGlvbnM6IHRoaXMucmVhbHRpbWVQbG90T3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy5yZWFsdGltZVBsb3QgPSAoXG4gICAgICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKHRoaXMucmVhbHRpbWVQbG90Q29uZmlnKVxuICAgICk7XG4gICAgdGhpcy5yZWFsdGltZVBsb3Quc2V0RGF0YVRhYmxlKHRoaXMucmVhbHRpbWVEYXRhVGFibGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYXRhX2Fycml2ZWQnLCAoZXZ0OiBDdXN0b21FdmVudEluaXQpID0+IHtcbiAgICAgIGlmIChpZHggJSAyID09IDApIHtcbiAgICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5zZXRWYWx1ZShudW1Sb3dzIC0gMSwgMCwgTWF0aC5mbG9vcihldnQuZGV0YWlsLngpKTtcbiAgICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5zZXRWYWx1ZShudW1Sb3dzIC0gMSwgbnVtQ29sIC0gMiwgTWF0aC5mbG9vcihldnQuZGV0YWlsLnkpKTtcbiAgICAgICAgdGhpcy5yZWFsdGltZVBsb3QuZHJhdygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3U3RhdGljRWxlbWVudHMoY3ZzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsLCBkYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdncmF5JztcbiAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgMCwgXG4gICAgICAgIDAsIFxuICAgICAgICBkYXRhLndvcmtzcGFjZVsyXSAqIGRhdGEuQ2FudmFzUmF0aW8sXG4gICAgICAgIGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLSBkYXRhLm9mZnNldHRvcFxuICAgICAgKTtcblxuICAgICAgLy8gRml4YXRpb25cbiAgICAgIGlmIChkYXRhLkZpeGF0aW9uVXNlc1NhbXBsZSA8IDEpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAwRkYnO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgdGhpcy5ydERhdGEuZml4YXRpb24ueCxcbiAgICAgICAgICBjdnMuaGVpZ2h0IC0gdGhpcy5ydERhdGEuZml4YXRpb24ueSxcbiAgICAgICAgICB0aGlzLnJ0RGF0YS5maXhhdGlvbi53aWR0aCAvIDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBNYXRoLlBJICogMixcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIFNhbXBsZVxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAwMDAnOyAvLyBibGFja1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnJlY3QoXG4gICAgICAgIHRoaXMucnREYXRhLnNhbXBsZS54IC0gdGhpcy5ydERhdGEuc2FtcGxlLndpZHRoIC8gMixcbiAgICAgICAgY3ZzLmhlaWdodCAtICh0aGlzLnJ0RGF0YS5zYW1wbGUueSArIHRoaXMucnREYXRhLnNhbXBsZS5oZWlnaHQgLyAyKSxcbiAgICAgICAgdGhpcy5ydERhdGEuc2FtcGxlLndpZHRoLFxuICAgICAgICB0aGlzLnJ0RGF0YS5zYW1wbGUuaGVpZ2h0XG4gICAgICApO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAvLyBUZXN0XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZSh0aGlzLnJ0RGF0YVsndGVzdCddKTsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QoXG4gICAgICAgICAgdGhpcy5ydERhdGFbJ3Rlc3QnXVtpXS54IC0gdGhpcy5ydERhdGFbJ3Rlc3QnXVtpXS53aWR0aCAvIDIsXG4gICAgICAgICAgY3ZzLmhlaWdodCAtICh0aGlzLnJ0RGF0YVsndGVzdCddW2ldLnkgKyB0aGlzLnJ0RGF0YVsndGVzdCddW2ldLmhlaWdodCAvIDIpLFxuICAgICAgICAgIHRoaXMucnREYXRhWyd0ZXN0J11baV0ud2lkdGgsXG4gICAgICAgICAgdGhpcy5ydERhdGFbJ3Rlc3QnXVtpXS5oZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBDaG9pY2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKHRoaXMucnREYXRhWydjaG9pY2UnXSk7IGkrKykge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KFxuICAgICAgICAgIHRoaXMucnREYXRhWydjaG9pY2UnXVtpXS54IC0gdGhpcy5ydERhdGFbJ2Nob2ljZSddW2ldLndpZHRoIC8gMixcbiAgICAgICAgICBjdnMuaGVpZ2h0IC0gKHRoaXMucnREYXRhWydjaG9pY2UnXVtpXS55ICsgdGhpcy5ydERhdGFbJ2Nob2ljZSddW2ldLmhlaWdodCAvIDIpLFxuICAgICAgICAgIHRoaXMucnREYXRhWydjaG9pY2UnXVtpXS53aWR0aCxcbiAgICAgICAgICB0aGlzLnJ0RGF0YVsnY2hvaWNlJ11baV0uaGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGZpeFdpblN6ID0gZGF0YS5GaXhhdGlvbldpbmRvd1NpemVJbmNoZXM7XG5cbiAgICAgIGlmIChfLmlzTnVtYmVyKGZpeFdpblN6KSAmJiBmaXhXaW5TeiA+IDApIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRkZGMDAnOyAvLyB5ZWxsb3dcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoXG4gICAgICAgICAgdGhpcy5ydERhdGEuZml4YXRpb24ueCAtIF8uZmxvb3IoZml4V2luU3ogLyAyICogZGF0YS5WaWV3cG9ydFBQSSksXG4gICAgICAgICAgY3ZzLmhlaWdodCBcbiAgICAgICAgICAtICh0aGlzLnJ0RGF0YS5maXhhdGlvbi55ICsgXy5mbG9vcihmaXhXaW5TeiAvIDIgKiBkYXRhLlZpZXdwb3J0UFBJKSksXG4gICAgICAgICAgXy5mbG9vcihmaXhXaW5TeiAqIGRhdGEuVmlld3BvcnRQUEkpLFxuICAgICAgICAgIF8uZmxvb3IoZml4V2luU3ogKiBkYXRhLlZpZXdwb3J0UFBJKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBkcmF3UmVhbHRpbWVQbG90MihkYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgbGV0IGN2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFsdGltZS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjdnMud2lkdGggPSBkYXRhLndvcmtzcGFjZVsyXSAqIGRhdGEuQ2FudmFzUmF0aW87XG4gICAgY3ZzLmhlaWdodCA9IGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLSBkYXRhLm9mZnNldHRvcDtcbiAgICBsZXQgY3R4ID0gY3ZzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHRoaXMuZHJhd1N0YXRpY0VsZW1lbnRzKGN2cywgY3R4LCBkYXRhKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGF0YV9hcnJpdmVkJywgKGV2dDogQ3VzdG9tRXZlbnRJbml0KSA9PiB7XG5cbiAgICAgIGlmIChldnQuZGV0YWlsLm1ldGEgPT0gMikge1xuICAgICAgICB0aGlzLmRyYXdTdGF0aWNFbGVtZW50cyhjdnMsIGN0eCwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldnQuZGV0YWlsLm1ldGEgPT0gMSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgIH0gZWxzZSBpZiAoZXZ0LmRldGFpbC5tZXRhID09IDApIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgfVxuXG4gICAgICBjdHg/LmJlZ2luUGF0aCgpO1xuICAgICAgbGV0IHggPSBfLmZsb29yKGV2dC5kZXRhaWwueCk7XG4gICAgICBsZXQgeSA9IF8uZmxvb3IoY3ZzLmhlaWdodCAtIGV2dC5kZXRhaWwueSk7XG4gICAgICBjdHg/LmFyYyh4LCB5LCAyLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICBjdHg/LmZpbGwoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgcHJpdmF0ZSBkcmF3U2NyZWVuUGxvdChkYXRhOiBMaXZlcGxvdERhdGFUeXBlLCBzY3JlZW5BY3RpdmU6IGJvb2xlYW4pIHtcblxuICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnh5UG9zRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnh5UG9zRGF0YVRhYmxlLmdldENvbHVtbkxhYmVsKGkpID09ICdGaXhhdGlvbicpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0geyB0eXBlOiAnbGluZScsIGNvbG9yOiAnZ3JheScgfTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKSA9PSAnU2FtcGxlJykge1xuICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnNlcmllc1tpIC0gMV0gPSAoXG4gICAgICAgICAgeyB0eXBlOiAnbGluZScsIGNvbG9yOiAnYmxhY2snIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKSA9PSAnU2FtZScpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0gKFxuICAgICAgICAgIHsgdHlwZTogJ2xpbmUnLCBjb2xvcjogJ2dyZWVuJyB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ0RpZmZlcmVudCcpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0gKFxuICAgICAgICAgIHsgdHlwZTogJ2xpbmUnLCBjb2xvcjogJ3JlZCcgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnh5UG9zRGF0YVRhYmxlLmdldENvbHVtbkxhYmVsKGkpID09ICdGaXhfUmV3YXJkJykge1xuICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnNlcmllc1tpIC0gMV0gPSB7IGNvbG9yOiAnYmx1ZScgfTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKSA9PSAnRml4X1B1bmlzaCcpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0geyBjb2xvcjogJ3JlZCcgfTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKSA9PSAnVGFyZ2V0X1Jld2FyZCcpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0geyBjb2xvcjogJ2dyZWVuJyB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnh5UG9zRGF0YVRhYmxlLmdldENvbHVtbkxhYmVsKGkpID09ICdUYXJnZXRfUHVuaXNoJykge1xuICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnNlcmllc1tpIC0gMV0gPSB7IGNvbG9yOiAnYmxhY2snIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkuaW5jbHVkZXMoJ1Rlc3QnKSkge1xuICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnNlcmllc1tpIC0gMV0gPSAoXG4gICAgICAgICAgeyB0eXBlOiAnbGluZScsIGNvbG9yOiAnYmxhY2snIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLmhlaWdodCA9IGRhdGEuVmlld3BvcnRQaXhlbHNbMV07XG4gICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy53aWR0aCA9IGRhdGEuVmlld3BvcnRQaXhlbHNbMF07XG4gICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5oQXhpcyA9IHtcbiAgICAgIHRpdGxlOiAnWCBwb3NpdGlvbiAocHgpJyxcbiAgICAgIHZpZXdXaW5kb3c6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IGRhdGEuVmlld3BvcnRQaXhlbHNbMF1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMudkF4aXMgPSB7XG4gICAgICB0aXRsZTogJ1kgcG9zaXRpb24gKHB4KScsXG4gICAgICB2aWV3V2luZG93OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdXG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoIXRoaXMucmVhbHRpbWVQbG90QWN0aXZlKSB7XG4gICAgICB0aGlzLnNjcmVlblBsb3QuZHJhdyh0aGlzLnh5UG9zRGF0YVRhYmxlLCB0aGlzLnNjcmVlblBsb3RPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdERhdGUoZGF0YTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlLCBjb2xJZHg6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBmb3JtYXR0ZXIgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0ZUZvcm1hdCh7XG4gICAgICBwYXR0ZXJuOiAnaCBhYSdcbiAgICB9KTtcbiAgICBmb3JtYXR0ZXIuZm9ybWF0KGRhdGEsIGNvbElkeCk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdE51bWJlcihkYXRhOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUsIGNvbElkeDogbnVtYmVyKSB7XG4gICAgbGV0IGZvcm1hdHRlciA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5OdW1iZXJGb3JtYXQoe1xuICAgICAgZnJhY3Rpb25EaWdpdHM6IDJcbiAgICB9KTtcbiAgICBmb3JtYXR0ZXIuZm9ybWF0KGRhdGEsIGNvbElkeCk7XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdENvbG9yKGRhdGE6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSwgY29sSWR4OiBudW1iZXIpIHtcbiAgICBsZXQgZm9ybWF0dGVyID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbG9yRm9ybWF0KCk7XG4gICAgbGV0IGR4ID0gMSAvIChjb2xvck1hcEpldC5sZW5ndGggLSAxKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbG9yTWFwSmV0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3JtYXR0ZXIuYWRkUmFuZ2UoaSAqIGR4LCAoaSArIDEpICogZHgsICdncmF5JywgY29sb3JNYXBKZXRbaV0pO1xuICAgIH1cbiAgICBmb3JtYXR0ZXIuZm9ybWF0KGRhdGEsIGNvbElkeCk7XG4gIH1cblxuXG59IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuaW1wb3J0ICdmaXJlYmFzZS9kYXRhYmFzZSc7XG5pbXBvcnQgSlNPTkVkaXRvciBmcm9tICdqc29uZWRpdG9yJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4vLyBpbXBvcnQgJ2pzb25lZGl0b3IvZGlzdC9qc29uZWRpdG9yLmNzcydcbi8vIGltcG9ydCAnLi9qc29uZWRpdG9yLmNzcyc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgQ2hhcnRzIH0gZnJvbSAnLi9jaGFydHMnO1xuaW1wb3J0IHsgRmlsZVR5cGUsIExpdmVwbG90RGF0YVR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcbmNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yYWdlLnJlZigpO1xuY29uc3QgcnRkYiA9IGZpcmViYXNlLmRhdGFiYXNlKCk7XG5cbmNvbnN0IERBVEFfUEFUSCA9ICdta3R1cmtmaWxlcy9kYXRhZmlsZXMvJ1xuY29uc3QgREFUQV9SRUYgPSBzdG9yYWdlUmVmLmNoaWxkKERBVEFfUEFUSCk7XG5jb25zdCBQQVJBTV9QQVRIID0gJ21rdHVya2ZpbGVzL3BhcmFtZXRlcmZpbGVzL3N1YmplY3RzLyc7XG5jb25zdCBQQVJBTV9SRUYgPSBzdG9yYWdlUmVmLmNoaWxkKFBBUkFNX1BBVEgpO1xuY29uc3QgQUdFTlRTX1JFRiA9IHJ0ZGIucmVmKCdhZ2VudHMvJyk7XG5jb25zdCB1dGlscyA9IG5ldyBVdGlscztcblxuZXhwb3J0IGNsYXNzIExpdmVwbG90IHtcbiAgcHVibGljIGZpbGU6IEZpbGVUeXBlO1xuICBwdWJsaWMgZWxlbU9ianM6IGFueTtcbiAgcHVibGljIGVkaXRvcjogSlNPTkVkaXRvcjtcbiAgcHVibGljIGNoYXJ0czogQ2hhcnRzO1xuICBwdWJsaWMgc3RyZWFtQWN0aXZlOiBib29sZWFuO1xuICBwdWJsaWMgYWdlbnRDbGllbnRSZWY6IGZpcmViYXNlLmRhdGFiYXNlLlJlZmVyZW5jZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtT2JqOiBhbnkpIHtcbiAgICB0aGlzLmVsZW1PYmpzID0gZWxlbU9iajtcbiAgICB0aGlzLmZpbGUgPSB7XG4gICAgICBwYXRoOiBEQVRBX1BBVEgsXG4gICAgICBsaXN0OiBbXSxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgdmVyOiBudWxsLFxuICAgICAgZGF0ZTogbnVsbCxcbiAgICAgIGRhdGFDaGFuZ2VkOiBmYWxzZSxcbiAgICAgIGZpbGVDaGFuZ2VkOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuY2hhcnRzID0gbmV3IENoYXJ0cyhlbGVtT2JqKTtcbiAgICB0aGlzLnN0cmVhbUFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVxdWVzdFJlYWx0aW1lQnRuQWN0aW9uKCk7XG4gICAgdGhpcy5vbkRpc2Nvbm5lY3RBY3Rpb24oKTtcbiAgfVxuXG4gIHB1YmxpYyBmaWxlU2VsZWN0aW9uQ2hhbmdlZExpc3RlbmVyKGVsZW06IEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldnQ6IEV2ZW50KSA9PiB7XG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLnN0cmVhbUFjdGl2ZSkge1xuICAgICAgICBsZXQgYWdlbnQgPSB0aGlzLmZpbGUuZGF0YT8uQWdlbnQhO1xuICAgICAgICBydGRiLnJlZihgZGF0YS8ke2FnZW50fWApLm9mZigpO1xuICAgICAgICB0aGlzLmFnZW50Q2xpZW50UmVmLnJlbW92ZShlcnIgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIFJlbW92aW5nIGFnZW50Q2xpZW50UmVmOiAke2Vycn1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0cmVhbUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5maWxlLm5hbWUgPSB0aGlzLmZpbGUubGlzdFtwYXJzZUludChlbGVtLnZhbHVlKV0uZnVsbHBhdGg7XG4gICAgICB0aGlzLmZpbGUuZmlsZUNoYW5nZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uRGlzY29ubmVjdEFjdGlvbigpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgKGV2dDogRXZlbnQpID0+IHtcbiAgICAgIHRoaXMuYWdlbnRDbGllbnRSZWYub25EaXNjb25uZWN0KCkucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVxdWVzdFJlYWx0aW1lQnRuQWN0aW9uKCkge1xuICAgIGxldCByZWFsdGltZUJ0biA9IHRoaXMuZWxlbU9ianMucmVhbHRpbWVCdG47XG4gICAgcmVhbHRpbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZ0OiBFdmVudCkgPT4ge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBsZXQgYWdlbnQgPSB0aGlzLmZpbGUuZGF0YT8uQWdlbnQhO1xuICAgICAgaWYgKHRoaXMuc3RyZWFtQWN0aXZlKSB7XG4gICAgICAgIHJlYWx0aW1lQnRuLmlubmVySFRNTCA9ICdSZXF1ZXN0IFJlYWx0aW1lIFN0cmVhbSc7XG4gICAgICAgIHJ0ZGIucmVmKGBkYXRhLyR7YWdlbnR9YCkub2ZmKCk7XG4gICAgICAgIHRoaXMuYWdlbnRDbGllbnRSZWYucmVtb3ZlKGVyciA9PiB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgUmVtb3ZpbmcgYWdlbnRDbGllbnRSZWY6ICR7ZXJyfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJ0ZGIucmVmKGBkYXRhLyR7YWdlbnR9YCkub2ZmKCk7XG4gICAgICAgIHRoaXMuc3RyZWFtQWN0aXZlID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWFsdGltZUJ0bi5pbm5lckhUTUwgPSAnRGVhY3RpdmF0ZSBSZWFsdGltZSBTdHJlYW0nO1xuICAgICAgICBsZXQgYWdlbnRDbGllbnRLZXkgPSBydGRiLnJlZihgYWdlbnRzLyR7YWdlbnR9YCkucHVzaCgpLmtleTtcbiAgICAgICAgdGhpcy5hZ2VudENsaWVudFJlZiA9IHJ0ZGIucmVmKGBhZ2VudHMvJHthZ2VudH0vJHthZ2VudENsaWVudEtleX1gKTtcbiAgICAgICAgaWYgKF8uaXNTdHJpbmcoYWdlbnRDbGllbnRLZXkpKSB7XG4gICAgICAgICAgcnRkYi5yZWYoYGFnZW50cy8ke2FnZW50fWApLnVwZGF0ZSh7XG4gICAgICAgICAgICBbYWdlbnRDbGllbnRLZXldOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcnRkYi5yZWYoYGRhdGEvJHthZ2VudH1gKS5vbigndmFsdWUnLCBzbmFwID0+IHtcbiAgICAgICAgICBsZXQgZXZlbnQgPSAoXG4gICAgICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ2RhdGFfYXJyaXZlZCcsIHsgZGV0YWlsOiBzbmFwLnZhbCgpIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0cmVhbUFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcG9wdWxhdGVGaWxlTGlzdChlbGVtOiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZmlsZUxpc3QgPSBhd2FpdCB1dGlscy5nZXRGaWxlTGlzdCh0aGlzLmZpbGUucGF0aCk7XG5cbiAgICAgIGZpbGVMaXN0LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGxldCBuYW1lQSA9IGEubmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBsZXQgbmFtZUIgPSBiLm5hbWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZpbGUubGlzdCA9IGZpbGVMaXN0O1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0LnZhbHVlID0gaS50b1N0cmluZygpO1xuICAgICAgICBvcHQuaW5uZXJIVE1MID0gZmlsZUxpc3RbaV0ubmFtZTtcbiAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChvcHQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbGUubmFtZSA9IHRoaXMuZmlsZS5saXN0WzBdLmZ1bGxwYXRoO1xuICAgICAgdGhpcy5maWxlLmZpbGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIGxldCByYXdTdG9yYWdlRmlsZSA9IGF3YWl0IHV0aWxzLmdldFN0b3JhZ2VGaWxlKHRoaXMuZmlsZS5uYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKCdyYXdGaWxlJywgcmF3U3RvcmFnZUZpbGUpO1xuICAgICAgXG4gICAgICB0aGlzLnByb2Nlc3NEYXRhKHJhd1N0b3JhZ2VGaWxlKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFUlJPUiAjZmlsZS1saXN0OicsIGVycm9yKTtcbiAgICB9XG5cblxuICB9XG5cbiAgcHJpdmF0ZSBmbGF0dGVuRGF0YShkYXRhOiBhbnkpIHtcblxuICAgIGxldCB0bXA6IGFueSA9IHt9O1xuXG4gICAgZm9yIChsZXQgb3V0ZXJLZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkob3V0ZXJLZXkpKSB7XG4gICAgICAgIGZvciAobGV0IGlubmVyS2V5IGluIGRhdGFbb3V0ZXJLZXldKSB7XG4gICAgICAgICAgaWYgKGRhdGFbb3V0ZXJLZXldLmhhc093blByb3BlcnR5KGlubmVyS2V5KSkge1xuICAgICAgICAgICAgdG1wW2lubmVyS2V5XSA9IGRhdGFbb3V0ZXJLZXldW2lubmVyS2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG1wO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBwcm9jZXNzRGF0YShkYXRhOiBhbnkpIHtcblxuICAgIHRoaXMuZmlsZS5kYXRhID0gdGhpcy5mbGF0dGVuRGF0YShkYXRhKTtcbiAgICB0aGlzLmxvYWREYXRhVG9FZGl0b3IodGhpcy5maWxlLmRhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZS5kYXRhKTtcblxuICAgIGxldCBtZXRhZGF0YSA9IGF3YWl0IHV0aWxzLmdldFN0b3JhZ2VGaWxlTWV0YWRhdGEodGhpcy5maWxlLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzISBMb2FkZWQgRmlsZSBTaXplOicsIG1ldGFkYXRhLnNpemUgLyAxMDAwLCAnS0InKTtcbiAgICB0aGlzLmZpbGUudmVyID0gbWV0YWRhdGEuZ2VuZXJhdGlvbjtcbiAgICB0aGlzLmZpbGUuZGF0ZVNhdmVkID0gbmV3IERhdGUobWV0YWRhdGEudXBkYXRlZCk7XG4gICAgY29uc29sZS5sb2codGhpcy5maWxlLmRhdGVTYXZlZCk7XG5cbiAgICAvLyB0aGlzLmZpbGUuZGF0YS5DdXJyZW50RGF0ZSA9IChcbiAgICAvLyAgIG5ldyBEYXRlKHRoaXMuZmlsZS5kYXRhLkN1cnJlbnREYXRlKS52YWx1ZU9mKClcbiAgICAvLyApO1xuXG4gICAgaWYgKHRoaXMuZmlsZS5maWxlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5jaGFydHMuaW5pdGlhbGl6ZUNoYXJ0RGF0YSh0aGlzLmZpbGUsIHtzdHJlYW1BY3RpdmU6IHRoaXMuc3RyZWFtQWN0aXZlfSk7XG4gICAgICB0aGlzLmNoZWNrRmlsZVN0YXR1cygpO1xuICAgICAgdGhpcy5maWxlLmZpbGVDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmZpbGUuZGF0YUNoYW5nZWQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmlsZS5kYXRhQ2hhbmdlZCkge1xuICAgICAgdGhpcy5jaGFydHMudXBkYXRlUGxvdHModGhpcy5maWxlLCB7c3RyZWFtQWN0aXZlOiB0aGlzLnN0cmVhbUFjdGl2ZX0pO1xuICAgICAgdGhpcy5maWxlLmRhdGFDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmNoZWNrRmlsZVN0YXR1cygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXR1cEVkaXRvcihlbGVtOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHRoaXMuZWRpdG9yID0gbmV3IEpTT05FZGl0b3IoZWxlbSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWREYXRhVG9FZGl0b3IoZGF0YTogYW55KSB7XG4gICAgaWYgKHRoaXMuZmlsZS5maWxlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0KGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRvci51cGRhdGUoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGVja0ZpbGVTdGF0dXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBtZXRhZGF0YSA9IGF3YWl0IHV0aWxzLmdldFN0b3JhZ2VGaWxlTWV0YWRhdGEodGhpcy5maWxlLm5hbWUpO1xuXG4gICAgICBpZiAodGhpcy5maWxlLnZlciAhPSBtZXRhZGF0YS5nZW5lcmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZmlsZS52ZXIgPSBtZXRhZGF0YS5nZW5lcmF0aW9uO1xuICAgICAgICB0aGlzLmZpbGUuZGF0ZVNhdmVkID0gbmV3IERhdGUobWV0YWRhdGEudXBkYXRlZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZS5kYXRlU2F2ZWQpO1xuICAgICAgICB0aGlzLmZpbGUuZGF0YUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygnRmlsZSB3YXMgdXBkYXRlZCB2ZXI9JyArIHRoaXMuZmlsZS52ZXIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpbGUuZGF0YUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZmlsZS5maWxlQ2hhbmdlZCA9PSB0cnVlIHx8IHRoaXMuZmlsZS5kYXRhQ2hhbmdlZCA9PSB0cnVlKSB7XG4gICAgICAgIGxldCByYXdTdG9yYWdlRmlsZSA9IGF3YWl0IHV0aWxzLmdldFN0b3JhZ2VGaWxlKHRoaXMuZmlsZS5uYW1lKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jhd0ZpbGUnLCByYXdTdG9yYWdlRmlsZSk7XG4gICAgICAgIHRoaXMucHJvY2Vzc0RhdGEocmF3U3RvcmFnZUZpbGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGVja0ZpbGVTdGF0dXMoKVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignY2hlY2tGaWxlU3RhdHVzIEVycm9yOicsIGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlOyAvLyB3aHkgbmVlZGVkXG4gIH0gXG5cbn1cbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUEwZmJ2MlZxRS1BZkY2Vl9ueFNTWENFcWFUbEJsWm5USVwiLFxuICBhdXRoRG9tYWluOiBcInNhbmRib3gtY2UyYzUuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc2FuZGJveC1jZTJjNS5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwic2FuZGJveC1jZTJjNVwiLFxuICBzdG9yYWdlQnVja2V0OiBcInNhbmRib3gtY2UyYzUuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTAwMzcxOTg4Nzk0NFwiLFxuICBjbGllbnRJZDogXCIxMDAzNzE5ODg3OTQ0LXJsYzA2Y2plY3FycDlmZ3Ztdm81NnZxb3Axb3RtOWh0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbn07XG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuaW1wb3J0IHsgTGl2ZXBsb3QgfSBmcm9tICcuL2xpdmVwbG90JztcblxubGV0IGZpbGVMaXN0U2VsZWN0b3IgPSAoXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxlLWxpc3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuKTtcblxubGV0IGVkaXRvckRpdiA9IChcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRvcicpIGFzIEhUTUxEaXZFbGVtZW50XG4pO1xuXG5sZXQgZWxlbU9iaiA9IHtcbiAgcGVyZkRpdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcmZvcm1hbmNlLWRhc2hib2FyZCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICBwZXJmUGxvdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcmZvcm1hbmNlLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgcGVyZkZpbHRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcmZvcm1hbmNlLWZpbHRlcicpIGFzIEhUTUxEaXZFbGVtZW50LFxuICB0cmlhbERpdjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWFsLWRhc2hib2FyZCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICB0cmlhbFBsb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlhbC1wbG90JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHRyaWFsRmlsdGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpYWwtZmlsdGVyJykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHNjcmVlblBsb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JlZW4tcGxvdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICAvLyByZWFsdGltZVBsb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFsdGltZS1wbG90JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHJ4blBsb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFjdGlvbi1wbG90JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIGNob2ljZVBsb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaG9pY2UtcGxvdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICBvYmpQZXJmUGxvdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29iai1wZXJmLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgcmV3YXJkUGxvdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jld2FyZC1wbG90JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHBlcmZWaXRhbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJmb3JtYW5jZS12aXRhbHMnKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gIHJmaWRWaXRhbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZmlkLXZpdGFscycpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgYmF0dGVyeVZpdGFsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhdHRlcnktdml0YWxzJykgYXMgSFRNTFNwYW5FbGVtZW50LFxuICB0cmlhbFZpdGFsczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWFsLXZpdGFscycpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgZml4U3RkZXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXhhdGlvbi1zdGRldicpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgdGFyWmVyb1N0ZGV2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFyZ2V0MC1zdGRldicpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgdGFyT25lU3RkZXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXJnZXQxLXN0ZGV2JykgYXMgSFRNTFNwYW5FbGVtZW50LFxuICBzZFRleHREaXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3VjaC1zZC10ZXh0JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHJlYWx0aW1lQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVxdWVzdC1yZWFsdGltZScpIGFzIEhUTUxCdXR0b25FbGVtZW50LFxufTtcblxuY29uc3QgbHAgPSBuZXcgTGl2ZXBsb3QoZWxlbU9iaik7XG5scC5zZXR1cEVkaXRvcihlZGl0b3JEaXYpO1xubHAuZmlsZVNlbGVjdGlvbkNoYW5nZWRMaXN0ZW5lcihmaWxlTGlzdFNlbGVjdG9yKTtcbmxwLnBvcHVsYXRlRmlsZUxpc3QoZmlsZUxpc3RTZWxlY3Rvcik7XG5cblxuXG5cblxuXG5cbi8vIGZpbGVMaXN0U2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZ0ID0+IHtcbi8vICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbi8vICAgY29uc29sZS5sb2coJ05ldyBGaWxlIScpO1xuLy8gICBmaWxlLm5hbWUgPSBmaWxlLmZpbGVMaXN0W3BhcnNlSW50KGZpbGVMaXN0U2VsZWN0b3IudmFsdWUpXS5mdWxscGF0aDtcbi8vICAgZmlsZS5maWxlQ2hhbmdlZCA9IHRydWU7XG4vLyAgIGNvbnNvbGUubG9nKCdmaWxlIG5hbWU6JywgZmlsZS5uYW1lKTtcbi8vICAgY29uc29sZS5sb2coJ2ZpbGUgcGF0aCcsIGZpbGUucGF0aCk7XG4vLyB9KTtcblxuLy8gbGV0IGZpbGU6IGFueSA9IHtcbi8vICAgcGF0aDogREFUQV9QQVRILFxuLy8gICBsaXN0OiBbXSxcbi8vICAgZmlsZUxpc3Q6IFtdLFxuLy8gICBuYW1lOiAnJyxcbi8vICAgZGF0YTogbnVsbCxcbi8vICAgdmVyOiBudWxsLFxuLy8gICBkYXRlOiBudWxsLFxuLy8gICBkYXRlQ2hhbmdlZDogZmFsc2UsXG4vLyAgIGZpbGVDaGFuZ2VkOiBmYWxzZVxuLy8gfTtcblxuLy8gY29uc29sZS5sb2coJ2hlbGxvIGhlY3RvcicpO1xuXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHBvcHVsYXRlRHJvcGRvd25NZW51KCkge1xuLy8gICB0cnkge1xuLy8gICAgIGxldCBmaWxlTGlzdCA9IGF3YWl0IHV0aWxzLmdldEZpbGVMaXN0KGZpbGUucGF0aCk7XG4gICAgXG5cbi8vICAgICBmaWxlTGlzdC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuLy8gICAgICAgbGV0IG5hbWVBID0gYS5uYW1lLnRvVXBwZXJDYXNlKCk7XG4vLyAgICAgICBsZXQgbmFtZUIgPSBiLm5hbWUudG9VcHBlckNhc2UoKTtcblxuLy8gICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbi8vICAgICAgICAgcmV0dXJuIC0xO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xuLy8gICAgICAgICByZXR1cm4gMTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgcmV0dXJuIDA7XG4vLyAgICAgfSk7XG5cbi8vICAgICBmaWxlLmZpbGVMaXN0ID0gZmlsZUxpc3Q7XG4gICAgXG5cbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4vLyAgICAgICBvcHQudmFsdWUgPSBpLnRvU3RyaW5nKCk7XG4vLyAgICAgICBvcHQuaW5uZXJIVE1MID0gZmlsZUxpc3RbaV0ubmFtZTtcbi8vICAgICAgIGZpbGVMaXN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0KTtcbi8vICAgICB9XG4gICAgXG4vLyAgICAgZmlsZS5uYW1lID0gZmlsZS5maWxlTGlzdFswXS5mdWxscGF0aDtcbi8vICAgICBmaWxlLmZpbGVDaGFuZ2VkID0gdHJ1ZTtcbiAgXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignRVJST1IgI2ZpbGUtbGlzdDonLCBlcnJvcik7XG4vLyAgIH1cbi8vIH1cblxuLy8gcG9wdWxhdGVEcm9wZG93bk1lbnUoKTtcblxuXG4vLyBhc3luYyBmdW5jdGlvbiBsb2FkQW5kUmVuZGVyRWRpdG9yKGZpbGVQYXRoOiBzdHJpbmcpIHtcbi8vICAgbGV0IGRhdGFGaWxlID0gdXRpbHMuZ2V0U3RvcmFnZUZpbGUoZmlsZVBhdGgpO1xuLy8gfVxuXG5sZXQgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKTtcbnByb3ZpZGVyLmFkZFNjb3BlKCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NvbnRhY3RzLnJlYWRvbmx5Jyk7XG5maXJlYmFzZS5hdXRoKCkuZ2V0UmVkaXJlY3RSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICBpZiAocmVzdWx0LnVzZXIpIHtcbiAgICAvLyBVc2VyIGp1c3Qgc2lnbmVkIGluLiB5b3UgY2FuIGdldCB0aGUgcmVzdWx0LmNyZWRlbnRpYWwuXG5cdGNvbnNvbGUubG9nKCdTaWduLUluIFJlZGlyZWN0IFJlc3VsdCwgVVNFUiAnICsgcmVzdWx0LnVzZXIuZW1haWwgKyAnIGlzIHNpZ25lZCBpbicpXG4gIH1cbiAgZWxzZSBpZiAoZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyKSB7XG4gICAgLy8gVXNlciBhbHJlYWR5IHNpZ25lZCBpbi5cblx0Y29uc29sZS5sb2coJ1NpZ24tSW4gUmVkaXJlY3QgUmVzdWx0LCBVU0VSIGlzIHNpZ25lZCBpbicpXG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gTm8gdXNlciBzaWduZWQgaW4sIHVwZGF0ZSB5b3VyIFVJLCBzaG93IHRoZSByZWRpcmVjdCBzaWduLWluIHNjcmVlbi5cblx0ZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhSZWRpcmVjdChwcm92aWRlcilcbiAgfVxufSk7IiwiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuaW1wb3J0ICdmaXJlYmFzZS9kYXRhYmFzZSc7XG5cbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XG5jb25zdCBzdG9yYWdlUmVmID0gc3RvcmFnZS5yZWYoKTtcblxuZXhwb3J0IGNsYXNzIFV0aWxzIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBhc3luYyBnZXRGaWxlTGlzdChwYXRoOiBzdHJpbmcsIGV4dD86IHN0cmluZykge1xuICAgIGxldCBmaWxlTGlzdCA9IGF3YWl0IHN0b3JhZ2VSZWYuY2hpbGQocGF0aCkubGlzdEFsbCgpO1xuICAgIC8qIG9ubHkga2VlcCBmaWxlcyB3aXRoaW4gdGhlIGxhc3QgMiB5ZWFycyovXG4gICAgbGV0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IGZpbGVzOiBhbnkgPSBbXTtcblxuICAgIGZvciAobGV0IGl0ZW0gb2YgZmlsZUxpc3QucHJlZml4ZXMpIHtcbiAgICAgIGxldCBzdWJGaWxlTGlzdCA9IChcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRGaWxlTGlzdChwYXRoICsgaXRlbS5uYW1lICsgJy8nLCBleHQpXG4gICAgICApO1xuICAgICAgZmlsZXMgPSBbLi4uZmlsZXMsIC4uLnN1YkZpbGVMaXN0XTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodHlwZW9mKGV4dCkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGZpbGVMaXN0Lml0ZW1zW2ldLm5hbWUuZW5kc1dpdGgoZXh0KSkgeyAvLyBpZiBmaWxlIGV4dGVuc2lvbiBpcyBjb3JyZWN0XG4gICAgICAgICAgZmlsZXMucHVzaCh7XG4gICAgICAgICAgICBmdWxscGF0aDogZmlsZUxpc3QuaXRlbXNbaV0uZnVsbFBhdGgsXG4gICAgICAgICAgICBuYW1lOiBmaWxlTGlzdC5pdGVtc1tpXS5uYW1lXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoZmlsZUxpc3QuaXRlbXNbaV0ubmFtZS5zbGljZSgwLCA0KSkgPj0geWVhciAtIDEpIHtcbiAgICAgICAgZmlsZXMucHVzaCh7XG4gICAgICAgICAgZnVsbHBhdGg6IGZpbGVMaXN0Lml0ZW1zW2ldLmZ1bGxQYXRoLFxuICAgICAgICAgIG5hbWU6IGZpbGVMaXN0Lml0ZW1zW2ldLm5hbWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldFN0b3JhZ2VGaWxlKHBhdGg6IHN0cmluZykge1xuICAgIGxldCBmaWxlUmVmID0gc3RvcmFnZVJlZi5jaGlsZChwYXRoKTtcbiAgICBjb25zb2xlLmxvZygnZmlsZVJlZjonLCBmaWxlUmVmKTtcbiAgICBsZXQgZmlsZSA9IGF3YWl0IHN0b3JhZ2VSZWYuY2hpbGQocGF0aCkuZ2V0RG93bmxvYWRVUkwoKS50aGVuKGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSkuY2F0Y2goZSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBHZXR0aW5nIFVSTDonLCBlKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnZmlsZTonLCBmaWxlKTtcbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRTdG9yYWdlRmlsZU1ldGFkYXRhKHBhdGg6IHN0cmluZykge1xuICAgIGxldCBmaWxlUmVmID0gc3RvcmFnZVJlZi5jaGlsZChwYXRoKTtcbiAgICBsZXQgbWV0YWRhdGEgPSBhd2FpdCBmaWxlUmVmLmdldE1ldGFkYXRhKCk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9XG5cbiAgcHVibGljIHNtb290aChkYXRhOiBhbnlbXSwgbjogbnVtYmVyKSB7XG4gICAgbGV0IHNtb290aGVkRGF0YSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPCBuIC0gMSkge1xuICAgICAgICBsZXQgdG1wID0gZGF0YS5zbGljZSgwLCBpICsgMSk7XG4gICAgICAgIHNtb290aGVkRGF0YVtpXSA9IHRtcC5yZWR1Y2UoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9KTtcbiAgICAgICAgc21vb3RoZWREYXRhW2ldIC89IChpICsgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdG1wID0gZGF0YS5zbGljZShpIC0gbiArIDEsIGkgKyAxKTtcbiAgICAgICAgc21vb3RoZWREYXRhW2ldID0gdG1wLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0pO1xuICAgICAgICBzbW9vdGhlZERhdGFbaV0gLz0gbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNtb290aGVkRGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBjYWxjRGlzdGFuY2UoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5wb3coTWF0aC5hYnMoYSAtIGIpLCAyKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZSA9IE9iamVjdC5jcmVhdGUobW9kdWxlKTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCAnZXhwb3J0cycsIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdHNldDogKCkgPT4ge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFUyBNb2R1bGVzIG1heSBub3QgYXNzaWduIG1vZHVsZS5leHBvcnRzIG9yIGV4cG9ydHMuKiwgVXNlIEVTTSBleHBvcnQgc3ludGF4LCBpbnN0ZWFkOiAnICsgbW9kdWxlLmlkKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9jc3NXLTQzMjRiMVwiXSxcblx0W1wiLi9zcmMvdXRpbHMudHNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfY3NzVy00MzI0YjFcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSAoKSA9PiB7XG5cbn07XG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHR9XG5cdGNodW5rTG9hZGluZ0dsb2JhbCA9IGNodW5rTG9hZGluZ0dsb2JhbC5zbGljZSgpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtMb2FkaW5nR2xvYmFsLmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0xvYWRpbmdHbG9iYWxbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtsaXZlcGxvdDJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbGl2ZXBsb3QyXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjazsiLCIvLyBydW4gc3RhcnR1cFxucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==