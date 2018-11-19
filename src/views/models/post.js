import { msgApi } from "../../chromeApi/index";
import { GET_POSTS, RETURN_POSTS, REMOVE_POST } from "../../constents";

export default {
  namespace: "post",
  state: {
    post: [],
    viewPost: [],
  },
  reducers: {
    refreshPosts: (state, newPosts) => ({ post: newPosts, viewPost: newPosts }),
    filterPosts: (state, key) => {
      if (!key) return Object.assign({}, state, { viewPost: state.post });
      const { post } = state;
      const tempArr = [];

      post.forEach(item => {
        const title = item.title.trim().toLowerCase();

        if (title.indexOf(key.trim().toLowerCase()) >= 0) {
          tempArr.push(item);
        }
      });

      return Object.assign({}, state, { viewPost: tempArr });
    },
  },
  flows: {
    updatePosts: async actions => {
      msgApi.sendMessage({ type: GET_POSTS });
      let posts = await msgApi.receiveMessage(RETURN_POSTS);

      actions.post.refreshPosts(posts);
    },
    removePost: async (actions, id) => {
      await msgApi.sendMessage({ type: REMOVE_POST, payload: id });
      const posts = await msgApi.receiveMessage(RETURN_POSTS);

      actions.post.refreshPosts(posts);
    },
  },
};
