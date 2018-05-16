import config from './config';
import bookmarks from './utils';

let info = {};
let postList = [];
let settings = config;

let folderName = settings.title;

chrome.browserAction.setPopup({ popup: './popup.html' });

/*
 * Methods
 */
// ==== set popup badge ==== // show message
function popMsg(title, message) {
  chrome.notifications.create({
    iconUrl: './icons/icon_128.png',
    type: 'basic',
    title,
    message,
  });
}

function setbadge() {
  if (!info.id) {
    chrome.browserAction.setBadgeText({ text: '0' });
    return false;
  }

  return bookmarks('getChildren', info.id).then(result => {
    const count = result ? result.length : 0;

    chrome.browserAction.setBadgeText({
      text: count > 99 ? `+${count}` : `${count}`,
    });
  });
}

function updatePostList() {
  bookmarks('getChildren', info.id).then(result => {
    postList = result;
    setbadge();
  });
}

function createMark(title, url) {
  const createMarkConfig = {
    parentId: info.id,
    title,
    url,
  };

  let equal = true;
  postList.forEach(item => {
    if (item.url === url) {
      equal = false;
    }
  });

  if (!equal) {
    popMsg('warning', 'you has the same post.');
    return false;
  }

  return bookmarks('create', createMarkConfig).then(() => {
    updatePostList();
    popMsg('success', 'add a read later post.');
  });
}

function concatDir(bks) {
  const destinationId = bks[0].id;
  info = Object.assign({}, bks[0]);
  bks.shift();

  bks.forEach(bk => {
    bookmarks('getChildren', bk.id)
      .then(result => {
        result.forEach(item => {
          bookmarks('move', item.id, { parentId: destinationId });
        });
      })
      .then(() => bookmarks('remove', bk.id));
  });
}

function addPost() {
  const addPostConfig = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(addPostConfig, tabs => {
    if (tabs.length === 1) {
      const { title, url } = tabs[0];

      createMark(title, url);
      setbadge();
    } else {
      throw new Error('add post ERROR');
    }
  });
}

// ==== run event callback ==== //
function updateSettings(type, data) {
  /* update bookmark folder name */
  let updateFolderName;

  if (data && data.title !== folderName) {
    updateFolderName = true;
  }

  settings = type === 'reset_settings' ? config : data;
  if (updateFolderName) {
    folderName = settings.title;

    bookmarks('update', info.id, {
      title: folderName,
    });
    // chrome
    //   .bookmarks
    //   .update(info.id, { title: folderName });
  }
}

function removeMark(id) {
  postList.forEach((post, index) => {
    if (post.id === id) {
      postList.splice(index, 1);
    }
  });

  bookmarks('remove', id).then(() => {
    updatePostList();
    popMsg('success', 'remove post.');
  });
}

function build(title) {
  return new Promise((resolve, reject) => {
    bookmarks('search', { title })
      .then(bks => {
        if (bks.length) {
          concatDir(bks);
          resolve(info);
        } else {
          bookmarks('create', { title }).then(result => {
            resolve(result);
          });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

function clearPost() {
  bookmarks('removeTree', info.id)
    .then(() => build(folderName))
    .then(result => {
      info = result;
      updatePostList();
      setbadge();
    });
}

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

// create a rightclick menu
function createContxtMenus() {
  chrome.contextMenus.create({
    title: 'read later',
    contexts: ['page'],
    onclick: addPost,
  });
}

function listener() {
  chrome.runtime.onMessage.addListener(details => {
    const { type, data } = details;
    update(type, data);
  });

  // listener Command
  chrome.commands.onCommand.addListener(commands => {
    if (commands === 'add-new-post') {
      addPost();
    }
  });
}

/*
 *  initializtion
 */

build(folderName).then(result => {
  info = result;
  updatePostList();
  setbadge();
});

chrome.browserAction.setBadgeBackgroundColor({ color: '#4779ED' });

createContxtMenus();
listener();
