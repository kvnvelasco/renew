import reducer from './reducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import promise from 'redux-promise'
import toastReducer from './toasterReducer'
import { ERROR_TOAST } from '../actions/toast';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers ({
    reducer,
    toastReducer
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(promise, thunk)),
    )

export default store;
