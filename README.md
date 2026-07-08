# Read Later

![license](https://img.shields.io/badge/license-MIT-blue.svg)
![version](https://img.shields.io/badge/version-v0.3.8-brightgreen.svg)

A Chrome extension for saving links to read later. Uses Chrome Bookmark API as
storage backend, built with WXT + React 19 + TypeScript + Zustand.

---

![read-later](https://github.com/itcat99/read-later/blob/main/public/icons/icon_48.png?raw=true)

> Icon by [Zeeman](https://dribbble.com/Zeeman)

---

## How to use

### Local Development

```bash
git clone https://github.com/itcat99/read-later.git
cd read-later
bun install
bun dev        # start WXT dev mode with HMR
bun run build  # production build → dist/
```

Then load `dist/` as an unpacked extension in Chrome at `chrome://extensions`.

### Chrome Web Store

[Read Later on Chrome Web Store](https://chrome.google.com/webstore/detail/read-later/fljjbnapfhadigagkokchheegldfmghf)

---

## Tech Stack

| Category      | Technology           |
| ------------- | -------------------- |
| Framework     | WXT 0.20 + Vite      |
| Runtime       | Chrome Extension MV3 |
| UI            | React 19 + Hooks     |
| Styling       | styled-components 6  |
| State         | Zustand 5            |
| Lint / Format | Biome                |
| Storage       | Chrome Bookmark API  |
| Package       | Bun                  |
| Language      | TypeScript           |

---

## Features

- Save current page via right-click context menu or `Ctrl+Shift+M`
- View, search, and delete saved links in popup panel
- Clear all links with confirmation dialog
- Configurable settings panel (bookmark folder name, favicon API, etc.)
- Export to Netscape Bookmark HTML
- Badge counter on extension icon

---

## Project Structure

```
entrypoints/          # WXT entry points
├── background.ts     # Service Worker
└── popup/            # Popup panel (React)
lib/                  # Shared utilities
├── config.ts         # Default configuration
├── constents.ts      # Message type constants
└── helpers.ts        # Chrome API wrappers
stores/               # Zustand stores
├── postsStore.ts
├── settingsStore.ts
└── maskStore.ts
public/icons/         # Static icons
```
