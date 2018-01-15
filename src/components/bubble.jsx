import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBubble = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ image }) => `url(${image})`} no-repeat;
  background-size: ${({ size }) => `${size}px ${size}px`};
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
`;

function Bubble({ size, popped, id, rotation, image, onPop }) {
  return (
    <StyledBubble
      size={size}
      image={image}
      rotation={rotation}
      onClick={() => !popped && onPop(id)}
    />
  );
}

Bubble.propTypes = {
  size: PropTypes.number.isRequired,
  popped: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  rotation: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onPop: PropTypes.func.isRequired,
};

export default Bubble;
