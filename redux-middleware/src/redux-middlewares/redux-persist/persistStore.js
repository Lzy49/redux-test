export default (store)=>{
  console.log(store)
  return {
    ...store,
    initData:()=>{
      store.dispatch({type:'PERSIST_INIT'})
    }
  }
}