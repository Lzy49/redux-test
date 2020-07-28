import {createStore , applyMiddleware} from '../redux'
import {logger,think,promise} from '../redux-middlewares'
import reducer from './reducers'
const store = applyMiddleware(think,promise,logger)(createStore)(reducer)
console.log(store)
export default store
