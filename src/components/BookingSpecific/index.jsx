import React from 'react';
import Container from '../styles/Container/index.styled';
import { Helmet } from 'react-helmet-async';
import GetBookingSpecific from './GetBookingSpecific';

/*
  Specific Booking component for fetching a single booking, and displaying its data 
*/

function BookingSpecific() {
  return (
    <>
      <Helmet>
        <title>booking success | holidaze</title>
        <meta name="description" content="Booking success page" />
      </Helmet>
      <Container>
        <GetBookingSpecific />
      </Container>
    </>
  );
}

export default BookingSpecific;
