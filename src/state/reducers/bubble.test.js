/* eslint-env jest */

import reducer from './bubble';
import { actions } from '../actions/bubble';

describe('bubble reducer', () => {
  it('pops bubbles', () => {
    const initialState = {
      bubbles: [
        { id: 'a', popped: false },
        { id: 'b', popped: false },
        { id: 'c', popped: false },
      ],
    };

    const result = reducer(
      initialState,
      actions.popBubble('image data', 45, 'b'),
    ).bubbles[1];

    expect(result.popped).toBe(true);
    expect(result.image).toEqual('image data');
    expect(result.rotation).toEqual(45);
  });

  it('sets bubble data correctly', () => {
    const initialState = {};

    const bubbles = [{ id: 'a', popped: false }, { id: 'b', popped: false }];

    const bubblesPerRow = 1;
    const bubbleSizePx = 2;

    const result = reducer(
      initialState,
      actions.setBubbles({ bubbles, bubbleSizePx, bubblesPerRow }),
    );

    expect(result.bubbles).toEqual(bubbles);
    expect(result.bubbleSizePx).toEqual(bubbleSizePx);
    expect(result.bubblesPerRow).toEqual(bubblesPerRow);
  });
});
