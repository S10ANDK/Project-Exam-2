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

export const SortButtonContainer = styled.div`
  display: flex;
`;

export const ListButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 300px;
  margin: 20px auto;
  margin-top: 100px;

  @media (min-width: 630px) {
    max-width: 600px;
  }

  @media (min-width: 1000px) {
    max-width: 950px;
  }

  @media (min-width: 1400px) {
    max-width: 1350px;
  }

  @media (min-width: 1700px) {
    max-width: 1650px;
  }

  @media (min-width: 2600px) {
    max-width: 2050px;
  }

  button {
    color: ${(props) => props.theme.color.black};
    background: ${(props) => props.theme.color.accentTwo};
    padding: 10px 20px;
    border: 1px solid ${(props) => props.theme.color.borders};
    border-radius: 5px;
    transition: 0.3s ease-in-out;

    :disabled {
      background: ${(props) => props.theme.color.borders};
    }

    :hover {
      background: #7fbbd2;
    }
  }
`;

export const NoSearchResultsMessage = styled.div`
  text-align: center;
  color: white;
  background: #8c3d2b;
  padding: 20px 0px;
  margin: 50px auto 0px;
  border-radius: 10px;
  width: 1000px;

  span {
    font-weight: bold;
  }
`;
