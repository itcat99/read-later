import { UPDATE_SETTINGS, UPDATE_SETTINGS_PANEL } from '../constents';

export default (state = { payload: {}, state: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_SETTINGS_PANEL:
      return Object.assign({}, state, { state: payload });
    case UPDATE_SETTINGS: {
      chrome.runtime.sendMessage({ type: UPDATE_SETTINGS, payload });
      return Object.assign({}, state, { payload });
    }
    default:
      return state;
  }
};
