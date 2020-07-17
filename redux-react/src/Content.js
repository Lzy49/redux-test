import React, { useEffect, useState } from 'react';
import { createStore,bindActionCreators } from './redux'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
let reducer = (state = { number: 0 }, action) => {
  if (action === undefined) return state
  switch (action.type) {
    case INCREASE:
      state.number = state.number + action.amount
      return state
    case DECREASE:
      state.number = state.number - action.amount
      return state
    default:
      return state
  }
}
let store = createStore(reducer)
const actions = bindActionCreators(
  {
    addNumber:(amount) => {
      return {
        type: INCREASE,
        amount
      }
    },
    subNumber:(amount) => {
      return {
        type: DECREASE,
        amount
      }
    }
  },
  store.dispatch
)
export default () => {
  const [number, setNumber] = useState(store.getState().number)
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setNumber(store.getState().number)
    })
    return ()=>{
      unsubscribe()
    }
  },[])
  return (
    <div>
      <p id="counter">{number}</p>
      <button onClick={() => actions.addNumber(10)}>+</button>
      <button onClick={() => actions.subNumber(1)}>-</button>
    </div>
  )
}
