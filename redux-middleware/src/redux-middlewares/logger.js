// 日志中间价
export default ({getState,dispatch})=>{
  return (next)=>{
    return (action)=>{
      console.log(JSON.parse(JSON.stringify(getState())))
      next(action)
      console.log(JSON.parse(JSON.stringify(getState())))
    }
  }
}