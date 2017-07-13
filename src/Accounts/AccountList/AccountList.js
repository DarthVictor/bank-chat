import React from 'react'

import AccountDepoMessage from '../AccountDepoMessage'
import AccountsMenu from '../AccountsMenu'
import './AccountList.scss'

export default class AccountList extends React.Component {

  render() {
    if(this.props.accounts){
      document.title = 'Список счетов'
    }
    else if(this.props.account){
      document.title = `Счет №${this.props.account.accountId}`
    }
    return <div className="accounts">
      <AccountsMenu></AccountsMenu>
      <div className="account-list custom-scroll">
        <div className="account-list__frame">
          {
            this.props.accounts && this.props.accounts.map(acc => 
              <AccountDepoMessage key={acc.key} account={acc} expand={false}></AccountDepoMessage>
            )
          }          
          {
            this.props.account && 
            <AccountDepoMessage key={this.props.account.key} account={this.props.account} expand={true}></AccountDepoMessage>
          }
        </div>
      </div>
    </div>
  }
}
