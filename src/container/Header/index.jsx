import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

import {
  StyledRoot,
  Info,
  InfoTitle,
  GitIcon,
  EmailIcon,
  SettingsIcon,
  Contact,
} from './styled';
import Search from '../../components/Search';

class Header extends PureComponent {
  getVersion() {
    return chrome.runtime.getManifest().version;
  }

  openSettingsPanel = () => {
    const { updateSettingsPanel } = this.props;

    updateSettingsPanel && updateSettingsPanel(true);
  };

  render() {
    const { search } = this.props;
    return (
      <StyledRoot>
        {/* info */}
        <Info>
          <InfoTitle>Read Later</InfoTitle>
          <span>{this.getVersion()}</span>
        </Info>
        {/* setting btn */}
        <SettingsIcon title="settings" onClick={this.openSettingsPanel} />

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
        <Search search={search} />
      </StyledRoot>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  search: actions.search,
  updateSettingsPanel: actions.updateSettingsPanel,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
