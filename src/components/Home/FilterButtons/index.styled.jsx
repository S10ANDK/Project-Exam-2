import styled from 'styled-components';

export const FilterButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  button {
    width: 75px;
    height: 35px;
    background-color: ${(props) => props.theme.color.white};
    border: 1px solid ${(props) => props.theme.color.borders};
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.boxShadow};

    &.active {
      outline: 2px solid ${(props) => props.theme.color.accentTwo};
      font-weight: 600;
    }
  }
`;

export const MaxGuestsFilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  input {
    text-align: center;
    width: 50px;
    margin-left: 10px;
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;
