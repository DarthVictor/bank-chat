import React from 'react'
import ChatMessage from '../ChatMessage'
import './ChatList.scss'

import EUGENIY_URL from '../../../public/Eugeniy.png'
import MARIA_URL from '../../../public/Maria.png'

function formatDateHeader(date){
  function twoDigits(n){
    return (n < 10 ? '0' : '') + n
  }
  return `—  ${twoDigits(date.getDate())}.${twoDigits(date.getMonth() + 1)}.${date.getFullYear()}  —`
}

export default class ChatList extends React.Component {  

  getList(){
    return MSG_LIST.map(msg => Object.assign({
      isCurrentUserMsg: msg.author.userId === CURRENT_USER_ID
    }, msg))
    .sort((a, b) => b.date - a.date)
    .reduce((accMsgs, msg) => {
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

const CURRENT_USER_ID = 1
const MSG_LIST = [
  {
    key: 16,
    type: 'TextMessage',
    text: 'можете проверить мой счет? Я вчера им пользовался',
    date: Date.parse('2017-03-08T14:48:15'),
    author: {
      name: 'Евгений',
      userId: 2,
      avatarUrl: EUGENIY_URL
    }
  },
  {
    key: 15,
    type: 'TextMessage',
    text: 'спасибо за обращение!',
    date: Date.parse('2017-03-05T16:48:15'),
    author: {
      name: 'Мария',
      userId: 1,
      avatarUrl: MARIA_URL
    }
  },
  {
    key: 14,
    type: 'TextMessage',
    text: 'Мария спасибо большое за помощь!',
    date: Date.parse('2017-03-05T15:48:15'),
    author: {
      name: 'Евгений',
      userId: 2,
      avatarUrl: EUGENIY_URL
    }
  },
  {
    key: 13,
    type: 'TextMessage',
    text: 'Женя, уже подключила вам новый тариф, на котором процент на остаток в счетах будет еще больше.',
    date: Date.parse('2017-03-05T14:48:15'),
    author: {
      name: 'Мария',
      userId: 1,
      avatarUrl: MARIA_URL
    }
  },
  {
    key: 12,
    type: 'TextMessage',
    text: 'Сейчас посмотрим, что можно сделать',
    date: Date.parse('2017-03-05T14:48:15'),
    author: {
      name: 'Мария',
      userId: 1,
      avatarUrl: MARIA_URL
    }
  },
  {    
    key: 11,
    type: 'TextMessage',
    text: 'Привет. А как перейти на тариф, на котором самый большой процент на остаток по счетам?',
    date: Date.parse('2017-03-05T13:48:15'),
    author: {
      name: 'Евгений',
      userId: 2,
      avatarUrl: EUGENIY_URL
    }
  },
  {
    key: 10,
    type: 'TextMessage',
    text: 'Добрый день, Евгений. Поздарвляю Вас с наступлением весны',
    date: Date.parse('2017-03-01T14:48:15'),
    author: {
      name: 'Мария',
      userId: 1,
      avatarUrl: MARIA_URL
    }
  },
  {
    key: 9,
    type: 'TextMessage',
    text: 'Добрый день, Евгений. Поздарвляю Вас с Днём защитника Отчества',
    date: Date.parse('2017-02-23T14:48:15'),
    author: {
      name: 'Мария',
      userId: 1,
      avatarUrl: MARIA_URL
    }
  }
]