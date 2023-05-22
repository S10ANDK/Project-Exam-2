import React from 'react';
import Container from '../styles/Container/index.styled';
import { useParams } from 'react-router-dom';
import * as S from './index.styled';

// const navigate = useNavigate();

// const handleContinue = () => {
//   navigate('/');
// };

function BookingSuccess() {
  const { id } = useParams();

  return (
    <Container>
      <h1>Booking Successful!</h1>
      <S.IdContainer>
        <p>
          Your booking ID is: <span>{id}</span>
        </p>
      </S.IdContainer>
      <S.ButtonContainer>
        <S.ContinueButton to="/">Continue</S.ContinueButton>
      </S.ButtonContainer>
    </Container>
  );
}

export default BookingSuccess;
