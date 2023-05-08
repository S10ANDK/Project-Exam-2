import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VenueCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  /* height: 401.16px; */
  margin: auto;
  border: 1px solid ${(props) => props.theme.color.borders};
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  border-radius: 20px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.08);

  :hover {
    border: 1px solid #dbdbdb;
    box-shadow: 2px 3px 3px 2.5px rgba(0, 0, 0, 0.08);
  }
`;

export const VenueCartInfoContainer = styled.div`
  width: 260px;
  padding: 0px 20px;
  margin: 0px 20px;
`;

export const VenueImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
`;

export const VenueNameAndRatingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.1rem;

  h2 {
    font-family: Serenity, sans-serif;
    font-size: 1.4rem;
    text-align: left;
    letter-spacing: 0.5px;
    max-width: 220px;
    height: 25px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  p {
    font-size: 1.2rem;
    display: flex;
    margin-right: 0px;
    align-items: top;
    text-align: right;
  }
`;

export const RatingIconStyled = styled.img`
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-right: 3px;
  padding-left: 3px;
  transform: translateY(3px);
`;

export const DescriptionContainer = styled.div`
  width: 100%;

  height: 60px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  padding-bottom: 10px;
`;

export const NoDescriptionMessage = styled.p`
  font-style: italic;
`;

export const GuestsAndPriceContainer = styled.div`
  width: 100%;
  max-width: 260px;
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GuestsContainer = styled.div`
  p {
    font-size: 1.2rem;
  }

  p img {
    width: 20px;
    height: 20px;
    object-fit: cover;
    margin-right: 3px;
    transform: translateY(2px);
  }
`;

export const PriceContainer = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;
