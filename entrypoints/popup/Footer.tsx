import { memo } from 'react';
import { useMaskStore } from '../../stores/maskStore';
import { usePostsStore } from '../../stores/postsStore';
import { useSettingsStore } from '../../stores/settingsStore';
import Download from './Download';

const Footer = memo(() => {
  const posts = usePostsStore((s) => s.posts);
  const setShow = useMaskStore((s) => s.setShow);
  const settings = useSettingsStore((s) => s.settings);

  return (
    <section className="flex h-7 w-full">
      <button
        type="button"
        onClick={() => setShow(true)}
        className="flex-[5] border-none bg-red-500 hover:bg-red-600 text-white text-xs font-medium cursor-pointer transition-colors duration-200"
      >
        Clear All
      </button>
      <Download posts={posts} title={settings.title} />
    </section>
  );
});

export default Footer;
