import { defineConfig } from 'wxt';

export default defineConfig({
  srcDir: 'src-new',
  manifest: {
    manifest_version: 3,
    name: 'Read Later',
    description: 'a chrome extension for saving links to read later.',
    version: '0.3.8',
  },
});
