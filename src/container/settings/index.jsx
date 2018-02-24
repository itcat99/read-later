import style from './style.scss'
import React, {Component} from 'react'

/* import config */
import config from '../../config'

/* import component */
import SettingsItem from '../../components/settingsItem'

/* core */
class Settings extends Component {
  constructor(props) {
    super(props)

    this.folderName = config.title
    this.style = style
  }

  save() {
    this
      .props
      .updateSetting("save", this.tempSettings)

    this
      .props
      .closeSettingsPanel()
  }

  reset() {
    this.tempSettings = Object.assign({}, config);
    this
      .props
      .updateSetting("reset", this.tempSettings)
  }

  cancel() {
    this.tempSettings = Object.assign({}, this.props.settings);
    this
      .props
      .updateSetting("cancel")
    this
      .props
      .closeSettingsPanel()
  }

  getItems() {
    const items = []

    for (let _key of Object.keys(this.tempSettings)) {
      items
        .push(<SettingsItem
          key={_key}
          name={_key}
          value={this.tempSettings[_key]}
          title={_key
          .replace('_', ' ')
          .trim()}
          change={this.change.bind(this)
          } />)
    }

    return items;
  }

  change(data){
    this.tempSettings = Object.assign({}, this.tempSettings, data);
  }
  
  render() {
    this.tempSettings = Object.assign({}, this.props.settings);
    this.items = this.getItems();
    
    return (
      <section
        className={this.props.isOpen
        ? `${this.style.settings} ${this.style.open}`
        : this.style.settings}>
        <header>Settings</header>
        <ul className={this.style.list}>
          {this.items}
        </ul>
        <div className={this.style.actions}>
          <button className={this.style.reset} onClick={() => this.reset()}>reset</button>
          <button className={this.style.save} onClick={() => this.save()}>save</button>
          <button onClick={() => this.cancel()}>cancel</button>
        </div>
      </section>
    )
  }
}

export default Settings;