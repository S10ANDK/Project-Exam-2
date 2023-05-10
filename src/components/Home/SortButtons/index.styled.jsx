import styled from 'styled-components';

export const SortButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin: 20px auto 0px;

  button {
    width: 145px;
    font-size: 1rem;
    box-shadow: ${(props) => props.theme.boxShadow};

    &.active {
      outline: 2px solid ${(props) => props.theme.color.accentTwo};
      box-shadow: ${(props) => props.theme.boxShadow};
    }
  }
`;
