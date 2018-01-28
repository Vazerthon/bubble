import { connectWithLifecycle } from 'react-lifecycle-component';
import App from '../components/app';
import { actions as bubbleActions } from '../state/actions/bubble';
import { actions as appActions } from '../state/actions/app';

const mapStateToProps = ({
  bubble: { bubblesPerRow },
  app: { showAbout, backgroundCycleTime, bgColour, showBackgroundColour },
}) => ({
  bubblesPerRow,
  showAbout,
  backgroundCycleTime,
  showBackgroundColour,
  bgColour,
});

const mapDispatchToProps = dispatch => ({
  generateBubbles: bubblesPerRow =>
    dispatch(bubbleActions.generateBubbles(bubblesPerRow)),
  startBackgroundCycling: interval =>
    dispatch(appActions.startBackgroundCycling(interval)),
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  componentDidMount: () => {
    dispatchProps.generateBubbles(stateProps.bubblesPerRow);
    dispatchProps.startBackgroundCycling(stateProps.backgroundCycleTime);
  },
});

export default connectWithLifecycle(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(App);
