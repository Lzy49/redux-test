import React from 'react';
import {connect} from '../react-redux'
import content2 from '../store/actions/content2'
export default connect((store)=>store.content2,content2)((props) => { 
  console.log('content2在刷新',props)
  return (
    <div>
      <p id="counter">{props.number}</p>
      <button onClick={() => props.addNumber(10)}>+</button>
      <button onClick={() => props.subNumber(1)}>-</button>
    </div>
  )
})
