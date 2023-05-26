import styled from 'styled-components';

/*
  Default styles for buttons
*/

export const StyledButtonRed = styled.button`
  background: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.white};
  transition: 0.3s ease-in-out;
  width: 150px;

  @media (min-width: 1000px) {
    :hover {
      background: #b93950;
    }
  }
`;

export const StyledButtonBlue = styled(StyledButtonRed)`
  background: ${(props) => props.theme.color.accentOne};

  @media (min-width: 1000px) {
    :hover {
      background: #4a728b;
    }
  }
`;
