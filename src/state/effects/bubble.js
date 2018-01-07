import { takeEvery, put } from 'redux-saga/effects';
import uuidv1 from 'uuid';

import { actions, constants } from '../actions/bubble';

const bubble = sizePx => ({
  popped: false,
  id: uuidv1(),
  sizePx,
});

const bubbles = (count, sizePx) =>
  Array.from(Array(count).keys()).map(() => bubble(sizePx));

function* generateBubbles({ payload: { size } }) {
  const bubbleSizePc = yield size;
  const { innerHeight, innerWidth } = yield window;
  const bubblesPerRow = yield 100 / bubbleSizePc;
  const bubbleSizePx = yield innerWidth / bubblesPerRow;
  const rowsToFillScreen = yield Math.ceil(innerHeight / bubbleSizePx);
  const bubbleCount = yield Math.ceil(rowsToFillScreen * bubblesPerRow);

  yield put(actions.setBubbles(bubbles(bubbleCount, bubbleSizePx)));
}

function* setSizeAndGenerateBubbles(action) {
  yield put(actions.setSize(action.payload.size));
  yield generateBubbles(action);
}

function* generateBubblesSaga() {
  yield takeEvery(constants.generateBubbles, generateBubbles);
}

function* resizeBubblesSaga() {
  yield takeEvery(constants.sizeChange, setSizeAndGenerateBubbles);
}

const bubbleEffects = [generateBubblesSaga, resizeBubblesSaga];

export default bubbleEffects;
