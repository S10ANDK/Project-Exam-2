import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 120px;
  display: flex;
  bottom: 0;
  height: 200px;
  width: 100%;
  background: ${(props) => props.theme.color.accentOne};

  p {
    font-family: Serenity, sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${(props) => props.theme.color.white};
    text-align: center;
  }

  p span {
    display: block;
    margin-top: 10px;
  }

  @media (min-width: 1000px) {
    p span {
      display: inline;
      margin-top: 10px;
    }
  }
`;

export default StyledFooter;
