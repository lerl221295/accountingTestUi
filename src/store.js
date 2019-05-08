import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory }  from 'history';
import createSagaMiddleware from 'redux-saga';


import createGlobalReducer from './global-reducer';
import globalSagas from './global-sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  // Middleware for intercepting and dispatching navigation actions
  routerMiddleware(history),
  sagaMiddleware
];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  createGlobalReducer(history),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(globalSagas);

export default store;
