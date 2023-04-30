import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    displayText: '',
    displayBtn: false,
  }

  onChangeDisplayText = event => {
    this.setState({displayText: event.target.value})
  }

  onClickSaveOrEdit = () => {
    this.setState(prevState => ({displayBtn: !prevState.displayBtn}))
  }

  renderContainer = () => {
    const {displayText, displayBtn} = this.state
    const btnText = displayBtn ? 'Edit' : 'Save'
    return (
      <div className="display-container">
        {displayBtn ? (
          <p className="paragraph">{displayText}</p>
        ) : (
          <input
            type="text"
            className="input-cont"
            value={displayText}
            onChange={this.onChangeDisplayText}
          />
        )}
        <button
          type="button"
          onClick={this.onClickSaveOrEdit}
          className="btn-cont"
        >
          {btnText}
        </button>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="sub-container">
          <h1 className="heading">Editable Text Input</h1>
          {this.renderContainer()}
        </div>
      </div>
    )
  }
}

export default App
