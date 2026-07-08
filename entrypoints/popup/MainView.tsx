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

const Main = memo(() => {
  const posts = usePostsStore((s) => s.posts);
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

  if (!posts.length) {
    return (
      <div className="flex-1 overflow-hidden h-[300px]">
        <Empty />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden h-[300px] bg-white dark:bg-gray-900">
      <ul className="flex flex-col p-0 m-0 list-none">{renderPosts}</ul>
    </div>
  );
});

export default Main;
