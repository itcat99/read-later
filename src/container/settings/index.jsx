import { StyleRoot, List, Actions, Btn, ResetBtn, SaveBtn } from './styled';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

/* import config */
import config from '../../config';

/* import component */
import SettingsItem from '../../components/SettingsItem';

/* core */
class Settings extends Component {
  save = () => {
    const { updateSettings, updateSettingsPanel } = this.props;
    this.settings = this.tempSettings;

    updateSettings &&
      updateSettingsPanel &&
      updateSettings(this.settings) &&
      updateSettingsPanel(false);
  };

  reset = () => {
    const { updateSettings, updateSettingsPanel } = this.props;

    updateSettings &&
      updateSettingsPanel &&
      updateSettings(config) &&
      updateSettingsPanel(false);
  };

  cancel = () => {
    const { updateSettingsPanel } = this.props;

    updateSettingsPanel && updateSettingsPanel(false);
  };

  getItems() {
    const items = [];

    for (let _key of Object.keys(this.settings)) {
      items.push(
        <SettingsItem
          key={_key}
          name={_key}
          value={this.settings[_key]}
          title={_key.replace('_', ' ').trim()}
          change={this.change.bind(this)}
        />,
      );
    }

    return items;
  }

  change(data) {
    this.tempSettings = Object.assign({}, this.settings, data);
  }

  render() {
    const { open, settings } = this.props;
    this.settings = Object.assign({}, config, settings);

    this.items = this.getItems();

    return (
      <StyleRoot isOpen={open}>
        <header>Settings</header>
        <List>{this.items}</List>
        <Actions>
          <ResetBtn onClick={this.reset}>reset</ResetBtn>
          <SaveBtn onClick={this.save}>save</SaveBtn>
          <Btn onClick={this.cancel}>cancel</Btn>
        </Actions>
      </StyleRoot>
    );
  }
}

const mapStateToProps = state => {
  return {
    open: state.settings.state,
    settings: state.settings.payload,
  };
};
const mapDispatchToProps = {
  updateSettingsPanel: actions.updateSettingsPanel,
  updateSettings: actions.updateSettings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
