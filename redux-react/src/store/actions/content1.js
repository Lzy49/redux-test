import * as types from '../action-types'
export default {
  addNumber: (amount) => {
    return {
      type: types.INCREASE1,
      amount
    }
  },
  subNumber: (amount) => {
    return {
      type: types.DECREASE1,
      amount
    }
  }
}