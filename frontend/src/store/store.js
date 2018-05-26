import reducer from './reducer'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import promise from 'redux-promise'
import toastReducer from './toasterReducer'
import cartReducer from './cart';
import procurables from './procurables';

import { ERROR_TOAST } from '../actions/toast';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers ({
    reducer,
    toastReducer,
    procurables,
    cart: cartReducer,
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(promise, thunk)),
    )

export default store;
