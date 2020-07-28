import * as types from '../action-types'
export default {
  add(amount){
    return {
      type:types.ADD2,
      amount
    }
  },
  del(amount){
    return {
      type:types.DEL2,
      amount
    }
  }
}