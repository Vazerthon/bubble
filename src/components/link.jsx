import styled from 'styled-components';

const Link = styled.a`
  color: ${({ theme }) => `${theme.colour.danger}`};
  font-weight: 600;
`;

export default Link;
