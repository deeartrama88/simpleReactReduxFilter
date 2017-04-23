import 'babel-polyfill'
import React from 'react'
import ReactDOM from "react-dom"
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { applyMiddleware, createStore } from 'redux'
import allReducers from './reducers'
import App from './components/app'

const loggerMiddleware = createLogger({
    predicate: (getState, action) => action.type !== "@@redux-form/REGISTER_FIELD"
});

const store = createStore(
    allReducers,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )

);

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
    , document.getElementById('root'));
