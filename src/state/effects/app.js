import { takeEvery, put, select } from 'redux-saga/effects';

import { constants } from '../actions/app';
import { actions as bubbleActions } from '../actions/bubble';

function* windowResize() {
  const bubblesPerRow = yield select(({ bubble }) => bubble.bubblesPerRow);
  yield put(bubbleActions.generateBubbles(bubblesPerRow));
}

function* onWindowResize() {
  yield takeEvery(constants.windowResize, windowResize);
}

const appEffects = [onWindowResize];

export default appEffects;
