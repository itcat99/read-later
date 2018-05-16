import style from './style.scss';

import React, { Component } from 'react';

class SettingsItem extends Component {
  constructor(props) {
    super(props);

    this.style = style;
  }

  input() {
    const data = {};
    data[this.props.name] = this.$input.value;
    this.props.change(data);
  }

  componentDidMount() {
    this.$input.value = this.props.value;
  }

  componentDidUpdate() {
    this.$input.value = this.props.value;
  }

  render() {
    const { title, name } = this.props;

    return (
      <li className={this.style.settingsItem}>
        <label htmlFor={name}>{title}: </label>
        <input
          type="text"
          name={name}
          id={name}
          ref={el => {
            this.$input = el;
          }}
          onInput={() => this.input()}
        />
      </li>
    );
  }
}

export default SettingsItem;
