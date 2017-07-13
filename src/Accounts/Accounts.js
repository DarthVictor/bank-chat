import React from 'react'
import { Router, Route,  browserHistory } from 'react-router'

import './Accounts.scss'
import AccountList from './AccountList'
import DepoList from './DepoList'

export default class Accounts extends React.Component {
  render() {
    return  <Router history={browserHistory}>
              <Route path="/" component={AccountList}/>
              <Route path="/deposites" component={DepoList}/>
            </Router>
  }
}
