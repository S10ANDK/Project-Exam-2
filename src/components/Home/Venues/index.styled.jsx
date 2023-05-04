import styled from 'styled-components';

export const VenuesContainer = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  text-align: left;
  column-gap: 10px;
  row-gap: 60px;
  margin: 40px auto;

  @media (min-width: 630px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 940px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
