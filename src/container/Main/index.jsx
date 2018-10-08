import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Empty from '../../components/Empty';
import Post from '../../components/Post';
import { StyledRoot, List } from './styled';

import actions from '../../actions';

class Main extends PureComponent {
  getPosts() {
    let { posts, remove } = this.props;
    return posts.map(post => {
      const { imgsrc, title, url, id, show = true } = post;

      return (
        <Post
          imgsrc={imgsrc}
          url={url}
          title={title}
          key={id}
          id={id}
          show={show}
          remove={remove}
        />
      );
    });
  }

  render() {
    const posts = this.getPosts();
    const content = !posts || !posts.length ? <Empty /> : <List>{posts}</List>;

    return <StyledRoot>{content}</StyledRoot>;
  }

  componentDidMount() {
    const { fetch } = this.props;

    fetch && fetch();
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {
  remove: actions.remove,
  fetch: actions.fetch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
