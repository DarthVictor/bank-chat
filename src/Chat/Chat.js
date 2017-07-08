import React from 'react'

import './Chat.scss'
import ChatInput from './ChatInput'
export default class Chat extends React.Component {
  render() {
    return <div className="chat">
        <ChatInput></ChatInput>
    </div>
  }
}