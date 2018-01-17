import { constants } from '../actions/app';

const defaultAppState = {
  menuOpen: true,
  sound: false,
};

const appReducer = (state = defaultAppState, action) => {
  switch (action.type) {
    case constants.toggleMenu:
      return { ...state, menuOpen: !state.menuOpen };
    case constants.toggleSound:
      return { ...state, sound: !state.sound };
    default:
      return state;
  }
};

export default appReducer;
