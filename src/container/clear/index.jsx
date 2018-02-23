import style from './style.scss'

import React, {
  Component
} from 'react'

class Clear extends Component{
  constructor(props){
    super(props);

    this.style = style;
  }

  clear(){
    this.props.clear();
  }

  render(){
    return (
      <button className={this.style.core} onClick={() => this.clear()}>Clear</button>
    )
  }
}

export default Clear;