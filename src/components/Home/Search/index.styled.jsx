import styled from 'styled-components';

const StyledSearchForm = styled.form`
  display: flex;
  justify-content: center;

  @media (min-width: 940px) {
    justify-content: right;
  }

  input {
    width: 100%;
    max-width: 245px;
    height: 40px;
    margin: auto 20px;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    padding: 0px 10px;
    outline-color: ${(props) => props.theme.color.accentOne};

    @media (min-width: 1400px) {
      justify-content: right;
      max-width: 300px;
    }
  }
`;

export default StyledSearchForm;
