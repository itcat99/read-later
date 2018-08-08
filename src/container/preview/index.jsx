import StyledRoot from './styled';

import React, { Component } from 'react';

/* import components */
import Wrapper from '../../Wrapper';
import PreviewWrapper from './PreviewWrapper';
import PostList from '../../components/postList';
import Clear from '../../components/clear';
import Empty from '../../components/empty';

const { Consumer } = Wrapper;
const { Provider } = PreviewWrapper;
/* main */
class Root extends Component {
  removePost = id => {
    this.posts.forEach((post, index) => {
      if (post.id === id) {
        this.posts.splice(index, 1);
      }
    });

    chrome.runtime.sendMessage(
      {
        type: 'remove',
        data: id,
      },
      () => {
        this.props.updateState(this.posts);
      },
    );
  };

  render() {
    const { posts } = this.props;
    if (!posts || !posts.length) return <Empty />;

    this.posts = posts;
    return (
      <StyledRoot>
        <Provider value={{ removePost: this.removePost }}>
          <PostList posts={posts} />
        </Provider>

        <Clear />
      </StyledRoot>
    );
  }
}

const Preview = props => (
  <Consumer>
    {data => {
      return <Root {...data} {...props} />;
    }}
  </Consumer>
);
export default Preview;
