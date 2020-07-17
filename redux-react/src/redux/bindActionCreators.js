// 作用 简化 dispatch
const bindActionCreator = ( actionCreator , dispatch )=>{
  return function() {
    return dispatch(actionCreator.apply(this, arguments))
  }
}
const bindActionCreators = (actionCreators , dispatch) =>{
  if(typeof actionCreators === 'function' ){
    return bindActionCreator(actionCreators,dispatch)
  }
  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('您传入内容不合法')
  }
  const boundActionCreators = {}
  for(let key in actionCreators){
    boundActionCreators[key] = bindActionCreator(actionCreators[key],dispatch)
  }
  return boundActionCreators
}
export default bindActionCreators