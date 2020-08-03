import * as types from '../action-types' 
// import {handleAction} from '../../redux-actions'
import actions from '../action/content1'
const handleActions = (reducer,initialStore)=>{
  return (state = initialStore,action)=>{
    if(reducer[action.type] != undefined){
      return reducer[action.type](state,action)
    }
    return state
  }
}
const reducer = handleActions({
  [types.ADD]:(state,action)=>({number:state.number+1}),
  [types.MINUS]:(state,action)=>({number:state.number-1})
},{number:1})
export default reducer
