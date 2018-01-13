import { connectWithLifecycle } from 'react-lifecycle-component';
import Bubbles from '../components/bubbles';
import { actions } from '../state/actions/bubble';

const mapStateToProps = ({
  bubble: { bubbles, bubbleSizePx, bubblesPerRow },
}) => ({
  bubbles,
  bubbleSizePx,
  bubblesPerRow,
});

const mapDispatchToProps = dispatch => ({
  generateBubbles: bubblesPerRow =>
    dispatch(actions.generateBubbles(bubblesPerRow)),
  popBubble: id => dispatch(actions.popBubble(id)),
  onBubblesPerRowChange: count => dispatch(actions.bubblesPerRowChange(count)),
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(
  Bubbles,
);
