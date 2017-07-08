import React from 'react'

import './ChatInput.scss'
const CHATINPUT_BUTTON_TEXT = 'Отправить'
const CHATINPUT_PLACEHOLDER = 'Отправить'
const CHATINPUT_HEADER = 'Чат'
export default class ChatInput extends React.Component {
  render() {
    return <div className="chat-input">
        <span className="chat-input__header">{CHATINPUT_HEADER}</span>
        <textarea placeholder={CHATINPUT_PLACEHOLDER} className="chat-input__textarea"></textarea>
        <button className="chat-input__button">{CHATINPUT_BUTTON_TEXT}</button>
    </div>
  }
}