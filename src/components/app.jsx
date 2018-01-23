import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Bubbles from '../containers/bubbles';
import Menu from '../containers/menu';
import About from '../components/about';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App({ showAbout }) {
  return (
    <Container>
      <Bubbles />
      {showAbout ? <About /> : null}
      <Menu />
    </Container>
  );
}

App.propTypes = {
  showAbout: PropTypes.bool,
};

App.defaultProps = {
  showAbout: false,
};

export default App;
