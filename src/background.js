import config from './config';

/*
 *  initializtion
 */
let info = {};
let postList = [];
const settings = config;
let folderName = settings.title;

build(folderName).then(result => {
  info = result;
  updatePostList(result);
  setbadge()
})

createContxtMenus();
listener();

/*
 * Core
 */
function build(title) {
  // *************************** // Maybe optimization here     //
  // *************************** //
  return new Promise((resolve, reject) => {
    chrome
      .bookmarks
      .search({
        title
      }, bks => {
        bks.length
          ? (() => {
            concatDir(bks)
            resolve(info);
          })()
          : chrome
            .bookmarks
            .create({
              title
            }, result => {
              resolve(result)
            })
      })
  })
}

// create a rightclick menu
function createContxtMenus() {
  chrome
    .contextMenus
    .create({title: 'read later', contexts: ['page'], onclick: addPost})
}

function listener() {
  chrome
    .runtime
    .onMessage
    .addListener(details => {
      const {type, data} = details;
      update(type, data)
    })

  // listener Command
  chrome
    .commands
    .onCommand
    .addListener(commands => {
      if (commands === 'add-new-post') {
        addPost();
      }
    })
};

/*
 * Methods
 */
function updatePostList(info) {
  chrome
    .bookmarks
    .getChildren(info.id, result => {
      postList = result;
    })
}
// ==== set popup badge ==== //
function setbadge() {
  chrome
    .bookmarks
    .getChildren(info.id, result => {
      let count;

      count = result
        ? result.length
        : 0;
      chrome
        .browserAction
        .setBadgeText({
          text: count > 99
            ? `+${count}`
            : `${count}`
        });
    })
}

function createDir() {
  return new Promise((resolve, reject) => {
    chrome
      .bookmarks
      .create({
        title: settings.title
      }, result => {
        resolve(result)
      })
  })
}

function concatDir(bks) {
  const destinationId = bks[0].id;
  info = Object.assign({}, bks[0]);

  bks.shift();

  bks.forEach(bk => {
    chrome
      .bookmarks
      .getChildren(bk.id, result => {
        result.forEach(item => {
          chrome
            .bookmarks
            .move(item.id, {parentId: destinationId});
        })

        chrome
          .bookmarks
          .remove(bk.id)
      })
  })
}

function createMark(title, url) {
  const config = {
    parentId: info.id,
    title,
    url
  }

  let equal = true;
  for (let item of postList) {
    if (item.url === url) {
      equal = false;
    }
  }

  if (!equal) {
    popMsg('warning', 'you has the same post.');
    return false;
  }

  chrome
    .bookmarks
    .create(config, data => {
      updatePostList(info)
      popMsg('success', 'add a read later post.')
    })
}

function removeMark(id) {
  postList.forEach((post, index) => {
    if (post.id === id) {
      postList.splice(index, 1);
    }
  })

  chrome
    .bookmarks
    .remove(id, () => {
      updatePostList(info)
      popMsg('success', 'remove post.')
    });
}

// show message
function popMsg(title, message) {
  chrome
    .notifications
    .create({iconUrl: './icons/icon_128.png', type: 'basic', title, message})
}

function addPost() {
  const config = {
    active: true,
    currentWindow: true
  }

  chrome
    .tabs
    .query(config, tabs => {
      if (tabs.length === 1) {
        const {title, url} = tabs[0];

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
    chrome
      .runtime
      .sendMessage({type: 'return_data', data: info})
  }

  if (type === 'get_folderName') {
    chrome
      .runtime
      .sendMessage({type: 'return_folderName', data: folderName})
  }

  if (type === 'get_settings') {
    chrome
      .runtime
      .sendMessage({type: 'return_settings', data: settings})
  }

  if (type === 'reset_settings' || type === 'save_settings') {
    updateSettings(type, data)
  }

  setbadge();
}

function updateSettings(type, data) {
  folderName = type === 'reset_settings'
    ? config.title
    : data;

  // update bookmark folder name
  chrome
    .bookmarks
    .update(info.id, {title: folderName}, () => {
      // update setting
      settings.title = folderName;

      console.log(settings)
    })
}

function clearPost() {
  chrome
    .bookmarks
    .removeTree(info.id);
  chrome
    .runtime
    .reload();

  info = {};
  postList = [];
}