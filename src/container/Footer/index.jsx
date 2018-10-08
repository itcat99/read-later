import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';

import { ControlBar } from './styled';
import Clear from '../../components/Clear';
import Download from '../../components/Download';

class Footer extends PureComponent {
  render() {
    const { posts, updateMask } = this.props;

    return (
      <ControlBar>
        <Clear updateMask={updateMask} />
        <Download posts={posts} />
      </ControlBar>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  updateMask: actions.updateMask,
  download: actions.download,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
