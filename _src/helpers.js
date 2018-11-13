export function bookmarks(type, ...config) {
  return new Promise((resolve, reject) => {
    try {
      chrome.bookmarks[type](...config, result => {
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export function popMsg(title, message) {
  chrome.notifications.create({
    iconUrl: './icons/icon_128.png',
    type: 'basic',
    title,
    message,
  });
}

export function sendMsg(type, payload) {
  chrome.runtime.sendMessage({ type, payload });
}
