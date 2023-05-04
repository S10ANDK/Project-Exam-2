import React, { useState } from 'react';
import * as S from './index.styled';
import placeholderImage from '../../../../assets/placeholderImage.png';
import ratingIcon from '../../../../assets/starblue.png';

const VenueCard = ({ venue }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <S.VenueCardContainer to={`/venues/${venue.id}`}>
      {venue.media.length > 0 ? (
        <S.VenueImage
          src={imageError ? placeholderImage : venue.media[0]}
          alt={venue.name}
          onError={handleImageError}
        />
      ) : (
        <S.VenueImage src={placeholderImage} alt="Placeholder Image" />
      )}
      <S.VenueCartInfoContainer>
        <S.VenueNameAndRatingContainer>
          <h2>{venue.name}</h2>
          {venue.rating > 0 && (
            <p>
              <S.RatingIconStyled src={ratingIcon} />
              {venue.rating}
            </p>
          )}
        </S.VenueNameAndRatingContainer>
        <S.descriptionContainer>
          <p>{venue.description}</p>
        </S.descriptionContainer>
      </S.VenueCartInfoContainer>
    </S.VenueCardContainer>
  );
};

export default VenueCard;
