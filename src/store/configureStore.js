import { createStore } from 'redux'
import { loadState, saveState } from './localStorage' 
import throttle from 'lodash/throttle'
import app from '../reducers'
import onStartup from './onStartup'

const persistedState = loadState()
const store = createStore(app, persistedState)
store.subscribe(throttle(() => saveState(store.getState()), 1000))
onStartup(store)
export default store