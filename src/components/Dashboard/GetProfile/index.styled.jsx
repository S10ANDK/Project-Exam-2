import styled from 'styled-components';
import { StyledButtonBlue } from '../../styles/Button/index.styled';
import Container from '../../styles/Container/index.styled';

export const DashboardContainer = styled(Container)``;

export const DashboardContent = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }
`;

export const DashboardSectionOne = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DashboardSectionTwo = styled.div``;

export const LogOutButtonContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: auto;
  text-align: right;
`;

export const LogOutButton = styled.button`
  transition: 0.3s ease-in-out;

  :hover {
    background: #d7d7d7;
  }
`;

export const AvatarContainer = styled.div`
  text-align: center;
`;

export const AvatarImage = styled.img`
  display: block;
  margin: 20px auto 0px;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  cursor: pointer;
`;

export const UpdateAvatarButton = styled(StyledButtonBlue)`
  background: ${(props) => props.theme.color.primary};
  border: none;
  color: ${(props) => props.theme.color.black};
  margin-left: auto;

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

export const Username = styled.p`
  font-family: Serenity, sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
`;

export const SecondaryHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 500px;
  margin: auto;
  p {
    font-size: 1.2rem;
    font-family: Serenity, sans-serif;
    font-weight: 600;
    margin: 0;
  }
`;

export const BookingHeadingContainer = styled(SecondaryHeadingContainer)`
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid ${(props) => props.theme.color.borders};
`;

export const BookingsContainer = styled.div`
  margin: 20px auto;
`;
