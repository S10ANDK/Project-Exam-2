import styled from 'styled-components';

export const SortButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin: 20px auto 0px;
  border-bottom: 1px solid ${(props) => props.theme.color.borders};

  @media (min-width: 1000px) {
    border-bottom: none;
  }

  button {
    width: 145px;
    font-size: 1rem;
    box-shadow: ${(props) => props.theme.boxShadow};
    margin-bottom: 40px;

    &.active {
      outline: 2px solid ${(props) => props.theme.color.accentTwo};
      box-shadow: ${(props) => props.theme.boxShadow};
    }
  }
`;
