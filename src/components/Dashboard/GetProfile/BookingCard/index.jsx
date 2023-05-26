import React from 'react';
import * as S from './index.styled';

function BookingCard({ booking }) {
  const dateFrom = new Date(booking.dateFrom).toLocaleDateString();
  const dateTo = new Date(booking.dateTo).toLocaleDateString();

  return (
    <S.BookingCard key={booking.id} to={`/booking/${booking.id}`}>
      <S.BookingCardContent>
        <S.VenueBookingName>{booking.venue.name}</S.VenueBookingName>
        <S.BookingId>
          Booking ID: <span>{booking.id}</span>
        </S.BookingId>
        <S.Guests>Guests: {booking.guests}</S.Guests>
        <S.Wrapper>
          <S.DateToAndFromContainer>
            From {dateFrom} to {dateTo}
          </S.DateToAndFromContainer>
          <S.ManageButton>View Booking</S.ManageButton>
        </S.Wrapper>
      </S.BookingCardContent>
    </S.BookingCard>
  );
}

export default BookingCard;
