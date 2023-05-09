import React, { useState } from 'react';
import DisplayVenueList from './Venues';
import { HomeContainer } from './index.styled';
import FilterButtons from './FilterButtons';
import SortButtons from './SortButtons';

function Home() {
  const [filters, setFilters] = useState([]);
  const [sortOrder, setSortOrder] = useState('desc');

  return (
    <HomeContainer>
      <FilterButtons filters={filters} setFilters={setFilters} />
      <SortButtons sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <DisplayVenueList filters={filters} sortOrder={sortOrder} />
    </HomeContainer>
  );
}

export default Home;
