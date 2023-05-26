import React from 'react';
import Container from '../styles/Container/index.styled';
import GetBookingSpecific from './GetBookingSpecific';

/*
  Specific Booking component for fetching a single booking, and displaying its data 
*/

function BookingSpecific() {
  return (
    <>
      <Container>
        <GetBookingSpecific />
      </Container>
    </>
  );
}

export default BookingSpecific;
