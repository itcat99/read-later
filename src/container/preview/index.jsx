import style from './style.scss';

import React, { Component } from 'react';
/* import components */
import PostList from '../postList';
import Clear from '../clear';
import Empty from '../empty';

/* main */
class Preview extends Component {
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
    this.posts = this.props.posts;

    if (this.posts.length) {
      return (
        <section className={this.style.core}>
          <PostList
            posts={this.posts}
            settings={this.props.settings}
            remove={this.removePost.bind(this)}
          />

          <Clear clear={this.props.clear} />
        </section>
      );
    }
    return <Empty />;
  }
}

export default Preview;
