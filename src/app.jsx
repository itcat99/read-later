import React, { Component } from 'react'

/* import components */
import Header from './container/header'
import Preview from './container/preview'
import Settings from './container/settings'

/* import config */
import config from './config'
/* import styles */
import style from './app.scss'

/* main */
class App extends Component {
  constructor(props) {
    super(props);

    this.name = "Read Later";
    this.style = style;

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    let posts = [];
    let that = this;
    // ==== get post list data ==== //
    chrome
      .runtime
      .sendMessage({ type: 'get_data' });

    // ==== create post list item on HTML ==== //
    chrome
      .runtime
      .onMessage
      .addListener(async details => {
        const { type, data } = details;

        if (type === 'return_data') {
          posts = await this.getList(data);
          that.setState({ posts })
        }
      })
  }

  getList(data) {
    return new Promise((resolve, reject) => {
      chrome
        .bookmarks
        .getChildren(data.id, result => {
          if (!result.length) {
            reject();
          }

          const posts = [];

          result.forEach(bk => {
            this.addPost(bk, posts);
          })

          resolve(posts);
        })
    })
  }

  addPost(details, postList) {
    const { url, id, title } = details;
    const imgsrc = this.getIcon(url);

    postList.push({ url, id, title, imgsrc, show: true });
  }

  getIcon(url) {
    return `${config['favicon_api']}${url.replace(/^(https|http):\/\//, '')}`;
  }

  updateState(posts) {
    this.setState(Object.assign({}, this.state, { posts }));
  }

  search(val) {
    const posts = this.state.posts;

    posts.forEach(post => {
      const title = post.title.toLowerCase();

      if (title.indexOf(val.toLowerCase()) < 0) {
        post.show = false;
      } else {
        post.show = true;
      }
    })

    this.setState(Object.assign({}, this.state, { posts }));
  }

  clear() {
    chrome.runtime.sendMessage({
      type: 'clear'
    }, () => {
      this.setState({ posts: [] })
    })
  }

  updateSetting(type, data) {
    switch (type) {
      case 'reset':
        chrome
          .runtime
          .sendMessage({ type: 'reset_settings' });
        break;
      case 'save':
        chrome
          .runtime
          .sendMessage({type: 'save_settings', data})
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className={this.style.core}>
        <Header title={this.name} search={this.search.bind(this)} />
        <Preview posts={this.state.posts} updateState={this.updateState.bind(this)} clear={this.clear.bind(this)} />
        <Settings updateSetting={this.updateSetting.bind(this)} />
      </div>
    )
  }
}

export default App;