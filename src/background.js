let postList = [];

// get post list in chrome storage
chrome.storage.sync.get(null, data => {
  const list = data.readLaterList;
  if (Array.isArray(list) && list.length) {
    postList = list || [];
  }

  setBadge();
});

// listen change && update
chrome.runtime.onMessage.addListener(details => {
  const {
    type,
    data
  } = details;

  update(type, data);
})

// create a rightclick menu
chrome.contextMenus.create({
  title: 'read later',
  contexts: ['page'],
  onclick: addNewPost
})

// listener Command
chrome.commands.onCommand.addListener(commands => {
  if(commands === 'add-new-post'){
    addNewPost();
  }
})


/*
 *  utils
 */
function update(type, data) {
  if (type === 'remove') {
    removePost(data.index);
  }

  if (type === 'clear') {
    clearPost();
  }

  if (type === 'add') {
    data.apply(this);
  }

  setBadge();
}

function setBadge() {
  const count = postList.length;

  chrome.browserAction.setBadgeText({
    text: count > 99 ? `+${count}` : `${count}`
  });
}

function removePost(index) {
  postList.splice(index, 1);

  if (postList.length) {
    postList.map((item, index) => {
      item.index = index;
    })
  }

  updateStorage(postList);
}

function clearPost() {
  clearStorage();
  postList = [];
}

function updateStorage(list, callback) {
  chrome.storage.sync.set({
    readLaterList: list
  }, () => {
    if (callback) {
      callback();
    }
  });
}

function clearStorage() {
  chrome.storage.sync.remove('readLaterList');
}

// add new read later
async function addNewPost() {
  let info = await getTabInfo();

  postList.push({
    url: info.url,
    index: postList.length,
    info
  });

  update('add', () => {
    // set post list to browser storage
    updateStorage(postList, showSuccess.apply(this))
  })
}

// show success information
function showSuccess() {
  chrome.notifications.create({
    iconUrl: './icons/icon.png',
    type: 'basic',
    title: 'success!',
    message: 'add a read later post.'
  })
}

// get current tab info
function getTabInfo() {
  return new Promise((resolve, reject) => {
    const config = {
      active: true,
      currentWindow: true
    }
    chrome.tabs.query(config, tabs => {
      if (tabs.length === 1) {
        resolve(tabs[0]);
      } else {
        reject();
      }
    })
  })
}