import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/reducer'


let logger = store=>next=>action=> {
    let result = next(action)
    return result
}

let middleware = applyMiddleware(logger)
export default createStore(reducer,middleware)