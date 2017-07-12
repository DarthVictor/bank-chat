export const MessageType = {
    TEXT_MESSAGE: 'TextMessage',
    OPERATION_MESSAGE: 'OperationMessage'
}
export const addTextMessage = message => {
    return {
        type: 'ADD_MESSAGE',
        payload: {
            type: MessageType.TEXT_MESSAGE,
            text: message.text,
            isCurrentUserMsg: true,
            date: Date.now()
        }
    }
}

export const addHello = message => {
    return {
        type: 'ADD_MESSAGE',
        payload: {
            type: MessageType.TEXT_MESSAGE,
            text: 'Привет, у меня пропали все деньги :(.',
            isCurrentUserMsg: false,
            date: Date.now()
        }
    }
}
const RANDOM_RESPONSES = [
    'Теперь понятно',
    'ОК, спасибо',
    'Отлично'
];

function getRandomInt(_min, _max) {//The maximum is exclusive and the minimum is inclusive
  const min = Math.ceil(min);
  const max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

export const addRandomResponse = message => {
    
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