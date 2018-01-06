import { connectWithLifecycle } from 'react-lifecycle-component';
import App from '../components/app';
import { bubbleActions } from '../state/bubble';

const mapStateToProps = ({ bubble }) => ({
  bubbleSize: bubble.size,
  minBubbleSize: bubble.minSize,
  maxBubbleSize: bubble.maxSize,
  bubbles: bubble.bubbles,
});

const mapDispatchToProps = dispatch => ({
  generateBubbles: bubbleSize =>
    dispatch(bubbleActions.generateBubbles(bubbleSize)),
  popBubble: id => dispatch(bubbleActions.popBubble(id)),
  onBubbleSizeChange: size => dispatch(bubbleActions.sizeChange(size)),
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  componentDidMount: () => dispatchProps.generateBubbles(stateProps.bubbleSize),
});

export default connectWithLifecycle(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(App);
