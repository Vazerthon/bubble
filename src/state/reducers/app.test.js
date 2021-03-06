/* eslint-env jest */

import reducer from './app';
import { actions } from '../actions/app';

describe('app reducer', () => {
  it('opens menu when closed', () => {
    const initialState = {
      menuOpen: false,
    };

    const result = reducer(initialState, actions.toggleMenu());

    expect(result.menuOpen).toBe(true);
  });

  it('closes menu when open', () => {
    const initialState = {
      menuOpen: true,
    };

    const result = reducer(initialState, actions.toggleMenu());

    expect(result.menuOpen).toBe(false);
  });

  it('enables sound when disabled', () => {
    const initialState = {
      sound: false,
    };

    const result = reducer(initialState, actions.toggleSound());

    expect(result.sound).toBe(true);
  });

  it('disables sound when enabled', () => {
    const initialState = {
      sound: true,
    };

    const result = reducer(initialState, actions.toggleSound());

    expect(result.sound).toBe(false);
  });

  it('enables about view when disabled', () => {
    const initialState = {
      showAbout: false,
    };

    const result = reducer(initialState, actions.toggleAbout());

    expect(result.showAbout).toBe(true);
  });

  it('disables about view when enabled', () => {
    const initialState = {
      showAbout: true,
    };

    const result = reducer(initialState, actions.toggleAbout());

    expect(result.showAbout).toBe(false);
  });

  it('enables vibration when disabled', () => {
    const initialState = {
      vibration: false,
    };

    const result = reducer(initialState, actions.toggleVibration());

    expect(result.vibration).toBe(true);
  });

  it('disables vibration when enabled', () => {
    const initialState = {
      vibration: true,
    };

    const result = reducer(initialState, actions.toggleVibration());

    expect(result.vibration).toBe(false);
  });

  it('enables show background colour when disabled', () => {
    const initialState = {
      showBackgroundColour: false,
    };

    const result = reducer(initialState, actions.toggleShowBackgroundColour());

    expect(result.showBackgroundColour).toBe(true);
  });

  it('disables show background colour when enabled', () => {
    const initialState = {
      showBackgroundColour: false,
    };

    const result = reducer(initialState, actions.toggleShowBackgroundColour());

    expect(result.showBackgroundColour).toBe(true);
  });

  it('moves to next background colour correctly', () => {
    const initialState = {
      bgColours: ['a', 'b', 'c'],
      bgColourIndex: 1,
      bgColour: 'b',
    };

    const result = reducer(initialState, actions.showNextBackgroundColour());

    expect(result.bgColourIndex).toBe(2);
    expect(result.bgColour).toBe('c');
  });

  it('moves to first background colour if at the end of the list', () => {
    const initialState = {
      bgColours: ['a', 'b', 'c'],
      bgColourIndex: 2,
      bgColour: 'c',
    };

    const result = reducer(initialState, actions.showNextBackgroundColour());

    expect(result.bgColourIndex).toBe(0);
    expect(result.bgColour).toBe('a');
  });
});
