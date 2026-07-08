import { create } from 'zustand';
import { GET_SETTINGS, UPDATE_SETTINGS } from '../lib/constents';
import type { Message } from '../lib/constents';
import type { Config } from '../lib/config';
import defaultConfig from '../lib/config';

interface SettingsState {
  open: boolean;
  settings: Config;
  setOpen: (open: boolean) => void;
  getSettings: () => void;
  updateSettings: (settings: Config) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  open: false,
  settings: { ...defaultConfig },

  setOpen: (open: boolean) => {
    set({ open });
  },

  getSettings: () => {
    browser.runtime.sendMessage({ type: GET_SETTINGS } as Message);
  },

  updateSettings: (settings: Config) => {
    browser.runtime.sendMessage({
      type: UPDATE_SETTINGS,
      payload: settings,
    } as Message);
    set({ settings, open: false });
  },
}));
