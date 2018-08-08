import React, { PureComponent } from 'react';
import { StyleRoot, Choose, Submit, Cancel, Alert } from './styled';
import Wrapper from '../../Wrapper';

const { Consumer } = Wrapper;

class Root extends PureComponent {
  render() {
    const { maskShow: show, clear, cancelClear: cancel } = this.props;

    return (
      <StyleRoot show={show}>
        <Alert>
          <Choose>Are you sure?</Choose>
          <Submit onClick={clear}>Sure</Submit>
          <Cancel onClick={cancel}>Cancel</Cancel>
        </Alert>
      </StyleRoot>
    );
  }
}

const Mask = props => (
  <Consumer>
    {data => {
      return <Root {...props} {...data} />;
    }}
  </Consumer>
);

export default Mask;
