import React, { useState, useEffect } from 'react';
import Container from '../../styles/Container/index.styled';
import { API_URL, API_BOOKINGS } from '../../constants/urls';
import * as S from '../../Dashboard/GetProfile/BookingCard/index.styled';
import { useParams, Link } from 'react-router-dom';
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
        console.log(data);
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
    <Container>
      <p>Booking made on {dateCreated}</p>
      <h1>{booking.venue.name}</h1>
      <img src={booking.venue.media[0]} />
      <p>Booking ID: {booking.id}</p>
      <p>Guests: {booking.guests}</p>
      <S.DateToAndFromContainer>
        From {dateFrom} to {dateTo}
      </S.DateToAndFromContainer>
      <p>{booking.venue.price} kr NOK night</p>
      <p>Nights: {nights}</p>
      <p>Total price: {totalPrice}</p>
      <Link to={`/venues/${booking.venue.id}`}>Venue page</Link>
    </Container>
  );
}

export default GetBookingSpecific;
