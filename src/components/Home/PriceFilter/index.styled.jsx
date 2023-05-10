import styled from 'styled-components';

export const PriceFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  border-top: 1px solid ${(props) => props.theme.color.borders};
  border-bottom: 1px solid ${(props) => props.theme.color.borders};

  label:first-child {
    margin-top: 20px;
  }

  input {
    text-align: center;
    margin-left: 10px;
    width: 80px;
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  button {
    color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.boxShadow};
    background: ${(props) => props.theme.color.accentOne};
    transition: 0.3s ease-in-out;
  }

  button:hover {
    background: #4a728b;
  }
`;
