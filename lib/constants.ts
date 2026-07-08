// Message type constants — shared between background and popup

/* posts */
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const GET_POSTS = 'GET_POSTS';
export const RETURN_POSTS = 'RETURN_POSTS';
export const CLEAR = 'CLEAR';

/* settings */
export const GET_SETTINGS = 'GET_SETTINGS';
export const RETURN_SETTINGS = 'RETURN_SETTINGS';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const RESET_SETTINGS = 'RESET_SETTINGS';

export type MessageType =
  | typeof ADD_POST
  | typeof REMOVE_POST
  | typeof GET_POSTS
  | typeof RETURN_POSTS
  | typeof CLEAR
  | typeof GET_SETTINGS
  | typeof RETURN_SETTINGS
  | typeof UPDATE_SETTINGS
  | typeof RESET_SETTINGS;

export interface Message<T = unknown> {
  type: MessageType;
  payload?: T;
}
