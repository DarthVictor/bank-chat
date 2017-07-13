import React from 'react'

import './ChatInput.scss'
import {TextConstants} from '../../resources'
const ENTER_CODE = 13
export default class ChatInput extends React.Component {
  constructor(props){
    super(props)
    this.onSubmitButton = this.onSubmitButton.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.textInput = null
  }

  onSubmitButton(){
    this.props.onSubmit(this.textInput.value)
    this.textInput.value = ''
  } 

  onKeyDown(e){
    if((e.ctrlKey || e.metaKey) && e.keyCode === ENTER_CODE && this.textInput === document.activeElement){
      this.onSubmitButton()
    }
  }

  componentDidMount(){
    document.addEventListener('keydown', this.onKeyDown)
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.onKeyDown)
  }

  render() {
    return <div className="chat-input">
        <span className="chat-input__header">{TextConstants.CHATINPUT_HEADER}</span>
        <textarea 
          placeholder={TextConstants.CHATINPUT_PLACEHOLDER} 
          className="chat-input__textarea" 
          ref={(input) => { this.textInput = input }}>
        </textarea>
        <button className="chat-input__button" onClick={this.onSubmitButton}>{TextConstants.CHATINPUT_BUTTON_TEXT}</button>
    </div>
  }
}