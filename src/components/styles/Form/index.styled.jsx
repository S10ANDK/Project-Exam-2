import styled from 'styled-components';

/*
  Default styles for forms
*/

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 20px auto 0px;

  label {
    margin-left: 3px;
  }

  input,
  textarea {
    margin: 10px 0px;
    padding: 0px 10px;
  }

  input {
    height: 40px;
  }

  textarea {
    padding: 10px;
  }
`;

export const FormErrorMessage = styled.p`
  font-size: 0.85rem;
  text-align: left;
  color: ${(props) => props.theme.color.error};
  margin: 0px 5px 10px;
`;
