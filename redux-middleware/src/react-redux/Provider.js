import React from 'react'
import ReactReduxContent from './context'
export default (props)=>{
  return(
    <ReactReduxContent.Provider value={props.store}>
      {props.children}
    </ReactReduxContent.Provider>
  )
}