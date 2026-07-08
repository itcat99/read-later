import React, { memo } from 'react';
import styled from 'styled-components';
import { usePostsStore } from '../../stores/postsStore';
import { useMaskStore } from '../../stores/maskStore';
import { useSettingsStore } from '../../stores/settingsStore';
import Download from './Download';

const ControlBar = styled.section`
  display: flex;
  flex-wrap: nowrap;
  height: 26px;
  width: 100%;
`;

const ClearBtn = styled.button`
  flex-grow: 5;
  border: none;
  background: rgb(206, 75, 52);
  color: #fff;
  padding: 4px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 300ms;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
    transition: opacity 300ms;
  }
`;

const Footer: React.FC = () => {
  const posts = usePostsStore((s) => s.posts);
  const setShow = useMaskStore((s) => s.setShow);
  const settings = useSettingsStore((s) => s.settings);

  return (
    <ControlBar>
      <ClearBtn onClick={() => setShow(true)}>Clear</ClearBtn>
      <Download posts={posts} title={settings.title} />
    </ControlBar>
  );
};

export default memo(Footer);
