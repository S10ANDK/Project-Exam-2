import styled from 'styled-components';

export const FilterButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;

  button {
    :focus {
      border: 2px solid red;
    }
  }
`;

export const MaxGuestsFilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  input {
    width: 50px;
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;
