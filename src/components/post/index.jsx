import style from './style.scss'

import React, {Component} from 'react'

// import config from '../../config';

class Post extends Component {
  constructor(props) {
    super(props);

    this.style = style;
    this.setIcon();
  }

  setIcon(){
    setTimeout(() => {
      if(!this.complete){
        // ^(https|http)?:\/\/.*\/
        this.el.setAttribute('src', this.props.settings.img_default);
      }
    }, this.props.settings.img_timeout)
  }

  initLoad(el){
    if(el){
      this.el = el;
    }
    this.complete = this.el.complete;
  }

  loadImg(){
    this.complete = true;
  }

  render() {
    const {imgsrc, title, url, remove, id, show} = this.props;
    const coreClassName = show? this.style.core: `${this.style.core} ${this.style.coreHidden}`;

    return (
      <li className={coreClassName}>
        <img className={this.style.coreIcon} src={imgsrc} alt={title} ref={(el) => this.initLoad(el)} onLoad={() =>this.loadImg()} />
        <a className={this.style.coreLink} href={url} target="_blank">{title}</a>
        <span className={this.style.coreRemove} onClick={() => remove(id)}></span>
      </li>
    )
  }
}

export default Post;