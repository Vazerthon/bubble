const defaultBubbleState = {
  size: 10,
  minSize: 10,
  maxSize: 50,
  bubbles: [],
};

export const bubbleConstants = {
  generateBubbles: '[BUBBLES] GENERATE ARRAY OF BUBBLES',
  setBubbles: '[BUBBLES] SET BUBBLE ARRAY',
  popBubble: '[BUBBLES] POP BY BY ID',
  sizeChange: '[BUBBLES] BUBBLE SIZE CHANGE',
  setSize: '[BUBBLES] SET NEW BUBBLE SIZE',
};

export const bubbleActions = {
  generateBubbles: size => ({
    type: bubbleConstants.generateBubbles,
    payload: { size },
  }),
  setBubbles: bubbles => ({
    type: bubbleConstants.setBubbles,
    payload: { bubbles },
  }),
  popBubble: id => ({
    type: bubbleConstants.popBubble,
    payload: { id },
  }),
  sizeChange: size => ({
    type: bubbleConstants.sizeChange,
    payload: { size },
  }),
  setSize: size => ({
    type: bubbleConstants.setSize,
    payload: { size },
  }),
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
    case bubbleConstants.setBubbles:
      return { ...state, bubbles: payload.bubbles };
    case bubbleConstants.popBubble:
      return {
        ...state,
        bubbles: bubblePopper(payload.id, state.bubbles),
      };
    case bubbleConstants.setSize:
      return {
        ...state,
        size: payload.size,
      };
    default:
      return state;
  }
};

export default bubbleReducer;
