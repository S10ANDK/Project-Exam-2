import React, { useEffect, useState } from 'react';
import Container from '../styles/Container/index.styled';
import { useParams, useNavigate } from 'react-router-dom';
import * as S from './index.styled';
import { Helmet } from 'react-helmet-async';

/*
  Booking Success component
*/

function BookingSuccess() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          navigate(`/booking/${id}`);
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [id, navigate]);

  return (
    <>
      <Helmet>
        <title>booking success | holidaze</title>
        <meta name="description" content="Booking success page" />
      </Helmet>

      <Container>
        <h1>booking successful!</h1>
        <S.RedirectionContainer>
          <p>
            You will be redirected to your booking details in {countdown}{' '}
            seconds.
          </p>
        </S.RedirectionContainer>
      </Container>
    </>
  );
}

export default BookingSuccess;
