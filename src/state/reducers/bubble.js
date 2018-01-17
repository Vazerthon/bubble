import { constants } from '../actions/bubble';

const defaultBubbleState = {
  bubblesPerRow: 12,
  minBubblesPerRow: 4,
  maxBubblesPerRow: 20,
  bubbleSizePx: 0,
  bubbles: [],
};

const findBubbleIndex = (id, bubbles) => bubbles.findIndex(b => b.id === id);
const popBubble = (bubble, image, rotation) => ({
  ...bubble,
  popped: true,
  image,
  rotation,
});
const replaceBubble = (bubbles, index, bubble) => [
  ...bubbles.slice(0, index),
  bubble,
  ...bubbles.slice(index + 1),
];

const bubblePopper = ({ image, rotation, id }, bubbles) => {
  const index = findBubbleIndex(id, bubbles);
  return replaceBubble(
    bubbles,
    index,
    popBubble(bubbles[index], image, rotation),
  );
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
        bubbles: bubblePopper(payload, state.bubbles),
      };
    default:
      return state;
  }
};

export default bubbleReducer;
