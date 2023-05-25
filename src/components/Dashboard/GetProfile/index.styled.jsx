import styled from 'styled-components';
import { StyledButtonBlue } from '../../styles/Button/index.styled';

export const LogOutButton = styled.button``;

export const AvatarImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  cursor: pointer;
`;

export const UpdateAvatarButton = styled(StyledButtonBlue)`
  background: ${(props) => props.theme.color.primary};
  border: none;
  color: ${(props) => props.theme.color.black};

  :hover {
    background: ${(props) => props.theme.color.primary};
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  width: 300px;
  max-width: 80%;
  z-index: 1000;
  border-radius: 12px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: transparent;
  border: none;
  font-size: 1.2em;
  cursor: pointer;

  img {
    width: 25px;
  }
`;

export const ModalHeading = styled.h2`
  margin-top: 20px;
`;

export const StyledInput = styled.input`
  padding: 5px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
  flex-grow: 1;
`;

export const SubmitButton = styled(StyledButtonBlue)`
  margin-top: 10px;
  width: 100%;
`;

export const RemoveAvatarButton = styled(SubmitButton)`
  color: ${(props) => props.theme.color.black};
  background: ${(props) => props.theme.color.borders};

  :hover {
    background: #d7d7d7;
  }
`;

export const BookingsContainer = styled.div`
  margin: 40px auto;
`;
