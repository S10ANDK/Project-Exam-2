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

export const ListButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 300px;
  margin: 20px auto;

  @media (min-width: 768px) {
    max-width: 650px;
  }

  @media (min-width: 1000px) {
    max-width: 950px;
  }

  @media (min-width: 1200px) {
    max-width: 1150px;
  }

  @media (min-width: 1400px) {
    max-width: 1350px;
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
  }
`;

export const NextButton = styled.button`
  :hover {
    transform: translateX(3px);
  }
`;

export const PrevButton = styled.button`
  :hover {
    transform: translateX(-3px);
  }
`;
