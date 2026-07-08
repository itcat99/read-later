export interface Config {
  title: string;
  favicon_api: string;
  img_timeout: number;
  img_default: string;
}

const config: Readonly<Config> = Object.freeze({
  title: '__read_later__',
  favicon_api: 'https://www.google.com/s2/favicons?domain=',
  img_timeout: 3000,
  img_default: './icons/icon_48.png',
});

export default config;
