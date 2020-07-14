import  {createStore} from './redux'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'
import $ from 'jquery'
$('body').append(`
  <div>
    <p id="counter"></p>
    <button id="increaseBtn">+</button>
    <button id="decreaseBtn">-</button>
  </div>
`)
//state 是状态树，可以是任意结构
//action 是一个纯对象 必须要有一个type 用于 reducer 判断
let reducer = (state = {number:0},action)=>{
  if(action === undefined) return state
  switch(action.type){
    case INCREASE:
      state.number = state.number + action.amount
      return state
    case DECREASE:
      state.number = state.number - action.amount
      return state
    default:
      return state
  }
}
let store = createStore(reducer)
let render = ()=>{
  console.log(store.getState())
  $('#counter').html(store.getState().number)
}
$('#increaseBtn').on('click',()=>{
  store.dispatch({
    type:INCREASE,
    amount:1
  })
})
$('#decreaseBtn').on('click',()=>{
  store.dispatch({
    type:DECREASE,
    amount:1
  })
})
render()
store.subscribe(render)

