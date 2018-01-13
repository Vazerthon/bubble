export const constants = {
  generateBubbles: '[BUBBLES] GENERATE ARRAY OF BUBBLES',
  setBubbles: '[BUBBLES] SET BUBBLE ARRAY',
  popBubble: '[BUBBLES] POP BY BY ID',
  bubblesPerRowChange: '[BUBBLES] CHANGE NUMBER OF BUBBLES PER ROW',
};

export const actions = {
  generateBubbles: count => ({
    type: constants.generateBubbles,
    payload: { count },
  }),
  setBubbles: ({ bubbles, bubblesPerRow, bubbleSizePx }) => ({
    type: constants.setBubbles,
    payload: { bubbles, bubblesPerRow, bubbleSizePx },
  }),
  popBubble: id => ({
    type: constants.popBubble,
    payload: { id },
  }),
  bubblesPerRowChange: count => ({
    type: constants.bubblesPerRowChange,
    payload: { count },
  }),
};
