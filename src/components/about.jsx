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
  background: ${({ theme }) => `${theme.colour.secondary02}`};
`;

const Modal = styled.div`
  height: 50vh;
  width: 60vw;
  border: 3px solid ${({ theme }) => `${theme.colour.secondary}`};
  background: ${({ theme }) => `${theme.colour.primary}`};
  color: ${({ theme }) => `${theme.colour.highlight}`};
  border-radius: 30px;
  padding: ${({ theme }) => `${theme.layout.padding}`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 1px 6px ${({ theme }) => `${theme.colour.secondary}`};
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
`;

const Middle = styled.div`
  font-size: ${({ theme }) => `${theme.font.regular}`};
`;

const Bottom = styled.div`
  font-size: ${({ theme }) => `${theme.font.small}`};
`;

const Link = styled.a`
  color: ${({ theme }) => `${theme.colour.danger}`};
  font-weight: 600;
`;

const BlankTargetLink = ({ to, children }) => (
  <Link href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
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
          Who doesn&#39;t like popping bubble wrap?! Now you can satisfy your
          cravings wherever and whenever you desire!
        </Middle>
        <Bottom>
          <p>
            Graphics modified from free vector art by{' '}
            <BlankTargetLink to="https://www.vecteezy.com">
              Vecteezy.com
            </BlankTargetLink>
          </p>
          <p>
            Copyright 2018{' '}
            <BlankTargetLink to="https://github.com/vazerthon/">
              Paul Vallis.
            </BlankTargetLink>{' '}
            <BlankTargetLink to="https://github.com/Vazerthon/bubble/blob/master/LICENSE">
              Apache License 2.0
            </BlankTargetLink>
          </p>
        </Bottom>
      </Modal>
    </Container>
  );
}

export default About;
