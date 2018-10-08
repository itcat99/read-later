import React, { PureComponent } from 'react';
import { StyleRoot } from './styled';

class SettingsItem extends PureComponent {
  input = () => {
    const data = {};
    data[this.props.name] = this.$input.value;
    this.props.change(data);
  };

  componentDidMount() {
    this.$input.value = this.props.value;
  }

  componentDidUpdate() {
    this.$input.value = this.props.value;
  }

  render() {
    const { title, name } = this.props;

    return (
      <StyleRoot>
        <label htmlFor={name}>{title}: </label>
        <input
          type="text"
          name={name}
          id={name}
          ref={el => (this.$input = el)}
          onInput={this.input}
        />
      </StyleRoot>
    );
  }
}

export default SettingsItem;
