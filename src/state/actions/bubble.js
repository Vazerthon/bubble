export const constants = {
  generateBubbles: '[BUBBLES] GENERATE ARRAY OF BUBBLES',
  setBubbles: '[BUBBLES] SET BUBBLE ARRAY',
  popBubble: '[BUBBLES] POP BY BY ID',
  sizeChange: '[BUBBLES] BUBBLE SIZE CHANGE',
  setSize: '[BUBBLES] SET NEW BUBBLE SIZE',
};

export const actions = {
  generateBubbles: size => ({
    type: constants.generateBubbles,
    payload: { size },
  }),
  setBubbles: bubbles => ({
    type: constants.setBubbles,
    payload: { bubbles },
  }),
  popBubble: id => ({
    type: constants.popBubble,
    payload: { id },
  }),
  sizeChange: size => ({
    type: constants.sizeChange,
    payload: { size },
  }),
  setSize: size => ({
    type: constants.setSize,
    payload: { size },
  }),
};
