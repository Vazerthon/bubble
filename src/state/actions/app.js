export const constants = {
  windowResize: '[APP] ON WINDOW RESIZE EVENT',
  toggleMenu: '[APP] TOGGLE MENU OPEN OR CLOSED',
  toggleSound: '[APP] TOGGLE SOUND ON OR OFF',
  toggleAbout: '[APP] TOGGLE ABOUT VIEW ON OR OFF',
  toggleVibration: '[APP] TOGGLE VIBRATION ON OR OFF',
};

export const actions = {
  windowResize: () => ({
    type: constants.windowResize,
  }),
  toggleMenu: () => ({
    type: constants.toggleMenu,
  }),
  toggleSound: () => ({
    type: constants.toggleSound,
  }),
  toggleAbout: () => ({
    type: constants.toggleAbout,
  }),
  toggleVibration: () => ({
    type: constants.toggleVibration,
  }),
};
