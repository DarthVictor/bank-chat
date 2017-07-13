import React from 'react'
import AccountsMenu from '../AccountsMenu'
import AccountDepoMessage from '../AccountDepoMessage'

import './DepoList.scss'
export default class DepoList extends React.Component {

  render() {
    document.title = 'Список депозитов'
    return <div className="accounts">
      <AccountsMenu></AccountsMenu>
      <div className="deposites-list custom-scroll">
      <div className="deposites-list__frame">
        {
          this.props.deposites && this.props.deposites.map(deposite => 
              <AccountDepoMessage key={deposite.key} deposite={deposite} expand={false}></AccountDepoMessage>
            )
        }
      </div>
    </div>
    </div>
  }
}