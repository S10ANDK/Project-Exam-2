import styled from 'styled-components';

export const MobileFilterButtonContainer = styled.div`
  display: block;
  text-align: center;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MobileFilterButton = styled.button`
  background: ${(props) => props.theme.color.accentTwo};
  width: 100%;
  max-width: 300px;
  border: 1px solid ${(props) => props.theme.color.borders};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 10px;

  @media (min-width: 630px) {
    max-width: 630px;
  }
`;
