import styled from 'styled-components';

export const PriceFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;

  input {
    text-align: center;
    margin-left: 10px;
    width: 80px;
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;
