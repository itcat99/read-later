/* eslint no-console:0 */

import config from './config';
import { bookmarks, popMsg, sendMsg } from './helpers';
import {
  ADD_POST,
  REMOVE_POST,
  GET_POSTS,
  RETURN_POSTS,
  CLEAR,
  GET_SETTINGS,
  RETURN_SETTINGS,
  UPDATE_SETTINGS,
  RESET_SETTINGS,
} from './constents';

class ReadLater {
  constructor(config) {
    this.cacheConfig = config;
    this.config = config;

    this.folderName = this.config.title;
    this.info = {};
    this.posts = [];

    this.init().then(() => {
      this.createContxtMenus();
      this.listener();
    });
  }

  async init() {
    const folders = await this.getFolder(this.folderName);
    let tempInfo;

    if (folders && folders.length) {
      tempInfo = Object.assign({}, await this.concatDir(folders));
    } else {
      tempInfo = Object.assign({}, await this.createFolder(this.fold));
    }

    this.info = Object.assign({}, this.info, tempInfo);
    this.posts = await this.getPosts(this.info.id);
    this.setBadgeNum(this.info, this.posts);
    this.setBadgeColor();
  }

  listener() {
    chrome.runtime.onMessage.addListener(details => {
      const { type, payload } = details;
      this.update(type, payload);
    });

    // listener Command
    chrome.commands.onCommand.addListener(commands => {
      if (commands === ADD_POST) {
        this.addPost();
      }
    });
  }

  addPost = () => {
    const addPostConfig = {
      active: true,
      currentWindow: true,
    };

    chrome.tabs.query(addPostConfig, async tabs => {
      if (tabs.length === 1) {
        const { title, url } = tabs[0];
        this.createMark(title, url);
      } else {
        throw new Error('add post ERROR');
      }
    });
  };

  async createMark(title, url, info = this.info, posts = this.posts) {
    const createMarkConfig = {
      parentId: info.id,
      title,
      url,
    };

    let equal = true;
    posts.forEach(item => {
      if (item.url === url) {
        equal = false;
      }
    });

    if (!equal) {
      popMsg('warning', 'you has the same post.');
      return false;
    }

    await bookmarks('create', createMarkConfig);
    this.posts = await this.getPosts(this.info.id);
    await this.setBadgeNum(this.info, this.posts);
    popMsg('success', 'add a read later post.');
  }

  async concatDir(folders) {
    if (folders.length === 1) {
      return folders[0];
    }
    const destinationId = folders[0].id;
    const info = Object.assign({}, folders[0]);
    folders.shift();

    for (let i in folders) {
      const result = await bookmarks('getChildren', folders[i].id);

      for (let j in result) {
        await bookmarks('move', result[j].id, {
          parentId: destinationId,
        });
      }

      await bookmarks('remove', folders[i].id);

      return info;
    }
  }

  async getPosts(folderId) {
    return await bookmarks('getChildren', folderId);
  }
  async getFolder(title) {
    return await bookmarks('search', {
      title,
    });
  }

  async createFolder(title) {
    return await bookmarks('create', {
      title,
    });
  }

  setBadgeNum(info, posts) {
    if (!info.id) {
      chrome.browserAction.setBadgeText({
        text: '0',
      });
      return false;
    }

    const count = posts.length;
    chrome.browserAction.setBadgeText({
      text: count > 99 ? `+${count}` : `${count}`,
    });
  }

  setBadgeColor() {
    chrome.browserAction.setBadgeBackgroundColor({
      color: '#4779ED',
    });
  }

  update(type, payload) {
    switch (type) {
      case REMOVE_POST:
        this.removeMark(payload);
        break;
      case CLEAR:
        this.clear();
        break;
      case GET_POSTS:
        sendMsg(RETURN_POSTS, this.posts);
        break;
      case GET_SETTINGS:
        sendMsg(RETURN_SETTINGS, this.config);
        break;
      case UPDATE_SETTINGS:
      case RESET_SETTINGS:
        this.updateSettings(type, payload, this.info);
        break;
      default:
        break;
    }
  }

  async removeMark(id) {
    console.log('remove id: ', id);
    await bookmarks('remove', id);
    this.posts = await this.getPosts(this.info.id);
    this.setBadgeNum(this.info, this.posts);
    popMsg('success', 'remove post.');
  }

  async clear(posts = this.posts) {
    try {
      for (let i in posts) {
        await bookmarks('remove', posts[i].id);
      }
      posts = [];
      this.setBadgeNum(this.info, posts);
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateSettings(type, payload, info = this.info) {
    if (type === RESET_SETTINGS) {
      this.config = this.cacheConfig;
    } else {
      const { title } = payload;
      if (title !== this.folderName) {
        this.config = Object.assign({}, this.config, payload);
      }
    }
    this.folderName = this.config.title;
    bookmarks('update', info.id, {
      title: this.folderName,
    });
  }

  createContxtMenus() {
    chrome.contextMenus.create({
      title: 'read later',
      contexts: ['page'],
      onclick: this.addPost,
    });
  }
}

chrome.browserAction.setPopup({
  popup: './popup.html',
});

new ReadLater(config);
