import React, { useState, useEffect } from 'react';
import Container from '../styles/Container/index.styled';
import { API_URL, API_BOOKINGS } from '../constants/urls';
import LoadingIndicator from '../styles/LoadingIndicator/index.styled';
import ErrorMessage from '../messages/ErrorMessage';
import { useParams } from 'react-router-dom';

const user = JSON.parse(localStorage.getItem('user'));
const accessToken = user && user.accessToken;

const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
};

function BookingSuccess() {
  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await fetch(
          `${API_URL}${API_BOOKINGS}/${id}`,
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

    fetchVenue();
  }, [id]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <Container>
      <h2>Booking Successful!</h2>
      <p>Your booking ID is: {booking.id}</p>
      <p>Guests: {booking.guests}</p>
    </Container>
  );
}

export default BookingSuccess;
