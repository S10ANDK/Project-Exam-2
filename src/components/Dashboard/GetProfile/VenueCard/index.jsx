import React, { useState } from 'react';
import PlaceHolderImage from '../../../../assets/placeholderImage.png';
import * as S from './index.styled';

function VenueCard({ venue }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <S.VenueCardContainer key={venue.id} to={`/venues/${venue.id}`}>
      <p>{venue.name}</p>
      <S.VenueImage
        src={imageError ? PlaceHolderImage : venue.media[0]}
        alt={`image of ${venue.name}`}
        onError={handleImageError}
      />
      <p>{venue.price}</p>
      <p>{venue.maxGuests}</p>
    </S.VenueCardContainer>
  );
}

export default VenueCard;
