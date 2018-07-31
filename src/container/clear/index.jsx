import ClearBtn from './styled';
import React, { Component } from 'react';
import Wrapper from '../../Wrapper';
const { Consumer } = Wrapper;

class Clear extends Component {
  constructor(props) {
    super(props);
  }

  clear() {
    this.props.clear();
  }

  render() {
    return (
      <Consumer>
        {data => {
          const { clear } = data;

          return <ClearBtn onClick={clear}>Clear</ClearBtn>;
        }}
      </Consumer>
    );
  }
}

export default Clear;
