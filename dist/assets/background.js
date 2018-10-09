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
/******/ 		"background": 0
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
/******/ 	deferredModules.push(["./src/background.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _constents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constents */ "./src/constents.js");






/* eslint no-console:0 */




var ReadLater =
/*#__PURE__*/
function () {
  function ReadLater(config) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ReadLater);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "addPost", function () {
      var addPostConfig = {
        active: true,
        currentWindow: true
      };
      chrome.tabs.query(addPostConfig,
      /*#__PURE__*/
      function () {
        var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(tabs) {
          var _tabs$, title, url;

          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(tabs.length === 1)) {
                    _context.next = 5;
                    break;
                  }

                  _tabs$ = tabs[0], title = _tabs$.title, url = _tabs$.url;

                  _this.createMark(title, url);

                  _context.next = 6;
                  break;

                case 5:
                  throw new Error('add post ERROR');

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });

    this.cacheConfig = config;
    this.config = config;
    this.folderName = this.config.title;
    this.info = {};
    this.posts = [];
    this.init().then(function () {
      _this.createContxtMenus();

      _this.listener();
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ReadLater, [{
    key: "init",
    value: function () {
      var _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var folders, tempInfo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getFolder(this.folderName);

              case 2:
                folders = _context2.sent;

                if (!(folders && folders.length)) {
                  _context2.next = 12;
                  break;
                }

                _context2.t0 = Object;
                _context2.t1 = {};
                _context2.next = 8;
                return this.concatDir(folders);

              case 8:
                _context2.t2 = _context2.sent;
                tempInfo = _context2.t0.assign.call(_context2.t0, _context2.t1, _context2.t2);
                _context2.next = 18;
                break;

              case 12:
                _context2.t3 = Object;
                _context2.t4 = {};
                _context2.next = 16;
                return this.createFolder(this.fold);

              case 16:
                _context2.t5 = _context2.sent;
                tempInfo = _context2.t3.assign.call(_context2.t3, _context2.t4, _context2.t5);

              case 18:
                this.info = Object.assign({}, this.info, tempInfo);
                _context2.next = 21;
                return this.getPosts(this.info.id);

              case 21:
                this.posts = _context2.sent;
                this.setBadgeNum(this.info, this.posts);
                this.setBadgeColor();

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function init() {
        return _init.apply(this, arguments);
      };
    }()
  }, {
    key: "listener",
    value: function listener() {
      var _this2 = this;

      chrome.runtime.onMessage.addListener(function (details) {
        var type = details.type,
            payload = details.payload;

        _this2.update(type, payload);
      }); // listener Command

      chrome.commands.onCommand.addListener(function (commands) {
        if (commands === _constents__WEBPACK_IMPORTED_MODULE_7__["ADD_POST"]) {
          _this2.addPost();
        }
      });
    }
  }, {
    key: "createMark",
    value: function () {
      var _createMark = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(title, url) {
        var info,
            posts,
            createMarkConfig,
            equal,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                info = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : this.info;
                posts = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : this.posts;
                createMarkConfig = {
                  parentId: info.id,
                  title: title,
                  url: url
                };
                equal = true;
                posts.forEach(function (item) {
                  if (item.url === url) {
                    equal = false;
                  }
                });

                if (equal) {
                  _context3.next = 8;
                  break;
                }

                Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["popMsg"])('warning', 'you has the same post.');
                return _context3.abrupt("return", false);

              case 8:
                _context3.next = 10;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["bookmarks"])('create', createMarkConfig);

              case 10:
                _context3.next = 12;
                return this.getPosts(this.info.id);

              case 12:
                this.posts = _context3.sent;
                _context3.next = 15;
                return this.setBadgeNum(this.info, this.posts);

              case 15:
                Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["popMsg"])('success', 'add a read later post.');

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function createMark(_x2, _x3) {
        return _createMark.apply(this, arguments);
      };
    }()
  }, {
    key: "concatDir",
    value: function () {
      var _concatDir = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(folders) {
        var destinationId, info, i, result, j;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(folders.length === 1)) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return", folders[0]);

              case 2:
                destinationId = folders[0].id;
                info = Object.assign({}, folders[0]);
                folders.shift();
                _context4.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(folders);

              case 6:
                if ((_context4.t1 = _context4.t0()).done) {
                  _context4.next = 23;
                  break;
                }

                i = _context4.t1.value;
                _context4.next = 10;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["bookmarks"])('getChildren', folders[i].id);

              case 10:
                result = _context4.sent;
                _context4.t2 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(result);

              case 12:
                if ((_context4.t3 = _context4.t2()).done) {
                  _context4.next = 18;
                  break;
                }

                j = _context4.t3.value;
                _context4.next = 16;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["bookmarks"])('move', result[j].id, {
                  parentId: destinationId
                });

              case 16:
                _context4.next = 12;
                break;

              case 18:
                _context4.next = 20;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["bookmarks"])('remove', folders[i].id);

              case 20:
                return _context4.abrupt("return", info);

              case 23:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function concatDir(_x4) {
        return _concatDir.apply(this, arguments);
      };
    }()
  }, {
    key: "getPosts",
    value: function () {
      var _getPosts = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(folderId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["bookmarks"])('getChildren', folderId);

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getPosts(_x5) {
        return _getPosts.apply(this, arguments);
      };
    }()
  }, {
    key: "getFolder",
    value: function () {
      var _getFolder = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(title) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["bookmarks"])('search', {
                  title: title
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function getFolder(_x6) {
        return _getFolder.apply(this, arguments);
      };
    }()
  }, {
    key: "createFolder",
    value: function () {
      var _createFolder = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(title) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["bookmarks"])('create', {
                  title: title
                });

              case 2:
                return _context7.abrupt("return", _context7.sent);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function createFolder(_x7) {
        return _createFolder.apply(this, arguments);
      };
    }()
  }, {
    key: "setBadgeNum",
    value: function setBadgeNum(info, posts) {
      if (!info.id) {
        chrome.browserAction.setBadgeText({
          text: '0'
        });
        return false;
      }

      var count = posts.length;
      chrome.browserAction.setBadgeText({
        text: count > 99 ? "+".concat(count) : "".concat(count)
      });
    }
  }, {
    key: "setBadgeColor",
    value: function setBadgeColor() {
      chrome.browserAction.setBadgeBackgroundColor({
        color: '#4779ED'
      });
    }
  }, {
    key: "update",
    value: function update(type, payload) {
      switch (type) {
        case _constents__WEBPACK_IMPORTED_MODULE_7__["REMOVE_POST"]:
          this.removeMark(payload);
          break;

        case _constents__WEBPACK_IMPORTED_MODULE_7__["CLEAR"]:
          this.clear();
          break;

        case _constents__WEBPACK_IMPORTED_MODULE_7__["GET_POSTS"]:
          Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["sendMsg"])(_constents__WEBPACK_IMPORTED_MODULE_7__["RETURN_POSTS"], this.posts);
          break;

        case _constents__WEBPACK_IMPORTED_MODULE_7__["GET_SETTINGS"]:
          Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["sendMsg"])(_constents__WEBPACK_IMPORTED_MODULE_7__["RETURN_SETTINGS"], this.config);
          break;

        case _constents__WEBPACK_IMPORTED_MODULE_7__["UPDATE_SETTINGS"]:
        case _constents__WEBPACK_IMPORTED_MODULE_7__["RESET_SETTINGS"]:
          this.updateSettings(type, payload, this.info);
          break;

        default:
          break;
      }
    }
  }, {
    key: "removeMark",
    value: function () {
      var _removeMark = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                console.log('remove id: ', id);
                _context8.next = 3;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["bookmarks"])('remove', id);

              case 3:
                _context8.next = 5;
                return this.getPosts(this.info.id);

              case 5:
                this.posts = _context8.sent;
                this.setBadgeNum(this.info, this.posts);
                Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["popMsg"])('success', 'remove post.');

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function removeMark(_x8) {
        return _removeMark.apply(this, arguments);
      };
    }()
  }, {
    key: "clear",
    value: function () {
      var _clear = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var posts,
            i,
            _args9 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                posts = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : this.posts;
                _context9.prev = 1;
                _context9.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(posts);

              case 3:
                if ((_context9.t1 = _context9.t0()).done) {
                  _context9.next = 9;
                  break;
                }

                i = _context9.t1.value;
                _context9.next = 7;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["bookmarks"])('remove', posts[i].id);

              case 7:
                _context9.next = 3;
                break;

              case 9:
                posts = [];
                this.setBadgeNum(this.info, posts);
                _context9.next = 16;
                break;

              case 13:
                _context9.prev = 13;
                _context9.t2 = _context9["catch"](1);
                throw new Error(_context9.t2);

              case 16:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 13]]);
      }));

      return function clear() {
        return _clear.apply(this, arguments);
      };
    }()
  }, {
    key: "updateSettings",
    value: function () {
      var _updateSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(type, payload) {
        var info,
            title,
            _args10 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                info = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : this.info;

                if (type === _constents__WEBPACK_IMPORTED_MODULE_7__["RESET_SETTINGS"]) {
                  this.config = this.cacheConfig;
                } else {
                  title = payload.title;

                  if (title !== this.folderName) {
                    this.config = Object.assign({}, this.config, payload);
                  }
                }

                this.folderName = this.config.title;
                Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["bookmarks"])('update', info.id, {
                  title: this.folderName
                });

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function updateSettings(_x9, _x10) {
        return _updateSettings.apply(this, arguments);
      };
    }()
  }, {
    key: "createContxtMenus",
    value: function createContxtMenus() {
      chrome.contextMenus.create({
        title: 'read later',
        contexts: ['page'],
        onclick: this.addPost
      });
    }
  }]);

  return ReadLater;
}();

chrome.browserAction.setPopup({
  popup: './popup.html'
});
new ReadLater(_config__WEBPACK_IMPORTED_MODULE_5__["default"]);

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: bookmarks, popMsg, sendMsg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookmarks", function() { return bookmarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popMsg", function() { return popMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMsg", function() { return sendMsg; });
function bookmarks(type) {
  for (var _len = arguments.length, config = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    config[_key - 1] = arguments[_key];
  }

  return new Promise(function (resolve, reject) {
    try {
      var _chrome$bookmarks;

      (_chrome$bookmarks = chrome.bookmarks)[type].apply(_chrome$bookmarks, config.concat([function (result) {
        resolve(result);
      }]));
    } catch (error) {
      reject(error);
    }
  });
}
function popMsg(title, message) {
  chrome.notifications.create({
    iconUrl: './icons/icon_128.png',
    type: 'basic',
    title: title,
    message: message
  });
}
function sendMsg(type, payload) {
  chrome.runtime.sendMessage({
    type: type,
    payload: payload
  });
}

/***/ })

/******/ });
//# sourceMappingURL=background.js.map