import styled from 'styled-components';

export const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

  span {
    display: block;
    font-weight: 600;
    font-size: 1.1rem;
    :hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
`;

export const LoginErrorMessage = styled.div`
  display: block;
  color: ${(props) => props.theme.color.error};
  margin-bottom: 10px;
`;
