/* eslint no-console:0 */

import config from './config';
import bookmarks from './utils';

let info = {};
let postList = [];
let settings = config;

let folderName = settings.title;

chrome.browserAction.setPopup({
  popup: './popup.html',
});

async function getFolder(title) {
  return await bookmarks('search', {
    title,
  });
}

async function createFolder(title) {
  return await bookmarks('create', {
    title,
  });
}

async function concatDir(bks) {
  const destinationId = bks[0].id;
  const info = Object.assign({}, bks[0]);
  bks.shift();

  for (let i in bks) {
    const result = await bookmarks('getChildren', bks[i].id);

    for (let j in result) {
      await bookmarks('move', result[j].id, {
        parentId: destinationId,
      });
    }

    await bookmarks('remove', bks[i].id);

    return info;
  }
}

function setbadge() {
  if (!info.id) {
    chrome.browserAction.setBadgeText({
      text: '0',
    });
    return false;
  }

  const count = postList.length;
  chrome.browserAction.setBadgeText({
    text: count > 99 ? `+${count}` : `${count}`,
  });
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

async function clearPost() {
  try {
    for (let i in postList) {
      await bookmarks('remove', postList[i].id);
      postList = [];
      setbadge();
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function removeMark(id) {
  await bookmarks('remove', id);
  await updatePostList();
  // postList = await bookmarks('getChildren', info.id);
  // setbadge();
  popMsg('success', 'remove post.');
}

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
  }
}

function popMsg(title, message) {
  chrome.notifications.create({
    iconUrl: './icons/icon_128.png',
    type: 'basic',
    title,
    message,
  });
}

async function updatePostList() {
  postList = await bookmarks('getChildren', info.id);
  setbadge();
}

async function createMark(title, url) {
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

  await bookmarks('create', createMarkConfig);
  await updatePostList();
  popMsg('success', 'add a read later post.');
}

function addPost() {
  const addPostConfig = {
    active: true,
    currentWindow: true,
  };

  chrome.tabs.query(addPostConfig, async tabs => {
    if (tabs.length === 1) {
      const { title, url } = tabs[0];

      await createMark(title, url);
    } else {
      throw new Error('add post ERROR');
    }
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
    chrome.runtime.sendMessage({
      type: 'return_data',
      data: info,
    });
  }

  if (type === 'get_settings') {
    chrome.runtime.sendMessage({
      type: 'return_settings',
      data: settings,
    });
  }

  if (type === 'reset_settings' || type === 'save_settings') {
    updateSettings(type, data);
  }
}

/* MAIN FUNCTION */
(async () => {
  const folders = await getFolder(folderName);
  const foldersSize = folders.length;
  let folderInfo;

  switch (foldersSize) {
    case 0:
      folderInfo = await createFolder(folderName);
      break;
    case 1:
      folderInfo = folders[0];
      break;
    default:
      folderInfo = await concatDir(folders);
      break;
  }

  info = Object.assign({}, info, folderInfo);
  await updatePostList();
  chrome.browserAction.setBadgeBackgroundColor({
    color: '#4779ED',
  });

  createContxtMenus();
  listener();
})();
