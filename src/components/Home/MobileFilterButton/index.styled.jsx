import styled from 'styled-components';

export const MobileFilterButtonContainer = styled.div`
  display: block;
  text-align: center;
  margin-top: 20px;

  p {
    font-family: Serenity, sans-serif;
    font-size: 1.1rem;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MobileFilterButton = styled.button`
  background: ${(props) => props.theme.color.accentTwo};
  width: 100%;
  max-width: 300px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.color.borders};
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.07);
  border-radius: 10px;

  @media (min-width: 630px) {
    max-width: 630px;
  }
`;
