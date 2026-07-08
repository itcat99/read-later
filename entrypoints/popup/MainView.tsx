import type React from 'react';
import { memo, useMemo } from 'react';
import styled from 'styled-components';
import type { Config } from '../../lib/config';
import { filterPosts, usePostsStore } from '../../stores/postsStore';
import { useSettingsStore } from '../../stores/settingsStore';
import Empty from './Empty';
import Post from './Post';

const StyledRoot = styled.div`
  flex-grow: 1;
  overflow-x: hidden;
  height: 300px;
`;

const List = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  flex-flow: column;
  margin: 0;
`;

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

const Main: React.FC = () => {
  const posts = usePostsStore((s) => s.posts);
  const searchKeyword = usePostsStore((s) => s.searchKeyword);
  const removePost = usePostsStore((s) => s.removePost);
  const settings = useSettingsStore((s) => s.settings);

  const visiblePosts = useMemo(() => filterPosts(posts, searchKeyword), [posts, searchKeyword]);

  const renderPosts = useMemo(
    () =>
      visiblePosts.map((post) => {
        const { title, url, id } = post;
        return (
          <Post
            key={id}
            imgsrc={getIcon(url, settings.favicon_api)}
            url={url}
            title={title}
            id={id}
            show={true}
            remove={removePost}
            defaultImg={settings.img_default}
            timeout={settings.img_timeout}
          />
        );
      }),
    [visiblePosts, removePost, settings],
  );

  const content = !posts?.length ? <Empty /> : <List>{renderPosts}</List>;

  return <StyledRoot>{content}</StyledRoot>;
};

export default memo(Main);
