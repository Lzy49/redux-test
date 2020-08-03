import React, {PureComponent} from 'react'
import ReactReduxContent from './context'
import { bindActionCreators } from '../redux'
export default (mapStateToProps,actions) => {
  return (WrappedComponent) => {
    return class extends PureComponent {
      static contextType = ReactReduxContent
      constructor(props, context) {
        super(props)
        this.state = mapStateToProps(context.getState())
        this.bindAction = bindActionCreators(
          actions,
          context.dispatch
        )
      }
      componentDidMount() { // 加载的时候绑定
        this.unsubscribe = this.context.subscribe(() => {
          this.setState(mapStateToProps(this.context.getState()))
        })
      }
      componentWillUnmount() { //关闭的时候写在卸载
        this.unsubscribe()
      }
      render() {
        return (
          <WrappedComponent {...this.state}  {...this.bindAction} />
        );
      }
    }
  }
}