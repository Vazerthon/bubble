import { connectWithLifecycle } from 'react-lifecycle-component';
import App from '../components/app';
import { actions } from '../state/actions/bubble';

const mapStateToProps = ({ bubble: { bubblesPerRow } }) => ({
  bubblesPerRow,
});

const mapDispatchToProps = dispatch => ({
  generateBubbles: bubblesPerRow =>
    dispatch(actions.generateBubbles(bubblesPerRow)),
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  componentDidMount: () =>
    dispatchProps.generateBubbles(stateProps.bubblesPerRow),
});

export default connectWithLifecycle(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(App);
