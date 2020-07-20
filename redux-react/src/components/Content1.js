import React, { useEffect, useState } from 'react';
import { bindActionCreators } from '../redux'
import content1 from '../store/actions/content1'
import store from '../store'
const actions = bindActionCreators(
  content1,
  store.dispatch
)
export default () => {
  const [number, setNumber] = useState(store.getState().content1.number)
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setNumber(store.getState().content1.number)
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
