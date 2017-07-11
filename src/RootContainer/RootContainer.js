import React from 'react'
import Chat from '../Chat'
import Accounts from '../Accounts'
import './RootContainer.scss'



export default class RootContainer extends React.Component {
  render() {
    return <div className="chat-app">
      <Chat></Chat>
      <Accounts> </Accounts>
      </div>
  }
}