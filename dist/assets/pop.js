/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(36);

window.onload = function () {
  var $list = document.getElementById('list');
  var $clear = document.getElementById('clear');

  var postList = [];

  // get postList
  chrome.storage.local.get(null, function (data) {
    if (!data.readLaterList) {
      return false;
    };

    postList = [].concat(data.readLaterList);
    if (!postList) {
      return false;
    };

    postList.forEach(function (post) {
      addPost(post);
    });
  });

  listener();

  /*
   * utils
   */
  function listener() {
    // list click post
    $list.addEventListener('click', function (e) {
      var $target = e.target;
      var className = $target.getAttribute('class');
      if (!className) {
        return false;
      }

      // remove a post
      if (className.indexOf('remove') > -1) {
        remove($target);
      }
    });

    // clear all post
    $clear.addEventListener('click', function () {
      chrome.runtime.sendMessage({
        type: 'clear'
      }, function () {
        $list.innerHTML = '';
      });
    });
  }

  /*
   * utils
   */
  function remove($target) {
    var $parent = $target.parentNode;
    var index = $parent.dataset.index;

    chrome.runtime.sendMessage({
      type: 'remove',
      data: index
    }, function () {
      $parent.remove();
    });
  }

  function addPost(details) {
    var url = details.url,
        index = details.index,
        info = details.info;

    // build post item modules

    var $item = document.createElement('li');
    var $link = document.createElement('a');
    var $remove = document.createElement('span');
    var $num = document.createElement('span');
    var $icon = getIcon(info);

    // set modules attribute
    $link.setAttribute('href', url);
    $link.innerHTML = info.title;
    $num.innerHTML = index + '.';

    $item.setAttribute('data-index', index);
    $item.setAttribute('class', 'item');
    $link.setAttribute('class', 'link');
    $link.setAttribute('target', '_blank');
    $remove.setAttribute('class', 'remove');
    $num.setAttribute('class', 'num');

    // append modules to post item
    $item.appendChild($num);
    $item.appendChild($icon);
    $item.appendChild($link);
    $item.appendChild($remove);

    // append post item to post list
    $list.appendChild($item);
  }

  // create && return $img element
  function getIcon(info) {
    var favIconUrl = info.favIconUrl;

    var $img = document.createElement('img');

    if (favIconUrl && favIconUrl !== '') {
      $img.setAttribute('src', favIconUrl);
      return $img;
    };

    var url = info.url;


    $img.setAttribute('src', 'http://www.google.com/s2/favicons?domain=' + url.replace(/^(https|http):\/\//, ''));
    return $img;
  }
};

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=pop.js.map