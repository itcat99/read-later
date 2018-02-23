import style from './style.scss';

import React, {
  Component
} from 'react'

/* import components */
import Search from '../../components/search'

/* main */
class Header extends Component{
  constructor(props){
    super(props);

    this.style = style;
  }

  getVersion(){
    return chrome.runtime.getManifest().version;
  }

  render(){
    const {title, search} = this.props;

    return (
      <header className={this.style.header}>
        {/* info */}
        <div className={this.style.headerInfo}>
          <h1 className={this.style.headerInfoTitle}>{title}</h1>
          <span>{this.getVersion()}</span>
        </div>

        {/* contcat */}
        <div className={this.style.headerContact}>
          <a target="_blank" href="https://github.com/itcat99/read-later">
            <span className={this.style.git}></span>
          </a>
          <a target="_blank" href="mailto:boiping2010@gmail.com">
            <span className={this.style.email}></span>
          </a>
        </div>

        {/* search */}
        <Search search={search} />
      </header>
    )
  }
}

export default Header;