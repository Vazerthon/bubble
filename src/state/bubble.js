const defaultBubbleState = {
  size: 10,
  minSize: 5,
  maxSize: 50,
  bubbles: [],
};

export const bubbleConstants = {
  generateBubbles: '[BUBBLES] GENERATE ARRAY OF BUBBLES',
  setBubbles: '[BUBBLES] SET BUBBLE ARRAY',
  popBubble: '[BUBBLES] POP BY BY ID',
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

const bubbleReducer = (state = defaultBubbleState, action) => {
  switch (action.type) {
    case bubbleConstants.setBubbles:
      return { ...state, bubbles: action.payload.bubbles };
    case bubbleConstants.popBubble:
      return {
        ...state,
        bubbles: bubblePopper(action.payload.id, state.bubbles),
      };
    default:
      return state;
  }
};

export default bubbleReducer;
