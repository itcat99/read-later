import { memo, useMemo } from 'react';
import { filterPosts, usePostsStore } from '../../stores/postsStore';
import { useSettingsStore } from '../../stores/settingsStore';
import Empty from './Empty';
import Post from './Post';

const iconCache = new Map<string, string>();

function getIcon(url: string, faviconApi: string): string {
  const cacheKey = `${faviconApi}::${url}`;
  const cached = iconCache.get(cacheKey);
  if (cached) return cached;

  let src: string;
  try {
    src = faviconApi
      ? `${faviconApi}${url.replace(/^(https|http):\/\//, '')}`
      : `${url.match(/(^[a-zA-z]+:\/\/).*?\//)?.[0]}favicon.ico`;
  } catch {
    src = `${url}/favicon.ico`;
  }
  iconCache.set(cacheKey, src);
  return src;
}

function LoadingSkeleton() {
  return (
    <ul className="flex flex-col p-0 m-0 list-none">
      {Array.from({ length: 5 }, (_skip, idx) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static skeleton never reorders
        <li key={`skeleton-${idx}`} className="flex items-center h-8 px-3 py-1 animate-pulse">
          <div className="h-5 w-5 mr-2 rounded-sm bg-gray-200 dark:bg-gray-700" />
          <div className="flex-1 h-3 rounded bg-gray-200 dark:bg-gray-700" />
        </li>
      ))}
    </ul>
  );
}

const Main = memo(() => {
  const posts = usePostsStore((s) => s.posts);
  const loaded = usePostsStore((s) => s.loaded);
  const searchKeyword = usePostsStore((s) => s.searchKeyword);
  const removePost = usePostsStore((s) => s.removePost);
  const settings = useSettingsStore((s) => s.settings);

  const visiblePosts = useMemo(() => filterPosts(posts, searchKeyword), [posts, searchKeyword]);

  const renderPosts = useMemo(
    () =>
      visiblePosts.map((post) => (
        <Post
          key={post.id}
          imgsrc={getIcon(post.url, settings.favicon_api)}
          url={post.url}
          title={post.title}
          id={post.id}
          show
          remove={removePost}
          defaultImg={settings.img_default}
          timeout={settings.img_timeout}
        />
      )),
    [visiblePosts, removePost, settings],
  );

  if (!loaded) {
    return (
      <div className="flex-1 overflow-hidden h-[300px] bg-white dark:bg-gray-900">
        <LoadingSkeleton />
      </div>
    );
  }

  if (!posts.length) {
    return (
      <div className="flex-1 overflow-hidden h-[300px]">
        <Empty />
      </div>
    );
  }

  const noResults = visiblePosts.length === 0 && searchKeyword;

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden h-[300px] bg-white dark:bg-gray-900">
      {noResults ? (
        <div className="flex flex-col items-center justify-center h-full gap-2 text-gray-400 dark:text-gray-500 select-none">
          <p className="text-sm">No results for &quot;{searchKeyword}&quot;</p>
        </div>
      ) : (
        <ul className="flex flex-col p-0 m-0 list-none">{renderPosts}</ul>
      )}
    </div>
  );
});

export default Main;
