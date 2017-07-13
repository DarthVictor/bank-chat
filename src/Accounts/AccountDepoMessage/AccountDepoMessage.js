import React from 'react'
import {Link} from 'react-router'

import Operation, {renderAmountColor, formatAmount, formatDate} from '../../Operation'
import {TextConstants} from '../../resources'

import './AccountDepoMessage.scss'

const MAXIMIZE_SVG = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
    <path fill="#888B94" fillRule="evenodd" d="M7.707 10.293a.999.999 0 0 0-1.414 0L2 14.586V11a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H3.414l4.293-4.293a.999.999 0 0 0 0-1.414zM17 0h-6a1 1 0 1 0 0 2h3.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414L16 3.414V7a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1z"/>
</svg>

const CLOSE_SVG = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
    <path fill="#888B94" fillRule="evenodd" d="M8.414 7l5.293-5.293A.999.999 0 1 0 12.293.293L7 5.586 1.707.293A.999.999 0 1 0 .293 1.707L5.586 7 .293 12.293a.999.999 0 1 0 1.414 1.414L7 8.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.414 7"/>
</svg>

export default class AccountDepoMessage extends React.Component {
  
  render() {
    const {
      account, expand, deposite
    } = this.props
    const {interest, amount, currency, createdDate} = account || deposite
    return <div className="account-msg">
      <div className="account-msg__header">
        <div className="account-msg__header-text">
          {account ? (TextConstants.HEADER_PREFIX_ACCOUNT + account.accountId) : ''}
          {deposite ? (TextConstants.HEADER_PREFIX_DEPO + deposite.depoId) : ''}
        </div>
        {account && <Link to={{query: expand ? {} : {accountId:account.accountId} }} className="account-msg__header-maximize">
          {expand ? CLOSE_SVG : MAXIMIZE_SVG}
        </Link>}
      </div>
      <div className="account-msg__amount">{formatAmount(amount, currency)}</div>
      <div className="account-msg__description">
        <div className="account-msg__description-interest">
          {interest}
        </div>
        <div className="account-msg__description-created">
          {TextConstants.CREATED_TEXT + formatDate(createdDate)}
        </div>

        {this.props.account && this.renderOperations()}
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
            <div className="account-msg__operations-list-header">{TextConstants.OPERATION_LIST_TEXT}</div>
            <div className="account-msg__operations-list">
              {account.operationsHistory.map(opp =>
                    <Operation 
                      key={opp.key} 
                      operation={opp} 
                      currency={account.currency} 
                      onSend={() => this.props.onSendOperation(opp, account.currency)}>
                    </Operation>              
              )}
            </div>
          </div>
        )
        :<div className="account-msg__last-operation">
          {TextConstants.LAST_OPERATION_TEXT + formatDate(account.operationsHistory[0].date)} (
            {renderAmountColor(account.operationsHistory[0].amount, account.currency)}
          )
        </div>)
    }


}
