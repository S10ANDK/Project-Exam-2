import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IdContainer = styled.div`
  text-align: center;

  p span {
    margin-top: 10px;
    font-size: 1.1rem;
    display: block;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const ContinueButton = styled(Link)`
  padding: 10px 20px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  background: ${(props) => props.theme.color.accentOne};
  color: ${(props) => props.theme.color.white} !important;

  :hover {
    background: #4a728b;
  }
`;
