import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import * as S from './index.styled';
import Container from '../../styles/Container/index.styled';
import { API_URL, API_BOOKINGS } from '../../constants/urls';
import { useParams, useNavigate } from 'react-router-dom';
import accessToken from '../../api/localStorage/accessToken';
import LoadingIndicator from '../../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../../messages/ErrorMessage';
import { differenceInDays } from 'date-fns';

const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
};

/*
  Specific Booking component for fetching a single booking, and displaying its data 
*/

function GetBookingSpecific() {
  const { id } = useParams();
  const [booking, setBooking] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);
  const navigate = useNavigate();

  const dateCreated = new Date(booking.created).toGMTString();
  const dateFrom = new Date(booking.dateFrom).toLocaleDateString();
  const dateTo = new Date(booking.dateTo).toLocaleDateString();

  useEffect(() => {
    if (dateFrom && dateTo && booking.venue) {
      const nights = differenceInDays(
        new Date(booking.dateTo),
        new Date(booking.dateFrom)
      );
      setNights(nights);
      const price = nights * booking.venue.price;
      setTotalPrice(price);
    }
  }, [dateFrom, dateTo, booking.venue]);

  useEffect(() => {
    const fetchSpecificBooking = async () => {
      try {
        const response = await fetch(
          `${API_URL}${API_BOOKINGS}/${id}?_customer=true&_venue=true`,
          options
        );
        if (!response.ok) {
          throw new Error('Failed to fetch booking');
        }
        const data = await response.json();
        setBooking(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchSpecificBooking();
  }, [id]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <Helmet>
        <title>booking on {booking.venue.name} | holidaze</title>
        <meta
          name="description"
          content={`"Your booking on ${booking.venue.name}"`}
        />
      </Helmet>
      <Container>
        <S.BookingContainer>
          <S.BookingContent>
            <S.CreatedDate>Booking made on {dateCreated}</S.CreatedDate>
            <S.VenueName>{booking.venue.name}</S.VenueName>
            <S.VenueImageContainer>
              <S.VenueImage src={booking.venue.media[0]} />
            </S.VenueImageContainer>
            <S.BookingID>
              Booking ID: <span>{booking.id}</span>
            </S.BookingID>
            <S.Guests>Guests: {booking.guests}</S.Guests>
            <S.DateToAndFrom>
              From {dateFrom} to {dateTo}
            </S.DateToAndFrom>
            <S.CostContainer>
              <p>
                {booking.venue.price} kr NOK | night x {nights}
              </p>
            </S.CostContainer>
            <S.TotalPrice>
              Total price: <span>{totalPrice} kr NOK</span>
            </S.TotalPrice>
            <S.ViewVenuePageButton
              onClick={() => navigate(`/venues/${booking.venue.id}`)}
            >
              View Venue Page
            </S.ViewVenuePageButton>
          </S.BookingContent>
        </S.BookingContainer>
      </Container>
    </>
  );
}

export default GetBookingSpecific;
