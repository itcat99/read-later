import type React from 'react';
import { memo } from 'react';
import { usePostsStore } from '../../stores/postsStore';
import { useSettingsStore } from '../../stores/settingsStore';
import Search from './Search';

const Header: React.FC = () => {
  const search = usePostsStore((s) => s.search);
  const setOpen = useSettingsStore((s) => s.setOpen);
  const getVersion = () => browser.runtime.getManifest().version;

  return (
    <header className="relative flex items-center flex-wrap px-3 py-1.5 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-baseline flex-grow w-full">
        <h1 className="m-0 mr-1.5 text-xl leading-7 text-gray-700 dark:text-gray-200 font-semibold">
          Read Later
        </h1>
        <span className="text-xs text-gray-400 dark:text-gray-500">{getVersion()}</span>
      </div>

      <button
        type="button"
        title="Settings"
        onClick={() => setOpen(true)}
        className="inline-block min-w-[16px] h-4 bg-no-repeat bg-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundImage: "url('../icons/settings.svg')", backgroundSize: '100%' }}
      />

      <div className="flex-grow mt-2.5 flex gap-1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/itcat99/read-later"
          className="inline-block min-w-[16px] h-4 opacity-50 hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage: "url('../icons/github.svg')",
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <span className="sr-only">GitHub</span>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:boiping2010@gmail.com"
          className="inline-block min-w-[16px] h-4 opacity-50 hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage: "url('../icons/email.svg')",
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <span className="sr-only">Email</span>
        </a>
      </div>

      <Search search={search} />
    </header>
  );
};

export default memo(Header);
