import ChatList from './ChatList'

import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    messages: state.chat.messages
  }
}
 

const ChatListContainer = connect(
  mapStateToProps,
)(ChatList)

export default ChatListContainer

