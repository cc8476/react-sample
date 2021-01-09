import React from 'react';

import {createStore} from 'redux'
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux'
import reducer from './reducer'

let initState = 10000;
let store = createStore(reducer,initState)


ReactDOM.render(
  
  <App></App>,document.getElementById('root')
)

