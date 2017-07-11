import React from 'react'

import './ChatInput.scss'
const CHATINPUT_BUTTON_TEXT = 'Отправить'
const CHATINPUT_PLACEHOLDER = 'Отправить'
const CHATINPUT_HEADER = 'Чат'
export default class ChatInput extends React.Component {
  constructor(props){
    super(props)
    this.onSubmitButton = this.onSubmitButton.bind(this)
  }
  onSubmitButton(e){
    console.log(e)
    this.props.onSubmit('New Text')
  }
  render() {
    return <div className="chat-input">
        <span className="chat-input__header">{CHATINPUT_HEADER}</span>
        <textarea placeholder={CHATINPUT_PLACEHOLDER} className="chat-input__textarea"></textarea>
        <button className="chat-input__button" onClick={this.onSubmitButton}>{CHATINPUT_BUTTON_TEXT}</button>
    </div>
  }
}