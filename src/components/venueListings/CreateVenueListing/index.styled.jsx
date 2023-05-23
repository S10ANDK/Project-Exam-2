import styled from 'styled-components';
import { Form } from '../../styles/Form/index.styled';
import { StyledButtonRed } from '../../styles/Button/index.styled';

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

export const CheckboxWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.color.borders};
  padding-top: 20px;
  margin-top: 20px;
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

export const LocationHeading = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  text-align: left;
  padding-top: 20px;
  margin: 20px 0px 30px;
  border-top: 1px solid ${(props) => props.theme.color.borders};
`;

export const AddMoreImagesHeading = styled(LocationHeading)`
  font-size: 0.9rem;
  padding-top: 0px;
  margin: 20px 0px;
  border-top: none;
  font-style: normal;
`;

export const AddMoreMediaButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 40px;
  transition: 0.3s ease-in-out;

  :hover {
    background: #ffffff;
  }
  img {
    width: 30px;
  }
`;

export const RemoveMediaButtonContainer = styled.div`
  margin-left: auto;
  margin-bottom: 10px;
`;

export const RemoveMediaButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;

  :hover {
    background: #b0b0b0;
  }

  img {
    width: 22px;
  }
`;

export const PublishButton = styled(StyledButtonRed)`
  width: 100%;
  margin-top: 10px;
`;
