
// 当有一个指定参是promise 时处理的中间件
const isPromise = (obj)=>(!! obj && (typeof obj === 'object' || typeof obj === 'function') && (typeof obj.then === 'object' || typeof obj.then === 'function'))
export default ({getState,dispatch})=>{
  return (next)=>{
    return (action)=>{
      return isPromise(action.payload) ? action.payload.then((res)=>{
        dispatch({...action,payload:res})
      }) : next(action)
    }
  }
}