import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Empty from '../../components/Empty';
import Post from '../../components/Post';
import { StyledRoot, List } from './styled';

import actions from '../../actions';

class Main extends PureComponent {
  getPosts() {
    let { posts, removePost, settings } = this.props;
    const { img_default: defaultImg, img_timeout: timeout } = settings;

    return posts.map(post => {
      const { title, url, id, show = true } = post;
      const imgsrc = this.getIcon(url);

      return (
        <Post
          imgsrc={imgsrc}
          url={url}
          title={title}
          key={id}
          id={id}
          show={show}
          remove={removePost}
          defaultImg={defaultImg}
          timeout={timeout}
        />
      );
    });
  }

  getIcon(url) {
    const { settings } = this.props;
    const { favicon_api } = settings;
    let src;

    try {
      src = favicon_api
        ? `${favicon_api}${url.replace(/^(https|http):\/\//, '')}`
        : `${url.match(/(^[a-zA-z]+:\/\/).*?\//)[0]}/favicon.ico`;
    } catch (error) {
      src = `${url}/favicon.ico`;
    }

    return src;
  }

  render() {
    const posts = this.getPosts();
    const content = !posts || !posts.length ? <Empty /> : <List>{posts}</List>;

    return <StyledRoot>{content}</StyledRoot>;
  }

  componentDidMount() {
    const { getPosts, getSettings } = this.props;

    getPosts && getPosts();
    getSettings && getSettings();
  }
}

const mapStateToProps = state => {
  const { settings, ...rest } = state;

  return {
    settings: settings.payload,
    ...rest,
  };
};
const mapDispatchToProps = {
  removePost: actions.removePost,
  getPosts: actions.getPosts,
  getSettings: actions.getSettings,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
