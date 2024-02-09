import React, { useState } from 'react';
import * as S from './index.styled';
import placeholderImage from '../../../../assets/placeholderImage.png';
import ratingIcon from '../../../../assets/starblue.png';
import guestIcon from '../../../../assets/user.png';
import breakfastIcon from '../../../../assets/breakfast_icon.png';
import breakfastTrueIcon from '../../../../assets/breakfast_black.png';
import petsIcon from '../../../../assets/pets.png';
import petsTrueIcon from '../../../../assets/pets_black.png';
import parkingIcon from '../../../../assets/parking.png';
import parkingTrueIcon from '../../../../assets/parking_black.png';
import wifiIcon from '../../../../assets/wifi.png';
import wifiTrueIcon from '../../../../assets/wifi_black.png';
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

        {venue.meta.pets === false ? (
          <S.MetaIcon src={petsIcon} alt="No Pets Allowed" />
        ) : (
          <S.MetaIcon src={petsTrueIcon} alt="Pets Allowed" />
        )}
        {venue.meta.wifi === false ? (
          <S.MetaIcon src={wifiIcon} alt="No Wifi Available" />
        ) : (
          <S.MetaIcon src={wifiTrueIcon} alt="Wifi Available" />
        )}
        {venue.meta.breakfast === false ? (
          <S.MetaIcon src={breakfastIcon} alt="No Breakfast Available" />
        ) : (
          <S.MetaIcon src={breakfastTrueIcon} alt="Breakfast Available" />
        )}
        {venue.meta.parking === false ? (
          <S.MetaIcon src={parkingIcon} alt="No Parking Available" />
        ) : (
          <S.MetaIcon src={parkingTrueIcon} alt="Parking Available" />
        )}

        {/* <S.DescriptionContainer>
          {venue.description.length ? (
            <p>{venue.description}</p>
          ) : (
            <S.NoDescriptionMessage>
              No description provided..
            </S.NoDescriptionMessage>
          )}
        </S.DescriptionContainer> */}
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
