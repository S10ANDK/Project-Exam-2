import styled from 'styled-components';
import { Form } from '../styles/Form/index.styled';

export const LoginForm = styled(Form)`
  margin-top: 20px;

  @media (min-width: 1200px) {
    margin-top: 50px;
  }
`;

export const LoginGreetingContainer = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: center;

  @media (min-width: 1200px) {
    border-bottom: 1px solid ${(props) => props.theme.color.borders};
  }

  p {
    padding: 0px 20px 30px;
  }
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
