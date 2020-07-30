import { createStore, applyMiddleware } from '../redux' // redux
import { logger, think, promise } from '../redux-middlewares' // redux 中间件
import { persistStore, persistReducer } from '../redux-middlewares/redux-persist' // 数据持久化
import reducer from './reducers'
import storage from '../redux-middlewares/redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = { //  redux-persist 配置
  key: 'root', // 存储的key
  storage,    // 存储方式
  allowList:['content'],  // 白名单
  prohibit:['content1']  // 黑名单
}
const persistedReducer = persistReducer(persistConfig, reducer)
let store = applyMiddleware(think, promise, logger)(createStore)(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }
