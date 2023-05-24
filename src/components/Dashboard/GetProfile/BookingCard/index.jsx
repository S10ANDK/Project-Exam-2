import React from 'react';
import * as S from './index.styled';

function BookingCard({ booking }) {
  return (
    <S.BookingCardContainer key={booking.id} to={`/booking/${booking.id}`}>
      <p>
        {booking.created} {booking.updated && booking.updated}
      </p>
      <p>{booking.id}</p>
      <p>{booking.dateFrom}</p>
      <p>{booking.dateTo}</p>
      <p>{booking.guests}</p>
    </S.BookingCardContainer>
  );
}

export default BookingCard;
