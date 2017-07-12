import {addHello} from '../actions'
export default (store) => {
    store.dispatch(addHello())
}