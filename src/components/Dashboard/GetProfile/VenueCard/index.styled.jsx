import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledButtonBlue } from '../../../styles/Button/index.styled';

export const VenueCardContainer = styled(Link)`
  display: block;
  max-width: 500px;
  margin: 20px auto;
  border: 1px solid ${(props) => props.theme.color.borders};
  border-radius: 10px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.08);

  :hover {
    border: 1px solid #dbdbdb;
    box-shadow: 2px 3px 3px 2.5px rgba(0, 0, 0, 0.08);
  }
`;

export const VenueImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
  /* max-width: 300px; */
`;

export const VenueContent = styled.div`
  padding: 10px 20px 20px;

  @media (min-width: 600px) {
    padding: 20px 20px;
  }
`;

export const VenueHeading = styled.h2`
  margin: 0px;
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const GuestsAndPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const GuestContainer = styled.div`
  font-size: 1.05rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const GuestIcon = styled.img`
  width: 20px;
  padding-right: 5px;
`;

export const Price = styled.p`
  margin-right: 0px;
  text-align: right;
  span {
    color: ${(props) => props.theme.color.secondary};
    font-weight: 600;
  }
`;

export const ManageVenueButton = styled(StyledButtonBlue)`
  margin-top: 20px;
  width: 100%;

  @media (min-width: 600px) {
    margin-top: 30px;
  }

  @media (min-width: 1200px) {
    /* margin-right: 0px;
    max-width: 170px; */
  }
`;
