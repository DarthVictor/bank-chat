import React from 'react'

import AccountMessage from '../AccountMessage'
import AccountsMenu from '../AccountsMenu'
import './AccountList.scss'
export default class AccountList extends React.Component {

  render() {
    return <div className="accounts">
      <AccountsMenu></AccountsMenu>
      <div className="account-list custom-scroll">
        <div className="account-list__frame">
          {
            this.props.accounts && this.props.accounts.map((acc, idx) => 
              <AccountMessage key={acc.key} account={acc} expand={false}></AccountMessage>
            )
          }          
          {
            this.props.account && 
            <AccountMessage key={this.props.account.key} account={this.props.account} expand={true}></AccountMessage>
          }
        </div>
      </div>
    </div>
  }
}
