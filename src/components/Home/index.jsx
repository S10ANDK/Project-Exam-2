import React from 'react';
import Container from '../styles/Container/index.styled';
import DisplayVenueList from './Venues';

function Home() {
  return (
    <Container>
      <DisplayVenueList />
    </Container>
  );
}

export default Home;
