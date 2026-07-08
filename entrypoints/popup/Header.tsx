import { memo } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { HiOutlineCog6Tooth, HiOutlineEnvelope } from 'react-icons/hi2';
import { usePostsStore } from '../../stores/postsStore';
import { useSettingsStore } from '../../stores/settingsStore';
import Search from './Search';

const Header = memo(() => {
  const search = usePostsStore((s) => s.search);
  const setOpen = useSettingsStore((s) => s.setOpen);
  const getVersion = () => browser.runtime.getManifest().version;

  const iconClass =
    'w-4 h-4 text-gray-500 dark:text-gray-400 opacity-60 hover:opacity-100 transition-opacity duration-200';

  return (
    <header className="relative flex items-center flex-wrap px-3 py-1.5 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-baseline flex-grow w-full">
        <h1 className="m-0 mr-1.5 text-lg leading-7 text-gray-800 dark:text-gray-100 font-semibold">
          Read Later
        </h1>
        <span className="text-[11px] text-gray-400 dark:text-gray-500 font-mono">
          v{getVersion()}
        </span>
      </div>

      <button type="button" title="Settings" onClick={() => setOpen(true)} className={iconClass}>
        <HiOutlineCog6Tooth className="w-full h-full" />
      </button>

      <div className="flex-grow mt-2.5 flex gap-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/itcat99/read-later"
          className={iconClass}
          aria-label="GitHub"
        >
          <FaGithub className="w-full h-full" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:boiping2010@gmail.com"
          className={iconClass}
          aria-label="Email"
        >
          <HiOutlineEnvelope className="w-full h-full" />
        </a>
      </div>

      <Search search={search} />
    </header>
  );
});

export default Header;
