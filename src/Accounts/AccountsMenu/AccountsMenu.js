import React from 'react'
import {  Link } from 'react-router'

const ACCOUNTS_TEXT = 'Счета'
const DEPO_TEXT = 'Вклады'
import './AccountsMenu.scss'

export default function AccountsMenu() {
    return (
        <div role="nav" className="accounts__tab-selector">
            <Link className="accounts__tab-button" activeClassName="is-active" to="/">{ACCOUNTS_TEXT}</Link>
            <Link className="accounts__tab-button" activeClassName="is-active" to="/deposites">{DEPO_TEXT}</Link>
        </div>
    )
}