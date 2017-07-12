import React from 'react'
import Chat from '../Chat'
import Accounts from '../Accounts'
import './App.scss'

export default class App extends React.Component {
  render() {
    return  <div className="chat-app">
        <Chat></Chat>
        <Accounts> </Accounts>
      </div>
  }
}