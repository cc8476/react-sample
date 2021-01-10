import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducers from './reducers/rootReducer'
import App from './app'

const store = createStore(rootReducers)

render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("root")
)