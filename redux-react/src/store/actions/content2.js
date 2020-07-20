import * as types from '../action-types'
export default {
  addNumber: (amount) => {
    return {
      type: types.INCREASE2,
      amount
    }
  },
  subNumber: (amount) => {
    return {
      type: types.DECREASE2,
      amount
    }
  }
}