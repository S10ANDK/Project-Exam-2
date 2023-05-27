import styled from 'styled-components';
import { Form } from '../../styles/Form/index.styled';
import { StyledButtonBlue } from '../../styles/Button/index.styled';
import Container from '../../styles/Container/index.styled';
import * as S from '../../styles/Form/index.styled';

export const FormErrorMessage = styled(S.FormErrorMessage)`
  margin: 0px 0px 30px;
`;

export const ListVenueContainer = styled(Container)``;

export const ListVenueForm = styled(Form)`
  div {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea {
    margin-bottom: 20px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
    display: grid;
    width: 100%;
    grid-template-columns: 2;
    grid-template-rows: 4;
    column-gap: 120px;
  }
`;

export const SmallInputField = styled.input`
  max-width: 100px;
`;

export const PriceInput = styled.input`
  max-width: 250px;
`;

export const FormDivOne = styled.div`
  grid-row: 1;
  grid-column: 1;
`;

export const FormDivTwo = styled.div`
  grid-row: 1;
  grid-column: 2;
`;

export const FormDivThree = styled.div`
  grid-row: 3;
  grid-column: 1;
`;

export const FormDivFour = styled.div`
  grid-row: 3;
  grid-column: 2;
`;

export const CheckboxWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.color.borders};
  padding-top: 20px;
  margin-top: 20px;

  @media (min-width: 1200px) {
    border-top: none;
    margin-top: 0px;
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

export const LocationHeading = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  text-align: left;
  padding-top: 20px;
  margin: 20px 0px 30px;
  border-top: 1px solid ${(props) => props.theme.color.borders};
  grid-row: 2;
  grid-column: 1 / 3;
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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: right;
  grid-row: 4;
  grid-column: 1 / 3;
`;

export const UpdateButton = styled(StyledButtonBlue)`
  width: 100%;
  margin: 40px 20px 0px 0px;

  @media (min-width: 1200px) {
    max-width: 380px;
  }
`;

export const DeleteButton = styled(UpdateButton)`
  max-width: 100px;
  margin-right: 0px;
  background: #333;

  :hover {
    background: #1f1f1f;
  }

  @media (min-width: 1200px) {
    max-width: 140px;
  }
`;
