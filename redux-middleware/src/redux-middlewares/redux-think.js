// 当是一个方法时候处理方法的中间件
export default ({getState,dispatch})=>{
  return (next)=>{
    return (action)=>{
      if(typeof action === 'function'){
        action(dispatch)
      }else{
        next(action)
      }
    }
  }
}