import * as types from '../action-types'
export default (store = { number: 0 },action)=>{
  if(action === undefined || action.type === undefined ) return store
  switch(action.type){
    case types.ADD2:
      store.number = store.number + (action.amount || 1)
      return JSON.parse(JSON.stringify(store))
    case types.DEL2:
      store.number = store.number - (action.amount || 1)
      return JSON.parse(JSON.stringify(store))
    default:
      return store
  }
}