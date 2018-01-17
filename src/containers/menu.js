import { connectWithLifecycle } from 'react-lifecycle-component';
import Menu from '../components/menu';
import { actions as bubbleActions } from '../state/actions/bubble';
import { actions as appActions } from '../state/actions/app';

const mapStateToProps = ({
  bubble: { bubblesPerRow, minBubblesPerRow, maxBubblesPerRow },
  app: { menuOpen, sound },
}) => ({
  bubblesPerRow,
  minBubblesPerRow,
  maxBubblesPerRow,
  open: menuOpen,
  sound,
});

const mapDispatchToProps = dispatch => ({
  onBubblesPerRowChange: count =>
    dispatch(bubbleActions.bubblesPerRowChange(count)),
  toggleOpenClose: () => dispatch(appActions.toggleMenu()),
  toggleSound: () => dispatch(appActions.toggleSound()),
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Menu);
