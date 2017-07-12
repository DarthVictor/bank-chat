const messages = (state = getDefaultState(), action) => {
    function addMsg(payload){
        return [            
            Object.assign({
                key: Math.max(...state.messages.map(m => m.key)) + 1,
                author: payload.isCurrentUserMsg ? state.users.current : state.users.other
            }, payload),
            ...state.messages
        ]
    }
    const {type, payload} = action
    switch (type) {
        case 'ADD_MESSAGE':
            return Object.assign({}, state,{
                messages: addMsg(payload)
            })
        case 'ADD_HELLO_MESSAGE':
            return state.wasHelloMessageSent 
                ? state 
                : Object.assign({}, state,{
                    messages: addMsg(payload),
                    wasHelloMessageSent: true
                })
        default:
            return state
    }
}

export default messages

import EUGENIY_URL from '../../public/Eugeniy.png'
import MARIA_URL from '../../public/Maria.png'
 
function getDefaultState(){
    return {
        messages : MSG_LIST.map(msg => Object.assign({
            isCurrentUserMsg: msg.author.userId === CURRENT_USER.userId
        }, msg))
        .sort((a, b) => b.date - a.date),
        users : {
            current: CURRENT_USER,
            other: OTHER_USER
        },
        wasHelloMessageSent: false
    } 
   
}
const CURRENT_USER = {
    name: 'Мария',
    userId: 1,
    avatarUrl: MARIA_URL
}
const OTHER_USER = {
    name: 'Евгений',
    userId: 2,
    avatarUrl: EUGENIY_URL
}
const MSG_LIST = [
  {
    key: 16,
    type: 'TextMessage',
    text: 'можете проверить мой счет? Я вчера им пользовался',
    date: Date.parse('2017-03-08T14:48:15'),
    author: OTHER_USER
  },
  {
    key: 15,
    type: 'TextMessage',
    text: 'спасибо за обращение!',
    date: Date.parse('2017-03-05T16:48:15'),
    author: CURRENT_USER
  },
  {
    key: 14,
    type: 'TextMessage',
    text: 'Мария спасибо большое за помощь!',
    date: Date.parse('2017-03-05T15:48:15'),
    author: OTHER_USER
  },
  {
    key: 13,
    type: 'TextMessage',
    text: 'Женя, уже подключила вам новый тариф, на котором процент на остаток в счетах будет еще больше.',
    date: Date.parse('2017-03-05T14:48:15'),
    author: CURRENT_USER
  },
  {
    key: 12,
    type: 'TextMessage',
    text: 'Сейчас посмотрим, что можно сделать',
    date: Date.parse('2017-03-05T14:48:15'),
    author: CURRENT_USER
  },
  {    
    key: 11,
    type: 'TextMessage',
    text: 'Привет. А как перейти на тариф, на котором самый большой процент на остаток по счетам?',
    date: Date.parse('2017-03-05T13:48:15'),
    author: OTHER_USER
  },
  {
    key: 10,
    type: 'TextMessage',
    text: 'Добрый день, Евгений. Поздарвляю Вас с наступлением весны',
    date: Date.parse('2017-03-01T14:48:15'),
    author: CURRENT_USER
  },
  {
    key: 9,
    type: 'TextMessage',
    text: 'Добрый день, Евгений. Поздарвляю Вас с Днём защитника Отчества',
    date: Date.parse('2017-02-23T14:48:15'),
    author: CURRENT_USER
  }
]