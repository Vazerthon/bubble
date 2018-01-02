import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UnPoppedBubble = styled.div`
  width: ${({ size }) => `${size}vw`};
  height: 50px;
  background: gray;

  :hover {
    background: hotpink;
  }
`;

function Bubble({ size }) {
  return <UnPoppedBubble size={size} />;
}

Bubble.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Bubble;
