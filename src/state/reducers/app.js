import { constants } from '../actions/app';

const bgColours = [
  '#f3701f',
  '#007237',
  '#a4238f',
  '#054089',
  '#db495d',
  '#4f1920',
];

const defaultAppState = {
  menuOpen: true,
  sound: false,
  showAbout: false,
  vibration: false,
  showBackgroundColour: false,
  bgColours,
  bgColourIndex: 0,
  bgColour: bgColours[0],
  backgroundCycleTime: 20000,
};

const nextOrFirst = array => index =>
  index + 1 >= array.length ? 0 : index + 1;

const updateBackgroundColour = state => {
  const nextOrFirstBgColour = nextOrFirst(state.bgColours);
  return {
    ...state,
    bgColourIndex: nextOrFirstBgColour(state.bgColourIndex),
    bgColour: state.bgColours[nextOrFirstBgColour(state.bgColourIndex)],
  };
};

const appReducer = (state = defaultAppState, action) => {
  switch (action.type) {
    case constants.toggleMenu:
      return { ...state, menuOpen: !state.menuOpen };
    case constants.toggleSound:
      return { ...state, sound: !state.sound };
    case constants.toggleAbout:
      return { ...state, showAbout: !state.showAbout };
    case constants.toggleVibration:
      return { ...state, vibration: !state.vibration };
    case constants.toggleShowBackgroundColour:
      return { ...state, showBackgroundColour: !state.showBackgroundColour };
    case constants.showNextBackgroundColour:
      return updateBackgroundColour(state);
    default:
      return state;
  }
};

export default appReducer;
