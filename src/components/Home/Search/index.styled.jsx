import styled from 'styled-components';

const StyledSearchForm = styled.form`
  display: flex;
  justify-content: center;
  max-width: 1000px;
  margin: auto;

  @media (min-width: 940px) {
    justify-content: left;
  }

  input {
    width: 100%;
    max-width: 300px;
    height: 40px;
    margin: 30px auto 0px;
    border: 1px solid ${(props) => props.theme.color.borders};
    padding: 0px 10px;
    box-shadow: ${(props) => props.theme.boxShadow};

    @media (min-width: 630px) {
      max-width: 630px;
    }

    @media (min-width: 1000px) {
      max-width: 500px;
    }
  }
`;

export default StyledSearchForm;
