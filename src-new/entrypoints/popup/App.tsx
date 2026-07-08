import React, { useEffect } from 'react';
import styled from 'styled-components';
import { panel } from '../lib/_vars';
import { usePostsStore } from '../stores/postsStore';
import { useSettingsStore } from '../stores/settingsStore';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Mask from './Mask';
import Settings from './Settings';

const { padding, heightMin, heightMax, width } = panel;

const StyledRoot = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: ${padding};
  min-height: ${heightMin};
  max-height: ${heightMax};
  width: ${width};
`;

const App: React.FC = () => {
  const getPosts = usePostsStore((s) => s.getPosts);
  const getSettings = useSettingsStore((s) => s.getSettings);

  useEffect(() => {
    getPosts();
    getSettings();
  }, [getPosts, getSettings]);

  return (
    <StyledRoot>
      <Settings />
      <Mask />
      <Header />
      <Main />
      <Footer />
    </StyledRoot>
  );
};

export default App;
