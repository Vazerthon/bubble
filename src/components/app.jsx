import React from 'react';
import PropTypes from 'prop-types';
import Bubbles from './bubbles';

function App({ bubbleSize, bubbles }) {
  return <Bubbles size={bubbleSize} bubbles={bubbles} />;
}

App.propTypes = {
  bubbles: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, popped: PropTypes.bool }),
  ).isRequired,
  bubbleSize: PropTypes.number.isRequired,
};

export default App;
