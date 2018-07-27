export default function bookmarks(type, ...config) {
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
