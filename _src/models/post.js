import { getPosts } from '../helpers';

export default {
  namespace: 'post',
  state: {
    posts: [],
  },
  reducers: {
    updatePost: (state, payload) => {
      return payload;
    },
  },
  flows: {
    getPosts: async (getState, payload, actions) => {
      const posts = await getPosts();

      actions['post'].updatePost(posts);
    },
  },
};
