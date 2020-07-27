import React from 'react';
export default class PureComponent extends React.Component {
  static isPureComponent  = true
  shouldComponentUpdate(nextProps,nextState){
    const oldProps = this.props
    if(oldProps === null || typeof oldProps !== 'object' || nextProps === null || typeof nextProps !== 'object'){
      return true
    }
    if(Object.keys(oldProps).length  !== Object.keys(nextProps).length){
      return true
    }
    for(let key in oldProps){
      if(!nextProps.hasOwnProperty(key) || nextProps[key] != oldProps[key]){
        return true
      }
    }
    return false
  }
}