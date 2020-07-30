import React from 'react';
import ReactDOM from 'react-dom'
import { store, persistor } from './store'
import { Provider } from './react-redux'
import PersistGate from './redux-middlewares/redux-persist/integration/react'
import Content from './components/content'
import Content2 from './components/content2'
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Content />
      <Content2 />
    </PersistGate>
  </Provider>,
document.getElementById('root'))
