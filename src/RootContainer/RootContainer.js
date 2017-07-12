import React from 'react'
import Chat from '../Chat'
import Accounts from '../Accounts'
import { Provider } from 'react-redux'
import './RootContainer.scss'
import store from '../configureStore'

export default class RootContainer extends React.Component {
  render() {
    return <Provider store={store}>
      <div className="chat-app">
        <Chat></Chat>
        <Accounts> </Accounts>
      </div>
    </Provider>
  }
}