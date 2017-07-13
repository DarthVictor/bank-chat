import { combineReducers } from 'redux'
import chat from './chat'
import operations from './operations'

const todoApp = combineReducers({
  chat,
  operations
})

export default todoApp