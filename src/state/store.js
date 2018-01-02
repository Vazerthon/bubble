import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import appReducer from './app';
import bubbleReducer from './bubble';

const reducer = combineReducers({
  app: appReducer,
  bubble: bubbleReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

export default store;

[].forEach(saga => sagaMiddleware.run(saga));
