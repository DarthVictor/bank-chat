import React from 'react'

import './ChatMessage.scss'

export default class ChatMessage extends React.Component {
  render() {
    const {
      msg
    } = this.props
    return <div className={'chat-msg' + (msg.isCurrentUserMsg ? ' chat-msg--current_user' : '')}>
        <div className="chat-msg__avatar" >
          <img src={msg.author.avatarUrl} width="41" height="41"/>
        </div>
        <div className="chat-msg__text-message">
          <span className="chat-msg__text-message-author">{msg.author.name}: </span>
          <span className="chat-msg__text-message-main">{msg.text}</span>
        </div>
    </div>
  }
}
