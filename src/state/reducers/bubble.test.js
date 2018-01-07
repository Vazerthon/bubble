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

    const result = reducer(initialState, actions.popBubble('b'));

    expect(result.bubbles).toEqual([
      { id: 'a', popped: false },
      { id: 'b', popped: true },
      { id: 'c', popped: false },
    ]);
  });

  it('sets bubble size', () => {
    const initialState = { size: 10 };

    const result = reducer(initialState, actions.setSize(20));

    expect(result.size).toBe(20);
  });
});
