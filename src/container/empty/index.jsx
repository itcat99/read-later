import style from './style.scss';

import React, { Component } from 'react';

class Empty extends Component {
  constructor(props) {
    super(props);

    this.style = style;
  }

  render() {
    return (
      <div className={this.style.empty}>
        <p> {'Empty list.'} </p>
        <p>{'you have 2 ways to add post.'} </p>
        <p>{"1. click context menu 'read later'."} </p>
        <p>{"2. 'Ctrl + Shift + M'."} </p>
      </div>
    );
  }
}

export default Empty;
