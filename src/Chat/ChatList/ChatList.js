import React from 'react'
import ChatMessage from '../ChatMessage'
import './ChatList.scss'

function formatDateHeader(date){
  function twoDigits(n){
    return (n < 10 ? '0' : '') + n
  }
  return `—  ${twoDigits(date.getDate())}.${twoDigits(date.getMonth() + 1)}.${date.getFullYear()}  —`
}

export default class ChatList extends React.Component {  

  getList(){
    const {messages} = this.props
    return messages.reduce((accMsgs, msg) => {
      const prevMsgDate = accMsgs.length > 0 ? new Date(accMsgs[accMsgs.length - 1].date) : null
      const curMsgDate = new Date(msg.date)
      if(prevMsgDate === null || prevMsgDate.getDate() !== curMsgDate.getDate()){
        accMsgs.push({
          isDateHeader: true,
          key: 'header_' + msg.date,
          text: formatDateHeader(curMsgDate)
        })
      }
      accMsgs.push(msg)
      return accMsgs
    }, [])
  }
  
  render() {
     
    return <div className="chat-list custom-scroll">
      <div className="chat-list__frame">
        {this.getList().map(msg => 
          msg.isDateHeader 
          ? <div key={msg.key} className="chat-list__date-header">
              <span className="chat-list__date-header-text">{msg.text}</span>
            </div>
          : <ChatMessage key={msg.key} msg={msg}></ChatMessage>
        )}
      </div>
    </div>
  }
}

