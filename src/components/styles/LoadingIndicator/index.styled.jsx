import styled from 'styled-components';

const LoadingIndicator = styled.div`
  text-align: center;
  margin: 50px auto 50px;
  border: 4px solid ${(props) => props.theme.color.secondary};
  border-radius: 20%;
  width: 15px;
  height: 15px;
  animation: rotate 1.4s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingIndicator;
