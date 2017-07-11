import React from 'react'

import './AccountMessage.scss'
const HEADER_PREFIX = 'Счет № '
const CREATED_TEXT = 'Создан: '
const LAST_OPERATION_TEXT = 'Последнее операция: '
export default class AccountMessage extends React.Component {
  
  render() {
    const {
      account
    } = this.props
    return <div className="account-msg">
      <div className="account-msg__header">{HEADER_PREFIX + account.accountId}</div>
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
            <span className={account.amount > 0 ? 'positive' : 'negative'}>{formatAmountChange(account.operationsHistory[0].amount, account.currency)}</span>
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