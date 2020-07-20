import * as types from '../action-types.js'
export default (state = { number: 0 }, action) => {
  if (action === undefined) return state
  switch (action.type) {
    case types.INCREASE2:
      state.number = state.number + action.amount
      return state
    case types.DECREASE2:
      state.number = state.number - action.amount
      return state
    default:
      return state
  }
}