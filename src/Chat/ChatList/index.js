import ChatList from './ChatList'

import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    chat: state.messages
  }
}
 

const ChatListContainer = connect(
  mapStateToProps,
)(ChatList)

export default ChatListContainer

