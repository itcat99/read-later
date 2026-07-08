import type { BookmarkTreeNode } from 'wxt/browser';

type BookmarkMethod = 'search' | 'create' | 'getChildren' | 'move' | 'update' | 'remove';

export function bookmarks(type: 'search', query: { title: string }): Promise<BookmarkTreeNode[]>;
export function bookmarks(
  type: 'create',
  details: browser.bookmarks.CreateDetails,
): Promise<BookmarkTreeNode>;
export function bookmarks(type: 'getChildren', id: string): Promise<BookmarkTreeNode[]>;
export function bookmarks(
  type: 'move',
  id: string,
  destination: browser.bookmarks.Destination,
): Promise<BookmarkTreeNode>;
export function bookmarks(
  type: 'update',
  id: string,
  changes: browser.bookmarks.UpdateChanges,
): Promise<BookmarkTreeNode>;
export function bookmarks(type: 'remove', id: string): Promise<void>;
export function bookmarks(type: BookmarkMethod, ...args: unknown[]): Promise<unknown> {
  return new Promise((resolve, reject) => {
    try {
      const api = browser.bookmarks[type] as (...a: unknown[]) => Promise<unknown> | undefined;
      const callback = (result: unknown) => {
        resolve(result);
      };
      api.call(browser.bookmarks, ...args, callback);
    } catch (error) {
      reject(error);
    }
  });
}

export function popMsg(title: string, message: string): void {
  browser.notifications.create({
    iconUrl: './icons/icon_128.png',
    type: 'basic',
    title,
    message,
  });
}

export function sendMsg<T = unknown>(type: string, payload?: T): void {
  browser.runtime.sendMessage({ type, payload });
}
