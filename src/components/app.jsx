import React from 'react';
import styled from 'styled-components';
import Bubbles from '../containers/bubbles';
import Menu from '../containers/menu';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  return (
    <Container>
      <Bubbles />
      <Menu />
    </Container>
  );
}

export default App;
