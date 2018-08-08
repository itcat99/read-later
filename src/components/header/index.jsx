import {
  StyledRoot,
  Info,
  InfoTitle,
  GitIcon,
  EmailIcon,
  SettingsIcon,
  Contact,
} from './styled';

import React, { PureComponent } from 'react';

/* import components */
import Search from '../../components/search';
import Wrapper from '../../Wrapper';

const { Consumer } = Wrapper;

/* main */
class Root extends PureComponent {
  getVersion() {
    return chrome.runtime.getManifest().version;
  }

  openSettingsPanel() {
    this.props.openSettingsPanel();
  }

  render() {
    const { title } = this.props;

    return (
      <StyledRoot>
        {/* info */}
        <Info>
          <InfoTitle>{title}</InfoTitle>
          <span>{this.getVersion()}</span>
        </Info>
        {/* setting btn */}
        <SettingsIcon
          title="settings"
          onClick={() => this.openSettingsPanel()}
        />

        {/* contcat */}
        <Contact>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/itcat99/read-later"
          >
            <GitIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:boiping2010@gmail.com"
          >
            <EmailIcon />
          </a>
        </Contact>

        {/* search */}
        <Search />
      </StyledRoot>
    );
  }
}

const Header = props => (
  <Consumer>
    {data => {
      const { toggleSettingsPanel: openSettingsPanel } = data;

      return <Root openSettingsPanel={openSettingsPanel} {...props} />;
    }}
  </Consumer>
);
export default Header;
