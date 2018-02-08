import config from './config';

/*
 *  initializtion
 */
let info = {};
let postList = [];

build().then(result => {
  updatePostList(result)
  setbadge();
})

createContxtMenus();
listener();


/*
 * Core
 */
function build() {
  return new Promise((resolve, reject) => {
    chrome.bookmarks.search({
      title: config.title
    }, bks => {
      bks.length ?
        concatDir(bks) :
        createDir();

      resolve(info);
    })
  })
}

// create a rightclick menu
function createContxtMenus() {
  chrome.contextMenus.create({
    title: 'read later',
    contexts: ['page'],
    onclick: addPost
  })
}

function listener() {
  chrome.runtime.onMessage.addListener(details => {
    const {
      type,
      data
    } = details;
    update(type, data)
  })

  // listener Command
  chrome.commands.onCommand.addListener(commands => {
    if (commands === 'add-new-post') {
      addPost();
    }
  })
};

/*
 * Methods
 */
function updatePostList(info) {
  chrome.bookmarks.getChildren(info.id, result => {
    postList = result;
  })
}
// ==== set popup badge ==== //
function setbadge() {
  chrome.bookmarks.getChildren(info.id, result => {
    let count;

    count = result? result.length: 0;
    chrome.browserAction.setBadgeText({
      text: count > 99 ? `+${count}` : `${count}`
    });
  })
}

function createDir() {
  chrome.bookmarks.create({
    title: config.title
  }, result => {
    info = Object.assign({}, result[0]);
  })
}

function concatDir(bks) {
  const destinationId = bks[0].id;
  info = Object.assign({}, bks[0]);

  bks.shift();

  bks.forEach(bk => {
    chrome.bookmarks.getChildren(bk.id, result => {
      result.forEach(item => {
        chrome.bookmarks.move(item.id, {
          parentId: destinationId
        });
      })

      chrome.bookmarks.remove(bk.id)
    })
  })
}

function createMark(title, url) {
  const config = {
    parentId: info.id,
    title,
    url
  }

  chrome.bookmarks.create(config, () => popMsg('success', 'add a read later post.'))
}

function removeMark(id) {
  chrome.bookmarks.remove(id, popMsg('success', 'remove post.'));
}

// show message
function popMsg(title, message) {
  chrome.notifications.create({
    iconUrl: './icons/icon_128.png',
    type: 'basic',
    title,
    message
  })
}

function addPost() {
  const config = {
    active: true,
    currentWindow: true
  }

  chrome.tabs.query(config, tabs => {
    if (tabs.length === 1) {
      const {
        title,
        url
      } = tabs[0];

      for (let item of postList) {
        if (item.url === url) {
          return false;
        }
      }

      createMark(title, url);

      setbadge();
    } else {
      throw 'add post ERROR';
    }
  })
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
    })
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