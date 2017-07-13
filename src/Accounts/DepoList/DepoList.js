import React from 'react'
import AccountsMenu from '../AccountsMenu'

import './DepoList.scss'
export default class DepoList extends React.Component {

  render() {
    return <div className="accounts">
      <AccountsMenu></AccountsMenu>
      <div className="depo-list custom-scroll">
      <div className="depo-list__frame">
        <h1>Список депозитов</h1>
      </div>
    </div>
    </div>
  }
}