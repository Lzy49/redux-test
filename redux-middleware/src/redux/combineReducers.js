export default (reducers) => {
  return (state = {}, action) => {
    let hasChanged = false
    const nextState = {} // 新状态
    const keys = Object.keys(reducers) // objcet.keys 不会循环原型链中的内容，for in 会循环原型链中的内容
    for (let k of keys) {
      nextState[k] = reducers[k](state[k], action)
      hasChanged = hasChanged || nextState[k] !== state[k]
    }
    return hasChanged ? nextState : state
  }
}