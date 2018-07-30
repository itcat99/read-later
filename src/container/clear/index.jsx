import style from './style.scss';

import React, { Component } from 'react';
import Wrapper from '../../Wrapper';
const { Consumer } = Wrapper;

class Clear extends Component {
  constructor(props) {
    super(props);

    this.style = style;
  }

  clear() {
    this.props.clear();
  }

  render() {
    return (
      <Consumer>
        {data => {
          const { clear } = data;

          return (
            <button className={this.style.core} onClick={clear}>
              Clear
            </button>
          );
        }}
      </Consumer>
    );
  }
}

export default Clear;
