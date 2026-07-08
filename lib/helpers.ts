import type { BookmarkTreeNode } from 'wxt/browser';

export function bookmarks(type: string, ...config: unknown[]): Promise<BookmarkTreeNode[]> {
  return new Promise((resolve, reject) => {
    try {
      (browser.bookmarks as Record<string, Function>)[type](
        ...config,
        (result: BookmarkTreeNode[]) => {
          resolve(result);
        },
      );
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
