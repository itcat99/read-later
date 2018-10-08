/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pop": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/pop.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./src/styled.js");
/* harmony import */ var _container_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container/Header */ "./src/container/Header/index.jsx");
/* harmony import */ var _container_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./container/Main */ "./src/container/Main/index.jsx");
/* harmony import */ var _container_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./container/Footer */ "./src/container/Footer/index.jsx");
/* harmony import */ var _container_Mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container/Mask */ "./src/container/Mask/index.jsx");
/* harmony import */ var _container_Settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./container/Settings */ "./src/container/Settings/index.jsx");













var App =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _PureComponent);

  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_container_Settings__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_container_Mask__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_container_Header__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_container_Main__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_container_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (App); // import React, { Component } from 'react';
// /* import components */
// import Header from './components/header';
// import Preview from './container/preview';
// import Settings from './container/settings';
// /* import styles */
// import StyledRoot from './styled';
// import Wrapper from './Wrapper';
// const { Provider } = Wrapper;
// /* main */
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.name = 'Read Later';
//     // this.style = style;
//     this.state = {
//       posts: [],
//       settings: {},
//       settingsPanelOpen: false,
//       maskShow: false,
//     };
//     this.init();
//   }
//   init() {
//     // let posts = [];
//     const that = this;
//     // ==== get settings ==== //
//     chrome.runtime.sendMessage({ type: 'get_settings' });
//     // ==== create post list item on HTML ==== //
//     chrome.runtime.onMessage.addListener(details => {
//       const { type, data } = details;
//       if (type === 'return_settings') {
//         that.setState({ settings: data });
//       }
//     });
//   }
//   componentDidMount() {
//     let posts = [];
//     const that = this;
//     // ==== get post list data ==== //
//     chrome.runtime.sendMessage({ type: 'get_data' });
//     // ==== create post list item on HTML ==== //
//     chrome.runtime.onMessage.addListener(async details => {
//       const { type, data } = details;
//       if (type === 'return_data') {
//         posts = await this.getList(data);
//         that.setState({ posts });
//       }
//     });
//   }
//   getList(data) {
//     return new Promise((resolve, reject) => {
//       chrome.bookmarks.getChildren(data.id, result => {
//         if (!result.length) {
//           reject();
//         }
//         const posts = [];
//         result.forEach(bk => {
//           this.addPost(bk, posts);
//         });
//         resolve(posts);
//       });
//     });
//   }
//   getIcon(url) {
//     const src = this.state.settings.favicon_api
//       ? `${this.state.settings.favicon_api}${url.replace(
//           /^(https|http):\/\//,
//           '',
//         )}`
//       : `${url.match(/(^[a-zA-z]+:\/\/).*?\//)[0]}/favicon.ico`;
//     return src;
//   }
//   addPost(details, postList) {
//     const { url, id, title, ...rest } = details;
//     const imgsrc = this.getIcon(url);
//     postList.push({ url, id, title, imgsrc, show: true, ...rest });
//   }
//   updateState = posts => {
//     this.setState({ posts });
//   };
//   search = val => {
//     const { posts } = this.state;
//     posts.forEach(itemPost => {
//       const title = itemPost.title.toLowerCase();
//       if (title.indexOf(val.toLowerCase()) < 0) {
//         itemPost.show = false;
//       } else {
//         itemPost.show = true;
//       }
//     });
//     this.setState(Object.assign({}, this.state, { posts }));
//   };
//   preClear = () => {
//     this.setState({ maskShow: true });
//   };
//   cancelClear = () => {
//     this.setState({ maskShow: false });
//   };
//   clear = () => {
//     chrome.runtime.sendMessage(
//       {
//         type: 'clear',
//       },
//       () => {
//         this.setState({ posts: [], maskShow: false });
//       },
//     );
//   };
//   updateSetting = (type, data) => {
//     switch (type) {
//       case 'reset':
//         chrome.runtime.sendMessage({ type: 'reset_settings' });
//         this.setState({ settings: data });
//         break;
//       case 'save':
//         chrome.runtime.sendMessage({ type: 'save_settings', data });
//         this.setState({ settings: data });
//         break;
//       default:
//         break;
//     }
//   };
//   toggleSettingsPanel = () => {
//     this.setState({
//       settingsPanelOpen: !this.state.settingsPanelOpen,
//     });
//   };
//   render() {
//     const config = {
//       posts: this.state.posts,
//       preClear: this.preClear,
//       clear: this.clear,
//       cancelClear: this.cancelClear,
//       settings: this.state.settings,
//       search: this.search,
//       toggleSettingsPanel: this.toggleSettingsPanel,
//       maskShow: this.state.maskShow,
//     };
//     return (
//       <Provider value={config}>
//         <StyledRoot>
//           <Header title={this.name} />
//           <Preview updateState={this.updateState} />
//           <Settings
//             updateSetting={this.updateSetting}
//             settings={this.state.settings}
//             isOpen={this.state.settingsPanelOpen}
//             closeSettingsPanel={this.toggleSettingsPanel}
//           />
//         </StyledRoot>
//         {/* </div> */}
//       </Provider>
//     );
//   }
// }
// export default App;

/***/ }),

/***/ "./src/_vars.js":
/*!**********************!*\
  !*** ./src/_vars.js ***!
  \**********************/
/*! exports provided: global, panel, header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global", function() { return global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "panel", function() { return panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
var global = {
  fontSize: '14px',
  fontColor: '#6e6e6e',
  borderSize: '1px',
  borderColor: '#9e9e9e',
  borderStyle: 'solid',
  bgColor: '#fff'
};
global.border = "".concat(global.borderSize, " ").concat(global.borderStyle, " ").concat(global.borderColor);
var panel = {
  width: '320px',
  heightMin: '300px',
  heightMax: '500px',
  margin: 0,
  padding: 0
};
var header = {
  padding: '6px 12px',
  info: {
    margin: 0,
    marginRigth: '6px',
    fontSize: '20px',
    lineHeight: '30px',
    fontColor: '#4d4d4d'
  }
};


/***/ }),

/***/ "./src/actions/clear.js":
/*!******************************!*\
  !*** ./src/actions/clear.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return {
    type: 'clear'
  };
});

/***/ }),

/***/ "./src/actions/fetch.js":
/*!******************************!*\
  !*** ./src/actions/fetch.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return {
    type: 'fetch'
  };
});

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove */ "./src/actions/remove.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./src/actions/search.js");
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch */ "./src/actions/fetch.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear */ "./src/actions/clear.js");
/* harmony import */ var _updateMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateMask */ "./src/actions/updateMask.js");
/* harmony import */ var _updateSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateSettings */ "./src/actions/updateSettings.js");
/* harmony import */ var _updateSettingsPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSettingsPanel */ "./src/actions/updateSettingsPanel.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  clear: _clear__WEBPACK_IMPORTED_MODULE_3__["default"],
  fetch: _fetch__WEBPACK_IMPORTED_MODULE_2__["default"],
  remove: _remove__WEBPACK_IMPORTED_MODULE_0__["default"],
  search: _search__WEBPACK_IMPORTED_MODULE_1__["default"],
  updateMask: _updateMask__WEBPACK_IMPORTED_MODULE_4__["default"],
  updateSettings: _updateSettings__WEBPACK_IMPORTED_MODULE_7__["default"],
  updateSettingsPanel: _updateSettingsPanel__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/actions/remove.js":
/*!*******************************!*\
  !*** ./src/actions/remove.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (id) {
  return {
    type: 'remove',
    payload: id
  };
});

/***/ }),

/***/ "./src/actions/search.js":
/*!*******************************!*\
  !*** ./src/actions/search.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (key) {
  return {
    type: 'search',
    payload: key
  };
});

/***/ }),

/***/ "./src/actions/updateMask.js":
/*!***********************************!*\
  !*** ./src/actions/updateMask.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (state) {
  return {
    type: 'update_mask',
    payload: state
  };
});

/***/ }),

/***/ "./src/actions/updateSettings.js":
/*!***************************************!*\
  !*** ./src/actions/updateSettings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (settings) {
  return {
    type: 'update_settings',
    payload: settings
  };
});

/***/ }),

/***/ "./src/actions/updateSettingsPanel.js":
/*!********************************************!*\
  !*** ./src/actions/updateSettingsPanel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (state) {
  return {
    type: 'update_settingsPanel',
    payload: state
  };
});

/***/ }),

/***/ "./src/components/Clear/index.jsx":
/*!****************************************!*\
  !*** ./src/components/Clear/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled */ "./src/components/Clear/styled.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








 // import Wrapper from '../../Wrapper';
// const { Consumer } = Wrapper;

var Clear =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Clear, _PureComponent);

  function Clear() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Clear);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Clear)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onClick", function () {
      var updateMask = _this.props.updateMask;
      updateMask && updateMask(true);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Clear, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onClick: this.onClick
      }, "Clear");
    }
  }]);

  return Clear;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Clear);

/***/ }),

/***/ "./src/components/Clear/styled.js":
/*!****************************************!*\
  !*** ./src/components/Clear/styled.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  flex-grow: 5;\n  border: none;\n  background: rgb(206, 75, 52);\n  color: #fff;\n  padding: 4px;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 300ms;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    opacity: 0.8;\n    transition: opacity 300ms;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ClearBtn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (ClearBtn);

/***/ }),

/***/ "./src/components/Download/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/Download/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "./src/components/Download/styled.js");










var Download =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Download, _PureComponent);

  function Download() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Download);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Download)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "getNetscapeBookmarkFormat", function () {
      // const { posts, settings } = this.props;
      var posts = _this.props.posts;
      var settings = {
        title: '__read_later__'
      };
      var list = '';
      posts.forEach(function (post) {
        var url = post.url,
            title = post.title,
            dateAdded = post.dateAdded;
        list += "<DT><A HREF=\"".concat(url, "\" ADD_DATE=\"").concat(dateAdded, "\">").concat(title, "</A>");
      });
      var data = "\n    <!DOCTYPE NETSCAPE-Bookmark-file-1>\n    <!--This is an automatically generated file.\n    It will be read and overwritten.\n    Do Not Edit! -->\n    <Title>Bookmarks</Title>\n    <H1>Bookmarks</H1>\n    <DT><H3 FOLDED>".concat(settings.title, "</H3>\n    <DL><p>\n    ").concat(list, "\n    </DL><p>\n    ");
      return data;
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Download, [{
    key: "render",
    value: function render() {
      var netscapeBookmarkFormat = "data:text/html;charset=utf-8,".concat(this.getNetscapeBookmarkFormat());
      var date = new Date();
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["StyleRoot"], {
        data: netscapeBookmarkFormat,
        download: "readLater_".concat(date.getFullYear(), "_").concat(date.getMonth(), "_").concat(date.getDate(), "_").concat(date.getHours()).concat(date.getMinutes()).concat(date.getSeconds(), ".html")
      }, "export");
    }
  }]);

  return Download;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Download);

/***/ }),

/***/ "./src/components/Download/styled.js":
/*!*******************************************!*\
  !*** ./src/components/Download/styled.js ***!
  \*******************************************/
/*! exports provided: StyleRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRoot", function() { return StyleRoot; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  text-align: center;\n  flex-grow: 1;\n  display: inline-block;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  text-decoration: none;\n  padding: 4px;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    opacity: 0.8;\n    transition: opacity 300ms;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var StyleRoot = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.attrs({
  href: function href(props) {
    return props.data;
  },
  download: function download(props) {
    return props.download;
  }
})(_templateObject());

/***/ }),

/***/ "./src/components/Empty/index.jsx":
/*!****************************************!*\
  !*** ./src/components/Empty/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./src/components/Empty/styled.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var Empty =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Empty, _PureComponent);

  function Empty() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Empty);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Empty).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Empty, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, " ", 'Empty list.', " "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, 'you have 2 ways to add post.', " "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "1. click context menu 'read later'.", " "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "2. 'Ctrl + Shift + M'.", " "));
    }
  }]);

  return Empty;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Empty);

/***/ }),

/***/ "./src/components/Empty/styled.js":
/*!****************************************!*\
  !*** ./src/components/Empty/styled.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var EmptyView = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (EmptyView);

/***/ }),

/***/ "./src/components/Post/index.jsx":
/*!***************************************!*\
  !*** ./src/components/Post/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "./src/components/Post/styled.js");










var Post =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Post, _PureComponent);

  function Post() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Post);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Post)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "remove", function () {
      var _this$props = _this.props,
          remove = _this$props.remove,
          id = _this$props.id;
      remove && remove(id);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Post, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          imgsrc = _this$props2.imgsrc,
          title = _this$props2.title,
          url = _this$props2.url,
          show = _this$props2.show;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["StyledRoot"], {
        show: show
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        src: imgsrc,
        alt: title // innerRef={this.initLoad}
        // onLoad={this.loadImg}

      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["RemoveBtn"], {
        onClick: this.remove,
        role: "remove-button"
      }));
    }
  }]);

  return Post;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/components/Post/styled.js":
/*!***************************************!*\
  !*** ./src/components/Post/styled.js ***!
  \***************************************/
/*! exports provided: Icon, Link, RemoveBtn, StyledRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveBtn", function() { return RemoveBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledRoot", function() { return StyledRoot; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_vars */ "./src/_vars.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: relative;\n  display: ", ";\n  height: 20px;\n  align-items: center;\n  font-size: ", ";\n  background: ", ";\n  opacity: 1;\n  padding: 6px 12px;\n  transition: background 200ms;\n  &::before {\n    position: absolute;\n    content: '';\n    display: block;\n    height: 100%;\n    width: 6px;\n    top: 0;\n    left: 0;\n    background-color: rgb(206, 75, 52);\n    opacity: 0;\n    transition: opacity 400ms;\n  }\n  &:hover {\n    background: rgba(0, 0, 0, 0.1);\n    transition: background 400ms;\n    &::before {\n      opacity: 1;\n      transition: opacity 400ms;\n    }\n    ", " {\n      transition: opacity 500ms;\n      opacity: 0.5;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  min-width: 14px;\n  height: 14px;\n  background: url('../icons/close.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 500ms;\n  &:hover {\n    opacity: 1;\n    transition: opacity 500ms;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  flex-grow: 1;\n  margin-right: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-decoration: none;\n  color: ", ";\n  font-size: 13px;\n  &:focus {\n    outline: none;\n    color: #4d4d4d;\n  }\n  &:active {\n    color: #9e9e9e;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 100%;\n  margin-right: 4px;\n  min-width: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject());
var Link = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject2(), _vars__WEBPACK_IMPORTED_MODULE_1__["global"].fontColor);
var RemoveBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject3());
var StyledRoot = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li(_templateObject4(), function (props) {
  return props.show ? 'flex' : 'none';
}, _vars__WEBPACK_IMPORTED_MODULE_1__["global"].fontSize, _vars__WEBPACK_IMPORTED_MODULE_1__["global"].bgColor, RemoveBtn);

/***/ }),

/***/ "./src/components/Search/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Search/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled */ "./src/components/Search/styled.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);








 // import Wrapper from '../../Wrapper';
// const { Consumer } = Wrapper;

var Search =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Search, _PureComponent);

  function Search(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Search);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Search).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "search", function () {
      clearTimeout(_this.inputTimeout);
      _this.inputTimeout = setTimeout(function () {
        var value = _this.input.value;
        var search = _this.props.search;
        search && search(value); // this.searching(value);
      }, 300);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "clear", function () {
      var search = _this.props.search;
      _this.input.value = '';
      search && search(''); // this.props.search('');
    });

    _this.inputTimeout = null;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["StyleRoot"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "text",
        placeholder: "please search...",
        onInput: this.search,
        ref: function ref(input) {
          _this2.input = input;
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["RemoveBtn"], {
        onClick: function onClick() {
          return _this2.clear();
        }
      }));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]); // const Search = props => (
//   <Consumer>
//     {data => {
//       const { search } = data;
//       return <Root search={search} {...props} />;
//     }}
//   </Consumer>
// );


/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/components/Search/styled.js":
/*!*****************************************!*\
  !*** ./src/components/Search/styled.js ***!
  \*****************************************/
/*! exports provided: RemoveBtn, StyleRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveBtn", function() { return RemoveBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRoot", function() { return StyleRoot; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_vars */ "./src/_vars.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: relative;\n  width: 120px;\n  height: 24px;\n  box-sizing: border-box;\n  padding: 2px 6px;\n  border: ", ";\n  border-radius: 3px;\n  > input {\n    width: 100%;\n    height: 100%;\n    border: none;\n    padding: 0;\n    &:focus {\n      outline: none;\n    }\n  }\n\n  &:hover ", " {\n    opacity: 0.5;\n    transition: opacity 400ms;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: absolute;\n  min-width: 14px;\n  height: 14px;\n  opacity: 0;\n  top: 50%;\n  right: 6px;\n  transform: translateY(-50%);\n  transition: opacity 400ms;\n  background: url('../../icons/close.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var RemoveBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span(_templateObject());
var StyleRoot = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), _vars__WEBPACK_IMPORTED_MODULE_1__["global"].border, RemoveBtn);

/***/ }),

/***/ "./src/components/settingsItem/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/settingsItem/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "./src/components/settingsItem/styled.js");










var SettingsItem =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SettingsItem, _PureComponent);

  function SettingsItem() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SettingsItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(SettingsItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "input", function () {
      var data = {};
      data[_this.props.name] = _this.$input.value;

      _this.props.change(data);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SettingsItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.$input.value = this.props.value;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.$input.value = this.props.value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          name = _this$props.name;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["StyleRoot"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        htmlFor: name
      }, title, ": "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        name: name,
        id: name,
        ref: function ref(el) {
          return _this2.$input = el;
        },
        onInput: this.input
      }));
    }
  }]);

  return SettingsItem;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (SettingsItem);

/***/ }),

/***/ "./src/components/settingsItem/styled.js":
/*!***********************************************!*\
  !*** ./src/components/settingsItem/styled.js ***!
  \***********************************************/
/*! exports provided: StyleRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRoot", function() { return StyleRoot; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  margin-bottom: 6px;\n  padding: 2px 10px;\n  align-items: center;\n  height: 18px;\n\n  label {\n    margin-right: 12px;\n    flex-basis: 30%;\n  }\n\n  input {\n    height: 100%;\n    border: none;\n    border-bottom: 1px solid #ccc;\n    background-color: #eee;\n    flex-grow: 1;\n    padding: 4px 10px;\n\n    &:focus {\n      outline: none;\n      border-bottom-color: rgba(75, 52, 206, 0.5);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var StyleRoot = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject());

/***/ }),

/***/ "./src/container/Footer/index.jsx":
/*!****************************************!*\
  !*** ./src/container/Footer/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "./src/container/Footer/styled.js");
/* harmony import */ var _components_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Clear */ "./src/components/Clear/index.jsx");
/* harmony import */ var _components_Download__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Download */ "./src/components/Download/index.jsx");












var Footer =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Footer, _PureComponent);

  function Footer() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Footer);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Footer).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          posts = _this$props.posts,
          updateMask = _this$props.updateMask;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["ControlBar"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Clear__WEBPACK_IMPORTED_MODULE_9__["default"], {
        updateMask: updateMask
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Download__WEBPACK_IMPORTED_MODULE_10__["default"], {
        posts: posts
      }));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var mapDispatchToProps = {
  updateMask: _actions__WEBPACK_IMPORTED_MODULE_7__["default"].updateMask,
  download: _actions__WEBPACK_IMPORTED_MODULE_7__["default"].download
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Footer));

/***/ }),

/***/ "./src/container/Footer/styled.js":
/*!****************************************!*\
  !*** ./src/container/Footer/styled.js ***!
  \****************************************/
/*! exports provided: ControlBar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlBar", function() { return ControlBar; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-flow: column;\n  flex-grow: 1;\n  padding: 0;\n  position: relative;\n  flex-grow: 1;\n  max-height: 300px;\n  overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-wrap: nowrap;\n  height: 26px;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ControlBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject2()));

/***/ }),

/***/ "./src/container/Header/index.jsx":
/*!****************************************!*\
  !*** ./src/container/Header/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./src/container/Header/styled.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Search */ "./src/components/Search/index.jsx");













var Header =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Header, _PureComponent);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "openSettingsPanel", function () {
      var updateSettingsPanel = _this.props.updateSettingsPanel;
      updateSettingsPanel && updateSettingsPanel(true);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Header, [{
    key: "getVersion",
    value: function getVersion() {
      return chrome.runtime.getManifest().version;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          search = _this$props.search;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["StyledRoot"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["Info"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["InfoTitle"], null, title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, this.getVersion())), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["SettingsIcon"], {
        title: "settings",
        onClick: this.openSettingsPanel
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["Contact"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://github.com/itcat99/read-later"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["GitIcon"], null)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "mailto:boiping2010@gmail.com"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["EmailIcon"], null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_11__["default"], {
        search: search
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var mapDispatchToProps = {
  search: _actions__WEBPACK_IMPORTED_MODULE_9__["default"].search,
  updateSettingsPanel: _actions__WEBPACK_IMPORTED_MODULE_9__["default"].updateSettingsPanel
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./src/container/Header/styled.js":
/*!****************************************!*\
  !*** ./src/container/Header/styled.js ***!
  \****************************************/
/*! exports provided: StyledRoot, Info, InfoTitle, GitIcon, EmailIcon, SettingsIcon, Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledRoot", function() { return StyledRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoTitle", function() { return InfoTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitIcon", function() { return GitIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailIcon", function() { return EmailIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsIcon", function() { return SettingsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_vars */ "./src/_vars.js");


function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  flex-grow: 1;\n  margin-top: 10px;\n  > a {\n    text-decoration: none;\n    margin-right: 4px;\n    &:focus {\n      outline: none;\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background: url('../icons/settings.svg');\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background: url('../icons/email.svg');\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background: url('../icons/github.svg');\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: inline-block;\n  min-width: 16px;\n  height: 16px;\n  background-repeat: no-repeat !important;\n  background-size: 100% !important;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 300ms;\n  &:hover {\n    opacity: 1;\n    transition: opacity 300ms;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  margin: 0;\n  margin-right: 6px;\n  font-size: 20px;\n  line-height: 30px;\n  color: #4d4d4d;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  align-items: baseline;\n  flex-grow: 1;\n  width: 100%;\n  flex-basis: calc(100% - 20px);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 6px 12px;\n  border-bottom: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StyledRoot = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header(_templateObject(), _vars__WEBPACK_IMPORTED_MODULE_2__["global"].border);
var Info = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var InfoTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1(_templateObject3());
var IconBase = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span(_templateObject4());
var GitIcon = IconBase.extend(_templateObject5());
var EmailIcon = IconBase.extend(_templateObject6());
var SettingsIcon = IconBase.extend(_templateObject7());
var Contact = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject8());

/***/ }),

/***/ "./src/container/Main/index.jsx":
/*!**************************************!*\
  !*** ./src/container/Main/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Empty */ "./src/components/Empty/index.jsx");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Post */ "./src/components/Post/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled */ "./src/container/Main/styled.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");












var Main =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Main, _PureComponent);

  function Main() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Main);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Main).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Main, [{
    key: "getPosts",
    value: function getPosts() {
      var _this$props = this.props,
          posts = _this$props.posts,
          remove = _this$props.remove;
      return posts.map(function (post) {
        var imgsrc = post.imgsrc,
            title = post.title,
            url = post.url,
            id = post.id,
            _post$show = post.show,
            show = _post$show === void 0 ? true : _post$show;
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Post__WEBPACK_IMPORTED_MODULE_8__["default"], {
          imgsrc: imgsrc,
          url: url,
          title: title,
          key: id,
          id: id,
          show: show,
          remove: remove
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var posts = this.getPosts();
      var content = !posts || !posts.length ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Empty__WEBPACK_IMPORTED_MODULE_7__["default"], null) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["List"], null, posts);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__["StyledRoot"], null, content);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var fetch = this.props.fetch;
      fetch && fetch();
    }
  }]);

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  console.log('state:', state);
  return state;
};

var mapDispatchToProps = {
  remove: _actions__WEBPACK_IMPORTED_MODULE_10__["default"].remove,
  fetch: _actions__WEBPACK_IMPORTED_MODULE_10__["default"].fetch
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Main));

/***/ }),

/***/ "./src/container/Main/styled.js":
/*!**************************************!*\
  !*** ./src/container/Main/styled.js ***!
  \**************************************/
/*! exports provided: StyledRoot, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledRoot", function() { return StyledRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  padding: 0;\n  list-style: none;\n  flex-flow: column;\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  flex-grow: 1;\n  overflow-x: hidden;\n  height: 300px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var StyledRoot = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject2());

/***/ }),

/***/ "./src/container/Mask/index.jsx":
/*!**************************************!*\
  !*** ./src/container/Mask/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ "./src/container/Mask/styled.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");












var Mask =
/*#__PURE__*/
function (_PureComponent) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Mask, _PureComponent);

  function Mask() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mask);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Mask)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "clear", function () {
      var _this$props = _this.props,
          clear = _this$props.clear,
          updateMask = _this$props.updateMask;
      clear && updateMask && clear() && updateMask(false);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "cancel", function () {
      var updateMask = _this.props.updateMask;
      updateMask && updateMask(false);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Mask, [{
    key: "render",
    value: function render() {
      var show = this.props.mask;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["StyleRoot"], {
        show: show
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["Alert"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["Choose"], null, "Are you sure?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["Submit"], {
        onClick: this.clear
      }, "Sure"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__["Cancel"], {
        onClick: this.cancel
      }, "Cancel")));
    }
  }]);

  return Mask;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};

var mapDispatchToProps = {
  clear: _actions__WEBPACK_IMPORTED_MODULE_10__["default"].clear,
  updateMask: _actions__WEBPACK_IMPORTED_MODULE_10__["default"].updateMask
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Mask));

/***/ }),

/***/ "./src/container/Mask/styled.js":
/*!**************************************!*\
  !*** ./src/container/Mask/styled.js ***!
  \**************************************/
/*! exports provided: StyleRoot, Choose, Submit, Cancel, Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRoot", function() { return StyleRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choose", function() { return Choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Submit", function() { return Submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cancel", function() { return Cancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  transform: translate(-50%, -50%);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background-color: #515151;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background-color: rgb(206, 75, 52);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  height: 26px;\n  border-radius: 0;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  opacity: 1;\n  transition: opacity 300ms;\n  &:hover {\n    opacity: 0.8;\n    transition: opacity 300ms;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  width: 100%;\n  height: 100px;\n  line-height: 100px;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: ", ";\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var StyleRoot = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.show ? 'block' : 'none';
});
var Choose = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var Btn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject3());
var Submit = Btn.extend(_templateObject4());
var Cancel = Btn.extend(_templateObject5());
var Alert = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());

/***/ }),

/***/ "./src/container/Settings/index.jsx":
/*!******************************************!*\
  !*** ./src/container/Settings/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled */ "./src/container/Settings/styled.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _components_settingsItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/settingsItem */ "./src/components/settingsItem/index.jsx");











/* import config */


/* import component */


/* core */

var Settings =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Settings, _Component);

  function Settings() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Settings);

    for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Settings)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "save", function () {
      var _this$props = _this.props,
          updateSettings = _this$props.updateSettings,
          updateSettingsPanel = _this$props.updateSettingsPanel;
      _this.settings = _this.tempSettings;
      updateSettings && updateSettingsPanel && updateSettings(_this.settings) && updateSettingsPanel(false);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "reset", function () {
      var _this$props2 = _this.props,
          updateSettings = _this$props2.updateSettings,
          updateSettingsPanel = _this$props2.updateSettingsPanel;
      updateSettings && updateSettingsPanel && updateSettings(_config__WEBPACK_IMPORTED_MODULE_11__["default"]) && updateSettingsPanel(false);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "cancel", function () {
      var updateSettingsPanel = _this.props.updateSettingsPanel;
      updateSettingsPanel && updateSettingsPanel(false);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Settings, [{
    key: "getItems",
    value: function getItems() {
      var items = [];

      var _arr = Object.keys(this.settings);

      for (var _i = 0; _i < _arr.length; _i++) {
        var _key = _arr[_i];
        items.push(react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_settingsItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: _key,
          name: _key,
          value: this.settings[_key],
          title: _key.replace('_', ' ').trim(),
          change: this.change.bind(this)
        }));
      }

      return items;
    }
  }, {
    key: "change",
    value: function change(data) {
      this.tempSettings = Object.assign({}, this.settings, data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          open = _this$props3.open,
          settings = _this$props3.settings;
      this.settings = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_11__["default"], settings);
      console.log('this settings;', this.settings);
      this.items = this.getItems();
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["StyleRoot"], {
        isOpen: open
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("header", null, "Settings"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["List"], null, this.items), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Actions"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["ResetBtn"], {
        onClick: this.reset
      }, "reset"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["SaveBtn"], {
        onClick: this.save
      }, "save"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Btn"], {
        onClick: this.cancel
      }, "cancel")));
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    open: state.settings.state,
    settings: state.settings.data
  };
};

var mapDispatchToProps = {
  updateSettingsPanel: _actions__WEBPACK_IMPORTED_MODULE_10__["default"].updateSettingsPanel,
  updateSettings: _actions__WEBPACK_IMPORTED_MODULE_10__["default"].updateSettings
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Settings));

/***/ }),

/***/ "./src/container/Settings/styled.js":
/*!******************************************!*\
  !*** ./src/container/Settings/styled.js ***!
  \******************************************/
/*! exports provided: StyleRoot, List, Btn, Actions, ResetBtn, SaveBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRoot", function() { return StyleRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Btn", function() { return Btn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetBtn", function() { return ResetBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveBtn", function() { return SaveBtn; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background-color: rgb(206, 75, 52);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  background-color: rgb(75, 52, 206);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  flex-grow: 1;\n  height: 26px;\n  border-radius: 0;\n  border: none;\n  background-color: rgba(44, 44, 44, 0.5);\n  color: #fff;\n  cursor: pointer;\n  opacity: 0.8;\n  transition: opacity 300ms;\n  &:hover {\n    opacity: 0.5;\n    transition: opacity 300ms;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  flex-grow: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: ", ";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #eee;\n  flex-direction: column;\n  z-index: 9;\n  header {\n    font-size: 20px;\n    margin-bottom: 10px;\n    padding: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var StyleRoot = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject(), function (porps) {
  return porps.isOpen ? 'flex' : 'none';
});
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject2());
var Btn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject3());
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4(), Btn);
var ResetBtn = Btn.extend(_templateObject5());
var SaveBtn = Btn.extend(_templateObject6());

/***/ }),

/***/ "./src/pop.js":
/*!********************!*\
  !*** ./src/pop.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "./src/sagas/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.jsx");




/* import store&&saga */


/* import components */


Object(_store__WEBPACK_IMPORTED_MODULE_4__["sagaRun"])(_sagas__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* Reander */

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_4__["store"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null)), document.getElementById('main'));

/***/ }),

/***/ "./src/reducer.js":
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_reducers__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts */ "./src/reducers/posts.js");
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask */ "./src/reducers/mask.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/reducers/settings.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  posts: _posts__WEBPACK_IMPORTED_MODULE_0__["default"],
  mask: _mask__WEBPACK_IMPORTED_MODULE_1__["default"],
  settings: _settings__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/reducers/mask.js":
/*!******************************!*\
  !*** ./src/reducers/mask.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  if (type === 'update_mask') {
    return payload;
  }

  return state;
});

/***/ }),

/***/ "./src/reducers/posts.js":
/*!*******************************!*\
  !*** ./src/reducers/posts.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case 'update':
      return payload;

    case 'remove':
      {
        var posts = [];
        state.forEach(function (item) {
          if (item.id !== payload) {
            posts.push(item);
          } else {
            chrome.runtime.sendMessage({
              type: 'remove',
              data: payload
            });
          }
        });
        return posts;
      }

    case 'search':
      {
        var _posts = state.map(function (item) {
          var title = item.title.toLowerCase();

          if (title.indexOf(payload.toLowerCase()) < 0) {
            item.show = false;
          } else {
            item.show = true;
          }

          return item;
        });

        return _posts;
      }

    case 'clear':
      chrome.runtime.sendMessage({
        type: 'clear'
      });
      return [];

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/settings.js":
/*!**********************************!*\
  !*** ./src/reducers/settings.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    data: {},
    state: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case 'update_settingsPanel':
      return Object.assign({}, state, {
        state: payload
      });

    case 'update_settings':
      {
        chrome.runtime.sendMessage({
          type: 'save_settings',
          data: payload
        });
        return Object.assign({}, state, {
          data: payload
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listener; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");



var _marked =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(fetchData),
    _marked2 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(updatePost),
    _marked3 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(updateSettings),
    _marked4 =
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(listener);

 // function getIcon(url) {
//   const favicon_api = 'http://www.google.com/s2/favicons?domain=';
//   const src = favicon_api
//     ? `${favicon_api}${url.replace(/^(https|http):\/\//, '')}`
//     : `${url.match(/(^[a-zA-z]+:\/\/).*?\//)[0]}/favicon.ico`;
//   return src;
// }
// function addPost(details, postList) {
//   const { url, id, title, ...rest } = details;
//   const imgsrc = getIcon(url);
//   postList.push({ url, id, title, imgsrc, show: true, ...rest });
// }

function getList(data) {
  return new Promise(function (resolve, reject) {
    chrome.bookmarks.getChildren(data.id, function (result) {
      if (!result.length) {
        reject();
      } // const posts = [];
      // console.log('result: ', result);
      // result.forEach(bk => {
      //   addPost(bk, posts);
      // });


      resolve(result);
    });
  });
}

function getPosts() {
  return new Promise(function (resolve, reject) {
    chrome.runtime.onMessage.addListener(
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(details) {
        var type, data, posts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                type = details.type, data = details.data;

                if (!(type === 'return_data')) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return getList(data);

              case 5:
                posts = _context.sent;
                resolve(posts);

              case 7:
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                reject(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
}

function getSettings() {
  return new Promise(function (resolve, reject) {
    try {
      chrome.runtime.onMessage.addListener(function (details) {
        var type = details.type,
            data = details.data;

        if (type === 'return_settings') {
          resolve(data);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

function fetchData() {
  var data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function fetchData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (false) {}

          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["take"])('fetch');

        case 3:
          chrome.runtime.sendMessage({
            type: 'get_data'
          });
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(getPosts);

        case 6:
          data = _context2.sent;
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["call"])(updatePost, data);

        case 9:
          _context2.next = 0;
          break;

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked, this);
}

function updatePost(payload) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updatePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: 'update',
            payload: payload
          });

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked2, this);
}

function updateSettings(payload) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function updateSettings$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["put"])({
            type: 'update_settings',
            payload: payload
          });

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked3, this);
}

function listener() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function listener$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([fetchData()]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked4, this);
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: store, sagaRun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sagaRun", function() { return sagaRun; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/reducer.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js");



var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__["default"])();
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware));
var sagaRun = function sagaRun(sagas) {
  return sagaMiddleware.run(sagas);
};

/***/ }),

/***/ "./src/styled.js":
/*!***********************!*\
  !*** ./src/styled.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/_vars.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  padding: ", ";\n  min-height: ", ";\n  max-height: ", ";\n  width: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var padding = _vars__WEBPACK_IMPORTED_MODULE_1__["panel"].padding,
    heightMin = _vars__WEBPACK_IMPORTED_MODULE_1__["panel"].heightMin,
    heightMax = _vars__WEBPACK_IMPORTED_MODULE_1__["panel"].heightMax,
    width = _vars__WEBPACK_IMPORTED_MODULE_1__["panel"].width;
var StyledRoot = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), padding, heightMin, heightMax, width);
/* harmony default export */ __webpack_exports__["default"] = (StyledRoot);

/***/ })

/******/ });
//# sourceMappingURL=pop.js.map