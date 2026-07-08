import { create } from 'zustand';
import type { Message } from '../lib/constants';
import { CLEAR, GET_POSTS, REMOVE_POST } from '../lib/constants';

export interface Post {
  id: string;
  title: string;
  url: string;
  dateAdded?: number;
}

interface PostsState {
  posts: Post[];
  searchKeyword: string;
  updatePosts: (posts: Post[]) => void;
  removePost: (id: string) => void;
  clear: () => void;
  search: (keyword: string) => void;
  getPosts: () => void;
}

export const usePostsStore = create<PostsState>((set) => ({
  posts: [],
  searchKeyword: '',

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
    set({ searchKeyword: keyword });
  },

  getPosts: () => {
    browser.runtime.sendMessage({ type: GET_POSTS } as Message);
  },
}));

export function filterPosts(posts: Post[], keyword: string): Post[] {
  if (!keyword) return posts;
  const lower = keyword.toLowerCase();
  return posts.filter((item) => item.title.toLowerCase().includes(lower));
}
