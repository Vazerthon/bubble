import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UnPoppedBubble = styled.div`
  width: ${({ size }) => `${size}vw`};
  height: ${({ sizePx }) => `${sizePx}px`};
  background: gray;

  :hover {
    background: hotpink;
  }
`;

function Bubble({ size, sizePx }) {
  return <UnPoppedBubble size={size} sizePx={sizePx} />;
}

Bubble.propTypes = {
  size: PropTypes.number.isRequired,
  sizePx: PropTypes.number.isRequired,
};

export default Bubble;
