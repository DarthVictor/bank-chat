import React from 'react'

const MESSAGE_SVG = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path fill="#888B94" fillRule="evenodd" d="M13.5 0h-11A2.507 2.507 0 0 0 0 2.5v7C0 10.875 1.125 12 2.5 12H12l4 4V2.5C16 1.125 14.875 0 13.5 0zM10 9H4c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm2-4H4c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>
</svg>

export default function Operation ({operation, currency, onSend}){
  return <div  className="operation">
    <div className="operation-body">
      <div className="operation-date">
        {formatDate(operation.date)}
      </div>
      <div className="operation-description">
        <span className="operation-description-text">{operation.description}</span> {renderAmountColor(operation.amount, currency)}
      </div>
    </div>
    {onSend && <button onClick={onSend} className="operation-msg">{MESSAGE_SVG}</button>}
  </div>
}

export function renderAmountColor(amount, currency){
  return <span className={amount > 0 ? 'positive' : 'negative'}>{formatAmountChange(amount, currency)}</span>
} 

export function formatAmount(amount, currency){
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

export function formatDate(timestamp){
  function twoDigits(n){
    return (n < 10 ? '0' : '') + n
  }
  const date = new Date(timestamp)
  return `${twoDigits(date.getDate())}.${twoDigits(date.getMonth() + 1)}.${date.getFullYear()}|${twoDigits(date.getHours())}:${twoDigits(date.getMinutes())}`
}
