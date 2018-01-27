import { connectWithLifecycle } from 'react-lifecycle-component';
import { createPopSoundElement } from '../util/audio';
import Bubbles from '../components/bubbles';
import { actions } from '../state/actions/bubble';
import { randomPoppedImage, randomRotation } from '../state/helpers/bubble';

const popSoundElement = createPopSoundElement();

const mapStateToProps = ({
  bubble: { bubbles, bubbleSizePx, bubblesPerRow },
  app: { sound },
}) => ({
  bubbles,
  bubbleSizePx,
  bubblesPerRow,
  sound,
});

const mapDispatchToProps = dispatch => ({
  generateBubbles: bubblesPerRow =>
    dispatch(actions.generateBubbles(bubblesPerRow)),
  popBubble: soundOn => id =>
    dispatch(
      actions.requestPopBubble(
        soundOn ? popSoundElement.play : () => {},
        randomPoppedImage(),
        randomRotation(),
        id,
      ),
    ),
});

export default connectWithLifecycle(mapStateToProps, mapDispatchToProps)(
  Bubbles,
);
