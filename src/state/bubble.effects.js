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

function* generateBubbles({ payload }) {
  const bubbleSizePc = yield payload.size;
  const { innerHeight, innerWidth } = yield window;
  const bubbleSizePx = yield innerWidth / bubbleSizePc;
  const rowsToFillScreen = yield Math.ceil(innerHeight / bubbleSizePx);
  const bubblesPerRow = yield 100 / bubbleSizePc;
  const bubbleCount = yield rowsToFillScreen * bubblesPerRow;

  yield put(bubbleActions.setBubbles(bubbles(bubbleCount, bubbleSizePx)));
}

function* generateBubblesSaga() {
  yield takeEvery(bubbleConstants.generateBubbles, generateBubbles);
}

const bubbleEffects = [generateBubblesSaga];

export default bubbleEffects;
