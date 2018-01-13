import { connectWithLifecycle } from 'react-lifecycle-component';
import Menu from '../components/menu';
import { actions } from '../state/actions/bubble';

const mapStateToProps = ({
  bubble: { bubblesPerRow, minBubblesPerRow, maxBubblesPerRow },
}) => ({
  bubblesPerRow,
  minBubblesPerRow,
  maxBubblesPerRow,
});

const mapDispatchToProps = dispatch => ({
  generateBubbles: bubblesPerRow =>
    dispatch(actions.generateBubbles(bubblesPerRow)),
  popBubble: id => dispatch(actions.popBubble(id)),
  onBubblesPerRowChange: count => dispatch(actions.bubblesPerRowChange(count)),
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Menu);
