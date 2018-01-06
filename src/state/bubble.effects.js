import { takeEvery, put } from 'redux-saga/effects';
import uuidv1 from 'uuid';

import { bubbleConstants, bubbleActions } from './bubble';

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

  yield put(bubbleActions.setBubbles(bubbles(bubbleCount, bubbleSizePx)));
}

function* setSizeAndGenerateBubbles(action) {
  yield put(bubbleActions.setSize(action.payload.size));
  yield generateBubbles(action);
}

function* generateBubblesSaga() {
  yield takeEvery(bubbleConstants.generateBubbles, generateBubbles);
}

function* resizeBubblesSaga() {
  yield takeEvery(bubbleConstants.sizeChange, setSizeAndGenerateBubbles);
}

const bubbleEffects = [generateBubblesSaga, resizeBubblesSaga];

export default bubbleEffects;
