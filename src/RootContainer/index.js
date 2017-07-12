import { Provider } from 'react-redux'


import React from 'react'
import App from '../App'


import store from '../store'

export default class RootContainer extends React.Component {
  render() {
    return <Provider store={store}>
      <App></App>
    </Provider>
  }
}