import { connectWithLifecycle } from 'react-lifecycle-component';
import Menu from '../components/menu';
import { actions as bubbleActions } from '../state/actions/bubble';
import { actions as appActions } from '../state/actions/app';

const mapStateToProps = ({
  bubble: { bubblesPerRow, minBubblesPerRow, maxBubblesPerRow },
  app: { menuOpen, sound, showAbout, vibration, showBackgroundColour },
}) => ({
  bubblesPerRow,
  minBubblesPerRow,
  maxBubblesPerRow,
  open: menuOpen,
  sound,
  showAbout,
  vibration,
  showBackgroundColour,
});

const mapDispatchToProps = dispatch => ({
  onBubblesPerRowChange: count =>
    dispatch(bubbleActions.generateBubbles(count)),
  toggleOpenClose: () => dispatch(appActions.toggleMenu()),
  toggleSound: () => dispatch(appActions.toggleSound()),
  toggleAbout: () => dispatch(appActions.toggleAbout()),
  toggleVibration: () => dispatch(appActions.toggleVibration()),
  toggleShowBackgroundColour: () =>
    dispatch(appActions.toggleShowBackgroundColour()),
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(Menu);
