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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils.js");



/* eslint no-console:0 */


var info = {};
var postList = [];
var settings = _config__WEBPACK_IMPORTED_MODULE_2__["default"];
var folderName = settings.title;
chrome.browserAction.setPopup({
  popup: './popup.html'
});

function getFolder(_x) {
  return _getFolder.apply(this, arguments);
}

function _getFolder() {
  _getFolder = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(title) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('search', {
              title: title
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));
  return _getFolder.apply(this, arguments);
}

function createFolder(_x2) {
  return _createFolder.apply(this, arguments);
}

function _createFolder() {
  _createFolder = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(title) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('create', {
              title: title
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _createFolder.apply(this, arguments);
}

function concatDir(_x3) {
  return _concatDir.apply(this, arguments);
}

function _concatDir() {
  _concatDir = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(bks) {
    var destinationId, info, i, result, j;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            destinationId = bks[0].id;
            info = Object.assign({}, bks[0]);
            bks.shift();
            _context5.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(bks);

          case 4:
            if ((_context5.t1 = _context5.t0()).done) {
              _context5.next = 21;
              break;
            }

            i = _context5.t1.value;
            _context5.next = 8;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('getChildren', bks[i].id);

          case 8:
            result = _context5.sent;
            _context5.t2 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(result);

          case 10:
            if ((_context5.t3 = _context5.t2()).done) {
              _context5.next = 16;
              break;
            }

            j = _context5.t3.value;
            _context5.next = 14;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('move', result[j].id, {
              parentId: destinationId
            });

          case 14:
            _context5.next = 10;
            break;

          case 16:
            _context5.next = 18;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('remove', bks[i].id);

          case 18:
            return _context5.abrupt("return", info);

          case 21:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _concatDir.apply(this, arguments);
}

function setbadge() {
  if (!info.id) {
    chrome.browserAction.setBadgeText({
      text: '0'
    });
    return false;
  }

  var count = postList.length;
  chrome.browserAction.setBadgeText({
    text: count > 99 ? "+".concat(count) : "".concat(count)
  });
} // create a rightclick menu


function createContxtMenus() {
  chrome.contextMenus.create({
    title: 'read later',
    contexts: ['page'],
    onclick: addPost
  });
}

function listener() {
  chrome.runtime.onMessage.addListener(function (details) {
    var type = details.type,
        data = details.data;
    update(type, data);
  }); // listener Command

  chrome.commands.onCommand.addListener(function (commands) {
    if (commands === 'add-new-post') {
      addPost();
    }
  });
}

function clearPost() {
  return _clearPost.apply(this, arguments);
}

function _clearPost() {
  _clearPost = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var i;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(postList);

          case 2:
            if ((_context6.t1 = _context6.t0()).done) {
              _context6.next = 8;
              break;
            }

            i = _context6.t1.value;
            _context6.next = 6;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('remove', postList[i].id);

          case 6:
            _context6.next = 2;
            break;

          case 8:
            postList = [];
            setbadge();
            _context6.next = 15;
            break;

          case 12:
            _context6.prev = 12;
            _context6.t2 = _context6["catch"](0);
            throw new Error(_context6.t2);

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this, [[0, 12]]);
  }));
  return _clearPost.apply(this, arguments);
}

function removeMark(_x4) {
  return _removeMark.apply(this, arguments);
}

function _removeMark() {
  _removeMark = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('remove', id);

          case 2:
            _context7.next = 4;
            return updatePostList();

          case 4:
            // postList = await bookmarks('getChildren', info.id);
            // setbadge();
            popMsg('success', 'remove post.');

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));
  return _removeMark.apply(this, arguments);
}

function updateSettings(type, data) {
  /* update bookmark folder name */
  var updateFolderName;

  if (data && data.title !== folderName) {
    updateFolderName = true;
  }

  settings = type === 'reset_settings' ? _config__WEBPACK_IMPORTED_MODULE_2__["default"] : data;

  if (updateFolderName) {
    folderName = settings.title;
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('update', info.id, {
      title: folderName
    });
  }
}

function popMsg(title, message) {
  chrome.notifications.create({
    iconUrl: './icons/icon_128.png',
    type: 'basic',
    title: title,
    message: message
  });
}

function updatePostList() {
  return _updatePostList.apply(this, arguments);
}

function _updatePostList() {
  _updatePostList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('getChildren', info.id);

          case 2:
            postList = _context8.sent;
            setbadge();

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));
  return _updatePostList.apply(this, arguments);
}

function createMark(_x5, _x6) {
  return _createMark.apply(this, arguments);
}

function _createMark() {
  _createMark = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(title, url) {
    var createMarkConfig, equal;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            createMarkConfig = {
              parentId: info.id,
              title: title,
              url: url
            };
            equal = true;
            postList.forEach(function (item) {
              if (item.url === url) {
                equal = false;
              }
            });

            if (equal) {
              _context9.next = 6;
              break;
            }

            popMsg('warning', 'you has the same post.');
            return _context9.abrupt("return", false);

          case 6:
            _context9.next = 8;
            return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('create', createMarkConfig);

          case 8:
            _context9.next = 10;
            return updatePostList();

          case 10:
            popMsg('success', 'add a read later post.');

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));
  return _createMark.apply(this, arguments);
}

function addPost() {
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
                _context.next = 6;
                break;
              }

              _tabs$ = tabs[0], title = _tabs$.title, url = _tabs$.url;
              _context.next = 4;
              return createMark(title, url);

            case 4:
              _context.next = 7;
              break;

            case 6:
              throw new Error('add post ERROR');

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x7) {
      return _ref.apply(this, arguments);
    };
  }());
}

function update(type, data) {
  if (type === 'remove') {
    removeMark(data);
  }

  if (type === 'clear') {
    clearPost();
  }

  if (type === 'get_data') {
    chrome.runtime.sendMessage({
      type: 'return_data',
      data: info
    });
  }

  if (type === 'get_settings') {
    chrome.runtime.sendMessage({
      type: 'return_settings',
      data: settings
    });
  }

  if (type === 'reset_settings' || type === 'save_settings') {
    updateSettings(type, data);
  }
}
/* MAIN FUNCTION */


_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var folders, foldersSize, folderInfo;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return getFolder(folderName);

        case 2:
          folders = _context2.sent;
          foldersSize = folders.length;
          _context2.t0 = foldersSize;
          _context2.next = _context2.t0 === 0 ? 7 : _context2.t0 === 1 ? 11 : 13;
          break;

        case 7:
          _context2.next = 9;
          return createFolder(folderName);

        case 9:
          folderInfo = _context2.sent;
          return _context2.abrupt("break", 17);

        case 11:
          folderInfo = folders[0];
          return _context2.abrupt("break", 17);

        case 13:
          _context2.next = 15;
          return concatDir(folders);

        case 15:
          folderInfo = _context2.sent;
          return _context2.abrupt("break", 17);

        case 17:
          info = Object.assign({}, info, folderInfo);
          _context2.next = 20;
          return updatePostList();

        case 20:
          chrome.browserAction.setBadgeBackgroundColor({
            color: '#4779ED'
          });
          createContxtMenus();
          listener();

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}))();

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bookmarks; });
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

/***/ })

/******/ });
//# sourceMappingURL=background.js.map