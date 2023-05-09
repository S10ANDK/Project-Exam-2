import React, { useState } from 'react';
import DisplayVenueList from './Venues';
import { HomeContainer } from './index.styled';
import FilterButtons from './FilterButtons';

function Home() {
  const [filters, setFilters] = useState([]);

  return (
    <HomeContainer>
      <FilterButtons filters={filters} setFilters={setFilters} />
      <DisplayVenueList filters={filters} />
    </HomeContainer>
  );
}

export default Home;
