import compose from './compose'
export default (...middlewares) =>{
  return function (createStore){
    return function (...args){
      const store = createStore(...args)
      let dispatch;
      const middlewareApi = {
        getState:store.getState,
        dispatch:(...args)=>dispatch(...args)
      }
      const chain = middlewares.map(middleware=>middleware(middlewareApi))
      dispatch = compose(...chain)(store.dispatch)
      return {
        ...store,
        dispatch
      }
    }
  }
}