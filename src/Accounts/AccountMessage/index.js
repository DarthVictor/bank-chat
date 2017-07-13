import { connect } from 'react-redux'
import AccountMessage from './AccountMessage'
import {addOperationMessage} from '../../actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    onSendOperation: (operation, currency) => {
      dispatch(addOperationMessage(operation, currency))
    }
  }
}

const AccountMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountMessage)

export default AccountMessageContainer