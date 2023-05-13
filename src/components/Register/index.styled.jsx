import styled from 'styled-components';

export const VenueManagerSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px auto 20px;
  border-top: 1px solid ${(props) => props.theme.color.borders};
  border-bottom: 1px solid ${(props) => props.theme.color.borders};

  p {
    font-size: 0.9rem;
    margin: 30px auto 20px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
  }

  label {
    margin-right: 20px;
  }

  input {
    height: 25px;
    width: 25px;
  }
`;

export const RegisterButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

  span {
    display: block;
    font-weight: 600;
    font-size: 1.1rem;
    :hover {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }
`;

export const RegistrationSuccessMessage = styled.div`
  text-align: center;
  display: block;
`;

export const RegistrationErrorMessage = styled.div`
  display: block;
  color: ${(props) => props.theme.color.secondary};
  margin-bottom: 10px;
`;
