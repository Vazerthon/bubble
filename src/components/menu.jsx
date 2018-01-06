import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  position: fixed;
`;

function Menu({
  minBubbleSize,
  maxBubbleSize,
  bubbleSize,
  onBubbleSizeChange,
}) {
  return (
    <Container>
      <input
        type="range"
        value={bubbleSize}
        min={minBubbleSize}
        max={maxBubbleSize}
        step={minBubbleSize}
        onChange={e => onBubbleSizeChange(parseInt(e.target.value, 0))}
      />
    </Container>
  );
}

Menu.propTypes = {
  minBubbleSize: PropTypes.number.isRequired,
  maxBubbleSize: PropTypes.number.isRequired,
  bubbleSize: PropTypes.number.isRequired,
  onBubbleSizeChange: PropTypes.func.isRequired,
};

export default Menu;
