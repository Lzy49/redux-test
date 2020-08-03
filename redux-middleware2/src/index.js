import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from './react-redux'
import store from './store'
import Content1 from './components/content1'
ReactDOM.render(
  <Provider store = {store}>
    <Content1 />  
  </Provider>
,document.getElementById('root'))