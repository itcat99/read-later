webpackJsonp([1],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(69);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 *  initializtion
 */
var info = {};
var postList = [];
var settings = _config2.default;

var folderName = settings.title;

build(folderName).then(function (result) {
  info = result;
  updatePostList(result);
  setbadge();
});

createContxtMenus();
listener();

/*
 * Core
 */
function build(title) {
  /*****************************
   * Maybe optimization here   *
   *****************************/
  return new Promise(function (resolve, reject) {
    chrome.bookmarks.search({
      title: title
    }, function (bks) {
      bks.length ? function () {
        concatDir(bks);
        resolve(info);
      }() : chrome.bookmarks.create({
        title: title
      }, function (result) {
        resolve(result);
      });
    });
  });
}

// create a rightclick menu
function createContxtMenus() {
  chrome.contextMenus.create({ title: 'read later', contexts: ['page'], onclick: addPost });
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

  setbadge();
}
// ==== set popup badge ==== //
function setbadge() {
  if (!info.id) {
    chrome.browserAction.setBadgeText({ text: '0' });
    return false;
  }

  chrome.bookmarks.getChildren(info.id, function (result) {
    var count = void 0;

    count = result ? result.length : 0;
    chrome.browserAction.setBadgeText({
      text: count > 99 ? '+' + count : '' + count
    });
  });
}

function createDir() {
  return new Promise(function (resolve, reject) {
    chrome.bookmarks.create({
      title: settings.title
    }, function (result) {
      resolve(result);
    });
  });
}

function concatDir(bks) {
  var destinationId = bks[0].id;
  info = Object.assign({}, bks[0]);

  bks.shift();

  bks.forEach(function (bk) {
    chrome.bookmarks.getChildren(bk.id, function (result) {
      result.forEach(function (item) {
        chrome.bookmarks.move(item.id, { parentId: destinationId });
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

  var equal = true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = postList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      if (item.url === url) {
        equal = false;
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

  if (!equal) {
    popMsg('warning', 'you has the same post.');
    return false;
  }

  chrome.bookmarks.create(config, function (data) {
    updatePostList(info);
    popMsg('success', 'add a read later post.');
  });
}

function removeMark(id) {
  postList.forEach(function (post, index) {
    if (post.id === id) {
      postList.splice(index, 1);
    }
  });

  chrome.bookmarks.remove(id, function () {
    updatePostList(info);
    popMsg('success', 'remove post.');
  });
}

// show message
function popMsg(title, message) {
  chrome.notifications.create({ iconUrl: './icons/icon_128.png', type: 'basic', title: title, message: message });
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
    chrome.runtime.sendMessage({ type: 'return_data', data: info });
  }

  if (type === 'get_settings') {
    chrome.runtime.sendMessage({ type: 'return_settings', data: settings });
  }

  if (type === 'reset_settings' || type === 'save_settings') {
    updateSettings(type, data);
  }
}

function updateSettings(type, data) {
  /* update bookmark folder name */
  var updateFolderName = void 0;

  if (data && data.title !== folderName) {
    updateFolderName = true;
  }

  settings = type === 'reset_settings' ? _config2.default : data;
  if (updateFolderName) {
    folderName = settings.title;

    chrome.bookmarks.update(info.id, { title: folderName });
  }
}

function clearPost() {
  chrome.bookmarks.removeTree(info.id);

  build(folderName).then(function (result) {
    info = result;
    updatePostList(result);
    setbadge();
  });
}

/***/ })

},[154]);