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





/* eslint no-console:0 */

var OTHER_BOOKMARK_FOLDER_ID = '2';
var DEFALUT_CONFIG = {
  folder: '__read_later__'
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
                console.log('has folder result: ', result);
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
        _this.update(msg);
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
        num = '99+';
      }

      chrome.browserAction.setBadgeText({
        text: num + ''
      });
    }
  }, {
    key: "_setBadgeColor",
    value: function _setBadgeColor() {
      chrome.browserAction.setBadgeBackgroundColor({
        color: '#4779ED'
      });
    }
  }, {
    key: "_update",
    value: function () {
      var _update2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this._getPosts(this.info.id);

              case 2:
                this.posts = _context10.sent;

                this._setBadgeNum(this.posts.length);

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
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
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var folder;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                folder = this.config.folder;
                _context11.next = 3;
                return this._hasFolder(folder);

              case 3:
                if (_context11.sent) {
                  _context11.next = 6;
                  break;
                }

                _context11.next = 6;
                return this._createFolder(folder);

              case 6:
                _context11.next = 8;
                return this._getInfo(folder);

              case 8:
                this.info = _context11.sent;
                _context11.next = 11;
                return this._update();

              case 11:
                this._setBadgeNum();

                this._listener();

              case 13:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
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
    console.log('> app is running...');
  }).catch(function (err) {
    console.error('> app start has Err: ', err);
  });
});

/***/ }),

/***/ "./src/chromeApi/bookmark.js":
/*!***********************************!*\
  !*** ./src/chromeApi/bookmark.js ***!
  \***********************************/
/*! exports provided: search, get, getChildren, getTree, create, move, update, remove, removeTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return getChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTree", function() { return getTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTree", function() { return removeTree; });
function generator(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return new Promise(function (resolve, reject) {
    try {
      var _chrome$bookmarks;

      (_chrome$bookmarks = chrome.bookmarks)[type].apply(_chrome$bookmarks, args.concat([function (result) {
        resolve(result);
      }]));
    } catch (error) {
      reject("> bookmarks [".concat(type, "] Err: ").concat(error));
    }
  });
}
/**
 * 搜索书签树节点，找出匹配的结果。如果以对象方式指定查询，得到的 BookmarkTreeNodes 匹配所有指定的属性。
 * @param {string | object} query - 可以指定字符串，包含单词和加上引号的短语，用于匹配书签 URL 和标题。也可以指定对象，其中可以指定 query、url 和 title 属性，返回匹配所有指定属性的书签。
 */


var search = function search(query) {
  return generator('search', query);
};
/**
 * 获得指定的书签树节点。
 * @param {string | string[]} ids - 一个字符串或多个字符串组成的数组，指定节点的标识符。
 */

var get = function get(ids) {
  return generator('get', ids);
};
/**
 * 获取指定书签树节点的所有子节点
 *
 * @param {string} id - 指定书签节点的id
 */

var getChildren = function getChildren(id) {
  return generator('getChildren', id);
};
/**
 * 获取整个书签树
 */

var getTree = function getTree() {
  return generator('getTree');
};
/**
 * 在指定的上一级文件夹下创建新的书签或文件夹。如果 url 为 null 或者省略，则创建文件夹。
 * @param {object} bookmark
 * @param {string} bookmark.parentId 默认为‘其他书签’ 指定的根目录
 * @param {number} bookmark.index
 * @param {string} bookmark.title
 * @param {string} bookmark.url
 */

var create = function create(bookmark) {
  return generator('create', bookmark);
};
/**
 * 将指定的书签树节点移到指定位置
 * @param {string} from 指定书签的id
 * @param {Object} to 目的地
 * @param {string} to.parentId 目标文件夹id
 * @param {number} to.index
 */

var move = function move(from, to) {
  return generator('move', from, to);
};
/**
 * 更新书签或文件夹的属性。只需要指定您需要更改的属性，未指定的属性不会更改。注意：目前只支持“title”和“url”属性。
 * @param {string} id 要更新的书签或文件夹id
 * @param {object} changes 要更新的内容
 * @param {string} changes.title
 * @param {string} changes.url
 */

var update = function update(id, changes) {
  return generator('update', id, changes);
};
/**
 * 删除书签或者空文件夹。
 * @param {string} id 要删除的书签或文件夹id
 */

var remove = function remove(id) {
  return generator('remove', id);
};
/**
 * 删除整个书签。
 */

var removeTree = function removeTree() {
  return generator('removeTree');
};

/***/ }),

/***/ "./src/chromeApi/index.js":
/*!********************************!*\
  !*** ./src/chromeApi/index.js ***!
  \********************************/
/*! exports provided: bookmarkApi, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookmarkApi", function() { return bookmarkApi; });
/* harmony import */ var _bookmark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookmark */ "./src/chromeApi/bookmark.js");

var bookmarkApi = _bookmark__WEBPACK_IMPORTED_MODULE_0__;
/* harmony default export */ __webpack_exports__["default"] = ({
  bookmark: _bookmark__WEBPACK_IMPORTED_MODULE_0__
});

/***/ })

/******/ });
//# sourceMappingURL=background.js.map