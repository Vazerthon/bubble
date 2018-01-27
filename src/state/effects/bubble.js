import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
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

function* popBubble({ payload }) {
  const { sound, image, rotation, id } = payload;

  yield call(sound);
  yield put(actions.popBubble(image, rotation, id));
}

function* generateBubblesSaga() {
  yield takeEvery(constants.generateBubbles, generateBubbles);
}

function* requestPopBubbleSaga() {
  yield takeLatest(constants.requestPopBubble, popBubble);
}

const bubbleEffects = [generateBubblesSaga, requestPopBubbleSaga];

export default bubbleEffects;
