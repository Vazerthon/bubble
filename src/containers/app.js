import { connectWithLifecycle } from 'react-lifecycle-component';
import App from '../components/app';
import { bubbleActions } from '../state/bubble';

const mapStateToProps = ({ bubble }) => ({
  bubbleSize: bubble.size,
  bubbles: bubble.bubbles,
});

const mapDispatchToProps = dispatch => ({
  // TODO use default size from state
  componentDidMount: () => dispatch(bubbleActions.generateBubbles(10)),
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(App);
