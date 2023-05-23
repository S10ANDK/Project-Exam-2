import styled from 'styled-components';
import { Form } from '../../styles/Form/index.styled';

export const ListVenueForm = styled(Form)`
  div {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    margin-bottom: 20px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row-reverse !important;
  align-items: center !important;
  justify-content: left;

  input {
    margin: 0px 10px 0px 0px;
    width: 18px;
    cursor: pointer;
  }
`;
