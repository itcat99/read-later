import { useEffect } from 'react';
import { usePostsStore } from '../../stores/postsStore';
import { useSettingsStore } from '../../stores/settingsStore';
import Footer from './Footer';
import Header from './Header';
import Main from './MainView';
import Mask from './Mask';
import Settings from './Settings';

const App = () => {
  const getPosts = usePostsStore((s) => s.getPosts);
  const getSettings = useSettingsStore((s) => s.getSettings);

  useEffect(() => {
    getPosts();
    getSettings();
  }, [getPosts, getSettings]);

  return (
    <div className="flex flex-col h-full w-80 min-h-[300px] max-h-[500px] bg-white dark:bg-gray-900">
      <Settings />
      <Mask />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
