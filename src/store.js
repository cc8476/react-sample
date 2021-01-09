import {createStore} from 'redux';
import initial from './initialState'
import reducer from './reducer'


if(!window.store) {
    window.store = createStore(reducer,initial);
}

export default window.store;