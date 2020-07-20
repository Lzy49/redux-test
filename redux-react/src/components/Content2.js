import React, { useEffect, useState } from 'react';
import { bindActionCreators } from '../redux'
import store from '../store'
import action from '../store/actions/content2'
const actions = bindActionCreators(action,store.dispatch)
export default () => {
  const [number, setNumber] = useState(store.getState().content2.number)
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setNumber(store.getState().content2.number)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <div>
      <p id="counter">{number}</p>
      <button onClick={() => actions.addNumber(10)}>+</button>
      <button onClick={() => actions.subNumber(1)}>-</button>
    </div>
  )
}
