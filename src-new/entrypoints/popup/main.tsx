import React, { memo } from 'react';
import styled from 'styled-components';
import { usePostsStore } from '../../stores/postsStore';
import { useSettingsStore } from '../../stores/settingsStore';
import Post from './Post';
import Empty from './Empty';

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

function getIcon(url: string, settings: any): string {
  const { favicon_api } = settings;
  let src: string;
  try {
    src = favicon_api
      ? `${favicon_api}${url.replace(/^(https|http):\/\//, '')}`
      : `${url.match(/(^[a-zA-z]+:\/\/).*?\//)![0]}favicon.ico`;
  } catch {
    src = `${url}/favicon.ico`;
  }
  return src;
}

const Main: React.FC = () => {
  const posts = usePostsStore((s) => s.posts);
  const removePost = usePostsStore((s) => s.removePost);
  const settings = useSettingsStore((s) => s.settings);

  const renderPosts = posts.map((post) => {
    const { title, url, id, show = true } = post;
    return (
      <Post
        key={id}
        imgsrc={getIcon(url, settings)}
        url={url}
        title={title}
        id={id}
        show={show}
        remove={removePost}
        defaultImg={settings.img_default}
        timeout={settings.img_timeout}
      />
    );
  });

  const content =
    !posts || !posts.length ? <Empty /> : <List>{renderPosts}</List>;

  return <StyledRoot>{content}</StyledRoot>;
};

export default memo(Main);
