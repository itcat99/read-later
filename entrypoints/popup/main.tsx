import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { RETURN_POSTS, RETURN_SETTINGS } from '../../lib/constents';
import type { Message } from '../../lib/constents';
import { usePostsStore } from '../../stores/postsStore';
import { useSettingsStore } from '../../stores/settingsStore';

browser.runtime.onMessage.addListener((msg: Message) => {
  const { type, payload } = msg;
  if (type === RETURN_POSTS) {
    usePostsStore.getState().updatePosts(payload as any[]);
  }
  if (type === RETURN_SETTINGS) {
    useSettingsStore.getState().updateSettings(payload as any);
  }
});

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
