import {
  GET_SETTINGS,
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_PANEL,
} from '../constents';

export const updateSettings = settings => ({
  type: UPDATE_SETTINGS,
  payload: settings,
});
export const getSettings = () => ({ type: GET_SETTINGS });
export const updateSettingsPanel = state => ({
  type: UPDATE_SETTINGS_PANEL,
  payload: state,
});
