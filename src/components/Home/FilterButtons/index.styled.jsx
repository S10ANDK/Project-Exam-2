import styled from 'styled-components';

export const FilterButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (min-width: 630px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1400px) {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  button {
    font-size: 0.9rem;
    letter-spacing: 1px;
    width: 75px;
    background-color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.borders};
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.boxShadow};

    @media (min-width: 630px) {
      font-size: 1rem;
      width: 150px;
    }

    @media (min-width: 1000px) {
      width: 142px;
    }

    @media (min-width: 1400px) {
      width: 135px;
    }

    &.active {
      outline: 2px solid ${(props) => props.theme.color.accentTwo};
    }
  }
`;
