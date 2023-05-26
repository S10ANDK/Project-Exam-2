import React, { useState } from 'react';
import PlaceHolderImage from '../../../../assets/placeholderImage.png';
import * as S from './index.styled';
import GuestIcon from '../../../../assets/user.png';
import RatingIcon from '../../../../assets/starblue.png';

/*
  Card component for Venues
*/

function VenueCard({ venue }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <S.VenueCardContainer key={venue.id} to={`/venues/${venue.id}`}>
      {venue.media && venue.media.length > 0 ? (
        <S.VenueImage
          src={imageError ? PlaceHolderImage : venue.media[0]}
          alt={`image of ${venue.name}`}
          onError={handleImageError}
        />
      ) : (
        <S.VenueImage
          src={PlaceHolderImage}
          alt={`image of ${venue.name}`}
          onError={handleImageError}
        />
      )}
      <S.VenueContent>
        <S.HeadingAndRatingContainer>
          <S.VenueHeading>{venue.name}</S.VenueHeading>
          <S.IconContainer>
            <S.RatingIcon src={RatingIcon} alt="Rating icon" />
            {venue.rating}
          </S.IconContainer>
        </S.HeadingAndRatingContainer>
        <S.GuestsAndPriceContainer>
          <S.IconContainer>
            <S.GuestIcon src={GuestIcon} alt="Guests icon" />
            {venue.maxGuests}
          </S.IconContainer>
          <S.Price>
            <span>{venue.price} kr NOK</span> night
          </S.Price>
        </S.GuestsAndPriceContainer>
        <S.ManageVenueButton>Manage venue</S.ManageVenueButton>
      </S.VenueContent>
    </S.VenueCardContainer>
  );
}

export default VenueCard;
