import { StyledRoot, List } from "./styled";

import React, { Component } from "react";
/* import components */
import Post from "../post";
import Wrapper from "../../Wrapper";

const { Consumer } = Wrapper;

/* main */
class Root extends Component {
  getPosts() {
    return this.props.posts.map(post => {
      const { imgsrc, title, url, id, show } = post;

      return (
        <Post
          imgsrc={imgsrc}
          url={url}
          title={title}
          key={id}
          id={id}
          show={show}
        />
      );
    });
  }

  render() {
    const posts = this.getPosts();

    return (
      <StyledRoot>
        <List>{posts}</List>
      </StyledRoot>
    );
  }
}

const PostList = props => (
  <Consumer>
    {data => {
      const { settings } = data;
      return <Root {...props} settings={settings} />;
    }}
  </Consumer>
);

export default PostList;
