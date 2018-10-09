import ClearBtn from './styled';
import React, { PureComponent } from 'react';

class Clear extends PureComponent {
  onClick = () => {
    const { updateMask } = this.props;
    updateMask && updateMask(true);
  };

  render() {
    return <ClearBtn onClick={this.onClick}>Clear</ClearBtn>;
  }
}

export default Clear;
