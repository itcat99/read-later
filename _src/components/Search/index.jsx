import { StyleRoot, RemoveBtn } from './styled';
import React, { PureComponent } from 'react';
// import Wrapper from '../../Wrapper';

// const { Consumer } = Wrapper;

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.inputTimeout = null;
  }
  search = () => {
    clearTimeout(this.inputTimeout);
    this.inputTimeout = setTimeout(() => {
      const value = this.input.value;
      const { search } = this.props;

      search && search(value);
      // this.searching(value);
    }, 300);
  };

  // searching(val) {
  //   this.props.search(val);
  // }

  clear = () => {
    const { search } = this.props;
    this.input.value = '';
    search && search('');
    // this.props.search('');
  };

  render() {
    return (
      <StyleRoot>
        <input
          type="text"
          placeholder="please search..."
          onInput={this.search}
          ref={input => {
            this.input = input;
          }}
        />
        <RemoveBtn onClick={() => this.clear()} />
      </StyleRoot>
    );
  }
}

// const Search = props => (
//   <Consumer>
//     {data => {
//       const { search } = data;
//       return <Root search={search} {...props} />;
//     }}
//   </Consumer>
// );

export default Search;
