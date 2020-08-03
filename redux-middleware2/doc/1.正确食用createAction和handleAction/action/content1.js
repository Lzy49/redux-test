import * as types from '../action-types'
import {createAction} from '../../redux-actions'
const add = createAction(types.ADD,(amount)=>amount*2) // 传2个参数，第一个是类型，第二个是对其他参与值的计算
export default {
  add
}