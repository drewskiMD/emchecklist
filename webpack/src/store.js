import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import {reducers} from "./reducers/index";
import sagas from "./sagas/index";
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

// add the middlewares
let middlewares = [];

// let browserHistory = createBrowserHistory()
//
// // add the router middleware
// middlewares.push(routerMiddleware(browserHistory));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// add the freeze dev middleware
if (process.env.NODE_ENV !== "production") {
  middlewares.push(freeze);
}

// create history
const history = createBrowserHistory();

middlewares.push(compose(routerMiddleware(history)))

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (window.__REDUX_DEVTOOLS_EXTENSION__) {

  if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "ci") {
    console.log("node env:", process.env.NODE_ENV);
    middleware = compose(middleware, composeWithDevTools());
  } else {
    middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
  }
}

// create the store
const store = createStore(reducers(history),  middleware);



sagaMiddleware.run(sagas);

// export
export {store, history};
