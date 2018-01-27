import { connectWithLifecycle } from 'react-lifecycle-component';
import { createPopSoundElement } from '../util/audio';
import Bubbles from '../components/bubbles';
import { actions } from '../state/actions/bubble';
import { randomPoppedImage, randomRotation } from '../state/helpers/bubble';

const popSoundElement = createPopSoundElement();

const noOp = () => {};
const vibrate = () => window.navigator.vibrate(50);

const mapStateToProps = ({
  bubble: { bubbles, bubbleSizePx, bubblesPerRow },
  app: { sound, vibration },
}) => ({
  bubbles,
  bubbleSizePx,
  bubblesPerRow,
  sound,
  vibration,
});

const mapDispatchToProps = dispatch => ({
  generateBubbles: bubblesPerRow =>
    dispatch(actions.generateBubbles(bubblesPerRow)),
  popBubble: (soundOn, vibrationOn) => id =>
    dispatch(
      actions.requestPopBubble(
        soundOn ? popSoundElement.play : noOp,
        vibrationOn ? vibrate : noOp,
        randomPoppedImage(),
        randomRotation(),
        id,
      ),
    ),
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(
  Bubbles,
);
