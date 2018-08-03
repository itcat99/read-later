import { StyledRoot, RemoveBtn, Link, Icon } from './styled';
import PropTypes from 'prop-types';

import React, { Component } from 'react';

import Wrapper from '../../Wrapper';
import PreviewWrapper from '../../container/preview/PreviewWrapper';

const { Consumer } = PreviewWrapper;
const { Consumer: RootConsumer } = Wrapper;

class Root extends Component {
  setIcon = () => {
    setTimeout(() => {
      if (!this.complete) {
        // ^(https|http)?:\/\/.*\/
        this.el.setAttribute('src', this.props.settings.img_default);
      }
    }, this.props.settings.img_timeout);
  };

  initLoad = el => {
    if (el) {
      this.el = el;
    }
    this.complete = this.el.complete;
  };

  loadImg() {
    this.complete = true;
  }

  componentDidUpdate() {
    this.setIcon();
  }

  render() {
    const { imgsrc, title, url, remove, id, show } = this.props;
    return (
      <StyledRoot show={show}>
        <Icon
          src={imgsrc}
          alt={title}
          ref={this.initLoad}
          onLoad={this.loadImg}
        />
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </Link>
        <RemoveBtn
          onClick={() => remove(id)}
          onKeyDown={this.onKeyDown}
          role="remove-button"
        />
      </StyledRoot>
    );
  }
}

Root.PropTypes = {
  imgsrc: PropTypes.string.isRequired,
};

const Post = props => (
  <RootConsumer>
    {data => {
      const { settings } = data;
      return (
        <Consumer>
          {data => {
            const { removePost: remove } = data;

            return <Root remove={remove} settings={settings} {...props} />;
          }}
        </Consumer>
      );
    }}
  </RootConsumer>
);

export default Post;
