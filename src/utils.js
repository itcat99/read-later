export default function bookmarks(type, ...config) {
  return new Promise((resolve, reject) => {
    chrome.bookmarks[type](...config, bks => {
      if (type === 'remove' || type === 'removeTree') {
        resolve();
      }

      if (bks) {
        resolve(bks);
      } else {
        reject(bks);
      }
    });
  });
}
