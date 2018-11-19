import React, { PureComponent } from "react";
import { createContainer } from "same-dva";
import Search from "../components/Search";

class Header extends PureComponent {
  render() {
    const { filterPosts } = this.props.actions;

    return (
      <div>
        Header
        <Search search={filterPosts} />
      </div>
    );
  }
}

export default createContainer(Header, {
  namespace: "post",
});
