import style from './style.scss';

import React, { Component } from 'react';

import Wrapper from '../../Wrapper';
/* import components */
import PostList from '../postList';
import Clear from '../clear';
import Empty from '../empty';

const { Consumer } = Wrapper;
/* main */
class Root extends Component {
  constructor(props) {
    super(props);

    this.style = style;
  }

  removePost(id) {
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
  }

  render() {
    const { posts } = this.props;
    if (!posts || !posts.length) return <Empty />;

    this.posts = posts;
    const { settings } = this.props;
    return (
      <section className={this.style.core}>
        <PostList
          posts={posts}
          settings={settings}
          remove={this.removePost.bind(this)}
        />

        <Clear />
      </section>
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
