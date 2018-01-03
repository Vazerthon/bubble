import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BaseBubble = styled.div`
  width: ${({ size }) => `${size}vw`};
  height: ${({ sizePx }) => `${sizePx}px`};
`;

const UnPoppedBubble = styled(BaseBubble)`
  background: gray;
`;

const PoppedBubble = styled(BaseBubble)`
  background: hotpink;
`;

function Bubble({ size, sizePx, popped }) {
  return popped ? (
    <PoppedBubble size={size} sizePx={sizePx} />
  ) : (
    <UnPoppedBubble size={size} sizePx={sizePx} />
  );
}

Bubble.propTypes = {
  size: PropTypes.number.isRequired,
  sizePx: PropTypes.number.isRequired,
  popped: PropTypes.bool.isRequired,
};

export default Bubble;
