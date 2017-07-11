import React from 'react'

import './AccountMessage.scss'
const HEADER_PREFIX = 'Счет № '
const CREATED_TEXT = 'Создан: '
const LAST_OPERATION_TEXT = 'Последнее операция: '
const MAXIMIZE = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
    <path fill="#888B94" fill-rule="evenodd" d="M7.707 10.293a.999.999 0 0 0-1.414 0L2 14.586V11a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H3.414l4.293-4.293a.999.999 0 0 0 0-1.414zM17 0h-6a1 1 0 1 0 0 2h3.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414L16 3.414V7a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1z"/>
</svg>

export default class AccountMessage extends React.Component {
  
  render() {
    const {
      account
    } = this.props
    return <div className="account-msg">
      <div className="account-msg__header">
        <div className="account-msg__header-text">
          {HEADER_PREFIX + account.accountId}
        </div>
        <a className="account-msg__header-maximize">
          {MAXIMIZE}
        </a>
      </div>
      <div className="account-msg__amount">{formatAmount(account.amount, account.currency)}</div>
      <div className="account-msg__description">
        <div className="account-msg__description-interest">
          {account.interest}
        </div>
        <div className="account-msg__description-created">
          {CREATED_TEXT + formatDate(account.createdDate)}
        </div>
        {account.operationsHistory && 
        <div className="account-msg__last-operation">
          {LAST_OPERATION_TEXT + formatDate(account.operationsHistory[0].date)} (
            <span className={account.operationsHistory[0].amount > 0 ? 'positive' : 'negative'}>{formatAmountChange(account.operationsHistory[0].amount, account.currency)}</span>
          )
        </div>}
      </div>
    </div>
  }
}



function formatAmount(amount, currency){
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  })
  return formatter.format(amount)
}

function formatAmountChange(amount, currency){
  return (amount > 0 ? '+ ' : '- ') + formatAmount(Math.abs(amount), currency)
}

function formatDate(timestamp){
  function twoDigits(n){
    return (n < 10 ? '0' : '') + n
  }
  const date = new Date(timestamp)
  return `${twoDigits(date.getDate())}.${twoDigits(date.getMonth() + 1)}.${date.getFullYear()}|${twoDigits(date.getHours())}:${twoDigits(date.getMinutes())}`
}