import style from './style.scss'
import React, {Component} from 'react'

/* import config */
import config from '../../config'

/* core */
class Settings extends Component {
  constructor(props) {
    super(props)

    this.folderName = config.title
  }

  save() {
    this.folderName = this.folderNameInput.value;
    this
      .props
      .updateSetting("save", this.folderName)
  }

  reset() {
    this.folderNameInput.value = config.title;
    this
      .props
      .updateSetting("reset")
  }

  cancel() {
    this.folderNameInput.value = this.folderName;
    this
      .props
      .updateSetting("cancel")
  }

  componentDidMount(){
    chrome.runtime.sendMessage({type:'get_folderName'});
    chrome.runtime.onMessage.addListener(result => {
      const {type, data} = result;

      if(type === 'return_folderName'){
        this.folderName = data;
        this.folderNameInput.value = this.folderName;
      }
    })
  }

  render() {
    return (
      <section>
        <header>Settings</header>
        <div>
          <label htmlFor="folderName">folder name:</label>
          <input
            type="text"
            name="folderName"
            id="folderName"
            ref={el => {
            this.folderNameInput = el;
          }}/>

          <button onClick={() => this.reset()}>reset</button>
          <button onClick={() => this.save()}>save</button>
          <button onClick={() => this.cancel()}>cancel</button>
        </div>
      </section>
    )
  }
}

export default Settings;