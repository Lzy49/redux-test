//创建仓库
const createStore = (reducer)=>{
  // 状态
  let state;
  // 监听函数数组
  let listeners = []
  // 获取最新的状态
  let getState = ()=>state 
  // 向仓库发送action
  let dispatch = (action)=>{
    // 传入老的 state 返回新的 state
    state = reducer(state,action)
    // 依次调用所有订阅属性
    listeners.forEach(listener=>listener())
  }
  // 订阅仓库内的变化事件，当状态发生变化后会调用对应的监听函数
  let subscribe = (listener)=>{
    listeners.push(listener)
    // 订阅方法执行后会返回一个取消订阅的函数，调用它会取消订阅
    return ()=>{
      listeners = listeners.filter(l=>listener !== l)
    }
  }
  dispatch();
  return {
    getState,  // 获取最新的状态对象
    subscribe, // 订阅状态变化事件
    dispatch, // 发送 action 给 reducer
  }
}
export default createStore