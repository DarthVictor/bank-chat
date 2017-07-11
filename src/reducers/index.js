import { combineReducers } from 'redux'
import chat from './chat'

const todoApp = combineReducers({
  chat,
})

export default todoApp