import { connectWithLifecycle } from 'react-lifecycle-component';
import App from '../components/app';
import { bubbleActions } from '../state/bubble';

const mapStateToProps = ({ bubble }) => ({
  bubbleSize: bubble.size,
  bubbles: bubble.bubbles,
});

const mapDispatchToProps = dispatch => ({
  generateBubbles: bubbleSize =>
    dispatch(bubbleActions.generateBubbles(bubbleSize)),
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
