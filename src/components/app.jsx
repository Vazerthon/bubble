import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import PropTypes from 'prop-types';
import Bubbles from '../containers/bubbles';
import Menu from '../containers/menu';
import About from '../components/about';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ bgColour, showBackgroundColour }) =>
    showBackgroundColour ? `${transparentize(0.6, bgColour)}` : 'unset'};
  transition: background-color
    ${({ backgroundCycleTime }) => `${backgroundCycleTime}ms`};
`;

function App({
  showAbout,
  bgColour,
  showBackgroundColour,
  backgroundCycleTime,
}) {
  return (
    <Container
      bgColour={bgColour}
      showBackgroundColour={showBackgroundColour}
      backgroundCycleTime={backgroundCycleTime}
    >
      <Bubbles />
      {showAbout ? <About /> : null}
      <Menu />
    </Container>
  );
}

App.propTypes = {
  showAbout: PropTypes.bool,
  bgColour: PropTypes.string,
  showBackgroundColour: PropTypes.bool,
  backgroundCycleTime: PropTypes.number,
};

App.defaultProps = {
  showAbout: false,
  bgColour: 'unset',
  showBackgroundColour: false,
  backgroundCycleTime: 0,
};

export default App;
