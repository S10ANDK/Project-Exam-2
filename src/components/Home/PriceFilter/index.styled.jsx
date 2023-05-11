import styled from 'styled-components';

export const PriceFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  border-top: 1px solid ${(props) => props.theme.color.borders};

  @media (min-width: 630px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: none;
  }

  label:first-child {
    margin-top: 20px;

    @media (min-width: 630px) {
      margin-top: 0px;
    }

    @media (min-width: 1400px) {
      margin-top: auto;
    }
  }

  label {
    @media (min-width: 630px) {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    @media (min-width: 1400px) {
      margin-top: auto;
    }
  }

  input {
    text-align: center;
    margin-left: 10px;
    width: 80px;
    box-shadow: ${(props) => props.theme.boxShadow};
    @media (min-width: 630px) {
      margin-top: 10px;
      width: 150px;
    }
  }

  button {
    color: ${(props) => props.theme.color.white};
    box-shadow: ${(props) => props.theme.boxShadow};
    background: ${(props) => props.theme.color.accentOne};
    transition: 0.3s ease-in-out;

    @media (min-width: 630px) {
      width: 105px;
      margin-top: auto;
    }

    @media (min-width: 675px) {
      width: 145px;
    }
  }

  button:hover {
    background: #4a728b;
  }
`;
