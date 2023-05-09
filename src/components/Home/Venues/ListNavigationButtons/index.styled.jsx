import styled from 'styled-components';

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
