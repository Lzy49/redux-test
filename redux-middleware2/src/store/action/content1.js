import * as types from '../action-types'
// import {createActions} from '../../redux-actions'
const createActions = (creates)=>{
  let newCreates = {}
  let keys = Object.keys(creates)
  for(let type of keys){
    newCreates[type] = (...aegs)=>({
      type,
      payload: creates[type](...aegs)
    })
  }
  return newCreates
}
export default createActions({
  [types.ADD]:(amount)=>amount*2,
  [types.MINUS]:()=>{}
})