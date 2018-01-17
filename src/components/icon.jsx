import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  border: 2px solid #222222;
  border-radius: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 1px 6px #222222;
  background: #444444;
  outline: none;

  :hover {
    background: ${({ disabled }) => (disabled ? '#662222' : '#666666')};
  }
`;

function Icon({ children, size, onClick, disabled }) {
  return (
    <Container disabled={disabled} size={size} onClick={() => onClick()}>
      {children}
    </Container>
  );
}

export default Icon;

Icon.propTypes = {
  children: PropTypes.node,
  size: PropTypes.number,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  children: null,
  size: 40,
  onClick: () => {},
  disabled: false,
};
