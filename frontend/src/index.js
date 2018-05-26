import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Link } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import thunk from 'redux-thunk'

<<<<<<< HEAD
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
=======
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk),)
    )

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
>>>>>>> a6c87d9e6cc77bbb89fdc6841cb956449d0ed67e
registerServiceWorker();
