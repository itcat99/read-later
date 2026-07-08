import type React from 'react';
import { memo } from 'react';
import { useMaskStore } from '../../stores/maskStore';
import { usePostsStore } from '../../stores/postsStore';
import { useSettingsStore } from '../../stores/settingsStore';
import Download from './Download';

const Footer: React.FC = () => {
  const posts = usePostsStore((s) => s.posts);
  const setShow = useMaskStore((s) => s.setShow);
  const settings = useSettingsStore((s) => s.settings);

  return (
    <section className="flex flex-nowrap h-7 w-full">
      <button
        type="button"
        onClick={() => setShow(true)}
        className="flex-[5] border-none bg-red-600 text-white px-1 cursor-pointer hover:opacity-80 transition-opacity duration-300"
      >
        Clear
      </button>
      <Download posts={posts} title={settings.title} />
    </section>
  );
};

export default memo(Footer);
