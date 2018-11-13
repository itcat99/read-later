import { GET_POSTS, GET_SETTINGS } from '../constents';
import { RETURN_POSTS, RETURN_SETTINGS } from '../constents';

export const getPosts = () => {
  chrome.runtime.sendMessage({ type: GET_POSTS });
  return new Promise((resolve, reject) => {
    chrome.runtime.onMessage.addListener(async details => {
      try {
        const { type, payload } = details;

        if (type === RETURN_POSTS) {
          resolve(payload);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};

export const getSettings = () => {
  chrome.runtime.sendMessage({ type: GET_SETTINGS });
  return new Promise((resolve, reject) => {
    chrome.runtime.onMessage.addListener(async details => {
      try {
        const { type, payload } = details;

        if (type === RETURN_SETTINGS) {
          resolve(payload);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
};
