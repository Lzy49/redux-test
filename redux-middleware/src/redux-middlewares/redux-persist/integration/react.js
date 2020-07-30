import React from 'react';

export default class extends React.Component {
  componentWillMount(){
    this.props.persistor.initData()
  }
  render() { 
    return this.props.children;
  }
}