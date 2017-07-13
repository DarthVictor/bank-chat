import React from 'react'

import './Chat.scss'
import ChatList from './ChatList'
import ChatInput from './ChatInput'
export default class Chat extends React.Component {
  render() {
    return <div className="chat">
        <ChatInput></ChatInput>
        <ChatList></ChatList>
    </div>
  }
}