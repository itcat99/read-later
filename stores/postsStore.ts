import { create } from 'zustand';
import type { Message } from '../lib/constents';
import { CLEAR, GET_POSTS, REMOVE_POST } from '../lib/constents';

interface Post {
  id: string;
  title: string;
  url: string;
  show: boolean;
  dateAdded?: number;
}

interface PostsState {
  posts: Post[];
  updatePosts: (posts: Post[]) => void;
  removePost: (id: string) => void;
  clear: () => void;
  search: (keyword: string) => void;
  getPosts: () => void;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],

  updatePosts: (posts: Post[]) => {
    set({ posts });
  },

  removePost: (id: string) => {
    browser.runtime.sendMessage({ type: REMOVE_POST, payload: id } as Message);
    set((state) => ({
      posts: state.posts.filter((item) => item.id !== id),
    }));
  },

  clear: () => {
    browser.runtime.sendMessage({ type: CLEAR } as Message);
    set({ posts: [] });
  },

  search: (keyword: string) => {
    const lower = keyword.toLowerCase();
    set((state) => ({
      posts: state.posts.map((item) => ({
        ...item,
        show: lower ? item.title.toLowerCase().includes(lower) : true,
      })),
    }));
  },

  getPosts: () => {
    browser.runtime.sendMessage({ type: GET_POSTS } as Message);
  },
}));
