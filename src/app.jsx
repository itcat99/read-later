import React, { Component } from "react";

/* import components */
import Header from "./container/header";
import Preview from "./container/preview";
import Settings from "./container/settings";

/* import styles */
import "./app.scss";
import StyledRoot from "./styled";

import Wrapper from "./Wrapper";

const { Provider } = Wrapper;
/* main */
class App extends Component {
  constructor(props) {
    super(props);

    this.name = "Read Later";
    // this.style = style;

    this.state = {
      posts: [],
      settings: {},
      settingsPanelOpen: false
    };

    this.init();
  }

  init() {
    // let posts = [];
    const that = this;
    // ==== get settings ==== //
    chrome.runtime.sendMessage({ type: "get_settings" });

    // ==== create post list item on HTML ==== //
    chrome.runtime.onMessage.addListener(details => {
      const { type, data } = details;

      if (type === "return_settings") {
        that.setState({ settings: data });
      }
    });
  }

  componentDidMount() {
    let posts = [];
    const that = this;
    // ==== get post list data ==== //
    chrome.runtime.sendMessage({ type: "get_data" });

    // ==== create post list item on HTML ==== //
    chrome.runtime.onMessage.addListener(async details => {
      const { type, data } = details;

      if (type === "return_data") {
        posts = await this.getList(data);

        that.setState({ posts });
      }
    });
  }

  getList(data) {
    return new Promise((resolve, reject) => {
      chrome.bookmarks.getChildren(data.id, result => {
        if (!result.length) {
          reject();
        }

        const posts = [];

        result.forEach(bk => {
          this.addPost(bk, posts);
        });

        resolve(posts);
      });
    });
  }

  getIcon(url) {
    const src = this.state.settings.favicon_api
      ? `${this.state.settings.favicon_api}${url.replace(
          /^(https|http):\/\//,
          ""
        )}`
      : `${url.match(/(^[a-zA-z]+:\/\/).*?\//)[0]}/favicon.ico`;

    return src;
  }

  addPost(details, postList) {
    const { url, id, title } = details;
    const imgsrc = this.getIcon(url);

    postList.push({ url, id, title, imgsrc, show: true });
  }

  updateState = posts => {
    this.setState({ posts });
  };

  search = val => {
    const { posts } = this.state;

    posts.forEach(itemPost => {
      const title = itemPost.title.toLowerCase();

      if (title.indexOf(val.toLowerCase()) < 0) {
        itemPost.show = false;
      } else {
        itemPost.show = true;
      }
    });

    this.setState(Object.assign({}, this.state, { posts }));
  };

  clear() {
    chrome.runtime.sendMessage(
      {
        type: "clear"
      },
      () => {
        this.setState({ posts: [] });
      }
    );
  }

  updateSetting = (type, data) => {
    switch (type) {
      case "reset":
        chrome.runtime.sendMessage({ type: "reset_settings" });
        this.setState({ settings: data });
        break;
      case "save":
        chrome.runtime.sendMessage({ type: "save_settings", data });
        this.setState({ settings: data });
        break;
      default:
        break;
    }
  };

  toggleSettingsPanel = () => {
    this.setState({
      settingsPanelOpen: !this.state.settingsPanelOpen
    });
  };

  render() {
    const config = {
      posts: this.state.posts,
      clear: this.clear.bind(this),
      settings: this.state.settings,
      search: this.search,
      toggleSettingsPanel: this.toggleSettingsPanel
    };
    return (
      <Provider value={config}>
        <StyledRoot>
          {/* <div className={this.style.core}> */}
          <Header title={this.name} />
          <Preview updateState={this.updateState} />
          <Settings
            updateSetting={this.updateSetting}
            settings={this.state.settings}
            isOpen={this.state.settingsPanelOpen}
            closeSettingsPanel={this.toggleSettingsPanel}
          />
        </StyledRoot>
        {/* </div> */}
      </Provider>
    );
  }
}

export default App;
