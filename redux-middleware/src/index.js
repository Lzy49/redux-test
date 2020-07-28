import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from './react-redux'
import store from './store'
import Content from './components/content'
import Content2 from './components/content2'
ReactDOM.render(
  <Provider store={store}>
    <Content />
    <Content2 />
  </Provider>,
document.getElementById('root'))
