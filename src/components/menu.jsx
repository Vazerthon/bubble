import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  MdVibration,
  MdSmartphone,
  MdVolumeMute,
  MdVolumeUp,
  MdAdd,
  MdRemove,
  MdInvertColors,
  MdInvertColorsOff,
  MdRefresh,
} from 'react-icons/lib/md';

import MenuHandle from './menu-handle';
import Icon from './icon';

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  background: ${({ theme }) => `${theme.colour.primary}`};
  width: 100%;
  height: 6vh;
  transform: ${({ open }) => (open ? 'none' : 'translateY(-5vh)')};
  transition: transform 0.4s ease-in-out;
`;

const Footer = styled.div`
  display: flex;
  font-size: ${({ theme }) => `${theme.font.regular}`};
  position: fixed;
  bottom: 0;
  background: ${({ theme }) => `${theme.colour.primary}`};
  width: 100%;
  height: 6vh;
  transform: ${({ open }) => (open ? 'none' : 'translateY(6vh)')};
  transition: transform 0.4s ease-in-out;
`;

const borderCss = position => theme =>
  `border-${position}: 3px solid ${theme.colour.secondary}`;

const MenuBar = styled.div`
  display: flex;
  flex: 1;
  padding: 8px;
  ${({ border, theme }) => border(theme)};
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
  left: calc(50vw - 20px);
  top: calc(5vh - 10px);
`;

const IconContainer = styled(Icon)`
  margin-right: 40px;
`;

const About = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;

  :hover {
    background: ${({ theme: { colour } }) => colour.accent};
  }
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
  showBackgroundColour,
  toggleShowBackgroundColour,
  bubbleCount,
  poppedCount,
}) {
  const setter = setBubblesPerRow(
    minBubblesPerRow,
    maxBubblesPerRow,
    onBubblesPerRowChange,
  );

  const stepBubblesDown = () => setter(bubblesPerRow - minBubblesPerRow);
  const stepBubblesUp = () => setter(bubblesPerRow + minBubblesPerRow);
  const reset = () => setter(bubblesPerRow);
  return (
    <Container>
      <Header open={open}>
        <MenuBar border={borderCss('bottom')}>
          <Left>
            <IconContainer
              onClick={stepBubblesDown}
              disabled={bubblesPerRow - minBubblesPerRow < minBubblesPerRow}
            >
              <MdRemove size={20} />
            </IconContainer>
            <IconContainer
              onClick={stepBubblesUp}
              disabled={bubblesPerRow + minBubblesPerRow > maxBubblesPerRow}
            >
              <MdAdd size={20} />
            </IconContainer>
            <IconContainer onClick={toggleSound}>
              {sound ? <MdVolumeUp size={20} /> : <MdVolumeMute size={20} />}
            </IconContainer>
          </Left>
          <Middle />
          <Right>
            <IconContainer onClick={toggleVibration}>
              {vibration ? (
                <MdVibration size={20} />
              ) : (
                <MdSmartphone size={20} />
              )}
            </IconContainer>
            <IconContainer onClick={toggleShowBackgroundColour}>
              {showBackgroundColour ? (
                <MdInvertColors size={20} />
              ) : (
                <MdInvertColorsOff size={20} />
              )}
            </IconContainer>
            <IconContainer onClick={reset}>
              <MdRefresh size={20} />
            </IconContainer>
          </Right>
        </MenuBar>
        <OpenCloseHandle>
          <MenuHandle onClick={toggleOpenClose} />
        </OpenCloseHandle>
      </Header>
      <Footer open={open}>
        <MenuBar border={borderCss('top')}>
          <Left />
          <Middle>
            Popped {poppedCount} of {bubbleCount}
          </Middle>
          <Right>
            <About onClick={toggleAbout}>{showAbout ? 'Close' : 'About'}</About>
          </Right>
        </MenuBar>
      </Footer>
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
  showBackgroundColour: PropTypes.bool,
  toggleShowBackgroundColour: PropTypes.func,
  bubbleCount: PropTypes.number,
  poppedCount: PropTypes.number,
};

const noOp = () => {};

Menu.defaultProps = {
  sound: false,
  toggleSound: noOp,
  showAbout: false,
  toggleAbout: noOp,
  vibration: false,
  toggleVibration: noOp,
  showBackgroundColour: false,
  toggleShowBackgroundColour: noOp,
  bubbleCount: 0,
  poppedCount: 0,
};

export default Menu;
