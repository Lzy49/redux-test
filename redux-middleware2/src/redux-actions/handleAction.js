export default (actionCreateor,reducer,initialStore)=>{
  return function(store = initialStore,action){
    if(action.type === actionCreateor().type){
      return reducer(store,action)
    }
    return store
  }
} 