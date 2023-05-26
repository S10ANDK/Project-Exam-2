import React, { useState } from 'react';
import PlaceHolderImage from '../../../../assets/placeholderImage.png';
import * as S from './index.styled';
import GuestIcon from '../../../../assets/user.png';

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
        <S.VenueHeading>{venue.name}</S.VenueHeading>
        <S.GuestsAndPriceContainer>
          <S.GuestContainer>
            <S.GuestIcon src={GuestIcon} alt="guests icon" />
            {venue.maxGuests}
          </S.GuestContainer>
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
