import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Bubbles from './bubbles';

const Container = styled.div``;

function App({ bubbleSize, bubbles }) {
  return (
    <Container>
      <Bubbles size={bubbleSize} bubbles={bubbles} />;
    </Container>
  );
}

App.propTypes = {
  bubbles: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, popped: PropTypes.bool }),
  ).isRequired,
  bubbleSize: PropTypes.number.isRequired,
};

export default App;
