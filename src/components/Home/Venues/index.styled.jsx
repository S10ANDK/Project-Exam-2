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
    max-width: 650px;
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1000px;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 1400px;
  }

  @media (min-width: 1700px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    max-width: 1700px;
  }

  @media (min-width: 2600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    max-width: 2100px;
  }
`;
