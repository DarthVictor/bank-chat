import React from 'react'

import './AccountMessage.scss'
const HEADER_PREFIX = 'Счет № '
const CREATED_TEXT = 'Создан: '
const LAST_OPERATION_TEXT = 'Последнее операция: '
const OPERATION_LIST_TEXT = 'История операций'
const MAXIMIZE_SVG = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
    <path fill="#888B94" fillRule="evenodd" d="M7.707 10.293a.999.999 0 0 0-1.414 0L2 14.586V11a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H3.414l4.293-4.293a.999.999 0 0 0 0-1.414zM17 0h-6a1 1 0 1 0 0 2h3.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414L16 3.414V7a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1z"/>
</svg>
const MESSAGE_SVG = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path fill="#888B94" fillRule="evenodd" d="M13.5 0h-11A2.507 2.507 0 0 0 0 2.5v7C0 10.875 1.125 12 2.5 12H12l4 4V2.5C16 1.125 14.875 0 13.5 0zM10 9H4c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm2-4H4c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>
</svg>

const CLOSE_SVG = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
    <path fill="#888B94" fillRule="evenodd" d="M8.414 7l5.293-5.293A.999.999 0 1 0 12.293.293L7 5.586 1.707.293A.999.999 0 1 0 .293 1.707L5.586 7 .293 12.293a.999.999 0 1 0 1.414 1.414L7 8.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.414 7"/>
</svg>

export default class AccountMessage extends React.Component {
  
  render() {
    const {
      account, expand
    } = this.props
    return <div className="account-msg">
      <div className="account-msg__header">
        <div className="account-msg__header-text">
          {HEADER_PREFIX + account.accountId}
        </div>
        <a className="account-msg__header-maximize">
          {expand ? CLOSE_SVG : MAXIMIZE_SVG}
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

        {this.renderOperations()}
      </div>
    </div>
  }

  renderOperations(){
    const {
      account,
      expand
    } = this.props
    return account.operationsHistory && 
        (expand 
        
        ?(
          <div>
            <div className="account-msg__operations-list-header">{OPERATION_LIST_TEXT}</div>
            <div className="account-msg__operations-list">
              {account.operationsHistory.map(opp => 
                <Operation key={opp.key} opperation={opp} currency={account.currency}></Operation>
              )}
            </div>
          </div>
        )
        :<div className="account-msg__last-operation">
          {LAST_OPERATION_TEXT + formatDate(account.operationsHistory[0].date)} (
            {renderAmountColor(account.operationsHistory[0].amount, account.currency)}
          )
        </div>)
    }


}

function renderAmountColor(amount, currency){
  return <span className={amount > 0 ? 'positive' : 'negative'}>{formatAmountChange(amount, currency)}</span>
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

function Operation ({opperation, currency}){
  return <div  className="account-msg__operation">
    <div className="account-msg__operation-body">
      <div className="account-msg__operation-date">
        {formatDate(opperation.date)}
      </div>
      <div className="account-msg__operation-description">
        <span className="account-msg__operation-description-text">{opperation.description}</span> {renderAmountColor(opperation.amount, currency)}
      </div>
    </div>
    <div className="account-msg__operation-msg">{MESSAGE_SVG}</div>
  </div>
}
