import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Bubbles from './bubbles';
import Menu from './menu';

const Container = styled.div``;

function App({
  bubbleSize,
  bubbles,
  popBubble,
  minBubbleSize,
  maxBubbleSize,
  onBubbleSizeChange,
}) {
  return (
    <Container>
      <Menu
        bubbleSize={bubbleSize}
        minBubbleSize={minBubbleSize}
        maxBubbleSize={maxBubbleSize}
        onBubbleSizeChange={onBubbleSizeChange}
      />
      <Bubbles size={bubbleSize} bubbles={bubbles} popBubble={popBubble} />;
    </Container>
  );
}

App.propTypes = {
  bubbles: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, popped: PropTypes.bool }),
  ).isRequired,
  bubbleSize: PropTypes.number.isRequired,
  popBubble: PropTypes.func.isRequired,
  minBubbleSize: PropTypes.number.isRequired,
  maxBubbleSize: PropTypes.number.isRequired,
  onBubbleSizeChange: PropTypes.func.isRequired,
};

export default App;
