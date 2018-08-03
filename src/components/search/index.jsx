import { StyleRoot, RemoveBtn } from './styled';

import React, { Component } from 'react';
import Wrapper from '../../Wrapper';

const { Consumer } = Wrapper;

class Root extends Component {
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
      <StyleRoot>
        <input
          type="text"
          placeholder="please search..."
          onInput={() => this.search()}
          ref={input => {
            this.input = input;
          }}
        />
        <RemoveBtn onClick={() => this.clear()} />
      </StyleRoot>
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
