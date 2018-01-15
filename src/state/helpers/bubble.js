import uuidv1 from 'uuid';

import unpoppedOne from '../../images/unpopped-1.png';
import unpoppedTwo from '../../images/unpopped-2.png';
import poppedOne from '../../images/popped-1.png';
import poppedTwo from '../../images/popped-2.png';

export const unPoppedImages = [unpoppedOne, unpoppedTwo];
export const poppedImages = [poppedOne, poppedTwo];
export const rotations = [0, 90, 270];

export const randomFrom = array =>
  array[Math.floor(Math.random() * array.length)];

export const randomUnpoppedImage = () => randomFrom(unPoppedImages);
export const randomPoppedImage = () => randomFrom(poppedImages);
export const randomRotation = () => randomFrom(rotations);

export const bubble = () => ({
  popped: false,
  id: uuidv1(),
  rotation: randomRotation(),
  image: randomUnpoppedImage(),
});

export const bubbles = count =>
  Array.from(Array(count).keys()).map(() => bubble());
