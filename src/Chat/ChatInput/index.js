import ChatInput from './ChatInput'
import { connect } from 'react-redux'
import {addTextMessage} from '../../actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: text => {
      dispatch(addTextMessage({
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