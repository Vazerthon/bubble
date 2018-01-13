import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { actions } from './actions/app';
import appReducer from './reducers/app';
import bubbleReducer from './reducers/bubble';
import bubbleSagas from './effects/bubble';
import appSagas from './effects/app';

const reducer = combineReducers({
  app: appReducer,
  bubble: bubbleReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

[...bubbleSagas, ...appSagas].forEach(saga => sagaMiddleware.run(saga));

// handle window resize and dispatch event to stop mishapen bubbles
window.onresize = () => store.dispatch(actions.windowResize());

export default store;
