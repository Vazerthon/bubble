import uuidv1 from 'uuid';

const bubble = () => ({
  popped: false,
  id: uuidv1(),
});

const bubbles = count => Array.from(Array(count).keys()).map(() => bubble());

const defaultBubbleState = {
  size: 10,
  minSize: 5,
  maxSize: 50,
  bubbles: bubbles(100),
};

export const bubbleConstants = {};

export const bubbleActions = {};

const bubbleReducer = (state = defaultBubbleState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default bubbleReducer;
