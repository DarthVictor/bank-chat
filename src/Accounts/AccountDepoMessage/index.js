import { connect } from 'react-redux'
import AccountDepoMessage from './AccountDepoMessage'
import {addOperationMessage} from '../../actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    onSendOperation: (operation, currency) => {
      dispatch(addOperationMessage(operation, currency))
    }
  }
}

const AccountDepoMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountDepoMessage)

export default AccountDepoMessageContainer