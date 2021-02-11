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
                console.log('before touchevent 1');
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
                console.log('before touchevent 2');
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
        console.log('touchevent:', touchevent);
        for (let i = 0; i < touchevent.length; i++) {
            console.log('i:', i);
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
            console.log('vitals.stdevTest:', this.vitals.stdevTest);
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
        // if (ctx) {
        //   // Setup Canvas
        //   ctx.fillStyle = 'gray';
        //   ctx.fillRect(
        //     0, 
        //     0, 
        //     data.workspace[2] * data.CanvasRatio,
        //     data.ViewportPixels[1] - data.offsettop
        //   );
        //   // Fixation
        //   if (data.FixationUsesSample < 1) {
        //     ctx.beginPath();
        //     ctx.arc(
        //       this.rtData.fixation.x,
        //       cvs.height - this.rtData.fixation.y,
        //       this.rtData.fixation.width / 2,
        //       0,
        //       Math.PI * 2,
        //       true
        //     );
        //     ctx.stroke();
        //   }
        //   // Sample
        //   ctx.beginPath();
        //   ctx.rect(
        //     this.rtData.sample.x - this.rtData.sample.width / 2,
        //     cvs.height - (this.rtData.sample.y + this.rtData.sample.height / 2),
        //     this.rtData.sample.width,
        //     this.rtData.sample.height
        //   );
        //   ctx.stroke();
        //   // Test
        //   for (let i = 0; i < _.size(this.rtData['test']); i++) {
        //     console.log('test');
        //     ctx.beginPath();
        //     ctx.rect(
        //       this.rtData['test'][i].x - this.rtData['test'][i].width / 2,
        //       cvs.height - (this.rtData['test'][i].y + this.rtData['test'][i].height / 2),
        //       this.rtData['test'][i].width,
        //       this.rtData['test'][i].height
        //     );
        //     ctx.stroke();
        //   }
        //   // Choice
        //   for (let i = 0; i < _.size(this.rtData['choice']); i++) {
        //     ctx.beginPath();
        //     ctx.rect(
        //       this.rtData['choice'][i].x - this.rtData['choice'][i].width / 2,
        //       cvs.height - (this.rtData['choice'][i].y + this.rtData['choice'][i].height / 2),
        //       this.rtData['choice'][i].width,
        //       this.rtData['choice'][i].height
        //     );
        //     ctx.stroke();
        //   }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlcGxvdDIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9saXZlcGxvdDIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2xpdmVwbG90Mi8uL3NyYy9jaGFydHMudHMiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyLy4vc3JjL2xpdmVwbG90LnRzIiwid2VicGFjazovL2xpdmVwbG90Mi8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL2xpdmVwbG90Mi8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9saXZlcGxvdDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpdmVwbG90Mi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2xpdmVwbG90Mi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsQ0FBc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixD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TSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxhQUFhLFdBQVcsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FB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ZSwrQkFBK0I7V0FDOUM7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsK0M7Ozs7VUMzRkE7VUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cXG4gKlxcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcXFwiTGljZW5zZVxcXCIpO1xcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcXG4gKlxcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXFxuICpcXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXFxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXFxcIkFTIElTXFxcIiBCQVNJUyxcXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXFxuICovXFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdIZWx2ZXRpY2EnLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X19oZWFkZXItcm93IHtcXG4gIHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0LmlzLXNtYWxsLXNjcmVlbiAubWRsLWxheW91dF9faGVhZGVyLXJvdyBoMyB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhci1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0LmlzLXNtYWxsLXNjcmVlbiAubWRsLWxheW91dF9fdGFiLWJhciAubWRsLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQ6bm90KC5pcy1zbWFsbC1zY3JlZW4pIC5tZGwtbGF5b3V0X190YWItYmFyLFxcbi5tZGwtZGVtbyAubWRsLWxheW91dDpub3QoLmlzLXNtYWxsLXNjcmVlbikgLm1kbC1sYXlvdXRfX3RhYi1iYXItY29udGFpbmVyIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXItY29udGFpbmVyIHtcXG4gIGhlaWdodDogNjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhciAubWRsLWxheW91dF9fdGFiIHtcXG4gIGhlaWdodDogNjRweDtcXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1sYXlvdXRfX3RhYi5pcy1hY3RpdmU6OmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA0cHg7XFxufVxcbi5tZGwtZGVtbyBtYWluID4gLm1kbC1sYXlvdXRfX3RhYi1wYW5lbCB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBwYWRkaW5nLXRvcDogMjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQgPiAqIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCB7XFxuICBtYXJnaW46IDQwcHg7XFxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xcbn1cXG4ubWRsLWRlbW8ubWRsLWRlbW8gLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgaDQge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNHB4IDQwcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyBhIHtcXG4gIGNvbG9yOiAjMDBCQ0Q0O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIGE6aG92ZXIsXFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyBhOmFjdGl2ZSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgKyAubWRsLWNhcmRfX2FjdGlvbnMge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XFxufVxcbi5tZGwtZGVtbyAjYWRkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgdG9wOiAzNnB4O1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX2NvbnRlbnQgc2VjdGlvbjpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tY2VudGVyIHtcXG4gIG1heC13aWR0aDogMTI5MHB4O1xcbn1cXG4ubWRsLWRlbW8gI2ZlYXR1cmVzIHNlY3Rpb24uc2VjdGlvbi0tY2VudGVyIHtcXG4gIG1heC13aWR0aDogNjIwcHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uID4gaGVhZGVye1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uID4gLnNlY3Rpb25fX3BsYXktYnRuIHtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGhlYWRlciA+IC5tYXRlcmlhbC1pY29ucyB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uID4gYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5O1xcbiAgdG9wOiA4cHg7XFxuICByaWdodDogOHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fY2lyY2xlIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIC13ZWJraXQtZmxleC1ncm93OiAwO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAwO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XFxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAxO1xcbiAgICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LXNocmluazogMTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX3RleHQge1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDA7XFxuICAgICAgLW1zLWZsZXgtbmVnYXRpdmU6IDA7XFxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX3RleHQgaDUge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lciA+IC5zZWN0aW9uX19jaXJjbGUtY29udGFpbmVyX19jaXJjbGUge1xcbiAgd2lkdGg6IDY0cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgbWFyZ2luOiA4cHggMDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tZm9vdGVyIC5zZWN0aW9uX19jaXJjbGUtLWJpZyB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIG1hcmdpbjogOHB4IDMycHg7XFxufVxcbi5tZGwtZGVtbyAuaXMtc21hbGwtc2NyZWVuIHNlY3Rpb24uc2VjdGlvbi0tZm9vdGVyIC5zZWN0aW9uX19jaXJjbGUtLWJpZyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBtYXJnaW46IDhweCAxNnB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbi5zZWN0aW9uLS1mb290ZXIge1xcbiAgcGFkZGluZzogNjRweCAwO1xcbiAgbWFyZ2luOiAwIC04cHggLThweCAtOHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbi5zZWN0aW9uLS1jZW50ZXIgLnNlY3Rpb25fX3RleHQ6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTMpO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0ID4gaDM6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItcGFuZWw6bm90KCNvdmVydmlldykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5tZGwtZGVtbyAjZmVhdHVyZXMgc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiA3MnB4O1xcbn1cXG4ubWRsLWRlbW8gI2ZlYXR1cmVzIGg0LCAjZmVhdHVyZXMgaDUge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuLm1kbC1kZW1vIC50b2Mge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjQzFFRUY0O1xcbiAgbWFyZ2luOiAyNHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWRsLWRlbW8gLnRvYyBoNCB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5tZGwtZGVtbyAudG9jIGEge1xcbiAgY29sb3I6ICM0REQwRTE7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1tZW51X19jb250YWluZXIge1xcbiAgei1pbmRleDogOTk7XFxufVxcblxcbi5kYXNoYm9hcmQge1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG5cXG4uZGFzaGJvYXJkLXBsb3Qge1xcbiAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi5kYXNoYm9hcmQtZmlsdGVyIHtcXG4gIGhlaWdodDogMjAlO1xcbn1cXG5cXG4uYmFyLXBsb3Qge1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4udml0YWwtc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltd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QzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDhCQUE4QjtNQUMxQiwwQkFBMEI7VUFDdEIsc0JBQXNCO0FBQ2hDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxcbiAqXFxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFxcXCJMaWNlbnNlXFxcIik7XFxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxcbiAqXFxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcXG4gKlxcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcXFwiQVMgSVNcXFwiIEJBU0lTLFxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cXG4gKi9cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX2hlYWRlci1yb3cge1xcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQuaXMtc21hbGwtc2NyZWVuIC5tZGwtbGF5b3V0X19oZWFkZXItcm93IGgzIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQuaXMtc21hbGwtc2NyZWVuIC5tZGwtbGF5b3V0X190YWItYmFyIC5tZGwtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dDpub3QoLmlzLXNtYWxsLXNjcmVlbikgLm1kbC1sYXlvdXRfX3RhYi1iYXIsXFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0Om5vdCguaXMtc21hbGwtc2NyZWVuKSAubWRsLWxheW91dF9fdGFiLWJhci1jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhci1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA2NHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXIge1xcbiAgcGFkZGluZzogMDtcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyIC5tZGwtbGF5b3V0X190YWIge1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhciAubWRsLWxheW91dF9fdGFiLmlzLWFjdGl2ZTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDRweDtcXG59XFxuLm1kbC1kZW1vIG1haW4gPiAubWRsLWxheW91dF9fdGFiLXBhbmVsIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCA+ICoge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IHtcXG4gIG1hcmdpbjogNDBweDtcXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XFxufVxcbi5tZGwtZGVtby5tZGwtZGVtbyAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCBoNCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0cHggNDBweDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIGEge1xcbiAgY29sb3I6ICMwMEJDRDQ7XFxuICBtYXJnaW46IDA7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYTpob3ZlcixcXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIGE6YWN0aXZlIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCArIC5tZGwtY2FyZF9fYWN0aW9ucyB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG59XFxuLm1kbC1kZW1vICNhZGQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDQwcHg7XFxuICB0b3A6IDM2cHg7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fY29udGVudCBzZWN0aW9uOm5vdCg6bGFzdC1vZi10eXBlKSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbi5zZWN0aW9uLS1jZW50ZXIge1xcbiAgbWF4LXdpZHRoOiAxMjkwcHg7XFxufVxcbi5tZGwtZGVtbyAjZmVhdHVyZXMgc2VjdGlvbi5zZWN0aW9uLS1jZW50ZXIge1xcbiAgbWF4LXdpZHRoOiA2MjBweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gPiBoZWFkZXJ7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gPiAuc2VjdGlvbl9fcGxheS1idG4ge1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uID4gaGVhZGVyID4gLm1hdGVyaWFsLWljb25zIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gPiBidXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk7XFxuICB0b3A6IDhweDtcXG4gIHJpZ2h0OiA4cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX19jaXJjbGUge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDA7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDA7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDE7XFxuICAgICAgLW1zLWZsZXgtbmVnYXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAxO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fdGV4dCB7XFxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMDtcXG4gICAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICBwYWRkaW5nLXRvcDogOHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fdGV4dCBoNSB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX3RleHQgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX19jaXJjbGUtY29udGFpbmVyID4gLnNlY3Rpb25fX2NpcmNsZS1jb250YWluZXJfX2NpcmNsZSB7XFxuICB3aWR0aDogNjRweDtcXG4gIGhlaWdodDogNjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICBtYXJnaW46IDhweCAwO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbi5zZWN0aW9uLS1mb290ZXIgLnNlY3Rpb25fX2NpcmNsZS0tYmlnIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgbWFyZ2luOiA4cHggMzJweDtcXG59XFxuLm1kbC1kZW1vIC5pcy1zbWFsbC1zY3JlZW4gc2VjdGlvbi5zZWN0aW9uLS1mb290ZXIgLnNlY3Rpb25fX2NpcmNsZS0tYmlnIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIG1hcmdpbjogOHB4IDE2cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciB7XFxuICBwYWRkaW5nOiA2NHB4IDA7XFxuICBtYXJnaW46IDAgLThweCAtOHB4IC04cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciAuc2VjdGlvbl9fdGV4dDpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMyk7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQgLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQgPiBoMzpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1wYW5lbDpub3QoI292ZXJ2aWV3KSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBzZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDcycHg7XFxufVxcbi5tZGwtZGVtbyAjZmVhdHVyZXMgaDQsICNmZWF0dXJlcyBoNSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4ubWRsLWRlbW8gLnRvYyB7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNDMUVFRjQ7XFxuICBtYXJnaW46IDI0cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5tZGwtZGVtbyAudG9jIGg0IHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuLm1kbC1kZW1vIC50b2MgYSB7XFxuICBjb2xvcjogIzRERDBFMTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tZGwtZGVtbyAubWRsLW1lbnVfX2NvbnRhaW5lciB7XFxuICB6LWluZGV4OiA5OTtcXG59XFxuXFxuLmRhc2hib2FyZCB7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxufVxcblxcbi5kYXNoYm9hcmQtcGxvdCB7XFxuICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLmRhc2hib2FyZC1maWx0ZXIge1xcbiAgaGVpZ2h0OiAyMCU7XFxufVxcblxcbi5iYXItcGxvdCB7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi52aXRhbC1zcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEZpbGVUeXBlLCBMaXZlcGxvdERhdGFUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBjb2xvck1hcEpldCA9IFtcbiAgJyMwMDAwOEYnLCcjMDAwMDlGJywnIzAwMDBBRicsJyMwMDAwQkYnLFxuICAnIzAwMDBDRicsJyMwMDAwREYnLCcjMDAwMEVGJywnIzAwMDBGRicsXG4gICcjMDAxMEZGJywnIzAwMjBGRicsJyMwMDMwRkYnLCcjMDA0MEZGJyxcbiAgJyMwMDUwRkYnLCcjMDA2MEZGJywnIzAwNzBGRicsJyMwMDgwRkYnLFxuICAnIzAwOEZGRicsJyMwMDlGRkYnLCcjMDBBRkZGJywnIzAwQkZGRicsXG4gICcjMDBDRkZGJywnIzAwREZGRicsJyMwMEVGRkYnLCcjMDBGRkZGJyxcbiAgJyMxMEZGRUYnLCcjMjBGRkRGJywnIzMwRkZDRicsJyM0MEZGQkYnLFxuICAnIzUwRkZBRicsJyM2MEZGOUYnLCcjNzBGRjhGJywnIzgwRkY4MCcsXG4gICcjOEZGRjcwJywnIzlGRkY2MCcsJyNBRkZGNTAnLCcjQkZGRjQwJyxcbiAgJyNDRkZGMzAnLCcjREZGRjIwJywnI0VGRkYxMCcsJyNGRkZGMDAnLFxuICAnI0ZGRUYwMCcsJyNGRkRGMDAnLCcjRkZDRjAwJywnI0ZGQkYwMCcsXG4gICcjRkZBRjAwJywnI0ZGOUYwMCcsJyNGRjhGMDAnLCcjRkY4MDAwJyxcbiAgJyNGRjcwMDAnLCcjRkY2MDAwJywnI0ZGNTAwMCcsJyNGRjQwMDAnLFxuICAnI0ZGMzAwMCcsJyNGRjIwMDAnLCcjRkYxMDAwJywnI0ZGMDAwMCcsXG4gICcjRUYwMDAwJywnI0RGMDAwMCcsJyNDRjAwMDAnLCcjQkYwMDAwJyxcbiAgJyNBRjAwMDAnLCcjOUYwMDAwJywnIzhGMDAwMCcsJyM4MDAwMDAnXG5dO1xuXG5jb25zdCB1dGlscyA9IG5ldyBVdGlscygpO1xuXG5cbmV4cG9ydCBjbGFzcyBDaGFydHMge1xuXG4gIHB1YmxpYyBlbGVtT2JqZWN0OiBhbnk7XG4gIHB1YmxpYyBwZXJmRGF0YVRhYmxlOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGU7XG4gIHB1YmxpYyBjdW11bERhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuICBwdWJsaWMgeHlQb3NEYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcbiAgcHVibGljIHJ4blRpbWVEYXRhVGFibGU6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZTtcbiAgcHVibGljIHJld2FyZERhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuICBwdWJsaWMgY2hvaWNlRGF0YVRhYmxlOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGU7XG4gIHB1YmxpYyBvYmpQZXJmRGF0YVRhYmxlOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGU7XG4gIHB1YmxpYyByZWFsdGltZURhdGFUYWJsZTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlO1xuXG4gIHB1YmxpYyBwZXJmRGFzaGJvYXJkOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXNoYm9hcmQ7XG4gIHB1YmxpYyB0cmlhbERhc2hib2FyZDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGFzaGJvYXJkO1xuXG4gIHB1YmxpYyBwZXJmUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyO1xuICBwdWJsaWMgcGVyZlBsb3RDb25maWc6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0U3BlY3M7XG4gIHB1YmxpYyBwZXJmUGxvdE9wdGlvbnM6IGdvb2dsZS52aXN1YWxpemF0aW9uLkxpbmVDaGFydE9wdGlvbnM7XG4gIHB1YmxpYyBwZXJmRmlsdGVyOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlcjtcbiAgcHVibGljIHBlcmZGaWx0ZXJDb25maWc6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbnRyb2xXcmFwcGVyT3B0aW9ucztcbiAgcHVibGljIHBlcmZGaWx0ZXJPcHRpb25zOiBPYmplY3Q7XG5cbiAgcHVibGljIHRyaWFsUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyO1xuICBwdWJsaWMgdHJpYWxQbG90Q29uZmlnOiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFNwZWNzO1xuICBwdWJsaWMgdHJpYWxQbG90T3B0aW9uczogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQXJlYUNoYXJ0T3B0aW9ucztcbiAgcHVibGljIHRyaWFsRmlsdGVyOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlcjtcbiAgcHVibGljIHRyaWFsRmlsdGVyQ29uZmlnOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlck9wdGlvbnM7XG4gIHB1YmxpYyB0cmlhbEZpbHRlck9wdGlvbnM6IE9iamVjdDtcblxuICBwdWJsaWMgc2NyZWVuUGxvdDogZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29tYm9DaGFydDtcbiAgcHVibGljIHNjcmVlblBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db21ib0NoYXJ0T3B0aW9ucztcblxuICBwdWJsaWMgcmVhbHRpbWVQbG90OiBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXI7XG4gIHB1YmxpYyByZWFsdGltZVBsb3RDb25maWc6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0U3BlY3M7XG4gIHB1YmxpYyByZWFsdGltZVBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db21ib0NoYXJ0T3B0aW9ucztcbiAgcHVibGljIHJlYWx0aW1lUGxvdEFjdGl2ZTogYm9vbGVhbjtcbiAgcHVibGljIHJlYWx0aW1lUm93RGF0YUFkZGVkOiBib29sZWFuO1xuICBwdWJsaWMgcnREYXRhOiBhbnk7XG5cbiAgcHVibGljIHJ4blBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkhpc3RvZ3JhbTtcbiAgcHVibGljIHJ4blBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5IaXN0b2dyYW1PcHRpb25zO1xuXG4gIHB1YmxpYyByZXdhcmRQbG90OiBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydDtcbiAgcHVibGljIHJld2FyZFBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydE9wdGlvbnM7XG5cbiAgcHVibGljIGNob2ljZVBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0O1xuICBwdWJsaWMgY2hvaWNlUGxvdE9wdGlvbnM6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0T3B0aW9ucztcblxuICBwdWJsaWMgb2JqUGVyZlBsb3Q6IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0O1xuICBwdWJsaWMgb2JqUGVyZlBsb3RPcHRpb25zOiBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydE9wdGlvbnM7XG5cbiAgcHJpdmF0ZSB2aXRhbHM6IGFueTtcbiAgcHJpdmF0ZSBuVHJpYWxzOiBudW1iZXI7XG5cblxuICBjb25zdHJ1Y3RvcihlbGVtT2JqOiBhbnkpIHtcbiAgICB0aGlzLmVsZW1PYmplY3QgPSBlbGVtT2JqO1xuICAgIHRoaXMucmVhbHRpbWVQbG90QWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZXR1cENoYXJ0cygpO1xuXG4gICAgdGhpcy52aXRhbHMgPSB7XG4gICAgICBzdWJqZWN0OiBudWxsLFxuICAgICAgcGN0Q29ycmVjdDogMCxcbiAgICAgIHRyaWFsczogMCxcbiAgICAgIHRpbWU6IDAsXG4gICAgICBiYXR0ZXJ5TGVmdDogMCxcbiAgICAgIGJhdHRlcnlVc2VkOiAwLFxuICAgICAgcmV3YXJkRXN0aW1hdGU6IDAsXG4gICAgICBhdXRvbWF0b3I6ICcnLFxuICAgICAgYXV0b21hdG9yU3RhZ2U6IDAsXG4gICAgICBhdXRvbWF0b3JTdGFnZU5hbWU6ICcnLFxuICAgICAgbnVtUmV3YXJkOiAwLFxuICAgICAgcmZpZFRhZzogJycsXG4gICAgICByZmlkVGltZTogMCxcbiAgICAgIHRhZ0NvdW50OiB7fVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXR1cERhdGFUYWJsZXMoKSB7XG4gICAgdGhpcy5wZXJmRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMuY3VtdWxEYXRhVGFibGUgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgdGhpcy5yZXdhcmREYXRhVGFibGUgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgdGhpcy5jaG9pY2VEYXRhVGFibGUgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSgpO1xuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlKCk7XG4gICAgdGhpcy5ydERhdGEgPSB7fTtcblxuICB9XG5cbiAgcHVibGljIGFzeW5jIHNldHVwQ2hhcnRzKCkge1xuICAgIGF3YWl0IGdvb2dsZS5jaGFydHMubG9hZCgnY3VycmVudCcsIHsgcGFja2FnZXM6IFsnY29yZWNoYXJ0JywgJ2NvbnRyb2xzJ10gfSk7XG4gICAgdGhpcy5zZXR1cENoYXJ0T3B0aW9ucygpO1xuICAgIHRoaXMuc2V0dXBEYXRhVGFibGVzKCk7XG5cbiAgICB0aGlzLnBlcmZEYXNoYm9hcmQgPSAoXG4gICAgICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGFzaGJvYXJkKHRoaXMuZWxlbU9iamVjdC5wZXJmRGl2KVxuICAgICk7XG4gICAgdGhpcy5wZXJmUGxvdCA9IChcbiAgICAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIodGhpcy5wZXJmUGxvdENvbmZpZylcbiAgICApO1xuICAgIHRoaXMucGVyZkZpbHRlciA9IChcbiAgICAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db250cm9sV3JhcHBlcih0aGlzLnBlcmZGaWx0ZXJDb25maWcpXG4gICAgKTtcblxuICAgIHRoaXMudHJpYWxEYXNoYm9hcmQgPSAoXG4gICAgICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGFzaGJvYXJkKHRoaXMuZWxlbU9iamVjdC50cmlhbERpdilcbiAgICApO1xuICAgIHRoaXMudHJpYWxQbG90ID0gKFxuICAgICAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNoYXJ0V3JhcHBlcih0aGlzLnRyaWFsUGxvdENvbmZpZylcbiAgICApO1xuICAgIHRoaXMudHJpYWxGaWx0ZXIgPSAoXG4gICAgICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ29udHJvbFdyYXBwZXIodGhpcy50cmlhbEZpbHRlckNvbmZpZylcbiAgICApO1xuXG4gICAgdGhpcy5wZXJmRGFzaGJvYXJkLmJpbmQodGhpcy5wZXJmRmlsdGVyLCB0aGlzLnBlcmZQbG90KTtcbiAgICB0aGlzLnRyaWFsRGFzaGJvYXJkLmJpbmQodGhpcy50cmlhbEZpbHRlciwgdGhpcy50cmlhbFBsb3QpO1xuXG4gICAgdGhpcy5zY3JlZW5QbG90ID0gKFxuICAgICAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbWJvQ2hhcnQodGhpcy5lbGVtT2JqZWN0LnNjcmVlblBsb3QpXG4gICAgKTtcbiAgICAvLyB0aGlzLnJlYWx0aW1lUGxvdCA9IChcbiAgICAvLyAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5DaGFydFdyYXBwZXIodGhpcy5yZWFsdGltZVBsb3RDb25maWcpXG4gICAgLy8gKTtcbiAgICB0aGlzLnJ4blBsb3QgPSAoXG4gICAgICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uSGlzdG9ncmFtKHRoaXMuZWxlbU9iamVjdC5yeG5QbG90KVxuICAgICk7XG4gICAgdGhpcy5yZXdhcmRQbG90ID0gKFxuICAgICAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0KHRoaXMuZWxlbU9iamVjdC5yZXdhcmRQbG90KVxuICAgICk7XG4gICAgdGhpcy5jaG9pY2VQbG90ID0gKFxuICAgICAgbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkNvbHVtbkNoYXJ0KHRoaXMuZWxlbU9iamVjdC5jaG9pY2VQbG90KVxuICAgICk7XG4gICAgdGhpcy5vYmpQZXJmUGxvdCA9IChcbiAgICAgIG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db2x1bW5DaGFydCh0aGlzLmVsZW1PYmplY3Qub2JqUGVyZlBsb3QpXG4gICAgKTtcblxuICB9XG5cbiAgcHVibGljIHNldHVwQ2hhcnRPcHRpb25zKCkge1xuICAgIFxuICAgIHRoaXMucGVyZlBsb3RPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5wZXJmUGxvdC5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5lbGVtT2JqZWN0LnBlcmZQbG90LmNsaWVudEhlaWdodCxcbiAgICAgIGhBeGlzOiB7IHRpdGxlOiAnVHJpYWwjJyB9LFxuICAgICAgdkF4aXM6IHsgdGl0bGU6ICdDb3JyZWN0ICglKScsIHZpZXdXaW5kb3c6IHsgbWluOiAwLCBtYXg6IDEuMCB9IH0sXG4gICAgICBhbmltYXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgc3RhcnR1cDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHNlcmllczoge1xuICAgICAgICAwOiB7IGNvbG9yOiAnIzQzNDU5ZCcgfSxcbiAgICAgICAgMTogeyBjb2xvcjogJyNlMjQzMWUnIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucGVyZlBsb3RDb25maWcgPSB7XG4gICAgICBjaGFydFR5cGU6ICdMaW5lQ2hhcnQnLFxuICAgICAgY29udGFpbmVySWQ6ICdwZXJmb3JtYW5jZS1wbG90JyxcbiAgICAgIG9wdGlvbnM6IHRoaXMucGVyZlBsb3RPcHRpb25zXG4gICAgfTtcbiAgICB0aGlzLnBlcmZGaWx0ZXJPcHRpb25zID0ge1xuICAgICAgZmlsdGVyQ29sdW1uTGFiZWw6ICdjdXJyZW50VHJpYWwnLFxuICAgICAgdWk6IHtcbiAgICAgICAgY2hhcnRUeXBlOiAnTGluZUNoYXJ0JyxcbiAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgc21vb3RoOiAyMCxcbiAgICAgICAgICBoQXhpczogeyBiYXNlbGluZUNvbG9yOiAnbm9uZScsIHRpdGxlOiAnVHJpYWwjJyB9LFxuICAgICAgICAgIHZBeGlzOiB7IHRpdGxlOiAnJScsIHZpZXdXaW5kb3c6IHsgbWluOiAwLCBtYXg6IDEuMCB9IH0sXG4gICAgICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5wZXJmRmlsdGVyLmNsaWVudFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5lbGVtT2JqZWN0LnBlcmZGaWx0ZXIuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGFuaW1hdGlvbjogeyBkdXJhdGlvbjogMTAwMCwgZWFzaW5nOiAnb3V0JyB9XG4gICAgICAgIH0sXG4gICAgICAgIGNoYXJ0Vmlldzoge1xuICAgICAgICAgIGNvbHVtbnM6IFswLCAxXVxuICAgICAgICB9LFxuICAgICAgICBtaW5SYW5nZVNpemU6IDJcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucGVyZkZpbHRlckNvbmZpZyA9IHtcbiAgICAgIGNvbnRyb2xUeXBlOiAnQ2hhcnRSYW5nZUZpbHRlcicsXG4gICAgICBjb250YWluZXJJZDogJ3BlcmZvcm1hbmNlLWZpbHRlcicsXG4gICAgICBzdGF0ZTogeyByYW5nZTogeyBzdGFydDogMCwgZW5kOiAxMDAgfSB9LFxuICAgICAgb3B0aW9uczogdGhpcy5wZXJmRmlsdGVyT3B0aW9ucyBcbiAgICB9O1xuICAgIHRoaXMudHJpYWxQbG90T3B0aW9ucyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QudHJpYWxQbG90LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QudHJpYWxQbG90LmNsaWVudEhlaWdodCxcbiAgICAgIGFyZWFPcGFjaXR5OiAwLjUsXG4gICAgICBoQXhpczogeyB0aXRsZTogJ1RpbWUgKGgpICd9LFxuICAgICAgdkF4ZXM6IHtcbiAgICAgICAgMDogeyB0aXRsZTogJ1RyaWFsIGNvdW50JyB9LFxuICAgICAgICAxOiB7IHRpdGxlOiAnUkZJRCd9XG4gICAgICB9LFxuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgIHN0YXJ0dXA6IHRydWVcbiAgICAgIH0sXG4gICAgICBzZXJpZXM6IHtcbiAgICAgICAgMDogeyB0YXJnZXRBeGlzSW5kZXg6IDAgfSxcbiAgICAgICAgMTogeyB0YXJnZXRBeGlzSW5kZXg6IDAgfSxcbiAgICAgICAgMjogeyB0YXJnZXRBeGlzSW5kZXg6IDEgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy50cmlhbFBsb3RDb25maWcgPSB7XG4gICAgICBjaGFydFR5cGU6ICdBcmVhQ2hhcnQnLFxuICAgICAgY29udGFpbmVySWQ6ICd0cmlhbC1wbG90JyxcbiAgICAgIG9wdGlvbnM6IHRoaXMudHJpYWxQbG90T3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy50cmlhbEZpbHRlck9wdGlvbnMgPSB7XG4gICAgICBmaWx0ZXJDb2x1bW5MYWJlbDogJ3RpbWUnLFxuICAgICAgdWk6IHtcbiAgICAgICAgY2hhcnRUeXBlOiAnTGluZUNoYXJ0JyxcbiAgICAgICAgY2hhcnRPcHRpb25zOiB7XG4gICAgICAgICAgaEF4aXM6IHsgYmFzZWxpbmVDb2xvcjogJ25vbmUnLCB0aXRsZTogJ1RpbWUnIH0sXG4gICAgICAgICAgdkF4aXM6IHsgdGl0bGU6ICcjJyB9LFxuICAgICAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QudHJpYWxGaWx0ZXIuY2xpZW50V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QudHJpYWxGaWx0ZXIuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGFuaW1hdGlvbjogeyBkdXJhdGlvbjogMTAwMCwgZWFzaW5nOiAnb3V0JyB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjaGFydFZpZXc6IHtcbiAgICAgICAgY29sdW1uczogWzAsIDFdXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnRyaWFsRmlsdGVyQ29uZmlnID0ge1xuICAgICAgY29udHJvbFR5cGU6ICdDaGFydFJhbmdlRmlsdGVyJyxcbiAgICAgIGNvbnRhaW5lcklkOiAndHJpYWwtZmlsdGVyJyxcbiAgICAgIHN0YXRlOiB7IHJhbmdlOiB7IHN0YXJ0OiAwLCBlbmQ6IDEwMCB9IH0sXG4gICAgICBvcHRpb25zOiB0aGlzLnRyaWFsRmlsdGVyT3B0aW9uc1xuICAgIH07XG5cblxuICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMgPSB7XG4gICAgICBzZXJpZXNUeXBlOiAnc2NhdHRlcicsXG4gICAgICBwb2ludFNpemU6IDFcbiAgICB9O1xuICAgIHRoaXMucnhuUGxvdE9wdGlvbnMgPSB7XG4gICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0LnJ4blBsb3QuY2xpZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuZWxlbU9iamVjdC5yeG5QbG90LmNsaWVudEhlaWdodCxcbiAgICAgIHRpdGxlOiAnUmVhY3Rpb24gVGltZSAobXMpJyxcbiAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICBzdGFydHVwOiB0cnVlXG4gICAgICB9LFxuICAgICAgbGVnZW5kOiB7IHBvc2l0aW9uOiAnbm9uZScgfVxuICAgIH07XG4gICAgdGhpcy5yZXdhcmRQbG90T3B0aW9ucyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLmVsZW1PYmplY3QucmV3YXJkUGxvdC5jbGllbnRXaWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5lbGVtT2JqZWN0LnJld2FyZFBsb3QuY2xpZW50SGVpZ2h0LFxuICAgICAgdGl0bGU6ICdBbW91bnQgb2YgUmV3YXJkJyxcbiAgICAgIGhBeGlzOiB7IHRpdGxlOiAncmV3YXJkIGFtb3VudCcgfSxcbiAgICAgIHZBeGlzOiB7IHRpdGxlOiAnY291bnRzJywgbWluVmFsdWU6IDAsIG1heFZhbHVlOiAxIH0sXG4gICAgICBsZWdlbmQ6IHsgcG9zaXRpb246ICdub25lJyB9XG4gICAgfTtcbiAgICB0aGlzLmNob2ljZVBsb3RPcHRpb25zID0ge1xuICAgICAgd2lkdGg6IHRoaXMuZWxlbU9iamVjdC5jaG9pY2VQbG90LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3QuY2hvaWNlUGxvdC5jbGllbnRIZWlnaHQsXG4gICAgICBoQXhpczogeyB0aXRsZTogJ0Nob2ljZScsIH0sXG4gICAgICB2QXhpczogeyB0aXRsZTogJ2NvdW50cycsIG1pblZhbHVlOiAwLCBtYXhWYWx1ZTogMSB9LFxuICAgICAgbGVnZW5kOiB7IHBvc2l0aW9uOiAnbm9uZScgfVxuICAgIH07XG4gICAgdGhpcy5vYmpQZXJmUGxvdE9wdGlvbnMgPSB7XG4gICAgICB3aWR0aDogdGhpcy5lbGVtT2JqZWN0Lm9ialBlcmZQbG90LmNsaWVudFdpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmVsZW1PYmplY3Qub2JqUGVyZlBsb3QuY2xpZW50SGVpZ2h0LFxuICAgICAgaEF4aXM6IHsgdGl0bGU6ICdPYmplY3RzJyB9LFxuICAgICAgdkF4aXM6IHsgdGl0bGU6ICdjb3VudHMnLCBtaW5WYWx1ZTogMCwgbWF4VmFsdWU6IDEgfSxcbiAgICAgIHRpdGxlOiAnT2JqZWN0IFBlcmZvcm1hbmNlJyxcbiAgICAgIGxlZ2VuZDogeyBwb3NpdGlvbjogJ25vbmUnIH1cbiAgICB9O1xuXG4gIH1cblxuICBwdWJsaWMgaW5pdGlhbGl6ZUNoYXJ0RGF0YShmaWxlOiBGaWxlVHlwZSwgcGxvdE9wdGlvbnM6IGFueSkge1xuICAgIC8vIFJlbW92ZSByb3dzIGFuZCBjb2x1bW5zXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wZXJmRGF0YVRhYmxlKTtcbiAgICB0aGlzLnBlcmZEYXRhVGFibGVcbiAgICAgIC5yZW1vdmVSb3dzKDAsIHRoaXMucGVyZkRhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy5wZXJmRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlQ29sdW1ucygwLCB0aGlzLnBlcmZEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCkpO1xuXG4gICAgdGhpcy5jdW11bERhdGFUYWJsZVxuICAgICAgLnJlbW92ZVJvd3MoMCwgdGhpcy5jdW11bERhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy5jdW11bERhdGFUYWJsZVxuICAgICAgLnJlbW92ZUNvbHVtbnMoMCwgdGhpcy5jdW11bERhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKSk7XG5cbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlUm93cygwLCB0aGlzLnh5UG9zRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlQ29sdW1ucygwLCB0aGlzLnh5UG9zRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpKTtcblxuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGVcbiAgICAgIC5yZW1vdmVSb3dzKDAsIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGVcbiAgICAgIC5yZW1vdmVDb2x1bW5zKDAsIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCkpO1xuICAgIHRoaXMucmVhbHRpbWVQbG90QWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZWFsdGltZVJvd0RhdGFBZGRlZCA9IGZhbHNlO1xuICAgIHRoaXMucnREYXRhWyd0ZXN0J10gPSBbXTtcbiAgICB0aGlzLnJ0RGF0YVsnY2hvaWNlJ10gPSBbXTtcblxuICAgIHRoaXMucnhuVGltZURhdGFUYWJsZVxuICAgICAgLnJlbW92ZVJvd3MoMCwgdGhpcy5yeG5UaW1lRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGVcbiAgICAgIC5yZW1vdmVDb2x1bW5zKDAsIHRoaXMucnhuVGltZURhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKSk7XG5cbiAgICB0aGlzLnJld2FyZERhdGFUYWJsZVxuICAgICAgLnJlbW92ZVJvd3MoMCwgdGhpcy5yZXdhcmREYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMucmV3YXJkRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlQ29sdW1ucygwLCB0aGlzLnJld2FyZERhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKSk7XG5cbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZVxuICAgICAgLnJlbW92ZVJvd3MoMCwgdGhpcy5jaG9pY2VEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCkpO1xuICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlQ29sdW1ucygwLCB0aGlzLmNob2ljZURhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKSk7XG5cbiAgICB0aGlzLm9ialBlcmZEYXRhVGFibGVcbiAgICAgIC5yZW1vdmVSb3dzKDAsIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlQ29sdW1ucygwLCB0aGlzLm9ialBlcmZEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCkpO1xuXG4gICAgLy8gQWRkIGNvbHVtbnNcbiAgICB0aGlzLnBlcmZEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnY3VycmVudFRyaWFsJyk7XG4gICAgdGhpcy5wZXJmRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ2N1cnJlbnQnKTtcbiAgICB0aGlzLnBlcmZEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnMTAwdHJpYWxzQXZnJyk7XG5cbiAgICB0aGlzLmN1bXVsRGF0YVRhYmxlLmFkZENvbHVtbignZGF0ZXRpbWUnLCAndGltZScpO1xuICAgIHRoaXMuY3VtdWxEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnVHJpYWxzJyk7XG4gICAgdGhpcy5jdW11bERhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdQZXJmb3JtYW5jZScpO1xuICAgIHRoaXMuY3VtdWxEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnUkZJRCcpO1xuICAgIC8vIHRoaXMuY3VtdWxEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnV2VpZ2h0Jyk7XG5cbiAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdzdHJpbmcnLCAnc3VjY2VzcycpO1xuICAgIHRoaXMucnhuVGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdkdXJhdGlvbk1TJyk7XG5cbiAgICAvKiogXG4gICAgICogeHlQb3NEYXRhVGFibGUgR3VpZGVcbiAgICAgKiAwOiB4XG4gICAgICogMTogeSBmaXggKGJveClcbiAgICAgKiAyOiB5IHNhbXBsZSAoYm94KVxuICAgICAqIDM6IHkgdGVzdDEgKGJveCkgfCB5IHNhbWUgKGJveClcbiAgICAgKiA0OiB5IHRlc3QyIChib3gpIHwgeSBkaWZmZXJlbnQgKGJveClcbiAgICAgKiA1OiB5IEZpeF9yZXdhcmQgKGRvdHMpXG4gICAgICogNjogeSBGaXhfcHVuaXNoIChkb3RzKVxuICAgICAqIDc6IHkgVGFyZ2V0X3Jld2FyZCAoZG90cylcbiAgICAgKiA4OiB5IFRhcmdldF9wdW5pc2ggKGRvdHMpXG4gICAgICovXG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICd4cG9zJyk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdGaXhhdGlvbicpO1xuICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnU2FtcGxlJyk7XG4gICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdnbG9iYWxYJyk7XG4gICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdmaXhZJyk7XG4gICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdzYW1wbGVZJyk7XG5cbiAgICBpZiAoZmlsZS5kYXRhIS5TYW1lRGlmZmVyZW50IDw9IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZS5kYXRhIS5UZXN0R3JpZEluZGV4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCBgVGVzdCR7aSArIDF9YCk7XG4gICAgICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCBgdGVzdFkke2kgKyAxfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmlsZS5kYXRhIS5TYW1lRGlmZmVyZW50ID4gMCkge1xuICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdTYW1lJyk7XG4gICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ0RpZmZlcmVudCcpO1xuICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdzYW1lWScpO1xuICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5hZGRDb2x1bW4oJ251bWJlcicsICdkaWZmZXJlbnRZJyk7XG4gICAgfVxuXG5cbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ0ZpeF9SZXdhcmQnKTtcbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ0ZpeF9QdW5pc2gnKTtcbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1RhcmdldF9SZXdhcmQnKTtcbiAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ1RhcmdldF9QdW5pc2gnKTtcblxuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnY3VyWScpO1xuICAgIHRoaXMucmVhbHRpbWVEYXRhVGFibGUuYWRkQ29sdW1uKHsndHlwZSc6ICdzdHJpbmcnLCAncm9sZSc6ICdzdHlsZSd9KTtcbiAgICBcbiAgICB0aGlzLnJld2FyZERhdGFUYWJsZS5hZGRDb2x1bW4oJ3N0cmluZycsICdyZWFyZCBzaXplJyk7XG4gICAgdGhpcy5yZXdhcmREYXRhVGFibGUuYWRkQ29sdW1uKCdudW1iZXInLCAnbnJld2FyZHMnKTtcblxuICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmFkZENvbHVtbignc3RyaW5nJywgJ2Nob2ljZScpO1xuICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJyMgb2YgcmVzcG9uc2VzJyk7XG5cbiAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUuYWRkQ29sdW1uKCdzdHJpbmcnLCAnb2JqZWN0Jyk7XG4gICAgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLmFkZENvbHVtbignbnVtYmVyJywgJ3BlcmZvcm1hbmNlJyk7XG4gICAgdGhpcy51cGRhdGVQbG90cyhmaWxlLCBwbG90T3B0aW9ucyk7XG5cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVQbG90cyhmaWxlOiBGaWxlVHlwZSwgcGxvdE9wdGlvbnM6IGFueSkge1xuICAgIGxldCBmaWxlRGF0YTogTGl2ZXBsb3REYXRhVHlwZTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoZmlsZS5kYXRhKSkge1xuICAgICAgZmlsZURhdGEgPSBmaWxlLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93ICdmaWxlLmRhdGEgaXMgVW5kZWZpbmVkJ1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygncGxvdCB1cGRhdGVkJyk7XG4gICAgdGhpcy5sb2FkVml0YWxzKGZpbGUpO1xuICAgIHRoaXMubG9hZFZpdGFsc1RleHQoZmlsZSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZpdGFscycsIHRoaXMudml0YWxzKTtcbiAgICB0aGlzLmxvYWRQZXJmb3JtYW5jZURhdGEoZmlsZSk7XG4gICAgdGhpcy5sb2FkT2JqUGVyZkRhdGEoZmlsZURhdGEpO1xuICAgIHRoaXMubG9hZENob2ljZURhdGEoZmlsZURhdGEpO1xuICAgIHRoaXMubG9hZFJld2FyZERhdGEoZmlsZURhdGEpO1xuICAgIHRoaXMuZHJhd1BlcmZvcm1hbmNlUGxvdChmaWxlKTtcbiAgICB0aGlzLmRyYXdUcmlhbFBsb3QoZmlsZSk7XG4gICAgdGhpcy5kcmF3T2JqUGVyZlBsb3QoKTtcbiAgICB0aGlzLmRyYXdSeG5UaW1lUGxvdCgpO1xuICAgIHRoaXMuZHJhd0Nob2ljZVBsb3QoKTtcbiAgICB0aGlzLmRyYXdSZXdhcmRQbG90KCk7XG4gICAgdGhpcy5sb2FkVG91Y2hTRFRleHQoKTtcbiAgICBsZXQgc3RyZWFtQWN0aXZlID0gcGxvdE9wdGlvbnMuc3RyZWFtQWN0aXZlO1xuICAgIHRoaXMuZHJhd1NjcmVlblBsb3QoZmlsZURhdGEsIHN0cmVhbUFjdGl2ZSk7XG4gICAgaWYgKHN0cmVhbUFjdGl2ZSAmJiAhdGhpcy5yZWFsdGltZVBsb3RBY3RpdmUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xuICAgICAgdGhpcy5kcmF3UmVhbHRpbWVQbG90MihmaWxlRGF0YSk7XG4gICAgICB0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIGxvYWRWaXRhbHMoZmlsZTogRmlsZVR5cGUpIHtcbiAgICBsZXQgZGF0YTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoZmlsZS5kYXRhKSkge1xuICAgICAgZGF0YSA9IGZpbGUuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgJ2ZpbGUuZGF0YSBpcyBVbmRlZmluZWQnO1xuICAgIH1cblxuICAgIHRoaXMudml0YWxzLnN1YmplY3QgPSBkYXRhLlN1YmplY3Q7XG4gICAgdGhpcy52aXRhbHMudHJpYWxzID0gZGF0YS5SZXNwb25zZS5sZW5ndGg7XG4gICAgXG4gICAgLy8gQ29udmVydCBtaWxsaXNlY29uZHMgdG8gbWludXRlc1xuICAgIGxldCBzdGFydFRpbWUgPSBkYXRhLlN0YXJ0VGltZTtcbiAgICB0aGlzLnZpdGFscy50aW1lID0gKFxuICAgICAgXy5yb3VuZChfLnJvdW5kKF8udG9OdW1iZXIoXy5sYXN0KHN0YXJ0VGltZSkpIC0gc3RhcnRUaW1lWzBdKSAvIDYwMDAwKVxuICAgICk7XG5cbiAgICAvKipcbiAgICAgKiBSRklEIFByb2Nlc3NpbmdcbiAgICAgKiBPbmx5IHN1cHBvcnRzIGN1cnJlbnQgZGF0YSBmb3JtYXRcbiAgICAgKiBmaWxlLmRhdGEuUkZJRFRhZyA9IHtcbiAgICAgKiAgIDA6IFswLCAyMDIwLTEwLTI3VDE5OjE5OjE5Ljk5OVosIDAwNzgyQTdFODhBNF0sXG4gICAgICogICAxOiBbXSxcbiAgICAgKiAgIC4uLlxuICAgICAqIH07XG4gICAgICovXG4gICAgbGV0IHJmaWRUYWcgPSBkYXRhLlJGSURUYWc7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKHJmaWRUYWcpICYmIF8uc2l6ZShyZmlkVGFnKSA+IDApIHtcbiAgICAgIHRoaXMudml0YWxzLnJmaWRUYWcgPSByZmlkVGFnW18uc2l6ZShyZmlkVGFnKSAtIDFdWzJdO1xuICAgICAgdGhpcy52aXRhbHMucmZpZFRpbWUgPSAoXG4gICAgICAgIG5ldyBEYXRlKHJmaWRUYWdbXy5zaXplKHJmaWRUYWcpIC0gMV1bMV0pLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXRhbHMucmZpZFRhZyA9IG51bGw7XG4gICAgICB0aGlzLnZpdGFscy5yZmlkVGltZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gQXV0b21hdG9yLCBBdXRvbWF0b3JTdGFnZSwgQXV0b21hdG9yU3RhZ2VOYW1lXG4gICAgaWYgKF8uaXNVbmRlZmluZWQoZGF0YS5BdXRvbWF0b3IpKSB7XG4gICAgICB0aGlzLnZpdGFscy5hdXRvbWF0b3IgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpdGFscy5hdXRvbWF0b3IgPSBmaWxlLmRhdGEuQXV0b21hdG9yO1xuICAgIH1cblxuICAgIGlmIChfLmlzVW5kZWZpbmVkKGRhdGEuQ3VycmVudEF1dG9tYXRvclN0YWdlKSkge1xuICAgICAgdGhpcy52aXRhbHMuYXV0b21hdG9yU3RhZ2UgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpdGFscy5hdXRvbWF0b3JTdGFnZSA9IGRhdGEuQ3VycmVudEF1dG9tYXRvclN0YWdlO1xuICAgIH1cblxuICAgIGlmIChfLmlzVW5kZWZpbmVkKGRhdGEuQ3VycmVudEF1dG9tYXRvclN0YWdlTmFtZSkpIHtcbiAgICAgIHRoaXMudml0YWxzLmF1dG9tYXRvclN0YWdlTmFtZSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudml0YWxzLmF1dG9tYXRvclN0YWdlTmFtZSA9IGRhdGEuQ3VycmVudEF1dG9tYXRvclN0YWdlTmFtZTtcbiAgICB9XG5cbiAgICAvLyBCYXR0ZXJ5LCBvbmx5IHN1cHBvcnRzIGN1cnJlbnQgZGF0YSBmb3JtYXRcbiAgICBsZXQgYmF0dGVyeSA9IGRhdGEuQmF0dGVyeTtcbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoYmF0dGVyeSkgJiYgXy5zaXplKGJhdHRlcnkpID4gMCkge1xuICAgICAgdGhpcy52aXRhbHMuYmF0dGVyeUxlZnQgPSBfLnJvdW5kKGJhdHRlcnlbXy5zaXplKGJhdHRlcnkpIC0gMV1bMl0gKiAxMDApO1xuICAgICAgdGhpcy52aXRhbHMuYmF0dGVyeVVzZWQgPSAoXG4gICAgICAgIF8ucm91bmQoYmF0dGVyeVswXVsyXSAqIDEwMCAtIHRoaXMudml0YWxzLmJhdHRlcnlMZWZ0KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aXRhbHMuYmF0dGVyeUxlZnQgPSBudWxsO1xuICAgICAgdGhpcy52aXRhbHMuYmF0dGVyeVVzZWQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm1hbmNlXG4gICAgbGV0IG51bUNvcnJlY3QgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuQ29ycmVjdEl0ZW0pOyBpKyspIHtcbiAgICAgIGlmIChkYXRhLkNvcnJlY3RJdGVtW2ldID09IGRhdGEuUmVzcG9uc2VbaV0pIHtcbiAgICAgICAgbnVtQ29ycmVjdCsrO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLnZpdGFscy5udW1Db3JyZWN0ID0gbnVtQ29ycmVjdDtcbiAgICB0aGlzLnZpdGFscy5wY3RDb3JyZWN0ID0gKFxuICAgICAgXy5yb3VuZCgxMDAgKiBudW1Db3JyZWN0IC8gZGF0YS5SZXNwb25zZS5sZW5ndGgpXG4gICAgKTtcblxuICAgIGlmICghXy5pc1VuZGVmaW5lZChkYXRhLk5SZXdhcmQpKSB7XG4gICAgICB0aGlzLnZpdGFscy5udW1SZXdhcmQgPSAoXG4gICAgICAgIGRhdGEuTlJld2FyZC5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7IFxuICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgfSwgMClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy52aXRhbHMucmV3YXJkRXN0aW1hdGUgPSAwO1xuICAgIGlmICghXy5pc1VuZGVmaW5lZChkYXRhLlJld2FyZFBlcjEwMDBUcmlhbHMpKSB7XG4gICAgICB0aGlzLnZpdGFscy5yZXdhcmRFc3RpbWF0ZSA9IChcbiAgICAgICAgXy5yb3VuZChkYXRhLlJld2FyZFBlcjEwMDBUcmlhbHMgKiB0aGlzLnZpdGFscy5udW1SZXdhcmQgLyAxMDAwKVxuICAgICAgKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgbG9hZFZpdGFsc1RleHQoZmlsZTogRmlsZVR5cGUpIHtcbiAgICB0aGlzLmVsZW1PYmplY3QucGVyZlZpdGFscy5pbm5lckhUTUwgPSAoXG4gICAgICBgJHt0aGlzLnZpdGFscy5zdWJqZWN0fTogJHt0aGlzLnZpdGFscy5wY3RDb3JyZWN0fSUgKG4gPSAke3RoaXMudml0YWxzLm51bUNvcnJlY3R9IG91dCBvZiAke3RoaXMudml0YWxzLnRyaWFsc30sIHI9JHt0aGlzLnZpdGFscy5udW1SZXdhcmR9PSR7dGhpcy52aXRhbHMucmV3YXJkRXN0aW1hdGV9bUwsICR7dGhpcy52aXRhbHMudGltZX0gbWlucylgIFxuICAgICk7XG5cbiAgICAvLyBUT0RPOiBhZGQgdGhpcy52aXRhbHMudGFnQ291bnQgZGF0YVxuICAgIHRoaXMuZWxlbU9iamVjdC5yZmlkVml0YWxzLmlubmVySFRNTCA9IChcbiAgICAgIGBSRklEOiAke3RoaXMudml0YWxzLnJmaWRUYWd9ICgke3RoaXMudml0YWxzLnJmaWRUaW1lfSlgXG4gICAgKTtcblxuICAgIHRoaXMuZWxlbU9iamVjdC5iYXR0ZXJ5Vml0YWxzLmlubmVySFRNTCA9IChcbiAgICAgIGBCYXR0ZXJ5OiAke3RoaXMudml0YWxzLmJhdHRlcnlMZWZ0fSUgKC0ke3RoaXMudml0YWxzLmJhdHRlcnlVc2VkfSUpYFxuICAgICk7XG5cbiAgICB0aGlzLmVsZW1PYmplY3QudHJpYWxWaXRhbHMuaW5uZXJIVE1MID0gKFxuICAgICAgYExhc3QgVHJpYWw6ICR7ZmlsZS5kYXRlU2F2ZWQhLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnKX1gXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFRvdWNoU0RUZXh0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnRpdGxlID0gYFRvdWNoIExvY2F0aW9ucyAtLSBzdGFuZGFyZCBkZXY6IFxcbiBGaXhhdGlvbjogJHtNYXRoLnJvdW5kKHRoaXMudml0YWxzLnN0ZGV2Rml4ICogMTApIC8gMTB9IHBpeGVsc2A7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudml0YWxzLnN0ZGV2VGVzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnRpdGxlID0gdGhpcy5zY3JlZW5QbG90T3B0aW9ucy50aXRsZSArIGBcXG4gVGFyZ2V0ICR7aX06ICR7TWF0aC5yb3VuZCh0aGlzLnZpdGFscy5zdGRldlRlc3RbaV0gKiAxMCkgLyAxMH1gOyBcbiAgICAgIH1cbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyB0b3VjaCBTRCB0ZXh0JywgZXJyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRQZXJmb3JtYW5jZURhdGEoZmlsZTogRmlsZVR5cGUpIHtcbiAgICAvLyBUeXBlY2hlY2tpbmcgZmlsZS5kYXRhXG4gICAgbGV0IGRhdGE7XG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGZpbGUuZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBmaWxlLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93ICdmaWxlLmRhdGEgaXMgVW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnSEVMTE8nKTtcblxuICAgIHRoaXMucGVyZkRhdGFUYWJsZS5yZW1vdmVSb3dzKFxuICAgICAgMCwgdGhpcy5wZXJmRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpXG4gICAgKTtcbiAgICB0aGlzLmN1bXVsRGF0YVRhYmxlXG4gICAgICAucmVtb3ZlUm93cygwLCB0aGlzLmN1bXVsRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGVcbiAgICAgIC5yZW1vdmVSb3dzKDAsIHRoaXMucnhuVGltZURhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgdGhpcy54eVBvc0RhdGFUYWJsZVxuICAgICAgLnJlbW92ZVJvd3MoMCwgdGhpcy54eVBvc0RhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG5cbiAgICAvLyBDcmVhdGUgRGF0YSBUYWJsZVxuICAgIGxldCB4RGF0YSA9IFtdO1xuICAgIGxldCB5RGF0YTogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgeURhdGFTbWFsbCA9IFtdOyAvLyBrZWVwcyA1IHJlY2VudFxuICAgIGxldCB5RGF0YUxhcmdlID0gW107IC8vIGtlZXBzIDEwMCByZWNlbnRcbiAgICBsZXQgbnVtVG90YWwgPSBbXTtcbiAgICBsZXQgbnVtQ29ycmVjdDogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgdEN1cnJlbnQgPSBbXTtcbiAgICBsZXQgbnVtUkZJRCA9IFtdO1xuICAgIGxldCB4UG9zOiBudW1iZXI7XG4gICAgbGV0IHlQb3M6IG51bWJlcjtcbiAgICBsZXQgdG91Y2hldmVudDogbnVtYmVyW11bXSA9IFtdO1xuICAgIGxldCBydCA9IFtdO1xuXG4gICAgLy8gcGVyZm9ybWFuY2VcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuQ29ycmVjdEl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkYXRhLkNvcnJlY3RJdGVtW2ldID09IGRhdGEuUmVzcG9uc2VbaV0pIHtcbiAgICAgICAgeURhdGFbaV0gPSAxOyAvLyBjb3JyZWN0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5RGF0YVtpXSA9IDA7IC8vIGluY29ycmVjdFxuICAgICAgfVxuXG4gICAgICB4RGF0YVtpXSA9IGk7XG5cbiAgICAgIC8vIEN1bXVsYXRpdmUgdHJpYWxzICYgY29ycmVjdCB0cmlhbHNcbiAgICAgIG51bVRvdGFsW2ldID0geERhdGEubGVuZ3RoO1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIG51bUNvcnJlY3RbaV0gPSBudW1Db3JyZWN0W2kgLSAxXSArIHlEYXRhW2ldO1xuICAgICAgfSBlbHNlIGlmIChpID09IDApIHtcbiAgICAgICAgbnVtQ29ycmVjdFtpXSA9IHlEYXRhW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5OUmV3YXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGF0YS5SZXdhcmRTdGFnZSA9PSAwKSB7XG4gICAgICAgIHJ0W2ldID0gZGF0YS5GaXhhdGlvblhZVFsyXVtpXSAtIGRhdGEuU3RhcnRUaW1lW2ldO1xuICAgICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkUm93cyhcbiAgICAgICAgICBbW2ZpbGUuZGF0YS5GaXhhdGlvblRvdWNoRXZlbnRbaV0sIHJ0W2ldXV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5OUlNWUCA+IDApIHtcbiAgICAgICAgcnRbaV0gPSBkYXRhLlNhbXBsZUZpeGF0aW9uWFlUWzJdW2ldIC0gZGF0YS5TYW1wbGVTdGFydFRpbWVbaV07XG4gICAgICAgIHRoaXMucnhuVGltZURhdGFUYWJsZS5hZGRSb3dzKFxuICAgICAgICAgIFtbZGF0YS5TYW1wbGVGaXhhdGlvblRvdWNoRXZlbnRbaV0sIHJ0W2ldXV1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJ0W2ldID0gZGF0YS5SZXNwb25zZVhZVFsyXVtpXSAtIGRhdGEuU2FtcGxlU3RhcnRUaW1lW2ldO1xuICAgICAgICBpZiAoZGF0YS5SZXNwb25zZVtpXSA9PSAtMSkge1xuICAgICAgICAgIHRoaXMucnhuVGltZURhdGFUYWJsZS5hZGRSb3dzKFxuICAgICAgICAgICAgW1sndGltZW91dCcsIGRhdGEuQ2hvaWNlVGltZU91dF1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLkNvcnJlY3RJdGVtW2ldID09IGRhdGEuUmVzcG9uc2VbaV0pIHtcbiAgICAgICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkUm93cyhcbiAgICAgICAgICAgIFtbJ2NvcnJlY3QnLCBydFtpXV1dXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJ4blRpbWVEYXRhVGFibGUuYWRkUm93cyhcbiAgICAgICAgICAgIFtbJ3dyb25nJywgcnRbaV1dXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhydCk7XG5cbiAgICAvKipcbiAgICAgKiBUb3VjaCBYWVxuICAgICAqIFN0b3JlIGZpeGF0aW9uIGluIG9kZCBpbmRpY2VzIGFuZCBjaG9pY2UgaW4gZXZlblxuICAgICAqIEFsbCB0b3VjaGV2ZW50cy4gdG91Y2hldmVudCBoYXMgYSBsZW5ndGggdGhhdCBpcyB0d2ljZSB0aGUgbGVuZ3RoXG4gICAgICogb2YgZmlsZS5kYXRhLkZpeGF0aW9uWFlUIG9yIGZpbGUuZGF0YS5SZXNwb25zZVhZVFxuICAgICAqL1xuICAgIGlmIChcbiAgICAgICFfLmlzVW5kZWZpbmVkKGRhdGEuUmVzcG9uc2VYWVQpIFxuICAgICAgJiYgXy5zaXplKGRhdGEuUmVzcG9uc2VYWVQpID4gMFxuICAgICAgJiYgXy5zaXplKGZpbGUuZGF0YS5SZXNwb25zZVhZVFswXSkgPiAwXG4gICAgKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShkYXRhLkZpeGF0aW9uWFlUWzBdKSAqIDI7IGkgKz0gMikge1xuICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlIHRvdWNoZXZlbnQgMScpO1xuICAgICAgICB0b3VjaGV2ZW50W2ldID0gW107XG4gICAgICAgIHRvdWNoZXZlbnRbaSArIDFdID0gW107XG4gICAgICAgIHRvdWNoZXZlbnRbaV1bMF0gPSBmaWxlLmRhdGEuRml4YXRpb25YWVRbMF1baSAvIDJdO1xuICAgICAgICB0b3VjaGV2ZW50W2kgKyAxXVswXSA9IGZpbGUuZGF0YS5SZXNwb25zZVhZVFswXVtpIC8gMl07XG4gICAgICAgIHRvdWNoZXZlbnRbaV1bMV0gPSBmaWxlLmRhdGEuRml4YXRpb25YWVRbMV1baSAvIDJdO1xuICAgICAgICB0b3VjaGV2ZW50W2kgKyAxXVsxXSA9IGZpbGUuZGF0YS5SZXNwb25zZVhZVFsxXVtpIC8gMl07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuRml4YXRpb25YWVRbMF0pICogMjsgaSArPSAyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgdG91Y2hldmVudCAyJyk7XG4gICAgICAgIHRvdWNoZXZlbnRbaV0gPSBbXTtcbiAgICAgICAgdG91Y2hldmVudFtpICsgMV0gPSBbXTtcbiAgICAgICAgdG91Y2hldmVudFtpXVswXSA9IGZpbGUuZGF0YS5GaXhhdGlvblhZVFswXVtpIC8gMl07XG4gICAgICAgIHRvdWNoZXZlbnRbaSArIDFdWzBdID0gZmlsZS5kYXRhLkZpeGF0aW9uWFlUWzBdW2kgLyAyXTtcbiAgICAgICAgdG91Y2hldmVudFtpXVsxXSA9IGZpbGUuZGF0YS5GaXhhdGlvblhZVFsxXVtpIC8gMl07XG4gICAgICAgIHRvdWNoZXZlbnRbaSArIDFdWzFdID0gZmlsZS5kYXRhLkZpeGF0aW9uWFlUWzFdW2kgLyAyXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTYW1wbGUgJiBUZXN0IEJveGVzIC0tIERyYXcgdGhlbSBhcyBhIGJvdW5kaW5nIGJveCBpbiB0aGUgdG91Y2ggcGxvdFxuICAgIGxldCBudW1Db2x1bW5YWVBvcyA9IHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0TnVtYmVyT2ZDb2x1bW5zKCk7XG4gICAgbGV0IG51bUNvbFJlYWx0aW1lID0gdGhpcy5yZWFsdGltZURhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKTtcbiAgICBsZXQgc2FtcGxlV2lkdGggPSB0aGlzLmdldFNhbXBsZVdpZHRoKGZpbGUuZGF0YSk7XG4gICAgbGV0IHNhbXBsZUhlaWdodCA9IHNhbXBsZVdpZHRoO1xuICAgIGxldCB0ZXN0V2lkdGggPSB0aGlzLmdldFRlc3RXaWR0aChmaWxlLmRhdGEpO1xuICAgIGxldCB0ZXN0SGVpZ2h0ID0gdGVzdFdpZHRoO1xuXG4gICAgLy8gRml4YXRpb24gJiBDaG9pY2UgQm94ZXNcbiAgICBsZXQgZml4YXRpb25XaWR0aCA9IHRoaXMuZ2V0Rml4YXRpb25XaWR0aChmaWxlLmRhdGEsIHNhbXBsZVdpZHRoKTtcbiAgICBsZXQgZml4YXRpb25IZWlnaHQgPSBmaXhhdGlvbldpZHRoO1xuICAgIGxldCBjaG9pY2VXaWR0aCA9IHRoaXMuZ2V0Q2hvaWNlV2lkdGgoZmlsZS5kYXRhKTtcbiAgICBsZXQgY2hvaWNlSGVpZ2h0ID0gY2hvaWNlV2lkdGg7XG5cbiAgICAvKiogXG4gICAgICogTk9URSBmb3IgcG9zaXRpb25pbmcgZWxlbWVudHM6XG4gICAgICogZ3JpZCB4LCB5IGlzIG9mZnNldCB8fCBmaXhhdGlvbiAmIHJlc3BvbnNlIHgsIHkgaXMgbm90XG4gICAgKi9cblxuICAgIC8vIEZJWEFUSU9OXG4gICAgbGV0IG51bURpc3BsYXlFbGVtcyA9IDE7XG4gICAgLy8gbGV0IHh5UG9zQXJyYXkgPSBbXTtcbiAgICBsZXQgZml4WDogbnVtYmVyO1xuICAgIGxldCBmaXhZOiBudW1iZXI7XG4gICAgbGV0IG1heEZpeGF0aW9uR3JpZEluZGV4ID0gXy5tYXgoZmlsZS5kYXRhLkZpeGF0aW9uR3JpZEluZGV4KTtcbiAgICBpZiAoXy5pc051bWJlcihtYXhGaXhhdGlvbkdyaWRJbmRleCkpIHtcbiAgICAgIGZpeFggPSBmaWxlLmRhdGEuWEdyaWRDZW50ZXJbbWF4Rml4YXRpb25HcmlkSW5kZXhdO1xuICAgICAgZml4WSA9IChcbiAgICAgICAgZmlsZS5kYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIFxuICAgICAgICAtIChmaWxlLmRhdGEuWUdyaWRDZW50ZXJbbWF4Rml4YXRpb25HcmlkSW5kZXhdICsgZmlsZS5kYXRhLm9mZnNldHRvcClcbiAgICAgICk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZml4WScsIGZpeFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyAnZGF0YS5GaXhhdGlvbkdyaWRJbmRleCBpcyBub3Qgb2YgdHlwZSBudW1iZXJbXSc7XG4gICAgfVxuXG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICB7IDA6IGZpeFggLSBmaXhhdGlvbldpZHRoIC8gMiwgMTogZml4WSAtIGZpeGF0aW9uSGVpZ2h0IC8gMiB9XG4gICAgKTtcbiAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgIHsgMDogZml4WCArIGZpeGF0aW9uV2lkdGggLyAyLCAxOiBmaXhZIC0gZml4YXRpb25IZWlnaHQgLyAyfVxuICAgICk7XG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICB7IDA6IGZpeFggKyBmaXhhdGlvbldpZHRoIC8gMiwgMTogZml4WSArIGZpeGF0aW9uSGVpZ2h0IC8gMn1cbiAgICApO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgeyAwOiBmaXhYIC0gZml4YXRpb25XaWR0aCAvIDIsIDE6IGZpeFkgKyBmaXhhdGlvbkhlaWdodCAvIDJ9XG4gICAgKTtcbiAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgIHsgMDogZml4WCAtIGZpeGF0aW9uV2lkdGggLyAyLCAxOiBmaXhZIC0gZml4YXRpb25IZWlnaHQgLyAyfVxuICAgICk7XG5cbiAgICBpZiAoIXRoaXMucmVhbHRpbWVSb3dEYXRhQWRkZWQgJiYgIXRoaXMucmVhbHRpbWVQbG90QWN0aXZlKSB7XG4gICAgICB0aGlzLnJ0RGF0YVsnZml4YXRpb24nXSA9IHtcbiAgICAgICAgeDogZml4WCxcbiAgICAgICAgeTogZml4WSxcbiAgICAgICAgd2lkdGg6IGZpeGF0aW9uV2lkdGgsXG4gICAgICAgIGhlaWdodDogZml4YXRpb25IZWlnaHRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gU0FNUExFXG4gICAgbnVtRGlzcGxheUVsZW1zID0gMjtcbiAgICBsZXQgc2FtcGxlWDogbnVtYmVyO1xuICAgIGxldCBzYW1wbGVZOiBudW1iZXI7XG4gICAgbGV0IG1heFNhbXBsZUdyaWRJbmRleCA9IF8ubWF4KGRhdGEuU2FtcGxlR3JpZEluZGV4KTtcblxuICAgIGlmIChkYXRhLlJld2FyZFN0YWdlID4gMCkge1xuICAgICAgaWYgKF8uaXNOdW1iZXIobWF4U2FtcGxlR3JpZEluZGV4KSkge1xuICAgICAgICBzYW1wbGVYID0gZGF0YS5YR3JpZENlbnRlclttYXhTYW1wbGVHcmlkSW5kZXhdO1xuICAgICAgICBzYW1wbGVZID0gKFxuICAgICAgICAgIGRhdGEuVmlld3BvcnRQaXhlbHNbMV1cbiAgICAgICAgICAtIChkYXRhLllHcmlkQ2VudGVyW21heFNhbXBsZUdyaWRJbmRleF0gKyBkYXRhLm9mZnNldHRvcClcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93ICdkYXRhLlNhbXBsZUdyaWRJbmRleCBpcyBub3Qgb2YgdHlwZSBudW1iZXJbXSc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNhbXBsZVggPSBmaXhYO1xuICAgICAgc2FtcGxlWSA9IGZpeFk7XG4gICAgfVxuXG4gICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICB7IDA6IHNhbXBsZVggLSBzYW1wbGVXaWR0aCAvIDIsIDI6IHNhbXBsZVkgLSBzYW1wbGVIZWlnaHQgLyAyIH1cbiAgICApO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgeyAwOiBzYW1wbGVYICsgc2FtcGxlV2lkdGggLyAyLCAyOiBzYW1wbGVZIC0gc2FtcGxlSGVpZ2h0LyAyIH1cbiAgICApO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgeyAwOiBzYW1wbGVYICsgc2FtcGxlV2lkdGggLyAyLCAyOiBzYW1wbGVZICsgc2FtcGxlSGVpZ2h0IC8gMiB9XG4gICAgKTtcbiAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgIHsgMDogc2FtcGxlWCAtIHNhbXBsZVdpZHRoIC8gMiwgMjogc2FtcGxlWSArIHNhbXBsZUhlaWdodC8gMiB9XG4gICAgKTtcbiAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgIHsgMDogc2FtcGxlWCAtIHNhbXBsZVdpZHRoIC8gMiwgMjogc2FtcGxlWSAtIHNhbXBsZUhlaWdodCAvIDIgfVxuICAgICk7XG5cbiAgICBpZiAoIXRoaXMucmVhbHRpbWVSb3dEYXRhQWRkZWQgJiYgIXRoaXMucmVhbHRpbWVQbG90QWN0aXZlKSB7XG4gICAgICB0aGlzLnJ0RGF0YVsnc2FtcGxlJ10gPSB7XG4gICAgICAgIHg6IHNhbXBsZVgsXG4gICAgICAgIHk6IHNhbXBsZVksXG4gICAgICAgIHdpZHRoOiBzYW1wbGVXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBzYW1wbGVIZWlnaHRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gVEVTVDpcbiAgICBsZXQgdGVzdFg6IG51bWJlcltdID0gW107XG4gICAgbGV0IHRlc3RZOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgaWYgKGRhdGEuUmV3YXJkU3RhZ2UgIT0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5UZXN0R3JpZEluZGV4KTsgaSsrKSB7XG4gICAgICAgIC8vIElmIFNhbWUtRGlmZmVyZW50LCBvbmx5IHNob3cgdGhlIGZpcnN0IHRlc3RcbiAgICAgICAgaWYgKGRhdGEuU2FtZURpZmZlcmVudCA+IDAgfHwgZGF0YS5OUlNWUCA+IDApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIG51bURpc3BsYXlFbGVtcysrO1xuICAgICAgICBpZiAoZGF0YS5OUlNWUCA+IDApIHtcbiAgICAgICAgICB0ZXN0WC5wdXNoKGRhdGEuWEdyaWRDZW50ZXJbbWF4U2FtcGxlR3JpZEluZGV4IGFzIG51bWJlcl0pO1xuICAgICAgICAgIHRlc3RZLnB1c2goXG4gICAgICAgICAgICBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdXG4gICAgICAgICAgICAtIChkYXRhLllHcmlkQ2VudGVyW21heFNhbXBsZUdyaWRJbmRleCBhcyBudW1iZXJdICsgZGF0YS5vZmZzZXR0b3ApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXN0WC5wdXNoKGRhdGEuWEdyaWRDZW50ZXJbZGF0YS5UZXN0R3JpZEluZGV4W2ldXSk7XG4gICAgICAgICAgdGVzdFkucHVzaChcbiAgICAgICAgICAgIGRhdGEuVmlld3BvcnRQaXhlbHNbMV1cbiAgICAgICAgICAgIC0gKGRhdGEuWUdyaWRDZW50ZXJbZGF0YS5UZXN0R3JpZEluZGV4W2ldXSArIGRhdGEub2Zmc2V0dG9wKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgICAgIHsgXG4gICAgICAgICAgICAwOiB0ZXN0WFtpXSAtIHRlc3RXaWR0aCAvIDIsXG4gICAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogdGVzdFlbaV0gLSB0ZXN0SGVpZ2h0IC8gMlxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgICAgICB7IFxuICAgICAgICAgICAgMDogdGVzdFhbaV0gKyB0ZXN0V2lkdGggLyAyLFxuICAgICAgICAgICAgW251bURpc3BsYXlFbGVtc106IHRlc3RZW2ldIC0gdGVzdEhlaWdodCAvIDJcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICAgICAgeyBcbiAgICAgICAgICAgIDA6IHRlc3RYW2ldICsgdGVzdFdpZHRoIC8gMixcbiAgICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiB0ZXN0WVtpXSArIHRlc3RIZWlnaHQgLyAyXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgICAgIHsgXG4gICAgICAgICAgICAwOiB0ZXN0WFtpXSAtIHRlc3RXaWR0aCAvIDIsXG4gICAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogdGVzdFlbaV0gKyB0ZXN0SGVpZ2h0IC8gMlxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgICAgICB7IFxuICAgICAgICAgICAgMDogdGVzdFhbaV0gLSB0ZXN0V2lkdGggLyAyLFxuICAgICAgICAgICAgW251bURpc3BsYXlFbGVtc106IHRlc3RZW2ldIC0gdGVzdEhlaWdodCAvIDJcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnJlYWx0aW1lUm93RGF0YUFkZGVkICYmICF0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSkge1xuICAgICAgICAgIGxldCB0bXAgPSB7XG4gICAgICAgICAgICAgIHg6IHRlc3RYW2ldLFxuICAgICAgICAgICAgICB5OiB0ZXN0WVtpXSxcbiAgICAgICAgICAgICAgd2lkdGg6IHRlc3RXaWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiB0ZXN0SGVpZ2h0XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucnREYXRhWyd0ZXN0J10ucHVzaCh0bXApO1xuICAgICAgICB9XG4gICAgICB9IFxuICAgIH1cblxuICAgIC8vIENIT0lDRTpcbiAgICBsZXQgY2hvaWNlWDogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgY2hvaWNlWTogbnVtYmVyW10gPSBbXTtcblxuICAgIGlmIChkYXRhLlJld2FyZFN0YWdlICE9IDAgJiYgZGF0YS5TYW1lRGlmZmVyZW50ID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5DaG9pY2VHcmlkSW5kZXgpOyBpKyspIHtcbiAgICAgICAgbnVtRGlzcGxheUVsZW1zKys7XG4gICAgICAgIGNob2ljZVgucHVzaChkYXRhLlhHcmlkQ2VudGVyW2RhdGEuQ2hvaWNlR3JpZEluZGV4W2ldXSk7XG4gICAgICAgIGNob2ljZVkucHVzaChcbiAgICAgICAgICBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdXG4gICAgICAgICAgLSAoZGF0YS5ZR3JpZENlbnRlcltkYXRhLkNob2ljZUdyaWRJbmRleFtpXV0gKyBkYXRhLm9mZnNldHRvcClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDA6IGNob2ljZVhbaV0gLSBjaG9pY2VXaWR0aCAvIDIsXG4gICAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogY2hvaWNlWVtpXSAtIGNob2ljZUhlaWdodCAvIDJcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICAgICAge1xuICAgICAgICAgICAgMDogY2hvaWNlWFtpXSArIGNob2ljZVdpZHRoIC8gMixcbiAgICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiBjaG9pY2VZW2ldIC0gY2hvaWNlSGVpZ2h0IC8gMlxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZSxcbiAgICAgICAgICBudW1Db2x1bW5YWVBvcyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAwOiBjaG9pY2VYW2ldICsgY2hvaWNlV2lkdGggLyAyLFxuICAgICAgICAgICAgW251bURpc3BsYXlFbGVtc106IGNob2ljZVlbaV0gKyBjaG9pY2VIZWlnaHQgLyAyXG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmdlbmVyYXRlQW5kQWRkUm93RGF0YShcbiAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLFxuICAgICAgICAgIG51bUNvbHVtblhZUG9zLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIDA6IGNob2ljZVhbaV0gLSBjaG9pY2VXaWR0aCAvIDIsXG4gICAgICAgICAgICBbbnVtRGlzcGxheUVsZW1zXTogY2hvaWNlWVtpXSArIGNob2ljZUhlaWdodCAvIDJcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUsXG4gICAgICAgICAgbnVtQ29sdW1uWFlQb3MsXG4gICAgICAgICAge1xuICAgICAgICAgICAgMDogY2hvaWNlWFtpXSAtIGNob2ljZVdpZHRoIC8gMixcbiAgICAgICAgICAgIFtudW1EaXNwbGF5RWxlbXNdOiBjaG9pY2VZW2ldIC0gY2hvaWNlSGVpZ2h0IC8gMlxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG5cbiAgICAgICAgaWYgKCF0aGlzLnJlYWx0aW1lUm93RGF0YUFkZGVkICYmICF0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMucnREYXRhWydjaG9pY2UnXS5wdXNoKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB4OiBjaG9pY2VYW2ldLFxuICAgICAgICAgICAgICB5OiBjaG9pY2VZW2ldLFxuICAgICAgICAgICAgICB3aWR0aDogY2hvaWNlV2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogY2hvaWNlSGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZWFsdGltZVJvd0RhdGFBZGRlZCA9IHRydWU7XG5cbiAgICBsZXQgZml4WFBvczogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgZml4WVBvczogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgdGVzdFhQb3M6IG51bWJlcltdW10gPSBbXTtcbiAgICBsZXQgdGVzdFlQb3M6IG51bWJlcltdW10gPSBbXTtcbiAgICBsZXQgbnVtVGFyZ2V0ID0gWzAsIDBdO1xuXG4gICAgY29uc29sZS5sb2coJ3RvdWNoZXZlbnQ6JywgdG91Y2hldmVudCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdWNoZXZlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnNvbGUubG9nKCdpOicsIGkpO1xuICAgICAgeFBvcyA9IHRvdWNoZXZlbnRbaV1bMF07XG4gICAgICB5UG9zID0gZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSAtIHRvdWNoZXZlbnRbaV1bMV07XG5cbiAgICAgIGxldCB5RGF0YUluZGV4OiBudW1iZXI7XG4gICAgICBpZiAoaSAlIDIgPT0gMCkge1xuICAgICAgICB5RGF0YUluZGV4ID0gaSAvIDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB5RGF0YUluZGV4ID0gKGkgLSAxKSAvIDI7XG4gICAgICB9XG5cbiAgICAgIGlmICh4UG9zICE9IC0xKSB7XG4gICAgICAgIGxldCBhcnIgPSBuZXcgQXJyYXkobnVtQ29sdW1uWFlQb3MpO1xuICAgICAgICBhcnJbMF0gPSB4UG9zO1xuXG4gICAgICAgIGlmIChpICUgMiA9PSAwKSB7XG4gICAgICAgICAgZml4WFBvcy5wdXNoKHhQb3MpO1xuICAgICAgICAgIGZpeFlQb3MucHVzaCh5UG9zKTtcblxuICAgICAgICAgIGlmICh5RGF0YVt5RGF0YUluZGV4XSA9PSAxKSB7XG4gICAgICAgICAgICBhcnJbbnVtRGlzcGxheUVsZW1zICsgMV0gPSB5UG9zO1xuICAgICAgICAgICAgdGhpcy54eVBvc0RhdGFUYWJsZS5hZGRSb3dzKFthcnJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJyW251bURpc3BsYXlFbGVtcyArIDJdID0geVBvcztcbiAgICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkUm93cyhbYXJyXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCB0ZXN0WFBvc0FycjogbnVtYmVyW10gPSBbXTtcbiAgICAgICAgICBsZXQgdGVzdFlQb3NBcnI6IG51bWJlcltdID0gW107XG4gICAgICAgICAgXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBfLnNpemUoZGF0YS5UZXN0R3JpZEluZGV4KTsgaisrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5SZXNwb25zZVt5RGF0YUluZGV4XSA9PSBqKSB7XG4gICAgICAgICAgICAgIHRlc3RYUG9zQXJyLnB1c2goeFBvcyk7XG4gICAgICAgICAgICAgIHRlc3RZUG9zQXJyLnB1c2goeVBvcyk7XG4gICAgICAgICAgICAgIG51bVRhcmdldFtqXSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGVzdFhQb3NBcnIucHVzaCgwKTtcbiAgICAgICAgICAgICAgdGVzdFlQb3NBcnIucHVzaCgwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVzdFhQb3MucHVzaCh0ZXN0WFBvc0Fycik7XG4gICAgICAgICAgICB0ZXN0WVBvcy5wdXNoKHRlc3RZUG9zQXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoeURhdGFbeURhdGFJbmRleF0gPT0gMSkge1xuICAgICAgICAgICAgYXJyW251bURpc3BsYXlFbGVtcyArIDNdID0geVBvcztcbiAgICAgICAgICAgIHRoaXMueHlQb3NEYXRhVGFibGUuYWRkUm93cyhbYXJyXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFycltudW1EaXNwbGF5RWxlbXMgKyA0XSA9IHlQb3M7XG4gICAgICAgICAgICB0aGlzLnh5UG9zRGF0YVRhYmxlLmFkZFJvd3MoW2Fycl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgbWVhbkZpeFhQb3MgPSBfLm1lYW4oZml4WFBvcyk7XG4gICAgICBsZXQgbWVhbkZpeFlQb3MgPSBfLm1lYW4oZml4WVBvcyk7XG4gICAgICBsZXQgZGlzdEZpeFhQb3MgPSBmaXhYUG9zLm1hcCgoYTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhNYXRoLmFicyhhIC0gbWVhbkZpeFhQb3MpLCAyKTtcbiAgICAgIH0pO1xuICAgICAgbGV0IGRpc3RGaXhZUG9zID0gZml4WVBvcy5tYXAoKGE6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3coTWF0aC5hYnMoYSAtIG1lYW5GaXhZUG9zKSwgMik7XG4gICAgICB9KTtcbiAgICAgIGxldCBzdGRldkZpeCA9IGRpc3RGaXhYUG9zLm1hcCgoYTogbnVtYmVyLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKyBkaXN0Rml4WVBvc1tpZHhdKTtcbiAgICAgIH0pLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgfSwgMCkgLyBfLnNpemUoZGlzdEZpeFhQb3MpO1xuICAgICAgdGhpcy52aXRhbHMuc3RkZXZGaXggPSBzdGRldkZpeDtcblxuICAgICAgbGV0IHN0ZGV2VGVzdDogbnVtYmVyW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgXy5zaXplKGRhdGEuVGVzdEdyaWRJbmRleCk7IGorKykge1xuICAgICAgICBsZXQgYWxsVGVzdFhQb3MgPSB0ZXN0WFBvcy5tYXAoKGE6IG51bWJlcltdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFbal07XG4gICAgICAgIH0pLmZpbHRlcigoYTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEgIT0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lYW5UZXN0WFBvcyA9IGFsbFRlc3RYUG9zLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0sIDApIC8gXy5zaXplKGFsbFRlc3RYUG9zKTtcblxuICAgICAgICBsZXQgZGlzdFRlc3RYUG9zID0gYWxsVGVzdFhQb3MubWFwKChhOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5wb3coTWF0aC5hYnMoYSAtIG1lYW5UZXN0WFBvcyksIDIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWxsVGVzdFlQb3MgPSB0ZXN0WVBvcy5tYXAoKGE6IG51bWJlcltdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGFbal07XG4gICAgICAgIH0pLmZpbHRlcigoYTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEgIT0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1lYW5UZXN0WVBvcyA9IGFsbFRlc3RZUG9zLnJlZHVjZSgoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgIH0sIDApIC8gXy5zaXplKGFsbFRlc3RZUG9zKTtcblxuICAgICAgICBsZXQgZGlzdFRlc3RZUG9zID0gYWxsVGVzdFlQb3MubWFwKChhOiBudW1iZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5wb3coTWF0aC5hYnMoYSAtIG1lYW5UZXN0WVBvcyksIDIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdGRldlRlc3QucHVzaChcbiAgICAgICAgICBkaXN0VGVzdFhQb3MubWFwKChhOiBudW1iZXIsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChhICsgZGlzdFRlc3RZUG9zW2ldKTtcbiAgICAgICAgICB9KS5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYSArIGI7XG4gICAgICAgICAgfSwgMCkgLyBfLnNpemUoYWxsVGVzdFhQb3MpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLnZpdGFscy5zdGRldlRlc3QgPSBzdGRldlRlc3Q7XG4gICAgICBjb25zb2xlLmxvZygndml0YWxzLnN0ZGV2VGVzdDonLCB0aGlzLnZpdGFscy5zdGRldlRlc3QpO1xuICAgIH1cblxuICAgIHlEYXRhU21hbGwgPSB1dGlscy5zbW9vdGgoeURhdGEsIDUpO1xuICAgIHlEYXRhTGFyZ2UgPSB1dGlscy5zbW9vdGgoeURhdGEsIDEwMCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGltZUVuZFxuICAgIGxldCB0aW1lRW5kOiBudW1iZXI7XG4gICAgaWYgKFxuICAgICAgXy5pc1VuZGVmaW5lZChkYXRhLlJlc3BvbnNlWFlUKVxuICAgICAgfHwgXy5zaXplKGRhdGEuUmVzcG9uc2VYWVQpIDwgMVxuICAgICAgfHwgXy5pc1VuZGVmaW5lZChkYXRhLlJlc3BvbnNlWFlUWzJdW18uc2l6ZShkYXRhLlJlc3BvbnNlWFlUWzJdKSAtMV0pXG4gICAgKSB7XG4gICAgICB0aW1lRW5kID0gZGF0YS5GaXhhdGlvblhZVFsyXVtfLnNpemUoZGF0YS5GaXhhdGlvblhZVFsyXSkgLSAxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZUVuZCA9IGRhdGEuUmVzcG9uc2VYWVRbMl1bXy5zaXplKGRhdGEuUmVzcG9uc2VYWVRbMl0pIC0gMV07XG4gICAgfVxuXG4gICAgLy8gUkZJRFxuICAgIGxldCBudW1UcmlhbHMgPSBfLnNpemUoeURhdGEpO1xuICAgIGxldCBudW1SZWFkcyA9IF8uc2l6ZShkYXRhLlJGSURUYWcpO1xuICAgIG51bVJGSUQgPSBfLmZpbGwoQXJyYXkobnVtVHJpYWxzKSwgMCk7XG4gICAgdGhpcy52aXRhbHMudGFnQ291bnQgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUmVhZHM7IGkrKykge1xuICAgICAgaWYgKF8uaXNVbmRlZmluZWQodGhpcy52aXRhbHMudGFnQ291bnRbZGF0YS5SRklEVGFnW2ldWzJdXSkpIHtcbiAgICAgICAgdGhpcy52aXRhbHMudGFnQ291bnRbZGF0YS5SRklEVGFnW2ldWzJdXSA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLnZpdGFscy50YWdDb3VudFtkYXRhLlJGSURUYWdbaV1bMl1dICs9IDE7XG4gICAgICBudW1SRklEW2RhdGEuUkZJRFRhZ1tpXVswXV0gKz0gMTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IF8uc2l6ZShudW1SRklEKTsgaSsrKSB7XG4gICAgICBudW1SRklEW2ldID0gbnVtUkZJRFtpXSArIG51bVJGSURbaSAtIDFdO1xuICAgIH1cblxuICAgIC8vIEFkZGluZyByZXN0IG9mIHRoZSBkYXRhXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoeURhdGEpOyBpKyspIHtcbiAgICAgIGxldCB0aW1lRml4ID0gZGF0YS5GaXhhdGlvblhZVFsyXVtpXSAvLyBpbiBtaWxsaXNlY29uZHNcbiAgICAgIGlmICh0aW1lRml4IDwgMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgbGV0IHQgPSBuZXcgRGF0ZShmaWxlLmRhdGVTYXZlZCEpO1xuICAgICAgdC5zZXRUaW1lKHQuZ2V0VGltZSgpIC0gKHRpbWVFbmQgLSB0aW1lRml4KSk7XG5cbiAgICAgIHRoaXMucGVyZkRhdGFUYWJsZS5hZGRSb3dzKFtbeERhdGFbaV0sIHlEYXRhU21hbGxbaV0sIHlEYXRhTGFyZ2VbaV1dXSk7XG4gICAgICB0aGlzLmN1bXVsRGF0YVRhYmxlLmFkZFJvd3MoW1t0LCBudW1Ub3RhbFtpXSwgbnVtQ29ycmVjdFtpXSwgbnVtUkZJRFtpXV1dKTtcbiAgICB9XG4gICAgdGhpcy5mb3JtYXREYXRlKHRoaXMuY3VtdWxEYXRhVGFibGUsIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZUFuZEFkZFJvd0RhdGEoXG4gICAgdGFyZ2V0OiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUsIFxuICAgIG51bUNvbHVtbnM6IG51bWJlciwgXG4gICAgZGF0YTogUmVjb3JkPG51bWJlciwgbnVtYmVyIHwgc3RyaW5nPlxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpO1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbHVtbnM7IGkrKykge1xuICAgICAgaWYgKF8uaGFzKGRhdGEsIGkpKSB7XG4gICAgICAgIGFyci5wdXNoKGRhdGFbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdhcnI6JywgYXJyKTtcbiAgICB0YXJnZXQuYWRkUm93cyhbYXJyXSk7XG4gIH1cblxuICAvLyBUT0RPOiBkZWFsIHdpdGggY2FzZSB3aGVyZSBTYW1wbGVTY2VuZXNbMF0uT0JKRUNUU1tmaXJzdEtleV0uc2l6ZUluY2hlcyBpcyBhblxuICAvLyBBcnJheSBvZiBhcnJheXMgLS0gaS5lLiBzY2VuZSBtb3ZpZVxuICBwcml2YXRlIGdldFNhbXBsZVdpZHRoKGZpbGVEYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgbGV0IHNhbXBsZVdpZHRoID0gMDtcbiAgICBpZiAoXy5zaXplKGZpbGVEYXRhLlNhbXBsZVNjZW5lc1swXS5JTUFHRVMuaW1hZ2VpZHgpID4gMCkge1xuICAgICAgaWYgKF8uaXNBcnJheShmaWxlRGF0YS5TYW1wbGVTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMpKSB7XG4gICAgICAgIGxldCBtYXhTaXplSW5jaGVzID0gXy5tYXgoZmlsZURhdGEuU2FtcGxlU2NlbmVzWzBdLklNQUdFUy5zaXplSW5jaGVzKTtcbiAgICAgICAgaWYgKF8uaXNOdW1iZXIobWF4U2l6ZUluY2hlcykpIHtcbiAgICAgICAgICBzYW1wbGVXaWR0aCA9IG1heFNpemVJbmNoZXMgKiBmaWxlRGF0YS5WaWV3cG9ydFBQSTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnU2FtcGxlU2NlbmVzWzBdLklNQUdFUy5zaXplSW5jaGVzIGlzIG5vdCBhbiBhcnJheS4gUGxlYXNlIGZpeCEnXG4gICAgICAgICk7XG4gICAgICAgIHNhbXBsZVdpZHRoID0gKFxuICAgICAgICAgIGZpbGVEYXRhLlNhbXBsZVNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdEtleSA9IF8uZmluZEtleShmaWxlRGF0YS5TYW1wbGVTY2VuZXNbMF0uT0JKRUNUUyk7XG4gICAgICBpZiAoXy5pc1N0cmluZyhmaXJzdEtleSkpIHtcbiAgICAgICAgbGV0IG1heFNpemVJbmNoZXMgPSAoXG4gICAgICAgICAgXy5tYXgoZmlsZURhdGEuU2FtcGxlU2NlbmVzWzBdLk9CSkVDVFNbZmlyc3RLZXldLnNpemVJbmNoZXMpXG4gICAgICAgICk7XG4gICAgICAgIGlmIChfLmlzTnVtYmVyKG1heFNpemVJbmNoZXMpKSB7XG4gICAgICAgICAgc2FtcGxlV2lkdGggPSBtYXhTaXplSW5jaGVzICogZmlsZURhdGEuVmlld3BvcnRQUEk7XG4gICAgICAgIH0gXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdmaXJzdEtleSBvZiBTYW1wbGVTY2VuZXNbMF0uT0JKRUNUUyBpcyBub3Qgb2YgdHlwZSBzdHJpbmcnXG4gICAgICAgICk7XG4gICAgICB9ICBcbiAgICB9XG4gICAgcmV0dXJuIHNhbXBsZVdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUZXN0V2lkdGgoZmlsZURhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICBsZXQgdGVzdFdpZHRoID0gMDtcblxuICAgIGlmIChmaWxlRGF0YS5UZXN0U2NlbmVzWzBdLklNQUdFUy5pbWFnZWlkeC5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoXy5pc0FycmF5KGZpbGVEYXRhLlRlc3RTY2VuZXNbMF0uSU1BR0VTLnNpemVJbmNoZXMpKSB7XG4gICAgICAgIGxldCBtYXhTaXplSW5jaGVzID0gXy5tYXgoZmlsZURhdGEuVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyk7XG4gICAgICAgIGlmIChfLmlzTnVtYmVyKG1heFNpemVJbmNoZXMpKSB7XG4gICAgICAgICAgdGVzdFdpZHRoID0gbWF4U2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAnVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyBpcyBub3Qgb2YgdHlwZSBudW1iZXInXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyBpcyBub3QgYW4gYXJyYXkuIFBsZWFzZSBmaXghJ1xuICAgICAgICApO1xuICAgICAgICB0ZXN0V2lkdGggPSAoXG4gICAgICAgICAgZmlsZURhdGEuVGVzdFNjZW5lc1swXS5JTUFHRVMuc2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBmaXJzdEtleSA9IF8uZmluZEtleShmaWxlRGF0YS5UZXN0U2NlbmVzWzBdLk9CSkVDVFMpO1xuICAgICAgaWYgKF8uaXNTdHJpbmcoZmlyc3RLZXkpKSB7XG4gICAgICAgIGxldCBtYXhTaXplSW5jaGVzID0gKFxuICAgICAgICAgIF8ubWF4KGZpbGVEYXRhLlRlc3RTY2VuZXNbMF0uT0JKRUNUU1tmaXJzdEtleV0uc2l6ZUluY2hlcylcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKF8uaXNOdW1iZXIobWF4U2l6ZUluY2hlcykpIHtcbiAgICAgICAgICB0ZXN0V2lkdGggPSBtYXhTaXplSW5jaGVzICogZmlsZURhdGEuVmlld3BvcnRQUEk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICdmaXJzdEtleSBvZiBUZXN0U2NlbmVzWzBdLk9CSkVDVFMgaXMgbm90IG9mIHR5cGUgc3RyaW5nJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoZmlsZURhdGEuTlJTVlApICYmIGZpbGVEYXRhLk5SU1ZQID4gMCkge1xuICAgICAgdGVzdFdpZHRoID0gZmlsZURhdGEuU2FtcGxlRml4YXRpb25TaXplSW5jaGVzICogZmlsZURhdGEuVmlld3BvcnRQUEk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlc3RXaWR0aDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rml4YXRpb25XaWR0aChmaWxlRGF0YTogTGl2ZXBsb3REYXRhVHlwZSwgc2FtcGxlV2lkdGg6IG51bWJlcikge1xuICAgIGxldCBmaXhhdGlvbldpZHRoID0gMDtcblxuICAgIGlmIChmaWxlRGF0YS5GaXhhdGlvblVzZXNTYW1wbGUgPD0gMCkge1xuICAgICAgZml4YXRpb25XaWR0aCA9IGZpbGVEYXRhLkZpeGF0aW9uU2l6ZUluY2hlcyAqIGZpbGVEYXRhLlZpZXdwb3J0UFBJO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXhhdGlvbldpZHRoID0gc2FtcGxlV2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBmaXhhdGlvbldpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaG9pY2VXaWR0aChmaWxlRGF0YTogTGl2ZXBsb3REYXRhVHlwZSkge1xuICAgIGxldCBjaG9pY2VXaWR0aCA9IDA7XG4gICAgaWYgKFxuICAgICAgIV8uaXNVbmRlZmluZWQoZmlsZURhdGEuU2FtZURpZmZlcmVudClcbiAgICAgICYmIGZpbGVEYXRhLlNhbWVEaWZmZXJlbnQgPiAwXG4gICAgKSB7XG4gICAgICBjaG9pY2VXaWR0aCA9IGZpbGVEYXRhLkNob2ljZVNpemVJbmNoZXMgKiBmaWxlRGF0YS5WaWV3cG9ydFBQSTtcbiAgICB9XG4gICAgcmV0dXJuIGNob2ljZVdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkT2JqUGVyZkRhdGEoZGF0YTogTGl2ZXBsb3REYXRhVHlwZSkge1xuICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5yZW1vdmVSb3dzKFxuICAgICAgMCwgdGhpcy5vYmpQZXJmRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpXG4gICAgKTtcbiAgXG4gICAgbGV0IGxlblNhbXBsZU9iajogbnVtYmVyO1xuICAgIGlmIChkYXRhLlJld2FyZFN0YWdlID09IDEpIHtcbiAgICAgIGxldCBzYW1wbGVPYmogPSBbXTtcbiAgICAgIGlmIChkYXRhLk5UcmlhbHNQZXJCYWdCbG9jayA+IDUwMDApIHtcbiAgICAgICAgc2FtcGxlT2JqLnB1c2goZGF0YS5JbWFnZUJhZ3NTYW1wbGVbMF0uc3BsaXQoJy8nKVs1XSk7XG4gICAgICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5hZGRSb3coW3NhbXBsZU9ialswXSwgMF0pO1xuICAgICAgICBsZW5TYW1wbGVPYmogPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5JbWFnZUJhZ3NTYW1wbGUpOyBpKyspIHtcbiAgICAgICAgICBzYW1wbGVPYmoucHVzaChkYXRhLkltYWdlQmFnc1NhbXBsZVtpXS5zcGxpdCgnLycpWzVdKTtcbiAgICAgICAgICB0aGlzLm9ialBlcmZEYXRhVGFibGUuYWRkUm93KFtzYW1wbGVPYmpbaV0sIDBdKTtcbiAgICAgICAgfVxuICAgICAgICBsZW5TYW1wbGVPYmogPSBfLnNpemUoc2FtcGxlT2JqKTtcbiAgICAgIH1cblxuICAgICAgbGV0IE5EaWZmT2JqUGVyZiA9IF8uZmlsbChBcnJheShsZW5TYW1wbGVPYmopLCAwKTtcbiAgICAgIGxldCBORGlmZk9iaiA9IF8uZmlsbChBcnJheShsZW5TYW1wbGVPYmopLCAwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuU2FtcGxlWzBdKTsgaSsrKSB7IC8vIEZvciBpIHRyaWFsc1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlblNhbXBsZU9iajsgaisrKSB7XG4gICAgICAgICAgLy8gSWYgc2FtcGxlIHdhcyB0aGF0IG9iamVjdFxuICAgICAgICAgIGlmIChkYXRhLlNhbXBsZUJhZ0lkeFtkYXRhLlNhbXBsZVswXVtpXV0gPT0gaikge1xuICAgICAgICAgICAgTkRpZmZPYmpbal0gKz0gMTtcbiAgICAgICAgICAgIC8vIElmIGNvcnJlY3RcbiAgICAgICAgICAgIGlmIChkYXRhLlJlc3BvbnNlW2ldID09IGRhdGEuQ29ycmVjdEl0ZW1baV0pIHtcbiAgICAgICAgICAgICAgTkRpZmZPYmpQZXJmW2pdICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub2JqUGVyZkRhdGFUYWJsZS5zZXRWYWx1ZShqLCAxLCBORGlmZk9ialBlcmZbal0gLyBORGlmZk9ialtqXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRDaG9pY2VEYXRhKGRhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5yZW1vdmVSb3dzKDAsIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmdldE51bWJlck9mUm93cygpKTtcbiAgICBcbiAgICBpZiAoZGF0YS5SZXdhcmRTdGFnZSAhPSAwKSB7XG4gICAgICAvLyBsZXQgcG9zc2libGVSZXNwID0gXy5maWxsKEFycmF5KF8uc2l6ZShkYXRhLk9iamVjdEdyaWRJbmRleCkpLCAwKTtcbiAgICAgIGxldCBwb3NzaWJsZVJlc3AgPSBbXTtcbiAgICAgIFxuICAgICAgaWYgKFxuICAgICAgICBfLnNpemUoZGF0YS5PYmplY3RHcmlkSW5kZXgpICE9IDBcbiAgICAgICAgJiYgKF8uaXNVbmRlZmluZWQoZGF0YS5OVHJpYWxzUGVyQmFnQmxvY2spIFxuICAgICAgICB8fCBkYXRhLk5UcmlhbHNQZXJCYWdCbG9jayA8IDEwMDApXG4gICAgICApIHtcbiAgICAgICAgbGV0IG9iakdyaWRJbmRleCA9IF8uY2xvbmVEZWVwKGRhdGEuT2JqZWN0R3JpZEluZGV4KTtcbiAgICAgICAgb2JqR3JpZEluZGV4LnNvcnQoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGFsbGluZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZShvYmpHcmlkSW5kZXgpOyBpKyspIHtcbiAgICAgICAgICAvLyBhbGxpbmQucHVzaChfLmZpbmRJbmRleChkYXRhLk9iamVjdEdyaWRJbmRleCwgb2JqR3JpZEluZGV4W2ldKSk7XG4gICAgICAgICAgYWxsaW5kLnB1c2goZGF0YS5PYmplY3RHcmlkSW5kZXguaW5kZXhPZihvYmpHcmlkSW5kZXhbaV0pKTtcbiAgICAgICAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5hZGRSb3coXG4gICAgICAgICAgICBbZGF0YS5JbWFnZUJhZ3NTYW1wbGVbYWxsaW5kW2ldXS5zcGxpdCgnLycpWzVdLCAwXVxuICAgICAgICAgICk7XG4gICAgICAgICAgcG9zc2libGVSZXNwLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuVGVzdEdyaWRJbmRleCk7IGkrKykge1xuICAgICAgICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmFkZFJvdyhbJ2Nob2ljZScgKyAoaSArIDEpLCAwXSk7XG4gICAgICAgICAgcG9zc2libGVSZXNwLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IE5EaWZmQ2hvaWNlID0gXy5maWxsKEFycmF5KF8uc2l6ZShwb3NzaWJsZVJlc3ApKSwgMCk7XG4gICAgICBsZXQgTkFsbENob2ljZSA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKGRhdGEuUmVzcG9uc2UpOyBpKyspIHtcbiAgICAgICAgaWYgKGRhdGEuUmVzcG9uc2VbaV0gIT0gLTEpIHtcbiAgICAgICAgICBOQWxsQ2hvaWNlKys7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF8uc2l6ZShwb3NzaWJsZVJlc3ApOyBqKyspIHtcbiAgICAgICAgICBpZiAoZGF0YS5SZXNwb25zZVtpXSA9PSBwb3NzaWJsZVJlc3Bbal0gJiYgZGF0YS5SZXNwb25zZVtpXSAhPSAtMSkge1xuICAgICAgICAgICAgTkRpZmZDaG9pY2Vbal0rKztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jaG9pY2VEYXRhVGFibGUuc2V0VmFsdWUoaiwgMSwgTkRpZmZDaG9pY2Vbal0gLyBOQWxsQ2hvaWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5hZGRSb3coWydvdXRzaWRlIEZpeCcsIDBdKTtcbiAgICAgIHRoaXMuY2hvaWNlRGF0YVRhYmxlLmFkZFJvdyhbJ2luc2lkZSBGaXgnLCAwXSk7XG5cbiAgICAgIGxldCBORGlmZkNob2ljZSA9IF8uZmlsbChBcnJheSgyKSwgMCk7XG4gICAgICBsZXQgTkFsbENob2ljZSA9IDA7XG4gICAgICBsZXQgeURhdGEgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5Db3JyZWN0SXRlbSk7IGkrKykge1xuICAgICAgICBpZiAoZGF0YS5Db3JyZWN0SXRlbVtpXSA9PSBkYXRhLlJlc3BvbnNlW2ldKSB7XG4gICAgICAgICAgeURhdGEucHVzaCgxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5RGF0YS5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKHlEYXRhKTsgaSsrKSB7XG4gICAgICAgIE5BbGxDaG9pY2UrKztcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgICAgIGlmICh5RGF0YVtpXSA9PSBqKSB7XG4gICAgICAgICAgICBORGlmZkNob2ljZVtqXSArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNob2ljZURhdGFUYWJsZS5zZXRWYWx1ZShqLCAxLCBORGlmZkNob2ljZVtqXSAvIE5BbGxDaG9pY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkUmV3YXJkRGF0YShkYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgdGhpcy5yZXdhcmREYXRhVGFibGUucmVtb3ZlUm93cygwLCB0aGlzLnJld2FyZERhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKSk7XG4gICAgbGV0IE5SZXdhcmRNYXggPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuTlJld2FyZE1heDsgaSsrKSB7XG4gICAgICBOUmV3YXJkTWF4LnB1c2goaS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgLy8gTlJld2FyZE1heC51bnNoaWZ0KCctMScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoTlJld2FyZE1heCk7IGkrKykge1xuICAgICAgdGhpcy5yZXdhcmREYXRhVGFibGUuYWRkUm93KFtOUmV3YXJkTWF4W2ldLCAwXSk7XG4gICAgfVxuXG4gICAgbGV0IE5EaWZmUmV3YXJkID0gXy5maWxsKEFycmF5KF8uc2l6ZShOUmV3YXJkTWF4KSksIDApO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUoZGF0YS5OUmV3YXJkKTsgaSsrKSB7XG4gICAgICBpZiAoZGF0YS5SZXNwb25zZVtpXSA9PSAtMSkge1xuICAgICAgICBORGlmZlJld2FyZFswXSsrO1xuICAgICAgICB0aGlzLnJld2FyZERhdGFUYWJsZS5zZXRWYWx1ZShcbiAgICAgICAgICAwLCAxLCBORGlmZlJld2FyZFswXSAvIF8uc2l6ZShkYXRhLk5SZXdhcmQpXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IF8uc2l6ZShOUmV3YXJkTWF4KTsgaisrKSB7XG4gICAgICAgICAgaWYgKGRhdGEuTlJld2FyZFtpXS50b1N0cmluZygpID09IE5SZXdhcmRNYXhbal0pIHtcbiAgICAgICAgICAgIE5EaWZmUmV3YXJkW2pdKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucmV3YXJkRGF0YVRhYmxlLnNldFZhbHVlKFxuICAgICAgICAgICAgaiwgMSwgTkRpZmZSZXdhcmRbal0gLyBfLnNpemUoZGF0YS5OUmV3YXJkKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRyYXdQZXJmb3JtYW5jZVBsb3QoZmlsZTogRmlsZVR5cGUpIHtcbiAgICBsZXQgbnVtUm93cyA9IHRoaXMucGVyZkRhdGFUYWJsZS5nZXROdW1iZXJPZlJvd3MoKTtcbiAgICB0aGlzLm5UcmlhbHMgPSBudW1Sb3dzO1xuICAgIGxldCBwZXJmRmlsdGVyU3RhdGU6IGFueSA9IHRoaXMucGVyZkZpbHRlci5nZXRTdGF0ZSgpO1xuXG4gICAgLy8gdXBkYXRpbmcgcGVyZkZpbHRlclxuICAgIGlmIChmaWxlLmRhdGFDaGFuZ2VkICYmICFmaWxlLmZpbGVDaGFuZ2VkKSB7XG4gICAgICBpZiAobnVtUm93cyA8PSAxMDApIHtcbiAgICAgICAgLy8gZXhwYW5kIHdpbmRvdyBzaXplIGF1dG9tYXRpY2FsbHkgdXAgdG8gMTAwXG4gICAgICAgIHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA9IDA7XG4gICAgICAgIHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5lbmQgPSBudW1Sb3dzOyAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRUcmlhbHMgPSBudW1Sb3dzIC0gXy5zaXplKGZpbGUuZGF0YT8uRml4YXRpb25HcmlkSW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZygnZHRyaWFscycsIGRUcmlhbHMpO1xuICAgICAgICBwZXJmRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQgPSBudW1Sb3dzIC0gMTAwO1xuICAgICAgICBwZXJmRmlsdGVyU3RhdGUucmFuZ2UuZW5kID0gbnVtUm93cztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpbGUuZmlsZUNoYW5nZWQpIHtcbiAgICAgIGxldCBkU2xpZGVyID0gMTAwO1xuICAgICAgcGVyZkZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0ID0gbnVtUm93cyAtIGRTbGlkZXI7XG4gICAgICBwZXJmRmlsdGVyU3RhdGUucmFuZ2UuZW5kID0gbnVtUm93cztcbiAgICAgIGlmIChwZXJmRmlsdGVyU3RhdGUucmFuZ2Uuc3RhcnQgPCAwKSB7XG4gICAgICAgIHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wZXJmUGxvdC5zZXRPcHRpb25zKHRoaXMucGVyZlBsb3RPcHRpb25zKTtcbiAgICB0aGlzLnBlcmZGaWx0ZXIuc2V0U3RhdGUoe1xuICAgICAgcmFuZ2U6IHtcbiAgICAgICAgc3RhcnQ6IHBlcmZGaWx0ZXJTdGF0ZS5yYW5nZS5zdGFydCxcbiAgICAgICAgZW5kOiBwZXJmRmlsdGVyU3RhdGUucmFuZ2UuZW5kXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5wZXJmRGFzaGJvYXJkLmRyYXcodGhpcy5wZXJmRGF0YVRhYmxlKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1RyaWFsUGxvdChmaWxlOiBGaWxlVHlwZSkge1xuICAgIGxldCB0cmlhbEZpbHRlclN0YXRlOiBhbnkgPSB0aGlzLnRyaWFsRmlsdGVyLmdldFN0YXRlKCk7XG4gICAgbGV0IHRtaW4gPSBuZXcgRGF0ZSh0aGlzLmN1bXVsRGF0YVRhYmxlLmdldENvbHVtblJhbmdlKDApLm1pbik7XG4gICAgbGV0IHRtYXggPSBuZXcgRGF0ZSh0aGlzLmN1bXVsRGF0YVRhYmxlLmdldENvbHVtblJhbmdlKDApLm1heCk7XG5cbiAgICBpZiAoZmlsZS5kYXRhQ2hhbmdlZCB8fCBmaWxlLmZpbGVDaGFuZ2VkKSB7XG4gICAgICB0cmlhbEZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0ID0gdG1pbjtcbiAgICAgIHRyaWFsRmlsdGVyU3RhdGUucmFuZ2UuZW5kID0gdG1heDtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWFsRmlsdGVyLnNldFN0YXRlKHtcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgIHN0YXJ0OiB0cmlhbEZpbHRlclN0YXRlLnJhbmdlLnN0YXJ0LFxuICAgICAgICBlbmQ6IHRyaWFsRmlsdGVyU3RhdGUucmFuZ2UuZW5kXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy50cmlhbFBsb3Quc2V0T3B0aW9ucyh0aGlzLnRyaWFsUGxvdE9wdGlvbnMpO1xuICAgIHRoaXMudHJpYWxEYXNoYm9hcmQuZHJhdyh0aGlzLmN1bXVsRGF0YVRhYmxlKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd09ialBlcmZQbG90KCkge1xuICAgIHRoaXMub2JqUGVyZlBsb3QuZHJhdyh0aGlzLm9ialBlcmZEYXRhVGFibGUsIHRoaXMub2JqUGVyZlBsb3RPcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1J4blRpbWVQbG90KCkge1xuICAgIHRoaXMucnhuUGxvdC5kcmF3KHRoaXMucnhuVGltZURhdGFUYWJsZSwgdGhpcy5yeG5QbG90T3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdDaG9pY2VQbG90KCkge1xuICAgIHRoaXMuY2hvaWNlUGxvdC5kcmF3KHRoaXMuY2hvaWNlRGF0YVRhYmxlLCB0aGlzLmNob2ljZVBsb3RPcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1Jld2FyZFBsb3QoKSB7XG4gICAgdGhpcy5yZXdhcmRQbG90LmRyYXcodGhpcy5yZXdhcmREYXRhVGFibGUsIHRoaXMucmV3YXJkUGxvdE9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3UmVhbHRpbWVQbG90KGRhdGE6IExpdmVwbG90RGF0YVR5cGUpIHtcbiAgICBsZXQgaWR4ID0gMDtcbiAgICB0aGlzLnJlYWx0aW1lUGxvdE9wdGlvbnMgPSB7XG4gICAgICBzZXJpZXNUeXBlOiAnc2NhdHRlcicsXG4gICAgICB3aWR0aDogZGF0YS53b3Jrc3BhY2VbMl0gKiBkYXRhLkNhbnZhc1JhdGlvLFxuICAgICAgaGVpZ2h0OiBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC0gZGF0YS5vZmZzZXR0b3AsXG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgcG9zaXRpb246ICd0b3AnXG4gICAgICB9LFxuICAgICAgaEF4aXM6IHtcbiAgICAgICAgdGl0bGU6ICdYIHBvc2l0aW9uIChweCknLFxuICAgICAgICB2aWV3V2luZG93OiB7XG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogZGF0YS53b3Jrc3BhY2VbMl0gKiBkYXRhLkNhbnZhc1JhdGlvXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB2QXhpczoge1xuICAgICAgICB0aXRsZTogJ1kgcG9zaXRpb24gKHB4KScsXG4gICAgICAgIHZpZXdXaW5kb3c6IHtcbiAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgbWF4OiBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC0gZGF0YS5vZmZzZXR0b3BcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5yZWFsdGltZVBsb3RPcHRpb25zLmhBeGlzID0ge1xuICAgICAgdGl0bGU6ICdYIHBvc2l0aW9uIChweCknLFxuICAgICAgdmlld1dpbmRvdzoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogZGF0YS53b3Jrc3BhY2VbMl0gKiBkYXRhLkNhbnZhc1JhdGlvXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnJlYWx0aW1lUGxvdE9wdGlvbnMudkF4aXMgPSB7XG4gICAgICB0aXRsZTogJ1kgcG9zaXRpb24gKHB4KScsXG4gICAgICB2aWV3V2luZG93OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdIC0gZGF0YS5vZmZzZXR0b3BcbiAgICAgIH1cbiAgICB9O1xuICAgIGxldCBudW1Db2wgPSB0aGlzLnJlYWx0aW1lRGF0YVRhYmxlLmdldE51bWJlck9mQ29sdW1ucygpO1xuICAgIHRoaXMuZ2VuZXJhdGVBbmRBZGRSb3dEYXRhKFxuICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZSxcbiAgICAgIG51bUNvbCxcbiAgICAgIHswOiAwLCBbbnVtQ29sIC0gMl06IDB9XG4gICAgKTtcbiAgICBsZXQgbnVtUm93cyA9IHRoaXMucmVhbHRpbWVEYXRhVGFibGUuZ2V0TnVtYmVyT2ZSb3dzKCk7XG5cbiAgICB0aGlzLnJlYWx0aW1lUGxvdENvbmZpZyA9IHtcbiAgICAgIGNoYXJ0VHlwZTogJ0NvbWJvQ2hhcnQnLFxuICAgICAgY29udGFpbmVySWQ6ICdyZWFsdGltZS1wbG90JyxcbiAgICAgIG9wdGlvbnM6IHRoaXMucmVhbHRpbWVQbG90T3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy5yZWFsdGltZVBsb3QgPSAoXG4gICAgICBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uQ2hhcnRXcmFwcGVyKHRoaXMucmVhbHRpbWVQbG90Q29uZmlnKVxuICAgICk7XG4gICAgdGhpcy5yZWFsdGltZVBsb3Quc2V0RGF0YVRhYmxlKHRoaXMucmVhbHRpbWVEYXRhVGFibGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkYXRhX2Fycml2ZWQnLCAoZXZ0OiBDdXN0b21FdmVudEluaXQpID0+IHtcbiAgICAgIGlmIChpZHggJSAyID09IDApIHtcbiAgICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5zZXRWYWx1ZShudW1Sb3dzIC0gMSwgMCwgTWF0aC5mbG9vcihldnQuZGV0YWlsLngpKTtcbiAgICAgICAgdGhpcy5yZWFsdGltZURhdGFUYWJsZS5zZXRWYWx1ZShudW1Sb3dzIC0gMSwgbnVtQ29sIC0gMiwgTWF0aC5mbG9vcihldnQuZGV0YWlsLnkpKTtcbiAgICAgICAgdGhpcy5yZWFsdGltZVBsb3QuZHJhdygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3U3RhdGljRWxlbWVudHMoY3ZzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsLCBkYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdncmF5JztcbiAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgMCwgXG4gICAgICAgIDAsIFxuICAgICAgICBkYXRhLndvcmtzcGFjZVsyXSAqIGRhdGEuQ2FudmFzUmF0aW8sXG4gICAgICAgIGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLSBkYXRhLm9mZnNldHRvcFxuICAgICAgKTtcblxuICAgICAgLy8gRml4YXRpb25cbiAgICAgIGlmIChkYXRhLkZpeGF0aW9uVXNlc1NhbXBsZSA8IDEpIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAwRkYnO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5hcmMoXG4gICAgICAgICAgdGhpcy5ydERhdGEuZml4YXRpb24ueCxcbiAgICAgICAgICBjdnMuaGVpZ2h0IC0gdGhpcy5ydERhdGEuZml4YXRpb24ueSxcbiAgICAgICAgICB0aGlzLnJ0RGF0YS5maXhhdGlvbi53aWR0aCAvIDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBNYXRoLlBJICogMixcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICBcbiAgICAgIC8vIFNhbXBsZVxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAwMDAnOyAvLyBibGFja1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LnJlY3QoXG4gICAgICAgIHRoaXMucnREYXRhLnNhbXBsZS54IC0gdGhpcy5ydERhdGEuc2FtcGxlLndpZHRoIC8gMixcbiAgICAgICAgY3ZzLmhlaWdodCAtICh0aGlzLnJ0RGF0YS5zYW1wbGUueSArIHRoaXMucnREYXRhLnNhbXBsZS5oZWlnaHQgLyAyKSxcbiAgICAgICAgdGhpcy5ydERhdGEuc2FtcGxlLndpZHRoLFxuICAgICAgICB0aGlzLnJ0RGF0YS5zYW1wbGUuaGVpZ2h0XG4gICAgICApO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgICAvLyBUZXN0XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF8uc2l6ZSh0aGlzLnJ0RGF0YVsndGVzdCddKTsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LnJlY3QoXG4gICAgICAgICAgdGhpcy5ydERhdGFbJ3Rlc3QnXVtpXS54IC0gdGhpcy5ydERhdGFbJ3Rlc3QnXVtpXS53aWR0aCAvIDIsXG4gICAgICAgICAgY3ZzLmhlaWdodCAtICh0aGlzLnJ0RGF0YVsndGVzdCddW2ldLnkgKyB0aGlzLnJ0RGF0YVsndGVzdCddW2ldLmhlaWdodCAvIDIpLFxuICAgICAgICAgIHRoaXMucnREYXRhWyd0ZXN0J11baV0ud2lkdGgsXG4gICAgICAgICAgdGhpcy5ydERhdGFbJ3Rlc3QnXVtpXS5oZWlnaHRcbiAgICAgICAgKTtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBDaG9pY2VcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKHRoaXMucnREYXRhWydjaG9pY2UnXSk7IGkrKykge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5yZWN0KFxuICAgICAgICAgIHRoaXMucnREYXRhWydjaG9pY2UnXVtpXS54IC0gdGhpcy5ydERhdGFbJ2Nob2ljZSddW2ldLndpZHRoIC8gMixcbiAgICAgICAgICBjdnMuaGVpZ2h0IC0gKHRoaXMucnREYXRhWydjaG9pY2UnXVtpXS55ICsgdGhpcy5ydERhdGFbJ2Nob2ljZSddW2ldLmhlaWdodCAvIDIpLFxuICAgICAgICAgIHRoaXMucnREYXRhWydjaG9pY2UnXVtpXS53aWR0aCxcbiAgICAgICAgICB0aGlzLnJ0RGF0YVsnY2hvaWNlJ11baV0uaGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIH1cblxuICAgICAgbGV0IGZpeFdpblN6ID0gZGF0YS5GaXhhdGlvbldpbmRvd1NpemVJbmNoZXM7XG5cbiAgICAgIGlmIChfLmlzTnVtYmVyKGZpeFdpblN6KSAmJiBmaXhXaW5TeiA+IDApIHtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRkZGMDAnOyAvLyB5ZWxsb3dcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoXG4gICAgICAgICAgdGhpcy5ydERhdGEuZml4YXRpb24ueCAtIF8uZmxvb3IoZml4V2luU3ogLyAyICogZGF0YS5WaWV3cG9ydFBQSSksXG4gICAgICAgICAgY3ZzLmhlaWdodCBcbiAgICAgICAgICAtICh0aGlzLnJ0RGF0YS5maXhhdGlvbi55ICsgXy5mbG9vcihmaXhXaW5TeiAvIDIgKiBkYXRhLlZpZXdwb3J0UFBJKSksXG4gICAgICAgICAgXy5mbG9vcihmaXhXaW5TeiAqIGRhdGEuVmlld3BvcnRQUEkpLFxuICAgICAgICAgIF8uZmxvb3IoZml4V2luU3ogKiBkYXRhLlZpZXdwb3J0UFBJKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBkcmF3UmVhbHRpbWVQbG90MihkYXRhOiBMaXZlcGxvdERhdGFUeXBlKSB7XG4gICAgbGV0IGN2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFsdGltZS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBjdnMud2lkdGggPSBkYXRhLndvcmtzcGFjZVsyXSAqIGRhdGEuQ2FudmFzUmF0aW87XG4gICAgY3ZzLmhlaWdodCA9IGRhdGEuVmlld3BvcnRQaXhlbHNbMV0gLSBkYXRhLm9mZnNldHRvcDtcbiAgICBsZXQgY3R4ID0gY3ZzLmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHRoaXMuZHJhd1N0YXRpY0VsZW1lbnRzKGN2cywgY3R4LCBkYXRhKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZGF0YV9hcnJpdmVkJywgKGV2dDogQ3VzdG9tRXZlbnRJbml0KSA9PiB7XG5cbiAgICAgIGlmIChldnQuZGV0YWlsLm1ldGEgPT0gMikge1xuICAgICAgICB0aGlzLmRyYXdTdGF0aWNFbGVtZW50cyhjdnMsIGN0eCwgZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChldnQuZGV0YWlsLm1ldGEgPT0gMSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgIH0gZWxzZSBpZiAoZXZ0LmRldGFpbC5tZXRhID09IDApIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgfVxuXG4gICAgICBjdHg/LmJlZ2luUGF0aCgpO1xuICAgICAgbGV0IHggPSBfLmZsb29yKGV2dC5kZXRhaWwueCk7XG4gICAgICBsZXQgeSA9IF8uZmxvb3IoY3ZzLmhlaWdodCAtIGV2dC5kZXRhaWwueSk7XG4gICAgICBjdHg/LmFyYyh4LCB5LCAyLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgICBjdHg/LmZpbGwoKTtcbiAgICB9KTtcblxuXG4gICAgXG4gICAgLy8gaWYgKGN0eCkge1xuICAgIC8vICAgLy8gU2V0dXAgQ2FudmFzXG4gICAgLy8gICBjdHguZmlsbFN0eWxlID0gJ2dyYXknO1xuICAgIC8vICAgY3R4LmZpbGxSZWN0KFxuICAgIC8vICAgICAwLCBcbiAgICAvLyAgICAgMCwgXG4gICAgLy8gICAgIGRhdGEud29ya3NwYWNlWzJdICogZGF0YS5DYW52YXNSYXRpbyxcbiAgICAvLyAgICAgZGF0YS5WaWV3cG9ydFBpeGVsc1sxXSAtIGRhdGEub2Zmc2V0dG9wXG4gICAgLy8gICApO1xuXG4gICAgLy8gICAvLyBGaXhhdGlvblxuICAgIC8vICAgaWYgKGRhdGEuRml4YXRpb25Vc2VzU2FtcGxlIDwgMSkge1xuICAgIC8vICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gICAgIGN0eC5hcmMoXG4gICAgLy8gICAgICAgdGhpcy5ydERhdGEuZml4YXRpb24ueCxcbiAgICAvLyAgICAgICBjdnMuaGVpZ2h0IC0gdGhpcy5ydERhdGEuZml4YXRpb24ueSxcbiAgICAvLyAgICAgICB0aGlzLnJ0RGF0YS5maXhhdGlvbi53aWR0aCAvIDIsXG4gICAgLy8gICAgICAgMCxcbiAgICAvLyAgICAgICBNYXRoLlBJICogMixcbiAgICAvLyAgICAgICB0cnVlXG4gICAgLy8gICAgICk7XG4gICAgLy8gICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyAgIH1cbiAgICAgIFxuICAgIC8vICAgLy8gU2FtcGxlXG4gICAgLy8gICBjdHguYmVnaW5QYXRoKCk7XG4gICAgLy8gICBjdHgucmVjdChcbiAgICAvLyAgICAgdGhpcy5ydERhdGEuc2FtcGxlLnggLSB0aGlzLnJ0RGF0YS5zYW1wbGUud2lkdGggLyAyLFxuICAgIC8vICAgICBjdnMuaGVpZ2h0IC0gKHRoaXMucnREYXRhLnNhbXBsZS55ICsgdGhpcy5ydERhdGEuc2FtcGxlLmhlaWdodCAvIDIpLFxuICAgIC8vICAgICB0aGlzLnJ0RGF0YS5zYW1wbGUud2lkdGgsXG4gICAgLy8gICAgIHRoaXMucnREYXRhLnNhbXBsZS5oZWlnaHRcbiAgICAvLyAgICk7XG4gICAgLy8gICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyAgIC8vIFRlc3RcbiAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgXy5zaXplKHRoaXMucnREYXRhWyd0ZXN0J10pOyBpKyspIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICAvLyAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vICAgICBjdHgucmVjdChcbiAgICAvLyAgICAgICB0aGlzLnJ0RGF0YVsndGVzdCddW2ldLnggLSB0aGlzLnJ0RGF0YVsndGVzdCddW2ldLndpZHRoIC8gMixcbiAgICAvLyAgICAgICBjdnMuaGVpZ2h0IC0gKHRoaXMucnREYXRhWyd0ZXN0J11baV0ueSArIHRoaXMucnREYXRhWyd0ZXN0J11baV0uaGVpZ2h0IC8gMiksXG4gICAgLy8gICAgICAgdGhpcy5ydERhdGFbJ3Rlc3QnXVtpXS53aWR0aCxcbiAgICAvLyAgICAgICB0aGlzLnJ0RGF0YVsndGVzdCddW2ldLmhlaWdodFxuICAgIC8vICAgICApO1xuICAgIC8vICAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gICB9XG5cbiAgICAvLyAgIC8vIENob2ljZVxuICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfLnNpemUodGhpcy5ydERhdGFbJ2Nob2ljZSddKTsgaSsrKSB7XG4gICAgLy8gICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAvLyAgICAgY3R4LnJlY3QoXG4gICAgLy8gICAgICAgdGhpcy5ydERhdGFbJ2Nob2ljZSddW2ldLnggLSB0aGlzLnJ0RGF0YVsnY2hvaWNlJ11baV0ud2lkdGggLyAyLFxuICAgIC8vICAgICAgIGN2cy5oZWlnaHQgLSAodGhpcy5ydERhdGFbJ2Nob2ljZSddW2ldLnkgKyB0aGlzLnJ0RGF0YVsnY2hvaWNlJ11baV0uaGVpZ2h0IC8gMiksXG4gICAgLy8gICAgICAgdGhpcy5ydERhdGFbJ2Nob2ljZSddW2ldLndpZHRoLFxuICAgIC8vICAgICAgIHRoaXMucnREYXRhWydjaG9pY2UnXVtpXS5oZWlnaHRcbiAgICAvLyAgICAgKTtcbiAgICAvLyAgICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vICAgfVxuXG4gICAgICBcbiAgICBcbiAgICBcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1NjcmVlblBsb3QoZGF0YTogTGl2ZXBsb3REYXRhVHlwZSwgc2NyZWVuQWN0aXZlOiBib29sZWFuKSB7XG5cbiAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnNlcmllcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy54eVBvc0RhdGFUYWJsZS5nZXROdW1iZXJPZkNvbHVtbnMoKTsgaSsrKSB7XG4gICAgICBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKSA9PSAnRml4YXRpb24nKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgdHlwZTogJ2xpbmUnLCBjb2xvcjogJ2dyYXknIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ1NhbXBsZScpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0gKFxuICAgICAgICAgIHsgdHlwZTogJ2xpbmUnLCBjb2xvcjogJ2JsYWNrJyB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ1NhbWUnKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IChcbiAgICAgICAgICB7IHR5cGU6ICdsaW5lJywgY29sb3I6ICdncmVlbicgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnh5UG9zRGF0YVRhYmxlLmdldENvbHVtbkxhYmVsKGkpID09ICdEaWZmZXJlbnQnKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IChcbiAgICAgICAgICB7IHR5cGU6ICdsaW5lJywgY29sb3I6ICdyZWQnIH1cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKSA9PSAnRml4X1Jld2FyZCcpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0geyBjb2xvcjogJ2JsdWUnIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ0ZpeF9QdW5pc2gnKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgY29sb3I6ICdyZWQnIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMueHlQb3NEYXRhVGFibGUuZ2V0Q29sdW1uTGFiZWwoaSkgPT0gJ1RhcmdldF9SZXdhcmQnKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuc2VyaWVzW2kgLSAxXSA9IHsgY29sb3I6ICdncmVlbicgfTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy54eVBvc0RhdGFUYWJsZS5nZXRDb2x1bW5MYWJlbChpKSA9PSAnVGFyZ2V0X1B1bmlzaCcpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0geyBjb2xvcjogJ2JsYWNrJyB9O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnh5UG9zRGF0YVRhYmxlLmdldENvbHVtbkxhYmVsKGkpLmluY2x1ZGVzKCdUZXN0JykpIHtcbiAgICAgICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5zZXJpZXNbaSAtIDFdID0gKFxuICAgICAgICAgIHsgdHlwZTogJ2xpbmUnLCBjb2xvcjogJ2JsYWNrJyB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zY3JlZW5QbG90T3B0aW9ucy5oZWlnaHQgPSBkYXRhLlZpZXdwb3J0UGl4ZWxzWzFdO1xuICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMud2lkdGggPSBkYXRhLlZpZXdwb3J0UGl4ZWxzWzBdO1xuICAgIHRoaXMuc2NyZWVuUGxvdE9wdGlvbnMuaEF4aXMgPSB7XG4gICAgICB0aXRsZTogJ1ggcG9zaXRpb24gKHB4KScsXG4gICAgICB2aWV3V2luZG93OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiBkYXRhLlZpZXdwb3J0UGl4ZWxzWzBdXG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNjcmVlblBsb3RPcHRpb25zLnZBeGlzID0ge1xuICAgICAgdGl0bGU6ICdZIHBvc2l0aW9uIChweCknLFxuICAgICAgdmlld1dpbmRvdzoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogZGF0YS5WaWV3cG9ydFBpeGVsc1sxXVxuICAgICAgfVxuICAgIH07XG4gICAgaWYgKCF0aGlzLnJlYWx0aW1lUGxvdEFjdGl2ZSkge1xuICAgICAgdGhpcy5zY3JlZW5QbG90LmRyYXcodGhpcy54eVBvc0RhdGFUYWJsZSwgdGhpcy5zY3JlZW5QbG90T3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXREYXRlKGRhdGE6IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGFUYWJsZSwgY29sSWR4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgZm9ybWF0dGVyID0gbmV3IGdvb2dsZS52aXN1YWxpemF0aW9uLkRhdGVGb3JtYXQoe1xuICAgICAgcGF0dGVybjogJ2ggYWEnXG4gICAgfSk7XG4gICAgZm9ybWF0dGVyLmZvcm1hdChkYXRhLCBjb2xJZHgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXROdW1iZXIoZGF0YTogZ29vZ2xlLnZpc3VhbGl6YXRpb24uRGF0YVRhYmxlLCBjb2xJZHg6IG51bWJlcikge1xuICAgIGxldCBmb3JtYXR0ZXIgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uTnVtYmVyRm9ybWF0KHtcbiAgICAgIGZyYWN0aW9uRGlnaXRzOiAyXG4gICAgfSk7XG4gICAgZm9ybWF0dGVyLmZvcm1hdChkYXRhLCBjb2xJZHgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRDb2xvcihkYXRhOiBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUsIGNvbElkeDogbnVtYmVyKSB7XG4gICAgbGV0IGZvcm1hdHRlciA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5Db2xvckZvcm1hdCgpO1xuICAgIGxldCBkeCA9IDEgLyAoY29sb3JNYXBKZXQubGVuZ3RoIC0gMSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvck1hcEpldC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9ybWF0dGVyLmFkZFJhbmdlKGkgKiBkeCwgKGkgKyAxKSAqIGR4LCAnZ3JheScsIGNvbG9yTWFwSmV0W2ldKTtcbiAgICB9XG4gICAgZm9ybWF0dGVyLmZvcm1hdChkYXRhLCBjb2xJZHgpO1xuICB9XG5cblxufSIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCAnZmlyZWJhc2UvZGF0YWJhc2UnO1xuaW1wb3J0IEpTT05FZGl0b3IgZnJvbSAnanNvbmVkaXRvcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuLy8gaW1wb3J0ICdqc29uZWRpdG9yL2Rpc3QvanNvbmVkaXRvci5jc3MnXG4vLyBpbXBvcnQgJy4vanNvbmVkaXRvci5jc3MnO1xuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IENoYXJ0cyB9IGZyb20gJy4vY2hhcnRzJztcbmltcG9ydCB7IEZpbGVUeXBlLCBMaXZlcGxvdERhdGFUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHN0b3JhZ2UgPSBmaXJlYmFzZS5zdG9yYWdlKCk7XG5jb25zdCBzdG9yYWdlUmVmID0gc3RvcmFnZS5yZWYoKTtcbmNvbnN0IHJ0ZGIgPSBmaXJlYmFzZS5kYXRhYmFzZSgpO1xuXG5jb25zdCBEQVRBX1BBVEggPSAnbWt0dXJrZmlsZXMvZGF0YWZpbGVzLydcbmNvbnN0IERBVEFfUkVGID0gc3RvcmFnZVJlZi5jaGlsZChEQVRBX1BBVEgpO1xuY29uc3QgUEFSQU1fUEFUSCA9ICdta3R1cmtmaWxlcy9wYXJhbWV0ZXJmaWxlcy9zdWJqZWN0cy8nO1xuY29uc3QgUEFSQU1fUkVGID0gc3RvcmFnZVJlZi5jaGlsZChQQVJBTV9QQVRIKTtcbmNvbnN0IEFHRU5UU19SRUYgPSBydGRiLnJlZignYWdlbnRzLycpO1xuY29uc3QgdXRpbHMgPSBuZXcgVXRpbHM7XG5cbmV4cG9ydCBjbGFzcyBMaXZlcGxvdCB7XG4gIHB1YmxpYyBmaWxlOiBGaWxlVHlwZTtcbiAgcHVibGljIGVsZW1PYmpzOiBhbnk7XG4gIHB1YmxpYyBlZGl0b3I6IEpTT05FZGl0b3I7XG4gIHB1YmxpYyBjaGFydHM6IENoYXJ0cztcbiAgcHVibGljIHN0cmVhbUFjdGl2ZTogYm9vbGVhbjtcbiAgcHVibGljIGFnZW50Q2xpZW50UmVmOiBmaXJlYmFzZS5kYXRhYmFzZS5SZWZlcmVuY2U7XG5cbiAgY29uc3RydWN0b3IoZWxlbU9iajogYW55KSB7XG4gICAgdGhpcy5lbGVtT2JqcyA9IGVsZW1PYmo7XG4gICAgdGhpcy5maWxlID0ge1xuICAgICAgcGF0aDogREFUQV9QQVRILFxuICAgICAgbGlzdDogW10sXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHZlcjogbnVsbCxcbiAgICAgIGRhdGU6IG51bGwsXG4gICAgICBkYXRhQ2hhbmdlZDogZmFsc2UsXG4gICAgICBmaWxlQ2hhbmdlZDogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLmNoYXJ0cyA9IG5ldyBDaGFydHMoZWxlbU9iaik7XG4gICAgdGhpcy5zdHJlYW1BY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlcXVlc3RSZWFsdGltZUJ0bkFjdGlvbigpO1xuICAgIHRoaXMub25EaXNjb25uZWN0QWN0aW9uKCk7XG4gIH1cblxuICBwdWJsaWMgZmlsZVNlbGVjdGlvbkNoYW5nZWRMaXN0ZW5lcihlbGVtOiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZ0OiBFdmVudCkgPT4ge1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5zdHJlYW1BY3RpdmUpIHtcbiAgICAgICAgbGV0IGFnZW50ID0gdGhpcy5maWxlLmRhdGE/LkFnZW50ITtcbiAgICAgICAgcnRkYi5yZWYoYGRhdGEvJHthZ2VudH1gKS5vZmYoKTtcbiAgICAgICAgdGhpcy5hZ2VudENsaWVudFJlZi5yZW1vdmUoZXJyID0+IHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBSZW1vdmluZyBhZ2VudENsaWVudFJlZjogJHtlcnJ9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHJlYW1BY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmlsZS5uYW1lID0gdGhpcy5maWxlLmxpc3RbcGFyc2VJbnQoZWxlbS52YWx1ZSldLmZ1bGxwYXRoO1xuICAgICAgdGhpcy5maWxlLmZpbGVDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkRpc2Nvbm5lY3RBY3Rpb24oKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIChldnQ6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmFnZW50Q2xpZW50UmVmLm9uRGlzY29ubmVjdCgpLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlcXVlc3RSZWFsdGltZUJ0bkFjdGlvbigpIHtcbiAgICBsZXQgcmVhbHRpbWVCdG4gPSB0aGlzLmVsZW1PYmpzLnJlYWx0aW1lQnRuO1xuICAgIHJlYWx0aW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGV2dDogRXZlbnQpID0+IHtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGV0IGFnZW50ID0gdGhpcy5maWxlLmRhdGE/LkFnZW50ITtcbiAgICAgIGlmICh0aGlzLnN0cmVhbUFjdGl2ZSkge1xuICAgICAgICByZWFsdGltZUJ0bi5pbm5lckhUTUwgPSAnUmVxdWVzdCBSZWFsdGltZSBTdHJlYW0nO1xuICAgICAgICBydGRiLnJlZihgZGF0YS8ke2FnZW50fWApLm9mZigpO1xuICAgICAgICB0aGlzLmFnZW50Q2xpZW50UmVmLnJlbW92ZShlcnIgPT4ge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIFJlbW92aW5nIGFnZW50Q2xpZW50UmVmOiAke2Vycn1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBydGRiLnJlZihgZGF0YS8ke2FnZW50fWApLm9mZigpO1xuICAgICAgICB0aGlzLnN0cmVhbUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVhbHRpbWVCdG4uaW5uZXJIVE1MID0gJ0RlYWN0aXZhdGUgUmVhbHRpbWUgU3RyZWFtJztcbiAgICAgICAgbGV0IGFnZW50Q2xpZW50S2V5ID0gcnRkYi5yZWYoYGFnZW50cy8ke2FnZW50fWApLnB1c2goKS5rZXk7XG4gICAgICAgIHRoaXMuYWdlbnRDbGllbnRSZWYgPSBydGRiLnJlZihgYWdlbnRzLyR7YWdlbnR9LyR7YWdlbnRDbGllbnRLZXl9YCk7XG4gICAgICAgIGlmIChfLmlzU3RyaW5nKGFnZW50Q2xpZW50S2V5KSkge1xuICAgICAgICAgIHJ0ZGIucmVmKGBhZ2VudHMvJHthZ2VudH1gKS51cGRhdGUoe1xuICAgICAgICAgICAgW2FnZW50Q2xpZW50S2V5XTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJ0ZGIucmVmKGBkYXRhLyR7YWdlbnR9YCkub24oJ3ZhbHVlJywgc25hcCA9PiB7XG4gICAgICAgICAgbGV0IGV2ZW50ID0gKFxuICAgICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KCdkYXRhX2Fycml2ZWQnLCB7IGRldGFpbDogc25hcC52YWwoKSB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHJlYW1BY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHBvcHVsYXRlRmlsZUxpc3QoZWxlbTogSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgdXRpbHMuZ2V0RmlsZUxpc3QodGhpcy5maWxlLnBhdGgpO1xuXG4gICAgICBmaWxlTGlzdC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICBsZXQgbmFtZUEgPSBhLm5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgbGV0IG5hbWVCID0gYi5uYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5maWxlLmxpc3QgPSBmaWxlTGlzdDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdC52YWx1ZSA9IGkudG9TdHJpbmcoKTtcbiAgICAgICAgb3B0LmlubmVySFRNTCA9IGZpbGVMaXN0W2ldLm5hbWU7XG4gICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQob3B0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5maWxlLm5hbWUgPSB0aGlzLmZpbGUubGlzdFswXS5mdWxscGF0aDtcbiAgICAgIHRoaXMuZmlsZS5maWxlQ2hhbmdlZCA9IHRydWU7XG4gICAgICBsZXQgcmF3U3RvcmFnZUZpbGUgPSBhd2FpdCB1dGlscy5nZXRTdG9yYWdlRmlsZSh0aGlzLmZpbGUubmFtZSk7XG4gICAgICBjb25zb2xlLmxvZygncmF3RmlsZScsIHJhd1N0b3JhZ2VGaWxlKTtcbiAgICAgIFxuICAgICAgdGhpcy5wcm9jZXNzRGF0YShyYXdTdG9yYWdlRmlsZSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRVJST1IgI2ZpbGUtbGlzdDonLCBlcnJvcik7XG4gICAgfVxuXG5cbiAgfVxuXG4gIHByaXZhdGUgZmxhdHRlbkRhdGEoZGF0YTogYW55KSB7XG5cbiAgICBsZXQgdG1wOiBhbnkgPSB7fTtcblxuICAgIGZvciAobGV0IG91dGVyS2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KG91dGVyS2V5KSkge1xuICAgICAgICBmb3IgKGxldCBpbm5lcktleSBpbiBkYXRhW291dGVyS2V5XSkge1xuICAgICAgICAgIGlmIChkYXRhW291dGVyS2V5XS5oYXNPd25Qcm9wZXJ0eShpbm5lcktleSkpIHtcbiAgICAgICAgICAgIHRtcFtpbm5lcktleV0gPSBkYXRhW291dGVyS2V5XVtpbm5lcktleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRtcDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcHJvY2Vzc0RhdGEoZGF0YTogYW55KSB7XG5cbiAgICB0aGlzLmZpbGUuZGF0YSA9IHRoaXMuZmxhdHRlbkRhdGEoZGF0YSk7XG4gICAgdGhpcy5sb2FkRGF0YVRvRWRpdG9yKHRoaXMuZmlsZS5kYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGUuZGF0YSk7XG5cbiAgICBsZXQgbWV0YWRhdGEgPSBhd2FpdCB1dGlscy5nZXRTdG9yYWdlRmlsZU1ldGFkYXRhKHRoaXMuZmlsZS5uYW1lKTtcbiAgICBjb25zb2xlLmxvZygnU3VjY2VzcyEgTG9hZGVkIEZpbGUgU2l6ZTonLCBtZXRhZGF0YS5zaXplIC8gMTAwMCwgJ0tCJyk7XG4gICAgdGhpcy5maWxlLnZlciA9IG1ldGFkYXRhLmdlbmVyYXRpb247XG4gICAgdGhpcy5maWxlLmRhdGVTYXZlZCA9IG5ldyBEYXRlKG1ldGFkYXRhLnVwZGF0ZWQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZS5kYXRlU2F2ZWQpO1xuXG4gICAgLy8gdGhpcy5maWxlLmRhdGEuQ3VycmVudERhdGUgPSAoXG4gICAgLy8gICBuZXcgRGF0ZSh0aGlzLmZpbGUuZGF0YS5DdXJyZW50RGF0ZSkudmFsdWVPZigpXG4gICAgLy8gKTtcblxuICAgIGlmICh0aGlzLmZpbGUuZmlsZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhcnRzLmluaXRpYWxpemVDaGFydERhdGEodGhpcy5maWxlLCB7c3RyZWFtQWN0aXZlOiB0aGlzLnN0cmVhbUFjdGl2ZX0pO1xuICAgICAgdGhpcy5jaGVja0ZpbGVTdGF0dXMoKTtcbiAgICAgIHRoaXMuZmlsZS5maWxlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5maWxlLmRhdGFDaGFuZ2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbGUuZGF0YUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhcnRzLnVwZGF0ZVBsb3RzKHRoaXMuZmlsZSwge3N0cmVhbUFjdGl2ZTogdGhpcy5zdHJlYW1BY3RpdmV9KTtcbiAgICAgIHRoaXMuZmlsZS5kYXRhQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5jaGVja0ZpbGVTdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0dXBFZGl0b3IoZWxlbTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLmVkaXRvciA9IG5ldyBKU09ORWRpdG9yKGVsZW0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRGF0YVRvRWRpdG9yKGRhdGE6IGFueSkge1xuICAgIGlmICh0aGlzLmZpbGUuZmlsZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuZWRpdG9yLnNldChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lZGl0b3IudXBkYXRlKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY2hlY2tGaWxlU3RhdHVzKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgbWV0YWRhdGEgPSBhd2FpdCB1dGlscy5nZXRTdG9yYWdlRmlsZU1ldGFkYXRhKHRoaXMuZmlsZS5uYW1lKTtcblxuICAgICAgaWYgKHRoaXMuZmlsZS52ZXIgIT0gbWV0YWRhdGEuZ2VuZXJhdGlvbikge1xuICAgICAgICB0aGlzLmZpbGUudmVyID0gbWV0YWRhdGEuZ2VuZXJhdGlvbjtcbiAgICAgICAgdGhpcy5maWxlLmRhdGVTYXZlZCA9IG5ldyBEYXRlKG1ldGFkYXRhLnVwZGF0ZWQpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGUuZGF0ZVNhdmVkKTtcbiAgICAgICAgdGhpcy5maWxlLmRhdGFDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZpbGUgd2FzIHVwZGF0ZWQgdmVyPScgKyB0aGlzLmZpbGUudmVyKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5maWxlLmRhdGFDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZpbGUuZmlsZUNoYW5nZWQgPT0gdHJ1ZSB8fCB0aGlzLmZpbGUuZGF0YUNoYW5nZWQgPT0gdHJ1ZSkge1xuICAgICAgICBsZXQgcmF3U3RvcmFnZUZpbGUgPSBhd2FpdCB1dGlscy5nZXRTdG9yYWdlRmlsZSh0aGlzLmZpbGUubmFtZSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyYXdGaWxlJywgcmF3U3RvcmFnZUZpbGUpO1xuICAgICAgICB0aGlzLnByb2Nlc3NEYXRhKHJhd1N0b3JhZ2VGaWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2hlY2tGaWxlU3RhdHVzKClcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2NoZWNrRmlsZVN0YXR1cyBFcnJvcjonLCBlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTsgLy8gd2h5IG5lZWRlZFxuICB9IFxuXG59XG4iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcydcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lBMGZidjJWcUUtQWZGNlZfbnhTU1hDRXFhVGxCbFpuVElcIixcbiAgYXV0aERvbWFpbjogXCJzYW5kYm94LWNlMmM1LmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3NhbmRib3gtY2UyYzUuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcInNhbmRib3gtY2UyYzVcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJzYW5kYm94LWNlMmM1LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwMDM3MTk4ODc5NDRcIixcbiAgY2xpZW50SWQ6IFwiMTAwMzcxOTg4Nzk0NC1ybGMwNmNqZWNxcnA5Zmd2bXZvNTZ2cW9wMW90bTlodC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG59O1xuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbmltcG9ydCB7IExpdmVwbG90IH0gZnJvbSAnLi9saXZlcGxvdCc7XG5cbmxldCBmaWxlTGlzdFNlbGVjdG9yID0gKFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsZS1saXN0JykgYXMgSFRNTFNlbGVjdEVsZW1lbnRcbik7XG5cbmxldCBlZGl0b3JEaXYgPSAoXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0b3InKSBhcyBIVE1MRGl2RWxlbWVudFxuKTtcblxubGV0IGVsZW1PYmogPSB7XG4gIHBlcmZEaXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJmb3JtYW5jZS1kYXNoYm9hcmQnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgcGVyZlBsb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJmb3JtYW5jZS1wbG90JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHBlcmZGaWx0ZXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZXJmb3JtYW5jZS1maWx0ZXInKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgdHJpYWxEaXY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlhbC1kYXNoYm9hcmQnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgdHJpYWxQbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJpYWwtcGxvdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICB0cmlhbEZpbHRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyaWFsLWZpbHRlcicpIGFzIEhUTUxEaXZFbGVtZW50LFxuICBzY3JlZW5QbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NyZWVuLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgLy8gcmVhbHRpbWVQbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVhbHRpbWUtcGxvdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICByeG5QbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVhY3Rpb24tcGxvdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICBjaG9pY2VQbG90OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hvaWNlLXBsb3QnKSBhcyBIVE1MRGl2RWxlbWVudCxcbiAgb2JqUGVyZlBsb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvYmotcGVyZi1wbG90JykgYXMgSFRNTERpdkVsZW1lbnQsXG4gIHJld2FyZFBsb3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXdhcmQtcGxvdCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICBwZXJmVml0YWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVyZm9ybWFuY2Utdml0YWxzJykgYXMgSFRNTFNwYW5FbGVtZW50LFxuICByZmlkVml0YWxzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmZpZC12aXRhbHMnKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gIGJhdHRlcnlWaXRhbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYXR0ZXJ5LXZpdGFscycpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgdHJpYWxWaXRhbHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0cmlhbC12aXRhbHMnKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gIGZpeFN0ZGV2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZml4YXRpb24tc3RkZXYnKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gIHRhclplcm9TdGRldjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhcmdldDAtc3RkZXYnKSBhcyBIVE1MU3BhbkVsZW1lbnQsXG4gIHRhck9uZVN0ZGV2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFyZ2V0MS1zdGRldicpIGFzIEhUTUxTcGFuRWxlbWVudCxcbiAgc2RUZXh0RGl2OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG91Y2gtc2QtdGV4dCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICByZWFsdGltZUJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlcXVlc3QtcmVhbHRpbWUnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCxcbn07XG5cbmNvbnN0IGxwID0gbmV3IExpdmVwbG90KGVsZW1PYmopO1xubHAuc2V0dXBFZGl0b3IoZWRpdG9yRGl2KTtcbmxwLmZpbGVTZWxlY3Rpb25DaGFuZ2VkTGlzdGVuZXIoZmlsZUxpc3RTZWxlY3Rvcik7XG5scC5wb3B1bGF0ZUZpbGVMaXN0KGZpbGVMaXN0U2VsZWN0b3IpO1xuXG5cblxuXG5cblxuXG4vLyBmaWxlTGlzdFNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2dCA9PiB7XG4vLyAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4vLyAgIGNvbnNvbGUubG9nKCdOZXcgRmlsZSEnKTtcbi8vICAgZmlsZS5uYW1lID0gZmlsZS5maWxlTGlzdFtwYXJzZUludChmaWxlTGlzdFNlbGVjdG9yLnZhbHVlKV0uZnVsbHBhdGg7XG4vLyAgIGZpbGUuZmlsZUNoYW5nZWQgPSB0cnVlO1xuLy8gICBjb25zb2xlLmxvZygnZmlsZSBuYW1lOicsIGZpbGUubmFtZSk7XG4vLyAgIGNvbnNvbGUubG9nKCdmaWxlIHBhdGgnLCBmaWxlLnBhdGgpO1xuLy8gfSk7XG5cbi8vIGxldCBmaWxlOiBhbnkgPSB7XG4vLyAgIHBhdGg6IERBVEFfUEFUSCxcbi8vICAgbGlzdDogW10sXG4vLyAgIGZpbGVMaXN0OiBbXSxcbi8vICAgbmFtZTogJycsXG4vLyAgIGRhdGE6IG51bGwsXG4vLyAgIHZlcjogbnVsbCxcbi8vICAgZGF0ZTogbnVsbCxcbi8vICAgZGF0ZUNoYW5nZWQ6IGZhbHNlLFxuLy8gICBmaWxlQ2hhbmdlZDogZmFsc2Vcbi8vIH07XG5cbi8vIGNvbnNvbGUubG9nKCdoZWxsbyBoZWN0b3InKTtcblxuXG4vLyBhc3luYyBmdW5jdGlvbiBwb3B1bGF0ZURyb3Bkb3duTWVudSgpIHtcbi8vICAgdHJ5IHtcbi8vICAgICBsZXQgZmlsZUxpc3QgPSBhd2FpdCB1dGlscy5nZXRGaWxlTGlzdChmaWxlLnBhdGgpO1xuICAgIFxuXG4vLyAgICAgZmlsZUxpc3Quc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbi8vICAgICAgIGxldCBuYW1lQSA9IGEubmFtZS50b1VwcGVyQ2FzZSgpO1xuLy8gICAgICAgbGV0IG5hbWVCID0gYi5uYW1lLnRvVXBwZXJDYXNlKCk7XG5cbi8vICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4vLyAgICAgICAgIHJldHVybiAtMTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbi8vICAgICAgICAgcmV0dXJuIDE7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIHJldHVybiAwO1xuLy8gICAgIH0pO1xuXG4vLyAgICAgZmlsZS5maWxlTGlzdCA9IGZpbGVMaXN0O1xuICAgIFxuXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5sZW5ndGg7IGkrKykge1xuLy8gICAgICAgbGV0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuLy8gICAgICAgb3B0LnZhbHVlID0gaS50b1N0cmluZygpO1xuLy8gICAgICAgb3B0LmlubmVySFRNTCA9IGZpbGVMaXN0W2ldLm5hbWU7XG4vLyAgICAgICBmaWxlTGlzdFNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdCk7XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIGZpbGUubmFtZSA9IGZpbGUuZmlsZUxpc3RbMF0uZnVsbHBhdGg7XG4vLyAgICAgZmlsZS5maWxlQ2hhbmdlZCA9IHRydWU7XG4gIFxuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgIGNvbnNvbGUuZXJyb3IoJ0VSUk9SICNmaWxlLWxpc3Q6JywgZXJyb3IpO1xuLy8gICB9XG4vLyB9XG5cbi8vIHBvcHVsYXRlRHJvcGRvd25NZW51KCk7XG5cblxuLy8gYXN5bmMgZnVuY3Rpb24gbG9hZEFuZFJlbmRlckVkaXRvcihmaWxlUGF0aDogc3RyaW5nKSB7XG4vLyAgIGxldCBkYXRhRmlsZSA9IHV0aWxzLmdldFN0b3JhZ2VGaWxlKGZpbGVQYXRoKTtcbi8vIH1cblxubGV0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5wcm92aWRlci5hZGRTY29wZSgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jb250YWN0cy5yZWFkb25seScpO1xuZmlyZWJhc2UuYXV0aCgpLmdldFJlZGlyZWN0UmVzdWx0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgaWYgKHJlc3VsdC51c2VyKSB7XG4gICAgLy8gVXNlciBqdXN0IHNpZ25lZCBpbi4geW91IGNhbiBnZXQgdGhlIHJlc3VsdC5jcmVkZW50aWFsLlxuXHRjb25zb2xlLmxvZygnU2lnbi1JbiBSZWRpcmVjdCBSZXN1bHQsIFVTRVIgJyArIHJlc3VsdC51c2VyLmVtYWlsICsgJyBpcyBzaWduZWQgaW4nKVxuICB9XG4gIGVsc2UgaWYgKGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcikge1xuICAgIC8vIFVzZXIgYWxyZWFkeSBzaWduZWQgaW4uXG5cdGNvbnNvbGUubG9nKCdTaWduLUluIFJlZGlyZWN0IFJlc3VsdCwgVVNFUiBpcyBzaWduZWQgaW4nKVxuICB9XG4gIGVsc2Uge1xuICAgIC8vIE5vIHVzZXIgc2lnbmVkIGluLCB1cGRhdGUgeW91ciBVSSwgc2hvdyB0aGUgcmVkaXJlY3Qgc2lnbi1pbiBzY3JlZW4uXG5cdGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUmVkaXJlY3QocHJvdmlkZXIpXG4gIH1cbn0pOyIsImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuaW1wb3J0ICdmaXJlYmFzZS9zdG9yYWdlJztcbmltcG9ydCAnZmlyZWJhc2UvZGF0YWJhc2UnO1xuXG5jb25zdCBzdG9yYWdlID0gZmlyZWJhc2Uuc3RvcmFnZSgpO1xuY29uc3Qgc3RvcmFnZVJlZiA9IHN0b3JhZ2UucmVmKCk7XG5cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwdWJsaWMgYXN5bmMgZ2V0RmlsZUxpc3QocGF0aDogc3RyaW5nLCBleHQ/OiBzdHJpbmcpIHtcbiAgICBsZXQgZmlsZUxpc3QgPSBhd2FpdCBzdG9yYWdlUmVmLmNoaWxkKHBhdGgpLmxpc3RBbGwoKTtcbiAgICAvKiBvbmx5IGtlZXAgZmlsZXMgd2l0aGluIHRoZSBsYXN0IDIgeWVhcnMqL1xuICAgIGxldCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCBmaWxlczogYW55ID0gW107XG5cbiAgICBmb3IgKGxldCBpdGVtIG9mIGZpbGVMaXN0LnByZWZpeGVzKSB7XG4gICAgICBsZXQgc3ViRmlsZUxpc3QgPSAoXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0RmlsZUxpc3QocGF0aCArIGl0ZW0ubmFtZSArICcvJywgZXh0KVxuICAgICAgKTtcbiAgICAgIGZpbGVzID0gWy4uLmZpbGVzLCAuLi5zdWJGaWxlTGlzdF07XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlTGlzdC5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHR5cGVvZihleHQpID09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChmaWxlTGlzdC5pdGVtc1tpXS5uYW1lLmVuZHNXaXRoKGV4dCkpIHsgLy8gaWYgZmlsZSBleHRlbnNpb24gaXMgY29ycmVjdFxuICAgICAgICAgIGZpbGVzLnB1c2goe1xuICAgICAgICAgICAgZnVsbHBhdGg6IGZpbGVMaXN0Lml0ZW1zW2ldLmZ1bGxQYXRoLFxuICAgICAgICAgICAgbmFtZTogZmlsZUxpc3QuaXRlbXNbaV0ubmFtZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGZpbGVMaXN0Lml0ZW1zW2ldLm5hbWUuc2xpY2UoMCwgNCkpID49IHllYXIgLSAxKSB7XG4gICAgICAgIGZpbGVzLnB1c2goe1xuICAgICAgICAgIGZ1bGxwYXRoOiBmaWxlTGlzdC5pdGVtc1tpXS5mdWxsUGF0aCxcbiAgICAgICAgICBuYW1lOiBmaWxlTGlzdC5pdGVtc1tpXS5uYW1lXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmaWxlcztcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRTdG9yYWdlRmlsZShwYXRoOiBzdHJpbmcpIHtcbiAgICBsZXQgZmlsZVJlZiA9IHN0b3JhZ2VSZWYuY2hpbGQocGF0aCk7XG4gICAgY29uc29sZS5sb2coJ2ZpbGVSZWY6JywgZmlsZVJlZik7XG4gICAgbGV0IGZpbGUgPSBhd2FpdCBzdG9yYWdlUmVmLmNoaWxkKHBhdGgpLmdldERvd25sb2FkVVJMKCkudGhlbihhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgR2V0dGluZyBVUkw6JywgZSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ2ZpbGU6JywgZmlsZSk7XG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0U3RvcmFnZUZpbGVNZXRhZGF0YShwYXRoOiBzdHJpbmcpIHtcbiAgICBsZXQgZmlsZVJlZiA9IHN0b3JhZ2VSZWYuY2hpbGQocGF0aCk7XG4gICAgbGV0IG1ldGFkYXRhID0gYXdhaXQgZmlsZVJlZi5nZXRNZXRhZGF0YSgpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBzbW9vdGgoZGF0YTogYW55W10sIG46IG51bWJlcikge1xuICAgIGxldCBzbW9vdGhlZERhdGEgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpIDwgbiAtIDEpIHtcbiAgICAgICAgbGV0IHRtcCA9IGRhdGEuc2xpY2UoMCwgaSArIDEpO1xuICAgICAgICBzbW9vdGhlZERhdGFbaV0gPSB0bXAucmVkdWNlKChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiBhICsgYjtcbiAgICAgICAgfSk7XG4gICAgICAgIHNtb290aGVkRGF0YVtpXSAvPSAoaSArIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRtcCA9IGRhdGEuc2xpY2UoaSAtIG4gKyAxLCBpICsgMSk7XG4gICAgICAgIHNtb290aGVkRGF0YVtpXSA9IHRtcC5yZWR1Y2UoKGE6IG51bWJlciwgYjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgICAgICB9KTtcbiAgICAgICAgc21vb3RoZWREYXRhW2ldIC89IG47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzbW9vdGhlZERhdGE7XG4gIH1cblxuICBwdWJsaWMgY2FsY0Rpc3RhbmNlKGE6IG51bWJlciwgYjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIE1hdGgucG93KE1hdGguYWJzKGEgLSBiKSwgMik7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG1vZHVsZSk7XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgJ2V4cG9ydHMnLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRzZXQ6ICgpID0+IHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfY3NzVy00MzI0YjFcIl0sXG5cdFtcIi4vc3JjL3V0aWxzLnRzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2Nzc1ctNDMyNGIxXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gKCkgPT4ge1xuXG59O1xuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0fVxuXHRjaHVua0xvYWRpbmdHbG9iYWwgPSBjaHVua0xvYWRpbmdHbG9iYWwuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rTG9hZGluZ0dsb2JhbC5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtMb2FkaW5nR2xvYmFsW2ldKTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWUsIGV4ZWN1dGVNb2R1bGVzXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rbGl2ZXBsb3QyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2xpdmVwbG90MlwiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=