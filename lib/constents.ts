// Message type constants — shared between background and popup
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const GET_POSTS = 'GET_POSTS';
export const RETURN_POSTS = 'RETURN_POSTS';
export const CLEAR = 'CLEAR';

/* settings */
export const GET_SETTINGS = 'GET_SETTINGS';
export const RETURN_SETTINGS = 'RETURN_SETTINGS';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const RESET_SETTINGS = 'RESET_SETTINGS';
export const UPDATE_SETTINGS_PANEL = 'UPDATE_SETTINGS_PANEL';

/* search */
export const SEARCH = 'SEARCH';

export type MessageType =
  | typeof ADD_POST
  | typeof REMOVE_POST
  | typeof UPDATE_POSTS
  | typeof GET_POSTS
  | typeof RETURN_POSTS
  | typeof CLEAR
  | typeof GET_SETTINGS
  | typeof RETURN_SETTINGS
  | typeof UPDATE_SETTINGS
  | typeof RESET_SETTINGS
  | typeof UPDATE_SETTINGS_PANEL
  | typeof SEARCH;

export interface Message<T = unknown> {
  type: MessageType;
  payload?: T;
}
