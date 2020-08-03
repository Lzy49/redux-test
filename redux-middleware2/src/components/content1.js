import React,{Component} from 'react';
import {connect} from '../react-redux'
import action from '../store/action/content1'
class content1 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log(props)
  }
  render() { 
    return (
      <>
        <p>{this.props.number}</p>
        <button onClick={()=>this.props.ADD(1)}>+</button>
        <button onClick={()=>this.props.MINUS()}>-</button>
      </>
    );
  }
}
export default connect((store)=>({...store.content1}),action)(content1);