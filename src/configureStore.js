import { createStore } from 'redux'
import { loadState, saveState } from './localStorage' 
import throttle from 'lodash/throttle'
import app from './reducers'
const persistedState = loadState()
const store = createStore(app, persistedState)
store.subscribe(throttle(() => {
  saveState(store.saveState())
}, 1000))

export default store