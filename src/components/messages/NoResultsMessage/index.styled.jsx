import styled from 'styled-components';

const NoSearchResultsMessage = styled.div`
  text-align: center;
  border: 2px solid ${(props) => props.theme.color.accentThree};
  padding: 20px;
  margin: 50px auto 0px;
  border-radius: 10px;
  height: auto;
  max-width: 1000px;
  box-shadow: ${(props) => props.theme.boxShadow};
  word-wrap: break-word;
  overflow-wrap: break-word;

  span {
    font-weight: bold;
  }
`;

export default NoSearchResultsMessage;
