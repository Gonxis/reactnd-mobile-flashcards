import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { decksReducer } from '../reducers/decksReducer';
import { quizReducer } from '../reducers/quizReducer';

const reducers = combineReducers({ decksReducer, quizReducer });

const middlewares = __DEV__ ?
  applyMiddleware(logger, thunk) :
  applyMiddleware(thunk);

const Store = createStore(reducers, middlewares);

export default Store;
