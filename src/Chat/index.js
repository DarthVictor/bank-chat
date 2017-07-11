import Chat from './Chat'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    chat: state.chat
  }
}

const ChatContainer = connect(
  mapStateToProps
)(Chat)

export default ChatContainer