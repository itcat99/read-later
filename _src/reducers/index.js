import { combineReducers } from 'redux';

import posts from './posts';
import mask from './mask';
import settings from './settings';

export default combineReducers({
  posts,
  mask,
  settings,
});
