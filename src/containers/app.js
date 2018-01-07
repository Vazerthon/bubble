import { connectWithLifecycle } from 'react-lifecycle-component';
import App from '../components/app';
import { actions } from '../state/actions/bubble';

const mapStateToProps = ({ bubble }) => ({
  bubbleSize: bubble.size,
  minBubbleSize: bubble.minSize,
  maxBubbleSize: bubble.maxSize,
  bubbles: bubble.bubbles,
});

const mapDispatchToProps = dispatch => ({
  generateBubbles: bubbleSize => dispatch(actions.generateBubbles(bubbleSize)),
  popBubble: id => dispatch(actions.popBubble(id)),
  onBubbleSizeChange: size => dispatch(actions.sizeChange(size)),
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
