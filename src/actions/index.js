export const MessageType = {
    TEXT_MESSAGE: 'TextMessage',
    OPERATION_MESSAGE: 'OperationMessage'
}

const RANDOM_RESPONSES = [
    'Теперь понятно',
    'ОК, спасибо',
    'Отлично'
]

const HELLO_MSG_TEXT = 'Привет, у меня пропали все деньги :(.'
const RESPONSE_TIMEOUT = 3000

export const addTextMessage = message => {
    return dispatch => {
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                type: MessageType.TEXT_MESSAGE,
                text: message.text,
                isCurrentUserMsg: true,
                date: Date.now()
            }
        })
        setTimeout(() => {
            dispatch(addRandomResponse())
        }, RESPONSE_TIMEOUT);
    }
}


export const addOperationMessage = (operation, currency) => {
    return dispatch => {
        dispatch({
            type: 'ADD_MESSAGE',
            payload: {
                type: MessageType.OPERATION_MESSAGE,
                body: {operation, currency},
                isCurrentUserMsg: true,
                date: Date.now()
            }
        })
        setTimeout(() => {
            dispatch(addRandomResponse())
        }, RESPONSE_TIMEOUT);
    }
}

export const addHello = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
            type: 'ADD_HELLO_MESSAGE',
            payload: {
                type: MessageType.TEXT_MESSAGE,
                text: HELLO_MSG_TEXT,
                isCurrentUserMsg: false,
                date: Date.now()
            }
        })
        }, RESPONSE_TIMEOUT);
    }
}

function getRandomInt(_min, _max) {//The maximum is exclusive and the minimum is inclusive
  const min = Math.ceil(_min);
  const max = Math.floor(_max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

export const addRandomResponse = () => {
    return {
        type: 'ADD_MESSAGE',
        payload: {
            type: MessageType.TEXT_MESSAGE,
            text: RANDOM_RESPONSES[getRandomInt(0, RANDOM_RESPONSES.length)],
            isCurrentUserMsg: false,
            date: Date.now()
        }
    }
}