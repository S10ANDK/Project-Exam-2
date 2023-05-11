import styled from 'styled-components';

export const MaxGuestsFilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  label {
    @media (min-width: 630px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      column-gap: 10px;
      text-align: center;
      margin-right: 20px;
    }

    @media (min-width: 1400px) {
      margin-top: auto;
    }
  }

  input {
    text-align: center;
    width: 86px;
    margin: 10px 10px 0px;
    box-shadow: ${(props) => props.theme.boxShadow};

    @media (min-width: 630px) {
      margin: 10px 0px 0px;
    }
  }
`;
