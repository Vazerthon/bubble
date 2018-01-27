import { constants } from '../actions/app';

const defaultAppState = {
  menuOpen: true,
  sound: false,
  showAbout: false,
  vibration: false,
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
    default:
      return state;
  }
};

export default appReducer;
