import styled from 'styled-components';
import { StyledButtonBlue } from '../../styles/Button/index.styled';

export const BookingContainer = styled.div`
  max-width: 600px;
  margin: 20px auto 0px;

  @media (min-width: 650px) {
    border: 1px solid ${(props) => props.theme.color.borders};
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.boxShadow};
    margin: 100px auto 0px;
  }
`;

export const BookingContent = styled.div`
  box-sizing: border-box;
  display: grid;
  row-gap: 10px;
  justify-content: center;
  text-align: left;
  width: 100%;
  margin: auto;
  text-align: center;

  @media (min-width: 650px) {
    padding: 30px 20px;
  }
`;

export const CreatedDate = styled.p``;

export const VenueName = styled.h1`
  margin: 10px;
`;

export const VenueImageContainer = styled.div`
  text-align: center;
`;

export const VenueImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 280px;
  border-radius: 20px;
  text-align: center;
  object-fit: cover;
`;

export const BookingID = styled.p`
  max-width: 180px;
  margin: auto;
  font-weight: 600;

  span {
    font-weight: 400;
    text-align: left;
    display: block;
    margin-top: 5px;
  }
`;

export const Guests = styled.p`
  margin-top: 10px;
`;

export const DateToAndFrom = styled.h2`
  color: ${(props) => props.theme.color.accentOne};
  font-size: 1.1rem;
  font-weight: 600;
`;

export const CostContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color.borders};
  padding: 10px 0px;
`;

export const TotalPrice = styled.p`
  border-bottom: 1px solid ${(props) => props.theme.color.borders};
  padding: 0px 0px 10px;
  width: 100%;
  span {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

export const ViewVenuePageButton = styled(StyledButtonBlue)`
  width: 100%;
  text-align: center;
  margin: auto;

  margin-top: 20px;

  @media (min-width: 650px) {
    width: 200px;
  }
`;
