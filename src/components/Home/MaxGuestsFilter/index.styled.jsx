import styled from 'styled-components';

export const MaxGuestsFilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  input {
    text-align: center;
    width: 60px;
    margin-left: 10px;
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;
