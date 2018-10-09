import { UPDATE_SETTINGS } from '../constents';

export default (state = { data: {}, state: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'update_settingsPanel':
      return Object.assign({}, state, { state: payload });
    case UPDATE_SETTINGS: {
      chrome.runtime.sendMessage({ type: UPDATE_SETTINGS, payload });
      return Object.assign({}, state, { payload });
    }
    default:
      return state;
  }
};
