import AccountList from './AccountList'
import { connect } from 'react-redux'



const mapStateToProps = (state, ownProps) => {
  const accountId = ownProps.location.query && ownProps.location.query.accountId ?
       +ownProps.location.query.accountId :
       null//expand={false}
  const accounts = state.operations.accounts
  return accountId > 0 ? {
    account: accounts.find(acc => acc.accountId === accountId)
  } : {accounts}
}

const AccountListContainer = connect(
  mapStateToProps
)(AccountList)

export default AccountListContainer
