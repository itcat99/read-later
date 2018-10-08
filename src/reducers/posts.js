export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'update':
      return payload;
    case 'remove': {
      const posts = [];

      state.forEach(item => {
        if (item.id !== payload) {
          posts.push(item);
        } else {
          chrome.runtime.sendMessage({
            type: 'remove',
            data: payload,
          });
        }
      });

      return posts;
    }
    case 'search': {
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
    case 'clear':
      chrome.runtime.sendMessage({
        type: 'clear',
      });
      return [];
    default:
      return state;
  }
};
