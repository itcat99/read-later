import { GET_POSTS, REMOVE_POST, CLEAR } from '../constents';

export const getPosts = () => ({ type: GET_POSTS });
export const removePost = id => ({ type: REMOVE_POST, payload: id });
export const clear = () => ({ type: CLEAR });
