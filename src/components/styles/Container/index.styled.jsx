import styled from 'styled-components';

/*
  Reusable container component
*/

const Container = styled.div`
  max-width: 1400px;
  min-height: 100vh;
  margin: auto 20px;

  @media (min-width: 1020px) {
    margin: auto;
  }
`;

export default Container;
