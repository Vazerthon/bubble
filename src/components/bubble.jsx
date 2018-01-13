import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BaseBubble = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;

const UnPoppedBubble = styled(BaseBubble)`
  background: gray;
`;

const PoppedBubble = styled(BaseBubble)`
  background: hotpink;
`;

function Bubble({ size, popped, id, onPop }) {
  return popped ? (
    <PoppedBubble size={size} />
  ) : (
    <UnPoppedBubble size={size} onClick={() => onPop(id)} />
  );
}

Bubble.propTypes = {
  size: PropTypes.number.isRequired,
  popped: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onPop: PropTypes.func.isRequired,
};

export default Bubble;
