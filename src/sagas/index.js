import { take, put, call, all } from 'redux-saga/effects';
import {
  GET_POSTS,
  GET_SETTINGS,
  UPDATE_SETTINGS,
  RETURN_SETTINGS,
  RETURN_POSTS,
  UPDATE_POSTS,
} from '../constents';

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

// function getList(data) {
//   return new Promise((resolve, reject) => {
//     chrome.bookmarks.getChildren(data.id, result => {
//       if (!result.length) {
//         reject();
//       }

//       // const posts = [];
//       // console.log('result: ', result);
//       // result.forEach(bk => {
//       //   addPost(bk, posts);
//       // });

//       resolve(result);
//     });
//   });
// }
function fetchPosts() {
  return new Promise((resolve, reject) => {
    chrome.runtime.onMessage.addListener(async details => {
      try {
        const { type, payload } = details;

        if (type === RETURN_POSTS) {
          // const posts = await getList(payload);
          resolve(payload);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}

function fetchSettings() {
  return new Promise((resolve, reject) => {
    try {
      chrome.runtime.onMessage.addListener(details => {
        const { type, payload } = details;

        if (type === RETURN_SETTINGS) {
          resolve(payload);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
}

function* getPosts() {
  while (true) {
    yield take(GET_POSTS);
    chrome.runtime.sendMessage({ type: GET_POSTS });
    const data = yield call(fetchPosts);
    yield call(updatePost, data);
  }
}

function* getSettings() {
  while (true) {
    yield take(GET_SETTINGS);
    chrome.runtime.sendMessage({ type: GET_SETTINGS });
    const settings = yield call(fetchSettings);
    yield call(updateSettings, settings);
  }
}

function* updatePost(payload) {
  yield put({ type: UPDATE_POSTS, payload });
}
function* updateSettings(payload) {
  yield put({ type: UPDATE_SETTINGS, payload });
}

export default function* listener() {
  yield all([getPosts(), getSettings()]);
}
