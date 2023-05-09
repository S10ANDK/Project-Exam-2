import React, { useState } from 'react';
import * as S from './index.styled';
import placeholderImage from '../../../../assets/placeholderImage.png';
import ratingIcon from '../../../../assets/starblue.png';
import guestIcon from '../../../../assets/user.png';
import { VenueCardContainerFadeIn } from '../../../styles/FadeInContainer/index.styled';

/*
  Component template for each unique venue in the venue list 
*/

const VenueCard = ({ venue }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <VenueCardContainerFadeIn to={`/venues/${venue.id}`}>
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
              <S.RatingIconStyled src={ratingIcon} alt="Rating icon" />
              {venue.rating}
            </p>
          )}
        </S.VenueNameAndRatingContainer>

        <S.DescriptionContainer>
          {venue.description.length ? (
            <p>{venue.description}</p>
          ) : (
            <S.NoDescriptionMessage>
              No description provided..
            </S.NoDescriptionMessage>
          )}
        </S.DescriptionContainer>
      </S.VenueCartInfoContainer>
      <S.GuestsAndPriceContainer>
        <S.GuestsContainer>
          <p>
            <img src={guestIcon} alt="Guest icon" />
            {venue.maxGuests}
          </p>
        </S.GuestsContainer>
        <S.PriceContainer>{venue.price} kr NOK</S.PriceContainer>
      </S.GuestsAndPriceContainer>
    </VenueCardContainerFadeIn>
  );
};

export default VenueCard;
