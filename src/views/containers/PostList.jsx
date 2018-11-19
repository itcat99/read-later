import React, { Component } from "react";
import { createContainer } from "same-dva";
import List from "@material-ui/core/List";
import Item from "../components/Item/index";
import { Scrollbars } from "react-custom-scrollbars";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    height: "280px",
  },
});

class PostList extends Component {
  render() {
    const { viewPost, classes } = this.props;
    const postItems = this.getItems(viewPost);

    return (
      <List className={classes.root} dense={true}>
        <Scrollbars className={classes.root} autoHide>
          {postItems}
        </Scrollbars>
      </List>
    );
  }

  getItems(posts) {
    const itemArr = [];
    const { removePost } = this.props.actions;

    posts.forEach(item => {
      itemArr.push(
        <Item {...item} key={`${item.index}-${item.id}`} remove={removePost} />,
      );
    });

    return itemArr;
  }

  componentDidMount() {
    const { updatePosts } = this.props.actions;

    updatePosts && updatePosts();
  }
}

export default createContainer(withStyles(styles)(PostList), {
  namespace: "post",
});
