import styled from 'styled-components';

export const SortButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin: 20px auto 0px;
  border-bottom: 1px solid ${(props) => props.theme.color.borders};
  grid-column-start: 2;

  @media (min-width: 630px) {
    justify-content: right;
    margin-top: 40px;
    max-width: 630px;
  }

  @media (min-width: 1000px) {
    border-bottom: none;
    max-width: 2400px;
    margin-right: 160px;
  }

  @media (min-width: 1400px) {
    margin-right: 38px;
  }

  button {
    width: 110px;
    font-size: 1rem;
    box-shadow: ${(props) => props.theme.boxShadow};
    margin-bottom: 40px;

    @media (min-width: 630px) {
      margin-bottom: 20px;
    }

    &.active {
      outline: 2px solid ${(props) => props.theme.color.accentTwo};
      box-shadow: ${(props) => props.theme.boxShadow};
    }
  }
`;
