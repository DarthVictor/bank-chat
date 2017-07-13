import React from 'react'
import {  Link } from 'react-router'
import {TextConstants} from '../../resources'

import './AccountsMenu.scss'

export default function AccountsMenu() {
    return (
        <div role="nav" className="accounts__tab-selector">
            <Link className="accounts__tab-button" activeClassName="is-active" to="/">{TextConstants.ACCOUNTS_TEXT}</Link>
            <Link className="accounts__tab-button" activeClassName="is-active" to="/deposites">{TextConstants.DEPO_TEXT}</Link>
        </div>
    )
}