import ChatInput from './ChatInput'
import { connect } from 'react-redux'
import {addMessage} from '../../actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: text => {
      dispatch(addMessage({
          type: 'TextMessage',
          isCurrentUserMsg: true,
          text,
      }))
    }
  }
}

const ChatInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInput)

export default ChatInputContainer