export const constants = {
  generateBubbles: '[BUBBLES] GENERATE ARRAY OF BUBBLES',
  setBubbles: '[BUBBLES] SET BUBBLE ARRAY',
  requestPopBubble: '[BUBBLES] REQUEST TO POP A BUBBLE',
  popBubble: '[BUBBLES] POP BY BY ID',
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
  requestPopBubble: (sound, image, rotation, id) => ({
    type: constants.requestPopBubble,
    payload: { sound, image, rotation, id },
  }),
  popBubble: (image, rotation, id) => ({
    type: constants.popBubble,
    payload: { image, rotation, id },
  }),
};
