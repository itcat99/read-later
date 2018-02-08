webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *  initializtion
 */
var info = {};
var postList = [];

build().then(function (result) {
  updatePostList(result);
  setbadge();
});

createContxtMenus();
listener();

/*
 * Core
 */
function build() {
  return new Promise(function (resolve, reject) {
    chrome.bookmarks.search({
      title: _config2.default.title
    }, function (bks) {
      bks.length ? concatDir(bks) : createDir();

      resolve(info);
    });
  });
}

// create a rightclick menu
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
  });

  // listener Command
  chrome.commands.onCommand.addListener(function (commands) {
    if (commands === 'add-new-post') {
      addPost();
    }
  });
};

/*
 * Methods
 */
function updatePostList(info) {
  chrome.bookmarks.getChildren(info.id, function (result) {
    postList = result;
  });
}
// ==== set popup badge ==== //
function setbadge() {
  chrome.bookmarks.getChildren(info.id, function (result) {
    var count = void 0;

    count = result ? result.length : 0;
    chrome.browserAction.setBadgeText({
      text: count > 99 ? '+' + count : '' + count
    });
  });
}

function createDir() {
  chrome.bookmarks.create({
    title: _config2.default.title
  }, function (result) {
    info = Object.assign({}, result[0]);
  });
}

function concatDir(bks) {
  var destinationId = bks[0].id;
  info = Object.assign({}, bks[0]);

  bks.shift();

  bks.forEach(function (bk) {
    chrome.bookmarks.getChildren(bk.id, function (result) {
      result.forEach(function (item) {
        chrome.bookmarks.move(item.id, {
          parentId: destinationId
        });
      });

      chrome.bookmarks.remove(bk.id);
    });
  });
}

function createMark(title, url) {
  var config = {
    parentId: info.id,
    title: title,
    url: url
  };

  chrome.bookmarks.create(config, function () {
    return popMsg('success', 'add a read later post.');
  });
}

function removeMark(id) {
  chrome.bookmarks.remove(id, popMsg('success', 'remove post.'));
}

// show message
function popMsg(title, message) {
  chrome.notifications.create({
    iconUrl: './icons/icon_128.png',
    type: 'basic',
    title: title,
    message: message
  });
}

function addPost() {
  var config = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(config, function (tabs) {
    if (tabs.length === 1) {
      var _tabs$ = tabs[0],
          title = _tabs$.title,
          url = _tabs$.url;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {

        for (var _iterator = postList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.url === url) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      createMark(title, url);

      setbadge();
    } else {
      throw 'add post ERROR';
    }
  });
}

// ==== run event callback ==== //
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

  setbadge();
}

function clearPost() {
  chrome.bookmarks.removeTree(info.id);
  createDir();
}

/* =============== */

/*
 *  utils
 */
// get current tab info
// function getTabInfo() {
//   return new Promise((resolve, reject) => {
//     const config = {
//       active: true,
//       currentWindow: true
//     }
//     chrome.tabs.query(config, tabs => {
//       if (tabs.length === 1) {
//         resolve(tabs[0]);
//       } else {
//         reject();
//       }
//     })
//   })
// }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'title': '__read_later__'
};

/***/ })
],[2]);