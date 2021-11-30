import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga';

const sagaMiddleware = createSagaMiddleware(rootSaga);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ });

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;