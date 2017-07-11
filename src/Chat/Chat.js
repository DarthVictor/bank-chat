import React from 'react'

import './Chat.scss'
import ChatList from './ChatList'
import ChatInput from './ChatInput'
export default class Chat extends React.Component {
  render() {
    console.log(this.props)
    return <div className="chat">
        <ChatInput onSubmit={this.props.onSubmit}></ChatInput>
        <ChatList messages={this.props.chat.messages}></ChatList>
    </div>
  }
}