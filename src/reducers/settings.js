export default (state = { data: {}, state: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'update_settingsPanel':
      return Object.assign({}, state, { state: payload });
    case 'update_settings': {
      chrome.runtime.sendMessage({ type: 'save_settings', data: payload });
      return Object.assign({}, state, { data: payload });
    }
    default:
      return state;
  }
};
