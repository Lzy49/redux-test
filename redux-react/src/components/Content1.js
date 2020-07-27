import React from 'react';
import {connect} from '../react-redux'
import content1 from '../store/actions/content1'
export default connect((store)=>store.content1,content1)((props) => {
  console.log('content1在刷新',props)
  return (
    <div>
      <p id="counter">{props.number}</p>
      <button onClick={() => props.addNumber(1)}>+</button>
      <button onClick={() => props.subNumber(1)}>-</button>
    </div>
  )
})
