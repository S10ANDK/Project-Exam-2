import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { API_URL, API_VENUES } from '../../auth/constants/urls';
import * as S from './index.styled';
import { useParams } from 'react-router-dom';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../../messages/ErrorMessage';
import placeholderImage from '../../../assets/placeholderImage.png';
import CloseIcon from '../../../assets/close.png';
import Star from '../../../assets/starblue.png';
import MaxGuestIcon from '../../../assets/user.png';
import LocationIcon from '../../../assets/location.png';
// import { StyledButtonRed } from '../../styles/Button/index.styled';

function GetSpecificVenue() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(
          `${API_URL}${API_VENUES}/${id}?_booking=true&_venues=true`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch venue');
        }
        const data = await response.json();
        setVenue(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchVenue();
  }, [id]);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <Helmet>
        <title>{venue ? venue.name : ''} | holidaze</title>
        <meta name="description" content={venue ? venue.description : ''} />
      </Helmet>

      {venue && (
        <S.SpecificVenueContainer>
          <S.ContentContainer>
            <S.VenueDate>
              Published: {new Date(venue.created).toUTCString()}
              {venue.updated !== venue.created &&
                ` | Updated: ${new Date(venue.updated).toGMTString()}`}
            </S.VenueDate>
            <S.ImageContainer>
              <S.Image
                isFirst
                onClick={handleImageClick}
                src={imageError ? placeholderImage : venue.media[0]}
                alt="Venue Image"
                onError={handleImageError}
              />
              {venue.media.length > 1 && (
                <S.MoreImagesIndicator>
                  +{venue.media.length - 1}
                </S.MoreImagesIndicator>
              )}
            </S.ImageContainer>
            {modalOpen && (
              <S.ModalContainer onClick={closeModal}>
                <S.ModalContent>
                  <S.ModalCloseButton onClick={closeModal}>
                    <S.ModalCloseIcon
                      src={CloseIcon}
                      alt="Close modal button"
                    />
                  </S.ModalCloseButton>
                  {venue.media.map((mediaUrl, index) => (
                    <S.ModalImage
                      key={index}
                      src={imageError ? placeholderImage : mediaUrl}
                      alt={`Image ${index + 1}`}
                      onError={handleImageError}
                    />
                  ))}
                </S.ModalContent>
              </S.ModalContainer>
            )}
            <S.venueNameAndDescriptionContainer>
              <S.VenueNameAndRatingContainer>
                <S.VenueName>{venue.name}</S.VenueName>
                <S.RatingContainer>
                  {venue.rating > 0 && (
                    <>
                      <img src={Star} alt="Star rating Icon" />
                      {venue.rating}
                    </>
                  )}
                </S.RatingContainer>
              </S.VenueNameAndRatingContainer>

              <S.DescriptionContainer>
                {venue.description}
              </S.DescriptionContainer>
            </S.venueNameAndDescriptionContainer>

            <S.maxGuestsAndPriceContainer>
              <S.MaxGuestsContainer>
                <img src={MaxGuestIcon} alt="Guests Icon" />
                {venue.maxGuests}
              </S.MaxGuestsContainer>

              <S.Price>
                {venue.price} kr NOK <span>night</span>
              </S.Price>
            </S.maxGuestsAndPriceContainer>

            <S.BookingFormContainer>
              <S.BookingForm>
                <label>Guests</label>
                <div>
                  <S.GuestInput
                    type="number"
                    min={1}
                    max={venue.maxGuests}
                    defaultValue={1}
                  />
                  <p>
                    {'//'} max {venue.maxGuests}
                  </p>
                </div>
                <label>From</label>
                <input type="date" />
                <label>To</label>
                <input type="date" />
                <S.SubmitBookingButton type="submit">
                  Book Now
                </S.SubmitBookingButton>
              </S.BookingForm>
            </S.BookingFormContainer>
            <S.LocationAndFacilitiesContainer>
              <S.FacilitiesContainer>
                <ul>
                  <li>
                    <span>Wi-Fi:</span> {venue.meta.wifi ? 'Yes' : 'No'}
                  </li>
                  <li>
                    <span>Pets:</span> {venue.meta.pets ? 'Yes' : 'No'}
                  </li>
                  <li>
                    <span>Parking:</span> {venue.meta.parking ? 'Yes' : 'No'}
                  </li>
                  <li>
                    <span>Breakfast:</span>{' '}
                    {venue.meta.breakfast ? 'Yes' : 'No'}
                  </li>
                </ul>
              </S.FacilitiesContainer>
              {venue.location.address ||
              venue.location.city ||
              venue.location.zip ||
              venue.location.country ? (
                <S.LocationContainer>
                  <img src={LocationIcon} alt="Location Icon" />
                  <div>
                    <span>
                      {venue.location.address
                        ? `${venue.location.address}, `
                        : ''}
                    </span>
                    <div>
                      {venue.location.city ? `${venue.location.city} ` : ''}
                      {venue.location.zip ? `${venue.location.zip}, ` : ''}
                    </div>
                    {venue.location.country || ''}
                  </div>
                </S.LocationContainer>
              ) : null}
            </S.LocationAndFacilitiesContainer>
          </S.ContentContainer>
        </S.SpecificVenueContainer>
      )}
    </>
  );
}

export default GetSpecificVenue;
