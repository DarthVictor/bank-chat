import React from 'react'
import Chat from '../Chat'
import Accounts from '../Accounts'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import app from '../reducers'

import './RootContainer.scss'

let store = createStore(app)



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