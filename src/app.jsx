import React, { PureComponent } from 'react';
import StyledRoot from './styled';

import Header from './container/Header';
import Main from './container/Main';
import Footer from './container/Footer';
import Mask from './container/Mask';
import Settings from './container/Settings';

class App extends PureComponent {
  render() {
    return (
      <StyledRoot>
        <Settings />
        <Mask />
        <Header />
        <Main />
        <Footer />
      </StyledRoot>
    );
  }
}

export default App;
