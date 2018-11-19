/* eslint no-console:0 */

import { bookmarkApi, tabsApi } from "../chromeApi";
import { GET_POSTS, RETURN_POSTS, REMOVE_POST } from "../constents";

const OTHER_BOOKMARK_FOLDER_ID = "2";
const DEFALUT_CONFIG = {
  folder: "__read_later__",
};

class ReadLater {
  constructor(config) {
    this.posts = [];
    this.config = Object.assign({}, DEFALUT_CONFIG, config);
  }

  async _getInfo(folder) {
    const result = await bookmarkApi.search(folder);
    const folderArr = [];

    result.forEach(item => {
      const { parentId } = item;

      if (parentId === OTHER_BOOKMARK_FOLDER_ID) {
        folderArr.push(item);
      }
    });

    if (folderArr.length === 1) {
      return folderArr[0];
    } else {
      const targetId = folderArr[0].id;
      folderArr.shift();

      folderArr.forEach(async item => {
        const { id } = item;
        const children = await bookmarkApi.getChildren(id);
        children.forEach(async child => {
          await bookmarkApi.move(child.id, {
            parentId: targetId,
          });
        });

        await bookmarkApi.remove(id);
      });

      return this._getInfo(targetId);
    }
  }

  async _hasFolder(folder) {
    const result = await bookmarkApi.search(folder);
    console.log("has folder result: ", result);

    return result.length > 0;
  }
  _createFolder(folder) {
    return bookmarkApi.create({
      parentId: OTHER_BOOKMARK_FOLDER_ID,
      title: folder,
    });
  }

  _getPosts(id) {
    return bookmarkApi.getChildren(id);
  }

  _listener() {
    chrome.runtime.onMessage.addListener(msg => {
      this._updateWithView(msg);
    });

    /* Following is about bookmark's events */
    chrome.bookmarks.onCreated.addListener(async (id, bookmark) => {
      if (bookmark.parentId === this.info.id) {
        await this._update();
      }
    });
    chrome.bookmarks.onMoved.addListener(async () => {
      await this._update();
    });
    chrome.bookmarks.onRemoved.addListener(async (id, removeInfo) => {
      if (removeInfo.parentId === this.info.id) {
        await this._update();
      }
    });
    chrome.bookmarks.onChanged.addListener(async id => {
      const bookmarkInfo = await bookmarkApi.get(id);
      if (bookmarkInfo.parentId === this.info.id) {
        await this._update();
      }
    });
    chrome.bookmarks.onImportEnded.addListener(async () => {
      await this._update();
    });

    /* with contextMenus */
    chrome.contextMenus.onClicked.addListener(async () => {
      let checked = true;
      const result = await tabsApi.query({
        active: true,
        currentWindow: true,
      });
      const currentTab = result[0];
      this.posts.forEach(item => {
        if (item.url === currentTab.url) {
          checked = false;
        }
      });

      if (!checked) {
        this._popMsg("error", "has the same post.");
        return false;
      }

      await bookmarkApi.create({
        parentId: this.info.id,
        title: currentTab.title,
        url: currentTab.url,
      });

      this._update();
      this._popMsg("success", "add a read later post.");
    });
  }

  _updateWithView(msg) {
    const { type, payload } = msg;

    switch (type) {
      case GET_POSTS:
        this._sendMsg({ type: RETURN_POSTS, payload: this.posts });
        break;
      case REMOVE_POST:
        bookmarkApi.remove(payload).then(async () => {
          await this._update();
          this._sendMsg({ type: RETURN_POSTS, payload: this.posts });
        });
        break;
      default:
        return;
    }
  }

  _sendMsg(msg) {
    chrome.runtime.sendMessage(msg);
  }

  _setBadgeNum(num = 0) {
    if (num > 99) {
      num = "99+";
    }

    chrome.browserAction.setBadgeText({
      text: num + "",
    });
  }

  _createContxtMenus() {
    chrome.contextMenus.create({
      title: "read later",
      id: "read-later-contextMenus",
      contexts: ["page"],
    });
  }

  _popMsg(title, message) {
    chrome.notifications.create({
      iconUrl: "./icons/icon_128.png",
      type: "basic",
      title,
      message,
    });
  }

  _setBadgeColor() {
    chrome.browserAction.setBadgeBackgroundColor({
      color: "#4779ED",
    });
  }

  async _update() {
    this.posts = await this._getPosts(this.info.id);
    this._setBadgeNum(this.posts.length);
  }

  async run() {
    const { folder } = this.config;

    if (!(await this._hasFolder(folder))) {
      await this._createFolder(folder);
    }

    this.info = await this._getInfo(folder);
    await this._update();

    this._createContxtMenus();
    this._listener();
  }
}

chrome.runtime.onInstalled.addListener(() => {
  const app = new ReadLater();

  app
    .run()
    .then(() => {
      console.log("> app is running...");
    })
    .catch(err => {
      console.error("> app start has Err: ", err);
    });
});
