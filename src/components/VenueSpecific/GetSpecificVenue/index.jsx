import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { API_URL, API_VENUES } from '../../auth/constants/urls';
import * as S from './index.styled';
import { useParams } from 'react-router-dom';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../../messages/ErrorMessage';

function GetSpecificVenue() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(
          `${API_URL}${API_VENUES}/${id}?_owner&_bookings`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch venue');
        }
        const data = await response.json();
        setVenue(data);
        setIsLoading(false);
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
        <div>
          <h1>{venue.name}</h1>
          <p>{venue.description}</p>
          <S.CarouselImage
            src={venue.media[0]}
            alt="Venue Image"
            onClick={handleImageClick}
          />
          {modalOpen && (
            <S.ModalBackdrop onClick={closeModal}>
              <S.ModalContent>
                {venue.media.map((mediaUrl, index) => (
                  <S.ModalImage
                    key={index}
                    src={mediaUrl}
                    alt={`Image ${index + 1}`}
                  />
                ))}
              </S.ModalContent>
            </S.ModalBackdrop>
          )}
        </div>
      )}
    </>
  );
}

export default GetSpecificVenue;
