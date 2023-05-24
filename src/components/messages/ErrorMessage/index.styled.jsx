import styled from 'styled-components';
import Container from '../../styles/Container/index.styled';

export const ErrorMessageContainer = styled(Container)`
  text-align: center;
  margin-top: 70px;
  color: ${(props) => props.theme.color.secondary};
`;
