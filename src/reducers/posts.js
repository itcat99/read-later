import { UPDATE_POSTS, REMOVE_POST, SEARCH, CLEAR } from '../constents';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_POSTS:
      return payload;
    case REMOVE_POST: {
      const posts = [];

      state.forEach(item => {
        if (item.id !== payload) {
          posts.push(item);
        } else {
          chrome.runtime.sendMessage({
            type: REMOVE_POST,
            payload,
          });
        }
      });

      return posts;
    }
    case SEARCH: {
      const posts = state.map(item => {
        const title = item.title.toLowerCase();

        if (title.indexOf(payload.toLowerCase()) < 0) {
          item.show = false;
        } else {
          item.show = true;
        }

        return item;
      });

      return posts;
    }
    case CLEAR:
      chrome.runtime.sendMessage({
        type: CLEAR,
      });
      return [];
    default:
      return state;
  }
};
