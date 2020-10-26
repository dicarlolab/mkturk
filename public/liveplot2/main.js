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


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nhtml, body {\n  font-family: 'Roboto', 'Helvetica', sans-serif;\n  margin: 0;\n  padding: 0;\n}\n.mdl-demo .mdl-layout__header-row {\n  padding-left: 40px;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__header-row h3 {\n  font-size: inherit;\n}\n.mdl-demo .mdl-layout__tab-bar-button {\n  display: none;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__tab-bar .mdl-button {\n  display: none;\n}\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar,\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar-container {\n  overflow: visible;\n}\n.mdl-demo .mdl-layout__tab-bar-container {\n  height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar {\n  padding: 0;\n  padding-left: 16px;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab {\n  height: 64px;\n  line-height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab.is-active::after {\n  background-color: white;\n  height: 4px;\n}\n.mdl-demo main > .mdl-layout__tab-panel {\n  padding: 8px;\n  padding-top: 24px;\n}\n.mdl-demo .mdl-card {\n  height: auto;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .mdl-card > * {\n  height: auto;\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text {\n  margin: 40px;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 0;\n  color: inherit;\n  width: calc(100% - 80px);\n}\n.mdl-demo.mdl-demo .mdl-card__supporting-text h4 {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.mdl-demo .mdl-card__actions {\n  margin: 0;\n  padding: 4px 40px;\n  color: inherit;\n}\n.mdl-demo .mdl-card__actions a {\n  color: #00BCD4;\n  margin: 0;\n}\n.mdl-demo .mdl-card__actions a:hover,\n.mdl-demo .mdl-card__actions a:active {\n  color: inherit;\n  background-color: transparent;\n}\n.mdl-demo .mdl-card__supporting-text + .mdl-card__actions {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mdl-demo #add {\n  position: absolute;\n  right: 40px;\n  top: 36px;\n  z-index: 999;\n}\n\n.mdl-demo .mdl-layout__content section:not(:last-of-type) {\n  position: relative;\n  margin-bottom: 24px;\n}\n.mdl-demo section.section--center {\n  max-width: 1290px;\n}\n.mdl-demo #features section.section--center {\n  max-width: 620px;\n}\n.mdl-demo section > header{\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mdl-demo section > .section__play-btn {\n  min-height: 200px;\n}\n.mdl-demo section > header > .material-icons {\n  font-size: 3rem;\n}\n.mdl-demo section > button {\n  position: absolute;\n  z-index: 99;\n  top: 8px;\n  right: 8px;\n}\n.mdl-demo section .section__circle {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-flex-shrink: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1;\n}\n.mdl-demo section .section__text {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  padding-top: 8px;\n}\n.mdl-demo section .section__text h5 {\n  font-size: inherit;\n  margin: 0;\n  margin-bottom: 0.5em;\n}\n.mdl-demo section .section__text a {\n  text-decoration: none;\n}\n.mdl-demo section .section__circle-container > .section__circle-container__circle {\n  width: 64px;\n  height: 64px;\n  border-radius: 32px;\n  margin: 8px 0;\n}\n.mdl-demo section.section--footer .section__circle--big {\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  margin: 8px 32px;\n}\n.mdl-demo .is-small-screen section.section--footer .section__circle--big {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  margin: 8px 16px;\n}\n.mdl-demo section.section--footer {\n  padding: 64px 0;\n  margin: 0 -8px -8px -8px;\n}\n.mdl-demo section.section--center .section__text:not(:last-child) {\n  border-bottom: 1px solid rgba(0,0,0,.13);\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text > h3:first-child {\n  margin-bottom: 24px;\n}\n.mdl-demo .mdl-layout__tab-panel:not(#overview) {\n  background-color: white;\n}\n.mdl-demo #features section {\n  margin-bottom: 72px;\n}\n.mdl-demo #features h4, #features h5 {\n  margin-bottom: 16px;\n}\n.mdl-demo .toc {\n  border-left: 4px solid #C1EEF4;\n  margin: 24px;\n  padding: 0;\n  padding-left: 8px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .toc h4 {\n  font-size: 0.9rem;\n  margin-top: 0;\n}\n.mdl-demo .toc a {\n  color: #4DD0E1;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 28px;\n  display: block;\n}\n.mdl-demo .mdl-menu__container {\n  z-index: 99;\n}\n", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;EAcE;;AAEF;EACE,8CAA8C;EAC9C,SAAS;EACT,UAAU;AACZ;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;;EAEE,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,uBAAuB;EACvB,WAAW;AACb;AACA;EACE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,YAAY;EACZ,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,8BAA8B;MAC1B,0BAA0B;UACtB,sBAAsB;AAChC;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,oBAAoB;MAChB,oBAAoB;UAChB,YAAY;EACpB,UAAU;EACV,cAAc;EACd,wBAAwB;AAC1B;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,SAAS;EACT,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,cAAc;EACd,SAAS;AACX;AACA;;EAEE,cAAc;EACd,6BAA6B;AAC/B;AACA;EACE,yCAAyC;AAC3C;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,2BAA2B;MACvB,sBAAsB;UAClB,mBAAmB;EAC3B,+BAA+B;MAC3B,qBAAqB;UACjB,uBAAuB;AACjC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,UAAU;AACZ;AACA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,2BAA2B;MACvB,sBAAsB;UAClB,mBAAmB;EAC3B,mCAAmC;MAC/B,oBAAoB;UAChB,2BAA2B;EACnC,oBAAoB;MAChB,oBAAoB;UAChB,YAAY;EACpB,sBAAsB;MAClB,oBAAoB;UAChB,cAAc;AACxB;AACA;EACE,oBAAoB;MAChB,oBAAoB;UAChB,YAAY;EACpB,sBAAsB;MAClB,oBAAoB;UAChB,cAAc;EACtB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,oBAAoB;AACtB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,wBAAwB;AAC1B;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,YAAY;EACZ,UAAU;EACV,iBAAiB;EACjB,qBAAqB;EACrB,oBAAoB;EACpB,aAAa;EACb,8BAA8B;MAC1B,0BAA0B;UACtB,sBAAsB;AAChC;AACA;EACE,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,WAAW;AACb","sourcesContent":["/**\n * Copyright 2015 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nhtml, body {\n  font-family: 'Roboto', 'Helvetica', sans-serif;\n  margin: 0;\n  padding: 0;\n}\n.mdl-demo .mdl-layout__header-row {\n  padding-left: 40px;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__header-row h3 {\n  font-size: inherit;\n}\n.mdl-demo .mdl-layout__tab-bar-button {\n  display: none;\n}\n.mdl-demo .mdl-layout.is-small-screen .mdl-layout__tab-bar .mdl-button {\n  display: none;\n}\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar,\n.mdl-demo .mdl-layout:not(.is-small-screen) .mdl-layout__tab-bar-container {\n  overflow: visible;\n}\n.mdl-demo .mdl-layout__tab-bar-container {\n  height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar {\n  padding: 0;\n  padding-left: 16px;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab {\n  height: 64px;\n  line-height: 64px;\n}\n.mdl-demo .mdl-layout__tab-bar .mdl-layout__tab.is-active::after {\n  background-color: white;\n  height: 4px;\n}\n.mdl-demo main > .mdl-layout__tab-panel {\n  padding: 8px;\n  padding-top: 24px;\n}\n.mdl-demo .mdl-card {\n  height: auto;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .mdl-card > * {\n  height: auto;\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text {\n  margin: 40px;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  padding: 0;\n  color: inherit;\n  width: calc(100% - 80px);\n}\n.mdl-demo.mdl-demo .mdl-card__supporting-text h4 {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\n.mdl-demo .mdl-card__actions {\n  margin: 0;\n  padding: 4px 40px;\n  color: inherit;\n}\n.mdl-demo .mdl-card__actions a {\n  color: #00BCD4;\n  margin: 0;\n}\n.mdl-demo .mdl-card__actions a:hover,\n.mdl-demo .mdl-card__actions a:active {\n  color: inherit;\n  background-color: transparent;\n}\n.mdl-demo .mdl-card__supporting-text + .mdl-card__actions {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mdl-demo #add {\n  position: absolute;\n  right: 40px;\n  top: 36px;\n  z-index: 999;\n}\n\n.mdl-demo .mdl-layout__content section:not(:last-of-type) {\n  position: relative;\n  margin-bottom: 24px;\n}\n.mdl-demo section.section--center {\n  max-width: 1290px;\n}\n.mdl-demo #features section.section--center {\n  max-width: 620px;\n}\n.mdl-demo section > header{\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.mdl-demo section > .section__play-btn {\n  min-height: 200px;\n}\n.mdl-demo section > header > .material-icons {\n  font-size: 3rem;\n}\n.mdl-demo section > button {\n  position: absolute;\n  z-index: 99;\n  top: 8px;\n  right: 8px;\n}\n.mdl-demo section .section__circle {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-flex-grow: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-flex-shrink: 1;\n      -ms-flex-negative: 1;\n          flex-shrink: 1;\n}\n.mdl-demo section .section__text {\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  padding-top: 8px;\n}\n.mdl-demo section .section__text h5 {\n  font-size: inherit;\n  margin: 0;\n  margin-bottom: 0.5em;\n}\n.mdl-demo section .section__text a {\n  text-decoration: none;\n}\n.mdl-demo section .section__circle-container > .section__circle-container__circle {\n  width: 64px;\n  height: 64px;\n  border-radius: 32px;\n  margin: 8px 0;\n}\n.mdl-demo section.section--footer .section__circle--big {\n  width: 100px;\n  height: 100px;\n  border-radius: 50px;\n  margin: 8px 32px;\n}\n.mdl-demo .is-small-screen section.section--footer .section__circle--big {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  margin: 8px 16px;\n}\n.mdl-demo section.section--footer {\n  padding: 64px 0;\n  margin: 0 -8px -8px -8px;\n}\n.mdl-demo section.section--center .section__text:not(:last-child) {\n  border-bottom: 1px solid rgba(0,0,0,.13);\n}\n.mdl-demo .mdl-card .mdl-card__supporting-text > h3:first-child {\n  margin-bottom: 24px;\n}\n.mdl-demo .mdl-layout__tab-panel:not(#overview) {\n  background-color: white;\n}\n.mdl-demo #features section {\n  margin-bottom: 72px;\n}\n.mdl-demo #features h4, #features h5 {\n  margin-bottom: 16px;\n}\n.mdl-demo .toc {\n  border-left: 4px solid #C1EEF4;\n  margin: 24px;\n  padding: 0;\n  padding-left: 8px;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.mdl-demo .toc h4 {\n  font-size: 0.9rem;\n  margin-top: 0;\n}\n.mdl-demo .toc a {\n  color: #4DD0E1;\n  text-decoration: none;\n  font-size: 16px;\n  line-height: 28px;\n  display: block;\n}\n.mdl-demo .mdl-menu__container {\n  z-index: 99;\n}\n"],"sourceRoot":""}]);
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

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
const app_1 = tslib_1.__importDefault(__webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js"));
__webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
__webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");
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
const utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
const storage = app_1.default.storage();
const storageRef = storage.ref();
const utils = new utils_1.Utils();
const DATA_PATH = 'mkturkfiles/datafiles/';
const dataRef = storageRef.child(DATA_PATH);
const PARAM_PATH = 'mkturkfiles/parameterfiles/subjects/';
const paramRef = storageRef.child(PARAM_PATH);
let fileListSelector = document.querySelector('#file-list');
fileListSelector.addEventListener('change', evt => {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('New File!');
    file.name = file.fileList[parseInt(fileListSelector.value)].fullpath;
    file.fileChanged = true;
    console.log('file name:', file.name);
    console.log('file path', file.path);
});
let file = {
    path: DATA_PATH,
    list: [],
    fileList: [],
    name: '',
    data: null,
    ver: null,
    date: null,
    dateChanged: false,
    fileChanged: false
};
console.log('hello hector');
async function populateDropdownMenu() {
    try {
        let fileList = await utils.getFileList(file.path);
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
        file.fileList = fileList;
        for (let i = 0; i < fileList.length; i++) {
            let opt = document.createElement('option');
            opt.value = i.toString();
            opt.innerHTML = fileList[i].name;
            fileListSelector.appendChild(opt);
        }
        file.name = file.fileList[0].fullpath;
        file.fileChanged = true;
    }
    catch (error) {
        console.error('ERROR #file-list:', error);
    }
}
populateDropdownMenu();
async function loadAndRenderEditor(filePath) {
    let dataFile = utils.getStorageFile(filePath);
}
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
const app_1 = tslib_1.__importDefault(__webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js"));
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
        for (let i = 0; i < fileList.items.length - 1; i++) {
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
        let url = await fileRef.getDownloadURL().catch(e => {
            console.error('Error Getting URL');
        });
        let response = await fetch(url);
        let file = await response.json();
        return file;
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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 			["./src/main.ts","vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-97b81b"],
/******/ 			["./src/utils.ts","vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-97b81b"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXZlcGxvdDIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9saXZlcGxvdDIvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2xpdmVwbG90Mi8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL2xpdmVwbG90Mi8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9saXZlcGxvdDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xpdmVwbG90Mi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGl2ZXBsb3QyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2xpdmVwbG90Mi93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwyS0FBMkssMGdCQUEwZ0IsbURBQW1ELGNBQWMsZUFBZSxHQUFHLHFDQUFxQyx1QkFBdUIsR0FBRyxvRUFBb0UsdUJBQXVCLEdBQUcseUNBQXlDLGtCQUFrQixHQUFHLDBFQUEwRSxrQkFBa0IsR0FBRyxpSkFBaUosc0JBQXNCLEdBQUcsNENBQTRDLGlCQUFpQixHQUFHLGtDQUFrQyxlQUFlLHVCQUF1QiwyQkFBMkIsaUJBQWlC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N0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLCtCQUErQjtXQUM5QztXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSwrQzs7OztVQzNGQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxuICpcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXFxcIkxpY2Vuc2VcXFwiKTtcXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXFxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XFxuICpcXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcbiAqXFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFxcXCJBUyBJU1xcXCIgQkFTSVMsXFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXFxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxcbiAqL1xcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9faGVhZGVyLXJvdyB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dC5pcy1zbWFsbC1zY3JlZW4gLm1kbC1sYXlvdXRfX2hlYWRlci1yb3cgaDMge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXItYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dC5pcy1zbWFsbC1zY3JlZW4gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0Om5vdCguaXMtc21hbGwtc2NyZWVuKSAubWRsLWxheW91dF9fdGFiLWJhcixcXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQ6bm90KC5pcy1zbWFsbC1zY3JlZW4pIC5tZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDY0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1sYXlvdXRfX3RhYiB7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBsaW5lLWhlaWdodDogNjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyIC5tZGwtbGF5b3V0X190YWIuaXMtYWN0aXZlOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNHB4O1xcbn1cXG4ubWRsLWRlbW8gbWFpbiA+IC5tZGwtbGF5b3V0X190YWItcGFuZWwge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcGFkZGluZy10b3A6IDI0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkID4gKiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQgLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQge1xcbiAgbWFyZ2luOiA0MHB4O1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcXG59XFxuLm1kbC1kZW1vLm1kbC1kZW1vIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IGg0IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCA0MHB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYSB7XFxuICBjb2xvcjogIzAwQkNENDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyBhOmhvdmVyLFxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYTphY3RpdmUge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0ICsgLm1kbC1jYXJkX19hY3Rpb25zIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWRsLWRlbW8gI2FkZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNDBweDtcXG4gIHRvcDogMzZweDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X19jb250ZW50IHNlY3Rpb246bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciB7XFxuICBtYXgtd2lkdGg6IDEyOTBweDtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciB7XFxuICBtYXgtd2lkdGg6IDYyMHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGhlYWRlcntcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IC5zZWN0aW9uX19wbGF5LWJ0biB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gPiBoZWFkZXIgPiAubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogOHB4O1xcbiAgcmlnaHQ6IDhweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX2NpcmNsZSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAtd2Via2l0LWZsZXgtZ3JvdzogMDtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMDtcXG4gICAgICAgICAgZmxleC1ncm93OiAwO1xcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMTtcXG4gICAgICAtbXMtZmxleC1uZWdhdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1zaHJpbms6IDE7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IHtcXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAwO1xcbiAgICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IGg1IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fdGV4dCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgPiAuc2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIHtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciAuc2VjdGlvbl9fY2lyY2xlLS1iaWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBtYXJnaW46IDhweCAzMnB4O1xcbn1cXG4ubWRsLWRlbW8gLmlzLXNtYWxsLXNjcmVlbiBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciAuc2VjdGlvbl9fY2lyY2xlLS1iaWcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgbWFyZ2luOiA4cHggMTZweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDY0cHggMDtcXG4gIG1hcmdpbjogMCAtOHB4IC04cHggLThweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tY2VudGVyIC5zZWN0aW9uX190ZXh0Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEzKTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCA+IGgzOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLXBhbmVsOm5vdCgjb3ZlcnZpZXcpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ubWRsLWRlbW8gI2ZlYXR1cmVzIHNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogNzJweDtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBoNCwgI2ZlYXR1cmVzIGg1IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi5tZGwtZGVtbyAudG9jIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI0MxRUVGNDtcXG4gIG1hcmdpbjogMjRweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kbC1kZW1vIC50b2MgaDQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ubWRsLWRlbW8gLnRvYyBhIHtcXG4gIGNvbG9yOiAjNEREMEUxO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1kbC1kZW1vIC5tZGwtbWVudV9fY29udGFpbmVyIHtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0FB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QjtFQUNyQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDhCQUE4QjtNQUMxQiwwQkFBMEI7VUFDdEIsc0JBQXNCO0FBQ2hDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXFxuICpcXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXFxcIkxpY2Vuc2VcXFwiKTtcXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXFxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XFxuICpcXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxcbiAqXFxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFxcXCJBUyBJU1xcXCIgQkFTSVMsXFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXFxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxcbiAqL1xcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9faGVhZGVyLXJvdyB7XFxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dC5pcy1zbWFsbC1zY3JlZW4gLm1kbC1sYXlvdXRfX2hlYWRlci1yb3cgaDMge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXItYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dC5pcy1zbWFsbC1zY3JlZW4gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1idXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0Om5vdCguaXMtc21hbGwtc2NyZWVuKSAubWRsLWxheW91dF9fdGFiLWJhcixcXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXQ6bm90KC5pcy1zbWFsbC1zY3JlZW4pIC5tZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lciB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDY0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLWJhciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1sYXlvdXRfX3RhYi1iYXIgLm1kbC1sYXlvdXRfX3RhYiB7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBsaW5lLWhlaWdodDogNjRweDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X190YWItYmFyIC5tZGwtbGF5b3V0X190YWIuaXMtYWN0aXZlOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNHB4O1xcbn1cXG4ubWRsLWRlbW8gbWFpbiA+IC5tZGwtbGF5b3V0X190YWItcGFuZWwge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcGFkZGluZy10b3A6IDI0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkID4gKiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmQgLm1kbC1jYXJkX19zdXBwb3J0aW5nLXRleHQge1xcbiAgbWFyZ2luOiA0MHB4O1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcXG59XFxuLm1kbC1kZW1vLm1kbC1kZW1vIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IGg0IHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4ubWRsLWRlbW8gLm1kbC1jYXJkX19hY3Rpb25zIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDRweCA0MHB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYSB7XFxuICBjb2xvcjogIzAwQkNENDtcXG4gIG1hcmdpbjogMDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fYWN0aW9ucyBhOmhvdmVyLFxcbi5tZGwtZGVtbyAubWRsLWNhcmRfX2FjdGlvbnMgYTphY3RpdmUge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0ICsgLm1kbC1jYXJkX19hY3Rpb25zIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbn1cXG4ubWRsLWRlbW8gI2FkZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNDBweDtcXG4gIHRvcDogMzZweDtcXG4gIHotaW5kZXg6IDk5OTtcXG59XFxuXFxuLm1kbC1kZW1vIC5tZGwtbGF5b3V0X19jb250ZW50IHNlY3Rpb246bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciB7XFxuICBtYXgtd2lkdGg6IDEyOTBweDtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBzZWN0aW9uLnNlY3Rpb24tLWNlbnRlciB7XFxuICBtYXgtd2lkdGg6IDYyMHB4O1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGhlYWRlcntcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IC5zZWN0aW9uX19wbGF5LWJ0biB7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gPiBoZWFkZXIgPiAubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiA+IGJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRvcDogOHB4O1xcbiAgcmlnaHQ6IDhweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX2NpcmNsZSB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAtd2Via2l0LWZsZXgtZ3JvdzogMDtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMDtcXG4gICAgICAgICAgZmxleC1ncm93OiAwO1xcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMTtcXG4gICAgICAtbXMtZmxleC1uZWdhdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1zaHJpbms6IDE7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IHtcXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAtd2Via2l0LWZsZXgtc2hyaW5rOiAwO1xcbiAgICAgIC1tcy1mbGV4LW5lZ2F0aXZlOiAwO1xcbiAgICAgICAgICBmbGV4LXNocmluazogMDtcXG4gIHBhZGRpbmctdG9wOiA4cHg7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uIC5zZWN0aW9uX190ZXh0IGg1IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG4ubWRsLWRlbW8gc2VjdGlvbiAuc2VjdGlvbl9fdGV4dCBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24gLnNlY3Rpb25fX2NpcmNsZS1jb250YWluZXIgPiAuc2VjdGlvbl9fY2lyY2xlLWNvbnRhaW5lcl9fY2lyY2xlIHtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gIG1hcmdpbjogOHB4IDA7XFxufVxcbi5tZGwtZGVtbyBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciAuc2VjdGlvbl9fY2lyY2xlLS1iaWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBtYXJnaW46IDhweCAzMnB4O1xcbn1cXG4ubWRsLWRlbW8gLmlzLXNtYWxsLXNjcmVlbiBzZWN0aW9uLnNlY3Rpb24tLWZvb3RlciAuc2VjdGlvbl9fY2lyY2xlLS1iaWcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgbWFyZ2luOiA4cHggMTZweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDY0cHggMDtcXG4gIG1hcmdpbjogMCAtOHB4IC04cHggLThweDtcXG59XFxuLm1kbC1kZW1vIHNlY3Rpb24uc2VjdGlvbi0tY2VudGVyIC5zZWN0aW9uX190ZXh0Om5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEzKTtcXG59XFxuLm1kbC1kZW1vIC5tZGwtY2FyZCAubWRsLWNhcmRfX3N1cHBvcnRpbmctdGV4dCA+IGgzOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcbi5tZGwtZGVtbyAubWRsLWxheW91dF9fdGFiLXBhbmVsOm5vdCgjb3ZlcnZpZXcpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4ubWRsLWRlbW8gI2ZlYXR1cmVzIHNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogNzJweDtcXG59XFxuLm1kbC1kZW1vICNmZWF0dXJlcyBoNCwgI2ZlYXR1cmVzIGg1IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi5tZGwtZGVtbyAudG9jIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI0MxRUVGNDtcXG4gIG1hcmdpbjogMjRweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLm1kbC1kZW1vIC50b2MgaDQge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4ubWRsLWRlbW8gLnRvYyBhIHtcXG4gIGNvbG9yOiAjNEREMEUxO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLm1kbC1kZW1vIC5tZGwtbWVudV9fY29udGFpbmVyIHtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuaW1wb3J0ICdmaXJlYmFzZS9kYXRhYmFzZSc7XG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUEwZmJ2MlZxRS1BZkY2Vl9ueFNTWENFcWFUbEJsWm5USVwiLFxuICBhdXRoRG9tYWluOiBcInNhbmRib3gtY2UyYzUuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vc2FuZGJveC1jZTJjNS5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwic2FuZGJveC1jZTJjNVwiLFxuICBzdG9yYWdlQnVja2V0OiBcInNhbmRib3gtY2UyYzUuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTAwMzcxOTg4Nzk0NFwiLFxuICBjbGllbnRJZDogXCIxMDAzNzE5ODg3OTQ0LXJsYzA2Y2plY3FycDlmZ3Ztdm81NnZxb3Axb3RtOWh0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbn07XG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcblxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcbmNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yYWdlLnJlZigpO1xuY29uc3QgdXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuY29uc3QgREFUQV9QQVRIID0gJ21rdHVya2ZpbGVzL2RhdGFmaWxlcy8nO1xuY29uc3QgZGF0YVJlZiA9IHN0b3JhZ2VSZWYuY2hpbGQoREFUQV9QQVRIKTtcbmNvbnN0IFBBUkFNX1BBVEggPSAnbWt0dXJrZmlsZXMvcGFyYW1ldGVyZmlsZXMvc3ViamVjdHMvJztcbmNvbnN0IHBhcmFtUmVmID0gc3RvcmFnZVJlZi5jaGlsZChQQVJBTV9QQVRIKTtcblxubGV0IGZpbGVMaXN0U2VsZWN0b3IgPSAoXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxlLWxpc3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuKTtcblxuZmlsZUxpc3RTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldnQgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zb2xlLmxvZygnTmV3IEZpbGUhJyk7XG4gIGZpbGUubmFtZSA9IGZpbGUuZmlsZUxpc3RbcGFyc2VJbnQoZmlsZUxpc3RTZWxlY3Rvci52YWx1ZSldLmZ1bGxwYXRoO1xuICBmaWxlLmZpbGVDaGFuZ2VkID0gdHJ1ZTtcbiAgY29uc29sZS5sb2coJ2ZpbGUgbmFtZTonLCBmaWxlLm5hbWUpO1xuICBjb25zb2xlLmxvZygnZmlsZSBwYXRoJywgZmlsZS5wYXRoKTtcbn0pO1xuXG5sZXQgZmlsZTogYW55ID0ge1xuICBwYXRoOiBEQVRBX1BBVEgsXG4gIGxpc3Q6IFtdLFxuICBmaWxlTGlzdDogW10sXG4gIG5hbWU6ICcnLFxuICBkYXRhOiBudWxsLFxuICB2ZXI6IG51bGwsXG4gIGRhdGU6IG51bGwsXG4gIGRhdGVDaGFuZ2VkOiBmYWxzZSxcbiAgZmlsZUNoYW5nZWQ6IGZhbHNlXG59O1xuXG5jb25zb2xlLmxvZygnaGVsbG8gaGVjdG9yJyk7XG5cblxuYXN5bmMgZnVuY3Rpb24gcG9wdWxhdGVEcm9wZG93bk1lbnUoKSB7XG4gIHRyeSB7XG4gICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgdXRpbHMuZ2V0RmlsZUxpc3QoZmlsZS5wYXRoKTtcbiAgICBcblxuICAgIGZpbGVMaXN0LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBsZXQgbmFtZUEgPSBhLm5hbWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGxldCBuYW1lQiA9IGIubmFtZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIGZpbGUuZmlsZUxpc3QgPSBmaWxlTGlzdDtcbiAgICBcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdC52YWx1ZSA9IGkudG9TdHJpbmcoKTtcbiAgICAgIG9wdC5pbm5lckhUTUwgPSBmaWxlTGlzdFtpXS5uYW1lO1xuICAgICAgZmlsZUxpc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH1cbiAgICBcbiAgICBmaWxlLm5hbWUgPSBmaWxlLmZpbGVMaXN0WzBdLmZ1bGxwYXRoO1xuICAgIGZpbGUuZmlsZUNoYW5nZWQgPSB0cnVlO1xuICBcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFUlJPUiAjZmlsZS1saXN0OicsIGVycm9yKTtcbiAgfVxufVxuXG5wb3B1bGF0ZURyb3Bkb3duTWVudSgpO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRBbmRSZW5kZXJFZGl0b3IoZmlsZVBhdGg6IHN0cmluZykge1xuICBsZXQgZGF0YUZpbGUgPSB1dGlscy5nZXRTdG9yYWdlRmlsZShmaWxlUGF0aCk7XG59XG5cbmxldCBwcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xucHJvdmlkZXIuYWRkU2NvcGUoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvY29udGFjdHMucmVhZG9ubHknKTtcbmZpcmViYXNlLmF1dGgoKS5nZXRSZWRpcmVjdFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gIGlmIChyZXN1bHQudXNlcikge1xuICAgIC8vIFVzZXIganVzdCBzaWduZWQgaW4uIHlvdSBjYW4gZ2V0IHRoZSByZXN1bHQuY3JlZGVudGlhbC5cblx0Y29uc29sZS5sb2coJ1NpZ24tSW4gUmVkaXJlY3QgUmVzdWx0LCBVU0VSICcgKyByZXN1bHQudXNlci5lbWFpbCArICcgaXMgc2lnbmVkIGluJylcbiAgfVxuICBlbHNlIGlmIChmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXIpIHtcbiAgICAvLyBVc2VyIGFscmVhZHkgc2lnbmVkIGluLlxuXHRjb25zb2xlLmxvZygnU2lnbi1JbiBSZWRpcmVjdCBSZXN1bHQsIFVTRVIgaXMgc2lnbmVkIGluJylcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBObyB1c2VyIHNpZ25lZCBpbiwgdXBkYXRlIHlvdXIgVUksIHNob3cgdGhlIHJlZGlyZWN0IHNpZ24taW4gc2NyZWVuLlxuXHRmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFJlZGlyZWN0KHByb3ZpZGVyKVxuICB9XG59KTsiLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCAnZmlyZWJhc2Uvc3RvcmFnZSc7XG5pbXBvcnQgJ2ZpcmViYXNlL2RhdGFiYXNlJztcblxuY29uc3Qgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcbmNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yYWdlLnJlZigpO1xuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIGFzeW5jIGdldEZpbGVMaXN0KHBhdGg6IHN0cmluZywgZXh0Pzogc3RyaW5nKSB7XG4gICAgbGV0IGZpbGVMaXN0ID0gYXdhaXQgc3RvcmFnZVJlZi5jaGlsZChwYXRoKS5saXN0QWxsKCk7XG4gICAgLyogb25seSBrZWVwIGZpbGVzIHdpdGhpbiB0aGUgbGFzdCAyIHllYXJzKi9cbiAgICBsZXQgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBsZXQgZmlsZXM6IGFueSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBmaWxlTGlzdC5wcmVmaXhlcykge1xuICAgICAgbGV0IHN1YkZpbGVMaXN0ID0gKFxuICAgICAgICBhd2FpdCB0aGlzLmdldEZpbGVMaXN0KHBhdGggKyBpdGVtLm5hbWUgKyAnLycsIGV4dClcbiAgICAgICk7XG4gICAgICBmaWxlcyA9IFsuLi5maWxlcywgLi4uc3ViRmlsZUxpc3RdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QuaXRlbXMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBpZiAodHlwZW9mKGV4dCkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGZpbGVMaXN0Lml0ZW1zW2ldLm5hbWUuZW5kc1dpdGgoZXh0KSkgeyAvLyBpZiBmaWxlIGV4dGVuc2lvbiBpcyBjb3JyZWN0XG4gICAgICAgICAgZmlsZXMucHVzaCh7XG4gICAgICAgICAgICBmdWxscGF0aDogZmlsZUxpc3QuaXRlbXNbaV0uZnVsbFBhdGgsXG4gICAgICAgICAgICBuYW1lOiBmaWxlTGlzdC5pdGVtc1tpXS5uYW1lXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoZmlsZUxpc3QuaXRlbXNbaV0ubmFtZS5zbGljZSgwLCA0KSkgPj0geWVhciAtIDEpIHtcbiAgICAgICAgZmlsZXMucHVzaCh7XG4gICAgICAgICAgZnVsbHBhdGg6IGZpbGVMaXN0Lml0ZW1zW2ldLmZ1bGxQYXRoLFxuICAgICAgICAgIG5hbWU6IGZpbGVMaXN0Lml0ZW1zW2ldLm5hbWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGVzO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldFN0b3JhZ2VGaWxlKHBhdGg6IHN0cmluZykge1xuICAgIGxldCBmaWxlUmVmID0gc3RvcmFnZVJlZi5jaGlsZChwYXRoKTtcbiAgICBsZXQgdXJsID0gYXdhaXQgZmlsZVJlZi5nZXREb3dubG9hZFVSTCgpLmNhdGNoKGUgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgR2V0dGluZyBVUkwnKTtcbiAgICB9KTtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGxldCBmaWxlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBmaWxlO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9ycy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9jc3NXLTk3YjgxYlwiXSxcblx0W1wiLi9zcmMvdXRpbHMudHNcIixcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfY3NzVy05N2I4MWJcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSAoKSA9PiB7XG5cbn07XG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHR9XG5cdGNodW5rTG9hZGluZ0dsb2JhbCA9IGNodW5rTG9hZGluZ0dsb2JhbC5zbGljZSgpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtMb2FkaW5nR2xvYmFsLmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0xvYWRpbmdHbG9iYWxbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtsaXZlcGxvdDJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rbGl2ZXBsb3QyXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjazsiLCIvLyBydW4gc3RhcnR1cFxucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==