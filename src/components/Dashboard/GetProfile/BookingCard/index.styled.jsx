import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButtonBlue } from '../../../styles/Button/index.styled';

export const BookingCard = styled(Link)`
  display: block;
  max-width: 500px;
  margin: 0px auto 20px;
  border: 1px solid ${(props) => props.theme.color.borders};
  border-radius: 10px;
  padding: 0px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.08);

  :hover {
    border: 1px solid #dbdbdb;
    box-shadow: 2px 3px 3px 2.5px rgba(0, 0, 0, 0.08);
  }

  @media (min-width: 550px) {
    min-width: 500px;
  }
`;

export const BookingCardContent = styled.div`
  padding: 10px 20px 20px;
`;

export const BookingId = styled.p`
  font-size: 0.9rem;
  @media (min-width: 550px) {
    margin-top: 20px;
  }
`;

export const VenueBookingName = styled.h2`
  font-weight: 600;
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const Guests = styled.p`
  font-size: 0.9rem;
  margin-top: 10px;
`;

export const Wrapper = styled.div`
  @media (min-width: 550px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
  }
`;

export const DateToAndFromContainer = styled.h2`
  text-align: left;
  color: ${(props) => props.theme.color.accentOne};
  font-size: 1.1rem;
  font-weight: 600;
`;

export const ManageButton = styled(StyledButtonBlue)`
  width: 100%;

  @media (min-width: 550px) {
    width: 170px;
  }
`;
