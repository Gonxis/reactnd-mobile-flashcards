import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import decksReducer from '../reducers';

const middlewares = __DEV__ ?
  applyMiddleware(logger, thunk) :
  applyMiddleware(thunk);

const Store = createStore(decksReducer, middlewares);

export default Store;
