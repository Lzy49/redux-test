import React from 'react';
import action from '../store/actions/content'
import { connect } from '../react-redux'
const MapStateToProps = (store) => ({...store.content})
const Content = (props)=>{
 return (
   <div>
     <p>{props.number}</p>
     <button onClick={()=>props.add(10)}>add</button>
     <button onClick={()=>props.asycAdd(10)}>asycAdd</button>
     <button onClick={()=>props.promiseAdd(10)}>promiseAdd</button>
   </div>
 )
}
export default connect(MapStateToProps, action)(Content)