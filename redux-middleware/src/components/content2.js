import React from 'react';
import action from '../store/actions/content2'
import { connect } from '../react-redux'
const MapStateToProps = (store) => ({...store.content2})
const Content = (props)=>{
 return (
   <div>
     <p>{props.number}</p>
     <button onClick={()=>props.add(10)}>+</button>
   </div>
 )
}
export default connect(MapStateToProps, action)(Content)