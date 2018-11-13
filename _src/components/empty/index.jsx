import EmptyView from './styled';

import React, { PureComponent } from 'react';

class Empty extends PureComponent {
  render() {
    return (
      <EmptyView>
        <p> {'Empty list.'} </p>
        <p>{"please click context menu 'read later'."} </p>
      </EmptyView>
    );
  }
}

export default Empty;
