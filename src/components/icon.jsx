import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  border: 2px solid ${({ theme }) => `${theme.colour.secondary}`};
  border-radius: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 1px 6px ${({ theme }) => `${theme.colour.secondary}`};
  background: ${({ theme }) => `${theme.colour.primary}`};
  outline: none;
  cursor: pointer;

  :hover {
    background: ${({ disabled, theme: { colour } }) =>
      disabled ? colour.danger : colour.accent};
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
