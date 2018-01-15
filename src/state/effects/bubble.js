import { takeEvery, put } from 'redux-saga/effects';

import { actions, constants } from '../actions/bubble';

import { bubbles } from '../helpers/bubble';

function* generateBubbles({ payload: { count } }) {
  const bubblesPerRow = yield count;
  const { innerHeight, innerWidth } = yield window;
  const bubbleSizePx = yield innerWidth / bubblesPerRow;
  const rowsToFillScreen = yield Math.floor(innerHeight / bubbleSizePx);
  const bubbleCount = yield Math.ceil(rowsToFillScreen * bubblesPerRow);

  yield put(
    actions.setBubbles({
      bubbles: bubbles(bubbleCount),
      bubblesPerRow,
      bubbleSizePx,
    }),
  );
}

function* generateBubblesSaga() {
  yield takeEvery(constants.generateBubbles, generateBubbles);
}

function* changeBubblesPerRowSaga() {
  yield takeEvery(constants.bubblesPerRowChange, generateBubbles);
}

const bubbleEffects = [generateBubblesSaga, changeBubblesPerRowSaga];

export default bubbleEffects;
