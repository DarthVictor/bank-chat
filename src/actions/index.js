export const addMessage = message => {
    return {
        type: 'ADD_MESSAGE',
        payload: {
            type: message.type,
            text: message.text,
            isCurrentUserMsg: message.isCurrentUserMsg,
            date: Date.now()
        }
    }
}