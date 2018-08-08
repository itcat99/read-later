import ClearBtn from './styled';
import React, { PureComponent } from 'react';
import Wrapper from '../../Wrapper';
const { Consumer } = Wrapper;

class Clear extends PureComponent {
  render() {
    return (
      <Consumer>
        {data => {
          const { preClear } = data;

          return <ClearBtn onClick={preClear}>Clear</ClearBtn>;
        }}
      </Consumer>
    );
  }
}

export default Clear;
