import { takeEvery, takeLatest, put, select, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { constants, actions as appActions } from '../actions/app';
import { actions as bubbleActions } from '../actions/bubble';

function* windowResize() {
  const bubblesPerRow = yield select(({ bubble }) => bubble.bubblesPerRow);
  yield put(bubbleActions.generateBubbles(bubblesPerRow));
}

function* cycleBackgroundColours({ payload }) {
  yield call(delay, payload);
  yield put(appActions.showNextBackgroundColour());
  yield put(appActions.startBackgroundCycling(payload));
}

function* onWindowResize() {
  yield takeEvery(constants.windowResize, windowResize);
}

function* onStartBackgroundCycling() {
  yield takeLatest(constants.startBackgroundCycling, cycleBackgroundColours);
}

const appEffects = [onWindowResize, onStartBackgroundCycling];

export default appEffects;
