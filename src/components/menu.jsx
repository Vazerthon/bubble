import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { VolumeX, Volume2, Plus, Minus } from 'react-feather';

import MenuHandle from './menu-handle';
import Icon from './icon';

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background: #444444;
  width: 100%;
  height: 6vh;
  transform: ${({ open }) => (open ? 'none' : 'translateY(-5vh)')};
  transition: transform 0.4s ease-in-out;
`;

const MenuBar = styled.div`
  display: flex;
  flex: 1;
  padding: 8px;
  border-bottom: 3px solid #222222;
`;

const OpenCloseHandle = styled.div`
  position: fixed;
  left: calc(50vw - 2px);
  top: calc(5vh - 10px);
`;

const IconContainer = styled(Icon)`
  margin-right: 40px;
`;

const setBubblesPerRow = (min, max, action) => value =>
  value >= min && value <= max ? action(value) : () => {};

function Menu({
  open,
  toggleOpenClose,
  minBubblesPerRow,
  maxBubblesPerRow,
  bubblesPerRow,
  onBubblesPerRowChange,
  sound,
  toggleSound,
}) {
  const setter = setBubblesPerRow(
    minBubblesPerRow,
    maxBubblesPerRow,
    onBubblesPerRowChange,
  );

  const stepBubblesDown = () => setter(bubblesPerRow - minBubblesPerRow);
  const stepBubblesUp = () => setter(bubblesPerRow + minBubblesPerRow);
  return (
    <Container open={open}>
      <MenuBar>
        <IconContainer
          onClick={stepBubblesDown}
          disabled={bubblesPerRow - minBubblesPerRow < minBubblesPerRow}
        >
          <Minus />
        </IconContainer>
        <IconContainer
          onClick={stepBubblesUp}
          disabled={bubblesPerRow + minBubblesPerRow > maxBubblesPerRow}
        >
          <Plus />
        </IconContainer>
        <IconContainer onClick={toggleSound}>
          {sound ? <Volume2 /> : <VolumeX />}
        </IconContainer>
      </MenuBar>
      <OpenCloseHandle>
        <MenuHandle onClick={toggleOpenClose} />
      </OpenCloseHandle>
    </Container>
  );
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpenClose: PropTypes.func.isRequired,
  minBubblesPerRow: PropTypes.number.isRequired,
  maxBubblesPerRow: PropTypes.number.isRequired,
  bubblesPerRow: PropTypes.number.isRequired,
  onBubblesPerRowChange: PropTypes.func.isRequired,
  sound: PropTypes.bool,
  toggleSound: PropTypes.func,
};

Menu.defaultProps = {
  sound: false,
  toggleSound: () => {},
};

export default Menu;
