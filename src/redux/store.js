import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger/src';
import {fileDataReducer} from './duck';

const middlewareEnhancer = applyMiddleware(logger);

const store = createStore(fileDataReducer, undefined, middlewareEnhancer);

export default store;
