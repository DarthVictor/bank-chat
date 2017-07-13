import React from 'react'
import Operation from '../../Operation'

import './ChatMessage.scss'
import {MessageType} from '../../actions'
const OPERATION_HEADER = 'Операция'
export default class ChatMessage extends React.Component {
  render() {
    const {
      msg
    } = this.props
    return <div className={'chat-msg' + (msg.isCurrentUserMsg ? ' chat-msg--current_user' : '')}>
        <div className="chat-msg__avatar" >
          <img src={msg.author.avatarUrl} width="41" height="41"/>
        </div>
        {
          msg.type === MessageType.TEXT_MESSAGE && <div className="chat-msg__body">
            <span className="chat-msg__text-message-author">{msg.author.name}: </span>
            <span className="chat-msg__text-message-main">{msg.text}</span>
          </div>
        }
        {
        msg.type === MessageType.OPERATION_MESSAGE && <div className="chat-msg__body">
          <span className="chat-msg__operation-message-header">{OPERATION_HEADER}: </span>
          <Operation operation={msg.body.operation} currency={msg.body.currency} ></Operation>
        </div>
        }
    </div>
  }
}
