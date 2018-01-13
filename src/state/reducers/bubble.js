import { constants } from '../actions/bubble';

const defaultBubbleState = {
  bubblesPerRow: 12,
  minBubblesPerRow: 4,
  maxBubblesPerRow: 40,
  bubbleSizePx: 0,
  bubbles: [],
};

const findBubbleIndex = (id, bubbles) => bubbles.findIndex(b => b.id === id);
const popBubble = bubble => ({ ...bubble, popped: true });
const replaceBubble = (bubbles, index, bubble) => [
  ...bubbles.slice(0, index),
  bubble,
  ...bubbles.slice(index + 1),
];

const bubblePopper = (id, bubbles) => {
  const index = findBubbleIndex(id, bubbles);
  return replaceBubble(bubbles, index, popBubble(bubbles[index]));
};

const bubbleReducer = (state = defaultBubbleState, { type, payload }) => {
  switch (type) {
    case constants.setBubbles:
      return {
        ...state,
        bubbles: payload.bubbles,
        bubblesPerRow: payload.bubblesPerRow,
        bubbleSizePx: payload.bubbleSizePx,
      };
    case constants.popBubble:
      return {
        ...state,
        bubbles: bubblePopper(payload.id, state.bubbles),
      };
    default:
      return state;
  }
};

export default bubbleReducer;
