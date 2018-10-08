import React, { PureComponent } from 'react';
import { StyleRoot, Choose, Submit, Cancel, Alert } from './styled';
import { connect } from 'react-redux';
import actions from '../../actions';

class Mask extends PureComponent {
  clear = () => {
    const { clear, updateMask } = this.props;

    clear && updateMask && clear() && updateMask(false);
  };

  cancel = () => {
    const { updateMask } = this.props;

    updateMask && updateMask(false);
  };

  render() {
    const { mask: show } = this.props;

    return (
      <StyleRoot show={show}>
        <Alert>
          <Choose>Are you sure?</Choose>
          <Submit onClick={this.clear}>Sure</Submit>
          <Cancel onClick={this.cancel}>Cancel</Cancel>
        </Alert>
      </StyleRoot>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  clear: actions.clear,
  updateMask: actions.updateMask,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mask);
