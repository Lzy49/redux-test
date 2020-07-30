export default (persistConfig, reducer)=>{
  // 改造 reducer 在 reducer 返回数据的时候，将数据存储到 本地一份
  // reducer
  // persistConfig.key
  // persistConfig.storage
  let inited = false
  let key = `persist:${persistConfig.key}`
  return function( state,action) { 
    if(action.type === 'PERSIST_INIT'){ // 取数据
      inited = true
      const value = persistConfig.storage.get(key)
      return reducer(value?value:undefined,action)
    }else{
      if(inited){
        if(persistConfig.allowList && persistConfig.allowList.length > 0){
          state = reducer(state,action)
          const persistState = {}
          for(let item of persistConfig.allowList){
            persistState[item] = state[item]
          }
          persistConfig.storage.set(key,persistState)
          return state
        }
        if(persistConfig.prohibit && persistConfig.prohibit.length > 0){
          state = reducer(state,action)
          persistConfig.storage.set(key,state)
          return state
        }
        state = reducer(state,action)
        persistConfig.storage.set(key,state)
        return state
      }
    }
    return reducer(state,action)
  }
}