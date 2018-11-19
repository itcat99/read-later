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
/******/ 	deferredModules.push(["./src/background/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background/index.js":
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
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
/* harmony import */ var _chromeApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chromeApi */ "./src/chromeApi/index.js");
/* harmony import */ var _constents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constents */ "./src/constents.js");





/* eslint no-console:0 */


var OTHER_BOOKMARK_FOLDER_ID = "2";
var DEFALUT_CONFIG = {
  folder: "__read_later__"
};

var ReadLater =
/*#__PURE__*/
function () {
  function ReadLater(config) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ReadLater);

    this.posts = [];
    this.config = Object.assign({}, DEFALUT_CONFIG, config);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ReadLater, [{
    key: "_getInfo",
    value: function () {
      var _getInfo2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(folder) {
        var result, folderArr, targetId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _chromeApi__WEBPACK_IMPORTED_MODULE_4__["bookmarkApi"].search(folder);

              case 2:
                result = _context3.sent;
                folderArr = [];
                result.forEach(function (item) {
                  var parentId = item.parentId;

                  if (parentId === OTHER_BOOKMARK_FOLDER_ID) {
                    folderArr.push(item);
                  }
                });

                if (!(folderArr.length === 1)) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return", folderArr[0]);

              case 9:
                targetId = folderArr[0].id;
                folderArr.shift();
                folderArr.forEach(
                /*#__PURE__*/
                function () {
                  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(item) {
                    var id, children;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            id = item.id;
                            _context2.next = 3;
                            return _chromeApi__WEBPACK_IMPORTED_MODULE_4__["bookmarkApi"].getChildren(id);

                          case 3:
                            children = _context2.sent;
                            children.forEach(
                            /*#__PURE__*/
                            function () {
                              var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                              /*#__PURE__*/
                              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(child) {
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                                  while (1) {
                                    switch (_context.prev = _context.next) {
                                      case 0:
                                        _context.next = 2;
                                        return _chromeApi__WEBPACK_IMPORTED_MODULE_4__["bookmarkApi"].move(child.id, {
                                          parentId: targetId
                                        });

                                      case 2:
                                      case "end":
                                        return _context.stop();
                                    }
                                  }
                                }, _callee, this);
                              }));

                              return function (_x3) {
                                return _ref2.apply(this, arguments);
                              };
                            }());
                            _context2.next = 7;
                            return _chromeApi__WEBPACK_IMPORTED_MODULE_4__["bookmarkApi"].remove(id);

                          case 7:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
                return _context3.abrupt("return", this._getInfo(targetId));

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function _getInfo(_x) {
        return _getInfo2.apply(this, arguments);
      };
    }()
  }, {
    key: "_hasFolder",
    value: function () {
      var _hasFolder2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(folder) {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _chromeApi__WEBPACK_IMPORTED_MODULE_4__["bookmarkApi"].search(folder);

              case 2:
                result = _context4.sent;
                console.log("has folder result: ", result);
                return _context4.abrupt("return", result.length > 0);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function _hasFolder(_x4) {
        return _hasFolder2.apply(this, arguments);
      };
    }()
  }, {
    key: "_createFolder",
    value: function _createFolder(folder) {
      return _chromeApi__WEBPACK_IMPORTED_MODULE_4__["bookmarkApi"].create({
        parentId: OTHER_BOOKMARK_FOLDER_ID,
        title: folder
      });
    }
  }, {
    key: "_getPosts",
    value: function _getPosts(id) {
      return _chromeApi__WEBPACK_IMPORTED_MODULE_4__["bookmarkApi"].getChildren(id);
    }
  }, {
    key: "_listener",
    value: function _listener() {
      var _this = this;

      chrome.runtime.onMessage.addListener(function (msg) {
        _this._updateWithView(msg);
      });
      /* Following is about bookmark's events */

      chrome.bookmarks.onCreated.addListener(
      /*#__PURE__*/
      function () {
        var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id, bookmark) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!(bookmark.parentId === _this.info.id)) {
                    _context5.next = 3;
                    break;
                  }

                  _context5.next = 3;
                  return _this._update();

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
      chrome.bookmarks.onMoved.addListener(
      /*#__PURE__*/
      _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _this._update();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      })));
      chrome.bookmarks.onRemoved.addListener(
      /*#__PURE__*/
      function () {
        var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id, removeInfo) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  if (!(removeInfo.parentId === _this.info.id)) {
                    _context7.next = 3;
                    break;
                  }

                  _context7.next = 3;
                  return _this._update();

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function (_x7, _x8) {
          return _ref5.apply(this, arguments);
        };
      }());
      chrome.bookmarks.onChanged.addListener(
      /*#__PURE__*/
      function () {
        var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(id) {
          var bookmarkInfo;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return _chromeApi__WEBPACK_IMPORTED_MODULE_4__["bookmarkApi"].get(id);

                case 2:
                  bookmarkInfo = _context8.sent;

                  if (!(bookmarkInfo.parentId === _this.info.id)) {
                    _context8.next = 6;
                    break;
                  }

                  _context8.next = 6;
                  return _this._update();

                case 6:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function (_x9) {
          return _ref6.apply(this, arguments);
        };
      }());
      chrome.bookmarks.onImportEnded.addListener(
      /*#__PURE__*/
      _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this._update();

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      })));
      /* with contextMenus */

      chrome.contextMenus.onClicked.addListener(
      /*#__PURE__*/
      _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var checked, result, currentTab;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                checked = true;
                _context10.next = 3;
                return _chromeApi__WEBPACK_IMPORTED_MODULE_4__["tabsApi"].query({
                  active: true,
                  currentWindow: true
                });

              case 3:
                result = _context10.sent;
                currentTab = result[0];

                _this.posts.forEach(function (item) {
                  if (item.url === currentTab.url) {
                    checked = false;
                  }
                });

                if (checked) {
                  _context10.next = 9;
                  break;
                }

                _this._popMsg("error", "has the same post.");

                return _context10.abrupt("return", false);

              case 9:
                _context10.next = 11;
                return _chromeApi__WEBPACK_IMPORTED_MODULE_4__["bookmarkApi"].create({
                  parentId: _this.info.id,
                  title: currentTab.title,
                  url: currentTab.url
                });

              case 11:
                _this._update();

                _this._popMsg("success", "add a read later post.");

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      })));
    }
  }, {
    key: "_updateWithView",
    value: function _updateWithView(msg) {
      var _this2 = this;

      var type = msg.type,
          payload = msg.payload;

      switch (type) {
        case _constents__WEBPACK_IMPORTED_MODULE_5__["GET_POSTS"]:
          this._sendMsg({
            type: _constents__WEBPACK_IMPORTED_MODULE_5__["RETURN_POSTS"],
            payload: this.posts
          });

          break;

        case _constents__WEBPACK_IMPORTED_MODULE_5__["REMOVE_POST"]:
          _chromeApi__WEBPACK_IMPORTED_MODULE_4__["bookmarkApi"].remove(payload).then(
          /*#__PURE__*/
          _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return _this2._update();

                  case 2:
                    _this2._sendMsg({
                      type: _constents__WEBPACK_IMPORTED_MODULE_5__["RETURN_POSTS"],
                      payload: _this2.posts
                    });

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          })));
          break;

        default:
          return;
      }
    }
  }, {
    key: "_sendMsg",
    value: function _sendMsg(msg) {
      chrome.runtime.sendMessage(msg);
    }
  }, {
    key: "_setBadgeNum",
    value: function _setBadgeNum() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (num > 99) {
        num = "99+";
      }

      chrome.browserAction.setBadgeText({
        text: num + ""
      });
    }
  }, {
    key: "_createContxtMenus",
    value: function _createContxtMenus() {
      chrome.contextMenus.create({
        title: "read later",
        id: "read-later-contextMenus",
        contexts: ["page"]
      });
    }
  }, {
    key: "_popMsg",
    value: function _popMsg(title, message) {
      chrome.notifications.create({
        iconUrl: "./icons/icon_128.png",
        type: "basic",
        title: title,
        message: message
      });
    }
  }, {
    key: "_setBadgeColor",
    value: function _setBadgeColor() {
      chrome.browserAction.setBadgeBackgroundColor({
        color: "#4779ED"
      });
    }
  }, {
    key: "_update",
    value: function () {
      var _update2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._getPosts(this.info.id);

              case 2:
                this.posts = _context12.sent;

                this._setBadgeNum(this.posts.length);

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function _update() {
        return _update2.apply(this, arguments);
      };
    }()
  }, {
    key: "run",
    value: function () {
      var _run = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var folder;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                folder = this.config.folder;
                _context13.next = 3;
                return this._hasFolder(folder);

              case 3:
                if (_context13.sent) {
                  _context13.next = 6;
                  break;
                }

                _context13.next = 6;
                return this._createFolder(folder);

              case 6:
                _context13.next = 8;
                return this._getInfo(folder);

              case 8:
                this.info = _context13.sent;
                _context13.next = 11;
                return this._update();

              case 11:
                this._createContxtMenus();

                this._listener();

              case 13:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function run() {
        return _run.apply(this, arguments);
      };
    }()
  }]);

  return ReadLater;
}();

chrome.runtime.onInstalled.addListener(function () {
  var app = new ReadLater();
  app.run().then(function () {
    console.log("> app is running...");
  }).catch(function (err) {
    console.error("> app start has Err: ", err);
  });
});

/***/ })

/******/ });
//# sourceMappingURL=background.js.map