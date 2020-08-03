import createActions from './createActions'
import createAction from './createAction'
import handleActions from './handleActions'
import handleAction from './handleAction'
export {
  createAction, // 处理单个action
  createActions,  // 处理多个action
  handleAction, // reducer处理单个action
  handleActions,  // reducer 处理多个action
}