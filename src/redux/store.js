import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from './reducers/app-reducer';

export default createStore(appReducer, applyMiddleware(thunk));