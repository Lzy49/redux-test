// import * as types from '../action-types' 
import {handleAction} from '../../redux-actions'
import actions from '../action/content1'
let reducer = handleAction(actions.add,(store,action)=>{
  return {number:store.number+action.payload}
},{number:1})
export default reducer