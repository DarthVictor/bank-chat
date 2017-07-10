import React from 'react'

import './Accounts.scss'
import AccountList from './AccountList'
// import DepoList from './DepoList'

const ACCOUNTS_TEXT = 'Счета'
const DEPO_TEXT = 'Вклады'
export default class Accounts extends React.Component {
  render() {
    return <div className="accounts">
        <div className="accounts__tab-selector">
          <button  className="accounts__tab-button is-active">{ACCOUNTS_TEXT}</button>
          <button  className="accounts__tab-button">{DEPO_TEXT}</button>
        </div>
        <AccountList></AccountList>
        {/*<DepoList></DepoList>*/}
    </div>
  }
}