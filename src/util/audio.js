import * as R from 'ramda';

const createElement = source => new Audio(source);
const appendToDocument = element => document.body.appendChild(element);
const bindSelf = element => ({
  play: element.play.bind(element),
  currentTime: element.currentTime,
});

const createAudioElement = source =>
  R.pipe(createElement, appendToDocument, bindSelf)(source);

export const createPopSoundElement = () => createAudioElement('pop.ogg');

export default createAudioElement;
