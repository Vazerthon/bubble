import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  VolumeX,
  Volume2,
  Plus,
  Minus,
  X,
  HelpCircle,
  Zap,
  ZapOff,
} from 'react-feather';

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
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
`;

const Middle = styled.div`
  display: flex;
  flex-grow: 2; /* TODO grow less on small screens? */
  justify-content: space-around;
`;

const Right = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
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
  showAbout,
  toggleAbout,
  vibration,
  toggleVibration,
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
        <Left>
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
        </Left>
        <Middle />
        <Right>
          <IconContainer onClick={toggleVibration}>
            {vibration ? <Zap /> : <ZapOff />}
          </IconContainer>
          <IconContainer onClick={toggleAbout}>
            {showAbout ? <X /> : <HelpCircle />}
          </IconContainer>
        </Right>
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
  showAbout: PropTypes.bool,
  toggleAbout: PropTypes.func,
  vibration: PropTypes.bool,
  toggleVibration: PropTypes.func,
};

const noOp = () => {};

Menu.defaultProps = {
  sound: false,
  toggleSound: noOp,
  showAbout: false,
  toggleAbout: noOp,
  vibration: false,
  toggleVibration: noOp,
};

export default Menu;
