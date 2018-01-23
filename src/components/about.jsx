import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  font-family: sans;
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(34, 34, 34, 0.5); /* #222, use theme and polished */
`;

const Modal = styled.div`
  height: 50vh;
  width: 60vw;
  border: 3px solid #222222;
  background: #444444;
  border-radius: 30px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 1px 6px #222222;
`;

const Title = styled.h1`
  margin: 0;
`;

const Middle = styled.div``;

const Bottom = styled.div``;

const BlankTargetLink = ({ to, children }) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

BlankTargetLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function About() {
  return (
    <Container>
      <Modal>
        <Title>Bubble!</Title>
        <Middle>
          <p>
            Who doesn&#39;t like popping bubble wrap?! Now you can satisfy your
            cravings wherever and whenever you desire!
          </p>
          <p>
            Built for no particular reason by&nbsp;
            <BlankTargetLink to="https://github.com/vazerthon/">
              Paul Vallis
            </BlankTargetLink>
          </p>
        </Middle>
        <Bottom>
          Graphics modified from free vector art by&nbsp;
          <BlankTargetLink to="https://www.vecteezy.com">
            Vecteezy.com
          </BlankTargetLink>
        </Bottom>
      </Modal>
    </Container>
  );
}

export default About;
