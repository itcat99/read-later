import search from './search';
import updateMask from './updateMask';

import * as posts from './posts';
import * as settings from './settings';

export default {
  search,
  updateMask,
  ...posts,
  ...settings,
};
