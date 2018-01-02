import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import appReducer from './app';
import bubbleReducer from './bubble';
import bubbleSagas from './bubble.effects';

const reducer = combineReducers({
  app: appReducer,
  bubble: bubbleReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

[...bubbleSagas].forEach(saga => sagaMiddleware.run(saga));

export default store;
