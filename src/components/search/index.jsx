import style from './style.scss';

import React, { Component } from 'react';
import Wrapper from '../../Wrapper';

const { Consumer } = Wrapper;

class Root extends Component {
  constructor(props) {
    super(props);

    this.style = style;
  }

  search() {
    let input = null;

    clearTimeout(input);

    input = setTimeout(() => {
      const value = this.input.value;

      this.searching(value);
    }, 300);
  }

  searching(val) {
    this.props.search(val);
  }

  clear() {
    this.input.value = '';
    this.props.search('');
  }

  render() {
    return (
      <div className={this.style.core}>
        <input
          type="text"
          placeholder="please search..."
          onInput={() => this.search()}
          ref={input => {
            this.input = input;
          }}
        />
        <span className={this.style.coreRemove} onClick={() => this.clear()} />
      </div>
    );
  }
}

const Search = props => (
  <Consumer>
    {data => {
      const { search } = data;
      return <Root search={search} {...props} />;
    }}
  </Consumer>
);

export default Search;
