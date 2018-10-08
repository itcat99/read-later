import { take, put, call, all } from 'redux-saga/effects';

// function getIcon(url) {
//   const favicon_api = 'http://www.google.com/s2/favicons?domain=';

//   const src = favicon_api
//     ? `${favicon_api}${url.replace(/^(https|http):\/\//, '')}`
//     : `${url.match(/(^[a-zA-z]+:\/\/).*?\//)[0]}/favicon.ico`;

//   return src;
// }

// function addPost(details, postList) {
//   const { url, id, title, ...rest } = details;
//   const imgsrc = getIcon(url);

//   postList.push({ url, id, title, imgsrc, show: true, ...rest });
// }

function getList(data) {
  return new Promise((resolve, reject) => {
    chrome.bookmarks.getChildren(data.id, result => {
      if (!result.length) {
        reject();
      }

      // const posts = [];
      // console.log('result: ', result);
      // result.forEach(bk => {
      //   addPost(bk, posts);
      // });

      resolve(result);
    });
  });
}
function getPosts() {
  return new Promise((resolve, reject) => {
    chrome.runtime.onMessage.addListener(async details => {
      try {
        const { type, data } = details;
        if (type === 'return_data') {
          const posts = await getList(data);
          resolve(posts);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}

function getSettings() {
  return new Promise((resolve, reject) => {
    try {
      chrome.runtime.onMessage.addListener(details => {
        const { type, data } = details;

        if (type === 'return_settings') {
          resolve(data);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

function* fetchData() {
  while (true) {
    yield take('fetch');
    chrome.runtime.sendMessage({ type: 'get_data' });
    const data = yield call(getPosts);
    yield call(updatePost, data);
    chrome.runtime.sendMessage({ type: 'get_settings' });
    const settings = yield call(getSettings);
    yield call(updateSettings, settings);
  }
}

function* updatePost(payload) {
  yield put({ type: 'update', payload });
}
function* updateSettings(payload) {
  yield put({ type: 'update_settings', payload });
}

export default function* listener() {
  yield all([fetchData()]);
}
