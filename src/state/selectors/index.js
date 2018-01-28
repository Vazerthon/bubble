import app from './app';

const selectors = state => ({
  ...app(state),
});

export default selectors;
