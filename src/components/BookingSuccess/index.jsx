import React from 'react';
import Container from '../styles/Container/index.styled';
import { useParams } from 'react-router-dom';

function BookingSuccess() {
  const { id } = useParams();

  return (
    <Container>
      <h2>Booking Successful!</h2>
      <p>Your booking ID is: {id}</p>
    </Container>
  );
}

export default BookingSuccess;
