import styled from 'styled-components';
import { StyledButtonRed } from '../../styles/Button/index.styled';

export const SpecificVenueContainer = styled.div``;

export const VenueName = styled.h1`
  margin: 10px;
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 20px;
    height: 20px;
    margin-right: 2px;
  }
`;

export const MaxGuestsContainer = styled(RatingContainer)`
  img {
    width: 18px;
    height: 18px;
    margin-right: 4px;
  }
`;

export const Price = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.secondary};
  font-weight: 600;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme.color.black};
    font-weight: 400;
  }
`;

export const BookingFormContainer = styled.div`
  margin-top: 40px;
  max-width: 500px;
`;

export const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  label {
    margin: 20px 0px 10px;
  }

  input {
    text-align: center;
    height: 40px;
    margin-bottom: 10px;
    padding: 0px 10px;
  }
`;

export const GuestInput = styled.input`
  width: 100px;
`;

export const SubmitBookingButton = styled(StyledButtonRed)`
  margin-top: 30px;
  width: 100%;
`;

export const LocationAndFacilitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  border-top: 1px solid ${(props) => props.theme.color.borders};
  padding-top: 40px;
  max-width: 500px;
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;

  img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  div span {
    font-weight: 600;
  }
`;

export const FacilitiesContainer = styled.div`
  max-width: 250px;
  border: 1px solid ${(props) => props.theme.color.borders};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 20px 25px 20px 0px;

  ul li {
    margin-top: 10px;
  }

  span {
    font-weight: 600;
  }

  @media (min-width: 400px) {
    padding-right: 35px;
  }
`;

// Image and modal

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Image = styled.img`
  width: 300px;
  height: 210px;
  object-fit: cover;
  border-radius: ${({ isFirst }) => (isFirst ? '10px' : '0')};
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ isFirst }) =>
      isFirst ? '0px 0px 20px rgba(0, 0, 0, 0.3)' : 'none'};
  }

  @media (min-width: 500px) {
    width: 440px;
    height: 320px;
  }

  @media (min-width: 768px) {
    width: 500px;
    height: 370px;
  }
`;

export const MoreImagesIndicator = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  position: relative;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 20px;
  color: #555;
  background: none;
  border: none;
  cursor: pointer;
`;

export const ModalCloseIcon = styled.img`
  background-color: white;
  border-bottom-right-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

// ----------------------------
