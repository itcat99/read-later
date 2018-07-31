import EmptyView from './styled';

import React, { PureComponent } from 'react';

class Empty extends PureComponent {
  render() {
    return (
      <EmptyView>
        <p> {'Empty list.'} </p>
        <p>{'you have 2 ways to add post.'} </p>
        <p>{"1. click context menu 'read later'."} </p>
        <p>{"2. 'Ctrl + Shift + M'."} </p>
      </EmptyView>
    );
  }
}

export default Empty;
