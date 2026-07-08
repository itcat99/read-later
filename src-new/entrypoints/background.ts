import config from '../lib/config';
import type { Config } from '../lib/config';
import { bookmarks, popMsg, sendMsg } from '../lib/helpers';
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
} from '../lib/constents';
import type { Message } from '../lib/constents';

export default defineBackground(() => {
  const cacheConfig: Config = { ...config };
  let currentConfig: Config = { ...config };
  let folderName = currentConfig.title;
  let folderInfo: browser.bookmarks.BookmarkTreeNode | null = null;
  let posts: browser.bookmarks.BookmarkTreeNode[] = [];

  async function init(): Promise<void> {
    const folders = await getFolder(folderName);

    if (folders && folders.length > 0) {
      folderInfo = await concatDir(folders);
    } else {
      folderInfo = await createFolder(folderName);
    }

    posts = await getPosts(folderInfo.id);
    setBadgeNum(folderInfo, posts);
    setBadgeColor();

    createContextMenus();
    setupContextMenuListener();
  }

  function setBadgeNum(
    info: browser.bookmarks.BookmarkTreeNode | null,
    postList: browser.bookmarks.BookmarkTreeNode[],
  ): void {
    if (!info?.id) {
      browser.action.setBadgeText({ text: '0' });
      return;
    }

    const count = postList.length;
    browser.action.setBadgeText({
      text: count > 99 ? `+${count}` : `${count}`,
    });
  }

  function setBadgeColor(): void {
    browser.action.setBadgeBackgroundColor({ color: '#4779ED' });
  }

  function createContextMenus(): void {
    browser.contextMenus.create({
      id: 'read-later',
      title: 'read later',
      contexts: ['page'],
    });
  }

  function setupContextMenuListener(): void {
    browser.contextMenus.onClicked.addListener((info, tab) => {
      if (info.menuItemId === 'read-later') {
        addPost();
      }
    });
  }

  // ---- Bookmark operations ----

  async function getFolder(
    title: string,
  ): Promise<browser.bookmarks.BookmarkTreeNode[]> {
    return bookmarks('search', { title });
  }

  async function createFolder(
    title: string,
  ): Promise<browser.bookmarks.BookmarkTreeNode> {
    return bookmarks('create', { title }) as Promise<browser.bookmarks.BookmarkTreeNode>;
  }

  async function getPosts(
    folderId: string,
  ): Promise<browser.bookmarks.BookmarkTreeNode[]> {
    return bookmarks('getChildren', folderId);
  }

  async function concatDir(
    folders: browser.bookmarks.BookmarkTreeNode[],
  ): Promise<browser.bookmarks.BookmarkTreeNode> {
    if (folders.length === 1) {
      return folders[0];
    }

    const destinationId = folders[0].id;
    const info = { ...folders[0] };
    folders.shift();

    for (const folder of folders) {
      const children = await bookmarks('getChildren', folder.id);
      for (const child of children) {
        await bookmarks('move', child.id, { parentId: destinationId });
      }
      await bookmarks('remove', folder.id);
      return info;
    }

    return info;
  }

  async function addPost(): Promise<void> {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true });
    if (tabs.length === 1) {
      const { title, url } = tabs[0];
      if (title && url) {
        await createMark(title, url);
      }
    } else {
      throw new Error('add post ERROR');
    }
  }

  async function createMark(
    title: string,
    url: string,
    info: browser.bookmarks.BookmarkTreeNode | null = folderInfo,
    postList: browser.bookmarks.BookmarkTreeNode[] = posts,
  ): Promise<boolean | void> {
    if (!info) return;

    const isDuplicate = postList.some((item) => item.url === url);
    if (isDuplicate) {
      popMsg('warning', 'you has the same post.');
      return false;
    }

    await bookmarks('create', {
      parentId: info.id,
      title,
      url,
    });

    posts = await getPosts(info.id);
    await setBadgeNum(info, posts);
    popMsg('success', 'add a read later post.');
  }

  async function removeMark(id: string): Promise<void> {
    await bookmarks('remove', id);
    if (folderInfo) {
      posts = await getPosts(folderInfo.id);
      setBadgeNum(folderInfo, posts);
    }
    popMsg('success', 'remove post.');
  }

  async function clear(
    postList: browser.bookmarks.BookmarkTreeNode[] = posts,
  ): Promise<void> {
    try {
      for (const post of postList) {
        await bookmarks('remove', post.id);
      }
      posts = [];
      if (folderInfo) {
        setBadgeNum(folderInfo, posts);
      }
    } catch (error) {
      throw new Error(String(error));
    }
  }

  async function updateSettings(
    type: string,
    payload: Partial<Config> | undefined,
    info: browser.bookmarks.BookmarkTreeNode | null = folderInfo,
  ): Promise<void> {
    if (type === RESET_SETTINGS) {
      currentConfig = { ...cacheConfig };
    } else {
      currentConfig = { ...currentConfig, ...payload };
    }
    folderName = currentConfig.title;

    if (info?.id) {
      bookmarks('update', info.id, { title: folderName });
    }
  }

  // ---- Message handling ----

  browser.runtime.onMessage.addListener(
    (details: Message, _sender: browser.runtime.MessageSender) => {
      const { type, payload } = details;
      handleMessage(type, payload);
    },
  );

  async function handleMessage(
    type: string,
    payload: unknown,
  ): Promise<void> {
    switch (type) {
      case REMOVE_POST:
        await removeMark(payload as string);
        break;
      case CLEAR:
        await clear();
        break;
      case GET_POSTS:
        sendMsg(RETURN_POSTS, posts);
        break;
      case GET_SETTINGS:
        sendMsg(RETURN_SETTINGS, currentConfig);
        break;
      case UPDATE_SETTINGS:
      case RESET_SETTINGS:
        await updateSettings(type, payload as Partial<Config> | undefined, folderInfo);
        break;
      default:
        break;
    }
  }

  // ---- Command listener ----

  browser.commands.onCommand.addListener((command: string) => {
    if (command === ADD_POST) {
      addPost();
    }
  });

  // ---- Initialize ----
  init();
});
