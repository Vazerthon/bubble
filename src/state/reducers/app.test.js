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
});
