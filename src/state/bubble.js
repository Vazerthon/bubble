const defaultBubbleState = {
  size: 10,
  minSize: 5,
  maxSize: 50,
  bubbles: [],
};

export const bubbleConstants = {
  generateBubbles: '[BUBBLES] GENERATE ARRAY OF BUBBLES',
  setBubbles: '[BUBBLES] SET BUBBLE ARRAY',
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
};

const bubbleReducer = (state = defaultBubbleState, action) => {
  switch (action.type) {
    case bubbleConstants.setBubbles:
      return { ...state, bubbles: action.payload.bubbles };
    default:
      return state;
  }
};

export default bubbleReducer;
