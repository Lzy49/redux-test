import React from 'react';
import ReactDOM from 'react-dom';
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import {Provider} from './react-redux'
import store from './store'
ReactDOM.render(
  <Provider store = {store}>
    <Content1 />
    <Content2 />
  </Provider>,
  document.getElementById('root')
);
