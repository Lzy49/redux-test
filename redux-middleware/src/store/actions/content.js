import * as types from '../action-types'
export default {
  add(amount){
    return {
      type:types.ADD,
      amount
    }
  },
  asycAdd(amount){
    return function(dispatch){
      setTimeout(function(){
        dispatch({
          type:types.ADD,
          amount
        })
      },1000) 
    }
  },
  promiseAdd(){
    return {
      type:types.ADD,
      payload:new Promise((resolve, reject)=>{
        setTimeout(() => {
          resolve(1)
        }, 1000);
      })
    }
  },
  del(amount){
    return {
      type:types.DEL,
      amount
    }
  }
}