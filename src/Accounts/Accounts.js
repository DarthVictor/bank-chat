import React from 'react'

import './Accounts.scss'
import AccountList from './AccountList'
// import DepoList from './DepoList'

export default class Accounts extends React.Component {
  render() {
    return <div className="accounts">
        <div className="accounts__tab-selector">

        </div>
        <AccountList></AccountList>
        {/*<DepoList></DepoList>*/}
    </div>
  }
}