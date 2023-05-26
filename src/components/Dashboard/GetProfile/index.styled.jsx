import styled from 'styled-components';
import { StyledButtonBlue } from '../../styles/Button/index.styled';
import { Link } from 'react-router-dom';

export const Heading = styled.h1`
  border-bottom: 1px solid ${(props) => props.theme.color.borders};
  padding-bottom: 60px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const DashboardContent = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }
`;

export const DashboardSectionOne = styled.div`
  @media (min-width: 550px) {
    width: 100%;
  }
`;

export const DashboardSectionTwo = styled.div`
  width: 100%;
`;

export const UserDetailsContainer = styled.div`
  text-align: center;
  margin: auto;
  max-width: 500px;

  > * {
    margin: 20px;
    letter-spacing: 0.9px;
  }
`;

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
  font-family: Open Sans, sans-serif;
  font-size: 0.9rem;
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
  font-size: 1.5rem;
  font-weight: 600;
`;

export const SecondaryHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  margin: auto;

  padding-top: 20px;
  margin-top: 30px;
  border-top: 1px solid ${(props) => props.theme.color.borders};

  p {
    font-size: 1.2rem;
    font-family: Serenity, sans-serif;
    font-weight: 600;
    margin: 0;
  }
`;

export const VenueHeadingContainer = styled(SecondaryHeadingContainer)`
  margin-top: 40px;
  @media (min-width: 1200px) {
    margin-top: 20px;
    border-top: none;
  }
`;

export const StyledLink = styled(Link)`
  font-family: Serenity, sans-serif;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
  color: ${(props) => props.theme.color.secondary} !important;

  :hover {
    text-decoration: underline;
  }
`;

export const BookingsContainer = styled.div`
  margin: 20px auto;
`;

export const DashboardMessageContainer = styled.div`
  max-width: 500px;
  margin: 10px auto 0px;
  border: 1px solid ${(props) => props.theme.color.borders};
  border-radius: 5px;
`;

export const DashboardMessage = styled.p`
  padding: 20px 20px;
`;
