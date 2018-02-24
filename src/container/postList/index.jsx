import style from './style.scss'

import React, {Component} from 'react'
/* import components */
import Post from '../../components/post'

/* main */
class PostList extends Component {
  constructor(props) {
    super(props);

    this.style = style;
  }

  remove(id) {
    this
      .props
      .remove(id);
  }

  getPosts() {
    return this
    .props
    .posts
    .map(post => {
      const {imgsrc, title, url, id, show} = post;

        return (<Post
          imgsrc={imgsrc}
          url={url}
          title={title}
          key={id}
          id={id}
          show={show}
          settings={this.props.settings}
          remove={this
          .remove
          .bind(this)}/>)
      })
  }

  render() {
    this.posts = this.getPosts()

    return (
      <ul className={this.style.core}>
        {this.posts}
      </ul>
    )
  }
}

export default PostList;