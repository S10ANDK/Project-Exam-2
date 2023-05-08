import React from 'react';
// import Container from '../styles/Container/index.styled';
import DisplayVenueList from './Venues';
import { HomeContainer } from './index.styled';

function Home() {
  return (
    <HomeContainer>
      <DisplayVenueList />
    </HomeContainer>
  );
}

export default Home;
